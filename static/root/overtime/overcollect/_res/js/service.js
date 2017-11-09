var app = angular.module('overcollectServer',[]);
app.factory('overcollectSer',function ($http) {
    return {
       /* menuPermission:menuPermission,*/
        overCollcet:overCollcet,
        Departssteset:Departssteset



    };
  /*  //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarrecordcollect/guidePermission'+data);
    }*/
    //月汇总
    function overCollcet(data){
        return $http.get('/overwork/out/work/count',{params:data})
    }
    //获取所有部门
    function Departssteset() {
        return $http.get('/vacate/departs')
    }

});
