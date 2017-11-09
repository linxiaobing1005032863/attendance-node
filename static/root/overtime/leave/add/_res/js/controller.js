var app = angular.module('leaveAdd', ['toastr','ipCookie']);
app.controller('leaveAddCtrl', function($scope, leaveSer,$state,toastr,ipCookie,$location){
/*    $scope.over=function() {
        var vm = $scope;
        var data = {
            startTime:angular.element('.overStartTime').val(),
            endTime:angular.element('.overEndTime').val()

        };
        if(data.startTime!=''&&data.endTime){
            fillSer.caculateTime(data).then(function (response) {
                if (response.data.code == 0) {
                    $scope.overDay = response.data.data.overDay;
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }
    };*/

    //新增出车记录
    $scope.fillAddFun = function(){
        var vm = $scope;
        var data = {
            vacateType:vm.vacateType,
            payDay:vm.payDay,
            cycle:vm.cycle,
            maxDay:vm.maxDay,
            allPayDay:vm.allPayDay,
            proportion:vm.proportion,
            attachment:vm.attachment,
            attachmentRequest:vm.attachmentRequest,
            name:vm.name,
            status:vm.status,
        };

        leaveSer.Addleave(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.leave.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }
        });

    };
});





