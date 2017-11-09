var app = angular.module('versionInfo',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.overtime.versionInfo", {
        url: "/versionInfo",
        views: {
            "content@root.overtime": {
                templateUrl: "root/overtime/versionInfo/_res/html/index.html",
                controller: "versionInfoCtrl"
            }
        }
    })
})