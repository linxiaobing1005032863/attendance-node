var app = angular.module('financeEdit', ['toastr']);
app.controller('financeEditCtrl', function($scope, financeSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    financeSer.findfinanceId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
      
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //查找负责人
    financeSer.Allcharge().then(function(response){
        if(response.data.code == 0){
            $scope.charges = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //查找项目经理
    financeSer.Allmanager().then(function(response){
        if(response.data.code == 0){
            $scope.managers = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });


//申请反馈审批
    $scope.finanEditFun = function(){
        var vm = $scope;
        var data = {
            reason:vm.edit.reason,
            id:vm.edit.id,
            vacateDayNew:vm.edit.vacateDayNew,
            absenteeismDayNew:vm.edit.absenteeismDayNew,
            finishDayNew:vm.edit.finishDayNew,
            attendanceDayNew:vm.edit.attendanceDayNew,
            actualDayNew:vm.edit.actualDayNew,
            principal:vm.edit.principal,
            manager:vm.edit.manager,
        };

        financeSer.financeEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.finance.list[12]');
                toastr.success("已成功申请反馈", '温馨提示');
            }
        });

    };
});
