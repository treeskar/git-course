<div class="title-icon" style="background-image: url(/course/assets/icons/replace.svg)"></div>
## Replace commit

The ``git replace``<!-- .element: class="code-highlight"--> command lets you specify an object in Git and say "every time you **refer** to this object, **pretend** it's a different object.

```console
git replace -d <hash>
```

Note:
```
// example/replace
// squash 
git lg
git cat-file -p hash
git checkout -b squash <hash>
git reset HEAD~4
git add *
git commit -am 'squash'
git checkout -
git replace <hash> squash
// git commit-tree <hash>^{tree} -p parentCommit -m 'some message'
git replace --format=long
git replace -d <hash>
```