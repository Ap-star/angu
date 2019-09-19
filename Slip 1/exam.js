var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
		.when('/subject', {
			template: "<h1>Hello Subject</h1>",
			controller: 'subjectController'
		})
		.when('/course', {
			templateUrl: 'course.html',
			controller: 'courceController'
		})
		.otherwise({
			redirectTo: '/ExamTemp'
		});
});

app.controller("subjectController",function($scope){
    $scope.subject=[{scode:11,sname:"R",credit:3},
                    {scode:12,sname:"Java",credit:4},
                    {scode:13,sname:"Python",credit:3}]
})

app.controller("courceController",function($scope){
    $scope.course=[{ccode:101,cname:"Msc",credit:3},
                    {ccode:102,cname:"Bsc",credit:5},
                    {ccode:103,cname:"MCA",credit:3}]
})