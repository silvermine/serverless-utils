# Silvermine Serverless Utilities

[![NPM Version][npm-version]][npm-version-url]
[![License][license-badge]](./LICENSE)
[![Build Status][build-status]][build-status-url]
[![Coverage Status][coverage-status]][coverage-status-url]


## What is it?

This is a collection of utilities that might be useful to you if you are using
the [Serverless][sls] framework.


## How do I use it?

Each utility is a little different. Here are some examples:


### Get Code Version

If you want to use the current git repo code version as a variable in your
serverless.yml file, you can do the following:

```yml
provider:
   name: aws
   runtime: nodejs4.3
   environment:
      CODE_VERSION: ${file(./node_modules/@silvermine/serverless-utils/src/get-code-version.js):both}
      CODE_HASH: ${file(./node_modules/@silvermine/serverless-utils/src/get-code-version.js):hash}
      CODE_TAG: ${file(./node_modules/@silvermine/serverless-utils/src/get-code-version.js):tag}
```


## How do I contribute?

We genuinely appreciate external contributions. See [our extensive
documentation](https://github.com/silvermine/silvermine-info#contributing) on
how to contribute.


## License

This software is released under the MIT license. See [the license
file](LICENSE) for more details.

[sls]: https://serverless.com/
[npm-version]: https://img.shields.io/npm/v/@silvermine/serverless-utils.svg
[npm-version-url]: https://www.npmjs.com/package/@silvermine/serverless-utils
[license-badge]: https://img.shields.io/github/license/silvermine/serverless-utils.svg
[build-status]: https://github.com/silvermine/serverless-utils/actions/workflows/ci.yml/badge.svg
[build-status-url]: https://travis-ci.org/silvermine/serverless-utils.svg?branch=master
[coverage-status]: https://coveralls.io/repos/github/silvermine/serverless-utils/badge.svg?branch=master
[coverage-status-url]: https://coveralls.io/github/silvermine/serverless-utils?branch=master
