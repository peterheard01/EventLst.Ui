angular.module('app.services')
	.service('AbstractBuilder', function (EventsViewModel,EventViewModel) {

		var abstractBuilder = function(childArg){

			childArg.build = function(cleanDto){

				mapCollection(childArg, cleanDto);
				setStatus(childArg);

			};

		};

		function mapCollection(childArg, cleanDto){

			angular.forEach(cleanDto,function(dtoItem) {

				childArg.model.items.push(childArg.map(dtoItem));

			});

		};

		function setStatus(childArg){
			if(childArg.model.items.length > 0) {
				childArg.model.status = 'hasdata';
			}else{
				childArg.model.status = 'nodata';
			}
		}

		return abstractBuilder;

	});
