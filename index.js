var app = angular.module('sparkstone_website',['ui.router']);
var templates = ['home', 'about', 'algo', 'contact', 'portfolio', 'recruitment'];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
	templates.forEach(function(template){
		$stateProvider
		.state(template, {
			url: '/' + template,
			templateUrl: 'templates/' + template + '.html'
		});
	});

  	$urlRouterProvider.otherwise('home');
}]);

//MAIN CTRL
app.controller('MainCtrl', ['$scope', function($scope){
}]);