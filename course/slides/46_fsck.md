<div class="title-icon" style="background-image: url(/course/assets/icons/verified.svg)"></div>
## **F**ile **S**ystem **C**hec**K**

``git fsck``<!-- .element: class="code-highlight"-->  **verifies** the connectivity and validity of the **objects** in the database

```
git fsck
```

Note:
```
// example/reflog
git checkout master
git branch -D recover
rm -rf .git/logs/
// find dangling commit
git fsck --full
// git fsck --unreachable | grep commit
git checkout -b recover <lost hash>
ll
```
