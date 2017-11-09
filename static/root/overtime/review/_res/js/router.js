var app = angular.module('extraModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.review", {
        url : "/review",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/review/_res/html/index.html",
                controller:"reviewModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/review/_res/html/menu.html",
                controller:"reviewMenuCtrl"
            }
        }
    }).state("root.overtime.review.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.review":{
                templateUrl : "root/overtime/review/list/_res/html/index.html",
                controller:'reviewListCtrl'
            }
        }
    }).state("root.overtime.review.audit[12]",{
        url:"/audit[12]?id=",
        views:{
            "content@root.overtime.review":{
                templateUrl : "root/overtime/review/audit/_res/html/index.html",
                controller:'reviewauditCtrl'
            }
        }
    })
});
