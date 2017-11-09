var app = angular.module('overtimeModule', [{
    files: ['root/overtime/_res/js/server.js']
}]);
app.controller('rewardsCtrl', function ($scope,$state) {
    if ($state.current.url == '/overtime') {//默认加载列表
        $state.go('root.overtime.punch');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
    $scope.$on('changeId1',function(event,msg) {
        $scope.$broadcast('getId1', msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,overtimeSer){
    $scope.navCla='punch';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'punch';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
      // 前面下拉导航权限
    overtimeSer.navPermission().then(function(response){
     if(response.data.code == 0){
     var data = response.data.data;
     if(data && data.length){
     $scope.isHide = false;
     for(var i =0,len=data.length;i<len;i++){
     var obj = data[i];
     $scope[obj.name]=obj.flag;
     }
     }else if(response.data.data.length == 0){
     $scope.isHide = true;
     }
     }else{
     $scope.isHide = false;
     }
     });
     // 设置导航权限
    overtimeSer.setPermission().then(function(response){
     if(response.data.code == 0){
     var data = response.data.data;
     if(data && data.length){
     $scope.isHide = false;
     for(var i =0,len=data.length;i<len;i++){
     var obj = data[i];
     $scope[obj.name]=obj.flag;
     }
     }else if(response.data.data.length == 0){
     $scope.isHide = true;
     }
     }else{
     $scope.isHide = false;
     }
     });
    $scope.showsList = [
        {id:"1",item:"考勤管理",
            menuList:
                [

                    {name1:"打卡管理",msg:'punch'},
                    {name2:"驻点设置",msg:'arrestpoint'},

                ],
            showIs:false},
        {id:"2",item:"请假管理",
            menuList:
                [

                    {name3:"请假管理",msg:'vacateset'},
                    {name4:"审核列表",msg:'vacaaudit'},
                    {name5:"请假设置",msg:'leave'},
                ],
            showIs:false},
        {id:"3",item:"加班管理",
            menuList:
                [
                    {name6:"加班列表",msg:'extra'},
                    {name7:"加班审核",msg:'review'},
                    {name8:"剩余加班天数",msg:'remaining'},
                    {name9:"补班设置",msg:'fill'},

                ],
            showIs:false},
        {id:"4",item:"日报管理",
            menuList:
                [
                    {name10:"日报列表",msg:'dayreport'},
                ],
            showIs:false},
        {id:"5",item:"汇总管理",
            menuList:
                [
                    {name11:"请假汇总",msg:'vacatecollect'},
                    {name12:"加班汇总",msg:'overcollect'},
                    {name13:"日报汇总",msg:'daycollect'},
                    {name14:"考勤情况汇总",msg:'punchcollect'},
                    {name15:"财务出勤汇总",msg:'financollect'},
                ],
            showIs:false},
        {id:"6",item:"财务出勤管理",
            menuList:
                [
                    {name16:"财务出勤表",msg:'finance'},
                    {name17:"出勤有误审批",msg:'wrong'},
                ],
            showIs:false},
        {id:"7",item:"设置",
            menuList:
                [
                    {name18:"考勤情况汇总设置",msg:'punchsetting'},
                    {name19:"财务出勤设置",msg:'financesetting'},
                    {name20:"加班汇总通报设置",msg:'oversetting'},
                    {name21:"请假汇总通报设置",msg:'vacatesetting'},
                    {name22:"日报汇总设置",msg:'daysetting'},
                    {name23:"假期设置",msg:'holsetting'},
                    {name24:"审批时间设置",msg:'audittimeset'},
               ],
            showIs:false},
        {id:"8",item:"权限设置",
            menuList:
                [
                    {name25:'设置',msg:'setting'}
                    ]
            ,showIs:false},
        {id:"9",item:"版本信息",menuList:[{name26:'版本信息'},{name27:'帮助与解答'}],showIs:false},
    ];
    if(active){
        for(var i = 0; i < $scope.showsList.length; i++){
            var n = $scope.showsList[i].menuList;
            for(var j = 0; j < n.length; j++){
                var m = n[j].msg;
                if(m == active){
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});

app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});