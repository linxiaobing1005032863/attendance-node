var app = angular.module('versionInfoUpload', ['toastr']);
app.controller('versionInfoUploadCtrl', function ($scope, versionInfoSer, $state, toastr, $http, $stateParams) {
    $scope.isUp = true;//控制按钮颜色
    $scope.files = [];
    $scope.affirmFile = [];
    var oldFiles = [];
    $scope.folderList = [];
    //获取所有的文件夹
    versionInfoSer.getFolder().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            for(var i = 0; i < data.length;i++){
                $scope.folderList.push({
                    name:data[i],
                    length:0
                })
            }
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    })
    $scope.return = function(){//返回按钮
        $scope.folder = !$scope.folder;
        var obj = document.getElementById('uploadFile');
        obj.outerHTML = obj.outerHTML;//将input file的选择的文件清空
        $scope.files = [];//预览的数组
        $scope.isUp = true;//按钮提示
    }
    $scope.folderFn = function(val){//点击获取当前的文件夹名字
        $scope.folder = val;
    }
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
            fd.append('id', $stateParams.id);
            fd.append('folder',$scope.folder);
            fd.append('module','attendance');//必须修改的
            $http({
                method: 'POST',
                url: '/versionInfo/upload',
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
                console.info(data);
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
    //外面
    $scope.folderChange =function(obj){
        $scope.$apply(function(){
            var index = obj.id.split('e')[1];
            $scope.folderList[index].success = false;
            $scope.folderList[index].length = obj.files.length;
        })
    }
    $scope.upFileFn = function(val,n){
        var fileDom = document.getElementById('file'+val);
        var fd = new FormData();
        if(fileDom.files.length){
            for(var i = 0; i < fileDom.files.length;i++){
                var f = fileDom.files[i];
                fd.append('files',f);
            }
            fd.append('id', $stateParams.id);
            fd.append('folder',n);
            fd.append('module','dispatchcar');//必须修改的
            $http({
                method: 'POST',
                url: '/versionInfo/upload',
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
            }).then(function (response) {
                if (response.data.code == 0) {
                    $scope.folderList[val].success = true;
                    toastr.success("文件上传成功", '温馨提示');
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            })
        }
    }
});




