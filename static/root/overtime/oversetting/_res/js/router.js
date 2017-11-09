var app = angular.module('oversetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.oversetting", {
        url : "/oversetting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/oversetting/_res/html/index.html",
                controller:"oversetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/oversetting/_res/html/menu.html",
                controller:"oversetMenuCtrl"
            }
        }
    }).state("root.overtime.oversetting.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.oversetting":{
                templateUrl : "root/overtime/oversetting/list/_res/html/index.html",
                controller:'oversetListCtrl'
            }
        }
    }).state("root.overtime.oversetting.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.oversetting":{
                templateUrl : "root/overtime/oversetting/add/_res/html/index.html",
                controller:'oversetAddCtrl'
            }
        }
    }).state("root.overtime.oversetting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.oversetting":{
                templateUrl : "root/overtime/oversetting/edit/_res/html/index.html",
                controller:'oversetEditCtrl'
            }
        }
    })
});
