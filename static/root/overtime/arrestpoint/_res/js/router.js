var app = angular.module('extraModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.arrestpoint", {
        url : "/arrestpoint",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/arrestpoint/_res/html/index.html",
                controller:"pointModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/arrestpoint/_res/html/menu.html",
                controller:"pointMenuCtrl"
            }
        }
    }).state("root.overtime.arrestpoint.list[12]",{
        url:"/list[12]?id=&name=&page=&pointAreas=",
        views:{
            "content@root.overtime.arrestpoint":{
                templateUrl : "root/overtime/arrestpoint/list/_res/html/index.html",
                controller:'pointListCtrl'
            }
        }
    }).state("root.overtime.arrestpoint.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.arrestpoint":{
                templateUrl : "root/overtime/arrestpoint/add/_res/html/index.html",
                controller:'pointAddCtrl'
            }
        }
    }).state("root.overtime.arrestpoint.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.arrestpoint":{
                templateUrl : "root/overtime/arrestpoint/edit/_res/html/index.html",
                controller:'pointEditCtrl'
            }
        }
    })
});
