var app = angular.module('collectModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.vacatecollect", {
        url : "/vacatecollect",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/vacatecollect/_res/html/index.html",
                controller:"colModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/vacatecollect/_res/html/menu.html",
                controller:"colMenuCtrl"
            }
        }
    }).state("root.overtime.vacatecollect.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.overtime.vacatecollect":{
                templateUrl : "root/overtime/vacatecollect/collect/_res/html/index.html",
                controller:'collectCtrl'
            }
        }
    })
});
