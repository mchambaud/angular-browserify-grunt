require('angular');

angular.module('moduleA', [])
    .config(require('./config.router'))
    .controller('listController', require('./ctrl.list'))
    .controller('detailsController', require('./ctrl.details'));