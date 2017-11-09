var app = angular.module('punchcollectServer',[]);
app.factory('punchcollectSer',function ($http) {
    return {
       /* menuPermission:menuPermission,*/
        punchCollect:punchCollect,
        Departssteset:Departssteset



    };
  /*  //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarrecordcollect/guidePermission'+data);
    }*/
    //考勤情况汇总
    function punchCollect(data){
        return $http.get('/punch/case/count',{params:data})
    }
    //获取所有部门
    function Departssteset() {
        return $http.get('/vacate/departs')
    }

});
