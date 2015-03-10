angular.module('app.directives').directive('geoLocationDirective', function() {
	return {
		restrict: 'AE',
		replace: true,
		template: '<div></div>',
		controller: function($scope, Browser, EventFetcher) {

			navigator.geolocation.getCurrentPosition(showPosition);

			function showPosition(position) {

				Browser.longitude = position.coords.longitude;
				Browser.latitude = position.coords.latitude;

				//console.log(position.coords.latitude);
				//console.log(position.coords.longitude);

				EventFetcher.fetch();

			}

		}
	};
});
