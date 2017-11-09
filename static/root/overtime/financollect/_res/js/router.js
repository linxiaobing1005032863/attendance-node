var app = angular.module('financollectModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.financollect", {
        url : "/financollect",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/financollect/_res/html/index.html",
                controller:"financollectModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/financollect/_res/html/menu.html",
                controller:"financollectMenuCtrl"
            }
        }
    }).state("root.overtime.financollect.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.overtime.financollect":{
                templateUrl : "root/overtime/financollect/collect/_res/html/index.html",
                controller:'financollectCtrl'
            }
        }
    })
});
