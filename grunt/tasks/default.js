module.exports = function(grunt) {
    "use strict";

    grunt.registerTask("default", ["handlebars", "copy", "concurrent:target"]);

};
