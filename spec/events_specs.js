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
		}

		$provide.value("Browser", browserStub);
		$provide.value("EventCaller", eventCallerStub);

	}));

	it('event fetcher will load latitude and longitude from environment', inject(function (EventFetcher,LocationDetailsModel) {

		EventFetcher.fetch();

		expect(LocationDetailsModel.lon).toBe("51.22222");
		expect(LocationDetailsModel.lat).toBe("51.11111");

	}))

	//will load latitude and longitude from the browser
	//will pass latitude and longitude to caller
	//will load returned data into a model
	//will check the data is mapped
	//will check the date is then mapped to a viewmodel


})
