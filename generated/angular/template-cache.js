angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("events.tpl.html",
    "<div ng-controller=\"EventsController\">\n" +
    "\n" +
    "    <p id=\"demo\"></p>\n" +
    "\n" +
    "    <div ng-repeat=\"event in vm.localEvents\">\n" +
    "        {{event.Name}}\n" +
    "    </div>\n" +
    "\n" +
    "    <geo-location-directive></geo-location-directive>\n" +
    "\n" +
    "</div>"
  );

}]);
