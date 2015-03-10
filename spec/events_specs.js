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
				success(eventsStub);
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

		spyOn(EventCaller,'getEvents');

		EventFetcher.fetch();

		expect(EventCaller.getEvents).toHaveBeenCalledWith(jasmine.any(Function),"51.22222","51.11111");

	}))

	it('4 items returned then 4 items loaded into model', inject(function (EventFetcher,EventsModel) {

		EventFetcher.fetch();

		expect(EventsModel.events).not.toBeNull();
		expect(EventsModel.events.length).toBe(4);

	}))

	it('items are mapped', inject(function (EventFetcher,EventsModel) {

		EventFetcher.fetch();


		expect(EventsModel.events[3].Name).toBe('Event 4');
		expect(EventsModel.events[3].DateAndTime).toBe('2015-03-10T18:00:00Z');
		expect(EventsModel.events[3].City).toBe('Reading, RG2 7AU');
		expect(EventsModel.events[3].HtmlDescription).toBe("<p>I am event 4</p>");

	}))

	//will check the data is mapped
	//will check the date is then mapped to a viewmodel


})
