"use strict";

var express = require("express"),
    fs = require("fs"),
    logger = require("morgan"),

    path = require("path"),
    rootPath = path.normalize(__dirname),

    hbs = require(path.join(rootPath, "utils/hbs")),
    resolver = require(path.join(rootPath, "utils/resolver")),

    app = express();

module.exports = (function (app) {

    app.engine("hbs", hbs());
    app.set("views", path.join(rootPath, "../src/main/resources/apps/demo"));
    app.set("view engine", "hbs");

    // set header
    app.use(function (req, res, next) {
        res.header("X-UA-Compatible", "IE=edge");
        next();
    });

    app.use(express["static"](path.join(rootPath, "../src/main/resources/")));
    app.use(express["static"](path.join(rootPath, "../static/")));

    if (app.settings.env === "development") {
        app.use(require("connect-livereload")());
    }

    // logging
    app.use(logger("combined", {stream: fs.createWriteStream(path.join(rootPath, "../logs/access.log"), {flags: "a"})}));

    app.get("/", function (req, res, next) {
        req.url = "index";
        next();
    });

    app.get("*", function (req, res) {
        var model = resolver.getJson(path.join("pages", req.url));

        if (model.resourceType) {
            res.render(resolver.getDefaultTemplatePath(model.resourceType), model);
        } else {
            res.status(404).send("Not found");
        }
    });

    var server = app.listen(3000, function () {
        console.log("Listening on %s:%d in %s mode", server.address().address, server.address().port, app.settings.env);
    });

})(app);
