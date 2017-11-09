var app = angular.module('fillList', ['ng-pagination','toastr']);
app.controller('fillListCtrl',function($scope,fillSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
/*    //搜索字段
    $scope.carUser = $stateParams.carUser?$stateParams.carUser:'';
    $scope.number = $stateParams.number?$stateParams.number:'';
    if($stateParams.carUser || $stateParams.number){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索功能
    $scope.search = function(){
        $state.go('root.dispatchcar.dispatchcarinfo.list[12]',{
            carUser:$scope.carUser,number:$scope.number,page:1
        });
    };*/
    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
           /* carUser:$scope.carUser || '',
            number:$scope.number || '',*/
        };
        fillSer.fillList(listData).then(function(response){
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
/*    // 搜索功能
    $scope.titles = ['用车人','出车单号'];*/
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

/*    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        fillSer.Thawfill(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };*/
//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    fillSer.Countfill().then(function(response){
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
        $state.go('root.overtime.fill.list[12]',{id:null,name:null});
    };
    /*$scope.conCancel = function(){//取消冻结
        $scope.congealShow = false;
        $state.go('root.overtime.fill.list[12]',{id:null,name:null});
    };*/
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        fillSer.fillDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.overtime.fill.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.overtime.fill.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
  /*  $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        fillSer.congealfill(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.overtime.fill.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };*/
});

