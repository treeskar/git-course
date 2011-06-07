## Start

```
npm i
npm run rebuild:git:server
npm run git:server
npm run preset
```

## Access to GIT server

```
ssh -i ssh/id_rsa -p 3231 root@localhost
```

## Run LFS server

LFS test server has to be installed locally.
LFS install instruction https://github.com/git-lfs/lfs-test-server
TODO: // move LFS server to docker container
```
npm run lfs:server
```

## CLI
* ``node cli add <index> <name>`` - Add slide
* ``node cli rm <index>`` - Delete slide
* ``node cli mv <from> <to>`` - Move slide
* ``node cli mv <index> <index> <newName>`` - Rename slide
* ``node cli init <name>`` - Create example repository
* ``node cli init-remote <name>`` - Create remote (bare) example repository


## PDF Export

Open the url http://localhost:8000/?print-pdf in Google Chrome, and save presentation (CMD+P) as a PDF file.

