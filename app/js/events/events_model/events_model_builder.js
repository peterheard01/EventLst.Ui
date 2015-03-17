angular.module('app.services')
	.service('EventsModelBuilder', function (EventsModel,EventModel) {

		this.build = function(cleanDto){

			angular.forEach(cleanDto,function(dtoItem) {
				var eventModel = new EventModel();

				eventModel.Name = dtoItem.Name;
				eventModel.DateAndTime = moment(dtoItem.DateAndTime);
				eventModel.City = dtoItem.City;
				eventModel.HtmlDescription = dtoItem.HtmlDescription;

				EventsModel.events.push(eventModel);

			});

		};

	});
