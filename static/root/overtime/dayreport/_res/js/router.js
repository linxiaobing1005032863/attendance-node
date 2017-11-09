var app = angular.module('reportModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.dayreport", {
        url : "/dayreport",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/dayreport/_res/html/index.html",
                controller:"reportModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/dayreport/_res/html/menu.html",
                controller:"reportMenuCtrl"
            }
        }
    }).state("root.overtime.dayreport.list[12]",{
        url:"/list[12]?id=&names=&page=&time=",
        views:{
            "content@root.overtime.dayreport":{
                templateUrl : "root/overtime/dayreport/list/_res/html/index.html",
                controller:'reportListCtrl'
            }
        }
    })
});
