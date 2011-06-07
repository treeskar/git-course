<div class="title-icon" style="background-image: url(/course/assets/icons/git-tag.svg)"></div>
## .git/refs/tags

The tags directory works the exact same way, but it contains tags instead of branches


<div class="title-icon" style="background-image: url(/course/assets/icons/two-types.svg)"></div>
### Git supports two types of tags:

* Lightweight <!-- .element: class="fragment fade-up" -->
* Annotated <!-- .element: class="fragment fade-up" -->


## Lightweight Tag:

Lightweight Tag is a reference that **never moves**

```
git tag v0.1 HEAD
```

Note:
git update-ref refs/tags/v0.1 <commit hash>
git tag v0.1
git show-ref v0.1
git tag --delete v0.1
// cat .git/refs/tags/v0.2
git cat-file -p <tag-hash>
// as you see I am on specific commit
// lets create lightweight tag
git tag <commit hash>
git update-ref refs/tags/v0.1 <commit hash>
cat .git/refs/tags/v0.1
git show-ref v0.1
git checkout v0.1
// as you see I am on specific commit


## Annotated Tag:

Git creates **tag object** and then put it as a **reference** to **tag** file

```
git tag -a v0.2 HEAD -m 'version 0.2'
```

Note:
```
object cbb5f2006fa46e545083166445b084daca390df3
type commit
tag v0.2
tagger name <name@gmail.com> 1536598550 +0300

version 0.2
```
// examples/demo
// lets create annotated tag
git tag -a v0.2 HEAD -m 'version 0.2'
git show-ref v0.2
// cat .git/refs/tags/v0.2
git cat-file -p <tag-hash>

// view all tags
git tag
git tag -l '*.[2-9]'
// push tag 
// git push origin v0.2
git push --tags
git checkout -b hotfix v0.2
// fix console
git commit -am '[*] hotfix';
git describe hotfix


<div class="title-icon" style="background-image: url(/course/assets/icons/q_and_a.svg)"></div>
# Q&A

