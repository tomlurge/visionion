	OPEN

	when you open a file you are in COMMAND MODE
	to edit you have to enter INSERT mode first. hit

		a		to start editing after the cursor
		i		to start editing at the cursor

	now you're in INSERT mode and can hack away on the file happily. indulge into the myriad of VIM commands to eventually, probably get super hyper productive, or start typing your thing right now, using arrow and enter keys like in any normal text processor.


	CUT & PASTE

		->	position the cursor where you want to begin cutting.
		ESC	hit ESC to leave INSERT mode
		v	press v to enter VISUAL mode
			(or uppercase V to select whole lines)
		->	Move the cursor to the end of what you want to cut.
		d	Press d to cut
		y	(or y to copy).
		->	Move to where you would like to paste.
		p	Press P to paste before the cursor or p to paste after

	hit 'i' or 'a' to continue editing


	MOVE CURSOR in command mode
			k
		h   l	in normal mode left down up right
			j


	QUIT

	to save and/or quit VIM you must enter COMMAND MODE again
	hit ESC to enter COMMAND MODE. then type

		:q		quit - this fails when the file has been modified
		:q!		quit wthout saving
		:w		write file to disk
		:wq		write and quit
		:wq!		write and quit forceibly



	ANOTHER HOWTO

		i		enter insert mode - also schreiben
		esc		leave insert mode, re-enter normal mode (vim starts in normal mode)
		ZZ		in normal mode write and exit the file (ZZ in grossbuchstaben)
			k
		h   l	in normal mode links runter hoch rechts
			j
		x		in normal mode deletes the character under the cursor
		dd		in normal mode deletes the whole line
		http://vimdoc.sourceforge.net/htmldoc/usr_02.html