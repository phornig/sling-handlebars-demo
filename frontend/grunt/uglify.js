module.exports = function (grunt) {
    return {
        options: {
            compress: {
                drop_console: false
            },
            preserveComments: "some",
            report: "gzip",
            sourceMap: true
        },
        main: {
            src: "<%= assetsDist %>/js/main.js",
            dest: "<%= assetsDist %>/js/main.min.js"
        },
        modernizr: {
            src: "<%= assetsDist %>/js/vendor/modernizr/modernizr.js",
            dest: "<%= assetsDist %>/js/vendor/modernizr/modernizr.min.js"
        },
        plugins: {
            src: "<%= assetsSrc %>/js/plugins.js",
            dest: "<%= assetsSrc %>/js/plugins.min.js"
        }
    };
};
