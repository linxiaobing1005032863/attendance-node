var app = angular.module('versionInfoAdd', ['toastr']);
app.controller('versionInfoAddCtrl', function($scope, versionInfoSer,$state,toastr){
    
    //获取所有人
    versionInfoSer.allPeople().then(function(response){
        if(response.data.code == 0){
            $scope.allUser = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    })
    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        data.experienceTime = angular.element('.time').val();
        data.finishTime = angular.element('.finishTime').val();
        versionInfoSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.versionInfo.version.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };

});




