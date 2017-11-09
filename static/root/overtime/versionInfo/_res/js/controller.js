var app = angular.module('versionInfo', []);
app.controller('versionInfoCtrl', function ($scope,$state) {
    if ($state.current.url == '/versionInfo') {//默认加载列表
         $state.go('root.overtime.versionInfo.version');
    }
})