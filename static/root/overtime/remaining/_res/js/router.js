var app = angular.module('extraModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.remaining", {
        url : "/remaining",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/remaining/_res/html/index.html",
                controller:"remainModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/remaining/_res/html/menu.html",
                controller:"remainMenuCtrl"
            }
        }
    }).state("root.overtime.remaining.list[12]",{
        url:"/list[12]?id=&name=&overWorker=&page=",
        views:{
            "content@root.overtime.remaining":{
                templateUrl : "root/overtime/remaining/list/_res/html/index.html",
                controller:'remainListCtrl'
            }
        }
    })
});
