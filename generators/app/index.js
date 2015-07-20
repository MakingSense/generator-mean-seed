'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the supreme ' + chalk.red('MeanSeed') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'How would you like to name your application folder?',
      default: this.arguments.length > 0 ? this.arguments[0] : 'mean-seed'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      this.destinationRoot(this.props.appName);

      // Base
      this._copy('.bowerrc');
      this._copy('.editorconfig');
      this._copy('.gitignore');
      this._copy('.jshintrc');
      this.fs.copyTpl(
        this.templatePath('bower.json'),
        this.destinationPath('bower.json'), {
          appName: this.props.appName
        }
      );
      this._copy('Gruntfile.js');
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'), {
          appName: this.props.appName
        }
      );

      // Backend
      this._copy('server.js');
      this._copy('api');
      this._copy('test/backend-unit-tests');

      // Frontend
      // For unknown reasons files starting with a dot (.) aren't being copied within their respective folders.
      this._copy('public');
      this._copy('public/.htaccess');
      this._copy('test/e2e-tests');
      this._copy('test/frontend-unit-tests');
      this._copy('test/frontend-unit-tests/.jshintrc');
    }
  },

  install: function () {
    this.installDependencies();
  },

  _copy: function(file) {
    this.fs.copy(
      this.templatePath(file),
      this.destinationPath(file)
    );
  }
});
