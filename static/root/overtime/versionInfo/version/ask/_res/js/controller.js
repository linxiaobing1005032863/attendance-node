
var app = angular.module('ask', ['toastr']);
app.controller('askCtrl', function($scope,versionInfoSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;
        versionInfoSer.ask(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.versionInfo.version.list[12]');
                toastr.success("发问成功",'温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
     
});
   