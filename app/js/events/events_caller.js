angular.module('app.services')
	.service('EventsCaller',
	function ($resource, ResourceCleaner) {

		var eventsCallerResource = $resource("http://eventlst-1.apphb.com/api/events?lon=:longitude&lat=:latitude",
		{},
		{
			getEvents: {
				url: '',
				method: 'GET',
				params: {
					longitude: 'longitude',
					latitude : 'latitude'
				},
				isArray: true
			}

		});

		function _getEvents(success, longitude, latitude) {

			eventsCallerResource.getEvents({longitude : longitude, latitude:latitude}).$promise.then(function(response){
				success(ResourceCleaner.clean(response));
			});

		}

		return {
			getEvents: _getEvents
		};

	});

