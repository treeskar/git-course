<div class="title-icon" style="background-image: url(/course/assets/icons/configuration.svg)"></div>
## GIT configuration

Contains your project-specific **configuration** options


## ``git config``

Configuration can be stored in **three** different **places**

* local .git/config <!-- .element: class="fragment fade-up" -->
* global ~/.gitconfig <!-- .element: class="fragment fade-up" -->
* system /private/etc/gitconfig <!-- .element: class="fragment fade-up" -->

Note:
```
git config --global --edit
git config --list
git config --show-origin user.name

git config --local user.name "Alex"
git config --local user.email "afaitelson@paloaltonetworks.com"
// change git editor
git config --local core.editor 'code --wait'
git config --local -e
// remove core.editor line and save file
//check your settings
git config --list
// git uses last values
// some time you want to know from each configuration file git fetches this value
git config --show-origin credential.helper
git config --local include.path ../.gitconfig
// vi .gitconfig
[core]
    editor = "code --wait"
```
