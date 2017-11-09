var app = angular.module('holsetEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('holsetEditCtrl', function($scope, holsetSer,$state,toastr,$stateParams,$http){
    var infoEdit ={id: $stateParams.id}
    //根据id
    holsetSer.findholsetId(infoEdit).then(function(response){
        if(response.data.code == 0){
            $scope.edit = response.data.data;

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

    $scope.aa=function(){
        var vm =$scope;
        var data= {
            startTime: angular.element('.startTime').val(),
            endTime: angular.element('.endTime').val()
        }
        //获取所有部门
        holsetSer.holsetTime(data).then(function(response){
            if(response.data.code == 0){
                $scope.day = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    }
    //获取创建人
    holsetSer.holsetUser().then(function(response){
        if(response.data.code == 0){
            $scope.creater = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //添加
    $scope.extraAddFun = function(){
        var vm = $scope;
        var data={
            id:vm.edit.id,
            name:vm.edit.name,
            holidayType:vm.edit.holidayType,
            remark:vm.edit.remark,
            creater:vm.edit.creater,
            day:vm.edit.day,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        }


        holsetSer.Editholset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.holsetting.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});







