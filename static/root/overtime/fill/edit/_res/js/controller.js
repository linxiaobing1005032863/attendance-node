var app = angular.module('fillEdit', ['toastr']);
app.controller('fillEditCtrl', function($scope, fillSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    fillSer.findfillId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
      
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //获取加班时长和可休天数
    $scope.overtime1=function() {
        var vm = $scope;
        var data = {
            lunchBreak: vm.lunchBreak,
            startTime:angular.element('.overStartTime').val(),
            endTime:angular.element('.overEndTime').val()

        };
        fillSer.caculateTime(data).then(function (response) {
            if (response.data.code == 0) {
                $scope.edit.overDay = response.data.data.overDay;
            }
        });
        /* }*/
    };


//新增出车记录
    $scope.fillEditFun = function(){
        var vm = $scope;
        var data = {
            lunchBreak:vm.edit.lunchBreak,
            id:vm.edit.id,
            overType:vm.edit.overType,
            overDay:vm.edit.overDay,
            overStartTime:angular.element('.overStartTime').val(),
            overEndTime:angular.element('.overEndTime').val()
        };

        fillSer.Editfill(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.fill.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }
        });

    };
});
