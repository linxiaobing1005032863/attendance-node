var app = angular.module('oversetServer',[]);
app.factory('oversetSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        oversetList :oversetList ,
        Addoverset:Addoverset,
        findoversetId:findoversetId,
        oversetDelete:oversetDelete,
        Countoverset:Countoverset,
        Editoverset:Editoverset,
        Alldeparts:Alldeparts,
        Alluser:Alluser

    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function oversetList(data) {
        return $http.get('/overworkcountset/list',{
            params: data
        })
    }
    //id查询find
    function findoversetId(data){
        return $http.get('/overworkcountset/over/work/count/set',{
            params:data
        })
    }
    //计算总数量
    function Countoverset() {
        return $http.get('/overworkcountset/count')
    }
    //添加
    function Addoverset(data){
        return $http.post('/overworkcountset/save',data)
    }
    //编辑
    function Editoverset(data){
        return $http.post('/overworkcountset/edit',data)
    }

    //删除
    function oversetDelete(data) {
        return $http.get('/overworkcountset/delete', {
            params: data
        })
    }
    //获取全部部门
    function Alldeparts(data) {
        return $http.get('/vacate/departs',{
            params: data
        })
    }
    //获取汇总对象
    function Alluser(data) {
        return $http.get('/financeattendance/user',{
            params: data
        })
    }
});

