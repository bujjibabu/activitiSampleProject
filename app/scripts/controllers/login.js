angular.module('activitiApp').controller('LoginCtrl', function ($scope, $http, UserService, Base64, $rootScope, $location) {
    $rootScope.loggedUser = {

    };
    $scope.username = "administrator";
    $scope.password = "administrator";
    $rootScope.loggedin = false;

    $scope.login = function () {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ":" + $scope.password);

        UserService.get({user: $scope.username}, function (data) {

            $rootScope.loggedin = true;
            $rootScope.loggedUser = data;
            $rootScope.username = $scope.username;
            $rootScope.password = $scope.password;
            $location.path('/dashboard');
        });
    };
});
