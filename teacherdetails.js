var teacher=[];
var app = angular.module('myApp', []);
app.controller('teacherPersonal', function($scope) {
	$scope.dispinfo= function()
	{
		$scope.teacher={
		tno:$scope.tno,
		tname:$scope.tname,
		texp:$scope.texp,
		tdate:$scope.tdate,
		tq:$scope.tq,
		tsal:$scope.tsal,
		tadd:$scope.tadd,
		};
	};
})
