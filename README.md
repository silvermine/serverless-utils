# Silvermine Serverless Utilities

[![Build Status](https://travis-ci.org/silvermine/serverless-utils.svg?branch=master)](https://travis-ci.org/silvermine/serverless-utils)
[![Coverage Status](https://coveralls.io/repos/github/silvermine/serverless-utils/badge.svg?branch=master)](https://coveralls.io/github/silvermine/serverless-utils?branch=master)
[![Dependency Status](https://david-dm.org/silvermine/serverless-utils.svg)](https://david-dm.org/silvermine/serverless-utils)
[![Dev Dependency Status](https://david-dm.org/silvermine/serverless-utils/dev-status.svg)](https://david-dm.org/silvermine/serverless-utils#info=devDependencies&view=table)


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
