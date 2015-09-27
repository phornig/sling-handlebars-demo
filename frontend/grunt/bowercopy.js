module.exports = function (grunt) {
    "use strict";

    return {
        options: {
            clean: false
        },
        bourbon: {
            files: {
                "<%= assetsSrc %>/scss/vendor/bourbon": "bourbon/app/assets/stylesheets/*"
            }
        },
        neat: {
            files: {
                "<%= assetsSrc %>/scss/vendor/neat": "neat/app/assets/stylesheets"
            }
        },
        jquery: {
            files: {
                "<%= assetsDist %>/js/vendor/jquery": "jquery/dist"
            }
        },
        modernizer: {
            files: {
                "<%= assetsDist %>/js/vendor/modernizr": "modernizr/modernizr.js"
            }
        },
        "normalize-scss": {
            files: {
                "<%= assetsSrc %>/scss/vendor/normalize-scss": "normalize-scss/_normalize.scss"
            }
        }
    };
};
