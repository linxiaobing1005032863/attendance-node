var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.overtime.setting", {
        url : "/setting",
        views : {
            "content@root.overtime" : {
                templateUrl : "root/overtime/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.overtime" : {
                templateUrl : "root/overtime/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.overtime.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.overtime.setting":{
                templateUrl : "root/overtime/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.overtime.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.overtime.setting":{
                templateUrl : "root/overtime/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});