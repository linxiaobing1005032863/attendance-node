var app = angular.module('versionInfoServe',[]);
app.factory('versionInfoSer',function ($http) {
    var str = "attendance";
    return {
        listData:listData,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        gitfEdit:gitfEdit,
        deleteData:deleteData,
        allPeople:allPeople,
        getFolder:getFolder,
        fileList:fileList,
        findDetail:findDetail,
        ask:ask
    };
    //列表
    function listData(data) {
        data.module = str; 
        return $http.get('/versionInfo/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(data){
        data.module = str;
        return $http.get('/versionInfo/count',{params:data})
    }
    //添加
    function addMarketserveapply(data){
        data.module = str;
        return $http.post('/versionInfo/add',data)
    }
    //id编辑
    function getOneById(data) {
        data.module = str;
        return $http.post('/versionInfo/getOneById',data)
    }
    //编辑
    function gitfEdit(data){
        data.module = str;
        return $http.post('/versionInfo/edit',data)
    }
    //删除
    function deleteData(data){
        return $http.post('/versionInfo/delete',data)
    }
    //获取所有人
    function allPeople(){
        return $http.get('/versionInfo/allPeople')
    }
    //获取文件夹
    function getFolder(){
        return $http.get('/versionInfo/getFolder')
    }
    //附件列表
    function fileList(data){
        data.module = str;
        return $http.get('/versionInfo/listFile',{params:data})
    }
    //获取详情
    function findDetail(data){
        return $http.get('/versionInfo/findDetail',{params:data})
    }
    //添加
    function ask(data){
        return $http.post('/versionInfo/ask',data)
    }
});
