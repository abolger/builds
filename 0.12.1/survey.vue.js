(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("vue"));
	else
		root["Survey"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __decorate; });
var __assign = Object["assign"] || function (target) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                target[p] = s[p];
    }
    return target;
};
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() { this.constructor = thisClass; }
    thisClass.prototype = baseClass === null ? Object.create(baseClass) : (__.prototype = baseClass.prototype, new __());
}
;
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return JsonObjectProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return JsonMetadataClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JsonMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JsonError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return JsonUnknownPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return JsonMissingTypeErrorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JsonMissingTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JsonIncorrectTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return JsonRequiredPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonObject; });

var JsonObjectProperty = (function () {
    function JsonObjectProperty(name) {
        this.name = name;
        this.typeValue = null;
        this.choicesValue = null;
        this.choicesfunc = null;
        this.className = null;
        this.classNamePart = null;
        this.baseClassName = null;
        this.defaultValue = null;
        this.onGetValue = null;
    }
    Object.defineProperty(JsonObjectProperty.prototype, "type", {
        get: function () { return this.typeValue ? this.typeValue : "string"; },
        set: function (value) { this.typeValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
        get: function () { return this.onGetValue; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.isDefaultValue = function (value) {
        return (this.defaultValue) ? (this.defaultValue == value) : !(value);
    };
    JsonObjectProperty.prototype.getValue = function (obj) {
        if (this.onGetValue)
            return this.onGetValue(obj);
        return null;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
        get: function () { return this.onSetValue; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
        if (this.onSetValue) {
            this.onSetValue(obj, value, jsonConv);
        }
    };
    JsonObjectProperty.prototype.getObjType = function (objType) {
        if (!this.classNamePart)
            return objType;
        return objType.replace(this.classNamePart, "");
    };
    JsonObjectProperty.prototype.getClassName = function (className) {
        return (this.classNamePart && className.indexOf(this.classNamePart) < 0) ? className + this.classNamePart : className;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
        get: function () {
            if (this.choicesValue != null)
                return this.choicesValue;
            if (this.choicesfunc != null)
                return this.choicesfunc();
            return null;
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
        this.choicesValue = value;
        this.choicesfunc = valueFunc;
    };
    return JsonObjectProperty;
}());

var JsonMetadataClass = (function () {
    function JsonMetadataClass(name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        this.name = name;
        this.creator = creator;
        this.parentName = parentName;
        this.properties = null;
        this.requiredProperties = null;
        this.properties = new Array();
        for (var i = 0; i < properties.length; i++) {
            var prop = this.createProperty(properties[i]);
            if (prop) {
                this.properties.push(prop);
            }
        }
    }
    JsonMetadataClass.prototype.find = function (name) {
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == name)
                return this.properties[i];
        }
        return null;
    };
    JsonMetadataClass.prototype.createProperty = function (propInfo) {
        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
        if (!propertyName)
            return;
        var propertyType = null;
        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
        if (typeIndex > -1) {
            propertyType = propertyName.substring(typeIndex + 1);
            propertyName = propertyName.substring(0, typeIndex);
        }
        propertyName = this.getPropertyName(propertyName);
        var prop = new JsonObjectProperty(propertyName);
        if (propertyType) {
            prop.type = propertyType;
        }
        if (typeof propInfo === "object") {
            if (propInfo.type) {
                prop.type = propInfo.type;
            }
            if (propInfo.default) {
                prop.defaultValue = propInfo.default;
            }
            if (propInfo.isRequired) {
                this.makePropertyRequired(prop.name);
            }
            if (propInfo.choices) {
                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
                prop.setChoices(choicesValue, choicesFunc);
            }
            if (propInfo.onGetValue) {
                prop.onGetValue = propInfo.onGetValue;
            }
            if (propInfo.onSetValue) {
                prop.onSetValue = propInfo.onSetValue;
            }
            if (propInfo.className) {
                prop.className = propInfo.className;
            }
            if (propInfo.baseClassName) {
                prop.baseClassName = propInfo.baseClassName;
            }
            if (propInfo.classNamePart) {
                prop.classNamePart = propInfo.classNamePart;
            }
        }
        return prop;
    };
    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
        if (propertyName.length == 0 || propertyName[0] != JsonMetadataClass.requiredSymbol)
            return propertyName;
        propertyName = propertyName.slice(1);
        this.makePropertyRequired(propertyName);
        return propertyName;
    };
    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
        if (!this.requiredProperties) {
            this.requiredProperties = new Array();
        }
        this.requiredProperties.push(propertyName);
    };
    return JsonMetadataClass;
}());

JsonMetadataClass.requiredSymbol = '!';
JsonMetadataClass.typeSymbol = ':';
var JsonMetadata = (function () {
    function JsonMetadata() {
        this.classes = {};
        this.childrenClasses = {};
        this.classProperties = {};
        this.classRequiredProperties = {};
    }
    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
        this.classes[name] = metaDataClass;
        if (parentName) {
            var children = this.childrenClasses[parentName];
            if (!children) {
                this.childrenClasses[parentName] = [];
            }
            this.childrenClasses[parentName].push(metaDataClass);
        }
        return metaDataClass;
    };
    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
        var metaDataClass = this.findClass(name);
        if (metaDataClass) {
            metaDataClass.creator = creator;
        }
    };
    JsonMetadata.prototype.getProperties = function (name) {
        var properties = this.classProperties[name];
        if (!properties) {
            properties = new Array();
            this.fillProperties(name, properties);
            this.classProperties[name] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.createClass = function (name) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return null;
        return metaDataClass.creator();
    };
    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
        if (canBeCreated === void 0) { canBeCreated = false; }
        var result = [];
        this.fillChildrenClasses(name, canBeCreated, result);
        return result;
    };
    JsonMetadata.prototype.getRequiredProperties = function (name) {
        var properties = this.classRequiredProperties[name];
        if (!properties) {
            properties = new Array();
            this.fillRequiredProperties(name, properties);
            this.classRequiredProperties[name] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.addProperty = function (className, propertyInfo) {
        var metaDataClass = this.findClass(className);
        if (!metaDataClass)
            return;
        var property = metaDataClass.createProperty(propertyInfo);
        if (property) {
            this.addPropertyToClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
        }
    };
    JsonMetadata.prototype.removeProperty = function (className, propertyName) {
        var metaDataClass = this.findClass(className);
        if (!metaDataClass)
            return false;
        var property = metaDataClass.find(propertyName);
        if (property) {
            this.removePropertyFromClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
        }
    };
    JsonMetadata.prototype.addPropertyToClass = function (metaDataClass, property) {
        if (metaDataClass.find(property.name) != null)
            return;
        metaDataClass.properties.push(property);
    };
    JsonMetadata.prototype.removePropertyFromClass = function (metaDataClass, property) {
        var index = metaDataClass.properties.indexOf(property);
        if (index < 0)
            return;
        metaDataClass.properties.splice(index, 1);
        if (metaDataClass.requiredProperties) {
            index = metaDataClass.requiredProperties.indexOf(property.name);
            if (index >= 0) {
                metaDataClass.requiredProperties.splice(index, 1);
            }
        }
    };
    JsonMetadata.prototype.emptyClassPropertiesHash = function (metaDataClass) {
        this.classProperties[metaDataClass.name] = null;
        var childClasses = this.getChildrenClasses(metaDataClass.name);
        for (var i = 0; i < childClasses.length; i++) {
            this.classProperties[childClasses[i].name] = null;
        }
    };
    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
        var children = this.childrenClasses[name];
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            if (!canBeCreated || children[i].creator) {
                result.push(children[i]);
            }
            this.fillChildrenClasses(children[i].name, canBeCreated, result);
        }
    };
    JsonMetadata.prototype.findClass = function (name) {
        return this.classes[name];
    };
    JsonMetadata.prototype.fillProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.parentName) {
            this.fillProperties(metaDataClass.parentName, list);
        }
        for (var i = 0; i < metaDataClass.properties.length; i++) {
            this.addPropertyCore(metaDataClass.properties[i], list, list.length);
        }
    };
    JsonMetadata.prototype.addPropertyCore = function (property, list, endIndex) {
        var index = -1;
        for (var i = 0; i < endIndex; i++) {
            if (list[i].name == property.name) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            list.push(property);
        }
        else {
            list[index] = property;
        }
    };
    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.requiredProperties) {
            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
        }
        if (metaDataClass.parentName) {
            this.fillRequiredProperties(metaDataClass.parentName, list);
        }
    };
    return JsonMetadata;
}());

var JsonError = (function () {
    function JsonError(type, message) {
        this.type = type;
        this.message = message;
        this.description = "";
        this.at = -1;
    }
    JsonError.prototype.getFullDescription = function () {
        return this.message + (this.description ? "\n" + this.description : "");
    };
    return JsonError;
}());

var JsonUnknownPropertyError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonUnknownPropertyError, _super);
    function JsonUnknownPropertyError(propertyName, className) {
        var _this = _super.call(this, "unknownproperty", "The property '" + propertyName + "' in class '" + className + "' is unknown.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        var properties = JsonObject.metaData.getProperties(className);
        if (properties) {
            _this.description = "The list of available properties are: ";
            for (var i = 0; i < properties.length; i++) {
                if (i > 0)
                    _this.description += ", ";
                _this.description += properties[i].name;
            }
            _this.description += '.';
        }
        return _this;
    }
    return JsonUnknownPropertyError;
}(JsonError));

var JsonMissingTypeErrorBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeErrorBase, _super);
    function JsonMissingTypeErrorBase(baseClassName, type, message) {
        var _this = _super.call(this, type, message) || this;
        _this.baseClassName = baseClassName;
        _this.type = type;
        _this.message = message;
        _this.description = "The following types are available: ";
        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
        for (var i = 0; i < types.length; i++) {
            if (i > 0)
                _this.description += ", ";
            _this.description += "'" + types[i].name + "'";
        }
        _this.description += ".";
        return _this;
    }
    return JsonMissingTypeErrorBase;
}(JsonError));

var JsonMissingTypeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeError, _super);
    function JsonMissingTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + propertyName + "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonMissingTypeError;
}(JsonMissingTypeErrorBase));

var JsonIncorrectTypeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonIncorrectTypeError, _super);
    function JsonIncorrectTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + propertyName + "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonIncorrectTypeError;
}(JsonMissingTypeErrorBase));

var JsonRequiredPropertyError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonRequiredPropertyError, _super);
    function JsonRequiredPropertyError(propertyName, className) {
        var _this = _super.call(this, "requiredproperty", "The property '" + propertyName + "' is required in class '" + className + "'.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        return _this;
    }
    return JsonRequiredPropertyError;
}(JsonError));

var JsonObject = (function () {
    function JsonObject() {
        this.errors = new Array();
    }
    Object.defineProperty(JsonObject, "metaData", {
        get: function () { return JsonObject.metaDataValue; },
        enumerable: true,
        configurable: true
    });
    JsonObject.prototype.toJsonObject = function (obj) {
        return this.toJsonObjectCore(obj, null);
    };
    JsonObject.prototype.toObject = function (jsonObj, obj) {
        if (!jsonObj)
            return;
        var properties = null;
        if (obj.getType) {
            properties = JsonObject.metaData.getProperties(obj.getType());
        }
        if (!properties)
            return;
        for (var key in jsonObj) {
            if (key == JsonObject.typePropertyName)
                continue;
            if (key == JsonObject.positionPropertyName) {
                obj[key] = jsonObj[key];
                continue;
            }
            var property = this.findProperty(properties, key);
            if (!property) {
                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
                continue;
            }
            this.valueToObj(jsonObj[key], obj, key, property);
        }
    };
    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
        if (!obj.getType)
            return obj;
        var result = {};
        if (property != null && (!property.className)) {
            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
        }
        var properties = JsonObject.metaData.getProperties(obj.getType());
        for (var i = 0; i < properties.length; i++) {
            this.valueToJson(obj, result, properties[i]);
        }
        return result;
    };
    JsonObject.prototype.valueToJson = function (obj, result, property) {
        var value = null;
        if (property.hasToUseGetValue) {
            value = property.getValue(obj);
        }
        else {
            value = obj[property.name];
        }
        if (value === undefined || value === null)
            return;
        if (property.isDefaultValue(value))
            return;
        if (this.isValueArray(value)) {
            var arrValue = [];
            for (var i = 0; i < value.length; i++) {
                arrValue.push(this.toJsonObjectCore(value[i], property));
            }
            value = arrValue.length > 0 ? arrValue : null;
        }
        else {
            value = this.toJsonObjectCore(value, property);
        }
        if (!property.isDefaultValue(value)) {
            result[property.name] = value;
        }
    };
    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
        if (value == null)
            return;
        if (property != null && property.hasToUseSetValue) {
            property.setValue(obj, value, this);
            return;
        }
        if (this.isValueArray(value)) {
            this.valueToArray(value, obj, key, property);
            return;
        }
        var newObj = this.createNewObj(value, property);
        if (newObj.newObj) {
            this.toObject(value, newObj.newObj);
            value = newObj.newObj;
        }
        if (!newObj.error) {
            obj[key] = value;
        }
    };
    JsonObject.prototype.isValueArray = function (value) { return value && value.constructor.toString().indexOf("Array") > -1; };
    JsonObject.prototype.createNewObj = function (value, property) {
        var result = { newObj: null, error: null };
        var className = value[JsonObject.typePropertyName];
        if (!className && property != null && property.className) {
            className = property.className;
        }
        className = property.getClassName(className);
        result.newObj = (className) ? JsonObject.metaData.createClass(className) : null;
        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
        return result;
    };
    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
        var error = null;
        if (newObj) {
            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
            if (requiredProperties) {
                for (var i = 0; i < requiredProperties.length; i++) {
                    if (!value[requiredProperties[i]]) {
                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
                        break;
                    }
                }
            }
        }
        else {
            if (property.baseClassName) {
                if (!className) {
                    error = new JsonMissingTypeError(property.name, property.baseClassName);
                }
                else {
                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
                }
            }
        }
        if (error) {
            this.addNewError(error, value);
        }
        return error;
    };
    JsonObject.prototype.addNewError = function (error, jsonObj) {
        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
            error.at = jsonObj[JsonObject.positionPropertyName].start;
        }
        this.errors.push(error);
    };
    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
        if (!this.isValueArray(obj[key])) {
            obj[key] = [];
        }
        for (var i = 0; i < value.length; i++) {
            var newValue = this.createNewObj(value[i], property);
            if (newValue.newObj) {
                obj[key].push(newValue.newObj);
                this.toObject(value[i], newValue.newObj);
            }
            else {
                if (!newValue.error) {
                    obj[key].push(value[i]);
                }
            }
        }
    };
    JsonObject.prototype.findProperty = function (properties, key) {
        if (!properties)
            return null;
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == key)
                return properties[i];
        }
        return null;
    };
    return JsonObject;
}());

JsonObject.typePropertyName = "type";
JsonObject.positionPropertyName = "pos";
JsonObject.metaDataValue = new JsonMetadata();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return surveyLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });
var surveyLocalization = {
    currentLocale: "",
    locales: {},
    getString: function (strName) {
        var loc = this.currentLocale ? this.locales[this.currentLocale] : surveyStrings;
        if (!loc || !loc[strName])
            loc = surveyStrings;
        return loc[strName];
    },
    getLocales: function () {
        var res = [];
        res.push("");
        for (var key in this.locales) {
            res.push(key);
        }
        res.sort();
        return res;
    }
};
var surveyStrings = {
    pagePrevText: "Previous",
    pageNextText: "Next",
    completeText: "Complete",
    otherItemText: "Other (describe)",
    progressText: "Page {0} of {1}",
    emptySurvey: "There is no visible page or question in the survey.",
    completingSurvey: "Thank you for completing the survey!",
    loadingSurvey: "Survey is loading...",
    optionsCaption: "Choose...",
    requiredError: "Please answer the question.",
    requiredInAllRowsError: "Please answer questions in all rows.",
    numericError: "The value should be numeric.",
    textMinLength: "Please enter at least {0} symbols.",
    textMaxLength: "Please enter less than {0} symbols.",
    textMinMaxLength: "Please enter more than {0} and less than {1} symbols.",
    minRowCountError: "Please fill in at least {0} rows.",
    minSelectError: "Please select at least {0} variants.",
    maxSelectError: "Please select no more than {0} variants.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "The '{0}' should be equal or more than {1}",
    numericMax: "The '{0}' should be equal or less than {1}",
    invalidEmail: "Please enter a valid e-mail address.",
    urlRequestError: "The request returned error '{0}'. {1}",
    urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
    exceedMaxSize: "The file size should not exceed {0}.",
    otherRequiredError: "Please enter the other value.",
    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
    addRow: "Add row",
    removeRow: "Remove"
};
surveyLocalization.locales["en"] = surveyStrings;
if (!String.prototype["format"]) {
    String.prototype["format"] = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* vue-property-decorator verson 3.4.0 MIT LICENSE copyright 2016 kaorun343 */

var Vue = __webpack_require__(3);
var vue_class_component_1 = __webpack_require__(92);
__webpack_require__(49);
/**
 * @brief  Makes a decorator for prop.
 *
 * @param  options  The options
 * @param  target   The target
 * @param  key      The key
 *
 * @return PropertyDecorator
 */
function makePropDecorator(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        if (!(options instanceof Array) && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
        vue_class_component_1.createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
function Prop(options, key) {
    if (options === void 0) { options = {}; }
    if (options instanceof Vue) {
        return makePropDecorator()(options, key);
    }
    else {
        return makePropDecorator(options);
    }
}
exports.Prop = Prop;
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return vue_class_component_1.createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
exports.Watch = Watch;
exports.prop = Prop;
exports.watch = Watch;
exports.Component = vue_class_component_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ItemValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SurveyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var ItemValue = (function () {
    function ItemValue(value, text) {
        if (text === void 0) { text = null; }
        this.text = text;
        this.value = value;
    }
    ItemValue.setData = function (items, values) {
        items.length = 0;
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            var item = new ItemValue(null);
            if (typeof (value.value) !== 'undefined') {
                var exception = null;
                if (typeof (value.getType) !== 'undefined' && value.getType() == 'itemvalue') {
                    value.itemValue = value.itemValue;
                    item.itemText = value.itemText;
                    exception = ItemValue.itemValueProp;
                }
                ItemValue.copyAttributes(value, item, exception);
            }
            else {
                item.value = value;
            }
            items.push(item);
        }
    };
    ItemValue.getData = function (items) {
        var result = new Array();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.hasText) {
                result.push({ value: item.value, text: item.text });
            }
            else {
                result.push(item.value);
            }
        }
        return result;
    };
    ItemValue.getItemByValue = function (items, val) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return items[i];
        }
        return null;
    };
    ItemValue.copyAttributes = function (src, dest, exceptons) {
        for (var key in src) {
            if ((typeof src[key] == 'function'))
                continue;
            if (exceptons && exceptons.indexOf(key) > -1)
                continue;
            dest[key] = src[key];
        }
    };
    ItemValue.prototype.getType = function () { return "itemvalue"; };
    Object.defineProperty(ItemValue.prototype, "value", {
        get: function () { return this.itemValue; },
        set: function (newValue) {
            this.itemValue = newValue;
            if (!this.itemValue)
                return;
            var str = this.itemValue.toString();
            var index = str.indexOf(ItemValue.Separator);
            if (index > -1) {
                this.itemValue = str.slice(0, index);
                this.text = str.slice(index + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "hasText", {
        get: function () { return this.itemText ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "text", {
        get: function () {
            if (this.hasText)
                return this.itemText;
            if (this.value)
                return this.value.toString();
            return null;
        },
        set: function (newText) {
            this.itemText = newText;
        },
        enumerable: true,
        configurable: true
    });
    return ItemValue;
}());

ItemValue.Separator = '|';
ItemValue.itemValueProp = ["text", "value", "hasText"];
var Base = (function () {
    function Base() {
    }
    Base.prototype.getType = function () {
        throw new Error('This method is abstract');
    };
    Base.prototype.isTwoValueEquals = function (x, y) {
        if (x === y)
            return true;
        if (!(x instanceof Object) || !(y instanceof Object))
            return false;
        for (var p in x) {
            if (!x.hasOwnProperty(p))
                continue;
            if (!y.hasOwnProperty(p))
                return false;
            if (x[p] === y[p])
                continue;
            if (typeof (x[p]) !== "object")
                return false;
            if (!this.isTwoValueEquals(x[p], y[p]))
                return false;
        }
        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
                return false;
        }
        return true;
    };
    return Base;
}());

var SurveyError = (function () {
    function SurveyError() {
    }
    SurveyError.prototype.getText = function () {
        throw new Error('This method is abstract');
    };
    return SurveyError;
}());

var SurveyPageId = "sq_page";
var SurveyElement = (function () {
    function SurveyElement() {
    }
    SurveyElement.ScrollElementToTop = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (!el || !el.scrollIntoView)
            return false;
        var elemTop = el.getBoundingClientRect().top;
        if (elemTop < 0)
            el.scrollIntoView();
        return elemTop < 0;
    };
    SurveyElement.GetFirstNonTextElement = function (elements) {
        if (!elements || !elements.length)
            return;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName != "#text")
                return elements[i];
        }
        return null;
    };
    SurveyElement.FocusElement = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (el) {
            el.focus();
            return true;
        }
        return false;
    };
    return SurveyElement;
}());

var Event = (function () {
    function Event() {
    }
    Object.defineProperty(Event.prototype, "isEmpty", {
        get: function () { return this.callbacks == null || this.callbacks.length == 0; },
        enumerable: true,
        configurable: true
    });
    Event.prototype.fire = function (sender, options) {
        if (this.callbacks == null)
            return;
        for (var i = 0; i < this.callbacks.length; i++) {
            var callResult = this.callbacks[i](sender, options);
        }
    };
    Event.prototype.add = function (func) {
        if (this.callbacks == null) {
            this.callbacks = new Array();
        }
        this.callbacks.push(func);
    };
    Event.prototype.remove = function (func) {
        if (this.callbacks == null)
            return;
        var index = this.callbacks.indexOf(func, 0);
        if (index != undefined) {
            this.callbacks.splice(index, 1);
        }
    };
    return Event;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFactory; });
var QuestionFactory = (function () {
    function QuestionFactory() {
        this.creatorHash = {};
    }
    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    QuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    QuestionFactory.prototype.createQuestion = function (questionType, name) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(name);
    };
    return QuestionFactory;
}());

QuestionFactory.Instance = new QuestionFactory();
QuestionFactory.DefaultChoices = ["1|first item", "2|second item", "3|third item"];


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);



var Question = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Question;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Question.prototype, "question", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Question.prototype, "isEditMode", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Question.prototype, "css", void 0);
Question = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Question);
/* harmony default export */ __webpack_exports__["a"] = Question;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AnswerRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RequreNumericError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExceedSizeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomError; });



var AnswerRequiredError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerRequiredError, _super);
    function AnswerRequiredError() {
        return _super.call(this) || this;
    }
    AnswerRequiredError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("requiredError");
    };
    return AnswerRequiredError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));

var RequreNumericError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RequreNumericError, _super);
    function RequreNumericError() {
        return _super.call(this) || this;
    }
    RequreNumericError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("numericError");
    };
    return RequreNumericError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));

var ExceedSizeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ExceedSizeError, _super);
    function ExceedSizeError(maxSize) {
        var _this = _super.call(this) || this;
        _this.maxSize = maxSize;
        return _this;
    }
    ExceedSizeError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("exceedMaxSize")["format"](this.getTextSize());
    };
    ExceedSizeError.prototype.getTextSize = function () {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        var fixed = [0, 0, 2, 3, 3];
        if (this.maxSize == 0)
            return '0 Byte';
        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
        var value = this.maxSize / Math.pow(1024, i);
        return value.toFixed(fixed[i]) + ' ' + sizes[i];
    };
    return ExceedSizeError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));

var CustomError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](CustomError, _super);
    function CustomError(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    CustomError.prototype.getText = function () {
        return this.text;
    };
    return CustomError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionbase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });








var Question = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Question, _super);
    function Question(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.titleValue = null;
        _this.isRequiredValue = false;
        _this.hasCommentValue = false;
        _this.hasOtherValue = false;
        _this.commentTextValue = "";
        _this.errors = [];
        _this.validators = new Array();
        _this.isvalueChangedCallbackFiring = false;
        _this.isValueChangedInSurvey = false;
        return _this;
    }
    Object.defineProperty(Question.prototype, "hasTitle", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasInput", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "inputId", {
        get: function () { return this.id + "i"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        get: function () { return (this.titleValue) ? this.titleValue : this.name; },
        set: function (newValue) {
            this.titleValue = newValue;
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "processedTitle", {
        get: function () { return this.survey != null ? this.survey.processText(this.title) : this.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "fullTitle", {
        get: function () {
            if (this.survey && this.survey.questionTitleTemplate) {
                if (!this.textPreProcessor) {
                    var self = this;
                    this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__["a" /* TextPreProcessor */]();
                    this.textPreProcessor.onHasValue = function (name) { return self.canProcessedTextValues(name.toLowerCase()); };
                    this.textPreProcessor.onProcess = function (name) { return self.getProcessedTextValue(name); };
                }
                return this.textPreProcessor.process(this.survey.questionTitleTemplate);
            }
            var requireText = this.requiredText;
            if (requireText)
                requireText += " ";
            var no = this.no;
            if (no)
                no += ". ";
            return no + requireText + this.processedTitle;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
        __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].ScrollElementToTop(this.id);
        var id = !onError ? this.getFirstInputElementId() : this.getFirstErrorInputElementId();
        if (__WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].FocusElement(id)) {
            this.fireCallback(this.focusCallback);
        }
    };
    Question.prototype.getFirstInputElementId = function () {
        return this.inputId;
    };
    Question.prototype.getFirstErrorInputElementId = function () {
        return this.getFirstInputElementId();
    };
    Question.prototype.canProcessedTextValues = function (name) {
        return name == "no" || name == "title" || name == "require";
    };
    Question.prototype.getProcessedTextValue = function (name) {
        if (name == "no")
            return this.no;
        if (name == "title")
            return this.processedTitle;
        if (name == "require")
            return this.requiredText;
        return null;
    };
    Question.prototype.supportComment = function () { return false; };
    Question.prototype.supportOther = function () { return false; };
    Object.defineProperty(Question.prototype, "isRequired", {
        get: function () { return this.isRequiredValue; },
        set: function (val) {
            if (this.isRequired == val)
                return;
            this.isRequiredValue = val;
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasComment", {
        get: function () { return this.hasCommentValue; },
        set: function (val) {
            if (!this.supportComment())
                return;
            this.hasCommentValue = val;
            if (this.hasComment)
                this.hasOther = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "commentText", {
        get: function () { return this.commentTextValue ? this.commentTextValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"); },
        set: function (value) {
            this.commentTextValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasOther", {
        get: function () { return this.hasOtherValue; },
        set: function (val) {
            if (!this.supportOther() || this.hasOther == val)
                return;
            this.hasOtherValue = val;
            if (this.hasOther)
                this.hasComment = false;
            this.hasOtherChanged();
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.hasOtherChanged = function () { };
    Object.defineProperty(Question.prototype, "no", {
        get: function () {
            if (this.visibleIndex < 0)
                return "";
            var startIndex = 1;
            var isNumeric = true;
            var str = "";
            if (this.survey && this.survey.questionStartIndex) {
                str = this.survey.questionStartIndex;
                if (parseInt(str))
                    startIndex = parseInt(str);
                else if (str.length == 1)
                    isNumeric = false;
            }
            if (isNumeric)
                return (this.visibleIndex + startIndex).toString();
            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.onSetData = function () {
        _super.prototype.onSetData.call(this);
        this.onSurveyValueChanged(this.value);
    };
    Object.defineProperty(Question.prototype, "value", {
        get: function () {
            return this.valueFromData(this.getValueCore());
        },
        set: function (newValue) {
            this.setNewValue(newValue);
            if (this.isvalueChangedCallbackFiring)
                return;
            this.isvalueChangedCallbackFiring = true;
            this.fireCallback(this.valueChangedCallback);
            this.isvalueChangedCallbackFiring = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "comment", {
        get: function () { return this.getComment(); },
        set: function (newValue) {
            if (this.comment == newValue)
                return;
            this.setComment(newValue);
            this.fireCallback(this.commentChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.getComment = function () { return this.data != null ? this.data.getComment(this.name) : this.questionComment; };
    Question.prototype.setComment = function (newValue) {
        this.setNewComment(newValue);
    };
    Question.prototype.isEmpty = function () { return this.value == null; };
    Question.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        this.checkForErrors(fireCallback);
        return this.errors.length > 0;
    };
    Object.defineProperty(Question.prototype, "currentErrorCount", {
        get: function () { return this.errors.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "requiredText", {
        get: function () { return this.survey != null && this.isRequired ? this.survey.requiredText : ""; },
        enumerable: true,
        configurable: true
    });
    Question.prototype.addError = function (error) {
        this.errors.push(error);
        this.fireCallback(this.errorsChangedCallback);
    };
    Question.prototype.checkForErrors = function (fireCallback) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        this.onCheckForErrors(this.errors);
        if (this.errors.length == 0 && this.value) {
            var error = this.runValidators();
            if (error) {
                this.errors.push(error);
            }
        }
        if (this.survey && this.errors.length == 0) {
            var error = this.survey.validateQuestion(this.name);
            if (error) {
                this.errors.push(error);
            }
        }
        if (fireCallback && (errorLength != this.errors.length || errorLength > 0)) {
            this.fireCallback(this.errorsChangedCallback);
        }
    };
    Question.prototype.onCheckForErrors = function (errors) {
        if (this.hasRequiredError()) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["d" /* AnswerRequiredError */]());
        }
    };
    Question.prototype.hasRequiredError = function () {
        return this.isRequired && this.isEmpty();
    };
    Question.prototype.runValidators = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__validator__["h" /* ValidatorRunner */]().run(this);
    };
    Question.prototype.setNewValue = function (newValue) {
        this.setNewValueInData(newValue);
        this.onValueChanged();
    };
    Question.prototype.setNewValueInData = function (newValue) {
        if (!this.isValueChangedInSurvey) {
            newValue = this.valueToData(newValue);
            this.setValueCore(newValue);
        }
    };
    Question.prototype.getValueCore = function () {
        return this.data != null ? this.data.getValue(this.name) : this.questionValue;
    };
    Question.prototype.setValueCore = function (newValue) {
        if (this.data != null) {
            this.data.setValue(this.name, newValue);
        }
        else {
            this.questionValue = newValue;
        }
    };
    Question.prototype.valueFromData = function (val) { return val; };
    Question.prototype.valueToData = function (val) { return val; };
    Question.prototype.onValueChanged = function () { };
    Question.prototype.setNewComment = function (newValue) {
        if (this.data != null) {
            this.data.setComment(this.name, newValue);
        }
        else
            this.questionComment = newValue;
    };
    //IQuestion
    Question.prototype.onSurveyValueChanged = function (newValue) {
        this.isValueChangedInSurvey = true;
        this.value = this.valueFromData(newValue);
        this.fireCallback(this.commentChangedCallback);
        this.isValueChangedInSurvey = false;
    };
    //IValidatorOwner
    Question.prototype.getValidatorTitle = function () { return null; };
    return Question;
}(__WEBPACK_IMPORTED_MODULE_2__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("question", [{ name: "title:text", onGetValue: function (obj) { return obj.titleValue; } },
    { name: "commentText", onGetValue: function (obj) { return obj.commentTextValue; } },
    "isRequired:boolean", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], null, "questionbase");


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return surveyCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultStandardCss; });
var surveyCss = {
    currentType: "",
    getCss: function () {
        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
        if (!loc)
            loc = defaultStandardCss;
        return loc;
    },
};
var defaultStandardCss = {
    root: "sv_main",
    header: "",
    body: "sv_body",
    footer: "sv_nav",
    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
    progress: "sv_progress", progressBar: "",
    pageTitle: "sv_p_title",
    row: "sv_row",
    question: { root: "sv_q", title: "sv_q_title", comment: "", indent: 20 },
    error: { root: "sv_q_erbox", icon: "", item: "" },
    checkbox: { root: "sv_qcbc", item: "sv_q_checkbox", other: "sv_q_other" },
    comment: "",
    dropdown: "",
    matrix: { root: "sv_q_matrix" },
    matrixdropdown: { root: "sv_q_matrix" },
    matrixdynamic: { root: "table", button: "" },
    multipletext: { root: "", itemTitle: "", itemValue: "" },
    radiogroup: { root: "sv_qcbc", item: "sv_q_radiogroup", other: "sv_q_other" },
    rating: { root: "sv_q_rating", item: "sv_q_rating_item" },
    text: "",
    window: {
        root: "sv_window", body: "sv_window_content",
        header: {
            root: "sv_window_title", title: "", button: "", buttonExpanded: "", buttonCollapsed: ""
        }
    }
};
surveyCss["standard"] = defaultStandardCss;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxBase; });







var QuestionSelectBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionSelectBase, _super);
    function QuestionSelectBase(name) {
        var _this = _super.call(this, name) || this;
        _this.visibleChoicesCache = null;
        _this.otherItem = new __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */]("other", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"));
        _this.choicesFromUrl = null;
        _this.cachedValueForUrlRequestion = null;
        _this.choicesValues = new Array();
        _this.otherErrorText = null;
        _this.storeOthersAsComment = true;
        _this.choicesOrderValue = "none";
        _this.isSettingComment = false;
        _this.choicesByUrl = _this.createRestfull();
        var self = _this;
        _this.choicesByUrl.getResultCallback = function (items) { self.onLoadChoicesFromUrl(items); };
        return _this;
    }
    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
        get: function () {
            return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.getHasOther = function (val) {
        return val == this.otherItem.value;
    };
    QuestionSelectBase.prototype.createRestfull = function () { return new __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__["a" /* ChoicesRestfull */](); };
    QuestionSelectBase.prototype.getComment = function () {
        if (this.getStoreOthersAsComment())
            return _super.prototype.getComment.call(this);
        return this.commentValue;
    };
    QuestionSelectBase.prototype.setComment = function (newValue) {
        if (this.getStoreOthersAsComment())
            _super.prototype.setComment.call(this, newValue);
        else {
            if (!this.isSettingComment && newValue != this.commentValue) {
                this.isSettingComment = true;
                this.commentValue = newValue;
                if (this.isOtherSelected) {
                    this.setNewValueInData(this.cachedValue);
                }
                this.isSettingComment = false;
            }
        }
    };
    QuestionSelectBase.prototype.setNewValue = function (newValue) {
        if (newValue)
            this.cachedValueForUrlRequestion = newValue;
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionSelectBase.prototype.valueFromData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueFromData.call(this, val);
        this.cachedValue = this.valueFromDataCore(val);
        return this.cachedValue;
    };
    QuestionSelectBase.prototype.valueToData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueToData.call(this, val);
        this.cachedValue = val;
        return this.valueToDataCore(val);
    };
    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
        if (!this.hasUnknownValue(val))
            return val;
        if (val == this.otherItem.value)
            return val;
        this.comment = val;
        return this.otherItem.value;
    };
    QuestionSelectBase.prototype.valueToDataCore = function (val) {
        if (val == this.otherItem.value && this.getComment()) {
            val = this.getComment();
        }
        return val;
    };
    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
        if (!val)
            return false;
        var items = this.activeChoices;
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
        get: function () { return this.choicesValues; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.choicesValues, newValue);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.hasOtherChanged = function () {
        this.onVisibleChoicesChanged();
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
        get: function () { return this.choicesOrderValue; },
        set: function (newValue) {
            if (newValue == this.choicesOrderValue)
                return;
            this.choicesOrderValue = newValue;
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
        get: function () { return this.otherItem.text; },
        set: function (value) { this.otherItem.text = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
        get: function () {
            if (!this.hasOther && this.choicesOrder == "none")
                return this.activeChoices;
            if (!this.visibleChoicesCache) {
                this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice());
                if (this.hasOther) {
                    this.visibleChoicesCache.push(this.otherItem);
                }
            }
            return this.visibleChoicesCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
        get: function () { return this.choicesFromUrl ? this.choicesFromUrl : this.choices; },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.supportComment = function () { return true; };
    QuestionSelectBase.prototype.supportOther = function () { return true; };
    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (!this.isOtherSelected || this.comment)
            return;
        var text = this.otherErrorText;
        if (!text) {
            text = __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherRequiredError");
        }
        errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](text));
    };
    QuestionSelectBase.prototype.getStoreOthersAsComment = function () { return this.storeOthersAsComment && (this.survey != null ? this.survey.storeOthersAsComment : true); };
    QuestionSelectBase.prototype.onSurveyLoad = function () {
        if (this.choicesByUrl)
            this.choicesByUrl.run();
    };
    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
        var errorCount = this.errors.length;
        this.errors = [];
        if (this.choicesByUrl && this.choicesByUrl.error) {
            this.errors.push(this.choicesByUrl.error);
        }
        if (errorCount > 0 || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        var newChoices = null;
        if (array && array.length > 0) {
            newChoices = new Array();
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(newChoices, array);
        }
        this.choicesFromUrl = newChoices;
        this.onVisibleChoicesChanged();
        if (this.cachedValueForUrlRequestion) {
            this.value = this.cachedValueForUrlRequestion;
        }
    };
    QuestionSelectBase.prototype.onVisibleChoicesChanged = function () {
        this.visibleChoicesCache = null;
        this.fireCallback(this.choicesChangedCallback);
    };
    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
        var order = this.choicesOrder.toLowerCase();
        if (order == "asc")
            return this.sortArray(array, 1);
        if (order == "desc")
            return this.sortArray(array, -1);
        if (order == "random")
            return this.randomizeArray(array);
        return array;
    };
    QuestionSelectBase.prototype.sortArray = function (array, mult) {
        return array.sort(function (a, b) {
            if (a.text < b.text)
                return -1 * mult;
            if (a.text > b.text)
                return 1 * mult;
            return 0;
        });
    };
    QuestionSelectBase.prototype.randomizeArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    return QuestionSelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

var QuestionCheckboxBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxBase, _super);
    function QuestionCheckboxBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.colCountValue = 1;
        return _this;
    }
    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.colCountValue = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    return QuestionCheckboxBase;
}(QuestionSelectBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean",
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] },
    { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function (obj) { return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl; }, onSetValue: function (obj, value) { obj.choicesByUrl.setData(value); } },
    { name: "otherText", default: __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText") }, "otherErrorText",
    { name: "storeOthersAsComment:boolean", default: true }], null, "question");
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4] }], null, "selectbase");


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditionsParser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conditionProcessValue__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConditionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionRunner; });


var Condition = (function () {
    function Condition() {
        this.opValue = "equal";
    }
    Object.defineProperty(Condition, "operators", {
        get: function () {
            if (Condition.operatorsValue != null)
                return Condition.operatorsValue;
            Condition.operatorsValue = {
                empty: function (left, right) { return !left; },
                notempty: function (left, right) { return !(!left); },
                equal: function (left, right) { return left == right; },
                notequal: function (left, right) { return left != right; },
                contains: function (left, right) { return left && left["indexOf"] && left.indexOf(right) > -1; },
                notcontains: function (left, right) { return !left || !left["indexOf"] || left.indexOf(right) == -1; },
                greater: function (left, right) { return left > right; },
                less: function (left, right) { return left < right; },
                greaterorequal: function (left, right) { return left >= right; },
                lessorequal: function (left, right) { return left <= right; }
            };
            return Condition.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Condition.prototype, "operator", {
        get: function () { return this.opValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Condition.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Condition.prototype.perform = function (left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        if (!left)
            left = this.left;
        if (!right)
            right = this.right;
        return Condition.operators[this.operator](this.getPureValue(left), this.getPureValue(right));
    };
    Condition.prototype.getPureValue = function (val) {
        if (!val || (typeof val != "string"))
            return val;
        var str = "";
        if (val.length > 0 && (val[0] == "'" || val[0] == '"'))
            val = val.substr(1);
        var len = val.length;
        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"'))
            val = val.substr(0, len - 1);
        return val;
    };
    return Condition;
}());

Condition.operatorsValue = null;
var ConditionNode = (function () {
    function ConditionNode() {
        this.connectiveValue = "and";
        this.children = [];
    }
    Object.defineProperty(ConditionNode.prototype, "connective", {
        get: function () { return this.connectiveValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (value == "&" || value == "&&")
                value = "and";
            if (value == "|" || value == "||")
                value = "or";
            if (value != "and" && value != "or")
                return;
            this.connectiveValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
        get: function () { return this.children.length == 0; },
        enumerable: true,
        configurable: true
    });
    ConditionNode.prototype.clear = function () {
        this.children = [];
        this.connective = "and";
    };
    return ConditionNode;
}());

var ConditionRunner = (function () {
    function ConditionRunner(expression) {
        this.root = new ConditionNode();
        this.expression = expression;
        this.processValue = new __WEBPACK_IMPORTED_MODULE_1__conditionProcessValue__["a" /* ProcessValue */]();
    }
    Object.defineProperty(ConditionRunner.prototype, "expression", {
        get: function () { return this.expressionValue; },
        set: function (value) {
            if (this.expression == value)
                return;
            this.expressionValue = value;
            new __WEBPACK_IMPORTED_MODULE_0__conditionsParser__["a" /* ConditionsParser */]().parse(this.expressionValue, this.root);
        },
        enumerable: true,
        configurable: true
    });
    ConditionRunner.prototype.run = function (values) {
        this.values = values;
        return this.runNode(this.root);
    };
    ConditionRunner.prototype.runNode = function (node) {
        var onFirstFail = node.connective == "and";
        for (var i = 0; i < node.children.length; i++) {
            var res = this.runNodeCondition(node.children[i]);
            if (!res && onFirstFail)
                return false;
            if (res && !onFirstFail)
                return true;
        }
        return onFirstFail;
    };
    ConditionRunner.prototype.runNodeCondition = function (value) {
        if (!value)
            return false;
        if (value["children"])
            return this.runNode(value);
        if (value["left"])
            return this.runCondition(value);
        return false;
    };
    ConditionRunner.prototype.runCondition = function (condition) {
        var left = condition.left;
        var name = this.getValueName(left);
        if (name) {
            if (!this.processValue.hasValue(name, this.values))
                return false;
            left = this.processValue.getValue(name, this.values);
        }
        var right = condition.right;
        name = this.getValueName(right);
        if (name) {
            if (!this.processValue.hasValue(name, this.values))
                return false;
            right = this.processValue.getValue(name, this.values);
        }
        return condition.perform(left, right);
    };
    ConditionRunner.prototype.getValueName = function (nodeValue) {
        if (!nodeValue)
            return null;
        if (typeof nodeValue !== 'string')
            return null;
        if (nodeValue.length < 3 || nodeValue[0] != '{' || nodeValue[nodeValue.length - 1] != '}')
            return null;
        return nodeValue.substr(1, nodeValue.length - 2);
    };
    return ConditionRunner;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessValue; });
var ProcessValue = (function () {
    function ProcessValue() {
    }
    ProcessValue.prototype.getFirstName = function (text) {
        if (!text)
            return text;
        var res = "";
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            if (ch == '.' || ch == '[')
                break;
            res += ch;
        }
        return res;
    };
    ProcessValue.prototype.hasValue = function (text, values) {
        var res = this.getValueCore(text, values);
        return res.hasValue;
    };
    ProcessValue.prototype.getValue = function (text, values) {
        var res = this.getValueCore(text, values);
        return res.value;
    };
    ProcessValue.prototype.getValueCore = function (text, values) {
        var res = { hasValue: false, value: null };
        var curValue = values;
        if (!curValue)
            return res;
        var isFirst = true;
        while (text && text.length > 0) {
            var isArray = !isFirst && text[0] == '[';
            if (!isArray) {
                if (!isFirst)
                    text = text.substr(1);
                var curName = this.getFirstName(text);
                if (!curName)
                    return res;
                if (!curValue[curName])
                    return res;
                curValue = curValue[curName];
                text = text.substr(curName.length);
            }
            else {
                if (!Array.isArray(curValue))
                    return res;
                var index = 1;
                var str = "";
                while (index < text.length && text[index] != ']') {
                    str += text[index];
                    index++;
                }
                text = index < text.length ? text.substr(index + 1) : "";
                index = this.getIntValue(str);
                if (index < 0 || index >= curValue.length)
                    return res;
                curValue = curValue[index];
            }
            isFirst = false;
        }
        res.value = curValue;
        res.hasValue = true;
        return res;
    };
    ProcessValue.prototype.getIntValue = function (str) {
        if (str == "0" || ((str | 0) > 0 && str % 1 == 0))
            return Number(str);
        return -1;
    };
    return ProcessValue;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_baseselect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDropdownColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDropdownCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatrixDropdownRowModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QuestionMatrixDropdownModelBase; });







var MatrixDropdownColumn = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownColumn, _super);
    function MatrixDropdownColumn(name, title) {
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.choicesValue = [];
        _this.isRequired = false;
        _this.hasOther = false;
        _this.minWidth = "";
        _this.cellType = "default";
        _this.colCountValue = -1;
        return _this;
    }
    MatrixDropdownColumn.prototype.getType = function () { return "matrixdropdowncolumn"; };
    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
        get: function () { return this.titleValue ? this.titleValue : this.name; },
        set: function (value) { this.titleValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "choices", {
        get: function () { return this.choicesValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.choicesValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < -1 || value > 4)
                return;
            this.colCountValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownColumn;
}(__WEBPACK_IMPORTED_MODULE_3__base__["b" /* Base */]));

var MatrixDropdownCell = (function () {
    function MatrixDropdownCell(column, row, data) {
        this.column = column;
        this.row = row;
        this.questionValue = data.createQuestion(this.row, this.column);
        this.questionValue.setData(row);
    }
    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
        get: function () { return this.questionValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
        get: function () { return this.question.value; },
        set: function (value) {
            this.question.value = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownCell;
}());

var MatrixDropdownRowModelBase = (function () {
    function MatrixDropdownRowModelBase(data, value) {
        this.rowValues = {};
        this.rowComments = {};
        this.isSettingValue = false;
        this.cells = [];
        this.data = data;
        this.value = value;
        this.idValue = MatrixDropdownRowModelBase.getId();
        this.buildCells();
    }
    MatrixDropdownRowModelBase.getId = function () { return "srow_" + MatrixDropdownRowModelBase.idCounter++; };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
        get: function () { return this.rowValues; },
        set: function (value) {
            this.isSettingValue = true;
            this.rowValues = {};
            if (value != null) {
                for (var key in value) {
                    this.rowValues[key] = value[key];
                }
            }
            for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
            }
            this.isSettingValue = false;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
        return this.rowValues[name];
    };
    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
        if (this.isSettingValue)
            return;
        if (newValue === "")
            newValue = null;
        if (newValue != null) {
            this.rowValues[name] = newValue;
        }
        else {
            delete this.rowValues[name];
        }
        this.data.onRowChanged(this, this.value);
    };
    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
        return this.rowComments[name];
    };
    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
        this.rowComments[name] = newValue;
    };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
        get: function () {
            var val = this.value;
            if (!val)
                return true;
            for (var key in val)
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.buildCells = function () {
        var columns = this.data.columns;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            this.cells.push(this.createCell(column));
        }
    };
    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
        return new MatrixDropdownCell(column, this, this.data);
    };
    return MatrixDropdownRowModelBase;
}());

MatrixDropdownRowModelBase.idCounter = 1;
var QuestionMatrixDropdownModelBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModelBase, _super);
    function QuestionMatrixDropdownModelBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.columnsValue = [];
        _this.choicesValue = [];
        _this.isRowChanging = false;
        _this.cellTypeValue = "dropdown";
        _this.columnColCountValue = 0;
        _this.columnMinWidth = "";
        _this.horizontalScroll = false;
        return _this;
    }
    QuestionMatrixDropdownModelBase.prototype.getType = function () {
        return "matrixdropdownbase";
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
        get: function () { return this.columnsValue; },
        set: function (value) {
            this.columnsValue = value;
            this.fireCallback(this.columnsChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
        get: function () { return this.cellTypeValue; },
        set: function (newValue) {
            if (this.cellType == newValue)
                return;
            this.cellTypeValue = newValue;
            this.fireCallback(this.updateCellsCallbak);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
        get: function () { return this.columnColCountValue; },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.columnColCountValue = value;
            this.fireCallback(this.updateCellsCallbak);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.getColumnTitle = function (column) {
        var result = column.title;
        if (column.isRequired && this.survey) {
            var requireText = this.survey.requiredText;
            if (requireText)
                requireText += " ";
            result = requireText + result;
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
        return column.minWidth ? column.minWidth : this.columnMinWidth;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
        get: function () { return this.choicesValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.choicesValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
        get: function () { return (this.optionsCaptionValue) ? this.optionsCaptionValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption"); },
        set: function (newValue) { this.optionsCaptionValue = newValue; },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
        if (title === void 0) { title = null; }
        var column = new MatrixDropdownColumn(name, title);
        this.columnsValue.push(column);
        return column;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
        get: function () {
            this.generatedVisibleRows = this.generateRows();
            return this.generatedVisibleRows;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.generateRows = function () { return null; };
    QuestionMatrixDropdownModelBase.prototype.createMatrixRow = function (name, text, value) {
        return null;
    };
    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) { return !curValue ? {} : curValue; };
    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
        if (!result && create) {
            result = {};
            questionValue[row.rowName] = result;
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.onBeforeValueChanged = function (val) {
    };
    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
        if (this.isRowChanging)
            return;
        this.onBeforeValueChanged(this.value);
        if (!(this.generatedVisibleRows) || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var row = this.generatedVisibleRows[i];
            this.generatedVisibleRows[i].value = this.getRowValue(row, val);
        }
        this.isRowChanging = false;
    };
    QuestionMatrixDropdownModelBase.prototype.supportGoNextPageAutomatic = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            if (!cells)
                continue;
            for (var colIndex = 0; colIndex < cells.length; colIndex++) {
                var question = cells[colIndex].question;
                if (question && (!question.supportGoNextPageAutomatic() || !question.value))
                    return false;
            }
        }
        return true;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var errosInColumns = this.hasErrorInColumns(fireCallback);
        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
        if (!this.generatedVisibleRows)
            return false;
        var res = false;
        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
                var cells = this.generatedVisibleRows[i].cells;
                res = cells && cells[colIndex] && cells[colIndex].question && cells[colIndex].question.hasErrors(fireCallback) || res;
            }
        }
        return res;
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstInputElementId = function () {
        var question = this.getFirstCellQuestion(false);
        return question ? question.inputId : _super.prototype.getFirstInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstErrorInputElementId = function () {
        var question = this.getFirstCellQuestion(true);
        return question ? question.inputId : _super.prototype.getFirstErrorInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstCellQuestion = function (onError) {
        if (!this.generatedVisibleRows)
            return null;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
                if (!onError)
                    return cells[colIndex].question;
                if (cells[colIndex].question.currentErrorCount > 0)
                    return cells[colIndex].question;
            }
        }
        return null;
    };
    //IMatrixDropdownData
    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
        var question = this.createQuestionCore(row, column);
        question.name = column.name;
        question.isRequired = column.isRequired;
        question.hasOther = column.hasOther;
        if (column.hasOther) {
            if (question instanceof __WEBPACK_IMPORTED_MODULE_5__question_baseselect__["b" /* QuestionSelectBase */]) {
                question.storeOthersAsComment = false;
            }
        }
        return question;
    };
    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
        var cellType = column.cellType == "default" ? this.cellType : column.cellType;
        var name = this.getQuestionName(row, column);
        if (cellType == "checkbox")
            return this.createCheckbox(name, column);
        if (cellType == "radiogroup")
            return this.createRadiogroup(name, column);
        if (cellType == "text")
            return this.createText(name, column);
        if (cellType == "comment")
            return this.createComment(name, column);
        return this.createDropdown(name, column);
    };
    QuestionMatrixDropdownModelBase.prototype.getQuestionName = function (row, column) { return row.rowName + "_" + column.name; };
    QuestionMatrixDropdownModelBase.prototype.getColumnChoices = function (column) {
        return column.choices && column.choices.length > 0 ? column.choices : this.choices;
    };
    QuestionMatrixDropdownModelBase.prototype.getColumnOptionsCaption = function (column) {
        return column.optionsCaption ? column.optionsCaption : this.optionsCaption;
    };
    QuestionMatrixDropdownModelBase.prototype.createDropdown = function (name, column) {
        var q = this.createCellQuestion("dropdown", name);
        q.choices = this.getColumnChoices(column);
        q.optionsCaption = this.getColumnOptionsCaption(column);
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createCheckbox = function (name, column) {
        var q = this.createCellQuestion("checkbox", name);
        q.choices = this.getColumnChoices(column);
        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createRadiogroup = function (name, column) {
        var q = this.createCellQuestion("radiogroup", name);
        q.choices = this.getColumnChoices(column);
        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createText = function (name, column) {
        return this.createCellQuestion("text", name);
    };
    QuestionMatrixDropdownModelBase.prototype.createComment = function (name, column) {
        return this.createCellQuestion("comment", name);
    };
    QuestionMatrixDropdownModelBase.prototype.createCellQuestion = function (questionType, name) {
        return __WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
    };
    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
        delete newValue[row.rowName];
        return Object.keys(newValue).length == 0 ? null : newValue;
    };
    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, newRowValue) {
        var newValue = this.createNewValue(this.value);
        var rowValue = this.getRowValue(row, newValue, true);
        for (var key in rowValue)
            delete rowValue[key];
        if (newRowValue) {
            newRowValue = JSON.parse(JSON.stringify(newRowValue));
            for (var key in newRowValue)
                rowValue[key] = newRowValue[key];
        }
        if (Object.keys(rowValue).length == 0) {
            newValue = this.deleteRowValue(newValue, row);
        }
        this.isRowChanging = true;
        this.setNewValue(newValue);
        this.isRowChanging = false;
    };
    return QuestionMatrixDropdownModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdowncolumn", ["name", { name: "title", onGetValue: function (obj) { return obj.titleValue; } },
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    "optionsCaption", { name: "cellType", default: "default", choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment"] },
    { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] }, "isRequired:boolean", "hasOther:boolean", "minWidth"], function () { return new MatrixDropdownColumn(""); });
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdownbase", [{ name: "columns:matrixdropdowncolumns", className: "matrixdropdowncolumn" },
    "horizontalScroll:boolean",
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "optionsCaption", onGetValue: function (obj) { return obj.optionsCaptionValue; } },
    { name: "cellType", default: "dropdown", choices: ["dropdown", "checkbox", "radiogroup", "text", "comment"] },
    { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] }, "columnMinWidth"], function () { return new QuestionMatrixDropdownModelBase(""); }, "question");


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });




var QuestionBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBase, _super);
    function QuestionBase(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.conditionRunner = null;
        _this.visibleIf = "";
        _this.visibleValue = true;
        _this.startWithNewLine = true;
        _this.visibleIndexValue = -1;
        _this.width = "";
        _this.renderWidthValue = "";
        _this.rightIndentValue = 0;
        _this.indent = 0;
        _this.idValue = QuestionBase.getQuestionId();
        _this.onCreating();
        return _this;
    }
    QuestionBase.getQuestionId = function () {
        return "sq_" + QuestionBase.questionCounter++;
    };
    Object.defineProperty(QuestionBase.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (val) {
            if (val == this.visible)
                return;
            this.visibleValue = val;
            this.fireCallback(this.visibilityChangedCallback);
            this.fireCallback(this.rowVisibilityChangedCallback);
            if (this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
        get: function () { return this.visibleIndexValue; },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        return false;
    };
    Object.defineProperty(QuestionBase.prototype, "currentErrorCount", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasInput", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasComment", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
        get: function () { return this.renderWidthValue; },
        set: function (val) {
            if (val == this.renderWidth)
                return;
            this.renderWidthValue = val;
            this.fireCallback(this.renderWidthChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
        get: function () { return this.rightIndentValue; },
        set: function (val) {
            if (val == this.rightIndent)
                return;
            this.rightIndentValue = val;
            this.fireCallback(this.renderWidthChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
    };
    QuestionBase.prototype.setData = function (newValue) {
        this.data = newValue;
        this.surveyValue = (newValue && newValue["questionAdded"]) ? newValue : null;
        this.onSetData();
    };
    Object.defineProperty(QuestionBase.prototype, "survey", {
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.fireCallback = function (callback) {
        if (callback)
            callback();
    };
    QuestionBase.prototype.onSetData = function () { };
    QuestionBase.prototype.onCreating = function () { };
    QuestionBase.prototype.runCondition = function (values) {
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    //IQuestion
    QuestionBase.prototype.onSurveyValueChanged = function (newValue) {
    };
    QuestionBase.prototype.onSurveyLoad = function () {
    };
    QuestionBase.prototype.setVisibleIndex = function (value) {
        if (this.visibleIndexValue == value)
            return;
        this.visibleIndexValue = value;
        this.fireCallback(this.visibleIndexChangedCallback);
    };
    QuestionBase.prototype.supportGoNextPageAutomatic = function () { return false; };
    return QuestionBase;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

QuestionBase.questionCounter = 100;
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("questionbase", ["!name", { name: "visible:boolean", default: true }, "visibleIf:expression",
    { name: "width" }, { name: "startWithNewLine:boolean", default: true }, { name: "indent:number", default: 0, choices: [0, 1, 2, 3] }]);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionCustomWidgets__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyModel; });










var SurveyModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyModel, _super);
    function SurveyModel(jsonObj) {
        if (jsonObj === void 0) { jsonObj = null; }
        var _this = _super.call(this) || this;
        _this.surveyId = null;
        _this.surveyPostId = null;
        _this.clientId = null;
        _this.cookieName = null;
        _this.sendResultOnPageNext = false;
        _this.commentPrefix = "-Comment";
        _this.title = "";
        _this.focusFirstQuestionAutomatic = true;
        _this.showNavigationButtons = true;
        _this.showTitle = true;
        _this.showPageTitles = true;
        _this.completedHtml = "";
        _this.requiredText = "*";
        _this.questionStartIndex = "";
        _this.questionTitleTemplate = "";
        _this.showProgressBar = "off";
        _this.storeOthersAsComment = true;
        _this.goNextPageAutomatic = false;
        _this.pages = new Array();
        _this.triggers = new Array();
        _this.clearInvisibleValues = false;
        _this.currentPageValue = null;
        _this.valuesHash = {};
        _this.variablesHash = {};
        _this.showPageNumbersValue = false;
        _this.showQuestionNumbersValue = "on";
        _this.questionTitleLocationValue = "top";
        _this.localeValue = "";
        _this.isCompleted = false;
        _this.isLoading = false;
        _this.processedTextValues = {};
        _this.isValidatingOnServerValue = false;
        _this.modeValue = "edit";
        _this.isDesignModeValue = false;
        _this.onComplete = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onPartialSend = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onCurrentPageChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onPageVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onQuestionRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onValidateQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onProcessHtml = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onSendResult = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onGetResult = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onUploadFile = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onAfterRenderSurvey = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onAfterRenderPage = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.onAfterRenderQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Event */]();
        _this.jsonErrors = null;
        var self = _this;
        _this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__["a" /* TextPreProcessor */]();
        _this.textPreProcessor.onHasValue = function (name) { return self.hasProcessedTextValue(name); };
        _this.textPreProcessor.onProcess = function (name) { return self.getProcessedTextValue(name); };
        _this.pages.push = function (value) {
            value.data = self;
            return Array.prototype.push.call(this, value);
        };
        _this.triggers.push = function (value) {
            value.setOwner(self);
            return Array.prototype.push.call(this, value);
        };
        _this.updateProcessedTextValues();
        _this.onBeforeCreating();
        if (jsonObj) {
            _this.setJsonObject(jsonObj);
            if (_this.surveyId) {
                _this.loadSurveyFromService(_this.surveyId);
            }
        }
        _this.onCreating();
        return _this;
    }
    SurveyModel.prototype.getType = function () { return "survey"; };
    Object.defineProperty(SurveyModel.prototype, "locale", {
        get: function () { return this.localeValue; },
        set: function (value) {
            this.localeValue = value;
            __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].currentLocale = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getLocString = function (str) { return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getString(str); };
    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
        get: function () { return this.getLocString("emptySurvey"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
        get: function () { return (this.pagePrevTextValue) ? this.pagePrevTextValue : this.getLocString("pagePrevText"); },
        set: function (newValue) { this.pagePrevTextValue = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
        get: function () { return (this.pageNextTextValue) ? this.pageNextTextValue : this.getLocString("pageNextText"); },
        set: function (newValue) { this.pageNextTextValue = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completeText", {
        get: function () { return (this.completeTextValue) ? this.completeTextValue : this.getLocString("completeText"); },
        set: function (newValue) { this.completeTextValue = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
        get: function () { return this.showPageNumbersValue; },
        set: function (value) {
            if (value === this.showPageNumbers)
                return;
            this.showPageNumbersValue = value;
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
        get: function () { return this.showQuestionNumbersValue; },
        set: function (value) {
            if (value === this.showQuestionNumbers)
                return;
            this.showQuestionNumbersValue = value;
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "processedTitle", {
        get: function () { return this.processText(this.title); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
        get: function () { return this.questionTitleLocationValue; },
        set: function (value) {
            if (value === this.questionTitleLocationValue)
                return;
            this.questionTitleLocationValue = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "mode", {
        get: function () { return this.modeValue; },
        set: function (value) {
            if (value == this.mode)
                return;
            if (value != "edit" && value != "display")
                return;
            this.modeValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "data", {
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                result[key] = this.valuesHash[key];
            }
            return result;
        },
        set: function (data) {
            this.valuesHash = {};
            if (data) {
                for (var key in data) {
                    this.valuesHash[key] = data[key];
                    this.checkTriggers(key, data[key], false);
                    if (!this.processedTextValues[key.toLowerCase()]) {
                        this.processedTextValues[key.toLowerCase()] = "value";
                    }
                }
            }
            this.notifyAllQuestionsOnValueChanged();
            this.runConditions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "comments", {
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                if (key.indexOf(this.commentPrefix) > 0) {
                    result[key] = this.valuesHash[key];
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
        get: function () {
            if (this.isDesignMode)
                return this.pages;
            var result = new Array();
            for (var i = 0; i < this.pages.length; i++) {
                if (this.pages[i].isVisible) {
                    result.push(this.pages[i]);
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
        get: function () { return this.pages.length == 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "PageCount", {
        get: function () {
            return this.pages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
        get: function () {
            return this.visiblePages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPage", {
        get: function () {
            var vPages = this.visiblePages;
            if (this.currentPageValue != null) {
                if (vPages.indexOf(this.currentPageValue) < 0) {
                    this.currentPage = null;
                }
            }
            if (this.currentPageValue == null && vPages.length > 0) {
                this.currentPage = vPages[0];
            }
            return this.currentPageValue;
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value != null && vPages.indexOf(value) < 0)
                return;
            if (value == this.currentPageValue)
                return;
            var oldValue = this.currentPageValue;
            this.currentPageValue = value;
            this.updateCustomWidgets(value);
            this.currentPageChanged(value, oldValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPageNo", {
        get: function () {
            return this.visiblePages.indexOf(this.currentPage);
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value < 0 || value >= this.visiblePages.length)
                return;
            this.currentPage = this.visiblePages[value];
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.focusFirstQuestion = function () {
        if (this.currentPageValue) {
            this.currentPageValue.scrollToTop();
            this.currentPageValue.focusFirstQuestion();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "state", {
        get: function () {
            if (this.isLoading)
                return "loading";
            if (this.isCompleted)
                return "completed";
            return (this.currentPage) ? "running" : "empty";
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.clear = function (clearData, gotoFirstPage) {
        if (clearData === void 0) { clearData = true; }
        if (gotoFirstPage === void 0) { gotoFirstPage = true; }
        if (clearData) {
            this.data = null;
            this.variablesHash = {};
        }
        this.isCompleted = false;
        if (gotoFirstPage && this.visiblePageCount > 0) {
            this.currentPage = this.visiblePages[0];
        }
    };
    SurveyModel.prototype.mergeValues = function (src, dest) {
        if (!dest || !src)
            return;
        for (var key in src) {
            var value = src[key];
            if (value && typeof value === 'object') {
                if (!dest[key])
                    dest[key] = {};
                this.mergeValues(value, dest[key]);
            }
            else {
                dest[key] = value;
            }
        }
    };
    SurveyModel.prototype.updateCustomWidgets = function (page) {
        if (!page)
            return;
        for (var i = 0; i < page.questions.length; i++) {
            page.questions[i].customWidget = __WEBPACK_IMPORTED_MODULE_9__questionCustomWidgets__["a" /* CustomWidgetCollection */].Instance.getCustomWidget(page.questions[i]);
        }
    };
    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
        this.onCurrentPageChanged.fire(this, { 'oldCurrentPage': oldValue, 'newCurrentPage': newValue });
    };
    SurveyModel.prototype.getProgress = function () {
        if (this.currentPage == null)
            return 0;
        var index = this.visiblePages.indexOf(this.currentPage) + 1;
        return Math.ceil((index * 100 / this.visiblePageCount));
    };
    Object.defineProperty(SurveyModel.prototype, "isNavigationButtonsShowing", {
        get: function () {
            if (this.isDesignMode)
                return false;
            var page = this.currentPage;
            if (!page)
                return false;
            return page.navigationButtonsVisibility == "show" ||
                (page.navigationButtonsVisibility != "hide" && this.showNavigationButtons);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEditMode", {
        get: function () { return this.mode == "edit"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDisplayMode", {
        get: function () { return this.mode == "display"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
        get: function () { return this.isDesignModeValue; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setDesignMode = function (value) {
        this.isDesignModeValue = value;
    };
    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
        get: function () {
            if (!this.cookieName)
                return false;
            var cookies = document.cookie;
            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
    };
    SurveyModel.prototype.deleteCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=;";
    };
    SurveyModel.prototype.nextPage = function () {
        if (this.isLastPage)
            return false;
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doNextPage();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.currentPage.hasErrors(true, true);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.prevPage = function () {
        if (this.isFirstPage)
            return false;
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index - 1];
    };
    SurveyModel.prototype.completeLastPage = function () {
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doComplete();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.visiblePages.indexOf(this.currentPage) == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
        get: function () {
            if (this.currentPage == null)
                return true;
            var vPages = this.visiblePages;
            return vPages.indexOf(this.currentPage) == vPages.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.doComplete = function () {
        if (this.clearInvisibleValues) {
            this.clearInvisibleQuestionValues();
        }
        this.setCookie();
        this.setCompleted();
        this.onComplete.fire(this, null);
        if (this.surveyPostId) {
            this.sendResult();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "isValidatingOnServer", {
        get: function () { return this.isValidatingOnServerValue; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setIsValidatingOnServer = function (val) {
        if (val == this.isValidatingOnServer)
            return;
        this.isValidatingOnServerValue = val;
        this.onIsValidatingOnServerChanged();
    };
    SurveyModel.prototype.onIsValidatingOnServerChanged = function () { };
    SurveyModel.prototype.doServerValidation = function () {
        if (!this.onServerValidateQuestions)
            return false;
        var self = this;
        var options = { data: {}, errors: {}, survey: this, complete: function () { self.completeServerValidation(options); } };
        for (var i = 0; i < this.currentPage.questions.length; i++) {
            var question = this.currentPage.questions[i];
            if (!question.visible)
                continue;
            var value = this.getValue(question.name);
            if (value)
                options.data[question.name] = value;
        }
        this.setIsValidatingOnServer(true);
        this.onServerValidateQuestions(this, options);
        return true;
    };
    SurveyModel.prototype.completeServerValidation = function (options) {
        this.setIsValidatingOnServer(false);
        if (!options && !options.survey)
            return;
        var self = options.survey;
        var hasErrors = false;
        if (options.errors) {
            for (var name in options.errors) {
                var question = self.getQuestionByName(name);
                if (question && question["errors"]) {
                    hasErrors = true;
                    question["addError"](new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.errors[name]));
                }
            }
        }
        if (!hasErrors) {
            if (self.isLastPage)
                self.doComplete();
            else
                self.doNextPage();
        }
    };
    SurveyModel.prototype.doNextPage = function () {
        this.checkOnPageTriggers();
        if (this.sendResultOnPageNext) {
            this.sendResult(this.surveyPostId, this.clientId, true);
        }
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index + 1];
    };
    SurveyModel.prototype.setCompleted = function () {
        this.isCompleted = true;
    };
    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
        get: function () {
            if (this.completedHtml) {
                return this.processHtml(this.completedHtml);
            }
            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
        get: function () {
            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "progressText", {
        get: function () {
            if (this.currentPage == null)
                return "";
            var vPages = this.visiblePages;
            var index = vPages.indexOf(this.currentPage) + 1;
            return this.getLocString("progressText")["format"](index, vPages.length);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.afterRenderSurvey = function (htmlElement) {
        this.onAfterRenderSurvey.fire(this, { survey: this, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderPage = function (htmlElement) {
        if (this.onAfterRenderPage.isEmpty)
            return;
        this.onAfterRenderPage.fire(this, { page: this.currentPage, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderQuestion = function (question, htmlElement) {
        this.onAfterRenderQuestion.fire(this, { question: question, htmlElement: htmlElement });
    };
    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
        var accept = true;
        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
        if (!accept)
            return false;
        if (!storeDataAsText && this.surveyPostId) {
            this.uploadFileCore(name, file, uploadingCallback);
        }
        return true;
    };
    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
        var self = this;
        if (uploadingCallback)
            uploadingCallback("uploading");
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().sendFile(this.surveyPostId, file, function (success, response) {
            if (uploadingCallback)
                uploadingCallback(success ? "success" : "error");
            if (success) {
                self.setValue(name, response);
            }
        });
    };
    SurveyModel.prototype.getPage = function (index) {
        return this.pages[index];
    };
    SurveyModel.prototype.addPage = function (page) {
        if (page == null)
            return;
        this.pages.push(page);
        this.updateVisibleIndexes();
    };
    SurveyModel.prototype.addNewPage = function (name) {
        var page = this.createNewPage(name);
        this.addPage(page);
        return page;
    };
    SurveyModel.prototype.removePage = function (page) {
        var index = this.pages.indexOf(page);
        if (index < 0)
            return;
        this.pages.splice(index, 1);
        if (this.currentPageValue == page) {
            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
        }
        this.updateVisibleIndexes();
    };
    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var questions = this.getAllQuestions();
        if (caseInsensitive)
            name = name.toLowerCase();
        for (var i = 0; i < questions.length; i++) {
            var questionName = questions[i].name;
            if (caseInsensitive)
                questionName = questionName.toLowerCase();
            if (questionName == name)
                return questions[i];
        }
        return null;
    };
    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var question = this.getQuestionByName(names[i], caseInsensitive);
            if (question)
                result.push(question);
        }
        return result;
    };
    SurveyModel.prototype.getPageByQuestion = function (question) {
        for (var i = 0; i < this.pages.length; i++) {
            var page = this.pages[i];
            if (page.questions.indexOf(question) > -1)
                return page;
        }
        return null;
    };
    SurveyModel.prototype.getPageByName = function (name) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].name == name)
                return this.pages[i];
        }
        return null;
    };
    SurveyModel.prototype.getPagesByNames = function (names) {
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var page = this.getPageByName(names[i]);
            if (page)
                result.push(page);
        }
        return result;
    };
    SurveyModel.prototype.getAllQuestions = function (visibleOnly) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        var result = new Array();
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].addQuestionsToList(result, visibleOnly);
        }
        return result;
    };
    SurveyModel.prototype.createNewPage = function (name) { return new __WEBPACK_IMPORTED_MODULE_3__page__["a" /* PageModel */](name); };
    SurveyModel.prototype.notifyQuestionOnValueChanged = function (name, newValue) {
        var questions = this.getAllQuestions();
        var question = null;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].name != name)
                continue;
            question = questions[i];
            this.doSurveyValueChanged(question, newValue);
        }
        this.onValueChanged.fire(this, { 'name': name, 'question': question, 'value': newValue });
    };
    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].name));
        }
    };
    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
        question.onSurveyValueChanged(newValue);
    };
    SurveyModel.prototype.checkOnPageTriggers = function () {
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var value = this.getValue(question.name);
            this.checkTriggers(question.name, value, true);
        }
    };
    SurveyModel.prototype.getCurrentPageQuestions = function () {
        var result = [];
        var page = this.currentPage;
        if (!page)
            return result;
        for (var i = 0; i < page.questions.length; i++) {
            var question = page.questions[i];
            if (!question.visible || !question.name)
                continue;
            result.push(question);
        }
        return result;
    };
    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
        for (var i = 0; i < this.triggers.length; i++) {
            var trigger = this.triggers[i];
            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
                trigger.check(newValue);
            }
        }
    };
    SurveyModel.prototype.doQuestionsOnLoad = function () {
        var questions = this.getAllQuestions(false);
        for (var i = 0; i < questions.length; i++) {
            questions[i].onSurveyLoad();
        }
    };
    SurveyModel.prototype.runConditions = function () {
        this.runConditionsForList(this.getAllQuestions(false));
        this.runConditionsForList(this.pages);
    };
    SurveyModel.prototype.runConditionsForList = function (list) {
        for (var i = 0; i < list.length; i++) {
            list[i].runCondition(this.valuesHash);
        }
    };
    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
        if (postId === void 0) { postId = null; }
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        if (!this.isEditMode)
            return;
        if (isPartialCompleted && this.onPartialSend) {
            this.onPartialSend.fire(this, null);
        }
        if (!postId && this.surveyPostId) {
            postId = this.surveyPostId;
        }
        if (!postId)
            return;
        if (clientId) {
            this.clientId = clientId;
        }
        if (isPartialCompleted && !this.clientId)
            return;
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().sendResult(postId, this.data, function (success, response) {
            self.onSendResult.fire(self, { success: success, response: response });
        }, this.clientId, isPartialCompleted);
    };
    SurveyModel.prototype.getResult = function (resultId, name) {
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().getResult(resultId, name, function (success, data, dataList, response) {
            self.onGetResult.fire(self, { success: success, data: data, dataList: dataList, response: response });
        });
    };
    SurveyModel.prototype.loadSurveyFromService = function (surveyId) {
        if (surveyId === void 0) { surveyId = null; }
        if (surveyId) {
            this.surveyId = surveyId;
        }
        var self = this;
        this.isLoading = true;
        this.onLoadingSurveyFromService();
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().loadSurvey(this.surveyId, function (success, result, response) {
            self.isLoading = false;
            if (success && result) {
                self.setJsonObject(result);
                self.notifyAllQuestionsOnValueChanged();
                self.onLoadSurveyFromService();
            }
        });
    };
    SurveyModel.prototype.onLoadingSurveyFromService = function () {
    };
    SurveyModel.prototype.onLoadSurveyFromService = function () {
    };
    SurveyModel.prototype.checkPageVisibility = function (question, oldQuestionVisible) {
        var page = this.getPageByQuestion(question);
        if (!page)
            return;
        var newValue = page.isVisible;
        if (newValue != page.getIsPageVisible(question) || oldQuestionVisible) {
            this.pageVisibilityChanged(page, newValue);
        }
    };
    SurveyModel.prototype.updateVisibleIndexes = function () {
        this.updatePageVisibleIndexes(this.showPageNumbers);
        if (this.showQuestionNumbers == "onPage") {
            var visPages = this.visiblePages;
            for (var i = 0; i < visPages.length; i++) {
                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
            }
        }
        else {
            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
        }
    };
    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
        var index = 0;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].visibleIndex = this.pages[i].visible ? (index++) : -1;
            this.pages[i].num = showIndex && this.pages[i].visible ? this.pages[i].visibleIndex + 1 : -1;
        }
    };
    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
        var index = 0;
        for (var i = 0; i < questions.length; i++) {
            questions[i].setVisibleIndex(showIndex && questions[i].visible && questions[i].hasTitle ? (index++) : -1);
        }
    };
    SurveyModel.prototype.setJsonObject = function (jsonObj) {
        if (!jsonObj)
            return;
        this.jsonErrors = null;
        var jsonConverter = new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */]();
        jsonConverter.toObject(jsonObj, this);
        if (jsonConverter.errors.length > 0) {
            this.jsonErrors = jsonConverter.errors;
        }
        this.updateProcessedTextValues();
        if (this.hasCookie) {
            this.doComplete();
        }
        this.doQuestionsOnLoad();
        this.runConditions();
        this.updateVisibleIndexes();
    };
    SurveyModel.prototype.onBeforeCreating = function () { };
    SurveyModel.prototype.onCreating = function () { };
    SurveyModel.prototype.updateProcessedTextValues = function () {
        this.processedTextValues = {};
        var self = this;
        this.processedTextValues["pageno"] = function (name) { return self.currentPage != null ? self.visiblePages.indexOf(self.currentPage) + 1 : 0; };
        this.processedTextValues["pagecount"] = function (name) { return self.visiblePageCount; };
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.addQuestionToProcessedTextValues(questions[i]);
        }
    };
    SurveyModel.prototype.addQuestionToProcessedTextValues = function (question) {
        this.processedTextValues[question.name.toLowerCase()] = "question";
    };
    SurveyModel.prototype.hasProcessedTextValue = function (name) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        return this.processedTextValues[firstName.toLowerCase()];
    };
    SurveyModel.prototype.getProcessedTextValue = function (name) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        var val = this.processedTextValues[firstName.toLowerCase()];
        if (!val)
            return null;
        if (val == "variable") {
            return this.getVariable(name.toLowerCase());
        }
        if (val == "question") {
            var question = this.getQuestionByName(firstName, true);
            if (!question)
                return null;
            name = question.name + name.substr(firstName.length);
            return new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, this.valuesHash);
        }
        if (val == "value") {
            return new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, this.valuesHash);
        }
        return val(name);
    };
    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].visible)
                continue;
            this.setValue(questions[i].name, null);
        }
    };
    SurveyModel.prototype.getVariable = function (name) {
        if (!name)
            return null;
        return this.variablesHash[name];
    };
    SurveyModel.prototype.setVariable = function (name, newValue) {
        if (!name)
            return;
        this.variablesHash[name] = newValue;
        this.processedTextValues[name.toLowerCase()] = "variable";
    };
    //ISurvey data
    SurveyModel.prototype.getUnbindValue = function (value) {
        if (value && value instanceof Object) {
            //do not return the same object instance!!!
            return JSON.parse(JSON.stringify(value));
        }
        return value;
    };
    SurveyModel.prototype.getValue = function (name) {
        if (!name || name.length == 0)
            return null;
        var value = this.valuesHash[name];
        return this.getUnbindValue(value);
    };
    SurveyModel.prototype.setValue = function (name, newValue) {
        if (this.isValueEqual(name, newValue))
            return;
        if (newValue == "" || newValue == null) {
            delete this.valuesHash[name];
        }
        else {
            newValue = this.getUnbindValue(newValue);
            this.valuesHash[name] = newValue;
            this.processedTextValues[name.toLowerCase()] = "value";
        }
        this.notifyQuestionOnValueChanged(name, newValue);
        this.checkTriggers(name, newValue, false);
        this.runConditions();
        this.tryGoNextPageAutomatic(name);
    };
    SurveyModel.prototype.isValueEqual = function (name, newValue) {
        if (newValue == "")
            newValue = null;
        var oldValue = this.getValue(name);
        if (newValue === null || oldValue === null)
            return newValue === oldValue;
        return this.isTwoValueEquals(newValue, oldValue);
    };
    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
        if (!this.goNextPageAutomatic || !this.currentPage)
            return;
        var question = this.getQuestionByName(name);
        if (question && !question.supportGoNextPageAutomatic())
            return;
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].hasInput && !this.getValue(questions[i].name))
                return;
        }
        if (!this.currentPage.hasErrors(true, false)) {
            if (!this.isLastPage) {
                this.nextPage();
            }
            else {
                this.doComplete();
            }
        }
    };
    SurveyModel.prototype.getComment = function (name) {
        var result = this.data[name + this.commentPrefix];
        if (result == null)
            result = "";
        return result;
    };
    SurveyModel.prototype.setComment = function (name, newValue) {
        name = name + this.commentPrefix;
        if (newValue == "" || newValue == null) {
            delete this.valuesHash[name];
        }
        else {
            this.valuesHash[name] = newValue;
            this.tryGoNextPageAutomatic(name);
        }
    };
    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
        this.updateVisibleIndexes();
        this.onVisibleChanged.fire(this, { 'question': question, 'name': question.name, 'visible': newValue });
        this.checkPageVisibility(question, !newValue);
    };
    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
        this.updateVisibleIndexes();
        this.onPageVisibleChanged.fire(this, { 'page': page, 'visible': newValue });
    };
    SurveyModel.prototype.questionAdded = function (question, index) {
        this.updateVisibleIndexes();
        this.addQuestionToProcessedTextValues(question);
        this.onQuestionAdded.fire(this, { 'question': question, 'name': question.name, 'index': index });
    };
    SurveyModel.prototype.questionRemoved = function (question) {
        this.updateVisibleIndexes();
        this.onQuestionRemoved.fire(this, { 'question': question, 'name': question.name });
    };
    SurveyModel.prototype.validateQuestion = function (name) {
        if (this.onValidateQuestion.isEmpty)
            return null;
        var options = { name: name, value: this.getValue(name), error: null };
        this.onValidateQuestion.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.error) : null;
    };
    SurveyModel.prototype.processHtml = function (html) {
        var options = { html: html };
        this.onProcessHtml.fire(this, options);
        return this.processText(options.html);
    };
    SurveyModel.prototype.processText = function (text) {
        return this.textPreProcessor.process(text);
    };
    //ISurveyTriggerOwner
    SurveyModel.prototype.getObjects = function (pages, questions) {
        var result = [];
        Array.prototype.push.apply(result, this.getPagesByNames(pages));
        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
        return result;
    };
    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
        if (!name)
            return;
        if (isVariable) {
            this.setVariable(name, value);
        }
        else {
            this.setValue(name, value);
        }
    };
    return SurveyModel;
}(__WEBPACK_IMPORTED_MODULE_2__base__["b" /* Base */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("survey", [{ name: "locale", choices: function () { return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getLocales(); } },
    "title", { name: "focusFirstQuestionAutomatic:boolean", default: true }, "completedHtml:html", { name: "pages", className: "page" },
    { name: "questions", baseClassName: "question", onGetValue: function (obj) { return null; }, onSetValue: function (obj, value, jsonConverter) { var page = obj.addNewPage(""); jsonConverter.toObject({ questions: value }, page); } },
    { name: "triggers:triggers", baseClassName: "surveytrigger", classNamePart: "trigger" },
    "surveyId", "surveyPostId", "cookieName", "sendResultOnPageNext:boolean",
    { name: "showNavigationButtons:boolean", default: true }, { name: "showTitle:boolean", default: true }, { name: "showPageTitles:boolean", default: true },
    "showPageNumbers:boolean", { name: "showQuestionNumbers", default: "on", choices: ["on", "onPage", "off"] },
    { name: "questionTitleLocation", default: "top", choices: ["top", "bottom"] },
    { name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] },
    { name: "mode", default: "edit", choices: ["edit", "display"] },
    { name: "storeOthersAsComment:boolean", default: true }, "goNextPageAutomatic:boolean", "clearInvisibleValues:boolean",
    { name: "pagePrevText", onGetValue: function (obj) { return obj.pagePrevTextValue; } },
    { name: "pageNextText", onGetValue: function (obj) { return obj.pageNextTextValue; } },
    { name: "completeText", onGetValue: function (obj) { return obj.completeTextValue; } },
    { name: "requiredText", default: "*" }, "questionStartIndex", "questionTitleTemplate"]);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextPreProcessorItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPreProcessor; });
var TextPreProcessorItem = (function () {
    function TextPreProcessorItem() {
    }
    return TextPreProcessorItem;
}());

var TextPreProcessor = (function () {
    function TextPreProcessor() {
    }
    TextPreProcessor.prototype.process = function (text) {
        if (!text)
            return text;
        if (!this.onProcess)
            return text;
        var items = this.getItems(text);
        for (var i = items.length - 1; i >= 0; i--) {
            var item = items[i];
            var name = this.getName(text.substring(item.start + 1, item.end));
            if (!this.canProcessName(name))
                continue;
            if (this.onHasValue && !this.onHasValue(name))
                continue;
            var value = this.onProcess(name);
            if (value == null)
                value = "";
            text = text.substr(0, item.start) + value + text.substr(item.end + 1);
        }
        return text;
    };
    TextPreProcessor.prototype.getItems = function (text) {
        var items = [];
        var length = text.length;
        var start = -1;
        var ch = '';
        for (var i = 0; i < length; i++) {
            ch = text[i];
            if (ch == '{')
                start = i;
            if (ch == '}') {
                if (start > -1) {
                    var item = new TextPreProcessorItem();
                    item.start = start;
                    item.end = i;
                    items.push(item);
                }
                start = -1;
            }
        }
        return items;
    };
    TextPreProcessor.prototype.getName = function (name) {
        if (!name)
            return;
        return name.trim();
    };
    TextPreProcessor.prototype.canProcessName = function (name) {
        if (!name)
            return false;
        for (var i = 0; i < name.length; i++) {
            var ch = name[i];
            //TODO
            if (ch == ' ' || ch == '-' || ch == '&')
                return false;
        }
        return true;
    };
    return TextPreProcessor;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ValidatorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SurveyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ValidatorRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NumericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TextValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerCountValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RegexValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EmailValidator; });





var ValidatorResult = (function () {
    function ValidatorResult(value, error) {
        if (error === void 0) { error = null; }
        this.value = value;
        this.error = error;
    }
    return ValidatorResult;
}());

var SurveyValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyValidator, _super);
    function SurveyValidator() {
        var _this = _super.call(this) || this;
        _this.text = "";
        return _this;
    }
    SurveyValidator.prototype.getErrorText = function (name) {
        if (this.text)
            return this.text;
        return this.getDefaultErrorText(name);
    };
    SurveyValidator.prototype.getDefaultErrorText = function (name) {
        return "";
    };
    SurveyValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        return null;
    };
    return SurveyValidator;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

var ValidatorRunner = (function () {
    function ValidatorRunner() {
    }
    ValidatorRunner.prototype.run = function (owner) {
        for (var i = 0; i < owner.validators.length; i++) {
            var validatorResult = owner.validators[i].validate(owner.value, owner.getValidatorTitle());
            if (validatorResult != null) {
                if (validatorResult.error)
                    return validatorResult.error;
                if (validatorResult.value) {
                    owner.value = validatorResult.value;
                }
            }
        }
        return null;
    };
    return ValidatorRunner;
}());

var NumericValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NumericValidator, _super);
    function NumericValidator(minValue, maxValue) {
        if (minValue === void 0) { minValue = null; }
        if (maxValue === void 0) { maxValue = null; }
        var _this = _super.call(this) || this;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    NumericValidator.prototype.getType = function () { return "numericvalidator"; };
    NumericValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!value || !this.isNumber(value)) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* RequreNumericError */]());
        }
        var result = new ValidatorResult(parseFloat(value));
        if (this.minValue && this.minValue > result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name));
            return result;
        }
        if (this.maxValue && this.maxValue < result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name));
            return result;
        }
        return (typeof value === 'number') ? null : result;
    };
    NumericValidator.prototype.getDefaultErrorText = function (name) {
        var vName = name ? name : "value";
        if (this.minValue && this.maxValue) {
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
        }
        else {
            if (this.minValue) {
                return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMin")["format"](vName, this.minValue);
            }
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMax")["format"](vName, this.maxValue);
        }
    };
    NumericValidator.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return NumericValidator;
}(SurveyValidator));

var TextValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](TextValidator, _super);
    function TextValidator(minLength, maxLength) {
        if (minLength === void 0) { minLength = 0; }
        if (maxLength === void 0) { maxLength = 0; }
        var _this = _super.call(this) || this;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        return _this;
    }
    TextValidator.prototype.getType = function () { return "textvalidator"; };
    TextValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (this.minLength > 0 && value.length < this.minLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
        }
        if (this.maxLength > 0 && value.length > this.maxLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
        }
        return null;
    };
    TextValidator.prototype.getDefaultErrorText = function (name) {
        if (this.minLength > 0 && this.maxLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMinMaxLength")["format"](this.minLength, this.maxLength);
        if (this.minLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMinLength")["format"](this.minLength);
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMaxLength")["format"](this.maxLength);
    };
    return TextValidator;
}(SurveyValidator));

var AnswerCountValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerCountValidator, _super);
    function AnswerCountValidator(minCount, maxCount) {
        if (minCount === void 0) { minCount = null; }
        if (maxCount === void 0) { maxCount = null; }
        var _this = _super.call(this) || this;
        _this.minCount = minCount;
        _this.maxCount = maxCount;
        return _this;
    }
    AnswerCountValidator.prototype.getType = function () { return "answercountvalidator"; };
    AnswerCountValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (value == null || value.constructor != Array)
            return null;
        var count = value.length;
        if (this.minCount && count < this.minCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("minSelectError")["format"](this.minCount))));
        }
        if (this.maxCount && count > this.maxCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("maxSelectError")["format"](this.maxCount))));
        }
        return null;
    };
    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
        return name;
    };
    return AnswerCountValidator;
}(SurveyValidator));

var RegexValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RegexValidator, _super);
    function RegexValidator(regex) {
        if (regex === void 0) { regex = null; }
        var _this = _super.call(this) || this;
        _this.regex = regex;
        return _this;
    }
    RegexValidator.prototype.getType = function () { return "regexvalidator"; };
    RegexValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!this.regex || !value)
            return null;
        var re = new RegExp(this.regex);
        if (re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
    };
    return RegexValidator;
}(SurveyValidator));

var EmailValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](EmailValidator, _super);
    function EmailValidator() {
        var _this = _super.call(this) || this;
        _this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return _this;
    }
    EmailValidator.prototype.getType = function () { return "emailvalidator"; };
    EmailValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!value)
            return null;
        if (this.re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
    };
    EmailValidator.prototype.getDefaultErrorText = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("invalidEmail");
    };
    return EmailValidator;
}(SurveyValidator));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("surveyvalidator", ["text"]);
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () { return new NumericValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("textvalidator", ["minLength:number", "maxLength:number"], function () { return new TextValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () { return new AnswerCountValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("regexvalidator", ["regex"], function () { return new RegexValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("emailvalidator", [], function () { return new EmailValidator(); }, "surveyvalidator");


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicesRestfull; });





var ChoicesRestfull = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ChoicesRestfull, _super);
    function ChoicesRestfull() {
        var _this = _super.call(this) || this;
        _this.url = "";
        _this.path = "";
        _this.valueName = "";
        _this.titleName = "";
        _this.error = null;
        return _this;
    }
    ChoicesRestfull.prototype.run = function () {
        if (!this.url || !this.getResultCallback)
            return;
        this.error = null;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            if (xhr.status == 200) {
                self.onLoad(JSON.parse(xhr.response));
            }
            else {
                self.onError(xhr.statusText, xhr.responseText);
            }
        };
        xhr.send();
    };
    ChoicesRestfull.prototype.getType = function () { return "choicesByUrl"; };
    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
        get: function () {
            return !this.url && !this.path && !this.valueName && !this.titleName;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.prototype.setData = function (json) {
        this.clear();
        if (json.url)
            this.url = json.url;
        if (json.path)
            this.path = json.path;
        if (json.valueName)
            this.valueName = json.valueName;
        if (json.titleName)
            this.titleName = json.titleName;
    };
    ChoicesRestfull.prototype.clear = function () {
        this.url = "";
        this.path = "";
        this.valueName = "";
        this.titleName = "";
    };
    ChoicesRestfull.prototype.onLoad = function (result) {
        var items = [];
        result = this.getResultAfterPath(result);
        if (result && result["length"]) {
            for (var i = 0; i < result.length; i++) {
                var itemValue = result[i];
                if (!itemValue)
                    continue;
                var value = this.getValue(itemValue);
                var title = this.getTitle(itemValue);
                items.push(new __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */](value, title));
            }
        }
        else {
            this.error = new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("urlGetChoicesError"));
        }
        this.getResultCallback(items);
    };
    ChoicesRestfull.prototype.onError = function (status, response) {
        this.error = new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("urlRequestError")["format"](status, response));
        this.getResultCallback([]);
    };
    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
        if (!result)
            return result;
        if (!this.path)
            return result;
        var pathes = this.getPathes();
        for (var i = 0; i < pathes.length; i++) {
            result = result[pathes[i]];
            if (!result)
                return null;
        }
        return result;
    };
    ChoicesRestfull.prototype.getPathes = function () {
        var pathes = [];
        if (this.path.indexOf(';') > -1) {
            pathes = this.path.split(';');
        }
        else {
            pathes = this.path.split(',');
        }
        if (pathes.length == 0)
            pathes.push(this.path);
        return pathes;
    };
    ChoicesRestfull.prototype.getValue = function (item) {
        if (this.valueName)
            return item[this.valueName];
        var len = Object.keys(item).length;
        if (len < 1)
            return null;
        return item[Object.keys(item)[0]];
    };
    ChoicesRestfull.prototype.getTitle = function (item) {
        if (!this.titleName)
            return null;
        return item[this.titleName];
    };
    return ChoicesRestfull;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () { return new ChoicesRestfull(); });


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditions__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionsParser; });

var ConditionsParser = (function () {
    function ConditionsParser() {
    }
    ConditionsParser.prototype.parse = function (text, root) {
        this.text = text;
        this.root = root;
        this.root.clear();
        this.at = 0;
        this.length = this.text.length;
        var res = this.parseText();
        return res;
    };
    ConditionsParser.prototype.toString = function (root) {
        this.root = root;
        return this.nodeToString(root);
    };
    ConditionsParser.prototype.toStringCore = function (value) {
        if (!value)
            return "";
        if (value["children"])
            return this.nodeToString(value);
        if (value["left"])
            return this.conditionToString(value);
        return "";
    };
    ConditionsParser.prototype.nodeToString = function (node) {
        if (node.isEmpty)
            return "";
        var res = "";
        for (var i = 0; i < node.children.length; i++) {
            var nodeText = this.toStringCore(node.children[i]);
            if (nodeText) {
                if (res)
                    res += ' ' + node.connective + ' ';
                res += nodeText;
            }
        }
        if (node != this.root && node.children.length > 1) {
            res = '(' + res + ')';
        }
        return res;
    };
    ConditionsParser.prototype.conditionToString = function (condition) {
        if (!condition.right || !condition.operator)
            return "";
        var left = condition.left;
        if (left && !this.isNumeric(left))
            left = "'" + left + "'";
        var res = left + ' ' + this.operationToString(condition.operator);
        if (this.isNoRightOperation(condition.operator))
            return res;
        var right = condition.right;
        if (right && !this.isNumeric(right))
            right = "'" + right + "'";
        return res + ' ' + right;
    };
    ConditionsParser.prototype.operationToString = function (op) {
        if (op == "equal")
            return "=";
        if (op == "notequal")
            return "!=";
        if (op == "greater")
            return ">";
        if (op == "less")
            return "<";
        if (op == "greaterorequal")
            return ">=";
        if (op == "lessorequal")
            return "<=";
        return op;
    };
    ConditionsParser.prototype.isNumeric = function (value) {
        var val = parseFloat(value);
        if (isNaN(val))
            return false;
        return isFinite(val);
    };
    ConditionsParser.prototype.parseText = function () {
        this.node = this.root;
        this.expressionNodes = [];
        this.expressionNodes.push(this.node);
        var res = this.readConditions();
        return res && this.at >= this.length;
    };
    ConditionsParser.prototype.readConditions = function () {
        var res = this.readCondition();
        if (!res)
            return res;
        var connective = this.readConnective();
        if (connective) {
            this.addConnective(connective);
            return this.readConditions();
        }
        return true;
    };
    ConditionsParser.prototype.readCondition = function () {
        if (!this.readExpression())
            return false;
        var left = this.readString();
        if (!left)
            return false;
        var op = this.readOperator();
        if (!op)
            return false;
        var c = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* Condition */]();
        c.left = left;
        c.operator = op;
        if (!this.isNoRightOperation(op)) {
            var right = this.readString();
            if (!right)
                return false;
            c.right = right;
        }
        this.addCondition(c);
        return true;
    };
    ConditionsParser.prototype.readExpression = function () {
        this.skip();
        if (this.at >= this.length || this.ch != '(')
            return true;
        this.at++;
        this.pushExpression();
        var res = this.readConditions();
        if (res) {
            this.skip();
            res = this.ch == ')';
            this.at++;
            this.popExpression();
        }
        return res;
    };
    Object.defineProperty(ConditionsParser.prototype, "ch", {
        get: function () { return this.text.charAt(this.at); },
        enumerable: true,
        configurable: true
    });
    ConditionsParser.prototype.skip = function () {
        while (this.at < this.length && this.isSpace(this.ch))
            this.at++;
    };
    ConditionsParser.prototype.isSpace = function (c) {
        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
    };
    ConditionsParser.prototype.isQuotes = function (c) {
        return c == "'" || c == '"';
    };
    ConditionsParser.prototype.isOperatorChar = function (c) {
        return c == '>' || c == '<' || c == '=' || c == '!';
    };
    ConditionsParser.prototype.isBrackets = function (c) {
        return c == '(' || c == ')';
    };
    ConditionsParser.prototype.readString = function () {
        this.skip();
        if (this.at >= this.length)
            return null;
        var start = this.at;
        var hasQuotes = this.isQuotes(this.ch);
        if (hasQuotes)
            this.at++;
        var isFirstOpCh = this.isOperatorChar(this.ch);
        while (this.at < this.length) {
            if (!hasQuotes && this.isSpace(this.ch))
                break;
            if (this.isQuotes(this.ch)) {
                if (hasQuotes)
                    this.at++;
                break;
            }
            if (!hasQuotes) {
                if (isFirstOpCh != this.isOperatorChar(this.ch))
                    break;
                if (this.isBrackets(this.ch))
                    break;
            }
            this.at++;
        }
        if (this.at <= start)
            return null;
        var res = this.text.substr(start, this.at - start);
        if (res) {
            if (res.length > 1 && this.isQuotes(res[0])) {
                var len = res.length - 1;
                if (this.isQuotes(res[res.length - 1]))
                    len--;
                res = res.substr(1, len);
            }
        }
        return res;
    };
    ConditionsParser.prototype.isNoRightOperation = function (op) {
        return op == "empty" || op == "notempty";
    };
    ConditionsParser.prototype.readOperator = function () {
        var op = this.readString();
        if (!op)
            return null;
        op = op.toLowerCase();
        if (op == '>')
            op = "greater";
        if (op == '<')
            op = "less";
        if (op == '>=' || op == '=>')
            op = "greaterorequal";
        if (op == '<=' || op == '=<')
            op = "lessorequal";
        if (op == '=' || op == '==')
            op = "equal";
        if (op == '<>' || op == '!=')
            op = "notequal";
        if (op == 'contain')
            op = "contains";
        if (op == 'notcontain')
            op = "notcontains";
        return op;
    };
    ConditionsParser.prototype.readConnective = function () {
        var con = this.readString();
        if (!con)
            return null;
        con = con.toLowerCase();
        if (con == "&" || con == "&&")
            con = "and";
        if (con == "|" || con == "||")
            con = "or";
        if (con != "and" && con != "or")
            con = null;
        return con;
    };
    ConditionsParser.prototype.pushExpression = function () {
        var node = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* ConditionNode */]();
        this.expressionNodes.push(node);
        this.node = node;
    };
    ConditionsParser.prototype.popExpression = function () {
        var node = this.expressionNodes.pop();
        this.node = this.expressionNodes[this.expressionNodes.length - 1];
        this.node.children.push(node);
    };
    ConditionsParser.prototype.addCondition = function (c) {
        this.node.children.push(c);
    };
    ConditionsParser.prototype.addConnective = function (con) {
        if (this.node.children.length < 2) {
            this.node.connective = con;
        }
        else {
            if (this.node.connective != con) {
                var oldCon = this.node.connective;
                var oldChildren = this.node.children;
                this.node.clear();
                this.node.connective = con;
                var oldNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* ConditionNode */]();
                oldNode.connective = oldCon;
                oldNode.children = oldChildren;
                this.node.children.push(oldNode);
                var newNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* ConditionNode */]();
                this.node.children.push(newNode);
                this.node = newNode;
            }
        }
    };
    return ConditionsParser;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dxSurveyService; });
var dxSurveyService = (function () {
    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
    function dxSurveyService() {
    }
    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurvey?surveyId=' + surveyId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', dxSurveyService.serviceUrl + '/post/');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        var data = { postId: postId, surveyResult: JSON.stringify(result) };
        if (clientId)
            data['clientId'] = clientId;
        if (isPartialCompleted)
            data['isPartialCompleted'] = true;
        var dataStringify = JSON.stringify(data);
        var self = this;
        xhr.onload = xhr.onerror = function () {
            if (!onSendResult)
                return;
            onSendResult(xhr.status == 200, xhr.response);
        };
        xhr.send(dataStringify);
    };
    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
        var xhr = new XMLHttpRequest();
        xhr.onload = xhr.onerror = function () {
            if (!onSendFile)
                return;
            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
        };
        xhr.open("POST", dxSurveyService.serviceUrl + '/upload/', true);
        var formData = new FormData();
        formData.append("file", file);
        formData.append("postId", postId);
        xhr.send(formData);
    };
    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
        var xhr = new XMLHttpRequest();
        var data = 'resultId=' + resultId + '&name=' + name;
        xhr.open('GET', dxSurveyService.serviceUrl + '/getResult?' + data);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            var result = null;
            var list = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                list = [];
                for (var key in result.QuestionResult) {
                    var el = { name: key, value: result.QuestionResult[key] };
                    list.push(el);
                }
            }
            onGetResult(xhr.status == 200, result, list, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
        var xhr = new XMLHttpRequest();
        var data = 'resultId=' + resultId + '&clientId=' + clientId;
        xhr.open('GET', dxSurveyService.serviceUrl + '/isCompleted?' + data);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            var result = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
            }
            onIsCompleted(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    return dxSurveyService;
}());

dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModel; });





var QuestionRowModel = (function () {
    function QuestionRowModel(page, question) {
        this.page = page;
        this.question = question;
        this.visibleValue = false;
        this.questions = [];
        var self = this;
        this.question.rowVisibilityChangedCallback = function () { self.onRowVisibilityChanged(); };
    }
    Object.defineProperty(QuestionRowModel.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (val) {
            if (val == this.visible)
                return;
            this.visibleValue = val;
            this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    QuestionRowModel.prototype.updateVisible = function () {
        this.visible = this.calcVisible();
        this.setWidth();
    };
    QuestionRowModel.prototype.addQuestion = function (q) {
        this.questions.push(q);
        this.updateVisible();
    };
    QuestionRowModel.prototype.onVisibleChanged = function () {
        if (this.visibilityChangedCallback)
            this.visibilityChangedCallback();
    };
    QuestionRowModel.prototype.setWidth = function () {
        var visCount = this.getVisibleCount();
        if (visCount == 0)
            return;
        var counter = 0;
        for (var i = 0; i < this.questions.length; i++)
            if (this.isQuestionVisible(this.questions[i])) {
                this.questions[i].renderWidth = this.question.width ? this.question.width : Math.floor(100 / visCount) + '%';
                this.questions[i].rightIndent = counter < visCount - 1 ? 1 : 0;
                counter++;
            }
    };
    QuestionRowModel.prototype.onRowVisibilityChanged = function () {
        this.page.onRowVisibilityChanged(this);
    };
    QuestionRowModel.prototype.getVisibleCount = function () {
        var res = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.isQuestionVisible(this.questions[i]))
                res++;
        }
        return res;
    };
    QuestionRowModel.prototype.isQuestionVisible = function (q) { return this.page.isQuestionVisible(q); };
    QuestionRowModel.prototype.calcVisible = function () { return this.getVisibleCount() > 0; };
    return QuestionRowModel;
}());

var PageModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PageModel, _super);
    function PageModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.rowValues = null;
        _this.conditionRunner = null;
        _this.questions = new Array();
        _this.data = null;
        _this.visibleIf = "";
        _this.navigationButtonsVisibility = "inherit";
        _this.title = "";
        _this.visibleIndex = -1;
        _this.numValue = -1;
        _this.visibleValue = true;
        _this.idValue = PageModel.getPageId();
        var self = _this;
        _this.questions.push = function (value) {
            if (self.data != null) {
                value.setData(self.data);
            }
            return Array.prototype.push.call(this, value);
        };
        return _this;
    }
    PageModel.getPageId = function () {
        return "sp_" + PageModel.pageCounter++;
    };
    Object.defineProperty(PageModel.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "rows", {
        get: function () {
            this.rowValues = this.buildRows();
            return this.rowValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "isActive", {
        get: function () { return (!this.data) || this.data.currentPage == this; },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.isQuestionVisible = function (question) { return question.visible || this.isDesignMode; };
    PageModel.prototype.createRow = function (question) { return new QuestionRowModel(this, question); };
    Object.defineProperty(PageModel.prototype, "isDesignMode", {
        get: function () { return this.data && this.data.isDesignMode; },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.buildRows = function () {
        var result = new Array();
        var lastRowVisibleIndex = -1;
        var self = this;
        for (var i = 0; i < this.questions.length; i++) {
            var q = this.questions[i];
            result.push(this.createRow(q));
            if (q.startWithNewLine) {
                lastRowVisibleIndex = i;
                result[i].addQuestion(q);
            }
            else {
                if (lastRowVisibleIndex < 0)
                    lastRowVisibleIndex = i;
                result[lastRowVisibleIndex].addQuestion(q);
            }
        }
        for (var i = 0; i < result.length; i++) {
            result[i].setWidth();
        }
        return result;
    };
    PageModel.prototype.onRowVisibilityChanged = function (row) {
        if (!this.isActive || !this.rowValues)
            return;
        var index = this.rowValues.indexOf(row);
        for (var i = index; i >= 0; i--) {
            if (this.rowValues[i].questions.indexOf(row.question) > -1) {
                this.rowValues[i].updateVisible();
                break;
            }
        }
    };
    Object.defineProperty(PageModel.prototype, "processedTitle", {
        get: function () { return this.data != null ? this.data.processText(this.title) : this.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "num", {
        get: function () { return this.numValue; },
        set: function (value) {
            if (this.numValue == value)
                return;
            this.numValue = value;
            this.onNumChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (value) {
            if (value === this.visible)
                return;
            this.visibleValue = value;
            if (this.data != null) {
                this.data.pageVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.getType = function () { return "page"; };
    Object.defineProperty(PageModel.prototype, "isVisible", {
        get: function () { return this.getIsPageVisible(null); },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.getIsPageVisible = function (exceptionQuestion) {
        if (!this.visible)
            return false;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i] == exceptionQuestion)
                continue;
            if (this.questions[i].visible)
                return true;
        }
        return false;
    };
    PageModel.prototype.addQuestion = function (question, index) {
        if (index === void 0) { index = -1; }
        if (question == null)
            return;
        if (index < 0 || index >= this.questions.length) {
            this.questions.push(question);
        }
        else {
            this.questions.splice(index, 0, question);
        }
        if (this.data != null) {
            question.setData(this.data);
            this.data.questionAdded(question, index);
        }
    };
    PageModel.prototype.addNewQuestion = function (questionType, name) {
        var question = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
        this.addQuestion(question);
        return question;
    };
    PageModel.prototype.removeQuestion = function (question) {
        var index = this.questions.indexOf(question);
        if (index < 0)
            return;
        this.questions.splice(index, 1);
        if (this.data != null)
            this.data.questionRemoved(question);
    };
    PageModel.prototype.focusFirstQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            if (!question.visible || !question.hasInput)
                continue;
            this.questions[i].focus();
            break;
        }
    };
    PageModel.prototype.focusFirstErrorQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (!this.questions[i].visible || this.questions[i].currentErrorCount == 0)
                continue;
            this.questions[i].focus(true);
            break;
        }
    };
    PageModel.prototype.scrollToTop = function () {
        __WEBPACK_IMPORTED_MODULE_2__base__["c" /* SurveyElement */].ScrollElementToTop(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyPageId */]);
    };
    PageModel.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
        if (fireCallback === void 0) { fireCallback = true; }
        if (focuseOnFirstError === void 0) { focuseOnFirstError = false; }
        var result = false;
        var firstErrorQuestion = null;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].visible && this.questions[i].hasErrors(fireCallback)) {
                if (focuseOnFirstError && firstErrorQuestion == null) {
                    firstErrorQuestion = this.questions[i];
                }
                result = true;
            }
        }
        if (firstErrorQuestion)
            firstErrorQuestion.focus(true);
        return result;
    };
    PageModel.prototype.addQuestionsToList = function (list, visibleOnly) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (visibleOnly && !this.visible)
            return;
        for (var i = 0; i < this.questions.length; i++) {
            if (visibleOnly && !this.questions[i].visible)
                continue;
            list.push(this.questions[i]);
        }
    };
    PageModel.prototype.runCondition = function (values) {
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    PageModel.prototype.onNumChanged = function (value) {
    };
    return PageModel;
}(__WEBPACK_IMPORTED_MODULE_2__base__["b" /* Base */]));

PageModel.pageCounter = 100;
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("page", ["name", { name: "navigationButtonsVisibility", default: "inherit", choices: ["iherit", "show", "hide"] }, { name: "questions", baseClassName: "question" }, { name: "visible:boolean", default: true }, "visibleIf:expression", "title"], function () { return new PageModel(); });


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionCustomWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWidgetCollection; });

var QuestionCustomWidget = (function () {
    function QuestionCustomWidget(name, widgetJson) {
        this.name = name;
        this.widgetJson = widgetJson;
        this.htmlTemplate = widgetJson.htmlTemplate ? widgetJson.htmlTemplate : "";
    }
    QuestionCustomWidget.prototype.afterRender = function (question, el) {
        if (this.widgetJson.afterRender)
            this.widgetJson.afterRender(question, el);
    };
    QuestionCustomWidget.prototype.isFit = function (question) {
        if (this.widgetJson.isFit)
            return this.widgetJson.isFit(question);
        return false;
    };
    return QuestionCustomWidget;
}());

var CustomWidgetCollection = (function () {
    function CustomWidgetCollection() {
        this.widgetsValues = [];
        this.onCustomWidgetAdded = new __WEBPACK_IMPORTED_MODULE_0__base__["a" /* Event */]();
    }
    Object.defineProperty(CustomWidgetCollection.prototype, "widgets", {
        get: function () { return this.widgetsValues; },
        enumerable: true,
        configurable: true
    });
    CustomWidgetCollection.prototype.addCustomWidget = function (widgetJson) {
        var name = widgetJson.name;
        if (!name) {
            name = "widget_" + this.widgets.length + 1;
        }
        var customWidget = new QuestionCustomWidget(name, widgetJson);
        this.widgetsValues.push(customWidget);
        this.onCustomWidgetAdded.fire(customWidget, null);
    };
    CustomWidgetCollection.prototype.clear = function () { this.widgetsValues = []; };
    CustomWidgetCollection.prototype.getCustomWidget = function (question) {
        for (var i = 0; i < this.widgetsValues.length; i++) {
            if (this.widgetsValues[i].isFit(question))
                return this.widgetsValues[i];
        }
        return null;
    };
    return CustomWidgetCollection;
}());

CustomWidgetCollection.Instance = new CustomWidgetCollection();


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultBootstrapCss; });

var defaultBootstrapCss = {
    root: "",
    header: "panel-heading",
    body: "panel-body",
    footer: "panel-footer",
    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
    progress: "progress center-block", progressBar: "progress-bar",
    pageTitle: "",
    row: "",
    question: { root: "", title: "", comment: "form-control", indent: 20 },
    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
    checkbox: { root: "form-inline", item: "checkbox", other: "" },
    comment: "form-control",
    dropdown: "form-control",
    matrix: { root: "table" },
    matrixdropdown: { root: "table" },
    matrixdynamic: { root: "table", button: "button" },
    multipletext: { root: "table", itemTitle: "", itemValue: "form-control" },
    radiogroup: { root: "form-inline", item: "radio", other: "" },
    rating: { root: "btn-group", item: "btn btn-default" },
    text: "form-control",
    window: {
        root: "modal-content", body: "modal-body",
        header: {
            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__cssstandard__["a" /* surveyCss */]["bootstrap"] = defaultBootstrapCss;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_danish__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localization_dutch__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localization_finnish__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localization_french__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localization_german__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localization_greek__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localization_polish__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localization_russian__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localization_swedish__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__localization_turkish__ = __webpack_require__(77);












/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choicesRestfull__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_3__choicesRestfull__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditions__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__conditions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__conditions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__conditions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditionsParser__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_5__conditionsParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_7__error__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_7__error__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_7__error__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jsonobject__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_8__jsonobject__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_9__question_matrixdropdownbase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_9__question_matrixdropdownbase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_9__question_matrixdropdownbase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_9__question_matrixdropdownbase__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdown__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdown__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_matrixdynamic__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_11__question_matrixdynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_11__question_matrixdynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_matrix__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_12__question_matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_12__question_matrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_multipletext__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_13__question_multipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_13__question_multipletext__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_14__page__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_14__page__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_15__question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questionbase__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_16__questionbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__question_baseselect__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_17__question_baseselect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_17__question_baseselect__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__question_checkbox__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_18__question_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__question_comment__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_19__question_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__question_dropdown__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_20__question_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__questionfactory__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_21__questionfactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__question_file__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_22__question_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__question_html__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_23__question_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__question_radiogroup__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_24__question_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__question_rating__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_25__question_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__question_text__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_26__question_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__survey__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_27__survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__trigger__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_28__trigger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_28__trigger__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_28__trigger__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_28__trigger__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_28__trigger__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__surveyWindow__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_29__surveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__textPreProcessor__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_30__textPreProcessor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dxSurveyService__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_31__dxSurveyService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__surveyStrings__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_32__surveyStrings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_32__surveyStrings__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__questionCustomWidgets__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_33__questionCustomWidgets__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_33__questionCustomWidgets__["a"]; });
// styles


































//Uncomment to include the "date" question type.
//export {default as QuestionDateModel} from "../../plugins/question_date"; 


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VueSurveyModel; });



var VueSurveyModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](VueSurveyModel, _super);
    function VueSurveyModel(jsonObj) {
        if (jsonObj === void 0) { jsonObj = null; }
        return _super.call(this, jsonObj) || this;
    }
    VueSurveyModel.prototype.render = function () {
        if (this.renderCallback) {
            this.renderCallback();
        }
    };
    VueSurveyModel.prototype.onLoadSurveyFromService = function () {
        this.render();
    };
    VueSurveyModel.prototype.onLoadingSurveyFromService = function () {
        this.render();
    };
    Object.defineProperty(VueSurveyModel.prototype, "css", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__defaultCss_cssstandard__["a" /* surveyCss */].getCss();
        },
        set: function (value) {
            this.mergeValues(value, this.css);
        },
        enumerable: true,
        configurable: true
    });
    return VueSurveyModel;
}(__WEBPACK_IMPORTED_MODULE_1__survey__["a" /* SurveyModel */]));



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40391f62", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-40391f62", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51048210", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-51048210", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10d470b0", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-10d470b0", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\errors.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] errors.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37c854ca", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-37c854ca", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\file.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] file.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76ce5fca", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-76ce5fca", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\html.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] html.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47519a6c", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-47519a6c", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\matrix.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] matrix.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60e86220", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-60e86220", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\matrixdropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] matrixdropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bdda49e", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-0bdda49e", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\matrixdynamic.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] matrixdynamic.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fdf22cf", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-4fdf22cf", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\multipletext.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] multipletext.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89df0348", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-89df0348", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\otherChoice.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] otherChoice.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37435302", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-37435302", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23aa7bae", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-23aa7bae", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\progress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] progress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64f4fe68", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-64f4fe68", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\radiogroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radiogroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6584267a", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-6584267a", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\rating.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rating.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51d82dfc", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-51d82dfc", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\survey.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] survey.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5ea058e", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-a5ea058e", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\text.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] text.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96c44168", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-96c44168", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\JS\\Lib\\survey.js\\src\\vue\\window.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] window.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-443af6cf", Component.options)
  } else {
    if (module.hot.data.cssModules && JSON.stringify(module.hot.data.cssModules) !== JSON.stringify(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-443af6cf", Component.options)
  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
  })
})()}

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Object.create support
    var supportsCreate = typeof Object.create === "function";
    // feature test for __proto__ support
    var supportsProto = { __proto__: [] } instanceof Array;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    // create an object in dictionary mode (a.k.a. "slow" mode in v8)
    var createDictionary = supportsCreate ? function () { return MakeDictionary(Object.create(null)); } :
        supportsProto ? function () { return MakeDictionary({ __proto__: null }); } :
            function () { return MakeDictionary({}); };
    var HashMap;
    (function (HashMap) {
        var downLevel = !supportsCreate && !supportsProto;
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param targetKey (Optional) The property key to decorate.
      * @param targetDescriptor (Optional) The property descriptor for the target key
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(targetDescriptor) && !IsUndefined(targetDescriptor) && !IsNull(targetDescriptor))
                throw new TypeError();
            if (IsNull(targetDescriptor))
                targetDescriptor = undefined;
            targetKey = ToPropertyKey(targetKey);
            return DecorateProperty(decorators, target, targetKey, targetDescriptor);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
            if (!IsUndefined(targetKey)) {
                if (!IsObject(target))
                    throw new TypeError();
                targetKey = ToPropertyKey(targetKey);
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
            }
            else {
                if (!IsConstructor(target))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
            }
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param targetKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryMetadataKeys(target, targetKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        return OrdinaryOwnMetadataKeys(target, targetKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, targetKey) {
        // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#deletemetadata-metadatakey-p-
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(targetKey))
            targetKey = ToPropertyKey(targetKey);
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // Ordinary Object Internal Methods and Internal Slots
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinary-object-internal-methods-and-internal-slots
    // OrdinaryHasMetadata(MetadataKey, O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // OrdinaryGetMetadata(MetadataKey, O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetmetadata--metadatakey-o-p-
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // OrdinaryMetadataKeys(O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinarymetadatakeys--o-p-
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // OrdinaryOwnMetadataKeys(O, P)
    // https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md#ordinaryownmetadatakeys--o-p-
    function OrdinaryOwnMetadataKeys(O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        var keys = [];
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        while (true) {
            var next = IteratorStep(iterator);
            try {
                if (!next)
                    return keys;
                var nextValue = IteratorValue(next);
                keys.push(nextValue);
            }
            catch (e) {
                try {
                    if (next) {
                        next = false;
                        IteratorClose(iterator);
                    }
                }
                finally {
                    throw e;
                }
            }
            finally {
                if (next)
                    IteratorClose(iterator);
            }
        }
    }
    // ECMAScript Specification
    // https://tc39.github.io/ecma262/
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey === key)
                    return this._cacheIndex;
                var index = this._keys.indexOf(key);
                if (index < 0 && insert) {
                    index = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheKey = key, this._cacheIndex = index;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = createDictionary();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: createDictionary() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)))

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Checkbox = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Checkbox, _super);
    function Checkbox() {
        var _this = _super.call(this) || this;
        _this.isOtherSelected = false;
        _this.selectedValues = [];
        _this.selectedValues = _this.question.value || [];
        _this.isOtherSelected = _this.question.isOtherSelected;
        return _this;
    }
    Object.defineProperty(Checkbox.prototype, "colWidth", {
        // TODO may be need to move to the model
        get: function () {
            var colCount = this.question.colCount;
            return colCount > 0 ? (100 / colCount) + '%' : "";
        },
        enumerable: true,
        configurable: true
    });
    Checkbox.prototype.onSelectedValuesChanged = function (val, oldVal) {
        this.question.value = this.selectedValues;
        this.isOtherSelected = this.question.isOtherSelected;
    };
    return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Watch"])('selectedValues')
], Checkbox.prototype, "onSelectedValuesChanged", null);
Checkbox = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Checkbox);
/* harmony default export */ __webpack_exports__["default"] = Checkbox;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-checkbox", Checkbox);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Comment = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comment;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
Comment = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Comment);
/* harmony default export */ __webpack_exports__["default"] = Comment;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-comment", Comment);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Dropdown = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOtherSelected = false;
        return _this;
    }
    Dropdown.prototype.mounted = function () {
        this.question.valueChangedCallback = this.onValueChanged;
    };
    Dropdown.prototype.beforeDestroy = function () {
        this.question.valueChangedCallback = undefined; // TODO: ensure this works
    };
    Dropdown.prototype.onValueChanged = function () {
        this.isOtherSelected = this.question.isOtherSelected;
    };
    return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
Dropdown = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Dropdown);
/* harmony default export */ __webpack_exports__["default"] = Dropdown;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-dropdown", Dropdown);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);



var Errors = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Errors, _super);
    function Errors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Errors;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Errors.prototype, "question", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Errors.prototype, "css", void 0);
Errors = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Errors);
/* harmony default export */ __webpack_exports__["default"] = Errors;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-errors", Errors);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var File = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.previewSrc = null;
        return _this;
    }
    File.prototype.mounted = function () {
        this.question.valueChangedCallback = this.onValueChanged;
    };
    File.prototype.beforeDestroy = function () {
        this.question.valueChangedCallback = undefined; // TODO: ensure this works
    };
    File.prototype.onValueChanged = function () {
        this.previewSrc = this.question.value;
    };
    File.prototype.doChange = function (e) {
        var src = e.target || e.srcElement;
        if (!window["FileReader"])
            return;
        if (!src || !src.files || src.files.length < 1)
            return;
        this.question.loadFile(src.files[0]);
    };
    return File;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
File = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], File);
/* harmony default export */ __webpack_exports__["default"] = File;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-file", File);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);



var Html = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Html, _super);
    function Html() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Html;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Html.prototype, "question", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Html.prototype, "isEditMode", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Html.prototype, "css", void 0);
Html = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Html);
/* harmony default export */ __webpack_exports__["default"] = Html;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-html", Html);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Matrix = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Matrix, _super);
    function Matrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Matrix;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
Matrix = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Matrix);
/* harmony default export */ __webpack_exports__["default"] = Matrix;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-matrix", Matrix);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var MatrixDropdown = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdown, _super);
    function MatrixDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MatrixDropdown;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
MatrixDropdown = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], MatrixDropdown);
/* harmony default export */ __webpack_exports__["default"] = MatrixDropdown;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-matrixdropdown", MatrixDropdown);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var MatrixDynamic = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDynamic, _super);
    function MatrixDynamic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MatrixDynamic.prototype, "rows", {
        get: function () {
            return this.question.visibleRows;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDynamic.prototype.removeRowClick = function (row) {
        var rows = this.question.cachedVisibleRows;
        var index = rows.indexOf(row);
        if (index > -1) {
            this.question.removeRow(index);
        }
    };
    MatrixDynamic.prototype.addRowClick = function () {
        this.question.addRow();
    };
    return MatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
MatrixDynamic = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], MatrixDynamic);
/* harmony default export */ __webpack_exports__["default"] = MatrixDynamic;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-matrixdynamic", MatrixDynamic);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var MultipleText = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleText, _super);
    function MultipleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MultipleText;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
MultipleText = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], MultipleText);
/* harmony default export */ __webpack_exports__["default"] = MultipleText;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-multipletext", MultipleText);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);



var OtherChoice = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](OtherChoice, _super);
    function OtherChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OtherChoice;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], OtherChoice.prototype, "question", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], OtherChoice.prototype, "isEditMode", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], OtherChoice.prototype, "css", void 0);
OtherChoice = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], OtherChoice);
/* harmony default export */ __webpack_exports__["default"] = OtherChoice;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-other-choice", OtherChoice);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);



var Page = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.getWidgetComponentName = function (question) {
        if (question.customWidget) {
            return question.customWidget.name;
        }
        return 'survey-' + question.getType();
    };
    Object.defineProperty(Page.prototype, "hasTitle", {
        get: function () {
            return !!this.page.title && this.survey.showPageTitles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "num", {
        get: function () {
            return this.page.num > 0 ? this.page.num + ". " : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "rows", {
        get: function () {
            return this.page.rows;
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype.getIndentSize = function (question, indent) {
        if (indent < 1)
            return "";
        if (!question["data"])
            return "";
        var css = question["data"]["css"];
        if (!css)
            return "";
        return indent * css.question.indent + "px";
    };
    return Page;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Page.prototype, "survey", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Page.prototype, "page", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Page.prototype, "css", void 0);
Page = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Page);
/* harmony default export */ __webpack_exports__["default"] = Page;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-page", Page);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);



var Progress = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Progress.prototype, "progress", {
        get: function () {
            return this.survey.getProgress() + '%';
        },
        enumerable: true,
        configurable: true
    });
    return Progress;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Progress.prototype, "survey", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Progress.prototype, "css", void 0);
Progress = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Progress);
/* harmony default export */ __webpack_exports__["default"] = Progress;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-progress", Progress);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Radiogroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Radiogroup, _super);
    function Radiogroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOtherSelected = false;
        return _this;
    }
    Radiogroup.prototype.mounted = function () {
        this.question.valueChangedCallback = this.onValueChanged;
    };
    Radiogroup.prototype.beforeDestroy = function () {
        this.question.valueChangedCallback = undefined; // TODO: ensure this works
    };
    Radiogroup.prototype.onValueChanged = function () {
        this.isOtherSelected = this.question.isOtherSelected;
    };
    Object.defineProperty(Radiogroup.prototype, "colWidth", {
        // TODO may be need to move to the model
        get: function () {
            var colCount = this.question.colCount;
            return colCount > 0 ? (100 / colCount) + '%' : "";
        },
        enumerable: true,
        configurable: true
    });
    return Radiogroup;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
Radiogroup = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Radiogroup);
/* harmony default export */ __webpack_exports__["default"] = Radiogroup;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-radiogroup", Radiogroup);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Rating = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Rating, _super);
    function Rating() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selection = '';
        return _this;
    }
    Rating.prototype.getCss = function (item) {
        var css = this.css.rating.item;
        if (this.selection == item.value || this.question.value == item.value) {
            css = css + " active";
        }
        return css;
    };
    Rating.prototype.change = function (e) {
        this.selection = this.question.value = e.target.value;
    };
    return Rating;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
Rating = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Rating);
/* harmony default export */ __webpack_exports__["default"] = Rating;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-rating", Rating);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__ = __webpack_require__(11);




var Survey = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Survey, _super);
    function Survey() {
        return _super.call(this) || this;
    }
    Survey.prototype.forceUpdate = function () {
        this.$forceUpdate();
    };
    Survey.prototype.mounted = function () {
        this.survey.renderCallback = this.forceUpdate;
    };
    Survey.prototype.beforeDestroy = function () {
        this.survey.renderCallback = undefined;
    };
    Object.defineProperty(Survey.prototype, "hasTitle", {
        get: function () {
            return !!this.survey.title && this.survey.showTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "css", {
        get: function () {
            return this.survey.css;
        },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.getNavBtnClasses = function (btnType) {
        var btnClass = this.css.navigation[btnType];
        return this.css.navigationButton + ' ' + btnClass;
    };
    Survey.prototype.prevPage = function () {
        this.survey.prevPage();
    };
    Survey.prototype.nextPage = function () {
        this.survey.nextPage();
    };
    Survey.prototype.completeLastPage = function () {
        this.survey.completeLastPage();
    };
    return Survey;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Survey.prototype, "survey", void 0);
Survey = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Survey);
/* harmony default export */ __webpack_exports__["default"] = Survey;
// TODO: make this functionality available via surveyCss in all examples
Object.defineProperty(Survey, 'cssType', {
    get: function () { return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a" /* surveyCss */].currentType; },
    set: function (newType) { __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a" /* surveyCss */].currentType = newType; },
    enumerable: true,
    configurable: false
});
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey", Survey);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);




var Text = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.change = function (event) {
        this.question.value = event.target.value;
    };
    return Text;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* default */]));
Text = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Text);
/* harmony default export */ __webpack_exports__["default"] = Text;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-text", Text);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__ = __webpack_require__(11);




var Window = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Window, _super);
    function Window() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expanded = false;
        return _this;
    }
    Object.defineProperty(Window.prototype, "css", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a" /* surveyCss */].getCss();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "expandedCss", {
        get: function () {
            return this.expanded ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
        },
        enumerable: true,
        configurable: true
    });
    Window.prototype.doExpand = function () {
        this.expanded = !this.expanded;
    };
    return Window;
}(__WEBPACK_IMPORTED_MODULE_1_vue__));
__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Prop"]
], Window.prototype, "survey", void 0);
Window = __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
    __WEBPACK_IMPORTED_MODULE_2_vue_property_decorator__["Component"]
], Window);
/* harmony default export */ __webpack_exports__["default"] = Window;
__WEBPACK_IMPORTED_MODULE_1_vue__["component"]("survey-window", Window);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export danishSurveyStrings */

var danishSurveyStrings = {
    pagePrevText: "Tilbage",
    pageNextText: "Videre",
    completeText: "Færdig",
    progressText: "Side {0} af {1}",
    emptySurvey: "Der er ingen synlige spørgsmål.",
    completingSurvey: "Mange tak for din besvarelse!",
    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
    otherItemText: "Valgfrit svar...",
    optionsCaption: "Vælg...",
    requiredError: "Besvar venligst spørgsmålet.",
    numericError: "Angiv et tal.",
    textMinLength: "Angiv mindst {0} tegn.",
    minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
    numericMin: "'{0}' skal være lig med eller større end {1}",
    numericMax: "'{0}' skal være lig med eller mindre end {1}",
    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
    otherRequiredError: "Angiv en værdi for dit valgfrie svar."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["da"] = danishSurveyStrings;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export dutchSurveyStrings */
//Created on behalf https://github.com/Frank13

var dutchSurveyStrings = {
    pagePrevText: "Vorige",
    pageNextText: "Volgende",
    completeText: "Afsluiten",
    otherItemText: "Andere",
    progressText: "Pagina {0} van {1}",
    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
    completingSurvey: "Bedankt om deze vragenlijst in te vullen",
    loadingSurvey: "De vragenlijst is aan het laden...",
    optionsCaption: "Kies...",
    requiredError: "Gelieve een antwoord in te vullen",
    numericError: "Het antwoord moet een getal zijn",
    textMinLength: "Gelieve minsten {0} karakters in te vullen.",
    minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
    maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
    otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["nl"] = dutchSurveyStrings;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export finnishSurveyStrings */

var finnishSurveyStrings = {
    pagePrevText: "Edellinen",
    pageNextText: "Seuraava",
    completeText: "Valmis",
    otherItemText: "Muu (kuvaile)",
    progressText: "Sivu {0}/{1}",
    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
    loadingSurvey: "Kyselyä ladataan palvelimelta...",
    optionsCaption: "Valitse...",
    requiredError: "Vastaa kysymykseen, kiitos.",
    numericError: "Arvon tulee olla numeerinen.",
    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
    invalidEmail: "Syötä validi sähköpostiosoite.",
    otherRequiredError: "Ole hyvä ja syötä \"Muu (kuvaile)\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fi"] = finnishSurveyStrings;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export frenchSurveyStrings */
//Created on behalf https://github.com/Frank13

var frenchSurveyStrings = {
    pagePrevText: "Pr\u00e9c\u00e9dent",
    pageNextText: "Suivant",
    completeText: "Terminer",
    otherItemText: "Autre (pr\u00e9ciser)",
    progressText: "Page {0} sur {1}",
    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
    completingSurvey: "Merci d'avoir r\u00e9pondu au questionnaire!",
    loadingSurvey: "Le questionnaire est en cours de chargement...",
    optionsCaption: "Choisissez...",
    requiredError: "La r\u00e9ponse \u00e0 cette question est obligatoire.",
    requiredInAllRowsError: "Toutes les lignes sont obligatoires",
    numericError: "La r\u00e9ponse doit \u00eatre un nombre.",
    textMinLength: "Merci d'entrer au moins {0} symboles.",
    minSelectError: "Merci de s\u00e9lectionner au moins {0}r\u00e9ponses.",
    maxSelectError: "Merci de s\u00e9lectionner au plus {0}r\u00e9ponses.",
    numericMinMax: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1} et inf\u00e9rieure ou\u00e9gale \u00e0 {2}",
    numericMin: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1}",
    numericMax: "Votre r\u00e9ponse '{0}' doit \u00eatreinf\u00e9rieure ou \u00e9gale \u00e0 {1}",
    invalidEmail: "Merci d'entrer une adresse mail valide.",
    exceedMaxSize: "La taille du fichier ne doit pas exc\u00e9der {0}.",
    otherRequiredError: "Merci de pr\u00e9ciser le champ 'Autre'."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fr"] = frenchSurveyStrings;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export germanSurveyStrings */

var germanSurveyStrings = {
    pagePrevText: "Zurück",
    pageNextText: "Weiter",
    completeText: "Fertig",
    progressText: "Seite {0} von {1}",
    emptySurvey: "Es gibt keine sichtbare Frage.",
    completingSurvey: "Vielen Dank für das Ausfüllen des Fragebogens!",
    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
    otherItemText: "Benutzerdefinierte Antwort...",
    optionsCaption: "Wählen...",
    requiredError: "Bitte antworten Sie auf die Frage.",
    numericError: "Der Wert sollte eine Zahl sein.",
    textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
    minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Varianten.",
    numericMinMax: "'{0}' solte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
    numericMin: "'{0}' solte gleich oder größer sein als {1}",
    numericMax: "'{0}' solte gleich oder kleiner als {1}",
    invalidEmail: "Bitte geben Sie eine gültige Email-Adresse ein.",
    exceedMaxSize: "Die Dateigröße soll nicht mehr als {0}.",
    otherRequiredError: "Bitte geben Sie einen Wert für Ihre benutzerdefinierte Antwort ein."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["de"] = germanSurveyStrings;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export greekSurveyStrings */
//Created by https://github.com/agelospanagiotakis

var greekSurveyStrings = {
    pagePrevText: "Προηγούμενο",
    pageNextText: "Επόμενο",
    completeText: "Ολοκλήρωση",
    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
    progressText: "Σελίδα {0} από {1}",
    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
    optionsCaption: "Επιλέξτε...",
    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
    requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
    numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
    exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
    addRow: "Προσθήκη γραμμής",
    removeRow: "Αφαίρεση"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["gr"] = greekSurveyStrings;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export polishSurveyStrings */

var polishSurveyStrings = {
    pagePrevText: "Wstecz",
    pageNextText: "Dalej",
    completeText: "Gotowe",
    otherItemText: "Inna odpowiedź (wpisz)",
    progressText: "Strona {0} z {1}",
    emptySurvey: "Nie ma widocznych pytań.",
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    loadingSurvey: "Trwa wczytywanie ankiety...",
    optionsCaption: "Wybierz...",
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    numericError: "W tym polu można wpisać tylko liczby.",
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    invalidEmail: "Proszę podać prawidłowy adres email.",
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    otherRequiredError: "Proszę podać inną odpowiedź.",
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    addRow: "Dodaj wiersz",
    removeRow: "Usuń"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["pl"] = polishSurveyStrings;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export russianSurveyStrings */

var russianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далее",
    completeText: "Готово",
    progressText: "Страница {0} из {1}",
    emptySurvey: "Нет ни одного вопроса.",
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    loadingSurvey: "Загрузка с сервера...",
    otherItemText: "Другое (пожалуйста, опишите)",
    optionsCaption: "Выбрать...",
    requiredError: "Пожалуйста, ответьте на вопрос.",
    numericError: "Ответ должен быть числом.",
    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
    numericMin: "'{0}' должно быть равным или больше, чем {1}",
    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    otherRequiredError: "Пожалуйста, введите данные в поле \"Другое\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ru"] = russianSurveyStrings;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export swedishSurveyStrings */
//Create by Mattias Asplund

var swedishSurveyStrings = {
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Färdig",
    otherItemText: "Annat (beskriv)",
    progressText: "Sida {0} av {1}",
    emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
    completingSurvey: "Tack för att du genomfört enkäten!!",
    loadingSurvey: "Enkäten laddas...",
    optionsCaption: "Välj...",
    requiredError: "Var vänlig besvara frågan.",
    requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
    numericError: "Värdet ska vara numeriskt.",
    textMinLength: "Var vänlig ange minst {0} tecken.",
    minRowCountError: "Var vänlig fyll i minst {0} rader.",
    minSelectError: "Var vänlig välj åtminstone {0} varianter.",
    maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
    numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
    numericMin: "'{0}' ska vara lika med eller mer än {1}",
    numericMax: "'{0}' ska vara lika med eller mindre än {1}",
    invalidEmail: "Var vänlig ange en korrekt e-postadress.",
    urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
    urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
    exceedMaxSize: "Filstorleken får ej överstiga {0}.",
    otherRequiredError: "Var vänlig ange det andra värdet.",
    uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
    addRow: "Lägg till rad",
    removeRow: "Ta bort"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["sv"] = swedishSurveyStrings;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export turkishSurveyStrings */

var turkishSurveyStrings = {
    pagePrevText: "Geri",
    pageNextText: "İleri",
    completeText: "Anketi Tamamla",
    otherItemText: "Diğer (açıklayınız)",
    progressText: "Sayfa {0} / {1}",
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
    loadingSurvey: "Anket sunucudan yükleniyor ...",
    optionsCaption: "Seçiniz ...",
    requiredError: "Lütfen soruya cevap veriniz",
    numericError: "Girilen değer numerik olmalıdır",
    textMinLength: "En az {0} sembol giriniz.",
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
    maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
    urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
    urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    otherRequiredError: "Lütfen diğer değerleri giriniz.",
    uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
    addRow: "Satır Ekle",
    removeRow: "Kaldır"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["tr"] = turkishSurveyStrings;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxModel; });




var QuestionCheckboxModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxModel, _super);
    function QuestionCheckboxModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionCheckboxModel.prototype.getHasOther = function (val) {
        if (!val || !Array.isArray(val))
            return false;
        return val.indexOf(this.otherItem.value) >= 0;
    };
    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
        if (!val || !Array.isArray(val))
            return val;
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value)
                return val;
            if (this.hasUnknownValue(val[i])) {
                this.comment = val[i];
                var newVal = val.slice();
                newVal[i] = this.otherItem.value;
                return newVal;
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
        if (!val || !val.length)
            return val;
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value) {
                if (this.getComment()) {
                    var newVal = val.slice();
                    newVal[i] = this.getComment();
                    return newVal;
                }
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.getType = function () {
        return "checkbox";
    };
    return QuestionCheckboxModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("checkbox", [], function () { return new QuestionCheckboxModel(""); }, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("checkbox", function (name) { var q = new QuestionCheckboxModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCommentModel; });




var QuestionCommentModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCommentModel, _super);
    function QuestionCommentModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rows = 4;
        _this.cols = 50;
        return _this;
    }
    QuestionCommentModel.prototype.getType = function () {
        return "comment";
    };
    QuestionCommentModel.prototype.isEmpty = function () {
        return _super.prototype.isEmpty.call(this) || this.value == "";
    };
    return QuestionCommentModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("comment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 }, "placeHolder"], function () { return new QuestionCommentModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("comment", function (name) { return new QuestionCommentModel(name); });


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDropdownModel; });





var QuestionDropdownModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionDropdownModel, _super);
    function QuestionDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
        get: function () { return (this.optionsCaptionValue) ? this.optionsCaptionValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption"); },
        set: function (newValue) { this.optionsCaptionValue = newValue; },
        enumerable: true,
        configurable: true
    });
    QuestionDropdownModel.prototype.getType = function () {
        return "dropdown";
    };
    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["b" /* QuestionSelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("dropdown", [{ name: "optionsCaption", onGetValue: function (obj) { return obj.optionsCaptionValue; } }], function () { return new QuestionDropdownModel(""); }, "selectbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("dropdown", function (name) { var q = new QuestionDropdownModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyStrings__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFileModel; });






var QuestionFileModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFileModel, _super);
    function QuestionFileModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.showPreviewValue = false;
        _this.isUploading = false;
        return _this;
    }
    QuestionFileModel.prototype.getType = function () {
        return "file";
    };
    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
        get: function () { return this.showPreviewValue; },
        set: function (value) { this.showPreviewValue = value; },
        enumerable: true,
        configurable: true
    });
    QuestionFileModel.prototype.loadFile = function (file) {
        var self = this;
        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status) { self.isUploading = status == "uploading"; }))
            return;
        this.setFileValue(file);
    };
    QuestionFileModel.prototype.setFileValue = function (file) {
        if (!FileReader)
            return;
        if (!this.showPreview && !this.storeDataAsText)
            return;
        if (this.checkFileForErrors(file))
            return;
        var fileReader = new FileReader();
        var self = this;
        fileReader.onload = function (e) {
            if (self.showPreview) {
                self.previewValue = self.isFileImage(file) ? fileReader.result : null;
                self.fireCallback(self.previewValueLoadedCallback);
            }
            if (self.storeDataAsText) {
                self.value = fileReader.result;
            }
        };
        fileReader.readAsDataURL(file);
    };
    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.isUploading) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("uploadingFile")));
        }
    };
    QuestionFileModel.prototype.checkFileForErrors = function (file) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        if (this.maxSize > 0 && file.size > this.maxSize) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["b" /* ExceedSizeError */](this.maxSize));
        }
        if (errorLength != this.errors.length || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        return this.errors.length > 0;
    };
    QuestionFileModel.prototype.isFileImage = function (file) {
        if (!file || !file.type)
            return;
        var str = file.type.toLowerCase();
        return str.indexOf("image") == 0;
    };
    return QuestionFileModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () { return new QuestionFileModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("file", function (name) { return new QuestionFileModel(name); });


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionbase__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHtmlModel; });




var QuestionHtmlModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionHtmlModel, _super);
    function QuestionHtmlModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionHtmlModel.prototype.getType = function () {
        return "html";
    };
    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
        get: function () { return this.htmlValue; },
        set: function (value) {
            this.htmlValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
        get: function () { return this.survey ? this.survey.processHtml(this.html) : this.html; },
        enumerable: true,
        configurable: true
    });
    return QuestionHtmlModel;
}(__WEBPACK_IMPORTED_MODULE_1__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("html", ["html:html"], function () { return new QuestionHtmlModel(""); }, "questionbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("html", function (name) { return new QuestionHtmlModel(name); });


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixModel; });







var MatrixRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixRowModel, _super);
    function MatrixRowModel(name, text, fullName, data, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.text = text;
        _this.fullName = fullName;
        _this.data = data;
        _this.rowValue = value;
        return _this;
    }
    Object.defineProperty(MatrixRowModel.prototype, "value", {
        get: function () { return this.rowValue; },
        set: function (newValue) {
            this.rowValue = newValue;
            if (this.data)
                this.data.onMatrixRowChanged(this);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    MatrixRowModel.prototype.onValueChanged = function () {
    };
    return MatrixRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

var QuestionMatrixModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixModel, _super);
    function QuestionMatrixModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.columnsValue = [];
        _this.rowsValue = [];
        _this.isRowChanging = false;
        _this.isAllRowRequired = false;
        return _this;
    }
    QuestionMatrixModel.prototype.getType = function () {
        return "matrix";
    };
    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
        get: function () {
            return this.rowsValue.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
        get: function () { return this.columnsValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(this.columnsValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
        get: function () { return this.rowsValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(this.rowsValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
        get: function () {
            var result = new Array();
            var val = this.value;
            if (!val)
                val = {};
            for (var i = 0; i < this.rows.length; i++) {
                if (!this.rows[i].value)
                    continue;
                result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, this.name + '_' + this.rows[i].value.toString(), val[this.rows[i].value]));
            }
            if (result.length == 0) {
                result.push(this.createMatrixRow(null, "", this.name, val));
            }
            this.generatedVisibleRows = result;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixModel.prototype.supportGoNextPageAutomatic = function () { return this.hasValuesInAllRows(); };
    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("requiredInAllRowsError")));
        }
    };
    QuestionMatrixModel.prototype.hasErrorInRows = function () {
        if (!this.isAllRowRequired)
            return false;
        return !this.hasValuesInAllRows();
    };
    QuestionMatrixModel.prototype.hasValuesInAllRows = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var val = rows[i].value;
            if (!val)
                return false;
        }
        return true;
    };
    QuestionMatrixModel.prototype.createMatrixRow = function (name, text, fullName, value) {
        return new MatrixRowModel(name, text, fullName, this, value);
    };
    QuestionMatrixModel.prototype.onValueChanged = function () {
        if (this.isRowChanging || !(this.generatedVisibleRows) || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.value;
        if (!val)
            val = {};
        if (this.rows.length == 0) {
            this.generatedVisibleRows[0].value = val;
        }
        else {
            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
                var row = this.generatedVisibleRows[i];
                var rowVal = val[row.name] ? val[row.name] : null;
                this.generatedVisibleRows[i].value = rowVal;
            }
        }
        this.isRowChanging = false;
    };
    //IMatrixData
    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
        if (this.isRowChanging)
            return;
        this.isRowChanging = true;
        if (!this.hasRows) {
            this.setNewValue(row.value);
        }
        else {
            var newValue = this.value;
            if (!newValue) {
                newValue = {};
            }
            newValue[row.name] = row.value;
            this.setNewValue(newValue);
        }
        this.isRowChanging = false;
    };
    return QuestionMatrixModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("matrix", [{ name: "columns:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].getData(obj.columns); }, onSetValue: function (obj, value) { obj.columns = value; } },
    { name: "rows:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].getData(obj.rows); }, onSetValue: function (obj, value) { obj.rows = value; } },
    "isAllRowRequired:boolean"], function () { return new QuestionMatrixModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrix", function (name) { var q = new QuestionMatrixModel(name); q.rows = ["Row 1", "Row 2"]; q.columns = ["Column 1", "Column 2", "Column 3"]; return q; });


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDropdownRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDropdownModel; });





var MatrixDropdownRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownRowModel, _super);
    function MatrixDropdownRowModel(name, text, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.name = name;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
        get: function () { return this.name; },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["c" /* MatrixDropdownRowModelBase */]));

var QuestionMatrixDropdownModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModel, _super);
    function QuestionMatrixDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowsValue = [];
        return _this;
    }
    QuestionMatrixDropdownModel.prototype.getType = function () {
        return "matrixdropdown";
    };
    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
        get: function () { return this.rowsValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.rowsValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModel.prototype.generateRows = function () {
        var result = new Array();
        if (!this.rows || this.rows.length === 0)
            return result;
        var val = this.value;
        if (!val)
            val = {};
        for (var i = 0; i < this.rows.length; i++) {
            if (!this.rows[i].value)
                continue;
            result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, val[this.rows[i].value]));
        }
        return result;
    };
    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (name, text, value) {
        return new MatrixDropdownRowModel(name, text, this, value);
    };
    return QuestionMatrixDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["d" /* QuestionMatrixDropdownModelBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdown", [{ name: "rows:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.rows); }, onSetValue: function (obj, value) { obj.rows = value; } }], function () { return new QuestionMatrixDropdownModel(""); }, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdropdown", function (name) { var q = new QuestionMatrixDropdownModel(name); q.choices = [1, 2, 3, 4, 5]; q.rows = ["Row 1", "Row 2"]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDynamicRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDynamicModel; });






var MatrixDynamicRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDynamicRowModel, _super);
    function MatrixDynamicRowModel(index, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.index = index;
        return _this;
    }
    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
        get: function () { return "row" + this.index; },
        enumerable: true,
        configurable: true
    });
    return MatrixDynamicRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["c" /* MatrixDropdownRowModelBase */]));

var QuestionMatrixDynamicModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamicModel, _super);
    function QuestionMatrixDynamicModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowCounter = 0;
        _this.rowCountValue = 2;
        _this.addRowTextValue = null;
        _this.removeRowTextValue = null;
        _this.minRowCount = 0;
        return _this;
    }
    QuestionMatrixDynamicModel.prototype.getType = function () {
        return "matrixdynamic";
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
        get: function () { return this.rowCountValue; },
        set: function (val) {
            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount)
                return;
            this.rowCountValue = val;
            if (this.value && this.value.length > val) {
                var qVal = this.value;
                qVal.splice(val);
                this.value = qVal;
            }
            this.fireCallback(this.rowCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.addRow = function () {
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows.push(this.createMatrixRow(null));
        }
        this.rowCount++;
    };
    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
        if (index < 0 || index >= this.rowCount)
            return;
        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
            this.generatedVisibleRows.splice(index, 1);
        }
        if (this.value) {
            var val = this.createNewValue(this.value);
            val.splice(index, 1);
            val = this.deleteRowValue(val, null);
            this.value = val;
        }
        this.rowCount--;
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
        get: function () { return this.addRowTextValue ? this.addRowTextValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("addRow"); },
        set: function (value) {
            this.addRowTextValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
        get: function () { return this.removeRowTextValue ? this.removeRowTextValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("removeRow"); },
        set: function (value) {
            this.removeRowTextValue = value;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.supportGoNextPageAutomatic = function () { return false; };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "cachedVisibleRows", {
        get: function () {
            if (this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount)
                return this.generatedVisibleRows;
            return this.visibleRows;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("minRowCountError")["format"](this.minRowCount)));
        }
    };
    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
        if (this.minRowCount <= 0 || !this.generatedVisibleRows)
            return false;
        var res = false;
        var setRowCount = 0;
        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
            var row = this.generatedVisibleRows[rowIndex];
            if (!row.isEmpty)
                setRowCount++;
        }
        return setRowCount < this.minRowCount;
    };
    QuestionMatrixDynamicModel.prototype.generateRows = function () {
        var result = new Array();
        if (this.rowCount === 0)
            return result;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.rowCount; i++) {
            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
        return new MatrixDynamicRowModel(this.rowCounter++, this, value);
    };
    QuestionMatrixDynamicModel.prototype.onBeforeValueChanged = function (val) {
        var newRowCount = val && Array.isArray(val) ? val.length : 0;
        if (newRowCount <= this.rowCount)
            return;
        this.rowCountValue = newRowCount;
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows = this.visibleRows;
        }
    };
    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
        var result = curValue;
        if (!result)
            result = [];
        var r = [];
        if (result.length > this.rowCount)
            result.splice(this.rowCount - 1);
        for (var i = result.length; i < this.rowCount; i++) {
            result.push({});
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
        var isEmpty = true;
        for (var i = 0; i < newValue.length; i++) {
            if (Object.keys(newValue[i]).length > 0) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty ? null : newValue;
    };
    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
    };
    QuestionMatrixDynamicModel.prototype.getRowValue = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
    };
    return QuestionMatrixDynamicModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["d" /* QuestionMatrixDropdownModelBase */]));

QuestionMatrixDynamicModel.MaxRowCount = 100;
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 },
    { name: "addRowText", onGetValue: function (obj) { return obj.addRowTextValue; } },
    { name: "removeRowText", onGetValue: function (obj) { return obj.removeRowTextValue; } }], function () { return new QuestionMatrixDynamicModel(""); }, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdynamic", function (name) { var q = new QuestionMatrixDynamicModel(name); q.choices = [1, 2, 3, 4, 5]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleTextItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMultipleTextModel; });






var MultipleTextItemModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleTextItemModel, _super);
    function MultipleTextItemModel(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.validators = new Array();
        _this.title = title;
        return _this;
    }
    MultipleTextItemModel.prototype.getType = function () {
        return "multipletextitem";
    };
    MultipleTextItemModel.prototype.setData = function (data) {
        this.data = data;
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
        get: function () { return this.titleValue ? this.titleValue : this.name; },
        set: function (newText) { this.titleValue = newText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
        get: function () {
            return this.data ? this.data.getMultipleTextValue(this.name) : null;
        },
        set: function (value) {
            if (this.data != null) {
                this.data.setMultipleTextValue(this.name, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {
    };
    //IValidatorOwner
    MultipleTextItemModel.prototype.getValidatorTitle = function () { return this.title; };
    return MultipleTextItemModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

var QuestionMultipleTextModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleTextModel, _super);
    function QuestionMultipleTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.colCountValue = 1;
        _this.itemSize = 25;
        _this.itemsValues = new Array();
        _this.isMultipleItemValueChanging = false;
        var self = _this;
        _this.items.push = function (value) {
            value.setData(self);
            var result = Array.prototype.push.call(this, value);
            self.fireCallback(self.colCountChangedCallback);
            return result;
        };
        return _this;
    }
    QuestionMultipleTextModel.prototype.getType = function () {
        return "multipletext";
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
        get: function () { return this.itemsValues; },
        set: function (value) {
            this.itemsValues = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMultipleTextModel.prototype.addItem = function (name, title) {
        if (title === void 0) { title = null; }
        var item = this.createTextItem(name, title);
        this.items.push(item);
        return item;
    };
    //TODO-remove later. Delay removing in case somebody use this function.
    QuestionMultipleTextModel.prototype.AddItem = function (name, title) {
        if (title === void 0) { title = null; }
        return this.addItem(name, title);
    };
    QuestionMultipleTextModel.prototype.supportGoNextPageAutomatic = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (!this.items[i].value)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < 1 || value > 4)
                return;
            this.colCountValue = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMultipleTextModel.prototype.getRows = function () {
        var colCount = this.colCount;
        var items = this.items;
        var rows = [];
        var index = 0;
        for (var i = 0; i < items.length; i++) {
            if (index == 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(items[i]);
            index++;
            if (index >= colCount) {
                index = 0;
            }
        }
        return rows;
    };
    QuestionMultipleTextModel.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        this.onItemValueChanged();
    };
    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
        return new MultipleTextItemModel(name, title);
    };
    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
        if (this.isMultipleItemValueChanging)
            return;
        for (var i = 0; i < this.items.length; i++) {
            var itemValue = null;
            if (this.value && (this.items[i].name in this.value)) {
                itemValue = this.value[this.items[i].name];
            }
            this.items[i].onValueChanged(itemValue);
        }
    };
    QuestionMultipleTextModel.prototype.runValidators = function () {
        var error = _super.prototype.runValidators.call(this);
        if (error != null)
            return error;
        for (var i = 0; i < this.items.length; i++) {
            error = new __WEBPACK_IMPORTED_MODULE_2__validator__["h" /* ValidatorRunner */]().run(this.items[i]);
            if (error != null)
                return error;
        }
        return null;
    };
    //IMultipleTextData
    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
        if (!this.value)
            return null;
        return this.value[name];
    };
    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
        this.isMultipleItemValueChanging = true;
        var newValue = this.value;
        if (!newValue) {
            newValue = {};
        }
        newValue[name] = value;
        this.setNewValue(newValue);
        this.isMultipleItemValueChanging = false;
    };
    return QuestionMultipleTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("multipletextitem", ["name", "placeHolder", { name: "title", onGetValue: function (obj) { return obj.titleValue; } },
    { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () { return new MultipleTextItemModel(""); });
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("multipletext", [{ name: "!items:textitems", className: "multipletextitem" },
    { name: "itemSize:number", default: 25 }, { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }], function () { return new QuestionMultipleTextModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("multipletext", function (name) { var q = new QuestionMultipleTextModel(name); q.addItem("text1"); q.addItem("text2"); return q; });


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadiogroupModel; });




var QuestionRadiogroupModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRadiogroupModel, _super);
    function QuestionRadiogroupModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionRadiogroupModel.prototype.getType = function () {
        return "radiogroup";
    };
    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionRadiogroupModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("radiogroup", [], function () { return new QuestionRadiogroupModel(""); }, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("radiogroup", function (name) { var q = new QuestionRadiogroupModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRatingModel; });





var QuestionRatingModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRatingModel, _super);
    function QuestionRatingModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rates = [];
        _this.mininumRateDescription = null;
        _this.maximumRateDescription = null;
        return _this;
    }
    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
        get: function () { return this.rates; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(this.rates, newValue);
            this.fireCallback(this.rateValuesChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
        get: function () {
            if (this.rateValues.length > 0)
                return this.rateValues;
            return QuestionRatingModel.defaultRateValues;
        },
        enumerable: true,
        configurable: true
    });
    QuestionRatingModel.prototype.getType = function () {
        return "rating";
    };
    QuestionRatingModel.prototype.supportComment = function () { return true; };
    QuestionRatingModel.prototype.supportOther = function () { return true; };
    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionRatingModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

QuestionRatingModel.defaultRateValues = [];
__WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(QuestionRatingModel.defaultRateValues, [1, 2, 3, 4, 5]);
__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("rating", ["hasComment:boolean", { name: "rateValues:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].getData(obj.rateValues); }, onSetValue: function (obj, value) { obj.rateValues = value; } },
    "mininumRateDescription", "maximumRateDescription"], function () { return new QuestionRatingModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("rating", function (name) { return new QuestionRatingModel(name); });


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionfactory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTextModel; });




var QuestionTextModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionTextModel, _super);
    function QuestionTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.size = 25;
        _this.inputType = "text";
        return _this;
    }
    QuestionTextModel.prototype.getType = function () {
        return "text";
    };
    QuestionTextModel.prototype.isEmpty = function () { return _super.prototype.isEmpty.call(this) || this.value == ""; };
    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    QuestionTextModel.prototype.setNewValue = function (newValue) {
        newValue = this.correctValueType(newValue);
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionTextModel.prototype.correctValueType = function (newValue) {
        if (!newValue)
            return newValue;
        if (this.inputType == "number" || this.inputType == "range") {
            return this.isNumber(newValue) ? parseFloat(newValue) : "";
        }
        return newValue;
    };
    QuestionTextModel.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return QuestionTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("text", [{ name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] },
    { name: "size:number", default: 25 }, "placeHolder"], function () { return new QuestionTextModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_1__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("text", function (name) { return new QuestionTextModel(name); });


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyWindowModel; });



var SurveyWindowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyWindowModel, _super);
    function SurveyWindowModel(jsonObj) {
        var _this = _super.call(this) || this;
        _this.surveyValue = _this.createSurvey(jsonObj);
        _this.surveyValue.showTitle = false;
        _this.windowElement = document.createElement("div");
        return _this;
    }
    SurveyWindowModel.prototype.getType = function () { return "window"; };
    Object.defineProperty(SurveyWindowModel.prototype, "survey", {
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "isShowing", {
        get: function () { return this.isShowingValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "isExpanded", {
        get: function () { return this.isExpandedValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "title", {
        get: function () { return this.titleValue ? this.titleValue : this.survey.title; },
        set: function (value) { this.titleValue = value; },
        enumerable: true,
        configurable: true
    });
    SurveyWindowModel.prototype.expand = function () {
        this.expandcollapse(true);
    };
    SurveyWindowModel.prototype.collapse = function () {
        this.expandcollapse(false);
    };
    SurveyWindowModel.prototype.createSurvey = function (jsonObj) {
        return new __WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyModel */](jsonObj);
    };
    SurveyWindowModel.prototype.expandcollapse = function (value) {
        this.isExpandedValue = value;
    };
    return SurveyWindowModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

SurveyWindowModel.surveyElementName = "windowSurveyJS";


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyTriggerVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyTriggerComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyTriggerSetValue; });



var Trigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Trigger, _super);
    function Trigger() {
        var _this = _super.call(this) || this;
        _this.opValue = "equal";
        return _this;
    }
    Object.defineProperty(Trigger, "operators", {
        get: function () {
            if (Trigger.operatorsValue != null)
                return Trigger.operatorsValue;
            Trigger.operatorsValue = {
                empty: function (value, expectedValue) { return !value; },
                notempty: function (value, expectedValue) { return !(!value); },
                equal: function (value, expectedValue) { return value == expectedValue; },
                notequal: function (value, expectedValue) { return value != expectedValue; },
                contains: function (value, expectedValue) { return value && value["indexOf"] && value.indexOf(expectedValue) > -1; },
                notcontains: function (value, expectedValue) { return !value || !value["indexOf"] || value.indexOf(expectedValue) == -1; },
                greater: function (value, expectedValue) { return value > expectedValue; },
                less: function (value, expectedValue) { return value < expectedValue; },
                greaterorequal: function (value, expectedValue) { return value >= expectedValue; },
                lessorequal: function (value, expectedValue) { return value <= expectedValue; }
            };
            return Trigger.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trigger.prototype, "operator", {
        get: function () { return this.opValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Trigger.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Trigger.prototype.check = function (value) {
        if (Trigger.operators[this.operator](value, this.value)) {
            this.onSuccess();
        }
        else {
            this.onFailure();
        }
    };
    Trigger.prototype.onSuccess = function () { };
    Trigger.prototype.onFailure = function () { };
    return Trigger;
}(__WEBPACK_IMPORTED_MODULE_1__base__["b" /* Base */]));

Trigger.operatorsValue = null;
var SurveyTrigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTrigger, _super);
    function SurveyTrigger() {
        var _this = _super.call(this) || this;
        _this.owner = null;
        return _this;
    }
    SurveyTrigger.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Object.defineProperty(SurveyTrigger.prototype, "isOnNextPage", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    return SurveyTrigger;
}(Trigger));

var SurveyTriggerVisible = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerVisible, _super);
    function SurveyTriggerVisible() {
        var _this = _super.call(this) || this;
        _this.pages = [];
        _this.questions = [];
        return _this;
    }
    SurveyTriggerVisible.prototype.getType = function () { return "visibletrigger"; };
    SurveyTriggerVisible.prototype.onSuccess = function () { this.onTrigger(this.onItemSuccess); };
    SurveyTriggerVisible.prototype.onFailure = function () { this.onTrigger(this.onItemFailure); };
    SurveyTriggerVisible.prototype.onTrigger = function (func) {
        if (!this.owner)
            return;
        var objects = this.owner.getObjects(this.pages, this.questions);
        for (var i = 0; i < objects.length; i++) {
            func(objects[i]);
        }
    };
    SurveyTriggerVisible.prototype.onItemSuccess = function (item) { item.visible = true; };
    SurveyTriggerVisible.prototype.onItemFailure = function (item) { item.visible = false; };
    return SurveyTriggerVisible;
}(SurveyTrigger));

var SurveyTriggerComplete = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerComplete, _super);
    function SurveyTriggerComplete() {
        return _super.call(this) || this;
    }
    SurveyTriggerComplete.prototype.getType = function () { return "completetrigger"; };
    Object.defineProperty(SurveyTriggerComplete.prototype, "isOnNextPage", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    SurveyTriggerComplete.prototype.onSuccess = function () { if (this.owner)
        this.owner.doComplete(); };
    return SurveyTriggerComplete;
}(SurveyTrigger));

var SurveyTriggerSetValue = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerSetValue, _super);
    function SurveyTriggerSetValue() {
        return _super.call(this) || this;
    }
    SurveyTriggerSetValue.prototype.getType = function () { return "setvaluetrigger"; };
    SurveyTriggerSetValue.prototype.onSuccess = function () {
        if (!this.setToName || !this.owner)
            return;
        this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable);
    };
    return SurveyTriggerSetValue;
}(SurveyTrigger));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("trigger", ["operator", "!value"]);
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("surveytrigger", ["!name"], null, "trigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("visibletrigger", ["pages", "questions"], function () { return new SurveyTriggerVisible(); }, "surveytrigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("completetrigger", [], function () { return new SurveyTriggerComplete(); }, "surveytrigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () { return new SurveyTriggerSetValue(); }, "surveytrigger");


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-class-component v4.4.0
  * (c) 2015-2016 Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

var Vue = __webpack_require__(3);

function createDecorator(factory) {
    return function (_, key, index) {
        if (typeof index !== 'number') {
            index = undefined;
        }
        $decoratorQueue.push(function (options) { return factory(options, key, index); });
    };
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    Component.prototype._init = function () {
        var _this = this;
        Object.getOwnPropertyNames(vm).forEach(function (key) {
            Object.defineProperty(_this, key, {
                get: function () { return vm[key]; },
                set: function (value) { return vm[key] = value; }
            });
        });
    };
    var data = new Component();
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (process.env.NODE_ENV !== 'production') {
        if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render'
];
var $decoratorQueue = [];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag;
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    $decoratorQueue.forEach(function (fn) { return fn(options); });
    $decoratorQueue = [];
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    return Super.extend(options);
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports['default'] = Component$1;
exports.createDecorator = createDecorator;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      overflowX: _vm.question.horizontalScroll ? 'scroll' : ''
    })
  }, [_c('table', {
    class: _vm.css.matrixdropdown.root
  }, [_c('thead', [_c('tr', [_c('th'), _vm._v(" "), _vm._l((_vm.question.columns), function(column) {
    return _c('th', {
      style: ({
        minWidth: _vm.question.getColumnWidth(column)
      })
    }, [_vm._v(_vm._s(_vm.question.getColumnTitle(column)))])
  })], 2)]), _vm._v(" "), _c('tbody', _vm._l((_vm.question.visibleRows), function(row) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(row.text))]), _vm._v(" "), _vm._l((row.cells), function(cell) {
      return _c('td', [_c('survey-errors', {
        attrs: {
          "question": _vm.question,
          "css": _vm.css
        }
      }), _vm._v(" "), _c('survey-' + cell.question.getType(), {
        tag: "component",
        attrs: {
          "question": cell.question,
          "isEditMode": _vm.isEditMode,
          "css": _vm.css
        }
      })], 1)
    })], 2)
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bdda49e", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isEditMode) ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.question.value),
      expression: "question.value"
    }],
    class: _vm.css.dropdown,
    attrs: {
      "id": _vm.question.inputId
    },
    on: {
      "change": function($event) {
        _vm.question.value = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        })[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.question.optionsCaption))]), _vm._v(" "), _vm._l((_vm.question.visibleChoices), function(item, index) {
    return _c('option', {
      domProps: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.text))])
  })], 2) : _c('div', {
    class: _vm.css.dropdown,
    attrs: {
      "text": _vm.question.value
    }
  }), _vm._v(" "), _c('survey-other-choice', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.question.hasOther && _vm.isOtherSelected),
      expression: "question.hasOther && isOtherSelected"
    }],
    class: _vm.css.radiogroup.other,
    attrs: {
      "question": _vm.question,
      "isEditMode": _vm.isEditMode,
      "css": _vm.css
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10d470b0", module.exports)
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasTitle),
      expression: "hasTitle"
    }],
    class: _vm.css.pageTitle
  }, [_vm._v(_vm._s(_vm.num + _vm.page.processedTitle))]), _vm._v(" "), _vm._l((_vm.rows), function(row) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (row.visible),
        expression: "row.visible"
      }],
      class: _vm.css.row
    }, _vm._l((row.questions), function(question) {
      return _c('div', {
        class: _vm.css.question.root,
        staticStyle: {
          "vertical-align": "top"
        },
        style: ({
          display: question.visible ? 'inline-block' : 'none',
          marginLeft: _vm.getIndentSize(question, question.indent),
          paddingRight: _vm.getIndentSize(question, question.rightIndent),
          width: question.renderWidth
        }),
        attrs: {
          "id": row.id
        }
      }, [(question.hasTitle) ? _c('h5', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (_vm.survey.questionTitleLocation === 'top'),
          expression: "survey.questionTitleLocation === 'top'"
        }],
        class: _vm.css.question.title
      }, [_vm._v(_vm._s(question.fullTitle))]) : _vm._e(), _vm._v(" "), _c('survey-errors', {
        attrs: {
          "question": question,
          "css": _vm.css
        }
      }), _vm._v(" "), _c(_vm.getWidgetComponentName(question), {
        tag: "component",
        attrs: {
          "question": question,
          "isEditMode": _vm.survey.isEditMode,
          "css": _vm.css
        }
      }), _vm._v(" "), _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (question.hasComment),
          expression: "question.hasComment"
        }]
      }, [_c('div', [_vm._v(_vm._s(question.commentText))]), _vm._v(" "), _c('survey-comment', {
        attrs: {
          "question": question,
          "isEditMode": _vm.survey.isEditMode,
          "css": _vm.css
        }
      })], 1), _vm._v(" "), (question.hasTitle) ? _c('h5', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (_vm.survey.questionTitleLocation === 'bottom'),
          expression: "survey.questionTitleLocation === 'bottom'"
        }],
        class: _vm.css.question.title
      }, [_vm._v(_vm._s(question.fullTitle))]) : _vm._e()], 1)
    }))
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23aa7bae", module.exports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isEditMode) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.question.comment),
      expression: "question.comment"
    }],
    class: _vm.css.question.comment,
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm._s(_vm.question.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.question.comment = $event.target.value
      }
    }
  }) : _c('div', {
    class: _vm.css.question.comment
  }, [_vm._v(_vm._s(_vm.question.comment))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37435302", module.exports)
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!!_vm.question.errors && _vm.question.errors.length > 0),
      expression: "!!question.errors && question.errors.length > 0"
    }],
    class: _vm.css.error.root,
    attrs: {
      "role": "alert"
    }
  }, _vm._l((_vm.question.errors), function(error) {
    return _c('div', [_c('span', {
      class: _vm.css.error.icon,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" "), _c('span', {
      class: _vm.css.error.item
    }, [_vm._v(_vm._s(error.getText()))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-37c854ca", module.exports)
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: _vm.css.checkbox.root
  }, [_vm._l((_vm.question.visibleChoices), function(item, index) {
    return _c('div', {
      class: _vm.css.radiogroup.item,
      style: ({
        width: _vm.colWidth,
        'margin-right': _vm.question.colCount === 0 ? '5px' : '0px'
      })
    }, [_c('label', {
      class: _vm.css.radiogroup.item
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.selectedValues),
        expression: "selectedValues"
      }],
      attrs: {
        "type": "checkbox",
        "name": _vm.question.name,
        "id": _vm.question.inputId + '_' + item.value,
        "disabled": !_vm.isEditMode
      },
      domProps: {
        "value": item.value,
        "checked": Array.isArray(_vm.selectedValues) ? _vm._i(_vm.selectedValues, item.value) > -1 : (_vm.selectedValues)
      },
      on: {
        "click": function($event) {
          var $$a = _vm.selectedValues,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = item.value,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.selectedValues = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.selectedValues = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.selectedValues = $$c
          }
        }
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.text))])])])
  }), _vm._v(" "), _c('survey-other-choice', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.question.hasOther && _vm.isOtherSelected),
      expression: "question.hasOther && isOtherSelected"
    }],
    class: _vm.css.radiogroup.other,
    attrs: {
      "question": _vm.question,
      "isEditMode": _vm.isEditMode,
      "css": _vm.css
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40391f62", module.exports)
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.css.window.root,
    staticStyle: {
      "position": "fixed",
      "bottom": "3px",
      "right": "10px"
    }
  }, [_c('div', {
    class: _vm.css.window.header.root
  }, [_c('a', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.doExpand
    }
  }, [_c('span', {
    class: _vm.css.window.header.title,
    staticStyle: {
      "padding-right": "10px"
    }
  }, [_vm._v(_vm._s(_vm.survey.title))]), _vm._v(" "), _c('span', {
    class: _vm.expandedCss,
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.expanded),
      expression: "expanded"
    }],
    class: _vm.css.window.body
  }, [_c('survey', {
    attrs: {
      "survey": _vm.survey
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-443af6cf", module.exports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.question.processedHtml)
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47519a6c", module.exports)
  }
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      overflowX: _vm.question.horizontalScroll ? 'scroll' : ''
    })
  }, [_c('table', {
    class: _vm.css.matrixdynamic.root
  }, [_c('thead', [_c('tr', [_vm._l((_vm.question.columns), function(column) {
    return _c('th', {
      style: ({
        minWidth: _vm.question.getColumnWidth(column)
      })
    }, [_vm._v(_vm._s(_vm.question.getColumnTitle(column)))])
  }), _vm._v(" "), (_vm.isEditMode) ? _c('th') : _vm._e()], 2)]), _vm._v(" "), _c('tbody', _vm._l((_vm.rows), function(row) {
    return _c('tr', [_vm._l((row.cells), function(cell) {
      return _c('td', [_c('survey-errors', {
        attrs: {
          "question": _vm.question,
          "css": _vm.css
        }
      }), _vm._v(" "), _c('survey-' + cell.question.getType(), {
        tag: "component",
        attrs: {
          "question": cell.question,
          "isEditMode": _vm.isEditMode,
          "css": _vm.css
        }
      })], 1)
    }), _vm._v(" "), (_vm.isEditMode) ? _c('td', [_c('input', {
      class: _vm.css.matrixdynamic.button,
      attrs: {
        "type": "button",
        "value": _vm.question.removeRowText
      },
      on: {
        "click": function($event) {
          _vm.removeRowClick(row)
        }
      }
    })]) : _vm._e()], 2)
  }))]), _vm._v(" "), (_vm.isEditMode) ? _c('input', {
    class: _vm.css.matrixdynamic.button,
    attrs: {
      "type": "button",
      "value": _vm.question.addRowText
    },
    on: {
      "click": _vm.addRowClick
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fdf22cf", module.exports)
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isEditMode) ? _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.question.value),
      expression: "question.value"
    }],
    class: _vm.css.comment.root,
    attrs: {
      "type": "text",
      "id": _vm.question.inputId,
      "cols": _vm.question.cols,
      "rows": _vm.question.rows,
      "placeholder": _vm.question.placeHolder
    },
    domProps: {
      "value": _vm._s(_vm.question.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.question.value = $event.target.value
      }
    }
  }) : _c('div', {
    class: _vm.css.comment.root,
    attrs: {
      "text": _vm.question.value
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51048210", module.exports)
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.css.rating.root
  }, _vm._l((_vm.question.visibleRateValues), function(item, index) {
    return _c('label', {
      class: _vm.getCss(item)
    }, [_c('input', {
      staticStyle: {
        "display": "none"
      },
      attrs: {
        "type": "radio",
        "name": _vm.question.name,
        "id": _vm.question.name + index,
        "disabled": !_vm.isEditMode
      },
      domProps: {
        "value": item.value
      },
      on: {
        "change": _vm.change
      }
    }), _vm._v(" "), (index === 0) ? _c('span', [_vm._v(_vm._s(_vm.question.mininumRateDescription))]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.text))]), _vm._v(" "), (index === _vm.question.visibleRateValues.length - 1) ? _c('span', [_vm._v(_vm._s(_vm.question.maximumRateDescription))]) : _vm._e()])
  })), _vm._v(" "), _c('survey-other-choice', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.question.hasOther),
      expression: "question.hasOther"
    }],
    class: _vm.css.rating.other,
    attrs: {
      "question": _vm.question,
      "isEditMode": _vm.isEditMode,
      "css": _vm.css
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51d82dfc", module.exports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    class: _vm.css.matrix.root
  }, [_c('thead', [_c('tr', [_c('th', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.question.hasRows),
      expression: "question.hasRows"
    }]
  }), _vm._v(" "), _vm._l((_vm.question.columns), function(column) {
    return _c('th', [_vm._v(_vm._s(column.text))])
  })], 2)]), _vm._v(" "), _c('tbody', _vm._l((_vm.question.visibleRows), function(row, rowIndex) {
    return _c('tr', [_c('td', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.question.hasRows),
        expression: "question.hasRows"
      }]
    }, [_vm._v(_vm._s(row.text))]), _vm._v(" "), _vm._l((_vm.question.columns), function(column, columnIndex) {
      return _c('td', [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (row.value),
          expression: "row.value"
        }],
        attrs: {
          "type": "radio",
          "name": row.fullName,
          "disabled": !_vm.isEditMode,
          "id": (columnIndex === 0) && (rowIndex === 0) ? _vm.question.inputId : ''
        },
        domProps: {
          "value": column.value,
          "checked": _vm._q(row.value, column.value)
        },
        on: {
          "click": function($event) {
            row.value = column.value
          }
        }
      })])
    })], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60e86220", module.exports)
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.css.progress,
    staticStyle: {
      "width": "60%"
    }
  }, [_c('div', {
    class: _vm.css.progressBar,
    style: ({
      width: _vm.progress
    }),
    attrs: {
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.survey.progressText))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64f4fe68", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: _vm.css.radiogroup.root
  }, [_vm._l((_vm.question.visibleChoices), function(item, index) {
    return _c('div', {
      class: _vm.css.radiogroup.item,
      style: ({
        'width': _vm.colWidth,
        'margin-right': _vm.question.colCount === 0 ? '5px' : '0px'
      })
    }, [_c('label', {
      class: _vm.css.radiogroup.item
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.question.value),
        expression: "question.value"
      }],
      attrs: {
        "type": "radio",
        "name": _vm.question.name,
        "id": _vm.question.inputId + '_' + item.value,
        "disabled": !_vm.isEditMode
      },
      domProps: {
        "value": item.value,
        "checked": _vm._q(_vm.question.value, item.value)
      },
      on: {
        "click": function($event) {
          _vm.question.value = item.value
        }
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.text))])])])
  }), _vm._v(" "), _c('survey-other-choice', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.question.hasOther && _vm.isOtherSelected),
      expression: "question.hasOther && isOtherSelected"
    }],
    class: _vm.css.radiogroup.other,
    attrs: {
      "question": _vm.question,
      "isEditMode": _vm.isEditMode,
      "css": _vm.css
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6584267a", module.exports)
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isEditMode) ? _c('input', {
    attrs: {
      "type": "file",
      "id": _vm.question.inputId
    },
    on: {
      "change": _vm.doChange
    }
  }) : _vm._e(), _vm._v(" "), _c('div', [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.question.previewValue),
      expression: "question.previewValue"
    }],
    attrs: {
      "src": _vm.previewSrc,
      "height": _vm.question.imageHeight,
      "width": _vm.question.imageWidth
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76ce5fca", module.exports)
  }
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    class: _vm.css.multipletext.root
  }, _vm._l((_vm.question.getRows()), function(row) {
    return _c('tr', [_vm._l((row), function(item, index) {
      return [_c('td', {
        class: _vm.css.multipletext.itemTitle
      }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('td', [(_vm.isEditMode) ? _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (item.value),
          expression: "item.value"
        }],
        class: _vm.css.multipletext.itemValue,
        staticStyle: {
          "float": "left"
        },
        attrs: {
          "type": "text",
          "size": _vm.question.itemSize,
          "placeholder": item.placeHolder,
          "id": index === 0 ? _vm.question.inputId : ''
        },
        domProps: {
          "value": _vm._s(item.value)
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            item.value = $event.target.value
          }
        }
      }) : _c('div', {
        class: _vm.css.multipletext.itemValue,
        staticStyle: {
          "float": "left"
        },
        attrs: {
          "size": _vm.question.itemSize
        }
      }, [_vm._v(_vm._s(item.value))])]), _vm._v(" "), void 0]
    })], 2)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-89df0348", module.exports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isEditMode) ? _c('input', {
    class: _vm.css.text,
    attrs: {
      "type": _vm.question.inputType,
      "size": _vm.question.size,
      "id": _vm.question.inputId,
      "placeholder": _vm.question.placeHolder
    },
    domProps: {
      "value": _vm.question.value
    },
    on: {
      "change": _vm.change
    }
  }) : _c('div', {
    class: _vm.css.text
  }, [_vm._v(_vm._s(_vm.question.value))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-96c44168", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.css.root
  }, [(_vm.hasTitle) ? _c('div', {
    class: _vm.css.header
  }, [_c('h3', [_vm._v(_vm._s(_vm.survey.processedTitle))])]) : _vm._e(), _vm._v(" "), (_vm.survey.state === 'running') ? [_c('div', {
    class: _vm.css.body
  }, [(_vm.survey.showProgressBar == 'top') ? _c('survey-progress', {
    attrs: {
      "survey": _vm.survey,
      "css": _vm.css
    }
  }) : _vm._e(), _vm._v(" "), _c('survey-page', {
    attrs: {
      "id": "sq-page",
      "survey": _vm.survey,
      "page": _vm.survey.currentPage,
      "css": _vm.css
    }
  }), _vm._v(" "), (_vm.survey.showProgressBar == 'bottom') ? _c('survey-progress', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "survey": _vm.survey,
      "css": _vm.css
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.survey.isNavigationButtonsShowing) ? _c('div', {
    class: _vm.css.footer
  }, [_c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.survey.isFirstPage),
      expression: "!survey.isFirstPage"
    }],
    class: _vm.getNavBtnClasses('prev'),
    attrs: {
      "type": "button",
      "value": _vm.survey.pagePrevText
    },
    on: {
      "click": _vm.prevPage
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.survey.isLastPage),
      expression: "!survey.isLastPage"
    }],
    class: _vm.getNavBtnClasses('next'),
    attrs: {
      "type": "button",
      "value": _vm.survey.pageNextText
    },
    on: {
      "click": _vm.nextPage
    }
  }), _vm._v(" "), (_vm.survey.isEditMode) ? _c('input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.survey.isLastPage),
      expression: "survey.isLastPage"
    }],
    class: _vm.getNavBtnClasses('complete'),
    attrs: {
      "type": "button",
      "value": _vm.survey.completeText
    },
    on: {
      "click": _vm.completeLastPage
    }
  }) : _vm._e()]) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.survey.state === 'completed') ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.survey.processedCompletedHtml)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.survey.state === 'loading') ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.survey.processedLoadingHtml)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.survey.state === 'empty') ? _c('div', {
    class: _vm.css.body
  }, [_vm._v(_vm._s(_vm.survey.emptySurveyText))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a5ea058e", module.exports)
  }
}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_model__ = __webpack_require__(27);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnswerCountValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumericValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RegexValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidatorResult", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidatorRunner", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChoicesRestfull", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionNode", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionRunner", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionsParser", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProcessValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ExceedSizeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RequreNumericError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonIncorrectTypeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMetadataClass", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMissingTypeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMissingTypeErrorBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonObject", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRequiredPropertyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonUnknownPropertyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownCell", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownColumn", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownRowModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdownModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdownModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDynamicRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItemModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleTextModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PageModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCommentModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdownModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionFileModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionHtmlModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroupModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRatingModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionTextModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTrigger", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerComplete", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerSetValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerVisible", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyWindowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextPreProcessor", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dxSurveyService", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyLocalization", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCustomWidget", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CustomWidgetCollection", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_18"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_localization__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "surveyCss", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStandardCss", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBootstrapCss", function() { return __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vue_surveyModel__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return __WEBPACK_IMPORTED_MODULE_5__vue_surveyModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vue_survey_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vue_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vue_survey_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return __WEBPACK_IMPORTED_MODULE_6__vue_survey_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vue_window_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vue_window_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__vue_window_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return __WEBPACK_IMPORTED_MODULE_7__vue_window_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vue_page_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vue_page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__vue_page_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_8__vue_page_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vue_radiogroup_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vue_radiogroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__vue_radiogroup_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Radiogroup", function() { return __WEBPACK_IMPORTED_MODULE_9__vue_radiogroup_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vue_otherChoice_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vue_otherChoice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__vue_otherChoice_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "OtherChoice", function() { return __WEBPACK_IMPORTED_MODULE_10__vue_otherChoice_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vue_rating_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vue_rating_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__vue_rating_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return __WEBPACK_IMPORTED_MODULE_11__vue_rating_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vue_comment_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vue_comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__vue_comment_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return __WEBPACK_IMPORTED_MODULE_12__vue_comment_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vue_checkbox_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vue_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__vue_checkbox_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_13__vue_checkbox_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vue_text_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vue_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__vue_text_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_14__vue_text_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vue_multipletext_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vue_multipletext_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__vue_multipletext_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "MultipleText", function() { return __WEBPACK_IMPORTED_MODULE_15__vue_multipletext_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vue_matrix_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vue_matrix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__vue_matrix_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return __WEBPACK_IMPORTED_MODULE_16__vue_matrix_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vue_dropdown_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vue_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__vue_dropdown_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_17__vue_dropdown_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vue_file_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vue_file_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__vue_file_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "File", function() { return __WEBPACK_IMPORTED_MODULE_18__vue_file_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vue_matrixdropdown_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vue_matrixdropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__vue_matrixdropdown_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdown", function() { return __WEBPACK_IMPORTED_MODULE_19__vue_matrixdropdown_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__vue_errors_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__vue_errors_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__vue_errors_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return __WEBPACK_IMPORTED_MODULE_20__vue_errors_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vue_html_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vue_html_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__vue_html_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return __WEBPACK_IMPORTED_MODULE_21__vue_html_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vue_matrixdynamic_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vue_matrixdynamic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__vue_matrixdynamic_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "MatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_22__vue_matrixdynamic_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vue_progress_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vue_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__vue_progress_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return __WEBPACK_IMPORTED_MODULE_23__vue_progress_vue___default.a; });
// model

// localization

// helpers


// css standard

// css bootstrap






















/***/ })
/******/ ]);
});