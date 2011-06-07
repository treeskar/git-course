<div class="title-icon" style="background-image: url(/course/assets/icons/hooks.svg)"></div>
## .git/hooks/

Git has a way to fire off **custom scripts** when certain important **actions occur**

Note:
```
// examples/hooks
client hooks
show prepare commit hook (match issue ID from branch name)
// .git/hooks/prepare-commit
validate commit message
// .git/hooks/commit-msg
run unit test before push
// .git/hooks/pre-push
------------------------------

There are two groups of hooks:

* client-side
* server-side

## Client Side hooks
**Client-side** hooks **are not copied** when you clone a repository.
# you can create as sl (symbolic link) or use [husky](https://github.com/typicode/husky)

## Commiting workflow hooks
## ``pre-commit``
Inspect snapshot that about to be commited

run test before commit
## ``prepare-commit``
Lets you edit default message before commit author see it

insert default message format
## ``commit-msg``
Validate commit message or project state before allowing a commit to go

Check is message has a valid format
## ``post-commit``
This hooks used for notification or something similar

Used to notification
## Other hooks
* pre-rebase
* post-rewrite
* post-checkout
* post-merge
* pre-push
* pre-auto-gc

pre-rebase - runs before you rebase anything
post-rewrite - run by command that replaces commit such as commit --amend and rebase
post-checkout - after checkout 
post-merge - after successful merge 
pre-push - before push
pre-auto-gc - before garbage collection takes place
## Server side hooks
* pre-receive
* update 
* post-receive

pre-receive - run when handling a push from a client
update - runs on push from client per branch
post-receive - run after the entire push from client completed
```