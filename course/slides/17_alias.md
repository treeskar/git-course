<div class="title-icon" style="background-image: url(/course/assets/icons/link.svg)"></div>
## Aliases

An **alias**, otherwise known as **a shortcut**, allows to place a simple command in front **of a longer or less memorable command**

```console
git config --local alias.last 'log -1 HEAD'
```

Note:
```
// lets add alias
git config --local alias.last.put = '!git commit --all -m=\"$1\" && shift && git push'
git config --local alias.test = "!f() { git subtree add --prefix $2 $1 master --squash; }; f"
git config --local alias.last 'log -1 HEAD'
```
