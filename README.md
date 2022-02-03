# Hyper

A CLI to bootstrap new projects!

Generate an Advanced Project Template in seconds.

## Prerequisites

[Node.js](https://nodejs.org/en/) and npm are required as a peer dependency.

## Installing

### From [`npmjs.com`](https://npmjs.com/package/@sharksv/hyper)

```bash
npm install -g @sharksv/hyper
# or
yarn global add @sharksv/hyper
```

### Compile from source

```bash
$ git clone https://github.com/iTzSharkSV/Hyper.git
$ cd Hyper
$ npm install    # to install project dependencies
$ npm run build  # to compile the project
$ npm i -g .     # to add it as a global variable
```

## Usage/Examples

```bash
$ hyper help

Hyper v2.3 by Shorky
A CLI to bootstrap new projects!

USAGE:
    $ hyper <commands> [options]

COMMANDS:
    help          Prints usage-help info
    init          Initialize a new project
    ls            List available templates

OPTIONS:
    -c, --clear          Clear Terminal (on by Default)
    -v, --version        Prints CLI version
    -y, --default        Roll with default selection
    -y, --install        Install project dependencies
    -r, --rainbow        I wonder?!
```

## Available Templates

```bash
$ hyper ls
---------------------------------------------------------
LANGUAGE          Size(kb)    NAME
---------------------------------------------------------
(-)               14.01        Jumpstart
Typescript        14.62        Node-Proj
Javascript        12.01        Static-Web
Rust-Lang         10.97        Rust-Crate
Java              -            Java-Proj (Coming soon)
---------------------------------------------------------
```

## Sample Project Structure

```Txt
📦 <Node Project>
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
├─ .gitignore
├─ .eslintrc    # Available within package.json
├─ .prettierrc  # Available within package.json
├─ .husky       # Available within package.json
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
