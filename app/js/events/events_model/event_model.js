angular.module('app.services')
	.service('EventModel', function () {

		return function(){
			this.Name = null;
			this.DateAndTime = null;
			this.City = null;
			this.HtmlDescription = null;
		};

	});
