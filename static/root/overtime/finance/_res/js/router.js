var app = angular.module('financeModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.finance", {
        url : "/finance",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/finance/_res/html/index.html",
                controller:"financeModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/finance/_res/html/menu.html",
                controller:"financeMenuCtrl"
            }
        }
    }).state("root.overtime.finance.list[12]",{
        url:"/list[12]?id=&names=&startTime=&endTime=&page=",
        views:{
            "content@root.overtime.finance":{
                templateUrl : "root/overtime/finance/list/_res/html/index.html",
                controller:'financeListCtrl'
            }
        }
    }).state("root.overtime.finance.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.finance":{
                templateUrl : "root/overtime/finance/edit/_res/html/index.html",
                controller:'financeEditCtrl'
            }
        }
    })
});
