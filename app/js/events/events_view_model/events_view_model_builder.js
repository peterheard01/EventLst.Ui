angular.module('app.services')
	.service('EventsViewModelBuilder', function (EventsViewModel, EventViewModel, AbstractBuilder) {

		new AbstractBuilder(this);

		this.model = EventsViewModel;
		this.model.items = EventsViewModel.localEvents;

		this.map = function(dtoItem){

			var modelItem = new EventViewModel();
			modelItem.Name = dtoItem.Name;
			modelItem.DateAndTimeString = moment(dtoItem.DateAndTime).format("dddd, MMMM Do YYYY, h:mm:ss a");
			modelItem.DateAndTime = moment(dtoItem.DateAndTime);
			modelItem.City = dtoItem.City;
			modelItem.HtmlDescription = dtoItem.HtmlDescription;
			return modelItem;
		};

	});
