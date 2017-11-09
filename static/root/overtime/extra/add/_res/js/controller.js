var app = angular.module('extraAdd', ['toastr']);
app.controller('extraAddCtrl', function($scope, extraSer,$state,toastr){

    //获取地区
    extraSer.areaList().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //根据加班人员获取部门和职位
    $scope.overtime=function(){
        var vm=$scope;
        var data={
            overWorker:vm.overWorker,
        }
        extraSer.positAndDepart(data).then(function(response){
            if(response.data.code == 0){
                $scope.department = response.data.data.depart;
                $scope.posi = response.data.data.position;
            }
        });
    };

    //获取加班时长和可休天数
    $scope.overtime1=function() {
        var vm = $scope;
        var data = {
            noonBreakOr: vm.noonBreakOr,
            startTime:angular.element('.overStartTime').val(),
            endTime:angular.element('.overEndTime').val()

        };
     if(data.startTime!=''&&data.endTime){
         extraSer.caculateTime(data).then(function (response) {
             if (response.data.code == 0) {
                 $scope.overLong = response.data.data.overLong;
                 $scope.relaxDay = response.data.data.relaxDay;
             } else {
                 toastr.error(response.data.msg, '温馨提示');
             }
         });
     }
    };

    //获取任务下达人或加班人员
    extraSer.peopleList().then(function(response){
        if(response.data.code == 0){
            $scope.peoples = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
 /*   //获取加班时长和可休天数
    extraSer.caculateTime().then(function(response){
        if(response.data.code==0){
            $scope.Time=response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });*/
    //添加
    $scope.extraAddFun = function(){
        var vm = $scope;
        var data={
            area:vm.area,
            tasker:vm.tasker,
            overWorker:vm.overWorker,
            overType:vm.overType,
            depart:vm.depart,
            position:vm.position,
            overLong:vm.overLong,
            noonBreakOr:vm.noonBreakOr,
            workContent:vm.workContent,
            completeCon:vm.completeCon,
            relaxDay:vm.relaxDay,
            charger:vm.charger,
            overStartTime:angular.element('.overStartTime').val(),
            overEndTime:angular.element('.overEndTime').val()
        }


        extraSer.Addextra(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.extra.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




