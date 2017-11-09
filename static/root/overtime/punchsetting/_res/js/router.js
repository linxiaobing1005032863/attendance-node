var app = angular.module('punchsettingModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.punchsetting", {
        url : "/punchsetting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/punchsetting/_res/html/index.html",
                controller:"punchsettingModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/punchsetting/_res/html/menu.html",
                controller:"punchsettingMenuCtrl"
            }
        }
    }).state("root.overtime.punchsetting.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.punchsetting":{
                templateUrl : "root/overtime/punchsetting/list/_res/html/index.html",
                controller:'punchsettingListCtrl'
            }
        }
    }).state("root.overtime.punchsetting.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.punchsetting":{
                templateUrl : "root/overtime/punchsetting/add/_res/html/index.html",
                controller:'punchsettingAddCtrl'
            }
        }
    }).state("root.overtime.punchsetting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.punchsetting":{
                templateUrl : "root/overtime/punchsetting/edit/_res/html/index.html",
                controller:'punchsettingEditCtrl'
            }
        }
    })
});
