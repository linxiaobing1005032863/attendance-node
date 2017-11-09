var app = angular.module('punchList', ['ng-pagination','toastr']);
app.controller('punchListCtrl',function($scope,punchSer,toastr,$stateParams,$state,$location){
    //获取所有用户
    punchSer.punchUsers().then(function(response){
        if(response.data.code == 0){
            $scope.users = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });

    //搜索字段
    $scope.name = $stateParams.name?$stateParams.name:'';
    $scope.startTime = $stateParams.startTime?$stateParams.startTime:'';
    $scope.endTime = $stateParams.endTime?$stateParams.endTime:'';

    if($stateParams.name){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索功能
    $scope.search = function(){
        $state.go('root.overtime.punch.list[12]',{
            name:$scope.name,startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),page:1,

        });
    };
    if($stateParams.name||$stateParams.startTime||$stateParams.endTime){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
            name:$scope.name || '',
            startTime:$scope.startTime || '',
            endTime:$scope.endTime || '',
        };

        punchSer.punchList(listData).then(function(response){
            if(response.data.code==0){
                $scope.mailLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.mailLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }

    // 搜索功能
    $scope.titles = ['姓名','开始时间'];
    $scope.selectList = function(event){
        angular.forEach($scope.mailLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.mailLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    punchSer.Countpunch().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.overtime.punch.list[12]',{id:null,name:null});
    };

    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };

    };

});

app.filter('type',function(){
    return function(val){
        var result;
        switch(val){
            case "PC":
                result = "PC端";
                break;
            case "MOBILE":
                result = "移动端";
                break;
            case "GO":
                result = "上班 ";
                break;
            case "AFTER":
                result = "下班 ";
                break;
            case "NORMAL":
                result = "正常";
                break;
            case "LATE":
                result = "迟到 ";
                break;
            case "OUTSIDE":
                result = "外勤";
                break;
            case "FEE":
                result = "免扣 ";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});

