# Release Step
## Build Files
```
$ cd [PJ root directory]
$ yarn run build
```
=> make or replace dist directory (build files). [memo] It's not override.

## Update Version manifest.json
```
$ vi manifest.json
```

## Update Version package.json
```
$ vi package.json
```

## Deploy Release files
```
$ rm -r release/latest/
$ mkdir release/latest/
$ cp dist/* release/latest/
$ cp manifest.json release/latest/
```

Then duplicate to new version directory.
```
$ cp -r release/latest/ release/[new version]/
```

## Update README
```
$ vi README.md
```

## Pack Extension
Pack Extension release/latest/ directory on Google Chrome.

## Publish to Chrome Webstore
Go to Chrome Webstore Developer Dashboard then, deploy release files(filetype:zip).
