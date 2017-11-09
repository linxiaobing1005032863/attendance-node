var app = angular.module('helpDetail', ['toastr']);
app.controller('helpDetailCtrl', function($scope, helpSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //添加
    helpSer.helpDetail(companyId).then(function(response){
        if(response.data.code == 0){
            $scope.data = response.data.data;
            angular.element("#detail").html($scope.data);
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    });

});




