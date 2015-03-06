angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("bootstrapaccordian.tpl.html",
    "<div ng-controller=\"AccordionDemoCtrl\">\n" +
    "    <p>\n" +
    "        <button class=\"btn btn-default btn-sm\" ng-click=\"status.open = !status.open\">Toggle last panel</button>\n" +
    "        <button class=\"btn btn-default btn-sm\" ng-click=\"status.isFirstDisabled = ! status.isFirstDisabled\">Enable / Disable first panel</button>\n" +
    "    </p>\n" +
    "\n" +
    "    <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng-model=\"oneAtATime\">\n" +
    "        Open only one at a time\n" +
    "    </label>\n" +
    "    <accordion close-others=\"oneAtATime\">\n" +
    "        <accordion-group heading=\"Static Header, initially expanded\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "            This content is straight in the template.\n" +
    "        </accordion-group>\n" +
    "        <accordion-group heading=\"{{group.title}}\" ng-repeat=\"group in groups\">\n" +
    "            {{group.content}}\n" +
    "        </accordion-group>\n" +
    "        <accordion-group heading=\"Dynamic Body Content\">\n" +
    "            <p>The body of the accordion group grows to fit the contents</p>\n" +
    "            <button class=\"btn btn-default btn-sm\" ng-click=\"addItem()\">Add Item</button>\n" +
    "            <div ng-repeat=\"item in items\">{{item}}</div>\n" +
    "        </accordion-group>\n" +
    "        <accordion-group is-open=\"status.open\">\n" +
    "            <accordion-heading>\n" +
    "                I can have markup, too! <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': status.open, 'glyphicon-chevron-right': !status.open}\"></i>\n" +
    "            </accordion-heading>\n" +
    "            This is just some content to illustrate fancy headings.\n" +
    "        </accordion-group>\n" +
    "    </accordion>\n" +
    "</div>"
  );

}]);
