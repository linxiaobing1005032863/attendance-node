var app = angular.module('punchedit', ['toastr']);
app.controller('puncheditCtrl', function($scope, punchSer,$state,toastr,$stateParams){
    var infoEdit ={id: $stateParams.id}

    //添加
    $scope.EditpunchFun = function(){
        var vm = $scope;
        var data={
            /* id:$stateParams.id,*/
            punchType:vm.punchType,

        }


        punchSer.punchPc(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.punch.list[12]');
                toastr.success("已成功打卡", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




