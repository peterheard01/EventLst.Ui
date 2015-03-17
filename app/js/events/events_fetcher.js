angular.module('app.services')
	.service('EventFetcher', function (LocationDetailsModel, Browser, EventsCaller, EventsModelBuilder, EventsViewModelBuilder) {

		function _fetch() {

			LocationDetailsModel.lon = Browser.longitude;
			LocationDetailsModel.lat = Browser.latitude;

			EventsCaller.getEvents(_fetchSuccess, LocationDetailsModel.lon, LocationDetailsModel.lat);
		}

		function _fetchSuccess(cleanDto){

			angular.forEach(cleanDto,function(dtoItem){

				EventsModelBuilder.build(dtoItem);
				EventsViewModelBuilder.build(dtoItem);

			});

		}

		return {
			fetch: _fetch
		};

	});
