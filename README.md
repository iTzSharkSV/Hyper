<img src="https://imgur.com/NjzU6uR.png" width="25px"> `yper`

`A CLI to bootstrap new projects!`

> Hyper is a CLI that helps U generate an Advanced Project Template in seconds.

---

## Prerequisites

[Node.js](https://nodejs.org/en/) and npm are required as a peer dependency.

## Installing

```Bash
npm install -g @sharksv/hyper
// or
yarn global add @sharksv/hyper
```

`alternatively:`

```Txt
npx @sharksv/hyper <command> [options]
```

## Compile from source

```Txt
$ git clone https://github.com/iTzSharkSV/Hyper.git
$ cd Hyper
$ npm install    // install project dependencies
$ npm run build  // compile project
$ npm i -g .     // add as a global variable
```

## Usage/Examples

```Txt
@example: Help info
$ hyper help
---------------------------------------------------------

Hyper v3.0 by @Shorky
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
@example: Initializing a project
$ hyper init -y
-------------------
// prompt skipped (-y, --skip)
some magic goes here,
& some here...
voila!
```

## The Why?

```Txt
Why use Hyper-CLI instead of starting-fresh?
-------------------------------------------------------
  - Faster
  - Easier
  - Up-with Community Standards
  - Besides being Well-Put & Organized
```

```Txt
Why not just use a template?
------------------------------------

Orignally, starting-fresh or using a template was my-go-2 option, but...
The time wasted looking for a generic, minimalistic yet well-put template
-for every project I wanted to start was a bit too much.
Here aroused the motivation to create `Hyper`.
Hyper is a CLI that helps U bootstrap new projects!
```

## Available Templates

```Txt
$ hyper list
---------------------------------------------------------
LANGUAGE          Size(kb)     NAME
---------------------------------------------------------
(-)               37.5	       Jumpstart
Ts/Sass           41.0         Static-Web
Typescript        40.1         Node Project
Rust-Lang         38.1         Rust Project
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
│  │  └─ CodeQL.yml
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
# Copyright 2021 @SharkSV
# License Identifier: MIT
#
```
