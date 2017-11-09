var app = angular.module('daysetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.daysetting", {
        url : "/daysetting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/daysetting/_res/html/index.html",
                controller:"daysetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/daysetting/_res/html/menu.html",
                controller:"daysetMenuCtrl"
            }
        }
    }).state("root.overtime.daysetting.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.daysetting":{
                templateUrl : "root/overtime/daysetting/list/_res/html/index.html",
                controller:'daysetListCtrl'
            }
        }
    }).state("root.overtime.daysetting.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.daysetting":{
                templateUrl : "root/overtime/daysetting/add/_res/html/index.html",
                controller:'daysetAddCtrl'
            }
        }
    }).state("root.overtime.daysetting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.daysetting":{
                templateUrl : "root/overtime/daysetting/edit/_res/html/index.html",
                controller:'daysetEditCtrl'
            }
        }
    })
});
