module.exports = function (grunt) {
    "use strict";

    return {
        all: [
            "<%= assetsSrc %>/scss/**/*.scss",
            "!<%= assetsSrc %>/scss/vendor/**/*.scss"
        ],
        options: {
            config: ".scsslint.yml"
        }
    };
};
