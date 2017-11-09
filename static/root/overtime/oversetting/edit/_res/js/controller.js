var app = angular.module('oversetEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('oversetEditCtrl', function($scope, oversetSer,$state,toastr,$stateParams,$http){
    var infoEdit ={id: $stateParams.id}
    //根据id
    oversetSer.findoversetId(infoEdit).then(function(response){
        if(response.data.code == 0){
            $scope.edit = response.data.data;
            $scope.sendObject = $scope.edit.sendObject.split(',');
            $scope.collectObject = $scope.edit.collectObject.split(',');
            $scope.sendObject.reUndefined();
            $scope.collectObject.reUndefined();

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });


//获取全部部门
    oversetSer.Alldeparts().then(function(response){
        if(response.data.code == 0){
            $scope.departs = response.data.data;
            var it=[];
            angular.forEach($scope.departs,function(item){
                it.push(item.department)
            })
            $scope.department=it;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.collectObject= [];
    $scope.collectSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    //获取汇总对象
    oversetSer.Alluser().then(function(response){
        if(response.data.code == 0){
            $scope.userName = response.data.data;
            var  user=[];
            angular.forEach($scope.userName,function(item){
                user.push(item.username)
            })
            $scope.users=user;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.sendObject= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};





//添加
    $scope.extraAddFun = function(){
        var permitArr=[];
           angular.forEach($scope.sendObject,function(item){
               if(item.username==undefined){
                   permitArr.push(item)
               }else{
                   permitArr.push(item.username)
               }

        });
        var permitArrs=[];
        angular.forEach($scope.collectObject,function(item){
            if(item.department==undefined){
                permitArrs.push(item)
            }else{
                permitArrs.push(item.department)
            }
        });

        $scope.edit.operator = null;
        var vm = $scope;
        var data={
            operator:null,
            sendObjects:permitArr,
            collectObjects:permitArrs,
            id:vm.edit.id,
            name:vm.edit.name,
            depart:vm.edit.depart,
            totalType:vm.edit.totalType,
            remark:vm.edit.remark,
            all:vm.edit.all,
            remindFrequency:vm.edit.remindFrequency,
            remindVal:vm.edit.remindVal,
            countFrequency:vm.edit.countFrequency,
            sendTime:angular.element('.sendTime').val(),
        }


        oversetSer.Editoverset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.oversetting.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});







