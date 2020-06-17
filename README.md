<h1 align="center">
  <img alt="admin-portal" title="admin-portal" src="https://via.placeholder.com/200?text=APP%20LOGO" width="200px" style="border-radius:100px"/>
</h1>

<h3 align="center">
 ADMIN PORTAL API made with Node, ExpressJS and Mysql2
</h3>

## Installation

```
  // 1 - Git Clone

  // 2 - Copy the .env.example and set the environment variables
  cp .env.example .env

  // 3 - Installing the dependencies
  yarn install

  // 4 - Run the application (Be sure to have the API running locally)
  yarn start

```

---

## Database: Migration / Seeder

```
  // 1 - Create New Model with Migration
  yarn db:make-model --name User --attributes first_name:string,last_name:string --underscore
                            ^--^              ^-------^  ^--^
                              |                   |        |
                              |                   |        +-------> Data type
                              |                   +-------> column name
                              +-------> Model Name

  // 2 - Create Skeleton Migration without Model
  yarn db:make-migration --name migrate-create-user

  // 3 - Running Migrations
  yarn db:migrate

  // 4 - Running All Seeds
  yarn db:seedall

  // 5 - Undo all seed
  yarn db:seedall-undo

```

Read sequelize documentation
[https://sequelize.org/master/manual/migrations.html](https://sequelize.org/master/manual/migrations.html)

---

## Documentation

Read jsdoc documentation
[https://jsdoc.app](https://jsdoc.app)
[https://github.com/SoftwareBrothers/better-docs](https://github.com/SoftwareBrothers/better-docs)

```
  // 1 - Build Docs
  yarn run docs
```

## Semantic Commit Message

Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

Example

> feat: allow overriding of webpack config
> ^--^ ^------------^
> | |
> | +-> Summary in present tense.
> |
> +-------> Type: chore, docs, feat, fix, refactor, style, or test.

The various types of commits:

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- perf: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- revert: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating repo files; no build tools or docs; no production code change)
- build: (updating build tools etc; no production code change)
- ci: (updating ci tools etc; no production code change)

## Changelog

- [x] Setup Development

## <br /><br /><br />

Made with ♥ by MagenteDevTeam
