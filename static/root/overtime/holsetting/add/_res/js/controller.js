var app = angular.module('holsetAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('holsetAddCtrl', function($scope, holsetSer,$state,toastr,$stateParams,$http){

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
            name:vm.name,
            holidayType:vm.holidayType,
            remark:vm.remark,
            creater:vm.creater,
            day:vm.day,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        }


        holsetSer.Addholset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.holsetting.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




