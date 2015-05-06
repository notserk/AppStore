/**
 * Created by kshirley on 1/22/15.
 */

app.directive('back', function(){
   return{
       restrict: 'A',
       link: function(scope, element){
           element.on('click', function(e){
               window.history.back();
               e.preventDefault();
           });
       }
   }
})
.directive('installButton', function(){
        return{
            restrict: 'EA',
            template: '<a style="position: relative; float: right;" class="btn btn-default install" href="#">Install</a>',
            scope: true,
            link: function(scope, elem){

                var userAgent = new UAParser();
                var os = userAgent.getOS();

                var installButton = elem.children(0);


                if(os.name === 'Android')
                {
                    if(scope.android)
                    {
                        installButton.attr('href', scope.android);
                        installButton.html('Android Download');
                    }
                    else
                    {
                        installButton.attr('href', scope.itunes);
                        installButton.html('Download');
                    }

                }
                else if(os.name == 'iOS')
                {
                    if(scope.ios)
                    {
                        installButton.attr('href', scope.ios);
                        installButton.html('iOS Download');
                    }
                    else
                    {
                        installButton.attr('href', scope.itunes);
                        installButton.html('Download');
                    }
                }
                else
                {
                    if(scope.itunes)
                    {
                        installButton.attr('href', scope.itunes);
                        installButton.html('Download');
                    }
                    else
                    {
                        installButton.addClass('disabled');
                    }
                }

                //console.log(elem.children()[0]);
                //elem.on('click', function(e){
                //
                //    var userAgent = new UAParser();
                //    var os = userAgent.getOS();
                //
                //    if(os.name === 'Android')
                //    {
                //        installButton.attr('href', androidLink);
                //    }
                //    else if(os.name == 'iOS')
                //    {
                //        installButton.attr('href', iosLink);
                //    }
                //    else{
                //        installButton.html('No!');
                //    }
                //
                //    console.log(elem);
                //    e.preventDefault();
                //
                //})
            }
        }
    });
//app.directive('appGrid',function(){
//    return{
//        restrict: 'E',
//        templateUrl: 'htmlTemplates/grid.html',
//        scope: true,
//        controller: function($scope){
//            $scope.apps = [
//                {
//                    name: "Test",
//                    date: "9/12/14",
//                    src: ""
//                },
//                {
//                    name: "Test",
//                    date: "9/12/14",
//                    src: ""
//                },
//                {
//                    name: "Test",
//                    date: "9/12/14",
//                    src: ""
//                }
//
//            ]
//        }
//    }
//})
//.directive('appList', function(){
//
//    return{
//
//        restrict: 'E',
//        templateUrl: 'htmlTemplates/list.html'
//    }
//})
//.directive('switchView', function($scope){
//    return{
//        restrict: 'A',
//        link: function(){
//
//        },
//        controller: function($scope){
//
//        }
//    }
//});