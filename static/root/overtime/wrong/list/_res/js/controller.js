var app = angular.module('wrongList', ['ng-pagination','toastr']);
app.controller('wrongListCtrl',function($scope,wrongSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //搜索字段
    $scope.overWorker = $stateParams.overWorker?$stateParams.overWorker:'';
    if($stateParams.overWorker ){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索功能
    $scope.search = function(){
        $state.go('root.overtime.finance.list[12]',{
            overWorker:$scope.overWorker,page:1
        });
    };
    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
        };
        wrongSer.wrongList(listData).then(function(response){
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
        //颜色的区分
        wrongSer.wrongList().then(function(response){
            if(response.data.code == 0){
                $scope.mailLists = response.data.data;
                angular.forEach($scope.mailLists,function(obj){
                    if(obj.red==true) {
                        obj.menuClass='bbMenu'
                    }else if(obj.green==true){
                        obj.menuClass='aaMenu'
                    }

                });

            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    }

    // 搜索功能
    $scope.titles = ['加班人员','加班人员'];
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

    wrongSer.Countwrong().then(function(response){
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
        $state.go('root.overtime.extra.list[12]',{id:null,name:null});
    };


});
app.filter('driver',function(){
    return function(val){
        var result;
        switch(val){
            case "DOING":
                result = "审核";
                break;
            case "AGREE":
                result = "通过";
                break;
            case "REJECT":
                result = "不通过 ";
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
