var app = angular.module('extraServer',[]);
app.factory('pointSer',function ($http) {
    return {
      /*  menuPermission : menuPermission,*/
        pointList :pointList ,
        Addpoint:Addpoint,
        Editpoint:Editpoint,
        findpointId:findpointId,
        pointDelete:pointDelete,
        Countpoint:Countpoint,
        pointASreas:pointASreas,
        areas:areas,
        congealinfo:congealinfo,
        Thawinfo:Thawinfo,



    };
    /*//菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchcarinfo/guidePermission'+data);
    }*/
    //列表
    function pointList(data) {
        return $http.get('/arrestpoint/list',{
            params: data
        })
    }
    //id查询find
    function findpointId(data){
        return $http.get('/arrestpoint/arrestPoint',{
            params:data
        })
    }
    //计算总数量
    function Countpoint() {
        return $http.get('/arrestpoint/count')
    }
    //添加
    function Addpoint(data){
        return $http.post('/arrestpoint/save',data)
    }
    //编辑
    function Editpoint(data){
        return $http.post('/arrestpoint/edit',data)
    }

    //删除
    function pointDelete(data) {
        return $http.get('/arrestpoint/delete', {
            params: data
        })
    }
    //获取所有驻点地点
    function pointASreas(data) {
        return $http.get('/arrestpoint/pointAreas',{
            params: data
        })
    }
    //获取所有地区
    function areas(data) {
        return $http.get('/arrestpoint/areas',{
            params: data
        })
    }
    //禁用

    function congealinfo(data){
        return $http.post('/arrestpoint/stop',data)
    }
    //启用

    function Thawinfo(data){
        return $http.post('/arrestpoint/start',data)
    }
/*
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

