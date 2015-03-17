angular.module('app.services')
	.service('AbstractBuilder', function (EventsViewModel,EventViewModel) {

		//var child;
		var abstractBuilder = function(childArg){

			childArg.build = function(cleanDto){

				//do mapping
				angular.forEach(cleanDto,function(dtoItem) {

					childArg.model.items.push(childArg.map(dtoItem));

				});

				//do status setting
				if(childArg.model.items.length > 0) {

					childArg.model.status = 'hasdata';

				}else{

					childArg.model.status = 'nodata';

				}

			};

		}

		return abstractBuilder;

	});
