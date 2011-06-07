<div class="title-icon" style="background-image: url(/course/assets/icons/interactive.svg)"></div>
## Interactive rebase

``git rebase -i``<!-- .element: class="code-highlight"--> can be used for changing commits in many ways such as **editing**, **deleting**, **reordering**, **splitting**, and **squashing**.

Note:
```
examples/rebase-interactive
// oldest at the top, rather than the newest, because that’s the first one it will replay
// reorder commit - change order in editor
// remove - just delete the line
// squash - change pick to squash
// splitting - put edit, then git reset HEAD^, create two separate commits and then run git rebase --continue
```