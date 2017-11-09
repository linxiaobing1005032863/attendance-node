
var app = angular.module('detail', ['toastr']);
app.controller('detailCtrl', function($scope,versionInfoSer,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    versionInfoSer.findDetail(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            angular.element("#detail").html($scope.data);
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });
     
});
   