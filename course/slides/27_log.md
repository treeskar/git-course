<div class="title-icon" style="background-image: url(/course/assets/icons/history.svg)"></div>
## Log

The most basic and powerful tool to **view commit history** this is the ``git log`` <!-- .element: class="code-highlight"--> command

```
git log --pretty=format:"%h %s" --graph
```

Note:
```
// to got tms project
git log -p/--patch -2
git log --stat
git log --pretty=format:short
git log --pretty=format:"%h %s" --graph
git log --pretty=oneline
// %h hash, %s commit message, %ar author relative date
git log --oneline --pretty=format:"%h %ar %s" --graph
// add lg alias
git config alias.lg
git config --local alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)'"
```


<div class="title-icon" style="background-image: url(/course/assets/icons/filter.svg)"></div>
## Limiting Log Output

``git log``<!-- .element: class="code-highlight"--> takes a number of useful **limiting** options

```
// example tms
git log --author=alex* --since=2.minutes --all-match -5
```

Note:
```
git lg -1
git log --skip 1
git log feature2..feater1
git commit --allow-empty -m 'empty commit'
git log --since=2.minutes
git log --until=2.minutes
git log --after="15 minutes"
// show diff in log
git log -p -2
Search by author ```git log --author=alex*```
Search by commit message ```git log --grep=update
Search by diff ```git log -S "function name"```
limit by directory or file ```git log -- location
// --after or --before
git log --since=2.minutes
git log --until=2.minutes
// --committer
git log --author=alex*
// grep
git log -S "version" --grep=0.2 --all-match
git log -S 0.1 --no-merges
// limit by location
git log -- lib
// inline search 
git log -L :sum:lib/math/sum.js
// "add" search param
git log -S "version" --grep=0.2 --all-match
// shortlog
git shortlog
git shortlog -n
git shortlog -s -n
```