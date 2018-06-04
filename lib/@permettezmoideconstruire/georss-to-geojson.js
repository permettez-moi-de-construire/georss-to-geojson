(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@permettezmoideconstruire/georss-to-geojson", [], factory);
	else if(typeof exports === 'object')
		exports["@permettezmoideconstruire/georss-to-geojson"] = factory();
	else
		root["@permettezmoideconstruire/georss-to-geojson"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPolygonGeometry = function getPolygonGeometry(rawGeometry) {
  var coordinates = [];
  var rawCoordinates = rawGeometry.split(' ');
  rawCoordinates.forEach(function (coordinate, i) {
    if (i === 0 || !(i % 2)) {
      var latitude = parseFloat(rawCoordinates[i]);
      var longitude = parseFloat(rawCoordinates[i + 1]);
      if (longitude === 'undefined' || latitude === 'undefined') {
        throw new Error('Error in coordinates format');
      }
      coordinates.push([longitude, latitude]);
    }
  });
  return {
    'type': 'Polygon',
    'coordinates': [coordinates]
  };
};

exports.getPolygonGeometry = getPolygonGeometry;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolygonGeometry = undefined;

var _georssToGeojson = __webpack_require__(2);

var _georssToGeojson2 = _interopRequireDefault(_georssToGeojson);

var _getGeometry = __webpack_require__(0);

var _getGeometry2 = _interopRequireDefault(_getGeometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _georssToGeojson2.default;
exports.getPolygonGeometry = _getGeometry2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getFeatureGeometry = __webpack_require__(3);

var _getFeatureGeometry2 = _interopRequireDefault(_getFeatureGeometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RssToGeoJson = function () {
  function RssToGeoJson() {
    _classCallCheck(this, RssToGeoJson);
  }

  _createClass(RssToGeoJson, null, [{
    key: 'convert',
    value: function convert(rss) {
      return {
        'type': 'Feature',
        'geometry': (0, _getFeatureGeometry2.default)(rss)
      };
    }
  }]);

  return RssToGeoJson;
}();

exports.default = RssToGeoJson;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getGeometry = __webpack_require__(0);

var getFeatureGeometry = function getFeatureGeometry(item) {
  var geometry = void 0;

  if (item['georss:polygon']) {
    var rawGeometry = item['georss:polygon']._text;
    geometry = (0, _getGeometry.getPolygonGeometry)(rawGeometry);
  } else {
    throw new Error('Unknown feature type');
  }
  return geometry;
};

exports.default = getFeatureGeometry;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=georss-to-geojson.js.map