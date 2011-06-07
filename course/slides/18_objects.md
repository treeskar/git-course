<div class="title-icon" style="background-image: url(/course/assets/icons/database.svg)"></div>
## .git/objects/

Stores all the content for **your database**


## Object database
There are **four types** of objects in Git's internal storage:

* blob <!-- .element: class="fragment fade-up" -->
* tree object <!-- .element: class="fragment fade-up" -->
* commit object<!-- .element: class="fragment fade-up" -->
* annotated tag object <!-- .element: class="fragment fade-up" -->


<div class="title-icon" style="background-image: url(/course/assets/icons/key.svg)"></div>
## Object's key is:

**SHA1** hash of:

```
<object type> <content.length in bites>\0<content>
```
<small>
[Git project has decided to pick a new hashing algorithm SHA-256](https://blog.github.com/2018-09-10-highlights-from-git-2-19/#transitioning-away-from-sha-1)</small>

Note:
```
// generate hash 
echo "blob 12\0Version 0.1" | shasum -a 1

// show on example object types
git cat-file -p <commit hash>
git cat-file -t <commit hash>
git cat-file -p <tree hash>
```


<div class="title-icon" style="background-image: url(/course/assets/icons/compressed-file.svg)"></div>
## Object's value is:

Git **compresses** the **contents** with [zlib](https://zlib.net/)

Note:
```
// write git object
zlib_decompress <file name> /tmp/test && cat /tmp/test

// show on example object types
git cat-file -p <commit hash>
git cat-file -t <commit hash>
git cat-file -p <tree hash>

echo 'test content' | git hash-object -w --stdin
```


## Tree Object

![tree object](/course/assets/tree-object.png) <!-- .element: class="transparent-image" style="height: 400px"-->

Note:
```
mkdir lib
echo "Project's vendors" >> lib/README.md
```


| mode   | type | hash       | filename
| -------|------|------------|-----------------
| 040000 | tree | ``<hash>`` | ``<directory name>``
| 100644 | blob | ``<hash>`` | ``<file name>``


<div class="title-icon" style="background-image: url(/course/assets/icons/commit.svg)"></div>
## Commit Object

```
tree <tree hash>
parent: <hash to parent commit>
author authorName <author@gmail.com> 1536517417 +0300
committer committerName <committer@gmail.com> 1536517417 +0300

commit message
```

Note:
// lets see commit
Tell about "Directed Acyclic Graph (DAG)"
Git uses a Directed Acyclic Graph (DAG) for content storage as well as commit and merge histories.

git cat-file -p <hash>
// commit can contains more then one parent in merge commit case


<div class="title-icon" style="background-image: url(/course/assets/icons/q_and_a.svg)"></div>
# Q&A