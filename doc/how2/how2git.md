	git
	git status
	git add FILE/DIR          // works recursively
	git commit -m "comment"   // comment is mandatory
	git log
	git show-branch --more=10


### These commands create a new repository and add all content in the current directory to it:

	$ git init
	$ git add .
	$ git commit -m 'Begin Project Foo!'

	git commit -a // will automatically notice any modified (but not new) files, 
								// add them to the index, and commit, all in one step
	http://www.kernel.org/pub/software/scm/git/docs/gittutorial.html

### STEP 0:	git init
	
	creates .git directory in the root of the project
	everything git goes in there (also subdirectiries stuff)

### STEP 1:	git add	...

	git add filename      // adds a new file to the index
	                      // or updates the index about an already added file
	git add file1 file2 file3
	git add .             // adds everything in the current dir recursively
	git ignore ..         // excludes files from the index
	
	git add -p filename   // (p for patch) adds only a certain
	                      // subset of changes made to a file
	
	git reset             // undoes any additions since the last commit

### STEP 2:	git commit ...

	git commit -m 'why i did this'
	git diff -staged      // show changes between current index and last commit
	git diff              // (without "-staged") shows unstaged changes
		                    // (the differnce between working tree and index)

### STEP 3:	git push filenemae



### .gitignore
	
	# no .a files
	*.a
	# but do track lib.a, even though ignoring .a files above
	!lib.a
	# only ignore the root TODO file, not subdir/TODO
	/TODO
	# ignore all files in the build/ directory
	build/
	# ignore doc/notes.txt, but not doc/server/arch.txt
	doc/*.txt
	# ignore all .txt files in the doc/ directory
	doc/**/*.txt
	
	# see https://github.com/github/gitignore


### nice mergetool with git

	mt = mergetool -t opendiff








