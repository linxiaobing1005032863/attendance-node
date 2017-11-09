var app = angular.module('versionInfoList', ['ng-pagination','toastr']);
app.controller('versionInfoListCtrl',function($scope,versionInfoSer,toastr,$stateParams,$state,$location) {
    $scope.$emit('changeId',null);
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.dispatchcar.versionInfo.version.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        versionInfoSer.deleteData(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.versionInfo.itemsCount-count)%10){
                    $state.go('root.overtime.versionInfo.version.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.overtime.versionInfo.version.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.versionInfoLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page',$location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.versionInfoLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    
    function activatePage(page) {
        if($scope.versionInfoLists)return
        var listData = {
            page:page || 1
        }
        versionInfoSer.listData(listData).then(function(response){
            if(response.data.code==0){
                $scope.versionInfoLists = response.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.versionInfoLists.data,function(obj){
                        if(obj.id == $stateParams.id.split('&')[0]){
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
    $scope.versionInfo = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    countData = {};
    versionInfoSer.countBaseInfo1(countData).then(function(response){
        if(response.data.code == 0){
            $scope.versionInfo.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});
app.filter('version',function(){
    return function(val){
        var result;
        if(val == true){
            result = '是'
        }else if(val == false){
            result = '否'
        }
        return result;
    }
})