<div class="title-icon" style="background-image: url(/course/assets/icons/dna.svg)"></div>
## Ancestry References

These **references** allow us to **specify** a commit is via its **ancestry**

``^``<!-- .element: class="code-highlight"--> , ``~``<!-- .element: class="code-highlight"--> , ``..``<!-- .element: class="code-highlight"--> , ``...`` <!-- .element: class="code-highlight"--> 

```
git show task-matomo..HEAD~3^2~3^2~1
```

Note:
^2 - second parent of current commit (useful in merge commit)
~2 equivalent to ^^^
you can combine HEAD~2^2^
- **^** - parent of this commit
- **~** - parent of this commit
- master**..**feature - commit range reachable from feature but not from master
- master**...**feature - all commits that reachable ether of them but not both
