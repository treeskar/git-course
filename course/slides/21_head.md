<div class="title-icon" style="background-image: url(/course/assets/icons/head.svg)"></div>
## .git/HEAD

Points (**symbolic** link) to the branch you currently have checked out

Note:
```
cat .git/HEAD
// or actual hash
git checkout <hash>
// detach head
git symbolic-ref HEAD
git rev-parse HEAD
git show-ref refs/heads/master
// cat .git/HEAD
```