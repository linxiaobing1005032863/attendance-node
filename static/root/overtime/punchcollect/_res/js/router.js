var app = angular.module('punchcollectModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.punchcollect", {
        url : "/punchcollect",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/punchcollect/_res/html/index.html",
                controller:"punchcollectModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/punchcollect/_res/html/menu.html",
                controller:"punchcollectMenuCtrl"
            }
        }
    }).state("root.overtime.punchcollect.collect[12]",{
        url:"/collect[12]?id=&page=",
        views:{
            "content@root.overtime.punchcollect":{
                templateUrl : "root/overtime/punchcollect/collect/_res/html/index.html",
                controller:'punchcollectCtrl'
            }
        }
    })
});
