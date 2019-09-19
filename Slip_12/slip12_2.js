var employee=[];
var app = angular.module('myApp', []);
app.controller('employeePersonal', function($scope) {
	$scope.dispinfo= function()
	{
			$scope.employee={
			eno:$scope.eno,
			ename:$scope.ename,
			eexp:$scope.eexp,
			eq:$scope.eq,
			esal:$scope.esal,
			eadd:$scope.eadd,
			jyear:$scope.jyear
		};
	};
	
	$scope.updateSalary=function()
	{
		$scope.employee={
			eno:$scope.eno,
			ename:$scope.ename,
			eexp:$scope.eexp,
			eq:$scope.eq,
			esal:$scope.esal,
			eadd:$scope.eadd,
			jyear:$scope.jyear
		};
	};
	
	$scope.emp_texp = function(year) { 
	
		var d = new Date();
		var n = d.getFullYear();
		return (n-year);
	}
});