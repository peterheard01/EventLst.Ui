describe("event fetcher specs : ", function () {

	beforeEach(module('app'));
	beforeEach(module('app.services'));

	var browserStub, eventsCallerStub;

	beforeEach(module(function ($provide) {

		browserStub = {
				longitude : "51.22222",
				latitude : "51.11111"
		};

		eventsCallerStub = {
			getEvents : function(success, lon, lat){
				success(eventsStub);
			}
		}

		$provide.value("Browser", browserStub);
		$provide.value("EventsCaller", eventsCallerStub);

	}));

	it('event fetcher will load latitude and longitude from environment', inject(function (EventFetcher,LocationDetailsModel) {

		EventFetcher.fetch();

		expect(LocationDetailsModel.lon).toBe("51.22222");
		expect(LocationDetailsModel.lat).toBe("51.11111");

	}))

	it('will pass latitude and longitude to caller', inject(function (EventFetcher,EventsCaller) {

		spyOn(EventsCaller,'getEvents');

		EventFetcher.fetch();

		expect(EventsCaller.getEvents).toHaveBeenCalledWith(jasmine.any(Function),"51.22222","51.11111");

	}))

	it('4 items returned then 4 items loaded into model', inject(function (EventFetcher,EventsModel) {

		EventFetcher.fetch();

		expect(EventsModel.events).not.toBeNull();
		expect(EventsModel.events.length).toBe(4);

	}))

	it('items are mapped to model', inject(function (EventFetcher,EventsModel) {

		EventFetcher.fetch();

		expect(EventsModel.events[3].Name).toBe('Event 4');
		expect(EventsModel.events[3].DateAndTime).toEqual(moment("2015-03-10T18:00:00Z", moment.ISO_8601));
		expect(EventsModel.events[3].City).toBe('Reading, RG2 7AU');
		expect(EventsModel.events[3].HtmlDescription).toBe("<p>I am event 4</p>");

	}))

	it('items are mapped to view-model', inject(function (EventFetcher,EventsViewModel) {

		EventFetcher.fetch();

		expect(EventsViewModel.localEvents[3].Name).toBe('Event 4');
		expect(EventsViewModel.localEvents[3].DateAndTimeString).toEqual("Tuesday, March 10th 2015, 6:00:00 pm");
		expect(EventsViewModel.localEvents[3].DateAndTime).toEqual(moment('2015-03-10T18:00:00Z'));
		expect(EventsViewModel.localEvents[3].City).toBe('Reading, RG2 7AU');
		expect(EventsViewModel.localEvents[3].HtmlDescription).toBe("<p>I am event 4</p>");

	}))

	it('view status is set to ready', inject(function (EventFetcher,EventsViewModel) {

		EventFetcher.fetch();

		expect(EventsViewModel.status).toBe('hasdata');

	}))

	it('when no results then status set to empty',function(){

		module(function($provide) {

			eventsCallerStub = {
				getEvents : function(success, lon, lat){
					success([]);
				}
			}

			$provide.value("EventsCaller", eventsCallerStub);

		});

		inject(function(EventFetcher, EventsViewModel) {

			EventFetcher.fetch();

			expect(EventsViewModel.status).toBe('nodata');

		});
	})

})
