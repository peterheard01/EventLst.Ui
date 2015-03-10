angular.module('app.services')
	.service('ResourceCleaner', function () {

		function _clean(angularResource){

			var dataAsString = angular.toJson(angularResource);
			var cleanedResponseObject = angular.fromJson(dataAsString);
			return cleanedResponseObject;
		}

		return {
			clean : _clean
		};

	});
