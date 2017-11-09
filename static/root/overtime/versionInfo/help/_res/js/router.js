var app = angular.module('help', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.versionInfo.help", {
        url : "/help",
        views : {  
            "content@root.overtime.versionInfo" : {
                templateUrl : "root/overtime/versionInfo/help/_res/html/index.html",
                controller:"helpCtrl"
            },"menu@root.overtime.versionInfo" : {
                templateUrl : "root/overtime/versionInfo/help/_res/html/menu.html",
                controller:"helpMenuCtrl"
            }
        }
    }).state("root.overtime.versionInfo.help.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.overtime.versionInfo.help":{
                templateUrl : "root/overtime/versionInfo/help/list/_res/html/index.html",
                controller:'helpListCtrl'
            }
        }
    }).state("root.overtime.versionInfo.help.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.overtime.versionInfo.help":{
                templateUrl : "root/overtime/versionInfo/help/detail/_res/html/index.html",
                controller:'helpDetailCtrl'
            }
        }
    }).state("root.overtime.versionInfo.help.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.overtime.versionInfo.help":{
                templateUrl : "root/overtime/versionInfo/help/edit/_res/html/index.html",
                controller:'helpEditCtrl'
            }
        }
    }).state("root.overtime.versionInfo.help.answer[12]",{
        url:"/answer[12]?id=&page=",
        views:{
            "content@root.overtime.versionInfo.help":{
                templateUrl : "root/overtime/versionInfo/help/answer/_res/html/index.html",
                controller:'answerCtrl'
            }
        }
    })
});