
var app = angular.module('reportList', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('reportListCtrl',function($scope,reportSer,toastr,$stateParams,$state,$location){
    $scope.aa=false;
    $scope.aaa=function(){
        var vm=$scope.checkedName;
        if(vm=='姓名' ){
            $scope.aa=true;
        }else{
            $scope.aa=false;
        }
    };
    //所有用户
    reportSer.Alluser().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions=response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

    $scope.name=[];
    $scope.stringSettings = {displayProp: 'username',idProperty: 'employeeNumber'};

    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //搜索字段
    $scope.names = $stateParams.names?$stateParams.names:'';
    $scope.time = $stateParams.time?$stateParams.time:'';
    if($stateParams.names || $stateParams.time ){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索功能
    $scope.search = function(){
        var permitArr=[];
        angular.forEach($scope.name,function(item){
            permitArr.push(item.username)
        });
        $state.go('root.overtime.dayreport.list[12]',{
            names:permitArr,time:angular.element('.time').val(),page:1
        });
    };
    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
            names:$scope.names || '',
            time:$scope.time || '',
        };
        reportSer.reportList(listData).then(function(response){
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
    $scope.titles = ['时间','姓名'];
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

    /*//解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        infoSer.Thawinfo(data).then(function(response){
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

   /* reportSer.Countextra().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });*/
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
app.filter('type',function(){
    return function(val){
        var result;
        switch(val){
            case "ADMININSTRATION":
                result = "行政任务";
                break;
            case "ENGINEERING":
                result = "工程任务";
                break;
            case "TRAINING":
                result = "培训任务 ";
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
