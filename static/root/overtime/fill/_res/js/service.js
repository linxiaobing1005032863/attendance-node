var app = angular.module('fillServer',[]);
app.factory('fillSer',function ($http) {
    return {
        /*menuPermission : menuPermission,*/
        fillList :fillList ,
        Addfill:Addfill,
        Editfill:Editfill,
        findfillId:findfillId,
        fillDelete:fillDelete,
        Countfill:Countfill,
        congealfill:congealfill,
        Thawfill:Thawfill,
        caculateTime:caculateTime
       



    };
  /*  //菜单权限
    function menuPermission(data) {
        return $http.get('/bonusbudget/guidePermission'+data);
    }*/
    //列表
    function fillList(data) {
        return $http.get('/extraloverwork/list',{
            params: data
        })
    }
    //id查询find
    function findfillId(data){
        return $http.get('/extraloverwork/getOneById',{
            params:data
        })
    }
    //计算总数量
    function Countfill() {
        return $http.get('/extraloverwork/count')
    }
    //添加
    function Addfill(data){
        return $http.post('/extraloverwork/add',data)
    }

    //编辑
    function Editfill(data){
        return $http.post('/extraloverwork/edit',data)
    }

    //删除
    function fillDelete(data){
        return $http.get('/extraloverwork/delete',{
            params: data
        })
    }
    //冻结
    function congealfill(data){
        return $http.get('/dispatchcarinfo/freeze',{
            params: data
        })
    }
    //解冻
    function Thawfill(data){
        return $http.get('/dispatchcarinfo/unfreeze',{
            params: data
        })
    }
    //获取补班天数
    function caculateTime(data) {
        return $http.get('/extraloverwork/caculateTime',{
            params: data
        })
    }


});

