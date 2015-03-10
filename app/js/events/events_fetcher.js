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

				//modelItem.DateAndTime = modelItem.DateAndTime.format("dddd, MMMM Do YYYY, h:mm:ss a");

				var viewModelItem = {};
				viewModelItem.Name = dtoItem.Name;
				viewModelItem.DateAndTime = moment(dtoItem.DateAndTime).format("dddd, MMMM Do YYYY, h:mm:ss a");;
				viewModelItem.City = dtoItem.City;
				viewModelItem.HtmlDescription = dtoItem.HtmlDescription;

				EventsViewModel.localEvents.push(viewModelItem);

			});

		}

		return {
			fetch: _fetch
		};

	});
