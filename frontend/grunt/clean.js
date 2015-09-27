module.exports = function (grunt) {
    "use strict";

    return {
        "dist": ["src/main/resources/apps/demo/assets"],
        "vendor-scss": ["<%= assetsSrc %>/scss/vendor"]
    };
};
