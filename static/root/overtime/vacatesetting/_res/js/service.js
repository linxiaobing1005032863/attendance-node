var app = angular.module('vacatesetServer',[]);
app.factory('vacatesetSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        vacatesetList :vacatesetList ,
        Addvacateset:Addvacateset,
        findvacatesetId:findvacatesetId,
        vacatesetDelete:vacatesetDelete,
        Countvacateset:Countvacateset,
        Editvacateset:Editvacateset,
        Alldeparts:Alldeparts,
        Alluser:Alluser


    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function vacatesetList(data) {
        return $http.get('/vacatecountset/list',{
            params: data
        })
    }
    //id查询find
    function findvacatesetId(data){
        return $http.get('/vacatecountset/vacate/count/set',{
            params:data
        })
    }
    //计算总数量
    function Countvacateset() {
        return $http.get('/vacatecountset/count')
    }
    //添加
    function Addvacateset(data){
        return $http.post('/vacatecountset/save',data)
    }
    //编辑
    function Editvacateset(data){
        return $http.post('/vacatecountset/edit',data)
    }

    //删除
    function vacatesetDelete(data) {
        return $http.get('/vacatecountset/delete', {
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

