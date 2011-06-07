<div class="title-icon" style="background-image: url(/course/assets/icons/pack.svg)"></div>
## Packfiles

Git saves objects on disk is called a **"loose" object** format. However, occasionally Git **packs** up several of these objects **into a single binary file** called a **"packfile"** in order to save space and be more efficient.

Note:
```
examples/packfile
ls -lha .git/objects
ls -lha .git/objects/pack/
git verify-pack -v <pack name>.idx
----------------------------------------
// create big file
for i in {1..99999}; do echo "line $i\n"; done > log.txt
ls -lha
// put attention on .git directory size
git add l*
git commit -m 'add log file'
ls -lha
// size increased
git ls-tree -r HEAD
git cat-file -s <log.txt blob hash>
echo 'line 000\n' >> log.txt
git diff HEAD
git add l*
git commit -m 'add new line to log'
ls -lha
git cat-file -p HEAD^{tree}
git cat-file -s <log.txt blob hash>
// show objects directory
ls -lha .git/objects
// Garbage collector
git gc

// set up configuration
npm run build:server:git
npm run server:git
// go to repository and set up ssh config
git config core.sshCommand "ssh -i ~/Projects/gitCourse/id_rsa -p <port>"
git remote add origin root@localhost:/srv/git/demo.git
git push origin master
// Git stores the value you last pushed to that remote for each branch in the refs/remotes directory
cat .git/refs/remotes/origin/master

// git add remote origin 
git tag -a v0.2 HEAD -m 'version 0.2'
git show-ref v0.2
// cat .git/refs/tags/v0.2
git cat-file -p <tag-hash>
// as you see I am on specific commit
```
