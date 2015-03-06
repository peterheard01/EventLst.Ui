module.exports = function(lineman) {

  return {
    js: {
      vendor: [
        "vendor/js/angular/angular.js",
        "vendor/js/jQuery.js",
        "vendor/js/jquery-ui.js",
        "vendor/js/lodash.js",
        "vendor/js/bootstrap/tooltip.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/controllers/**/*.js",
        "app/js/services/**/*.js",
        "app/js/directives/**/*.js"
      ]
    },

      less: {
          main: [
              "vendor/css/font_awesome/font-awesome.less",
              "vendor/css/bootstrap/bootstrap.less",
              "app/css/main.less"
          ],
          app: "app/css/**/*.less",
          vendor: "vendor/css/**/*.less",
          generated: "generated/css/app.less.css",
          compile: {
              options: {
                  paths: ["vendor/css/normalize.css", "vendor/css/**/*.css","", "app/css/**/*.less"]
              }
          }
      }

  };
};
