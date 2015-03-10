angular.module('app.directives').directive('geoLocationDirective', function() {
	return {
		restrict: 'AE',
		replace: true,
		template: '<div></div>',
		//compile: function(elem, attrs) {
		//
		//	console.log('compiling');
		//
		//	return function(scope, elem, attrs){
		//
		//		console.log('linking');
		//	};
		//
		//},
		controller: function($scope, EventFetcher) {

			navigator.geolocation.getCurrentPosition(showPosition);

			function showPosition(position) {

				Browser.longitude = position.coords.longitude;
				Browser.latitude = position.coords.latitude;

				console.log(position.coords.latitude);
				console.log(position.coords.longitude);

				EventFetcher.fetch();

				//x.innerHTML = "Latitude: " + position.coords.latitude +
				//"<br>Longitude: " + position.coords.longitude;
			}

		}
	};
});
