var app = angular.module('wrongModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.wrong", {
        url : "/wrong",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/wrong/_res/html/index.html",
                controller:"wrongModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/wrong/_res/html/menu.html",
                controller:"wrongMenuCtrl"
            }
        }
    }).state("root.overtime.wrong.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.overtime.wrong":{
                templateUrl : "root/overtime/wrong/list/_res/html/index.html",
                controller:'wrongListCtrl'
            }
        }
    }).state("root.overtime.wrong.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.wrong":{
                templateUrl : "root/overtime/wrong/edit/_res/html/index.html",
                controller:'wrongEditCtrl'
            }
        }
    })
});
