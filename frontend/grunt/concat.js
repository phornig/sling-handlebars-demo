module.exports = function (grunt) {
    return {
        main: {
            src: "<%= assetsSrc %>/js/main/**/*.js",
            dest: "<%= assetsDist %>/js/main.js"
        },
        plugins: {
            options: {
                seperator: ";"
            },
            src: [],
            dest: "<%= assetsSrc %>/js/plugins.js"
        }
    };
};
