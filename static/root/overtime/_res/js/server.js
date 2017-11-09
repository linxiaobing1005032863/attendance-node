var app = angular.module('overtimeModule');
app.factory('overtimeSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/vacate/sonPermission');
    }
    function setPermission(){
        return $http.get('/vacate/setButtonPermission');
    }
});