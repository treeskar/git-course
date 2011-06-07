<div class="title-icon" style="background-size: 60px; background-image: url(/course/assets/icons/archive.svg)"></div>
## Archive

``git archive``<!-- .element: class="code-highlight"--> command is used to **create an archive** file **of** a specific **snapshot** of the project

```console
git archive --format=zip -o latest.zip master
```

Note:
```
// get archive from remote
git archive --remote=git://localhost:3232/release --format=zip -o v0.2.zip v0.2
```