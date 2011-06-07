<div class="head-image">
    <span style="background-image: url(/course/assets/memo/merge.gif); width: 400px; height: 160px; background-position: top"></span>
</div>

``git merge`` <!-- .element: class="code-highlight"--> command takes the **independent lines of development** created by git branch and **integrate** them **into a single branch**

```
git merge master
```


## Fast-forward merge

It will **just shift** the **HEAD**

![fast-forward merge](/course/assets/basic-branching-3.png) <!-- .element: class="transparent-image" style="width: 650px" -->

Note:
```
// example merge-ff
git lg --all
git merge issue53
git lg --all
```


## Merging strategies

``git merge``<!-- .element: class="code-highlight"--> strategies:

* Recursive **(basic merge)**
* Octopus
* Ours
* Subtree
* Resolve
* yours?


### Recursive strategy

Integrates **two** diverged **branches**

![Basic merge 1](/course/assets/basic-merging-1.png) <!-- .element: class="fragment fade-out hide transparent-image" style="width: 650px" -->
![Basic merge 2](/course/assets/basic-merging-2.png) <!-- .element: class="fragment fade-in transparent-image" style="width: 650px" -->

Note:
three-way merge algorithm
if algorithm can't find a common ancestor, then it create new one with the tree.
```
// git merge --squash

git checkout -b feat-1
vi lib/log/index.js
...
module.exports = function log(msg) {
    console.log(msg);
}
...
git commit -am '[+] basic log module'
git checkout -
echo '# Log module' > lib/log/README.md
git add *
git commit -m '[+] add readme file to log module'
git merge feat-1
// recursive strategy
git cat-file -p HEAD
git show <parent1 hash>
git show <parent2 hash>
git branch -d feat-1
```


## Octopus Strategy

Integrate **any number** of non-conflicting **branches** with a **single merge commit**

![Octopus Strategy](/course/assets/octopus-merge.svg) <!-- .element: class="transparent-image" style="width: 500px" -->

Note:
```
git checkout -b feat-1
echo 'version 0.1' > lib/log/version.txt
git add *
git commit -m '[+] add version to log md'
git checkout -
git checkout -b feat-2
vi lib/log/index.js
...
module.exports = functions log(msg='')
...
git commit -am '[*] support default params in log func'
git checkout -
git checkout -b feat-3
vi lib/log/README.md
...
## Usage 
log('log message');
...
git commit -am '[*] add usage example to log module'
git checkout -
git merge feat-1 feat-2 feat-3
// octopus strategy
git cat-file -p HEAD
// 3 parents
```


## Ours merge strategy

Records a merge, but skips incoming changes

![Octopus Strategy](/course/assets/ours-merge.svg) <!-- .element: class="transparent-image" style="width: 600px" -->


## Subtree Strategy

It allows you to **merge** another **repository** into your own, but **into** its own **subdirectory**

Note: 
```
//exp merge-subtree
cd lib
git remote get-url origin
cd ../main
git remote add -f lib <lib-origin-url>
git checkout -b lib lib/master
ll
git checkout -
git read-tree --prefix=lib/ -u lib
git commit -m '[+] add lib project'
cd ../lib
echo '// max' > max.js
git add *
git commit '[+] add max function'
git push
cd ../main
git checkout lib
git pull
git checkout -
git merge --allow-unrelated-histories -s subtree lib

// Resolve strategy
http://web.archive.org/web/20110911184425/http://www.tommymorgan.com/2011/04/git-merge-fails-with-fatal-git-write.html
```


<div class="title-icon" style="background-image: url(/course/assets/icons/q_and_a.svg)"></div>
# Q&A