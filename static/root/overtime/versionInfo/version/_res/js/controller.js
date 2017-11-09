var app = angular.module('version', [{
    files:[
        "root/overtime/versionInfo/version/_res/js/service.js"
    ]
}]);
app.controller('versionCtrl',function ($scope,$state) {
    if ($state.current.url == '/version') {//默认加载列表
        $state.go('root.overtime.versionInfo.version.list[12]');
    }
}).controller('versionMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
     //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, id){
        $scope.idList = id;
    });
    //分页
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.version.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.version.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.version.upload[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.version.view[12]',{id:$scope.idList,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    //详情
    $scope.detail = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.version.detail[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'detailMenu'
        }
    };
    //我要发问
    $scope.ask = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.version.ask[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'askMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";//清空选择的 id
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.idList = "";//清空选择的 id
    };
});
