angular.module('app.services')
	.service('EventViewModel', function () {

		return function(){
			this.Name = null;
			this.DateAndTime = null;
			this.City = null;
			this.HtmlDescription = null;
		};

	});
