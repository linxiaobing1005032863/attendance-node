var app = angular.module('financollect', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('financollectCtrl',function($scope,financollectSer,toastr){
    //获取表头
    financollectSer.Allfields().then(function(response){
        if(response.data.code == 0){
            $scope.fields = response.data.data;

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //汇总
    financollectSer.finanCollect().then(function(response,index){
        if(response.data.code == 0){
            $scope.lists = response.data.data;
            angular.forEach($scope.lists,function(obj){
              if(obj.red==true) {
                  obj._selectList = true;
              }else if(obj.green==true){
                  obj._selectLists = true;
              }

            });

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.dd=false;
    $scope.aaa=function(){
        var vm=$scope.countType;
        if(vm=='DEPART'){
            $scope.dd=true;
        }else{
            $scope.dd=false;
        }
    };
    $scope.aa=[{position:null}]
    $scope.bb=[{name:null,outWorkTime:null,normalTime:null}]
    //获取所有岗位
    financollectSer.Alluser().then(function(response){
        if(response.data.code == 0){
            $scope.users = response.data.data;

        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.positions = [];
 /*   $scope.stringSettings = {displayProp: 'username',idProperty: 'employeeNumbe'};*/
    $scope.stringSettings = {template : '{{option.username}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.collect = function(){
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.username)
        });
        var vm = $scope;
        var data={
            names:permitArr,
            startTime: angular.element('.startTime').val(),
            endTime: angular.element('.endTime').val()
        };
        financollectSer.Allfields(data).then(function(response){
            if(response.data.code == 0){
                $scope.fields = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        financollectSer.finanCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.lists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
});



