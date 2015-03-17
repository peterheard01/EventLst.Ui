angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("about.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "    <h1>About this application...</h1>\n" +
    "    This application will read your location and return events that are local to you. It searches meetup.com and other\n" +
    "    providers and returns it in a single place.\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <h2>UI code</h2>\n" +
    "        <p>Pure javascript in the middle with AngularJS at the edges. Check out the code...</p>\n" +
    "        <p><a class=\"btn btn-default\" href=\"https://github.com/peterheard01/EventLst.Ui\">Go »</a></p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <h2>API code</h2>\n" +
    "        <p>Asp.net Web-API hosted on Appharbor. Check out the code...</p>\n" +
    "        <p><a class=\"btn btn-default\" href=\"http://go.microsoft.com/fwlink/?LinkId=301871\">Go »</a></p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <h2>About the developer</h2>\n" +
    "        <p>This project has been built by Pete Heard as an open source example of TDD, Clean Code and Clean Architecture.</p>\n" +
    "        <p><a class=\"btn btn-default\" href=\"http://www.urlhelper.co.uk\">Go »</a></p>\n" +
    "    </div>\n" +
    "</div>"
  );

  $templateCache.put("events.tpl.html",
    "<div ng-controller=\"EventsController\" class=\"jumbotron\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div ng-show=\"vm.status == null\" class=\"spinner-container\">\n" +
    "\n" +
    "        <div class=\"text-center\">\n" +
    "            Fetching data...\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "        </div>\n" +
    "        <div class=\"text-center\" us-spinner=\"{radius:15, width:4, length: 8}\">\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"vm.status == 'nodata'\" class=\"spinner-container\">\n" +
    "\n" +
    "        <div class=\"text-center\">\n" +
    "            No data available\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "            <br/>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div ng-show=\"vm.status == 'hasdata'\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2>Name</h2>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2>City</h2>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                <h2>Date</h2>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\" ng-repeat=\"event in vm.localEvents\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "                {{event.Name}}\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                {{event.City}}\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "                {{event.DateAndTime}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<geo-location-directive></geo-location-directive>"
  );

}]);
