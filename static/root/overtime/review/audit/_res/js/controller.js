var app = angular.module('reviewaudit', ['toastr']);
app.controller('reviewauditCtrl', function($scope, reviewSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //添加
    $scope.reviewAddFun = function(){
        var vm = $scope;


        var data={
            id: $stateParams.id,
            auditAdvice:vm.auditAdvice,
            auditStatus:vm.auditStatus,
        }


        reviewSer.Addreview(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.review.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
