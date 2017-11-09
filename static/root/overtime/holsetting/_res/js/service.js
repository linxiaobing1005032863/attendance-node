var app = angular.module('holsetServer',[]);
app.factory('holsetSer',function ($http) {
    return {
        menuPermission : menuPermission,
        holsetList :holsetList ,
        Addholset:Addholset,
        findholsetId:findholsetId,
        holsetDelete:holsetDelete,
        Countholset:Countholset,
        Editholset:Editholset,
        holsetTime:holsetTime,
        holsetUser:holsetUser

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/holidayset/guidePermission/'+data);
    }
    //列表
    function holsetList(data) {
        return $http.get('/holidayset/list',{
            params: data
        })
    }
    //id查询find
    function findholsetId(data){
        return $http.get('/holidayset/holiday/set',{
            params:data
        })
    }
    //计算总数量
    function Countholset() {
        return $http.get('/holidayset/count')
    }
    //添加
    function Addholset(data){
        return $http.post('/holidayset/save',data)
    }
    //编辑
    function Editholset(data){
        return $http.post('/holidayset/edit',data)
    }

    //删除
    function holsetDelete(data) {
        return $http.get('/holidayset/delete', {
            params: data
        })
    }
    //获取假期天数
    function holsetTime(data){
        return $http.get('/holidayset/get/time',{
            params:data
        })
    }
    //获取创建人
    function holsetUser(data){
        return $http.get('/holidayset/current/user',{
            params:data
        })
    }
});

