<div class="title-icon" style="background-image: url(/course/assets/icons/blame.svg)"></div>
## Blame

``git-blame``<!-- .element: class="code-highlight"--> - shows what revision and author last modified each line of a file

```
git blame README.md
```

Note:
// examples/blame
git blame README.md
git blame -L 4,6 README.md
git blame -C README.md