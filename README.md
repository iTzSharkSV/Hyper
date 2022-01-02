# Hyper

A CLI to bootstrap new projects!

Generate an Advanced Project Template in seconds.

## Installing

```bash
npm install -g @sharksv/hyper
# or
yarn global add @sharksv/hyper
```

## Usage/Examples

```bash
$ hyper <commands> [options]
```

```bash
# Show help
hyper help

# Initilize a new project
hyper init
```

## Generated Project Tree

```Txt
📦 <Project>
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ BUG_REPORT.md
│  │  ├─ FEATURE_REQUEST.md
│  │  └─ PULL_REQUEST_TEMPLATE.md
│  └─ workflows
│     └─ CodeQL.yml
├─ Docs
│  ├─ CODE_OF_CONDUCT.md
│  ├─ CONTRIBUTING.md
│  └─ SECURITY.md
├─ Src
│  ├─ Some Folder
│  │  ├─ File 1
│  │  └─ File 2
│  └─ Another Folder Maybe
│     └─ File 3
├─ .eslintrc
├─ .gitignore
├─ .prettierrc
├─ .travis.yml
├─ CHANGELOG.md
├─ Package.json
├─ README.md
└─ LICENSE
```

## License

```text
#
# Copyright 2021 - SharkSV
# License Identifier: MIT
#
```
