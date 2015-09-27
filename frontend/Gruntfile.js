module.exports = function (grunt) {
    "use strict";

    require("load-grunt-config")(grunt, {
        init: true,
        data: {
            assetsSrc: "assets",
            assetsDist: "src/main/resources/apps/demo/assets"
        }
    });

    grunt.registerTask("default", ["clean", "bowercopy", "scss", "js", "jsonlint:models"]);

    grunt.registerTask("dev", ["default", "express:dev", "watch"]);

    grunt.registerTask("scss", ["scsslint", "sass"]);
    grunt.registerTask("js", ["jscs", "jshint", "concat", "uglify"]);
};
