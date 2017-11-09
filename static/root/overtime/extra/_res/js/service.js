var app = angular.module('extraServer',[]);
app.factory('extraSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        extraList :extraList ,
        Addextra:Addextra,
        findextraId:findextraId,
        extraDelete:extraDelete,
        Countextra:Countextra,
        caculateTime:caculateTime,
        peopleList:peopleList,
        areaList:areaList,
        positAndDepart:positAndDepart



    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function extraList(data) {
        return $http.get('/overwork/list',{
            params: data
        })
    }
    //id查询find
    function findextraId(data){
        return $http.get('/overwork/getOneById',{
            params:data
        })
    }
    //计算总数量
    function Countextra() {
        return $http.get('/overwork/count')
    }
    //添加
    function Addextra(data){
        return $http.post('/overwork/add',data)
    }

    //删除
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
    }
});

