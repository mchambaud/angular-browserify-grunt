require('angular');
require('angular-ui-router');

require('./moduleA');

angular.module('app', [
    'ui.router',

    'angular-browserify-grunt.templates', //todo

    'moduleA'
])

    .config(require('./router'));