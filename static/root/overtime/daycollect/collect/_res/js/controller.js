var app = angular.module('daycollectA', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('daycollectCtrl',function($scope,daycollectSer,toastr){
    $scope.dd=false;
    $scope.aaa=function(){
        var vm=$scope.countType;
        if(vm=='DEPART'){
            $scope.dd=true;
        }else{
            $scope.dd=false;
        }
    };
    //获取所有岗位
    daycollectSer.Departssteset().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.positions = [];
    /*$scope.stringSettings = {displayProp: 'department',idProperty: 'hierarchyId'};*/
    $scope.stringSettings = {template : '{{option.department}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.collect = function(){
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.hierarchyId)
        });
        var vm = $scope;
        var data={
            departIds:permitArr,
            countType:vm.countType,
            startTime: angular.element('.startTime').val(),
            endTime: angular.element('.endTime').val()
        };
        daycollectSer.dayCollcet(data).then(function(response){
            if(response.data.code == 0){
                $scope.list = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});


