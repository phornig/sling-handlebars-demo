"use strict";

var fs = require("fs"),
    exphbs = require("express-handlebars"),
    path = require("path"),
    resolver = require("./resolver"),

    rootPath = path.normalize(__dirname + "/.."),
    layoutsPath = path.join(rootPath, "layouts"),

    hbsFileExtension = ".hbs",

    include,
    handlebars = exphbs.create({
        helpers: {
            include: include
        }
    }).handlebars;

/**
 * Includes another template.
 * @param context The current context model
 * @param options Include options
 * @returns The rendered template.
 */
include = function (context, options) {

    var html,
        hbs,
        resourcePath,
        selector,
        model,
        template = options.hash.template,
        resourceType = options.hash.resourceType,
        pathOption = options.hash.path,
        replaceSelectors = options.hash.replaceSelectors,
        addSelectors = options.hash.addSelectors;

    resourceType = resourceType ? resourceType : context.resourceType;

    if (template || replaceSelectors) {
        selector = template ? template : replaceSelectors;

        if (addSelectors) {
            selector += path.sep + addSelectors;
        }

        resourcePath = resolver.getTemplatePath(resourceType, selector);
    } else {
        resourcePath = resolver.getDefaultTemplatePath(resourceType);
    }

    model = resolver.getTemplateModel(context, resourceType, pathOption);

    if (resourcePath) {
        try {
            html = fs.readFileSync(resourcePath).toString();
        } catch (err) {
            html = err;
        }

        hbs = handlebars.compile(html, {noEscape: true});

        return new handlebars.SafeString(hbs(model, {
            helpers: {
                include: include
            }
        }));
    } else {
        return "";
    }
};

module.exports = function () {
    return exphbs({
        extname: hbsFileExtension,
        helpers: {
            include: include
        }
    });
};
