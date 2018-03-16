var app = angular.module('finanexport', ['toastr','angularjs-dropdown-multiselect']);
app.controller('finanexportCtrl', function($scope, financollectSer,$state,toastr){
    //获取所有姓名
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
    //导出
    $scope.collectAddFun = function(){
        var vm=$scope;
        var permitArr=[];
        angular.forEach($scope.positions,function(item){
            permitArr.push(item.username)
        });
        var obj={
            names:permitArr,
            startTime: angular.element('.startTime').val(),
            endTime: angular.element('.endTime').val()
        };
        window.open(`/financeattendance/excel/export${encode(obj,true)}`);
    };

});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


