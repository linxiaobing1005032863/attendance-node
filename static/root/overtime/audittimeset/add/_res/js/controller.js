var app = angular.module('auditsetAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('auditsetAddCtrl', function($scope, auditsetSer,$state,toastr,$stateParams,$http){
//获取项目组
    auditsetSer.auditsetdeparts().then(function(response){
         if(response.data.code == 0){
             $scope.departs = response.data.data;
         }else{
             toastr.error(response.data.msg,'温馨提示');
         }
     });
    //获取岗位
    auditsetSer.auditsetpositions().then(function(response){
        if(response.data.code == 0){
            $scope.positions = response.data.data;
      }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
 //添加
    $scope.extraAddFun = function(){
        var vm = $scope;
        var data={
            depart:vm.depart,
            position:vm.position,
            type:vm.type,
            time:vm.time,
            remark:vm.remark,
        }


        auditsetSer.Addauditset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.audittimeset.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




