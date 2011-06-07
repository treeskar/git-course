<div class="title-icon" style="background-image: url(/course/assets/icons/amend.svg)"></div>
## Changing the Last Commit

``git commit --amend``<!-- .element: class="code-highlight"--> **replaces last** commit with your **new**, improved commit

Note:
```
// example/rebase-interactive
// explain about to-do file
git lg // pay attention on last commit hash
git commit --amend --allow-empty
// add [+] EDIT: main module
git lg
git rebase -i HEAD~5
// reorder and squash to user module
// split user module commit to view and service
// use exec 'x'
```