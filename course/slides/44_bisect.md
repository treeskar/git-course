<div class="title-icon" style="background-image: url(/course/assets/icons/bug-search.svg)"></div>
## Binary Search

``git bisect``<!-- .element: class="code-highlight"--> performs a **binary search** to **find** the commit that introduced a **bug**

```
git bisect start
git bisect bad // current version is bad
git bisect good v0.1 // v0.1 is known to be good
```

Note:
```
// run bisect
git bisect start
git bisect bad HEAD
git bisect good v0.1
...
// run bisect with run option
git bisect start HEAD v0.1

git bisect run mocha **/*.spec.js
```