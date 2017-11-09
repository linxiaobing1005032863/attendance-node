var app = angular.module('extraModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.extra", {
        url : "/extra",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/extra/_res/html/index.html",
                controller:"extraModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/extra/_res/html/menu.html",
                controller:"extraMenuCtrl"
            }
        }
    }).state("root.overtime.extra.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.extra":{
                templateUrl : "root/overtime/extra/list/_res/html/index.html",
                controller:'extraListCtrl'
            }
        }
    }).state("root.overtime.extra.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.extra":{
                templateUrl : "root/overtime/extra/add/_res/html/index.html",
                controller:'extraAddCtrl'
            }
        }
    })
});
