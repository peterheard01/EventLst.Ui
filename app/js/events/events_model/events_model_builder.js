angular.module('app.services')
	.service('EventsModelBuilder', function (EventsModel,EventModel, AbstractBuilder) {

		AbstractBuilder(this);

		this.model = EventsModel;
		this.model.items = EventsModel.events;

		this.map = function(dtoItem){

			var modelItem = new EventModel();
			modelItem.Name = dtoItem.Name;
			modelItem.DateAndTime = moment(dtoItem.DateAndTime);
			modelItem.City = dtoItem.City;
			modelItem.HtmlDescription = dtoItem.HtmlDescription;
			return modelItem;
		};

	});
