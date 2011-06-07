<div class="title-icon" style="background-image: url(/course/assets/icons/cherry.svg)"></div>
## Cherry-Picking

``git cherry-pick`` <!-- .element: class="code-highlight"--> takes the **patch** that was introduced in a commit and tries to **reapply** it on the branch you're currently on.

```
git cherry-pick <hash>
```

Note:
// examples/rebase-onto
// take one commit from server branch and apply on master
git cherry-pick <hash>