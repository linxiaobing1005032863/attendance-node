var app = angular.module('fillAdd', ['toastr','ipCookie']);
app.controller('fillAddCtrl', function($scope, fillSer,$state,toastr,ipCookie,$location){
    $scope.over=function() {
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
    };

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
                $scope.overDay = response.data.data.overDay;
            }
        });
        /* }*/
    };

    //新增出车记录
    $scope.fillAddFun = function(){
        var vm = $scope;
        var data = {
            lunchBreak:vm.lunchBreak,
            overType:vm.overType,
            overDay:vm.overDay,
            overStartTime:angular.element('.overStartTime').val(),
            overEndTime:angular.element('.overEndTime').val()
        };

        fillSer.Addfill(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.fill.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }
        });

    };
});





