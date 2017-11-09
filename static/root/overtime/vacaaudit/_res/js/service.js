var app = angular.module('auditServer',[]);
app.factory('auditSer',function ($http) {
    return {
        menuPermission : menuPermission,
        auditList :auditList ,
        Countaudit:Countaudit,
        auditVacate:auditVacate,
        auditTeset:auditTeset,
        findtesetId:findtesetId
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/vacate/guidePermission/'+data);
    }
    //列表
    function auditList(data) {
        return $http.get('/vacate/audit/list',{
            params: data
        })
    }

    //id查询find
    function findtesetId(data){
        return $http.get('/vacate/vacate',{
            params:data
        })
    }
    //计算总数量
    function Countaudit() {
        return $http.get('/vacate/audit/list/count')
    }
    //审核
    function auditVacate(data){
        return $http.post('/vacate/audit',data)
    }
    // //附件列表
    function auditTeset(data){
        return $http.get('/vacate/listFile',{params:data})
    }
    /*//添加
    function Addteset(data){
        return $http.post('/vacate/save',data)
    }*/

   /* //删除
    function tesetDelete(data) {
        return $http.get('/vacate/delete', {
            params: data
        })
    }
    //获取uuid
    function Uuidteset() {
        return $http.get('/vacate/uuid')
    }
    //获取当前用户
    function Userteset() {
        return $http.get('/vacate/user')
    }
    //获取所有地区
    function Areasteset() {
        return $http.get('/vacate/areas')
    }
    //获取所有部门
    function Departssteset() {
        return $http.get('/vacate/departs')
    }
    //获取所有岗位
    function Positionsteset() {
        return $http.get('/vacate/positions')
    }
    //获取请假人的主送人
    function tesetMains(data) {
        return $http.get('/vacate/mains', {
            params: data
        })
    }
    //获取请假人的抄送人
    function carbons(data) {
        return $http.get('/vacate/carbons', {
            params: data
        })
    }*/
 
});

