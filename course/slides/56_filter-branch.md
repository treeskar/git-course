<div class="title-icon" style="background-image: url(/course/assets/icons/code.svg)"></div>
## Scripted rewrite

You can use ``filter-branch``<!-- .element: class="code-highlight"--> if you need to **rewrite** a larger number of commits in **scriptable** way

```console
git filter-branch --tree-filter 'rm -f *~' HEAD --all
```


## Filter types of **filter-branch**

Types of possible filters to specify how to rewrite history

<div style="display: flex; justify-content: space-evenly;">
    <ul>
        <li>--env-filter</li>
        <li>--tree-filter</li>
        <li>--index-filter</li>
        <li>--parent-filter</li>
    </ul>
    <ul>
        <li>--msg-filter</li>
        <li>--commit-filter</li>
        <li>--tag-name-filter</li>
        <li>--subdirectory-filter</li>
    </ul>
</div>

Note:
```
// example/filter-branch
// Rewriting the tree and its contents
git filter-branch --tree-filter 'rm -f password.pem' HEAD --all
git lg --all
git filter-branch -f
git lg --all

sh ../script/rename-author.sh
git lg --all
```

<!-- 
## **BFG** Repo-Cleaner

The [BFG](https://rtyley.github.io/bfg-repo-cleaner) is a simpler, faster **alternative** to ``git-filter-branch``<!-- .element: class="code-highlight"--> for cleansing bad data out of your Git repository history

```
bfg --delete-files password.pem
``` -->
