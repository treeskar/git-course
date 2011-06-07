<div class="title-icon" style="background-image: url(/course/assets/icons/revert.svg)"></div>
## Revert Commit

``git revert`` <!-- .element: class="code-highlight"--> makes a **new commit** which **undoes** all the **changes** from an existing one.

```console
git revert -m 1 HEAD
```

Note:
```
// examples/merging-recursive
// revert update version 0.2
// -m 1 indicates the main line that we want to keep
git revert -m 1 HEAD
```