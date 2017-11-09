var app = angular.module('oversetAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('oversetAddCtrl', function($scope, oversetSer,$state,toastr,$stateParams,$http){

    //获取全部部门
    oversetSer.Alldeparts().then(function(response){
        if(response.data.code == 0){
            $scope.departs = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.collectObject = [];
    $scope.stringSettings1 = {template : '{{option.department}}', smartButtonTextConverter(skip, option) { return option; }};


    //获取汇总对象
    oversetSer.Alluser().then(function(response){
        if(response.data.code == 0){
            $scope.userName = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.sendObject= [];
    $scope.stringSettings = {template : '{{option.username}}', smartButtonTextConverter(skip, option) { return option; }};

//添加
    $scope.extraAddFun = function(){
        var permitArr=[];
        angular.forEach($scope.sendObject,function(item){
            permitArr.push(item.username)
        });
        var permitArrs=[];
        angular.forEach($scope.collectObject,function(item){
            permitArrs.push(item.department)
        });
        var vm = $scope;
        var data={
            sendObjects:permitArr,
            collectObjects:permitArrs,
            name:vm.name,
            depart:vm.depart,
            totalType:vm.totalType,
            remark:vm.remark,
            all:vm.all,
            remindFrequency:vm.remindFrequency,
            remindVal:vm.remindVal,
            countFrequency:vm.countFrequency,
            sendTime:angular.element('.sendTime').val(),
        }
        oversetSer.Addoverset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.oversetting.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




