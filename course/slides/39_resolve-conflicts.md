<!-- .element: data-background-image="/course/assets/memo/merge-conflict-comming.jpg" data-background-position="right bottom" data-background-size="contain" data-background-color="#fff" -->


<div class="title-icon" style="background-image: url(/course/assets/icons/conflict.svg)"></div>
## Resolve **merge conflicts**

Merge **conflicts happen** when you **merge** branches that have **competing commits**, and Git needs your help to decide which changes to incorporate in the final merge


<div class="title-icon" style="background-image: url(/course/assets/icons/reuse.svg)"></div>
## Rerere

``rerere``<!-- .element: class="code-highlight"--> stands for "**re**use **re**corded **re**solution" - it's a way of **shortcutting manual conflict resolution**

```
git config --local rerere.enabled true
```

Note:
```
// examples/rerere
git config --local rerere.enabled true
// or you can create a folder in .git/rr-cache
git merge feature
// no we get the conflict
// see commit that create the conflict
git log --online --left-right --merge
// resolve conflict
git rerere status
// git commit -a
git reset --hard HEAD^
git merge feature
```