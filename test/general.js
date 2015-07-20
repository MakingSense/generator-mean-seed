'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('mean-seed:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ appName: 'generator-mean-seed-test' })
      .on('end', done);
  });

  it('creates base files', function () {
    assert.file([
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'bower.json',
      'Gruntfile.js',
      'package.json'
    ]);
  });

  it('creates backend files', function () {
    assert.file([
      'server.js',
      'api/base/controllers/auth.js',
      'api/base/controllers/common.js',
      'api/base/controllers/users.js',
      'api/base/middlewares/authentication.js',
      'api/base/middlewares/authorization.js',
      'api/base/models/user.js',
      'api/base/routes/base.js',
      'api/base/services/authorization.js',
      'api/config/appConfig.js',
      'api/config/bootstrap.js',
      'api/config/permissions.json',
      'api/config/resources.json',
      'api/config/roles.json',
      'api/config/simpleDI.js',
      'api/db/mongo.js',
      'api/templates/menus.json',
      'test/backend-unit-tests/spec/server-test.js',
      'test/backend-unit-tests/spec/base/controllers/auth.js',
      'test/backend-unit-tests/spec/base/controllers/common.js',
      'test/backend-unit-tests/spec/base/controllers/users.js',
      'test/backend-unit-tests/spec/base/middlewares/authorization.js',
      'test/backend-unit-tests/spec/base/models/user.js',
      'test/backend-unit-tests/spec/base/services/authorization.js',
      'test/backend-unit-tests/spec/config/config.js',
      'test/backend-unit-tests/spec/config/permissions.json',
      'test/backend-unit-tests/spec/config/resources.json',
      'test/backend-unit-tests/spec/config/roles.json'
    ]);
  });

  it('creates frontend files', function () {
    assert.file([
      'public/.htaccess',
      'public/favicon.ico',
      'public/index.html',
      'public/livereload.js',
      'public/robots.txt',
      'public/modules/app.js',
      'public/modules/base/controllers/login.js',
      'public/modules/base/controllers/main.js',
      'public/modules/base/controllers/navbar.js',
      'public/modules/base/controllers/signup.js',
      'public/modules/base/directives/confirmMessage.js',
      'public/modules/base/directives/mongooseError.js',
      'public/modules/base/directives/onFocus.js',
      'public/modules/base/interceptors/authInterceptor.js',
      'public/modules/base/services/authService.js',
      'public/modules/base/services/menus.js',
      'public/modules/base/services/User.js',
      'public/modules/base/views/login.html',
      'public/modules/base/views/main.html',
      'public/modules/base/views/signup.html',
      'public/modules/base/views/partials/navbar.html',
      'public/styles/_core.scss',
      'public/styles/main.scss',
      'public/styles/core/_settings.scss',
      'test/e2e-tests/beforeLaunch.js',
      'test/e2e-tests/config.js',
      'test/e2e-tests/protractor.conf.js',
      'test/e2e-tests/scenarios/login.js',
      'test/e2e-tests/scenarios/signup.js',
      'test/frontend-unit-tests/.jshintrc',
      'test/frontend-unit-tests/app-test.js',
      'test/frontend-unit-tests/karma.conf.js',
      'test/frontend-unit-tests/spec/controllers/login.js',
      'test/frontend-unit-tests/spec/controllers/main.js',
      'test/frontend-unit-tests/spec/controllers/navbar.js',
      'test/frontend-unit-tests/spec/controllers/signup.js',
      'test/frontend-unit-tests/spec/directives/mongooseError.js',
      'test/frontend-unit-tests/spec/directives/onFocus.js',
      'test/frontend-unit-tests/spec/helpers/browserTrigger.js'
    ]);
  });
});
