var app = angular.module('pointAdd', ['toastr','angularjs-dropdown-multiselect']);
app.controller('pointAddCtrl', function($scope, pointSer,$state,toastr,$stateParams){
    //获取地区
    pointSer.areas().then(function(response){
        if(response.data.code == 0){
            $scope.Areas = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取所有驻点地点
    pointSer.pointASreas().then(function(response){
        if(response.data.code == 0){
            $scope.points = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

   $scope.workDays=[];
    $scope.workOptions=[{id: "ONE", value: "周一"},{id: "TWO",value: "周二"},{id: "THREE",value: "周三"},{id: "FOUR",value: "周四"},{id: "FIVE",value: "周五"},{id: "SIX",value: "周六"},{id: "SEVEN",value: "周日"}];
    $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};

    var map = new AMap.Map("container1", {
        resizeEnable: true,
      /*  center: [116.40, 39.91],//地图中心点*/
        zoom: 13,//地图显示的缩放级别
        keyboardEnable: false
    })
    var windowsArr = [];
    var marker = [];
  /*  var map = new AMap.Map("mapContainer", {
        resizeEnable: true,
        center: [116.40, 39.91],//地图中心点
        zoom: 13,//地图显示的缩放级别
        keyboardEnable: false
    });*/
    AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
        var autoOptions = {
            city: "广东", //城市，默认全国
            input: "keyword"//使用联想输入的input的id
        };
        autocomplete= new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
            city:'广东',
            map:map
        })
        AMap.event.addListener(autocomplete, "select", function(e){
            //TODO 针对选中的poi实现自己的功能
            placeSearch.setCity(e.poi.adcode);
            placeSearch.search(e.poi.name);
            document.getElementById("lnglat").value = e.poi.location.lat+','+ e.poi.location.lng;
            $scope.longitude= e.poi.location.lng;
            $scope.latitude= e.poi.location.lat;
            //添加
            $scope.extraAddFun = function(){
                var permitArr=[];
                angular.forEach($scope.workDays,function(item){
                    permitArr.push(item.id)
                });
                var vm = $scope;
                var data={
                    workDays:permitArr.join(','),
                    area:vm.area,
                    pointArea:vm.pointArea,
                    longitude:vm.longitude,
                    latitude:vm.latitude,
                    location:vm.location,
                    range:vm.range,
                    status:vm.status,
                    week:vm.week,
                }

                pointSer.Addpoint(data).then(function(response){
                    if(response.data.code == 0){
                        $state.go('root.overtime.arrestpoint.list[12]');
                        toastr.success("已成功添加", '温馨提示');
                    }else{
                        toastr.error( response.data.msg, '温馨提示');
                    }
                });

            };
        });
    });
/*    //为地图注册click事件获取鼠标点击出的经纬度坐标
    var clickEventListener = map.on('click', function(e) {
        document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat(),
            $scope.longitude=e.lnglat.getLng();
             $scope.latitude=e.lnglat.getLng();
        //添加
        $scope.extraAddFun = function(){
            var permitArr=[];
            angular.forEach($scope.workDays,function(item){
                permitArr.push(item.id)
            });
            var vm = $scope;
            var data={
                workDays:permitArr.join(','),
                area:vm.area,
                pointArea:vm.pointArea,
                longitude:vm.longitude,
                latitude:vm.latitude,
                location:vm.location,
                range:vm.range,
                status:vm.status,
                week:vm.week,
            }

            pointSer.Addpoint(data).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.overtime.arrestpoint.list[12]');
                    toastr.success("已成功添加", '温馨提示');
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });

        };

    });*/

    var auto = new AMap.Autocomplete({
        input: "tipinput"
    });






});




