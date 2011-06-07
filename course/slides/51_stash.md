<div class="title-icon" style="background-image: url(/course/assets/icons/stash.svg)"></div>
## Stashing you work

``git stash``<!-- .element: class="code-highlight"--> **takes the dirty state** of your working directory - that is, your **modified tracked** files and staged changes - and **saves it** on a stack of unfinished changes that **you can reapply** at any time

```console
git stash
```

Note:
```
// examples/reflog
git stash
git stash list
git stash apply
git stash drop stash@{0}
// git stash pop = git stash apply && git stash drop

// git stash --include-untracked
git stash -u

// create branch from stash
git stash branch issue-4
// save stash
.git/refs/stash
git ls-tree refs/stash^{tree}
git cat-file -p <hash>
```
