<div class="title-icon" style="background-image: url(/course/assets/icons/rebase.svg)"></div>
## Rebase

``git rebase``<!-- .element: class="code-highlight"--> command, **takes** all the **changes** that were committed on one branch and **replay them** on another one.


## ``git rebase master``

![rebase](/course/assets/rebase.svg) <!-- .element: class="transparent-image" style="width: 650px" -->

Note:
// examples/rebase
// I'll tell my story after I heard yours
// git rebase --onto master server client
- find common ancestor
- create patch, saves in tmp file
- reset current branch to rebase one
- apply changes one by one

At the end when you want to merge your work, it would be just simple fast forward merge with linear history
```
git rebase --onto master server client
```


## ``git rebase --onto``

![rebase](/course/assets/rebase-onto.svg) <!-- .element: class="transparent-image" style="width: 650px" -->

```
git rebase --onto master server client
```

Note:
```
// examples/rebase-onto
git checkout client
git rebase --onto master server client
git checkout master
git merge client
```