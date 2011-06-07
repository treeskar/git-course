<div class="title-icon" style="background-image: url(/course/assets/icons/fingerprint.svg)"></div>
## **Signing** Your Work

Git can use [GnuPG](https://www.gnupg.org/) (GPG) to **cryptographically sign** tags and commits in order to verify the **committer authenticity**

```console
git commit -S -m '[+] signed commit'
```

Note:
```
// examples/subtree
gpg --list-secret-keys --keyid-format LONG
// gpg --gen-key
git config --local user.signingkey D85FD9E482E8D80C
// if you don't have one, you can generate a new key by running
git commit -S -m "signed commit"
git tag -s v0.1 -m "signed tag v0.1"
git log --show-signature -1
git push
gpg --armor --export afait > pubKey.asc
scp pubKey.asc gs:/

// ON GS > import public key
gpg --import /pubKey.asc
// verify public key
gpg --edit-key afait
// validate the key
fpr
// sign the key with default key
tsign
git log --show-sgnature

// https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0/39626266
// in error case
brew link --overwrite gnupg
echo "pinentry-program /usr/local/bin/pinentry-mac" >> ~/.gnupg/gpg-agent.conf
killall gpg-agent
// git config --global commit.gpgsign true
```