var app = angular.module('remainServer',[]);
app.factory('remainSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        remainList :remainList ,
        Countremain:Countremain,



    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function remainList(data) {
        return $http.get('/overworkrestday/list',{
            params: data
        })
    }

    //计算总数量
    function Countremain() {
        return $http.get('/overworkrestday/count')
    }

});

