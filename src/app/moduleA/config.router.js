module.exports = function($stateProvider) {
    $stateProvider
        .state('list', {
            url: "/list",
            templateUrl: "moduleA/list.tpl.html",
            controller: 'listController'
        })
        .state('details', {
            url: "/details",
            templateUrl: "moduleA/list.tpl.html",
            controller: 'detailsController'
        })
}