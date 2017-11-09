var app = angular.module('collectA', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('collectCtrl',function($scope,collectSer,toastr){
    $scope.aa=false;
    $scope.aaa=function(){
      var vm=$scope.countType;
      if(vm=='DEPART'){
          $scope.aa=true;
      }else{
          $scope.aa=false;
        }
    };

    //获取所有岗位
    collectSer.Departssteset().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.positions = [];
  /*  $scope.stringSettings = {displayProp: 'department',idProperty: 'hierarchyId'};*/
    $scope.stringSettings = {template : '{{option.department}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.collect = function(){
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.department)
        });
        var vm = $scope;
        var data={
            departs:permitArr,
            countType:vm.countType,
            startTime: angular.element('.startTime').val(),
            endTime: angular.element('.endTime').val()
        };
        collectSer.cateCollcet(data).then(function(response){
            if(response.data.code == 0){
                $scope.list = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});

/*
var app = angular.module('settingEdit', ['toastr','angularjs-dropdown-multiselect']);
app.controller('settingEditCtrl', function($scope, settingSer, $state,$stateParams,toastr){

    $scope.getId = {id:$stateParams.id};
    settingSer.getpermit($scope.getId).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
            $scope.positions=$scope.edit.cusOperateVO
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    $scope.positions = [];
    $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};
    settingSer.getListpermit($scope.getId).then(function(response){
        if(response.data.code==0){
            $scope.workOptions= response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.editSetting = function(){
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.id)
        });
        $scope.edit.operators=permitArr.join(',');
        $scope.edit.operator = null;
        settingSer.editSetting($scope.edit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.setting.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    }

});
*/





