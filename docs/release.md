# Release Step
## Update Version manifest.json
Count up "version". Don't rewrite "manifest_version".

```
$ vi manifest.json
```

## Update Version package.json
Count up "version".

```
$ vi package.json
```

## Build Files
```
$ cd [PJ root directory]
$ yarn run build
```
=> make or replace dist directory (build files). [memo] It's not override.

## Deploy Release files
```
$ rm -r release/latest/
$ mkdir release/latest/
$ cp -r dist/* release/latest/
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

## Pack Extension and Test
1. Open Google Chrome Extensions List on your Chrome settings. then drag "release/latest/" directory to Extensions List.
2. Test program

## Publish to Chrome Webstore
### Zip
```
$ cd release
$ rm release/latest.zip
$ zip -r latest.zip latest/
```

### Publish
1. Go to [Chrome Webstore Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard?hl=ja)
2. Edit target Chrome Extension App. Then upload latest files(filetype:zip).
