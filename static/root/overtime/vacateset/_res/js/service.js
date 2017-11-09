var app = angular.module('tesetServer',[]);
app.factory('tesetSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        tesetList :tesetList ,
        Addteset:Addteset,
        findtesetId:findtesetId,
        tesetDelete:tesetDelete,
        Countteset:Countteset,
        Uuidteset:Uuidteset,
        Userteset:Userteset,
        Areasteset:Areasteset,
        Departssteset:Departssteset,
        Positionsteset:Positionsteset,
        tesetMains:tesetMains,
        carbons:carbons,
        viewTeset:viewTeset,
        Editteset:Editteset,
        getTime:getTime

    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function tesetList(data) {
        return $http.get('/vacate/list',{
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
    function Countteset() {
        return $http.get('/vacate/count')
    }
    //添加
    function Addteset(data){
        return $http.post('/vacate/save',data)
    }
    //编辑
    function Editteset(data){
        return $http.post('/vacate/fill',data)
    }

    //删除
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
    }
    //获取请假天数
    function getTime(data) {
        return $http.get('/vacate/get/time', {
            params: data
        })
    }
  //附件列表
    function viewTeset(data){
        return $http.get('/vacate/listFile',{params:data})
    }
});

