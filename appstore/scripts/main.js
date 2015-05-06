/**
 * Created by kshirley on 1/22/15.
 */
var app = angular.module('appstore', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: "htmlTemplates/list.html",
            controller: "ListController"
        });

        $routeProvider.when('/list', {
            templateUrl: "htmlTemplates/list.html",
            controller: "ListController"
        });

        $routeProvider.when('/grid', {
            templateUrl: "htmlTemplates/grid.html",
            controller: "GridController"
        });

        $routeProvider.when('/details/:appId', {
            templateUrl: "htmlTemplates/appDetails.html",
            controller: "DetailsController"
        });

        $routeProvider.otherwise({redirectTo: "/"})
    })
    .run(function($rootScope){
        $rootScope.apps = [
            {
                name: "Test",
                date: "9/12/14",
                src: "http://placehold.it/350x150"
            },
            {
                name: "Test",
                date: "9/12/14",
                src: "http://placehold.it/350x150"
            },
            {
                name: "Test",
                date: "9/12/14",
                src: "http://placehold.it/350x150"
            }
        ]
    });


