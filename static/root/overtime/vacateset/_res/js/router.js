var app = angular.module('tesetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.vacateset", {
        url : "/vacateset",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/vacateset/_res/html/index.html",
                controller:"tesetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/vacateset/_res/html/menu.html",
                controller:"tesetMenuCtrl"
            }
        }
    }).state("root.overtime.vacateset.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.vacateset":{
                templateUrl : "root/overtime/vacateset/list/_res/html/index.html",
                controller:'tesetListCtrl'
            }
        }
    }).state("root.overtime.vacateset.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.vacateset":{
                templateUrl : "root/overtime/vacateset/add/_res/html/index.html",
                controller:'tesetAddCtrl'
            }
        }
    }).state("root.overtime.vacateset.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.overtime.vacateset":{
                templateUrl : "root/overtime/vacateset/edit/_res/html/index.html",
                controller:'tesetEditCtrl'
            }
        }
    }).state("root.overtime.vacateset.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.overtime.vacateset":{
                templateUrl : "root/overtime/vacateset/upload/_res/html/index.html",
                controller:'tesetUploadCtrl'
            }
        }
    }).state("root.overtime.vacateset.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.overtime.vacateset":{
                templateUrl : "root/overtime/vacateset/view/_res/html/index.html",
                controller:'tesetViewCtrl'
            }
        }
    })
});
