angular.module('app.directives').directive('countdownTimerDirective', function(EventFetcher) {
	return {
		restrict: 'AE',
		replace: true,
		template: '<div></div>',
		scope:{
			ngModel:'=ngModel'
		},
		compile: function(elem, attrs) {

			return function(scope, elem, attrs){
				$(elem)
					.countdown(scope.ngModel.toDate(), function(event) {
						$(this).text(event.strftime('%D days %Hh %Mm %Ss')
						);
					});
			};

		},
		controller: function($scope, Browser) {

		}
	};
});
