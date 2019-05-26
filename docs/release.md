# Release Step
## 1. Build and Test
### Update Version manifest.json
Count up "version". Don't rewrite "manifest_version".

```
$ vi manifest.json
```

### Update Version package.json
Count up "version".

```
$ vi package.json
```

### Build Files
```
$ cd [PJ root directory]
$ yarn run build
```
=> replace "dist" directory (build files).

### Put manifest.json
Chrome Webstore need manifest.json.
```
$ cp manifest.json dist
```

### Update README
```
$ vi README.md
```

### Pack Extension and Test
1. Open Google Chrome Extensions List on your Chrome settings. then drag "dist" directory to Extensions List.
2. Test Extension

## 2. Publish to Chrome Webstore
### Zip
```
$ zip -ry copymemopa.zip dist
```

### Publish
1. Go to [Chrome Webstore Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard?hl=ja)
2. Edit target Chrome Extension App. Then upload release zip file.

## 3. Release to GitHub
1. Go to [GitHub Releases](https://github.com/256hax/copymemopa/releases)
2. Creat a new release. Then upload release zip file.
