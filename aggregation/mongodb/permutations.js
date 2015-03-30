/**
 * Created by tl on 13.01.15.
 */

/*	the goal: generate disRoleFlags (factsRow.md line 68) programmatically

	roles:	gueard middle exit directory
	flags:	fast stable fast+stable (for g, m, e) authority (for d)


	disRoleFlags

		generate powerset of GMED
			//http://codereview.stackexchange.com/a/7042
			function getCombinations(chars) {
				var result = [];
				var f = function(prefix, chars) {
					for (var i = 0; i < chars.length; i++) {
						result.push(prefix + chars[i]);
						f(prefix + chars[i], chars.slice(i + 1));
					}
				}
				f('', chars);
				return result;
			}
		add appropriate flags
			GME: none, f, s, fs
			D: none, a
			combinations of GME and D: accordingly
		result: an array of 70 strings, called a70

		generate distinctive tests
			ask for the given criteria
			and non of the other criterias

				for each aX in a70
					add test "that.role &&"
					for each R in GMED
						if R in aX
							if R === G
								add "that.role.indexOf("Guard") > -1" test
							if R === M
								add "that.role.indexOf("Middle") > -1" test
							 if R === E
								add "that.role.indexOf("Exit") > -1" test
							 if R === D
								add "that.role.indexOf("Dir") > -1" test
						else
							if R === G
								add "that.role.indexOf("Guard") > -1" test
							if R === M
								add "that.role.indexOf("Middle") > -1" test
							if R === E
								add "that.role.indexOf("Exit") > -1" test
							if R === D
								add "that.role.indexOf("Dir") > -1" test
						if !(a70[a70.length-1] == R) add "&&"
					for each f in fsa
						if f in aX
							if f === Fast
								add "that.flag.indexOf("Fast") > -1" test
							if f === Stable
								add "that.flag.indexOf("Fast") > -1" test
							if f === Authority
								add "that.flag.indexOf("Fast") > -1" test
						else
							if f === Fast
								add "that.flag.indexOf("Fast") === -1" test
							if f === Stable
								add "that.flag.indexOf("Fast") === -1" test
							if f === Authority
								add "that.flag.indexOf("Fast") === -1" test
						if !(a70[a70.length-1] == f) add "&&"



	array roles	[ G, M, E, D ]
	array flags.GME [ "", f, s ]
	array flags.GMED [ "", f, s, a ]
	array flags.D [ "", a ]


	input roles[...]
	rolesResult = []
		if roles.length > 1
			copy roles (combined) to rolesResult
			take role[0] from roles
			name it "primus"
			copy primus to rolesResult
			for 0 < x < roles(rest).length              // take away x elements
				for 0 <= y < roles(rest).length         // from position
					copy x elements from position y on	// + hande overflow
					combine them with priumus
					and add that to rolesResult[]
		if roles.length = 1
			copy roles to result[]
			return
		else
			return

	for each element in rolesResult[]
		if element !contains D
			flags = flags.GME
		 if element is D
			flags = flags.D
		if element contains D && G || M || E
			flags = flags.GMED







 */



