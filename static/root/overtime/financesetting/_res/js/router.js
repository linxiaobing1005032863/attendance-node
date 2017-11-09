var app = angular.module('financesetModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.financesetting", {
        url : "/financesetting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/financesetting/_res/html/index.html",
                controller:"financesetModuleCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/financesetting/_res/html/menu.html",
                controller:"financesetMenuCtrl"
            }
        }
    }).state("root.overtime.financesetting.list[12]",{
        url:"/list[12]?id=&name=&page=&overWorker=",
        views:{
            "content@root.overtime.financesetting":{
                templateUrl : "root/overtime/financesetting/list/_res/html/index.html",
                controller:'financesetListCtrl'
            }
        }
    }).state("root.overtime.financesetting.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.overtime.financesetting":{
                templateUrl : "root/overtime/financesetting/add/_res/html/index.html",
                controller:'financesetAddCtrl'
            }
        }
    }).state("root.overtime.financesetting.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.overtime.financesetting":{
                templateUrl : "root/overtime/financesetting/edit/_res/html/index.html",
                controller:'financesetEditCtrl'
            }
        }
    })
});
