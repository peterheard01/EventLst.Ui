var app;

app = angular.module('app', ['ngRoute', 'ngResource','app.services','app.controllers','app.directives','app.filters','app.templates','ui.bootstrap']).config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'events.tpl.html'
		});

});

angular.module('app.services',[]);
angular.module('app.controllers',[]);
angular.module('app.directives', []);
angular.module('app.filters', []);
angular.module('app.templates', []);


