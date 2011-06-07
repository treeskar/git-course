<div class="title-icon" style="background-image: url(/course/assets/icons/ignore.svg)"></div>
## .gitignore

A gitignore file specifies intentionally untracked files that Git should ignore.
**Files already tracked** by Git are **not affected**

Note:
```
// you must untrack the file before
git rm --cached FILENAME
```


### PATTERN FORMAT (pathspecs)

```
# Blank lines or lines starting with # are ignored.
*~
/dist
.idea/
#ignore all .o or .a files
*.[oa]
# but do track lib.a, even though you're ignoring .a files above
!lib.a
#ignore all .a1 or .b2 files
*.?[0-9]
#ignore src/notes.txt, but not src/server/notes.txt
src/*.txt
# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
```


## Nested ``.gitignore``
The rules in these **nested** ``.gitignore``<!-- .element: class="code-highlight"-->  files **apply** only to the files **under** the **directory** where they are located


## Global ``.gitignore``

You can create a **global** ``.gitignore``<!-- .element: class="code-highlight"-->  file, which is a list of rules for **ignoring files** in **every** Git **repository**

```
git config --global core.excludesfile ~/.gitignore_global
```


## .git/info/exclude 

Keeps a **global** exclude file for **ignored patterns** that you don't want to track in a .gitignore


## gitignore.io

You can also use [gitignore.io](https://www.gitignore.io/) to create a ``.gitignore``<!-- .element: class="code-highlight"--> file

Note:
got to gitignore.io
create gitignore file for macos, webstorm, Node