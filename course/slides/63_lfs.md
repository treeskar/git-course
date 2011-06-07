<div class="title-icon" style="background-image: url(/course/assets/lfs-logo.svg)"></div>
### Git **L**arge **F**ile **S**torage

[``git lfs``](https://git-lfs.github.com/) <!-- .element: class="code-highlight"--> is an open source Git extension for **versioning large files**

```console
brew install git-lfs
```

Note:
```
// example/lfs admin:admin
// https://git-lfs.github.com/
// https://github.com/git-lfs/git-lfs/blob/master/docs/api/server-discovery.md
npm run lfs:server
git config --file=.lfsconfig lfs.url http://admin:admin@localhost:8080
git checkout -b video
git ll
git lfs track '.mp4'
git add .gitattributes
git add *
git commit -m '[+] add video'
git push origin video
// open localhost:8080/mgmt admin:admin
// show object
git ls-files
git cat-file -p <hash>
git lfs ls-files
git count-objects -v
ls -lha
git checkout master
```