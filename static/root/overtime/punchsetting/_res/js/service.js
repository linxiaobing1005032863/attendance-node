var app = angular.module('punchsettingServer',[]);
app.factory('punchsettingSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        punchsetList :punchsetList ,
        Addpunchset:Addpunchset,
        findpunchsetId:findpunchsetId,
        punchsetDelete:punchsetDelete,
        Countpunchset:Countpunchset,
        Editpunchset:Editpunchset,
        Allsend:Allsend,
        Alldeparts:Alldeparts,
        Alluser:Alluser


    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function punchsetList(data) {
        return $http.get('/casecountset/list',{
            params: data
        })
    }
    //id查询find
    function findpunchsetId(data){
        return $http.get('/casecountset/case/count/set',{
            params:data
        })
    }
    //计算总数量
    function Countpunchset() {
        return $http.get('/casecountset/count')
    }
    //添加
    function Addpunchset(data){
        return $http.post('/casecountset/save',data)
    }
    //编辑
    function Editpunchset(data){
        return $http.post('/casecountset/edit',data)
    }

    //删除
    function punchsetDelete(data) {
        return $http.get('/casecountset/delete', {
            params: data
        })
    }
    //定时检测发送
    function Allsend(data) {
        return $http.get('/casecountset/send',{
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

