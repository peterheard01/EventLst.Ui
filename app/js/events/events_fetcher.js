angular.module('app.services')
	.service('EventFetcher', function (LocationDetailsModel, Browser, EventsCaller, EventsModel, EventsViewModel) {

		function _fetch() {

			LocationDetailsModel.lon = Browser.longitude;
			LocationDetailsModel.lat = Browser.latitude;

			EventsCaller.getEvents(_fetchSuccess, LocationDetailsModel.lon, LocationDetailsModel.lat);
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
