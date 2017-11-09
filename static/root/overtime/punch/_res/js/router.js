var app = angular.module('punchModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.punch", {
        url : "/punch",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/punch/_res/html/index.html",
                controller:"punchModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/punch/_res/html/menu.html",
                controller:"punchMenuCtrl"
            }
        }
    }).state("root.overtime.punch.list[12]",{
        url:"/list[12]?id=&name=&page=&startTime=&endTime=",
        views:{
            "content@root.overtime.punch":{
                templateUrl : "root/overtime/punch/list/_res/html/index.html",
                controller:'punchListCtrl'
            }
        }
    }).state("root.overtime.punch.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.punch":{
                templateUrl : "root/overtime/punch/edit/_res/html/index.html",
                controller:'puncheditCtrl'
            }
        }
    })
});
