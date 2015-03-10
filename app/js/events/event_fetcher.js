angular.module('app.services')
	.service('EventFetcher', function (LocationDetailsModel, Browser) {

		function _fetch() {
			LocationDetailsModel.lat = Browser.getUserLatitude();
			LocationDetailsModel.lat = Browser.getUserLongitude();
		}

		return {
			fetch: _fetch
		};

	});
