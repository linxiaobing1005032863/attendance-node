var app = angular.module('punchServer',[]);
app.factory('punchSer',function ($http) {
    return {
        menuPermission : menuPermission,
        punchList :punchList ,
        punchPc:punchPc,
        Countpunch:Countpunch,
        punchUsers:punchUsers



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/punch/guidePermission/'+data);
    }
    //列表
    function punchList(data) {
        return $http.get('/punch/list',{
            params: data
        })
    }
    //打卡
    function punchPc(data){
        return $http.post('/punch/pc',data)
    }
    //计算总数量
    function Countpunch() {
        return $http.get('/punch/count')
    }
    //获取所有用户
    function punchUsers(data) {
        return $http.get('/punch/users',{
            params: data
        })
    }
   /* //删除
    function punchDelete(data) {
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

