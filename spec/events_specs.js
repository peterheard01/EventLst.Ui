describe("event fetcher specs : ", function () {

	beforeEach(module('app'));
	beforeEach(module('app.services'));

	var browserStub, eventCallerStub;


	beforeEach(module(function ($provide) {

		browserStub = {
			getUserLatitude: function () {
				return "51.22222";
			},
			getUserLongitude: function () {
				return "51.11111";
			}
		};

		eventCallerStub = {
			getEvents : function(success, lon, lat){
				success();
			}
		}

		$provide.value("Browser", browserStub);
		$provide.value("EventCaller", eventCallerStub);

	}));

	it('event fetcher will load latitude and longitude from environment', inject(function (EventFetcher,LocationDetailsModel) {

		EventFetcher.fetch();

		expect(LocationDetailsModel.lon).toBe("51.22222");
		expect(LocationDetailsModel.lat).toBe("51.11111");

	}))

	it('will pass latitude and longitude to caller', inject(function (EventFetcher,EventCaller) {

		spyOn(EventCaller,'getEvents')

		EventFetcher.fetch();

		expect(EventCaller.getEvents).toHaveBeenCalledWith(jasmine.any(Function),"51.22222","51.11111");

	}))

	//
	//will load returned data into a model
	//will check the data is mapped
	//will check the date is then mapped to a viewmodel


})
