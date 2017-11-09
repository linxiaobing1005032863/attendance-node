var app = angular.module('fillModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.fill", {
        url : "/fill",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/fill/_res/html/index.html",
                controller:"fillModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/fill/_res/html/menu.html",
                controller:"fillMenuCtrl"
            }
        }
    }).state("root.overtime.fill.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.overtime.fill":{
                templateUrl : "root/overtime/fill/list/_res/html/index.html",
                controller:'fillListCtrl'
            }
        }
    }).state("root.overtime.fill.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.fill":{
                templateUrl : "root/overtime/fill/add/_res/html/index.html",
                controller:'fillAddCtrl'
            }
        }
    }).state("root.overtime.fill.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.overtime.fill":{
                templateUrl : "root/overtime/fill/edit/_res/html/index.html",
                controller:'fillEditCtrl'
            }
        }
    })
});
