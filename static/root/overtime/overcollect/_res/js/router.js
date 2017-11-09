var app = angular.module('overcollectModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.overcollect", {
        url : "/overcollect",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/overcollect/_res/html/index.html",
                controller:"overcollectModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/overcollect/_res/html/menu.html",
                controller:"overcollectMenuCtrl"
            }
        }
    }).state("root.overtime.overcollect.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.overtime.overcollect":{
                templateUrl : "root/overtime/overcollect/collect/_res/html/index.html",
                controller:'overcollectCtrl'
            }
        }
    })
});
