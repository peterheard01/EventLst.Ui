angular.module('app.services')
	.service('EventFetcher', function (LocationDetailsModel, Browser, EventsCaller, EventsModelBuilder, EventsViewModelBuilder) {

		function _fetch() {

			LocationDetailsModel.lon = Browser.longitude;
			LocationDetailsModel.lat = Browser.latitude;

			EventsCaller.getEvents(_fetchSuccess, LocationDetailsModel.lon, LocationDetailsModel.lat);
		}

		function _fetchSuccess(cleanDto){

				EventsModelBuilder.build(cleanDto);
				EventsViewModelBuilder.build(cleanDto);
		}

		return {
			fetch: _fetch
		};

	});
