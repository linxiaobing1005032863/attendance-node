var app = angular.module('financeServer',[]);
app.factory('financeSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        financeList :financeList ,
        findfinanceId:findfinanceId,
        financeEdit:financeEdit,
        Allcharge:Allcharge,
        Allmanager:Allmanager,
        Alluser:Alluser

    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function financeList(data) {
        return $http.get('/financeattendance/list',{
            params: data
        })
    }
    //id查询find
    function findfinanceId(data){
        return $http.get('/financeattendance/one',{
            params:data
        })
    }
    //申请反馈审批
    function financeEdit(data){
        return $http.post('/financeattendance/apply',data)
    }


    //查找负责人
    function Allcharge(data) {
        return $http.get('/financeattendance/find/charge',{
            params: data
        })
    }
    //查找项目经理
    function Allmanager(data) {
        return $http.get('/financeattendance/project/manager',{
            params: data
        })
    }
    //所有用户
    function Alluser(data) {
        return $http.get('/financeattendance/user',{
            params: data
        })
    }
});

