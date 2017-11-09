var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    
    //列表 版本信息 
   this.versionInfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目  版本信息
    this.versionInfoCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/count${urlEncode(argvs,true)}`,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加 版本信息
    this.versionInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 版本信息
     this.versionInfoById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/version/${argvs.id}`,
            form : argvs,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 版本信息
    this.versionInfoEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 版本信息
    this.versionInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.allUsers= function(argvs){ //获取所有人
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/users`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.getFolder= function(argvs){ //获取所有文件夹
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/folder`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.UploadFile= function(argvs){ //上传附件
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/uploadFile`,
            formData: {
                files: uploadFile(argvs.files.files),
            },
            qs:{
                module:argvs.fields.module,
                id:argvs.fields.id,
                folder:argvs.fields.folder
            },
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //版本信息 查看附件
    this.seeFile = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/listFile${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除文件
    this.delFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //获取详情 版本信息
     this.findDetail = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/findDetail/${argvs.id}`,
            form : argvs,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //我要发问
    this.ask = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['vurl'] + `/version/v1/ask/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //帮助与解答
    this.helpList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/help/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取条目  帮助与解答
    this.helpCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/help/v1/count${urlEncode(argvs,true)}`,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //详情 帮助与解答
    this.helpDetail = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/help/v1/findDetail/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 帮助与解答
     this.helpById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['vurl'] + `/help/v1/help/${argvs.id}`,
            form : argvs,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑 帮助与解答
    this.helpEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['vurl'] + `/help/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //解答 帮助与解答
    this.answer = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['vurl'] + `/help/v1/answer/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    return this;
};