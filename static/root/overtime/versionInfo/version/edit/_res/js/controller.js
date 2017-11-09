
var app = angular.module('versionInfoEdit', ['toastr']);
app.controller('versionInfoEditCtrl', function($scope, versionInfoSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    versionInfoSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //获取所有人
    versionInfoSer.allPeople().then(function(response){
        if(response.data.code == 0){
            $scope.allUser = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    })
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.experienceTime = angular.element('.time').val();
        data.finishTime = angular.element('.finishTime').val();
        versionInfoSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.versionInfo.version.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
     
});
   