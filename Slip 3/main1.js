var app = angular.module("MyApp", [ngRoute]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/project", {
            templateUrl: "project.html",
            controller: "projectcontroller"
        })
        .when("/manager", {
            templateUrl: "mobile.html",
            controller: "managercontroller"
        })
});
app.controller("projectcontroller", function($scope) {
    $scope.project = [{ pid: 1, pname: "hello", budget: 8000, start_date: "10/1/2019", end_date: "15/7/2019" },
        { pid: 2, pname: "hi", budget: 9000, start_date: "12/1/2019", end_date: "15/8/2019" },
        { pid: 3, pname: "how", budget: 10000, start_date: "24/1/2019", end_date: "25/5/2019" },
        { pid: 4, pname: "why", budget: 11000, start_date: "23/1/2019", end_date: "5/9/2019" }
    ];
});
app.controller("managercontroller", function($scope) {
    $scope.manager = [{ mid: 1, mname: "abc", exp: "7" },
        { mid: 2, mname: "def", exp: "8" },
        { mid: 3, mname: "ghi", exp: "6" },
        { mid: 4, mname: "jkl", exp: "2" }
    ];
});
app.filter("expfilter", function() {
    return function(input) {
        return input + " Years";
    }
})
app.filter("budgetfilter", function() {
    return function(input) {
        return "total cost " + input;
    }
})