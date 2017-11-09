var app = angular.module('financesetServer',[]);
app.factory('financesetSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        financesetList :financesetList ,
        Addfinanceset:Addfinanceset,
        findfinancesetId:findfinancesetId,
        financesetDelete:financesetDelete,
        Countfinancesett:Countfinancesett,
        Editfinanceset:Editfinanceset,
        Alldeparts:Alldeparts,
        Alluser:Alluser


    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function financesetList(data) {
        return $http.get('/financeset/list',{
            params: data
        })
    }
    //id查询find
    function findfinancesetId(data){
        return $http.get('/financeset/finance/set',{
            params:data
        })
    }
    //计算总数量
    function Countfinancesett() {
        return $http.get('/financeset/count')
    }
    //添加
    function Addfinanceset(data){
        return $http.post('/financeset/save',data)
    }
    //编辑
    function Editfinanceset(data){
        return $http.post('/financeset/edit',data)
    }

    //删除
    function financesetDelete(data) {
        return $http.get('/financeset/delete', {
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

