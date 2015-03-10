angular.module('app.services')
	.service('EventFetcher', function (LocationDetailsModel, Browser, EventCaller) {

		function _fetch() {

			LocationDetailsModel.lon = Browser.getUserLatitude();
			LocationDetailsModel.lat = Browser.getUserLongitude();

			EventCaller.getEvents(_fetchSuccess, LocationDetailsModel.lon, LocationDetailsModel.lat);
		}

		function _fetchSuccess(cleanDto){

		}

		return {
			fetch: _fetch
		};

	});
