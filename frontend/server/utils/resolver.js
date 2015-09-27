"use strict";

var fs = require("fs"),
    path = require("path"),
    jsonPath = require("json-path"),

    rootPath = path.normalize(__dirname + "/../.."),
    viewsPath = path.join(rootPath, "/src/main/resources/apps"),
    dataPath = path.join(rootPath, "/data"),

    hbsFileExtension = ".hbs";

/**
 * Get a json file in the data directory.
 *
 * @param name The name of the json file to fetch.
 * @returns The parsed content of the json file.
 */
function getJson(name) {
    var filePath = path.join(dataPath, name + ".json");
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath));
    } else {
        return {};
    }
}

/**
 * Get the resource super type for a resource type if it has one.
 *
 * @param type The resource type
 * @returns The super type as string
 */
function getSuperType(type) {

    var superTypeKey = "sling:resourceSuperType",
        content;

    if (fs.existsSync(path.join(viewsPath, type + ".json"))) {
        try {
            content = JSON.parse(fs.readFileSync(path.join(viewsPath, type + ".json")));
            if (content[superTypeKey]) {
                return content[superTypeKey];
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
        }
    } else {
        return null;
    }
}

/**
 * Get the path to the template for the provided resource type and template name. If a template with the given
 * type and name does not exists, looks recursively at the super type for a template with the given name.
 *
 * @param type The resource type
 * @param name The template name
 * @returns The path to the template
 */
function getTemplatePath(type, name) {

    var dir = path.join(viewsPath, type);

    if (fs.existsSync(path.join(dir, name + hbsFileExtension))) {
        return path.join(dir, name + hbsFileExtension);
    } else {
        var superType = getSuperType(type);

        if (superType) {
            return getTemplatePath(superType, name);
        } else {
            return null;
        }
    }
}

/**
 * Get the name of the resource type, i.e. the last part of the path.
 *
 * @param type The resource type
 * @returns The name of the resource type
 */
function getResourceName(type) {
    var elements = type.split("/");
    return elements.pop();
}

/**
 * Get the path of the default template for a resource type, i.e. the template with the same name as the
 * resource type. If the resource type does not have a template with it's name, looks recursively at
 * the super type for a template with the super type's name.
 *
 * @param type The resource type
 * @returns The path to the template
 */
function getDefaultTemplatePath(type) {
    var name = getResourceName(type);

    if (fs.existsSync(path.join(viewsPath, type, name + hbsFileExtension))) {
        return path.join(viewsPath, type, name + hbsFileExtension);
    } else {
        var superType = getSuperType(type);

        if (superType) {
            return getDefaultTemplatePath(superType);
        } else {
            return null;
        }
    }
}

/**
 * Gets the model for the given resource type from the context using the includePath. This is used in an include
 * to derive the included resource type's model from the current context and includePath. The includePath can
 * be relative or absolute. If the includePath is relative, the path is looked up in the context and if the resulting
 * object has a property "json" the property's value is used as a path to load a different json file, otherwise
 * the the resulting object is used as the model. If the includePath is absolute is used to load another json
 * file.
 *
 * @param context The context, i.e. the current model.
 * @param type The resource type
 * @param includePath The path used to retrieve the new model.
 * @returns The model object.
 */
function getTemplateModel(context, type, includePath) {
    var model,
        content;

    if (typeof includePath === "undefined") {
        // No includePath provided, so use current context
        model = context;
    } else if (includePath.substring(0, 1) === "/") {
        // Absolute includePath, load model from there
        model = getJson(includePath);
    } else {
        // Relative includePath, look up property in context
        content = jsonPath.resolve(context, "/" + includePath);

        if (content && content.length > 0) {
            if (content[0].json) {
                model = getJson(content[0].json);
            } else {
                model = content[0];
            }
        } else {
            model = {};
        }
        model.resourceType = type;
    }

    return model;
}

module.exports = {
    getJson: getJson,
    getTemplatePath: getTemplatePath,
    getResourceName: getResourceName,
    getDefaultTemplatePath: getDefaultTemplatePath,
    getTemplateModel: getTemplateModel
};
