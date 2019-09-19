app=angular.module("myApp",[])
app.controller("first",function($scope){
	$scope.countries=[
	{name:'India',population:100000,flag:'A',capital:'Delhi',curr:'47'},
	{name:'UK',population:200000,flag:'B',capital:'London',curr:'47'},
	{name:'US',population:100000,flag:'C',capital:'Washington DC',curr:'87'}
    ];
    
});
/*add flag link,here it is not given. */
app.directive("countryDtl",function(){ 
    var detl={};
    detl.template="<ul ng-repeat=\"c in countries\"><li>{{c.name}}</li>"+
    "<li>{{c.population}}</li><li>{{c.capital}}</li><li>{{c.curr}}</li></ul>";
    return detl;
});
app.directive("myDir",function(){
	var directive = {};
	directive.template = "<ul style='list-style-type:circle;' ng-repeat= \"x in Mylist\"><li>{{x}}</li></ul>";
	return directive;
});