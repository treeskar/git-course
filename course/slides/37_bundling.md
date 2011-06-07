<div class="title-icon" style="background-image: url(/course/assets/icons/bundle.svg)"></div>
## Bundling

``git bundle``<!-- .element: class="code-highlight"--> command will **package** up **everything** that would normally be pushed over the wire with a git push command **into a binary file**

```
git bundle create repo.bundle HEAD master
```

Note:
```
// example/rebase-onto
git bundle create repo.bundle HEAD master server
git bundle verify ../rebase-onto/repo.bundle
cd ../
git clone rebase-onto/repo.bundle -b master clone
cd clone
git lg
cd ../path
git fetch ../rebase-onto/repo.bundle server:server
git merge --allow-unrelated-histories server
git lg
```