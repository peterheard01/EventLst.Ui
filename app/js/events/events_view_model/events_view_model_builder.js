angular.module('app.services')
	.service('EventsViewModelBuilder', function (EventsViewModel,EventViewModel) {

		this.build = function(dtoItem){

			var eventViewModel = new EventViewModel();

			eventViewModel.Name = dtoItem.Name;
			eventViewModel.DateAndTime = moment(dtoItem.DateAndTime).format("dddd, MMMM Do YYYY, h:mm:ss a");
			eventViewModel.City = dtoItem.City;
			eventViewModel.HtmlDescription = dtoItem.HtmlDescription;

			EventsViewModel.localEvents.push(eventViewModel);

		};

	});
