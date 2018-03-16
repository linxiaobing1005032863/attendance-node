var app = angular.module('tesetList', ['ng-pagination','toastr']);
app.controller('tesetListCtrl',function($scope,tesetSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
           /* overWorker:$scope.overWorker || ''*/
        };
        tesetSer.tesetList(listData).then(function(response){
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

    tesetSer.Countteset().then(function(response){
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
        $state.go('root.overtime.vacateset.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        tesetSer.tesetDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.overtime.vacateset.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.overtime.vacateset.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
app.filter('staTus',function(){
    return function(val){
        var result;
        switch(val){
            case "ANNUAL":
                result = "年假";
                break;
            case "MATTER":
                result = "事假";
                break;
            case "SICK":
                result = "病假 ";
                break;
            case "ADJUST":
                result = "调休";
                break;
            case "MARRY":
                result = "婚假";
                break;
            case "MATERNITY":
                result = "产假";
                break;
            case "PATERNITY":
                result = "陪产假";
                break;
            case "CHECK":
                result = "产检假 ";
                break;
            case "FUNERAL":
                result = "丧假";
                break;
            case "OTHER":
                result = "其他 ";
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
app.filter('Agree',function(){
    return function(val){
        var result;
        switch(val){
            case "AGREE":
                result = "通过";
                break;
            case "REJECT":
                result = "不通过 ";
                break;
            case "DOING":
                result = "审核中 ";
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

