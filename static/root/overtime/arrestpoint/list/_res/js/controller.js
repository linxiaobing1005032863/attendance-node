var app = angular.module('pointList', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('pointListCtrl',function($scope,pointSer,toastr,$stateParams,$state,$location){
    //获取所有驻点地点
    pointSer.pointASreas().then(function(response){
        if(response.data.code == 0){
            $scope.pointAreas = response.data.data;

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.pointArea=[];
    $scope.carbonsSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //搜索字段
    $scope.pointAreas = $stateParams.pointAreas?$stateParams.pointAreas:'';
    if($stateParams.pointAreas ){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索功能
    $scope.search = function(){
        var permitArr=[];
        angular.forEach($scope.pointArea,function(item){
            permitArr.push(item)
        });
        $state.go('root.overtime.arrestpoint.list[12]',{
         pointAreas:permitArr,page:1
        });


    };
    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
            pointAreas:$scope.pointAreas || ''
        };
        pointSer.pointList(listData).then(function(response){
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
    $scope.titles = ['驻点地点','驻点地点'];
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

    //启用
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        pointSer.Thawinfo(data).then(function(response){
            if(response.data.code==0){
                event.status = "START";
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    pointSer.Countpoint().then(function(response){
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
        $state.go('root.overtime.arrestpoint.list[12]',{id:null,name:null});
    };
    $scope.conCancel = function(){//取消禁用
        $scope.congealShow = false;

        $state.go('root.overtime.arrestpoint.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        pointSer.pointDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.overtime.arrestpoint.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.overtime.arrestpoint.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        pointSer.congealinfo(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息禁用", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.overtime.arrestpoint.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});
app.filter('staTus',function(){
    return function(val){
        var result;
        switch(val){
            case "START":
                result = "启用";
                break;
            case "STOP":
                result = "禁用";
                break;
            case "DELETE":
                result = "删除 ";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
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

