var app = angular.module('help', [{
    files:[
        "root/overtime/versionInfo/help/_res/js/service.js"
    ]
}]);
app.controller('helpCtrl',function ($scope,$state) {
    if ($state.current.url == '/help') {//默认加载列表
        $state.go('root.overtime.versionInfo.help.list[12]');
    }
}).controller('helpMenuCtrl',function($scope,$state,$rootScope,$location){
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
    //详情
    $scope.detail = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.help.detail[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'detailMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.help.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
     //解答
    $scope.answer = function(){
        if($scope.idList){
            $state.go('root.overtime.versionInfo.help.answer[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'answerMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";//清空选择的 id
    };
});
