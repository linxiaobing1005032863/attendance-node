var app = angular.module('daysetServer',[]);
app.factory('daysetSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        daysetList :daysetList ,
        Adddayset:Adddayset,
        finddaysetId:finddaysetId,
        daysetDelete:daysetDelete,
        Countdayset:Countdayset,
        Editdayset:Editdayset,
        Alldeparts:Alldeparts,
        Alluser:Alluser

    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function daysetList(data) {
        return $http.get('/daycountset/list',{
            params: data
        })
    }
    //id查询find
    function finddaysetId(data){
        return $http.get('/daycountset/day/count/set',{
            params:data
        })
    }
    //计算总数量
    function Countdayset() {
        return $http.get('/daycountset/count')
    }
    //添加
    function Adddayset(data){
        return $http.post('/daycountset/save',data)
    }
    //编辑
    function Editdayset(data){
        return $http.post('/daycountset/edit',data)
    }

    //删除
    function daysetDelete(data) {
        return $http.get('/daycountset/delete', {
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

