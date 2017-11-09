var app = angular.module('financollectServer',[]);
app.factory('financollectSer',function ($http) {
    return {
       /* menuPermission:menuPermission,*/
        finanCollect:finanCollect,
        Alluser:Alluser,
        Allfields:Allfields



    };
  /*  //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarrecordcollect/guidePermission'+data);
    }*/
    //汇总
    function finanCollect(data){
        return $http.get('/financeattendance/finance/count',{params:data})
    }
    //获取所有用户
    function Alluser() {
        return $http.get('/financeattendance/user')
    }
    function Allfields(data){
        return $http.get('/financeattendance/fields',{params:data})
    }


});
