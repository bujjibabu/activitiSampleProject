angular.module('activitiApp').factory('UserService', function ($resource) {
    var data = $resource('http://192.168.208.40:8081/vita/service/identity/users', {user: "@user"});
    return data;
});
