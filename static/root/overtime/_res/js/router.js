var app = angular.module('overtimeModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.overtime", {
        url: "/overtime",
        views: {
            "content@root": {
                templateUrl: "root/overtime/_res/html/index.html",
                controller: "rewardsCtrl"
            },"nav@root":{
                templateUrl: "root/overtime/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});