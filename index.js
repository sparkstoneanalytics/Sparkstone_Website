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
			templateUrl: 'templates/' + template + '.html',
			controller: template.capitalize() + 'Ctrl'
		});
	});

  	$urlRouterProvider.otherwise('home');
}]);

//MAIN CTRL
app.controller('MainCtrl', ['$scope', function($scope){
}]);

//HOME CTRL
app.controller('HomeCtrl', ['$scope', function($scope){
}]);

//ABOUT CTRL
app.controller('AboutCtrl', ['$scope', function($scope){
}]);

//ALGO CTRL
app.controller('AlgoCtrl', ['$scope', function($scope){
}]);

//CONTACT CTRL
app.controller('ContactCtrl', ['$scope', function($scope){
}]);

//PORTFOLIO CTRL
app.controller('PortfolioCtrl', ['$scope', function($scope){
}]);

//RECRUITMENT CTRL
app.controller('RecruitmentCtrl', ['$scope', function($scope){
}]);