var app = angular.module('leaveServer',[]);
app.factory('leaveSer',function ($http) {
    return {
        menuPermission : menuPermission,
        leaveList :leaveList ,
        Addleave:Addleave,
        Editleave:Editleave,
        findleaveId:findleaveId,
        leaveDelete:leaveDelete,
        Countleave:Countleave,

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/vacateset/guidePermission/'+data);
    }
    //列表
    function leaveList(data) {
        return $http.get('/vacateset/list',{
            params: data
        })
    }
    //id查询find
    function findleaveId(data){
        return $http.get('/vacateset/vacate/set',{
            params:data
        })
    }
    //计算总数量
    function Countleave() {
        return $http.get('/vacateset/count')
    }
    //添加
    function Addleave(data){
        return $http.post('/vacateset/save',data)
    }

    //编辑
    function Editleave(data){
        return $http.post('/vacateset/edit',data)
    }

    //删除
    function leaveDelete(data){
        return $http.get('/vacateset/delete',{
            params: data
        })
    }
 /*   //冻结
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
*/

});

