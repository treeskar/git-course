<div class="title-icon" style="background-image: url(/course/assets/icons/reflog.svg)"></div>
## .git/logs

``git reflog``<!-- .element: class="code-highlight"--> - a **log** of where your **HEAD and branch references** have been for the last few months.

> **Reflog** information is **strictly local**

Note:
```
// examples/reflog
// git log -g
git reflog
git show HEAD@{2}
// show feature.js file
ll
git checkout -
git branch -D feature
ll
git reflog
// HEAD@{2.month.ago} 
git branch feature HEAD@{1}
git checkout feature
ll
```