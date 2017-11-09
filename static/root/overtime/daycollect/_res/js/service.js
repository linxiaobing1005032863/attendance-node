var app = angular.module('daycollectServer',[]);
app.factory('daycollectSer',function ($http) {
    return {
       /* menuPermission:menuPermission,*/
        dayCollcet:dayCollcet,
        Departssteset:Departssteset



    };
  /*  //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarrecordcollect/guidePermission'+data);
    }*/
    //月汇总
    function dayCollcet(data){
        return $http.get('/dayreport/day/count',{params:data})
    }
    //获取所有部门
    function Departssteset() {
        return $http.get('/vacate/departs')
    }
});
