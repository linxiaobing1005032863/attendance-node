var app = angular.module('vacatesetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.vacatesetting", {
        url : "/vacatesetting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/vacatesetting/_res/html/index.html",
                controller:"vacatesetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/vacatesetting/_res/html/menu.html",
                controller:"vacatesetMenuCtrl"
            }
        }
    }).state("root.overtime.vacatesetting.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.vacatesetting":{
                templateUrl : "root/overtime/vacatesetting/list/_res/html/index.html",
                controller:'vacatesetListCtrl'
            }
        }
    }).state("root.overtime.vacatesetting.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.vacatesetting":{
                templateUrl : "root/overtime/vacatesetting/add/_res/html/index.html",
                controller:'vacatesetAddCtrl'
            }
        }
    }).state("root.overtime.vacatesetting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.vacatesetting":{
                templateUrl : "root/overtime/vacatesetting/edit/_res/html/index.html",
                controller:'vacatesetEditCtrl'
            }
        }
    })
});
