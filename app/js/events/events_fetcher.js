angular.module('app.services')
	.service('EventFetcher', function (LocationDetailsModel, Browser, EventCaller, EventsModel, EventsViewModel) {

		function _fetch() {

			LocationDetailsModel.lon = Browser.getUserLatitude();
			LocationDetailsModel.lat = Browser.getUserLongitude();

			EventCaller.getEvents(_fetchSuccess, LocationDetailsModel.lon, LocationDetailsModel.lat);
		}

		function _fetchSuccess(cleanDto){

			angular.forEach(cleanDto,function(dtoItem){

				var modelItem = {};
				modelItem.Name = dtoItem.Name;
				modelItem.DateAndTime = moment(dtoItem.DateAndTime);
				modelItem.City = dtoItem.City;
				modelItem.HtmlDescription = dtoItem.HtmlDescription;

				EventsModel.events.push(modelItem);

				EventsViewModel.localEvents.push(modelItem);

			});

		}

		return {
			fetch: _fetch
		};

	});
