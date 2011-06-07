<div class="title-icon" style="background-image: url(/course/assets/icons/reset.svg)"></div>
## Reset
``git reset``<!-- .element: class="code-highlight"--> current HEAD to the specified state

* soft <!-- .element: class="fragment fade-up" -->
* mixed <!-- .element: class="fragment fade-up" -->
* hard <!-- .element: class="fragment fade-up" -->


## Three Trees of Git

![git areas](/course/assets/git-areas.png) <!-- .element: class="transparent-image"-->

Note:
https://media.giphy.com/media/sChf4Eo55W8x2/giphy.mp4


## Reset Soft

![git areas](/course/assets/reset-soft.png) <!-- .element: class="transparent-image" style="height: 400px"-->

```console
git reset --soft HEAD~
```

Note:
```
// use examples/merge-ff
// squash example
git log --oneline
git reset --soft HEAD~3
git commit -m '[+] squash commit'
```


## Reset Mixed

![git areas](/course/assets/reset-mixed.png) <!-- .element: class="transparent-image" style="height: 400px"-->

```console
git reset [--mixed] HEAD~
```


## Reset Hard

![git areas](/course/assets/reset-hard.png) <!-- .element: class="transparent-image" style="height: 400px"-->

```console
git reset --hard HEAD~
```

Note:
```
cat .git/index
git ls-files -s

// git reset with patch
git reset -- version.txt
git checkout -b iss54
echo 'version 0.3' > version.txt
git reset --hard master

// git reset file level affects on stage
// --soft, --mixed, and --hard flags do not have any effect on the file-level 
git reset HEAD~2 version.txt
// git checkout file level affects on working directory
git checkout HEAD~2 version.txt
```
