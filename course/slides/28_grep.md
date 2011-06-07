<div class="title-icon" style="background-image: url(/course/assets/icons/search-text.svg)"></div>
## Grep

``git grep``<!-- .element: class="code-highlight"-->  command has a few **advantages over** normal **searching grep** commands:

* <div>It's really **fast**</div> <!-- .element: class="fragment fade-up" -->
* <div>You can search through **any tree** in Git</div> <!-- .element: class="fragment fade-up" -->

Note:
```
// examples/blame
By default search in working directory
// -n : show line number
// -c, --count: summarize result
// -p : display context
git grep --break --heading -n -e "0" --and -e "2"
git grep -P "^v.*n 0\.[0-9]"
```
```
git grep "^gi.*-``"
```
