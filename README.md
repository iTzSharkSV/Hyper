<img src="https://imgur.com/NjzU6uR.png" width="25px"> `yper`

`A CLI to bootstrap new projects!`

> Hyper is a CLI that helps U generate an Advanced Project Template in seconds.

---

## Prerequisites

[Node.js](https://nodejs.org/en/) and npm are required as a peer dependency.

## Installing

```bash
npm install -g @sharksv/hyper
# or
yarn global add @sharksv/hyper
```

`alternatively:`

```bash
npx @sharksv/hyper init
```

## Compile from source

```Txt
$ git clone https://github.com/iTzSharkSV/Hyper.git
$ cd Hyper
$ npm install    # install project dependencies
$ npm run build  # compile the project
$ npm i -g .     # add it as a global variable
```

## Usage/Examples

```Txt
$ hyper help
-------------

Hyper v3.0 by Shorky
A CLI to bootstrap new projects!

USAGE:
    $ hyper <commands> [options]

COMMANDS:
    help          Prints usage-help info
    init          Initialize a new project
    list          List available templates

OPTIONS:
    -k, --keep           Keep terminal output (off by Default)
    -y, --skip           Generate without prompt
    -i, --install        Install project dependencies
    -v, --version        Prints CLI version (following semver)
```

```Txt
$ hyper init node -y
```

## Available Templates

```Txt
$ hyper ls
---------------------------------------------------------
LANGUAGE          Size(kb)     NAME
---------------------------------------------------------
(-)               -            Jumpstart
Typescript        -            Node.js Project
Ts/Sass           -            Static-Web
Rust-Lang         -            Rust Project (Bin, Lib)
Java              -            Java Project (Coming soon)
---------------------------------------------------------
```

## Sample Project Tree

```Txt
📦 <Node Project>
├─ .circleci
│  └─ config.yml
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  ├─ BUG_REPORT.md
│  │  └─ FEATURE_REQUEST.md
│  ├─ workflows
│  │  └─ codeQL.yml
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .husky
│  └─ pre-commit
├─ Docs
│  ├─ CODE_OF_CONDUCT.md
│  ├─ CONTRIBUTING.md
│  └─ SECURITY.md
├─ Src
│  ├─ Modules
│  │  ├─ Something.ts
│  │  └─ Another.ts
│  └─ index.ts
├─ Tests
│  └─ Unit.test.ts
├─ .gitignore
├─ .eslintrc    # Available within package.json
├─ .prettierrc  # Available within package.json
├─ Dockerfile
├─ CHANGELOG.md
├─ README.md
├─ package.json
├─ tsconfig.json
└─ LICENSE
```

## License

```Txt
#
# Copyright 2021-Present @SharkSV
# License Identifier: MIT
#
```
