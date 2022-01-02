# JumpStart

A template for new ambitious projects!

## Project Table

This repository contains some example best practices for open source repositories:

-   [LICENSE](LICENSE)
-   [README.md](README.md)
-   [CONTRIBUTING.md](./Docs/CONTRIBUTING.md)
-   [CHANGELOG.md](CHANGELOG.md)

## Run Locally

`Clone the project`

```bash
git clone https://github.com/<Org>/<Repo>.git
// or
gh repo clone <Org>/<Repo>
```

`Go to the project directory`

```bash
cd <Project>
```

## Usage/Examples

`Basic commands`

```js
class Example extends Something {
	constructor() {
		super({
			name: 'example',
			description: 'Example command'
		})
	}

	async exec(interaction) {
		return interaction.reply({
			ephemeral: true,
			content: 'Hallo!'
		})
	}
}

module.exports = Example
```

## Project Tree

```Txt
📦 <Project>
├─ Docs
│  ├─ CODE_OF_CONDUCT.md
│  ├─ CONTRIBUTING.md
│  └─ SECURITY.md
├─ .gitignore
├─ .prettierrc
├─ .travis.yml
├─ CHANGELOG.md
├─ README.md
└─ LICENSE
```

## License

```text
#
# Copyright <year> - <author> All rights reserved
# License Identifier: MIT
#
```
