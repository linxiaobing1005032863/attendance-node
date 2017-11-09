var app = angular.module('auditsetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.audittimeset", {
        url : "/audittimeset",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/audittimeset/_res/html/index.html",
                controller:"auditsetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/audittimeset/_res/html/menu.html",
                controller:"auditsetMenuCtrl"
            }
        }
    }).state("root.overtime.audittimeset.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.audittimeset":{
                templateUrl : "root/overtime/audittimeset/list/_res/html/index.html",
                controller:'auditsetListCtrl'
            }
        }
    }).state("root.overtime.audittimeset.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.audittimeset":{
                templateUrl : "root/overtime/audittimeset/add/_res/html/index.html",
                controller:'auditsetAddCtrl'
            }
        }
    }).state("root.overtime.audittimeset.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.audittimeset":{
                templateUrl : "root/overtime/audittimeset/edit/_res/html/index.html",
                controller:'auditsetEditCtrl'
            }
        }
    })
});
