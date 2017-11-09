var app = angular.module('reviewServer',[]);
app.factory('reviewSer',function ($http) {
    return {
        menuPermission : menuPermission,
        reviewList :reviewList ,
        Addreview:Addreview,
        reviewDelete:reviewDelete,
        Countreview:Countreview,
        caculateTime:caculateTime,
        peopleList:peopleList,
        areaList:areaList



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/overworkaudit/guidePermission/'+data);
    }
    //列表
    function reviewList(data) {
        return $http.get('/overworkaudit/list',{
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
    function Countreview() {
        return $http.get('/overwork/count')
    }
    //添加
    function Addreview(data){
        return $http.post('/overworkaudit/audit',data)
    }

    //删除
    function reviewDelete(data) {
        return $http.get('/overworkaudit/delete', {
            params: data
        })
    }

    //获取任务下达人或加班人员
    function peopleList(data) {
        return $http.get('/overworkaudit/peopleList',{
            params: data
        })
    }
    //获取加班时长和可休天数
    function caculateTime(data) {
        return $http.get('/overworkaudit/caculateTime', {
            params: data
        })
    }
    //地区
    function areaList(data) {
        return $http.get('/overworkaudit/areaList',{
            params: data
        })
    }

});

