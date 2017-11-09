var app = angular.module('helpServe',[]);
app.factory('helpSer',function ($http) {
    var str = "attendance";
    return {
        listData:listData,
        countBaseInfo1:countBaseInfo,
        answer:answer,
        getOneById1:getOneById,
        gitfEdit:gitfEdit,
        helpDetail:helpDetail
    };
    //列表
    function listData(data) {
        data.module = str; 
        return $http.get('/help/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(data){
        data.module = str;
        return $http.get('/help/count',{params:data})
    }
    //解答
    function answer(data){
        return $http.post('/help/answer',data)
    }
    //详情
    function helpDetail(data){
        return $http.get('/help/helpDetail',{params:data})
    }
    //id编辑
    function getOneById(data) {
        data.module = str;
        return $http.post('/help/getOneById',data)
    }
    //编辑
    function gitfEdit(data){
        data.module = str;
        return $http.post('/help/edit',data)
    }
});
