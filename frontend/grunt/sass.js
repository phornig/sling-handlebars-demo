module.exports = function (grunt) {
    "use strict";

    return {
        options: {
            quiet: true,
            sourcemap: "inline",
            unixNewlines: true,
            trace: true
        },
        all: {
            options: {
                style: "expanded"
            },
            src: "<%= assetsSrc %>/scss/style.scss",
            dest: "<%= assetsDist %>/css/style.css"
        }
    };
};
