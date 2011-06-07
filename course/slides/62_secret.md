<div class="title-icon" style="background-image: url(/course/assets/git-secret.png)"></div>
## git-secret

[``git secret``](http://git-secret.io) <!-- .element: class="code-highlight"-->  is a tool to **store** your **private data** inside a git repository

```console
brew install git-secret
```

Note:
```
// examples/demo
git secret init
// created .gitsecret
gpg --list-keys
git secret tell afaitelson@paloaltonetworks.com
git secret whoknows
echo '123456' > password.txt
echo 'password.txt' >> .gitignore
git secret add password.txt
git secret hide password.txt
rm password.txt
git add *
git commit -m '[+] add encrypted password'
git secret list
git secret reveal password.txt
// change password
vi password.txt
git secret hide password.txt
rm password.txt
git commit -am '[*] update password'
```