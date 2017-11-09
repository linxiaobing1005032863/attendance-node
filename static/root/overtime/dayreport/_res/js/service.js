var app = angular.module('reportServer',[]);
app.factory('reportSer',function ($http) {
    return {
        menuPermission : menuPermission,
        reportList :reportList ,
        Alluser:Alluser



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dayreport/guidePermission/'+data);
    }
    //列表
    function reportList(data) {
        return $http.get('/dayreport/list',{
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

