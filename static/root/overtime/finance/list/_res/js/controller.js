var app = angular.module('financeList', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('financeListCtrl',function($scope,financeSer,toastr,$stateParams,$state,$location){
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
    financeSer.Alluser().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions=response.data.data;
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
    $scope.startTime = $stateParams.startTime?$stateParams.startTime:'';
    $scope.endTime = $stateParams.endTime?$stateParams.endTime:'';

    //搜索功能
    $scope.search = function(){
        var permitArr=[];
        angular.forEach($scope.name,function(item){
            permitArr.push(item.username)
        });
        $state.go('root.overtime.finance.list[12]',{
            names:permitArr,startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),page:1
        });
    };

    function activatePage(page) {
        if($scope.mailLists) return;
        var listData = {
            page:page || 1,
            names:$scope.names || '',
            startTime:$scope.startTime || '',
            endTime:$scope.endTime || '',
        };

        financeSer.financeList(listData).then(function(response){
            if(response.data.code==0){
                $scope.mailLists = response.data.data;
                angular.forEach($scope.mailLists,function(obj,index){
                    if(obj.red==true) {
                        obj.menuClass='bbMenu'
                    }else if(obj.green==true){
                        obj.menuClass='aaMenu'
                    }

                });
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

    if($stateParams.names ||$stateParams.startTime ||$stateParams.endTime){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    // 搜索功能
    $scope.titles = ['请选择','姓名','开始时间'];
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
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.red = true;
                break;
        }
    }
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
