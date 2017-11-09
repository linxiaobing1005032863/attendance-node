var app = angular.module('auditEdit', ['toastr']);
app.controller('auditEditCtrl', function($scope, auditSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
 /*   auditSer.findfillId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
      
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });*/


//新增出车记录
    $scope.fillEditFun = function(){
        var vm = $scope;
        var data = {
            id:$stateParams.id,
            aduitStatus:vm.edit.aduitStatus,
            advice:vm.edit.advice,
           /* overStartTime:angular.element('.overStartTime').val(),
            overEndTime:angular.element('.overEndTime').val()*/
        };

        auditSer.auditVacate(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.vacaaudit.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }
        });

    };
});
