<div class="title-icon" style="background-image: url(/course/assets/icons/modules.svg)"></div>
## Submodules

Submodules allows you to **attach** an **external repository** inside another repository at a specific path

```console
git add submodule <url>
```

Note:
```
// examples/submodules
git submodule add git://localhost:3232/merge/lib
// clone project
// git clone --recurse-submodules git://localhost:3232/submodules
cat .gitmodules
git config --local -l
tree .git/modules
cd lib
git remote set-url origin root@localhost:/srv/git/merge/lib
git config --local core.sshCommand "ssh -i  ~/Projects/gitCourse/ssh/id_rsa -p 3231"
vi version.txt // update version
cd ../
git status
git config status.submodulesummary 1
git status
// run foreach command per submodule
// git submodule foreach 'git checkout -b feature1'
// fetch update for all submodules
// git submodule update --remote --merge/--rebase
// Push submodules
git push --recurse-submodules=on-demand

git status
git diff --cached --submodule
git commit

// clone project with submodules
git clone <url>
git submodule init
git submodule update

git clone --recurse-submodules <url> 

// update submodule
cd docker-git
git fetch
git merge origin/master

// other way git automatically update the module from master branch
git submodule update --remote <project name>

// or we can set different branch in submodule config file
git config -f .gitmodules submodule.<name>.branch stable

git config status.submodulesummary 1

// push submodule changes
git checkout -b demo
// commit changes
echo '# Sub module readme' > README.md
git add *
git commit -m 'sub module readme'
git push --recurse-submodules=check origin demo
// show on server the changes
// server tab
git ls-tree -r demo
// you can set recurseSubmodules check to all pushes
git config push.recurseSubmodules check

// submodule foreach
git submodule foreach 'git stash'
git submodule foreach 'git checkout -b featureA'
```
[link](https://medium.com/@porteneuve/mastering-git-submodules-34c65e940407)