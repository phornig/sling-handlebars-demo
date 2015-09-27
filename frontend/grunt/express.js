module.exports = function (grunt) {
    return {
        options: {
            script: "server/server.js",
            port: 3000
        },
        dev: {
            options: {
                debug: true
            }
        },
        prod: {
            options: {
                background: false
            }
        }
    };
};
