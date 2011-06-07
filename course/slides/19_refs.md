<div class="title-icon" style="background-image: url(/course/assets/icons/refs.svg)"></div>
## .git/refs/

A reference is simply a file stored somewhere in .git/refs, containing the **hash** of a **object**

Note:
```
// examples/demo
tree .git/refs
cat .git/refs/heads/master
```


## Git refs structure

<pre class="hljs delphi">
.git/refs
&#9500;&#9472;&#9472; heads
&#9500;&#9472;&#9472; tags
&#9500;&#9472;&#9472; remotes
</pre>


## .git/refs/heads 

Defines all of the **local branches** in you repository
```
git branch <localBranchName>
```

Note:
```
cat .git/refs/heads/master
git cat-file -p <hash>
// lets create new refs
git update-ref refs/heads/feature-1 <hash>
git checkout feature-1
git rev-parse feature-1
git show-ref refs/heads/feature-1
// we just created a new branch
git branch feature-2 master
// I can write just, it means use HEAD as a entry point
git branch feature-2
git branch -D feature-2
git branch
// --no-merged, -a all, -r remotes
git branch --merged master
// get list of all refs
git for-each-ref
cat version.txt
```


## .git/refs/remotes

The remotes directory **lists** all **remote repositories** that you created with git remote **as separate subdirectories**

Note:
```
// examples/remotes
// set up configuration
git remote add origin -f root@localhost:/srv/git/demo.git

// explain about git shortcut git push origin from:to
git push origin refs/head/master:refs/head/master
git push origin feature1:master
// delete remote branch
git push origin :master
git push origin --delete master

// Git stores the value you last pushed to that remote for each branch in the refs/remotes directory
// remote ref doesn't moved (changed) by user
cat .git/refs/remotes/origin/master
// show remote branches
git ls-remote
```


## Refspec

A **refspec** tells git how to **map references** from a **remote** to the **local** repo.

```
fetch = +refs/heads/*:refs/remotes/origin/*
```

Note:
```
cat .git/config
```
...
[remote "origin"]
	url = root@localhost:/srv/git/demo.git
	fetch = +refs/heads/*:refs/remotes/origin/*
...
```
from:to
# git update-ref refs/heads/featureA <hash>
```


## Tracking Branches

Tracking branches are **local** branches that **have** a direct **relationship** to a **remote** branch

```
git branch -u origin/master
```

Note:
```
git push
// set upstream to existing branch
git branch -u origin/master
cat .git/config
// create branch and set upstream
git checkout -b feature3 origin/master
git push
// [branch "feature3"]
git branch -vv // viewing tracking branches
```
