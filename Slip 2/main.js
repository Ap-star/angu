var app = angular.module("MyApp", [ngRoute]);
app.config(function($routeProvider) {
    $routeProvider
        .when(
            "/book", {
                //template: "<h1>hi</h1>"
                controller: "bookcontroller",
                template: "<table border=2><tr><th>BOOK NAME</th><th>PRICE</th><th>AUTHOR</th>EDITION<th></th></tr><tr ng-repeat=\"x in book\"><td>{{x.bookname}}</td><td>{{x.price | taxfilter }}</td><td>{{x.author}}</td><td>{{x.edition}}</td></tr></table>"
            })
        .when("/mobile", {
            controller: "mobilecontroller",
            template: "<table><tr><th>Mobile Name</th><th>PRICE</th></tr ng-app=\"x in mobile\"><td>{{x.mname}}</td><td>{{x.price | taxfilter}}</td><tr></tr></table>"
        })
});
app.controller("bookcontroller", function($scope) {
    $scope.book = [{ bookname: "abc", price: "800", author: "auth", edition: "1.1.1" },
        { bookname: "def", price: "900", author: "htyu", edition: "1.3.2" },
        { bookname: "ghi", price: "1000", author: "brv", edition: "1.5.0" },
        { bookname: "klj", price: "1200", author: "jgnn", edition: "4.1.1" }
    ];
});
app.controller("mobilecontroller", function($scope) {
    $scope.mobile = [{ mname: "nokia", price: "8000" },
        { mname: "apple", price: "90000" },
        { mname: "samsung", price: "65000" },
        { mname: "one plus", price: "50000" }
    ];
});
app.filter("taxfilter", function() {
    return function(input) {
        var x = input + ((input * 8) / 100);
        return x;
    }
})