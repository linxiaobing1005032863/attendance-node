var app = angular.module('wrongEdit', ['toastr']);
app.controller('wrongEditCtrl', function($scope, wrongSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    wrongSer.findwrongId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
      
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


//审核
    $scope.wrongEditFun = function(){
        var vm = $scope;
        var data = {
            aduitStatus:vm.edit.aduitStatus,
            id:vm.edit.id,
            aduitReason:vm.edit.aduitReason,
        };

        wrongSer.wrongEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.wrong.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }
        });

    };
});
