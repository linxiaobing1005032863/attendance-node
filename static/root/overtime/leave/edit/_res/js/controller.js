var app = angular.module('leaveEdit', ['toastr']);
app.controller('leaveEditCtrl', function($scope, leaveSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    leaveSer.findleaveId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
      
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


//新增出车记录
    $scope.fillEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            vacateType:vm.edit.vacateType,
            payDay:vm.edit.payDay,
            cycle:vm.edit.cycle,
            maxDay:vm.edit.maxDay,
            allPayDay:vm.edit.allPayDay,
            proportion:vm.edit.proportion,
            attachment:vm.edit.attachment,
            attachmentRequest:vm.edit.attachmentRequest,
            name:vm.edit.name,
            status:vm.edit.status,
        };

        leaveSer.Editleave(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.leave.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }
        });

    };
});
