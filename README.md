# generator-mean-seed [![Build Status](https://secure.travis-ci.org/MakingSense/generator-mean-seed.png?branch=master)](https://travis-ci.org/MakingSense/generator-mean-seed)

> [Yeoman](http://yeoman.io) generator


## Getting Started

Before start please read the [Yeoman](http://yeoman.io/authoring/) documentation for authoring.

Run `npm install` to download the project dependencies.

Since you're developing the generator locally, it's not yet available as a global npm module. A global module may be created and symlinked to a local one, using npm. Here's what you'll want to do:

On the command line, from the root of your generator project (in the `generator-mean-seed/` folder), type:

`npm link`

That will install your project dependencies and symlink a global module to your local file. After npm is done, you'll be able to call `yo mean-seed`.

Tests could be executed with the command `npm test`.

## Notes

- This generator is based in the [generator of generators](https://github.com/yeoman/generator-generator) so it's pretty much standard.
- This generator is running an `npm install` after content generation. If you need to do some tests it could be useful to comment the line doing the update. Just to speed up the development process. Look for `install` or `installDependencies` at `generators/app/index.js` file.
