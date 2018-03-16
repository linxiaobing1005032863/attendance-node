var app = angular.module('collectServer',[]);
app.factory('collectSer',function ($http) {
    return {
       /* menuPermission:menuPermission,*/
        cateCollcet:cateCollcet,
        Departssteset:Departssteset,
        findtesetId:findtesetId,
        getUser:getUser



    };
  /*  //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarrecordcollect/guidePermission'+data);
    }*/
    //月汇总
    function cateCollcet(data){
        return $http.get('/vacate/vacate/count',{params:data})
    }
    //获取所有部门
    function Departssteset() {
        return $http.get('/vacate/departs')
    }
    //id查询find
    function findtesetId(data){
        return $http.get('/vacate/vacate',{
            params:data
        });
    }
    //获取所有用户
    function getUser() {
        return $http.get('/financeattendance/user');
    }

});
