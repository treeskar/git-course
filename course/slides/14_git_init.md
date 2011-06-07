## ``git init``

<pre class="hljs delphi">
.git
&#9500;&#9472;&#9472; <strong>HEAD</strong>
&#9500;&#9472;&#9472; config
&#9500;&#9472;&#9472; description
&#9500;&#9472;&#9472; hooks
&#9500;&#9472;&#9472; info
&#9500;&#9472;&#9472; <strong>index</strong>
&#9500;&#9472;&#9472; <strong>objects</strong>
&#9492;&#9472;&#9472; <strong>refs</strong>
</pre>

Note:
/examples 
git init

* config - contains your project-specific configuration options
* description - used by GitWeb program
* HEAD - points (symbolic link) to the branch you currently have checked out
* hooks - contains your client- or server-side hook scripts
* index - stage area
* info - keeps a global exclude file for ignored patterns that you don’t want to track in a .gitignore
* objects - stores all the content for your database
* refs - stores pointers into commit objects in that data (branches, tags, remotes and more)
