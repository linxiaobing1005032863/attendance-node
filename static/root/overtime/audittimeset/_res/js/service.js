var app = angular.module('auditsetServer',[]);
app.factory('auditsetSer',function ($http) {
    return {
        menuPermission : menuPermission,
        auditsetList :auditsetList ,
        Addauditset:Addauditset,
        findauditsetId:findauditsetId,
        auditsetDelete:auditsetDelete,
        Countauditset:Countauditset,
        Editauditset:Editauditset,
        auditsetdeparts:auditsetdeparts,
        auditsetpositions:auditsetpositions


    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/audittimeset/guidePermission/'+data);
    }
    //列表
    function auditsetList(data) {
        return $http.get('/audittimeset/list',{
            params: data
        })
    }
    //id查询find
    function findauditsetId(data){
        return $http.get('/audittimeset/audit/time/set',{
            params:data
        })
    }
    //计算总数量
    function Countauditset() {
        return $http.get('/audittimeset/count')
    }
    //添加
    function Addauditset(data){
        return $http.post('/audittimeset/save',data)
    }
    //编辑
    function Editauditset(data){
        return $http.post('/audittimeset/edit',data)
    }

    //删除
    function auditsetDelete(data) {
        return $http.get('/audittimeset/delete', {
            params: data
        })
    }
    //获取项目组
    function auditsetdeparts(data) {
        return $http.get('/vacate/departs', {
            params: data
        })
    }
    //获取岗位
    function auditsetpositions(data) {
        return $http.get('/vacate/positions', {
            params: data
        })
    }


});

