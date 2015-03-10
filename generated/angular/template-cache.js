angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("events.tpl.html",
    "<div ng-controller=\"EventsController\">\n" +
    "\n" +
    "    <p id=\"demo\"></p>\n" +
    "\n" +
    "    <table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <tr  ng-repeat=\"event in vm.localEvents\">\n" +
    "                <td>{{event.Name}}</td>\n" +
    "                <td>{{event.City}}</td>\n" +
    "                <td>{{event.DateAndTime}}</td>\n" +
    "            </tr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </table>\n" +
    "\n" +
    "    <geo-location-directive></geo-location-directive>\n" +
    "\n" +
    "</div>"
  );

}]);
