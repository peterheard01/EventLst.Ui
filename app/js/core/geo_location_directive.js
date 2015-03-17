angular.module('app.directives').directive('geoLocationDirective', function(EventFetcher) {
	return {
		restrict: 'AE',
		replace: true,
		template: '<div></div>',
		controller: function($scope, Browser) {

			navigator.geolocation.getCurrentPosition(showPosition);

			function showPosition(position) {

				Browser.longitude = position.coords.longitude;
				Browser.latitude = position.coords.latitude;

				EventFetcher.fetch();

			}

		}
	};
});
