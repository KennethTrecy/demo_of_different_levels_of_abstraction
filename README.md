![GitHub lines](https://img.shields.io/github/license/KennethTrecy/demo_of_different_levels_of_abstraction?style=for-the-badge)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/KennethTrecy/demo_of_different_levels_of_abstraction?style=for-the-badge&display_name=tag&sort=semver)
![GitHub closed issues count](https://img.shields.io/github/issues-closed/KennethTrecy/demo_of_different_levels_of_abstraction?style=for-the-badge)
![GitHub pull request count](https://img.shields.io/github/issues-pr-closed/KennethTrecy/demo_of_different_levels_of_abstraction?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/KennethTrecy/demo_of_different_levels_of_abstraction?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/repo-size/KennethTrecy/demo_of_different_levels_of_abstraction?style=for-the-badge)

# Demo of Different Levels of Abstractions
Collection of files demonstrating the different levels of abstraction as explained in [my article].

## Origin
Some parts of the repository was based from [`mocha-svelte-typescript-sass`] branch of [Web Template].

The template is specialized for front-end development.

## Usage

### Initialization
If you want to contribute, the repository should be initialized to adhere in [Conventional Commits specification] for organize
commits and automated generation of change log.

#### Prerequisites
- [Node.js and NPM]
- [pnpm] (optional)

#### Instructions
By running the command below, all your commits will be linted to follow the [Conventional Commits
specification].
```
$ npm install
```

Or if you have installed [pnpm], run the following command:
```
$ pnpm install
```

To generate the change log automatically, run the command below:
```
$ npx changelogen --from=[tag name or branch name or commit itself] --to=master
```

## Notes

### License
The repository is licensed under [MIT].

### Branch
This branch can be used to other branches, templates, or projects.

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

[`mocha-svelte-typescript-sass`]: https://github.com/KennethTrecy/web_template/tree/mocha-svelte-typescript-sass
[Web Template]: https://github.com/KennethTrecy/web_template/
[MIT]: https://github.com/KennethTrecy/demo_different_levels_of_abstraction_in_software/blob/master/LICENSE
[Node.js and NPM]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md
[my article]: https://kennethtrecy.pages.dev/articles/different_levels_of_abstraction_in_software
