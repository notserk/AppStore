/**
 * Created by kshirley on 1/22/15.
 */

app.controller('ListController', function($scope, AppService){
    $scope.apps = AppService.apps;

});

app.controller('GridController', function($scope, AppService, $rootScope){
    $scope.apps = AppService.apps;
});

app.controller('DetailsController', function($scope, $routeParams, $rootScope, AppService){
    var appData = AppService.apps[$routeParams.appId];

    $scope.screens = appData.screenshots;
    $scope.description = appData.description;

    $scope.thumbnail = appData.thumbnail;

    $scope.ios = appData.href.ios;
    $scope.android = appData.href.android;
    $scope.itunes = appData.href.itunes;

});