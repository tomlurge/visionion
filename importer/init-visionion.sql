-- The statuses table contains one row per network status entry and hour.
CREATE TABLE statuses (

  -- ID for the combined entry about a relay or bridge at a given hour.
  -- Example: '0000000000000000000000000000000000000000-1-2010101010'
  -- (length: 53).
  _id CHARACTER(53) NOT NULL,

  -- Relay fingerprint or hashed bridge fingerprint.
  fingerprint CHARACTER(40) NOT NULL,

  -- Reference to server descriptor fields that are not contained in the
  -- network status.
  descriptor CHARACTER(40) NOT NULL,

  -- Nickname
  nickname CHARACTER VARYING(19) NOT NULL,

  -- Consensus valid-after time or bridge status publication time,
  -- truncated at start of the hour.
  published TIMESTAMP WITHOUT TIME ZONE NOT NULL,

  -- Publication hour, formatted 'YYYY-MM-DD-HH'.
  publishedhour CHARACTER(13) NOT NULL,

  -- String describing a JSON array of strings for roles that this node
  -- can have in the network.  For example: '["Bridge"]' or
  -- '["Guard","Middle","Exit","Dir"]' (length: 31).
  nodetype CHARACTER VARYING(42) NOT NULL,

  -- String describing a JSON array of strings for relay flags.  Example:
  -- '"Authority","BadExit","Exit","Fast","Guard","HSDir","Named",\
  -- "Running","Stable","Unnamed","V2Dir","Valid"]' (length: 105).
  flags CHARACTER VARYING(142),

  -- Consensus weight fraction, only present for running relays.
  cwf DOUBLE PRECISION,

  -- Guard probability, only present for relays having the Guard flag.
  pg DOUBLE PRECISION,

  -- Middle probability, only present for relays.
  pm DOUBLE PRECISION,

  -- Exit probability, only present for relays having the Exit flag.
  pe DOUBLE PRECISION,

  -- Autonomous System Number, only present for relays that can be found
  -- in MaxMind's ASN database.
  asn INTEGER,

  -- String describing a JSON array of integers for TCP ports that this
  -- relay permits exiting to.  Example: '[80,443]'.  Unknown length.
  ports TEXT,

  -- Two letter upper-case country code, only present for relays that can
  -- be found in MaxMind's Country database.
  country CHARACTER(2),

  -- Whether this bridge is running in Amazon's EC2 cloud, that is, if
  -- this bridge's nickname starts with 'ec2bridge'.
  ec2bridge BOOLEAN
);

-- The descriptors table contains one row per relay or bridge server
-- descriptor.
CREATE TABLE descriptors (

  -- Descriptor identifier used to reference server descriptor fields from
  -- network status.
  descriptor CHARACTER(40) NOT NULL,

  -- Extra-info descriptor identifier used to reference bridge transport
  -- names, only present if the relay or bridge published an extra-info
  -- descriptor.
  extrainfo CHARACTER(40),

  -- Advertised bandwidth in bytes per second.  This is simply the minimum
  -- of average, burst, and observed bandwidth.  Can be missing if the
  -- descriptor doesn't contain this information, though that would be
  -- quite unusual.
  advertised BIGINT,

  -- Tor software version as 3-character string, e.g., 023 for 0.2.3.x.,
  -- only present if version information is included in the status entry.
  software CHARACTER(3),

  -- Normalized operating system string, which can be one of 'linux',
  -- 'darwin', 'freebsd', 'windows', or 'other'.
  osnorm CHARACTER VARYING(7)
);

-- The extrainfos table only contains information about bridge transport
-- names.  We further extract bandwidth information from extra-info
-- descriptors, but we put those into the bandwidth table.
CREATE TABLE extrainfos (

  -- Extra-info descriptor identifier used to reference rows in this table
  -- from the descriptors table.
  extrainfo CHARACTER(40),

  -- String describing a JSON array of strings for transport names, e.g.,
  -- '["obfs2","obfs3"]'.
  transports CHARACTER VARYING(42)
);

-- The assignments table contains normalized pool assignment information
-- for bridges.
CREATE TABLE assignments (

  -- Hashed bridge fingerprint.
  fingerprint CHARACTER(40) NOT NULL,

  -- Bridge pool assignment publication time, truncated at start of the
  -- hour.
  published TIMESTAMP WITHOUT TIME ZONE NOT NULL,

  -- Normalized bridge pool name, which can be one of 'email', 'https', or
  -- 'other'.
  poolnorm CHARACTER VARYING(5)
);

-- The history table contains sums of written and read bytes in an
-- interval of 15 minutes or less.
CREATE TABLE bandwidth (

  -- Relay fingerprint or hashed bridge fingerprint.
  fingerprint CHARACTER(40) NOT NULL,

  -- History interval end, truncated at start of the hour.
  published TIMESTAMP WITHOUT TIME ZONE NOT NULL,

  -- History interval end, this time not truncated at the start of the
  -- hour.  The published column is used to find all bandwidth rows for a
  -- given relay or bridge, and the intervalend column is used to filter
  -- out duplicate bandwidth values during that hour.
  intervalend TIMESTAMP WITHOUT TIME ZONE NOT NULL,

  -- Sum of written and read bytes during this interval.
  bytes BIGINT NOT NULL,

  -- Number of seconds in this interval.
  seconds BIGINT NOT NULL
);

-- Aggregate raw bandwidth values, so that they can be joined more easily.
CREATE VIEW bandwidthhour AS
SELECT
  fingerprint,
  published,
  CAST(SUM(bytes) / SUM(seconds) AS BIGINT) AS consumed
FROM (
  SELECT
    fingerprint,
    published,
    intervalend,
    MAX(bytes) AS bytes,
    MAX(seconds) AS seconds
  FROM bandwidth
  GROUP BY fingerprint, published, intervalend) b
GROUP BY fingerprint, published;

-- Join everything we know about a relay or bridge at a given hour.
CREATE VIEW joined AS SELECT
  statuses._id,
  statuses.fingerprint AS nid,
  statuses.nickname AS nick,
  statuses.publishedhour AS _date,
  1 AS span,
  100 AS uptime,
  statuses.nodetype AS _type,
  statuses.flags AS flag,
  descriptors.advertised AS bwa,
  bandwidthhour.consumed AS bwc,
  descriptors.software AS tsv,
  descriptors.osnorm AS osn,
  statuses.cwf,
  statuses.pg,
  statuses.pm,
  statuses.pe,
  statuses.asn AS _as,
  statuses.ports AS pex,
  statuses.country AS cc,
  assignments.poolnorm AS ba,
  statuses.ec2bridge AS bez,
  extrainfos.transports AS bpt
FROM statuses
LEFT JOIN descriptors
ON statuses.descriptor = descriptors.descriptor
LEFT JOIN extrainfos
ON descriptors.extrainfo = extrainfos.extrainfo
LEFT JOIN assignments
ON statuses.fingerprint = assignments.fingerprint
AND statuses.published = assignments.published
LEFT JOIN bandwidthhour
ON statuses.fingerprint = bandwidthhour.fingerprint
AND statuses.published = bandwidthhour.published;

