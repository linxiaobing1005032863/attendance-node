var app = angular.module('tesetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.vacaaudit", {
        url : "/vacaaudit",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/vacaaudit/_res/html/index.html",
                controller:"auditModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/vacaaudit/_res/html/menu.html",
                controller:"auditMenuCtrl"
            }
        }
    }).state("root.overtime.vacaaudit.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.vacaaudit":{
                templateUrl : "root/overtime/vacaaudit/list/_res/html/index.html",
                controller:'auditListCtrl'
            }
        }
    }).state("root.overtime.vacaaudit.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.vacaaudit":{
                templateUrl : "root/overtime/vacaaudit/add/_res/html/index.html",
                controller:'auditAddCtrl'
            }
        }
    }).state("root.overtime.vacaaudit.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.overtime.vacaaudit":{
                templateUrl : "root/overtime/vacaaudit/edit/_res/html/index.html",
                controller:'auditEditCtrl'
            }
        }
    }).state("root.overtime.vacaaudit.upload[12]",{
        url:"/upload[12]?id=&page=",
        views:{
            "content@root.overtime.vacaaudit":{
                templateUrl : "root/overtime/vacaaudit/upload/_res/html/index.html",
                controller:'auditUploadCtrl'
            }
        }
    }).state("root.overtime.vacaaudit.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.overtime.vacaaudit":{
                templateUrl : "root/overtime/vacaaudit/view/_res/html/index.html",
                controller:'auditViewCtrl'
            }
        }
    })
});
