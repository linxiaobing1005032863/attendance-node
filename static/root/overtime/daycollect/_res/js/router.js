var app = angular.module('daycollectModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.daycollect", {
        url : "/daycollect",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/daycollect/_res/html/index.html",
                controller:"daycollectModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/daycollect/_res/html/menu.html",
                controller:"daycollectMenuCtrl"
            }
        }
    }).state("root.overtime.daycollect.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.overtime.daycollect":{
                templateUrl : "root/overtime/daycollect/collect/_res/html/index.html",
                controller:'daycollectCtrl'
            }
        }
    })
});
