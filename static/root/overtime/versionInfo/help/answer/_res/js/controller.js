
var app = angular.module('answer', ['toastr']);
app.controller('answerCtrl', function($scope, helpSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    helpSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        helpSer.answer(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.versionInfo.help.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
     
});
   