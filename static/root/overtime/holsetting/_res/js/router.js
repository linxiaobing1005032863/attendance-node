var app = angular.module('holsetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.holsetting", {
        url : "/holsetting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/holsetting/_res/html/index.html",
                controller:"holsetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/holsetting/_res/html/menu.html",
                controller:"holsetMenuCtrl"
            }
        }
    }).state("root.overtime.holsetting.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.holsetting":{
                templateUrl : "root/overtime/holsetting/list/_res/html/index.html",
                controller:'holsetListCtrl'
            }
        }
    }).state("root.overtime.holsetting.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.holsetting":{
                templateUrl : "root/overtime/holsetting/add/_res/html/index.html",
                controller:'holsetAddCtrl'
            }
        }
    }).state("root.overtime.holsetting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.holsetting":{
                templateUrl : "root/overtime/holsetting/edit/_res/html/index.html",
                controller:'holsetEditCtrl'
            }
        }
    })
});
