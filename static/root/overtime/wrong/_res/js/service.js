var app = angular.module('wrongServer',[]);
app.factory('wrongSer',function ($http) {
    return {
        menuPermission : menuPermission,
        wrongList :wrongList ,
        findwrongId:findwrongId,
        Countwrong:Countwrong,
        wrongEdit:wrongEdit

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/financeattendance/guidePermission/'+data);
    }
    //列表
    function wrongList(data) {
        return $http.get('/financeattendance/aduit/list',{
            params: data
        })
    }
    //id查询find
    function findwrongId(data){
        return $http.get('/financeattendance/one',{
            params:data
        })
    }
    //计算总数量
    function Countwrong() {
        return $http.get('/financeattendance/aduit/list/num')
    }
    //审核
    function wrongEdit(data){
        return $http.post('/financeattendance/audit',data)
    }

  /*  //删除
    function extraDelete(data) {
        return $http.get('/overwork/delete', {
            params: data
        })
    }

    //获取任务下达人或加班人员
    function peopleList(data) {
        return $http.get('/overwork/peopleList',{
            params: data
        })
    }
 //获取加班时长和可休天数
    function caculateTime(data){
        return $http.post('/overwork/caculateTime',data)
    }
    //地区
    function areaList(data) {
        return $http.get('/overwork/areaList',{
            params: data
        })
    }
    //根据加班人员获取部门和职位
    function positAndDepart(data) {
        return $http.get('/overwork/positAndDepart',{
            params: data
        })
    }*/
});

