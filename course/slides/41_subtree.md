<div class="title-icon" style="background-image: url(/course/assets/icons/subtree.svg)"></div>
## Subtree

``git subtree``<!-- .element: class="code-highlight"--> lets nest one **repository** inside another **as a sub-directory**

```console
git subtree split --prefix=<path> -b <branchName>
```
<small>Available from v1.7.11</small>

Note:
```
// examples/subtree
- Split project
git subtree split --prefix=lib -b split
git push lib split:master

git subtree add --prefix=lib lib master --squash
// show last commit
git cat-file -p HEAD
// pull changes
git subtree pull -P lib lib master --squash

git push root@localhost:/srv/git/subtree-math split:master
git checkout -
git branch -df split
// in git server math repo
git log --oneline
// create local math repo
cd playground-math
echo "version 0.3" > version.txt
git commit -am '[=] add release 0.3
git push
// git main playground
git subtree pull -P lib/math root@localhost:/srv/git/math.git master --squash
echo 'version 0.4' > lib/stat/version.txt
git commit -am 'stat release 0.4'
git subtree push -P lib/math root@localhost:/srv/git/math.git master
// git playground-math
git pull
```
[link 1](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree)
[link 2](https://gist.github.com/kvnsmth/4688345)