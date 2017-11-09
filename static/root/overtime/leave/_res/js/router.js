var app = angular.module('leaveModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.leave", {
        url : "/leave",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/leave/_res/html/index.html",
                controller:"leaveModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/leave/_res/html/menu.html",
                controller:"leaveMenuCtrl"
            }
        }
    }).state("root.overtime.leave.list[12]",{
        url:"/list[12]?id=&name=",
        views:{
            "content@root.overtime.leave":{
                templateUrl : "root/overtime/leave/list/_res/html/index.html",
                controller:'leaveListCtrl'
            }
        }
    }).state("root.overtime.leave.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.leave":{
                templateUrl : "root/overtime/leave/add/_res/html/index.html",
                controller:'leaveAddCtrl'
            }
        }
    }).state("root.overtime.leave.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.overtime.leave":{
                templateUrl : "root/overtime/leave/edit/_res/html/index.html",
                controller:'leaveEditCtrl'
            }
        }
    })
});
