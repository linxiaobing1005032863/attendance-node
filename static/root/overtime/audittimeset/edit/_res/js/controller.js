var app = angular.module('auditsetEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('auditsetEditCtrl', function($scope, auditsetSer,$state,toastr,$stateParams,$http){
    var infoEdit ={id: $stateParams.id}
    //根据id
    auditsetSer.findauditsetId(infoEdit).then(function(response){
        if(response.data.code == 0){
            $scope.edit = response.data.data;

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

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
            id:vm.edit.id,
            depart:vm.edit.depart,
            position:vm.edit.position,
            type:vm.edit.type,
            time:vm.edit.time,
            remark:vm.edit.remark,
        }
        auditsetSer.Editauditset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.audittimeset.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});







