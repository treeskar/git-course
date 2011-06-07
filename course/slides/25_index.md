<div class="title-icon" style="background-image: url(/course/assets/icons/bucket.svg)"></div>
## .git/index

Stores your **staging area** information

```
git ls-files -s
```

Note:
```
git status
// short status
git status -s
// view all tracked files
git ls-files -s
echo 'version 0.2' > version.txt
// view modified files
git ls-files -m

git add *.txt
//  interactive stage
git add -i
// revert the file
git echo 'version 0.3' >> version.txt
git add -i
// patch version.txt
git diff --cached
git reset version.txt
git add -p version.txt
```


<div class="title-icon" style="background-size: 60px; background-image: url(/course/assets/icons/remove.svg)"></div>
## Removing files

``git rm``<!-- .element: class="code-highlight"--> stages the file's removal

```
git rm <filename>
```

Note:
```
echo '# Readme' > readme.md
git add readme.md
git commit -m '[+] add readme file'
rm readme.md
git status
git reset --hard HEAD
git rm readme.md
git reset --hard HEAD
// remove file from stage
git rm --cached readme.md
// git clean -f - remove untracked files
```


<div class="title-icon" style="background-size: 60px; background-image: url(/course/assets/icons/move.svg)"></div>
## Moving file

Git **doesn't** explicitly **track file movement**. If you rename a file in Git, no metadata is stored in Git that tells it you renamed the file.

```
git mv <oldname> <newname>
```

Note:
```
// shortcut
mv README.md README
git rm README.md
git add README
```