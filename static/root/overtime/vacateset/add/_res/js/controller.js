var app = angular.module('tesetAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('tesetAddCtrl', function($scope, tesetSer,$state,toastr,$stateParams,$http){

    ////获取uuid
    tesetSer.Uuidteset().then(function(response){
        if(response.data.code == 0){
            $scope.uuid = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取当前用户
    tesetSer.Userteset().then(function(response){
        if(response.data.code == 0){
            $scope.User = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取所有地区
    tesetSer.Areasteset().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取所有部门
    tesetSer.Departssteset().then(function(response){
        if(response.data.code == 0){
            $scope.Departs = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取所有岗位
    tesetSer.Positionsteset().then(function(response){
        if(response.data.code == 0){
            $scope.Position = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    var watch = $scope.$watch('User.username',function(oldValue){
        var data={
            name:oldValue,
        }
        //获取请假人的主送人
        tesetSer.tesetMains(data).then(function(response){
            if(response.data.code == 0){
                $scope.workOptions = response.data.data;
            }
        });
        ///获取请假人的抄送人
        tesetSer.carbons(data).then(function(response){
            if(response.data.code == 0){
                $scope.carbon = response.data.data;
            }
        });
    });
    //请假人的主送人的多选下拉框
    $scope.mains=[];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //请假人的抄送人的多选下拉框
   $scope.carbons=[];
    $scope.carbonsSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};

    $scope.aa=function() {
        var vm = $scope;
        data = {

            startTime: vm.startTime,
            endTime: vm.endTime,
            startDate: angular.element('.startDate').val(),
            endDate: angular.element('.endDate').val()
        }
        if (data.startTime != '' && data.startDate !='' && data.endDate !='') {
            //获取所有岗位
            tesetSer.getTime(data).then(function (response) {
                if (response.data.code == 0) {
                    $scope.time = response.data.data;
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }
    }


    //上次文件

    $scope.isUp = true; //控制按钮颜色
    $scope.files = [];
    $scope.affirmFile = [];
    var oldFiles = [];
    $scope.fileNameChanged = function () {
        $scope.$apply(function () {//触发angular脏检测
            $scope.isUp = false;
            var elFiles = document.getElementById('uploadFile').files;
            for (var i = 0, len = elFiles.length; i < len; i++) {
                var file = elFiles[i];
                var hasOldFile = false;
                for(var ii=0,iiLen=oldFiles.length;ii<iiLen;ii++){
                    if(oldFiles[ii].name==file.name){
                        hasOldFile = true;
                        break;
                    }
                }
                if(!hasOldFile){
                    oldFiles.push(file);
                }
                $scope.files.push({
                    name: file.name,
                    size: file.size,
                    type: file.type
                });
            }
            var obj = document.getElementById('uploadFile');
            obj.outerHTML = obj.outerHTML;
        });
    };
    //删除文件
    $scope.del = function (index) {
        $scope.files.splice(index, 1);
        if (!$scope.files.length) {
            $scope.isUp = true;
        }
    };
    $scope.updataSel = function () {
        var fd = new FormData();
        var _files = $scope.files;
        for (var i = 0; i < oldFiles.length; i++) {
            var f = oldFiles[i];
            for (var b = 0; b < _files.length; b++) {
                if (f.name == _files[b].name) {
                    fd.append('files', f);
                    break;
                }
            }
        }
        if (_files.length) {
            fd.append('id', $scope.uuid);
            $http({
                method: 'POST',
                url: '/vacate/upload',
                headers: {
                    'Content-Type': undefined
                },
                data: fd,
                transformRequest: function (data, headersGetter) {
                    var formData = new FormData();
                    angular.forEach(data, function (value, key) {
                        formData.append(key, value);
                    });
                    return formData;
                }
            }, function (data) {
            }).then(function (response) {
                if (response.data.code == 0) {
                    var obj = document.getElementById('uploadFile');
                    obj.outerHTML = obj.outerHTML;//将input file的选择的文件清空
                    for (var i = 0; i < _files.length; i++) {//向已经确认里面推送
                        $scope.affirmFile.push(_files[i]);
                    }
                    toastr.success("文件上传成功", '温馨提示');
                    $scope.files = [];//预览的数组
                    $scope.isUp = true;//按钮提示
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        }else{
            toastr.info('请选择上传的附件','温馨提示');
        }
    };






    //添加
    $scope.extraAddFun = function(){
        var permitArr=[];
        angular.forEach($scope.mains,function(item){
            permitArr.push(item)
        });
        var permit=[];
        angular.forEach($scope.carbons,function(item){
            permit.push(item)
        });
        var vm = $scope;
        var data={
            mains:permitArr.join(','),
            carbons:permit.join(','),
            employeeNumber:vm.User.employeeNumber,
            uuid:vm.uuid,
            name:vm.User.username,
            area:vm.area,
            depart:vm.depart,
            position:vm.position,
            vacateType:vm.vacateType,
            startTime:vm.startTime,
            endTime:vm.endTime,
            reason:vm.reason,
            handoff:vm.handoff,
            startDate:angular.element('.startDate').val(),
            endDate:angular.element('.endDate').val()
        }


        tesetSer.Addteset(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.overtime.vacateset.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




