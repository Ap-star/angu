var app = angular.module("MyApp", [ngRoute]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: "logincontroller"
        })
        .when("/manager", {
            templateUrl: "contact.html",
            controller: "contactcontroller"
        })
});
app.controller("logincontroller", function($scope) {
    $scope.username = "",
        $scope.passwd = "",
        $scope.dispinfo = function() {
            $scope.info = "Welcome " + $scope.username + "!<br>Your Password : " + $scope.passwd;
        }
});
app.controller("contactcontroller", function($scope) {
    $scope.name = "ABC",
        $scope.mobileno = "90863783",
        $scope.email = "fr@gbkm.fdgv"
});