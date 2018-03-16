var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
//设置导航权限
    this.vacateSetButton = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/vacate/v1/setButtonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.vacateSonPer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 10000,
            uri : config()['rurl'] + '/vacate/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //打卡管理列表导航
    this.punchPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/punch/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //日报导航
    this.dayPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dayreport/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //请假审核导航
    this.vacatePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //请假设置导航
    this.vacatesetPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacateset/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //加班审核导航
    this.overauditPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //财务出勤审核导航
    this.financePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //假期设置导航
    this.holidayPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //审批时间设置导航
    this.auditsetPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //加班列表 列表
    this.overList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 加班列表添加
    this.overAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/add`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //加班列表 获取ID
    this.findoverId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //加班列表
    this.overDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //加班列表
    this.getoverTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取任务下达人或加班人员
    this.peopleList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/peopleList`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取加班时长和可休天数


    this.caculateTime = function(argvs){
        console.log(argvs)
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/caculateTime`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            },

        };
        return request(options);
    };
    //获取地区
    this.areaList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/areaList`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据加班人员获取部门和职位
    this.AndDepart = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/positAndDepart/${encodeURI(argvs.overWorker)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //加班审核的列表
    this.overworkList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //加班审核的审核
    this.overworkAudit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/audit${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //删除加班审核
    this.overworkDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取加班审核总条数
    this.getoverworkTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取任务下达人或加班人员
    this.overworkpeopleList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/peopleList${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取下班时长和可休天数
    this.overworkcaculateTime = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/caculateTime${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //加班审核的列表
    this.overworkList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkaudit/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有用户//获取所有用户
    this.punchUsers = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/punch/v1/users`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //剩余天数的列表
    this.getTime = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/get/time${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取剩余天数总条数
    this.getoverdayTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkrestday/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补班设置的列表
    this.extralList = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取补班设置总条数
    this.getextralTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补班设置添加
    this.extralAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //ID查询补班设置
    this.findextralId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除补班设置
    this.extralDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补班设置编辑
    this.extralEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取补班天数
    this.extralTime = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/extraloverwork/v1/caculateTime${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //打卡列表
    this.punchList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/punch/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

   //pc端打卡

    this.punchPc = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/punch/v1/pc${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //加班列表
    this.getpunchTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/punch/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //请假管理 列表
    this.overdayList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkrestday/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };

    //请假管理 列表
    this.vacateList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    // 请假管理添加
    this.vacateAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/save${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

/*    //加班列表 获取ID
    this.findoverId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overwork/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };*/
    //删除 //请假管理
    this.vacateDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //请假管理
    this.getvacateTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //请假管理 获取uuid
    this.vacateUuid = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/uuid`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    ////id查询find
    this.findvacateId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/vacate/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //  //获取当前用户
    this.getUsename = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/user`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有部门
    this.getDeparts= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/departs`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有岗位
    this.getPositions= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/positions`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取请假人的主送人
    this.getMains = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/mains/${encodeURI(argvs.name)}`,

            headers:{
                userToken:argvs.userToken
            }
        };
        console.log(options)
        return request(options);
    };
    //获取请假人的抄送人
    this.getCarbons = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/carbons/${encodeURI(argvs.name)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //地区
    this.getAreas = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/areas`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

//请假管理 上传附件
    this.vacateUploadFile = function (argvs) {
        var options = {
            url: config()['rurl'] + `/vacate/v1/uploadFile/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
   //请假管理 查看附件
    this.vacateEnclosure = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/vacate/v1/listFile/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }

        };
        return request(options);
    };

   //请假管理 删除文件
    this.delFile = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/vacate/v1/deleteFile`,
            headers: {
                userToken: argvs.userToken
            },
            form: argvs.fields
        };
        return request(options);
    };
    //请假管理  补录
    this.vacateFill = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/fill${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    
       //审核列表 列表
    this.vacateauditList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/audit/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
       //审核列表总条数
    this.getvacateauditTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/audit/list/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
       // 审核
    this.vacateAudit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/vacate/v1/audit${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //驻点设置列表
    this.pointList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/arrestpoint/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //驻点设置
    this.pointDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //驻点设置
    this.getpointTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 驻点设置添加
    this.pointAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/save${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //驻点设置编辑
    this.pointEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/edit${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 驻点设置启用
    this.pointStart = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/start/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 驻点设置禁用
    this.pointStop = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/stop/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有驻点地点
    this.pointAreas = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/pointAreas`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有地区
    this.pointareas = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/areas`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //加班列表 获取ID
    this.arrestPoint = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arrestpoint/v1/arrestPoint/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //请假设置列表
    this.leaveList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/vacateset/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    // 请假设置添加
    this.leaveAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + `/vacateset/v1/save`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //请假设置编辑
    this.leaveEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/vacateset/v1/edit`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    ////根据id查询请假设置
    this.leaveInfoId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/vacateset/v1/vacate/set/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };

    ////删除请假设置
   /* this.leaveDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/vacateset/v1/delete/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };*/
    //删除 //请假管理
    this.leaveDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/vacateset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取请假设置总条数
    this.getleaveTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/vacateset/v1/count`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //日报列表
    this.reportList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dayreport/v1/list${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //日报列表 汇总
    this.dayCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dayreport/v1/day/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //请假汇总  汇总
    this.vacateCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/vacate/v1/vacate/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //加班汇总 汇总
    this.overworkCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/overwork/v1/out/work/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //考勤情况汇总
    this.punchCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 20000,
            uri: config()['rurl'] + `/punch/v1/case/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //财务出勤表汇总
    this.financeCollect = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 20000,
            uri: config()['rurl'] + `/financeattendance/v1/finance/count${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //汇总详细字段信息
    this.financeFields = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 20000,
            uri: config()['rurl'] + `/financeattendance/v1/fields${urlEncode(argvs, true)}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };


    //财务出勤表
    this.finanList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //申请反馈审批
    this.finanApply = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/apply${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //审核列表总条数
    this.getfinanTotal = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/financeattendance/v1/aduit/list/num`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };
    //通过id查找
    this.findfinanId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/financeattendance/v1/one/${argvs.id}`,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    };


    //审核列表
    this.finanaduitList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/aduit/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //审核
    this.finanAduit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/audit${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    ////查找项目经理
    this.Allmanager = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/project/manager`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //查找负责人
    this.Allcharge = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeattendance/v1/find/charge`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //所有用户
    this.Alluser = function(argvs){
        var options = {
            method : 'GET',
            timeout : 15000,
            uri : config()['rurl'] + `/financeattendance/v1/user`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //考勤情况汇总设置 列表
    this.casecountList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 考勤情况汇总设置添加
    this.casecountAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 考勤情况汇总设置编辑
    this.casecountEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //考勤情况汇总设置获取ID
    this.findcasecountIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/case/count/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //考勤情况汇总设置
    this.casecountDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //考勤情况汇总设置
    this.getcasecountTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //定时检测发送
    this.casecountSend = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/casecountset/v1/send`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //财务出勤设置 列表
    this.finansetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 财务出勤设置添加
    this.finansetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/financeset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 财务出勤设置编辑
    this.finansetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/financeset/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //财务出勤设置获取ID
    this.findfinansetIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeset/v1/finance/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //财务出勤设置
    this.finansetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/financeset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //财务出勤设置
    this.getfinansetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/financeset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //加班汇总通报设置 列表
    this.overworksetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkcountset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 加班汇总通报设置 添加
    this.overworksetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkcountset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 加班汇总通报设置编辑
    this.overworksetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkcountset/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //加班汇总通报设置获取ID
    this.findoverworksetIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkcountset/v1/over/work/count/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //加班汇总通报设置
    this.overworksetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkcountset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //加班汇总通报设置
    this.getoverworksetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/overworkcountset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //请假汇总通报设置 列表
    this.vacateseList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacatecountset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 请假汇总通报设置 添加
    this.vacateseAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/vacatecountset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 请假汇总通报设置编辑
    this.vacateseEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/vacatecountset/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //请假汇总通报设置获取ID
    this.findvacateseIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacatecountset/v1/vacate/count/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //请假汇总通报设置
    this.vacateseDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/vacatecountset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //请假汇总通报设置
    this.getvacatesetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/vacatecountset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //日报汇总设置 列表
    this.daysetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/daycountset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 日报汇总设置 添加
    this.daysetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/daycountset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 日报汇总设置编辑
    this.daysetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/daycountset/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //日报汇总设置获取ID
    this.finddaysetIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/daycountset/v1/day/count/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //日报汇总设置
    this.daysetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/daycountset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //日报汇总设置
    this.getdaysetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/daycountset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //假期设置 列表
    this.holidaysetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 假期设置 添加
    this.holidaysetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //假期设置编辑
    this.holidaysetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/edit${urlEncode(argvs,true)}`,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //假期设置ID
    this.findholidaysetIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/holiday/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //假期设置
    this.holidaysetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //假期设置
    this.getholidaysetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取假期天数
    this.getholidaysetTime = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/get/time/${argvs.startTime}/${argvs.endTime}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取创建人
    this.getholidaysetUser= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayset/v1/current/user`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //审批时间设置 列表
    this.auditsetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //审批时间设置 添加
    this.auditsetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/save`,
            form:argvs,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //审批时间设置编辑
    this.auditsetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/edit${urlEncode(argvs,true)}`,

            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //审批时间设置ID
    this.findauditsetIdss = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/audit/time/set/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除 //审批时间设置
    this.auditsetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数  //审批时间设置
    this.getauditsetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/audittimeset/v1/count`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //权限设置
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }

        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };


    return this;
}