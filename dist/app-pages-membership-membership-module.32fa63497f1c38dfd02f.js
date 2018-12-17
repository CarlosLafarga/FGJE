(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-membership-membership-module"],{

/***/ "./node_modules/@swimlane/ngx-datatable/release/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/release/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * angular2-data-table v"12.0.0" (https://github.com/swimlane/angular2-data-table)
 * Copyright 2016
 * Licensed under MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__, __WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js??ref--3-4!./src/components/datatable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n  .ngx-datatable [hidden] {\n    display: none !important; }\n  .ngx-datatable *, .ngx-datatable *:before, .ngx-datatable *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  .ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n    .ngx-datatable.scroll-vertical .datatable-body .datatable-row-wrapper {\n      position: absolute; }\n  .ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n    .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n    .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n      .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-flow: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n  .ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n    .ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n  .ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n    .ngx-datatable .datatable-header .datatable-header-inner {\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -webkit-align-items: stretch; }\n    .ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n      .ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n      .ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n      .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle, .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n      .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n      .ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n      .ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }\n        .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }\n        .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }\n      .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n  .ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n    .ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n    .ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n    .ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n      flex-direction: column; }\n    .ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n      .ngx-datatable .datatable-body .datatable-body-row > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%; }\n    .ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 100%; }\n    .ngx-datatable .datatable-footer .selected-count .page-count {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 40%;\n              flex: 1 1 40%; }\n    .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 60%;\n              flex: 1 1 60%; }\n    .ngx-datatable .datatable-footer .page-count {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 20%;\n              flex: 1 1 20%; }\n    .ngx-datatable .datatable-footer .datatable-pager {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 80%;\n              flex: 1 1 80%;\n      text-align: right; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager li, .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
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

/***/ "./src/components/body/body-cell.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var events_1 = __webpack_require__("./src/events.ts");
var DataTableBodyCellComponent = /** @class */ (function () {
    function DataTableBodyCellComponent(element, cd) {
        this.cd = cd;
        this.activate = new core_1.EventEmitter();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex
        };
        this._element = element.nativeElement;
    }
    Object.defineProperty(DataTableBodyCellComponent.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (group) {
            this._group = group;
            this.cellContext.group = group;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowHeight", {
        get: function () {
            return this._rowHeight;
        },
        set: function (val) {
            this._rowHeight = val;
            this.cellContext.rowHeight = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (val) {
            this._isSelected = val;
            this.cellContext.isSelected = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (val) {
            this._expanded = val;
            this.cellContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (val) {
            this._rowIndex = val;
            this.cellContext.rowIndex = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (row) {
            this._row = row;
            this.cellContext.row = row;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-body-cell';
            if (this.column.cellClass) {
                if (typeof this.column.cellClass === 'string') {
                    cls += ' ' + this.column.cellClass;
                }
                else if (typeof this.column.cellClass === 'function') {
                    var res = this.column.cellClass({
                        row: this.row,
                        group: this.group,
                        column: this.column,
                        value: this.value,
                        rowHeight: this.rowHeight
                    });
                    if (typeof res === 'string') {
                        cls += res;
                    }
                    else if (typeof res === 'object') {
                        var keys = Object.keys(res);
                        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            var k = keys_1[_i];
                            if (res[k] === true)
                                cls += " " + k;
                        }
                    }
                }
            }
            if (!this.sortDir)
                cls += ' sort-active';
            if (this.isFocused)
                cls += ' active';
            if (this.sortDir === types_1.SortDirection.asc)
                cls += ' sort-asc';
            if (this.sortDir === types_1.SortDirection.desc)
                cls += ' sort-desc';
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "height", {
        get: function () {
            var height = this.rowHeight;
            if (isNaN(height))
                return height;
            return height + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyCellComponent.prototype.ngDoCheck = function () {
        this.checkValueUpdates();
    };
    DataTableBodyCellComponent.prototype.ngOnDestroy = function () {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    };
    DataTableBodyCellComponent.prototype.checkValueUpdates = function () {
        var value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            var userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    };
    DataTableBodyCellComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    DataTableBodyCellComponent.prototype.onBlur = function () {
        this.isFocused = false;
    };
    DataTableBodyCellComponent.prototype.onClick = function (event) {
        this.activate.emit({
            type: 'click',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    DataTableBodyCellComponent.prototype.onDblClick = function (event) {
        this.activate.emit({
            type: 'dblclick',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    DataTableBodyCellComponent.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var isTargetCell = event.target === this._element;
        var isAction = keyCode === utils_1.Keys.return ||
            keyCode === utils_1.Keys.down ||
            keyCode === utils_1.Keys.up ||
            keyCode === utils_1.Keys.left ||
            keyCode === utils_1.Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    };
    DataTableBodyCellComponent.prototype.onCheckboxChange = function (event) {
        this.activate.emit({
            type: 'checkbox',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    };
    DataTableBodyCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (!sorts)
            return;
        var sort = sorts.find(function (s) {
            return s.prop === _this.column.prop;
        });
        if (sort)
            return sort.dir;
    };
    DataTableBodyCellComponent.prototype.stripHtml = function (html) {
        if (!html.replace)
            return html;
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyCellComponent.prototype, "displayCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyCellComponent.prototype, "group", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyCellComponent.prototype, "rowHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DataTableBodyCellComponent.prototype, "isSelected", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DataTableBodyCellComponent.prototype, "expanded", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyCellComponent.prototype, "rowIndex", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyCellComponent.prototype, "column", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyCellComponent.prototype, "row", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableBodyCellComponent.prototype, "sorts", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyCellComponent.prototype, "activate", void 0);
    __decorate([
        core_1.ViewChild('cellTemplate', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], DataTableBodyCellComponent.prototype, "cellTemplate", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "width", null);
    __decorate([
        core_1.HostBinding('style.minWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "minWidth", null);
    __decorate([
        core_1.HostBinding('style.maxWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.HostBinding('style.height'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "height", null);
    __decorate([
        core_1.HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('dblclick', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onDblClick", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onKeyDown", null);
    DataTableBodyCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body-cell',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"datatable-body-cell-label\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\">\n        <input\n          type=\"checkbox\"\n          [checked]=\"isSelected\"\n          (click)=\"onCheckboxChange($event)\"\n        />\n      </label>\n      <span\n        *ngIf=\"!column.cellTemplate\"\n        [title]=\"sanitizedValue\"\n        [innerHTML]=\"value\">\n      </span>\n      <ng-template #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\">\n      </ng-template>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.ChangeDetectorRef])
    ], DataTableBodyCellComponent);
    return DataTableBodyCellComponent;
}());
exports.DataTableBodyCellComponent = DataTableBodyCellComponent;


/***/ }),

/***/ "./src/components/body/body-group-header-template.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DatatableGroupHeaderTemplateDirective = /** @class */ (function () {
    function DatatableGroupHeaderTemplateDirective(template) {
        this.template = template;
    }
    DatatableGroupHeaderTemplateDirective = __decorate([
        core_1.Directive({
            selector: '[ngx-datatable-group-header-template]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], DatatableGroupHeaderTemplateDirective);
    return DatatableGroupHeaderTemplateDirective;
}());
exports.DatatableGroupHeaderTemplateDirective = DatatableGroupHeaderTemplateDirective;


/***/ }),

/***/ "./src/components/body/body-group-header.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var body_group_header_template_directive_1 = __webpack_require__("./src/components/body/body-group-header-template.directive.ts");
var DatatableGroupHeaderDirective = /** @class */ (function () {
    function DatatableGroupHeaderDirective() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new core_1.EventEmitter();
    }
    /**
     * Toggle the expansion of a group
     */
    DatatableGroupHeaderDirective.prototype.toggleExpandGroup = function (group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    };
    /**
     * Expand all groups
     */
    DatatableGroupHeaderDirective.prototype.expandAllGroups = function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * Collapse all groups
     */
    DatatableGroupHeaderDirective.prototype.collapseAllGroups = function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableGroupHeaderDirective.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(body_group_header_template_directive_1.DatatableGroupHeaderTemplateDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DatatableGroupHeaderDirective.prototype, "template", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableGroupHeaderDirective.prototype, "toggle", void 0);
    DatatableGroupHeaderDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-group-header' })
    ], DatatableGroupHeaderDirective);
    return DatatableGroupHeaderDirective;
}());
exports.DatatableGroupHeaderDirective = DatatableGroupHeaderDirective;


/***/ }),

/***/ "./src/components/body/body-row-wrapper.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var events_1 = __webpack_require__("./src/events.ts");
var DataTableRowWrapperComponent = /** @class */ (function () {
    function DataTableRowWrapperComponent(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new core_1.EventEmitter(false);
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
    }
    Object.defineProperty(DataTableRowWrapperComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (val) {
            this._rowIndex = val;
            this.rowContext.rowIndex = val;
            this.groupContext.rowIndex = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRowWrapperComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (val) {
            this._expanded = val;
            this.groupContext.expanded = val;
            this.rowContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DataTableRowWrapperComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    };
    DataTableRowWrapperComponent.prototype.onContextmenu = function ($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    };
    DataTableRowWrapperComponent.prototype.getGroupHeaderStyle = function (group) {
        var styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableRowWrapperComponent.prototype, "innerWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableRowWrapperComponent.prototype, "rowDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableRowWrapperComponent.prototype, "groupHeader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableRowWrapperComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableRowWrapperComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableRowWrapperComponent.prototype, "groupedRows", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableRowWrapperComponent.prototype, "rowIndex", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DataTableRowWrapperComponent.prototype, "expanded", null);
    __decorate([
        core_1.HostListener('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableRowWrapperComponent.prototype, "onContextmenu", null);
    DataTableRowWrapperComponent = __decorate([
        core_1.Component({
            selector: 'datatable-row-wrapper',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div \n      *ngIf=\"groupHeader && groupHeader.template\"\n      class=\"datatable-group-header\"\n      [ngStyle]=\"getGroupHeaderStyle()\">\n      <ng-template\n        *ngIf=\"groupHeader && groupHeader.template\"\n        [ngTemplateOutlet]=\"groupHeader.template\"\n        [ngTemplateOutletContext]=\"groupContext\">\n      </ng-template>\n    </div>\n    <ng-content \n      *ngIf=\"(groupHeader && groupHeader.template && expanded) || \n             (!groupHeader || !groupHeader.template)\">\n    </ng-content>\n    <div\n      *ngIf=\"rowDetail && rowDetail.template && expanded\"\n      [style.height.px]=\"detailRowHeight\"\n      class=\"datatable-row-detail\">\n      <ng-template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngTemplateOutletContext]=\"rowContext\">\n      </ng-template>\n    </div>\n  ",
            host: {
                class: 'datatable-row-wrapper'
            }
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.KeyValueDiffers])
    ], DataTableRowWrapperComponent);
    return DataTableRowWrapperComponent;
}());
exports.DataTableRowWrapperComponent = DataTableRowWrapperComponent;


/***/ }),

/***/ "./src/components/body/body-row.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var services_1 = __webpack_require__("./src/services/index.ts");
var events_1 = __webpack_require__("./src/events.ts");
var DataTableBodyRowComponent = /** @class */ (function () {
    function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.activate = new core_1.EventEmitter();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            this.recalculateColumns(val);
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            if (this._columns) {
                var colByPin = utils_1.columnsByPin(this._columns);
                this._columnGroupWidths = utils_1.columnGroupWidths(colByPin, colByPin);
            }
            this._innerWidth = val;
            this.recalculateColumns();
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "offsetX", {
        get: function () { return this._offsetX; },
        set: function (val) {
            this._offsetX = val;
            this.buildStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "cssClass", {
        get: function () {
            var cls = 'datatable-body-row';
            if (this.isSelected)
                cls += ' active';
            if (this.rowIndex % 2 !== 0)
                cls += ' datatable-row-odd';
            if (this.rowIndex % 2 === 0)
                cls += ' datatable-row-even';
            if (this.rowClass) {
                var res = this.rowClass(this.row);
                if (typeof res === 'string') {
                    cls += " " + res;
                }
                else if (typeof res === 'object') {
                    var keys = Object.keys(res);
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var k = keys_1[_i];
                        if (res[k] === true)
                            cls += " " + k;
                    }
                }
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyRowComponent.prototype, "columnsTotalWidths", {
        get: function () {
            return this._columnGroupWidths.total;
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyRowComponent.prototype.ngDoCheck = function () {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    };
    DataTableBodyRowComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableBodyRowComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    DataTableBodyRowComponent.prototype.buildStylesByGroup = function () {
        this._groupStyles['left'] = this.calcStylesByGroup('left');
        this._groupStyles['center'] = this.calcStylesByGroup('center');
        this._groupStyles['right'] = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    };
    DataTableBodyRowComponent.prototype.calcStylesByGroup = function (group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            utils_1.translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            var totalDiff = widths.total - bodyWidth;
            var offsetDiff = totalDiff - offsetX;
            var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableBodyRowComponent.prototype.onActivate = function (event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    };
    DataTableBodyRowComponent.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode;
        var isTargetRow = event.target === this._element;
        var isAction = keyCode === utils_1.Keys.return ||
            keyCode === utils_1.Keys.down ||
            keyCode === utils_1.Keys.up ||
            keyCode === utils_1.Keys.left ||
            keyCode === utils_1.Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event: event,
                row: this.row,
                rowElement: this._element
            });
        }
    };
    DataTableBodyRowComponent.prototype.onMouseenter = function (event) {
        this.activate.emit({
            type: 'mouseenter',
            event: event,
            row: this.row,
            rowElement: this._element
        });
    };
    DataTableBodyRowComponent.prototype.recalculateColumns = function (val) {
        if (val === void 0) { val = this.columns; }
        this._columns = val;
        var colsByPin = utils_1.columnsByPin(this._columns);
        this._columnsByPin = utils_1.columnsByPinArr(this._columns);
        this._columnGroupWidths = utils_1.columnGroupWidths(colsByPin, this._columns);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableBodyRowComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyRowComponent.prototype, "innerWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyRowComponent.prototype, "expanded", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyRowComponent.prototype, "rowClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyRowComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyRowComponent.prototype, "group", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyRowComponent.prototype, "isSelected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableBodyRowComponent.prototype, "rowIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyRowComponent.prototype, "displayCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyRowComponent.prototype, "offsetX", null);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableBodyRowComponent.prototype, "cssClass", null);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], DataTableBodyRowComponent.prototype, "columnsTotalWidths", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyRowComponent.prototype, "activate", void 0);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableBodyRowComponent.prototype, "onKeyDown", null);
    __decorate([
        core_1.HostListener('mouseenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableBodyRowComponent.prototype, "onMouseenter", null);
    DataTableBodyRowComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body-row',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div\n      *ngFor=\"let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{colGroup.type}} datatable-row-group\"\n      [ngStyle]=\"_groupStyles[colGroup.type]\">\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [group]=\"group\"\n        [expanded]=\"expanded\"\n        [isSelected]=\"isSelected\"\n        [rowIndex]=\"rowIndex\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        [displayCheck]=\"displayCheck\"\n        (activate)=\"onActivate($event, ii)\">\n      </datatable-body-cell>\n    </div>\n  "
        }),
        __param(1, core_1.SkipSelf()),
        __metadata("design:paramtypes", [core_1.KeyValueDiffers,
            services_1.ScrollbarHelper,
            core_1.ChangeDetectorRef,
            core_1.ElementRef])
    ], DataTableBodyRowComponent);
    return DataTableBodyRowComponent;
}());
exports.DataTableBodyRowComponent = DataTableBodyRowComponent;


/***/ }),

/***/ "./src/components/body/body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var scroller_component_1 = __webpack_require__("./src/components/body/scroller.component.ts");
var DataTableBodyComponent = /** @class */ (function () {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    function DataTableBodyComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.selected = [];
        this.scroll = new core_1.EventEmitter();
        this.page = new core_1.EventEmitter();
        this.activate = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.detailToggle = new core_1.EventEmitter();
        this.rowContextmenu = new core_1.EventEmitter(false);
        this.rowHeightsCache = new utils_1.RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new Map();
        this.rowExpansions = new Map();
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = function (row, index) {
            if (!_this.rowDetail)
                return 0;
            var rowHeight = _this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = function (index, row) {
            var idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return idx + "-" + this.trackByProp;
            }
            else {
                return idx;
            }
        }.bind(this);
    }
    Object.defineProperty(DataTableBodyComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (val) {
            this._pageSize = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (val) {
            this._rows = val;
            this.rowExpansions.clear();
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            var colsByPin = utils_1.columnsByPin(val);
            this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (val) {
            this._offset = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rowCount", {
        get: function () {
            return this._rowCount;
        },
        set: function (val) {
            this._rowCount = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyWidth", {
        get: function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            else {
                return '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyHeight", {
        get: function () {
            return this._bodyHeight;
        },
        set: function (val) {
            if (this.scrollbarV) {
                this._bodyHeight = val + 'px';
            }
            else {
                this._bodyHeight = 'auto';
            }
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "selectEnabled", {
        /**
         * Returns if selection is enabled.
         */
        get: function () {
            return !!this.selectionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "scrollHeight", {
        /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         */
        get: function () {
            if (this.scrollbarV && this.rowCount) {
                return this.rowHeightsCache.query(this.rowCount - 1);
            }
            // avoid TS7030: Not all code paths return a value.
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called after the constructor, initializing input properties
     */
    DataTableBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle
                .subscribe(function (_a) {
                var type = _a.type, value = _a.value;
                if (type === 'row')
                    _this.toggleRowExpansion(value);
                if (type === 'all')
                    _this.toggleAllRows(value);
                // Refresh rows after toggle
                // Fixes #883
                _this.updateIndexes();
                _this.updateRows();
                _this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle
                .subscribe(function (_a) {
                var type = _a.type, value = _a.value;
                if (type === 'group')
                    _this.toggleRowExpansion(value);
                if (type === 'all')
                    _this.toggleAllRows(value);
                // Refresh rows after toggle
                // Fixes #883
                _this.updateIndexes();
                _this.updateRows();
                _this.cd.markForCheck();
            });
        }
    };
    /**
     * Called once, before the instance is destroyed.
     */
    DataTableBodyComponent.prototype.ngOnDestroy = function () {
        if (this.rowDetail)
            this.listener.unsubscribe();
        if (this.groupHeader)
            this.listener.unsubscribe();
    };
    /**
     * Updates the Y offset given a new offset.
     */
    DataTableBodyComponent.prototype.updateOffsetY = function (offset) {
        // scroller is missing on empty table
        if (!this.scroller)
            return;
        if (this.scrollbarV && offset) {
            // First get the row Index that we need to move to.
            var rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        this.scroller.setOffset(offset || 0);
    };
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    DataTableBodyComponent.prototype.onBodyScroll = function (event) {
        var scrollYPos = event.scrollYPos;
        var scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    };
    /**
     * Updates the page given a direction.
     */
    DataTableBodyComponent.prototype.updatePage = function (direction) {
        var offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset: offset });
        }
    };
    /**
     * Updates the rows in the view port
     */
    DataTableBodyComponent.prototype.updateRows = function () {
        var _a = this.indexes, first = _a.first, last = _a.last;
        var rowIndex = first;
        var idx = 0;
        var temp = [];
        this.rowIndexes.clear();
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            var maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                var group = this.groupedRows[rowIndex];
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                var row = this.rows[rowIndex];
                if (row) {
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
        this.cd.detectChanges();
    };
    /**
     * Get the row height
     */
    DataTableBodyComponent.prototype.getRowHeight = function (row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    };
    /**
     * @param group the group with all rows
     */
    DataTableBodyComponent.prototype.getGroupHeight = function (group) {
        var rowHeight = 0;
        if (group.value) {
            for (var index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    };
    /**
     * Calculate row height based on the expanded state of the row.
     */
    DataTableBodyComponent.prototype.getRowAndDetailHeight = function (row) {
        var rowHeight = this.getRowHeight(row);
        var expanded = this.rowExpansions.get(row);
        // Adding detail row height if its expanded.
        if (expanded === 1) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    };
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param {*} rows The row that needs to be placed in the 2D space.
     * @returns {*} Returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    DataTableBodyComponent.prototype.getRowsStyles = function (rows) {
        var styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles['width'] = this.columnGroupWidths.total;
        }
        if (this.scrollbarV) {
            var idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                var row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            var pos = this.rowHeightsCache.query(idx - 1);
            utils_1.translateXY(styles, 0, pos);
        }
        return styles;
    };
    /**
     * Hides the loading indicator
     */
    DataTableBodyComponent.prototype.hideIndicator = function () {
        var _this = this;
        setTimeout(function () { return _this.loadingIndicator = false; }, 500);
    };
    /**
     * Updates the index of the rows in the viewport
     */
    DataTableBodyComponent.prototype.updateIndexes = function () {
        var first = 0;
        var last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                var height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min((first + this.pageSize), this.rowCount);
        }
        this.indexes = { first: first, last: last };
    };
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    DataTableBodyComponent.prototype.refreshRowHeightCache = function () {
        if (!this.scrollbarV)
            return;
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: this.rowExpansions
            });
        }
    };
    /**
     * Gets the index for the view port
     */
    DataTableBodyComponent.prototype.getAdjustedViewPortIndex = function () {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        var viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV) {
            var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    };
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    DataTableBodyComponent.prototype.toggleRowExpansion = function (row) {
        // Capture the row index of the first row that is visible on the viewport.
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        var expanded = this.rowExpansions.get(row);
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV) {
            var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            var idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        expanded = expanded ^= 1;
        this.rowExpansions.set(row, expanded);
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    DataTableBodyComponent.prototype.toggleAllRows = function (expanded) {
        // clear prev expansions
        this.rowExpansions.clear();
        var rowExpanded = expanded ? 1 : 0;
        // Capture the row index of the first row that is visible on the viewport.
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            this.rowExpansions.set(row, rowExpanded);
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Recalculates the table
     */
    DataTableBodyComponent.prototype.recalcLayout = function () {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    };
    /**
     * Tracks the column
     */
    DataTableBodyComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    /**
     * Gets the row pinning group styles
     */
    DataTableBodyComponent.prototype.stylesByGroup = function (group) {
        var widths = this.columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            utils_1.translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            var totalDiff = widths.total - bodyWidth;
            var offsetDiff = totalDiff - offsetX;
            var offset = offsetDiff * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    DataTableBodyComponent.prototype.getRowExpanded = function (row) {
        if (this.rowExpansions.size === 0 && this.groupExpansionDefault) {
            for (var _i = 0, _a = this.groupedRows; _i < _a.length; _i++) {
                var group = _a[_i];
                this.rowExpansions.set(group, 1);
            }
        }
        var expanded = this.rowExpansions.get(row);
        return expanded === 1;
    };
    /**
     * Gets the row index given a row
     */
    DataTableBodyComponent.prototype.getRowIndex = function (row) {
        return this.rowIndexes.get(row) || 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "externalPaging", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableBodyComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableBodyComponent.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableBodyComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataTableBodyComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "rowDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "groupHeader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "displayCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableBodyComponent.prototype, "trackByProp", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "rowClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "groupedRows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "groupExpansionDefault", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableBodyComponent.prototype, "innerWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableBodyComponent.prototype, "groupRowsBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "virtualization", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableBodyComponent.prototype, "summaryRow", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableBodyComponent.prototype, "summaryPosition", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableBodyComponent.prototype, "summaryHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyComponent.prototype, "pageSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableBodyComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableBodyComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyComponent.prototype, "offset", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyComponent.prototype, "rowCount", null);
    __decorate([
        core_1.HostBinding('style.width'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], DataTableBodyComponent.prototype, "bodyWidth", null);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('style.height'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyComponent.prototype, "bodyHeight", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyComponent.prototype, "detailToggle", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
    __decorate([
        core_1.ViewChild(scroller_component_1.ScrollerComponent),
        __metadata("design:type", scroller_component_1.ScrollerComponent)
    ], DataTableBodyComponent.prototype, "scroller", void 0);
    DataTableBodyComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body',
            template: "\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\">\n      <datatable-progress\n        *ngIf=\"loadingIndicator\">\n      </datatable-progress>\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\">\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\">\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn;\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group[i],i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\">\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\">\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn;\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\">\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\">\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div\n        class=\"empty-row\"\n        *ngIf=\"!rows?.length && !loadingIndicator\"\n        [innerHTML]=\"emptyMessage\">\n      </div>\n    </datatable-selection>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                class: 'datatable-body'
            }
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], DataTableBodyComponent);
    return DataTableBodyComponent;
}());
exports.DataTableBodyComponent = DataTableBodyComponent;


/***/ }),

/***/ "./src/components/body/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/body/body.component.ts"));
__export(__webpack_require__("./src/components/body/body-cell.component.ts"));
__export(__webpack_require__("./src/components/body/body-row.component.ts"));
__export(__webpack_require__("./src/components/body/progress-bar.component.ts"));
__export(__webpack_require__("./src/components/body/scroller.component.ts"));
__export(__webpack_require__("./src/components/body/body-row-wrapper.component.ts"));
__export(__webpack_require__("./src/components/body/selection.component.ts"));
__export(__webpack_require__("./src/components/body/body-group-header.directive.ts"));
__export(__webpack_require__("./src/components/body/body-group-header-template.directive.ts"));
__export(__webpack_require__("./src/components/body/summary/index.ts"));


/***/ }),

/***/ "./src/components/body/progress-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'datatable-progress',
            template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
exports.ProgressBarComponent = ProgressBarComponent;


/***/ }),

/***/ "./src/components/body/scroller.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var ScrollerComponent = /** @class */ (function () {
    function ScrollerComponent(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new core_1.EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this.element = element.nativeElement;
    }
    ScrollerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            var renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this.ngZone.runOutsideAngular(function () {
                _this.parentElement.addEventListener('scroll', _this.onScrolled.bind(_this));
            });
        }
    };
    ScrollerComponent.prototype.ngOnDestroy = function () {
        if (this.scrollbarV || this.scrollbarH) {
            this.parentElement.removeEventListener('scroll', this.onScrolled.bind(this));
        }
    };
    ScrollerComponent.prototype.setOffset = function (offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    };
    ScrollerComponent.prototype.onScrolled = function (event) {
        var _this = this;
        var dom = event.currentTarget;
        requestAnimationFrame(function () {
            _this.scrollYPos = dom.scrollTop;
            _this.scrollXPos = dom.scrollLeft;
            _this.updateOffset();
        });
    };
    ScrollerComponent.prototype.updateOffset = function () {
        var direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction: direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScrollerComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScrollerComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollerComponent.prototype, "scrollHeight", void 0);
    __decorate([
        core_1.HostBinding('style.width.px'),
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollerComponent.prototype, "scrollWidth", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ScrollerComponent.prototype, "scroll", void 0);
    ScrollerComponent = __decorate([
        core_1.Component({
            selector: 'datatable-scroller',
            template: "\n    <ng-content></ng-content>\n  ",
            host: {
                class: 'datatable-scroll'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.NgZone, core_1.ElementRef, core_1.Renderer2])
    ], ScrollerComponent);
    return ScrollerComponent;
}());
exports.ScrollerComponent = ScrollerComponent;


/***/ }),

/***/ "./src/components/body/selection.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var DataTableSelectionComponent = /** @class */ (function () {
    function DataTableSelectionComponent() {
        this.activate = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
    }
    DataTableSelectionComponent.prototype.selectRow = function (event, index, row) {
        if (!this.selectEnabled)
            return;
        var chkbox = this.selectionType === types_1.SelectionType.checkbox;
        var multi = this.selectionType === types_1.SelectionType.multi;
        var multiClick = this.selectionType === types_1.SelectionType.multiClick;
        var selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = utils_1.selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = utils_1.selectRows(this.selected.slice(), row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = utils_1.selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = utils_1.selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        (_a = this.selected).push.apply(_a, selected);
        this.prevIndex = index;
        this.select.emit({
            selected: selected
        });
        var _a;
    };
    DataTableSelectionComponent.prototype.onActivate = function (model, index) {
        var type = model.type, event = model.event, row = model.row;
        var chkbox = this.selectionType === types_1.SelectionType.checkbox;
        var select = (!chkbox && (type === 'click' || type === 'dblclick')) ||
            (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === utils_1.Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    };
    DataTableSelectionComponent.prototype.onKeyboardFocus = function (model) {
        var keyCode = model.event.keyCode;
        var shouldFocus = keyCode === utils_1.Keys.up ||
            keyCode === utils_1.Keys.down ||
            keyCode === utils_1.Keys.right ||
            keyCode === utils_1.Keys.left;
        if (shouldFocus) {
            var isCellSelection = this.selectionType === types_1.SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    };
    DataTableSelectionComponent.prototype.focusRow = function (rowElement, keyCode) {
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    };
    DataTableSelectionComponent.prototype.getPrevNextRow = function (rowElement, keyCode) {
        var parentElement = rowElement.parentElement;
        if (parentElement) {
            var focusElement = void 0;
            if (keyCode === utils_1.Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === utils_1.Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    };
    DataTableSelectionComponent.prototype.focusCell = function (cellElement, rowElement, keyCode, cellIndex) {
        var nextCellElement;
        if (keyCode === utils_1.Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === utils_1.Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === utils_1.Keys.up || keyCode === utils_1.Keys.down) {
            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    };
    DataTableSelectionComponent.prototype.getRowSelected = function (row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    };
    DataTableSelectionComponent.prototype.getRowSelectedIdx = function (row, selected) {
        var _this = this;
        if (!selected || !selected.length)
            return -1;
        var rowId = this.rowIdentity(row);
        return selected.findIndex(function (r) {
            var id = _this.rowIdentity(r);
            return id === rowId;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataTableSelectionComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataTableSelectionComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableSelectionComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableSelectionComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableSelectionComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableSelectionComponent.prototype, "select", void 0);
    DataTableSelectionComponent = __decorate([
        core_1.Component({
            selector: 'datatable-selection',
            template: "\n    <ng-content></ng-content>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DataTableSelectionComponent);
    return DataTableSelectionComponent;
}());
exports.DataTableSelectionComponent = DataTableSelectionComponent;


/***/ }),

/***/ "./src/components/body/summary/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/body/summary/summary-row.component.ts"));


/***/ }),

/***/ "./src/components/body/summary/summary-row.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
function defaultSumFunc(cells) {
    return cells
        .filter(function (cell) { return !!cell; })
        .reduce(function (res, cell) { return res + cell; });
}
var DataTableSummaryRowComponent = /** @class */ (function () {
    function DataTableSummaryRowComponent() {
        this.summaryRow = {};
    }
    DataTableSummaryRowComponent.prototype.ngOnChanges = function () {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    };
    DataTableSummaryRowComponent.prototype.updateInternalColumns = function () {
        this._internalColumns = this.columns.map(function (col) { return (__assign({}, col, { cellTemplate: col.summaryTemplate })); });
    };
    DataTableSummaryRowComponent.prototype.updateValues = function () {
        var _this = this;
        this.summaryRow = {};
        this.columns
            .filter(function (col) { return !col.summaryTemplate; })
            .forEach(function (col) {
            var cellsFromSingleColumn = _this.rows.map(function (row) { return row[col.prop]; });
            var sumFunc = col.summaryFunc || defaultSumFunc;
            _this.summaryRow[col.prop] = col.pipe ?
                col.pipe.transform(sumFunc(cellsFromSingleColumn)) :
                sumFunc(cellsFromSingleColumn);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataTableSummaryRowComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataTableSummaryRowComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableSummaryRowComponent.prototype, "innerWidth", void 0);
    DataTableSummaryRowComponent = __decorate([
        core_1.Component({
            selector: 'datatable-summary-row',
            template: "\n  <datatable-body-row\n    *ngIf=\"summaryRow && _internalColumns\"\n    tabindex=\"-1\"\n    [innerWidth]=\"innerWidth\"\n    [offsetX]=\"offsetX\"\n    [columns]=\"_internalColumns\"\n    [rowHeight]=\"rowHeight\"\n    [row]=\"summaryRow\"\n    [rowIndex]=\"-1\">\n  </datatable-body-row>\n  ",
            host: {
                class: 'datatable-summary-row'
            }
        })
    ], DataTableSummaryRowComponent);
    return DataTableSummaryRowComponent;
}());
exports.DataTableSummaryRowComponent = DataTableSummaryRowComponent;


/***/ }),

/***/ "./src/components/columns/column-cell.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DataTableColumnCellDirective = /** @class */ (function () {
    function DataTableColumnCellDirective(template) {
        this.template = template;
    }
    DataTableColumnCellDirective = __decorate([
        core_1.Directive({ selector: '[ngx-datatable-cell-template]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], DataTableColumnCellDirective);
    return DataTableColumnCellDirective;
}());
exports.DataTableColumnCellDirective = DataTableColumnCellDirective;


/***/ }),

/***/ "./src/components/columns/column-header.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DataTableColumnHeaderDirective = /** @class */ (function () {
    function DataTableColumnHeaderDirective(template) {
        this.template = template;
    }
    DataTableColumnHeaderDirective = __decorate([
        core_1.Directive({ selector: '[ngx-datatable-header-template]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], DataTableColumnHeaderDirective);
    return DataTableColumnHeaderDirective;
}());
exports.DataTableColumnHeaderDirective = DataTableColumnHeaderDirective;


/***/ }),

/***/ "./src/components/columns/column.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var column_header_directive_1 = __webpack_require__("./src/components/columns/column-header.directive.ts");
var column_cell_directive_1 = __webpack_require__("./src/components/columns/column-cell.directive.ts");
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableColumnDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "prop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "frozenLeft", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "frozenRight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "flexGrow", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "resizeable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "comparator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "pipe", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "sortable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "draggable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "canAutoResize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "minWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "maxWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "checkboxable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "headerClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "cellClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DataTableColumnDirective.prototype, "summaryFunc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "summaryTemplate", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(column_cell_directive_1.DataTableColumnCellDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "cellTemplate", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(column_header_directive_1.DataTableColumnHeaderDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "headerTemplate", void 0);
    DataTableColumnDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-column' })
    ], DataTableColumnDirective);
    return DataTableColumnDirective;
}());
exports.DataTableColumnDirective = DataTableColumnDirective;


/***/ }),

/***/ "./src/components/columns/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/columns/column.directive.ts"));
__export(__webpack_require__("./src/components/columns/column-header.directive.ts"));
__export(__webpack_require__("./src/components/columns/column-cell.directive.ts"));


/***/ }),

/***/ "./src/components/datatable.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js??ref--3-4!./src/components/datatable.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/components/datatable.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var services_1 = __webpack_require__("./src/services/index.ts");
var types_1 = __webpack_require__("./src/types/index.ts");
var body_1 = __webpack_require__("./src/components/body/index.ts");
var body_group_header_directive_1 = __webpack_require__("./src/components/body/body-group-header.directive.ts");
var columns_1 = __webpack_require__("./src/components/columns/index.ts");
var row_detail_1 = __webpack_require__("./src/components/row-detail/index.ts");
var footer_1 = __webpack_require__("./src/components/footer/index.ts");
var header_1 = __webpack_require__("./src/components/header/index.ts");
var rxjs_1 = __webpack_require__("rxjs");
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = types_1.ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = types_1.SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (function (x) { return x; });
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = this.rowHeight;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new core_1.EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new core_1.EventEmitter();
        /**
         * A cell or row was selected.
         */
        this.select = new core_1.EventEmitter();
        /**
         * Column sort was invoked.
         */
        this.sort = new core_1.EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new core_1.EventEmitter();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new core_1.EventEmitter();
        /**
         * Column was resized.
         */
        this.resize = new core_1.EventEmitter();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new core_1.EventEmitter(false);
        this.rowCount = 0;
        this._offsetX = new rxjs_1.BehaviorSubject(0);
        this._count = 0;
        this._offset = 0;
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
    }
    Object.defineProperty(DatatableComponent.prototype, "rows", {
        /**
         * Gets the rows.
         */
        get: function () {
            return this._rows;
        },
        /**
         * Rows that are displayed in the table.
         */
        set: function (val) {
            this._rows = val;
            if (val) {
                this._internalRows = val.slice();
            }
            // auto sort on new updates
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            // recalculate sizes/etc
            this.recalculate();
            if (this._rows && this._groupRowsBy) {
                // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "groupRowsBy", {
        get: function () {
            return this._groupRowsBy;
        },
        /**
         * This attribute allows the user to set the name of the column to group the data with
         */
        set: function (val) {
            if (val) {
                this._groupRowsBy = val;
                if (this._rows && this._groupRowsBy) {
                    // cretes a new array with the data grouped
                    this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columns", {
        /**
         * Get the columns.
         */
        get: function () {
            return this._columns;
        },
        /**
         * Columns to be displayed.
         */
        set: function (val) {
            if (val) {
                this._internalColumns = val.slice();
                utils_1.setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
            }
            this._columns = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "limit", {
        /**
         * Gets the limit.
         */
        get: function () {
            return this._limit;
        },
        /**
         * The page size to be shown.
         * Default value: `undefined`
         */
        set: function (val) {
            this._limit = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "count", {
        /**
         * Gets the count.
         */
        get: function () {
            return this._count;
        },
        /**
         * The total count of all rows.
         * Default value: `0`
         */
        set: function (val) {
            this._count = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "offset", {
        get: function () {
            return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
        },
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         */
        set: function (val) {
            this._offset = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
        /**
         * CSS class applied if the header height if fixed height.
         */
        get: function () {
            var headerHeight = this.headerHeight;
            return (typeof headerHeight === 'string') ?
                headerHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedRow", {
        /**
         * CSS class applied to the root element if
         * the row heights are fixed heights.
         */
        get: function () {
            var rowHeight = this.rowHeight;
            return (typeof rowHeight === 'string') ?
                rowHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVertScroll", {
        /**
         * CSS class applied to root element if
         * vertical scrolling is enabled.
         */
        get: function () {
            return this.scrollbarV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isHorScroll", {
        /**
         * CSS class applied to the root element
         * if the horziontal scrolling is enabled.
         */
        get: function () {
            return this.scrollbarH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSelectable", {
        /**
         * CSS class applied to root element is selectable.
         */
        get: function () {
            return this.selectionType !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCheckboxSelection", {
        /**
         * CSS class applied to root is checkbox selection.
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCellSelection", {
        /**
         * CSS class applied to root if cell selection.
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSingleSelection", {
        /**
         * CSS class applied to root if single select.
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiSelection", {
        /**
         * CSS class added to root element if mulit select
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiClickSelection", {
        /**
         * CSS class added to root element if mulit click select
         */
        get: function () {
            return this.selectionType === types_1.SelectionType.multiClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columnTemplates", {
        /**
         * Returns the column templates.
         */
        get: function () {
            return this._columnTemplates;
        },
        /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
         */
        set: function (val) {
            this._columnTemplates = val;
            this.translateColumns(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "allRowsSelected", {
        /**
         * Returns if all rows are selected.
         */
        get: function () {
            var allRowsSelected = (this.rows && this.selected && this.selected.length === this.rows.length);
            if (this.selectAllRowsOnPage) {
                var indexes = this.bodyComponent.indexes;
                var rowsOnPage = indexes.last - indexes.first;
                allRowsSelected = (this.selected.length === rowsOnPage);
            }
            return this.selected && this.rows &&
                this.rows.length !== 0 && allRowsSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    DatatableComponent.prototype.ngOnInit = function () {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    };
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    DatatableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(function () {
            _this.recalculate();
            // emit page for virtual server-side kickoff
            if (_this.externalPaging && _this.scrollbarV) {
                _this.page.emit({
                    count: _this.count,
                    pageSize: _this.pageSize,
                    limit: _this.limit,
                    offset: 0
                });
            }
        });
    };
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    DatatableComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.columnTemplates.changes.subscribe(function (v) {
            return _this.translateColumns(v);
        });
    };
    /**
     * Translates the templates to the column objects
     */
    DatatableComponent.prototype.translateColumns = function (val) {
        if (val) {
            var arr = val.toArray();
            if (arr.length) {
                this._internalColumns = utils_1.translateTemplates(arr);
                utils_1.setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    };
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    DatatableComponent.prototype.groupArrayBy = function (originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        var map = new Map();
        var i = 0;
        originalArray.forEach(function (item) {
            var key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        var addGroup = function (key, value) {
            return { key: key, value: value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, function (x) { return addGroup(x[0], x[1]); });
    };
    /*
    * Lifecycle hook that is called when Angular dirty checks a directive.
    */
    DatatableComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = this.rows.slice();
            }
            this.recalculatePages();
            this.cd.markForCheck();
        }
    };
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    DatatableComponent.prototype.recalculate = function () {
        this.recalculateDims();
        this.recalculateColumns();
    };
    /**
     * Window resize handler to update sizes.
     */
    DatatableComponent.prototype.onWindowResize = function () {
        this.recalculate();
    };
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    DatatableComponent.prototype.recalculateColumns = function (columns, forceIdx, allowBleed) {
        if (columns === void 0) { columns = this._internalColumns; }
        if (forceIdx === void 0) { forceIdx = -1; }
        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
        if (!columns)
            return undefined;
        var width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === types_1.ColumnMode.force) {
            utils_1.forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === types_1.ColumnMode.flex) {
            utils_1.adjustColumnWidths(columns, width);
        }
        return columns;
    };
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    DatatableComponent.prototype.recalculateDims = function () {
        var dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            var height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    };
    /**
     * Recalculates the pages after a update.
     */
    DatatableComponent.prototype.recalculatePages = function () {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    };
    /**
     * Body triggered a page event.
     */
    DatatableComponent.prototype.onBodyPage = function (_a) {
        var offset = _a.offset;
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    };
    /**
     * The body triggered a scroll event.
     */
    DatatableComponent.prototype.onBodyScroll = function (event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    };
    /**
     * The footer triggered a page event.
     */
    DatatableComponent.prototype.onFooterPage = function (event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    };
    /**
     * Recalculates the sizes of the page
     */
    DatatableComponent.prototype.calcPageSize = function (val) {
        if (val === void 0) { val = this.rows; }
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV) {
            var size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    };
    /**
     * Calculates the row count.
     */
    DatatableComponent.prototype.calcRowCount = function (val) {
        if (val === void 0) { val = this.rows; }
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    };
    /**
     * The header triggered a contextmenu event.
     */
    DatatableComponent.prototype.onColumnContextmenu = function (_a) {
        var event = _a.event, column = _a.column;
        this.tableContextmenu.emit({ event: event, type: types_1.ContextmenuType.header, content: column });
    };
    /**
     * The body triggered a contextmenu event.
     */
    DatatableComponent.prototype.onRowContextmenu = function (_a) {
        var event = _a.event, row = _a.row;
        this.tableContextmenu.emit({ event: event, type: types_1.ContextmenuType.body, content: row });
    };
    /**
     * The header triggered a column resize event.
     */
    DatatableComponent.prototype.onColumnResize = function (_a) {
        var column = _a.column, newValue = _a.newValue;
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        var idx;
        var cols = this._internalColumns.map(function (c, i) {
            c = __assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column: column,
            newValue: newValue
        });
    };
    /**
     * The header triggered a column re-order event.
     */
    DatatableComponent.prototype.onColumnReorder = function (_a) {
        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
        var cols = this._internalColumns.map(function (c) {
            return __assign({}, c);
        });
        if (this.swapColumns) {
            var prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                var movedCol = cols[prevValue];
                for (var i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                var movedCol = cols[prevValue];
                for (var i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column: column,
            newValue: newValue,
            prevValue: prevValue
        });
    };
    /**
     * The header triggered a column sort event.
     */
    DatatableComponent.prototype.onColumnSort = function (event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    };
    /**
     * Toggle all row selection
     */
    DatatableComponent.prototype.onHeaderSelect = function (event) {
        if (this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            var first = this.bodyComponent.indexes.first;
            var last = this.bodyComponent.indexes.last;
            var allSelected = this.selected.length === (last - first);
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_a = this.selected).push.apply(_a, this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            var allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_b = this.selected).push.apply(_b, this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
        var _a, _b;
    };
    /**
     * A row was selected from body
     */
    DatatableComponent.prototype.onBodySelect = function (event) {
        this.select.emit(event);
    };
    DatatableComponent.prototype.sortInternalRows = function () {
        this._internalRows = utils_1.sortRows(this._internalRows, this._internalColumns, this.sorts);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "targetMarkerTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DatatableComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DatatableComponent.prototype, "groupRowsBy", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatatableComponent.prototype, "groupedRows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DatatableComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatatableComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "columnMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "headerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableComponent.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "externalPaging", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "externalSorting", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DatatableComponent.prototype, "limit", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DatatableComponent.prototype, "count", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DatatableComponent.prototype, "offset", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "reorderable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "swapColumns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatatableComponent.prototype, "sorts", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "cssClasses", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "messages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DatatableComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "rowClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DatatableComponent.prototype, "displayCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "groupExpansionDefault", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "trackByProp", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "selectAllRowsOnPage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "virtualization", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "summaryRow", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableComponent.prototype, "summaryHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "summaryPosition", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "reorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "resize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "tableContextmenu", void 0);
    __decorate([
        core_1.HostBinding('class.fixed-header'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isFixedHeader", null);
    __decorate([
        core_1.HostBinding('class.fixed-row'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isFixedRow", null);
    __decorate([
        core_1.HostBinding('class.scroll-vertical'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isVertScroll", null);
    __decorate([
        core_1.HostBinding('class.scroll-horz'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isHorScroll", null);
    __decorate([
        core_1.HostBinding('class.selectable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isSelectable", null);
    __decorate([
        core_1.HostBinding('class.checkbox-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isCheckboxSelection", null);
    __decorate([
        core_1.HostBinding('class.cell-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isCellSelection", null);
    __decorate([
        core_1.HostBinding('class.single-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isSingleSelection", null);
    __decorate([
        core_1.HostBinding('class.multi-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isMultiSelection", null);
    __decorate([
        core_1.HostBinding('class.multi-click-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isMultiClickSelection", null);
    __decorate([
        core_1.ContentChildren(columns_1.DataTableColumnDirective),
        __metadata("design:type", core_1.QueryList),
        __metadata("design:paramtypes", [core_1.QueryList])
    ], DatatableComponent.prototype, "columnTemplates", null);
    __decorate([
        core_1.ContentChild(row_detail_1.DatatableRowDetailDirective),
        __metadata("design:type", row_detail_1.DatatableRowDetailDirective)
    ], DatatableComponent.prototype, "rowDetail", void 0);
    __decorate([
        core_1.ContentChild(body_group_header_directive_1.DatatableGroupHeaderDirective),
        __metadata("design:type", body_group_header_directive_1.DatatableGroupHeaderDirective)
    ], DatatableComponent.prototype, "groupHeader", void 0);
    __decorate([
        core_1.ContentChild(footer_1.DatatableFooterDirective),
        __metadata("design:type", footer_1.DatatableFooterDirective)
    ], DatatableComponent.prototype, "footer", void 0);
    __decorate([
        core_1.ViewChild(body_1.DataTableBodyComponent),
        __metadata("design:type", body_1.DataTableBodyComponent)
    ], DatatableComponent.prototype, "bodyComponent", void 0);
    __decorate([
        core_1.ViewChild(header_1.DataTableHeaderComponent),
        __metadata("design:type", header_1.DataTableHeaderComponent)
    ], DatatableComponent.prototype, "headerComponent", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        utils_1.throttleable(5),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DatatableComponent.prototype, "onWindowResize", null);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'ngx-datatable',
            template: "\n    <div\n      visibilityObserver\n      (visible)=\"recalculate()\">\n      <datatable-header\n        *ngIf=\"headerHeight\"\n        [sorts]=\"sorts\"\n        [sortType]=\"sortType\"\n        [scrollbarH]=\"scrollbarH\"\n        [innerWidth]=\"_innerWidth\"\n        [offsetX]=\"_offsetX | async\"\n        [dealsWithGroup]=\"groupedRows\"\n        [columns]=\"_internalColumns\"\n        [headerHeight]=\"headerHeight\"\n        [reorderable]=\"reorderable\"\n        [targetMarkerTemplate]=\"targetMarkerTemplate\"\n        [sortAscendingIcon]=\"cssClasses.sortAscending\"\n        [sortDescendingIcon]=\"cssClasses.sortDescending\"\n        [allRowsSelected]=\"allRowsSelected\"\n        [selectionType]=\"selectionType\"\n        (sort)=\"onColumnSort($event)\"\n        (resize)=\"onColumnResize($event)\"\n        (reorder)=\"onColumnReorder($event)\"\n        (select)=\"onHeaderSelect($event)\"\n        (columnContextmenu)=\"onColumnContextmenu($event)\">\n      </datatable-header>\n      <datatable-body\n        [groupRowsBy]=\"groupRowsBy\"\n        [groupedRows]=\"groupedRows\"\n        [rows]=\"_internalRows\"\n        [groupExpansionDefault]=\"groupExpansionDefault\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [virtualization]=\"virtualization\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [externalPaging]=\"externalPaging\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rowCount\"\n        [offset]=\"offset\"\n        [trackByProp]=\"trackByProp\"\n        [columns]=\"_internalColumns\"\n        [pageSize]=\"pageSize\"\n        [offsetX]=\"_offsetX | async\"\n        [rowDetail]=\"rowDetail\"\n        [groupHeader]=\"groupHeader\"\n        [selected]=\"selected\"\n        [innerWidth]=\"_innerWidth\"\n        [bodyHeight]=\"bodyHeight\"\n        [selectionType]=\"selectionType\"\n        [emptyMessage]=\"messages.emptyMessage\"\n        [rowIdentity]=\"rowIdentity\"\n        [rowClass]=\"rowClass\"\n        [selectCheck]=\"selectCheck\"\n        [displayCheck]=\"displayCheck\"\n        [summaryRow]=\"summaryRow\"\n        [summaryHeight]=\"summaryHeight\"\n        [summaryPosition]=\"summaryPosition\"\n        (page)=\"onBodyPage($event)\"\n        (activate)=\"activate.emit($event)\"\n        (rowContextmenu)=\"onRowContextmenu($event)\"\n        (select)=\"onBodySelect($event)\"\n        (scroll)=\"onBodyScroll($event)\">\n      </datatable-body>\n      <datatable-footer\n        *ngIf=\"footerHeight\"\n        [rowCount]=\"rowCount\"\n        [pageSize]=\"pageSize\"\n        [offset]=\"offset\"\n        [footerHeight]=\"footerHeight\"\n        [footerTemplate]=\"footer\"\n        [totalMessage]=\"messages.totalMessage\"\n        [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n        [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n        [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n        [selectedCount]=\"selected.length\"\n        [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n        [pagerNextIcon]=\"cssClasses.pagerNext\"\n        (page)=\"onFooterPage($event)\">\n      </datatable-footer>\n    </div>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./src/components/datatable.component.scss")],
            host: {
                class: 'ngx-datatable'
            }
        }),
        __param(0, core_1.SkipSelf()),
        __param(1, core_1.SkipSelf()),
        __metadata("design:paramtypes", [services_1.ScrollbarHelper,
            services_1.DimensionsHelper,
            core_1.ChangeDetectorRef,
            core_1.ElementRef,
            core_1.KeyValueDiffers])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;


/***/ }),

/***/ "./src/components/footer/footer-template.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DataTableFooterTemplateDirective = /** @class */ (function () {
    function DataTableFooterTemplateDirective(template) {
        this.template = template;
    }
    DataTableFooterTemplateDirective = __decorate([
        core_1.Directive({ selector: '[ngx-datatable-footer-template]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], DataTableFooterTemplateDirective);
    return DataTableFooterTemplateDirective;
}());
exports.DataTableFooterTemplateDirective = DataTableFooterTemplateDirective;


/***/ }),

/***/ "./src/components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DataTableFooterComponent = /** @class */ (function () {
    function DataTableFooterComponent() {
        this.selectedCount = 0;
        this.page = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
        get: function () {
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "rowCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "offset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableFooterComponent.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableFooterComponent.prototype, "footerTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableFooterComponent.prototype, "selectedCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableFooterComponent.prototype, "selectedMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableFooterComponent.prototype, "page", void 0);
    DataTableFooterComponent = __decorate([
        core_1.Component({
            selector: 'datatable-footer',
            template: "\n    <div\n      class=\"datatable-footer-inner\"\n      [ngClass]=\"{'selected-count': selectedMessage}\"\n      [style.height.px]=\"footerHeight\">\n      <ng-template\n        *ngIf=\"footerTemplate\"\n        [ngTemplateOutlet]=\"footerTemplate.template\"\n        [ngTemplateOutletContext]=\"{ \n          rowCount: rowCount, \n          pageSize: pageSize, \n          selectedCount: selectedCount,\n          curPage: curPage,\n          offset: offset\n        }\">\n      </ng-template>\n      <div class=\"page-count\" *ngIf=\"!footerTemplate\">\n        <span *ngIf=\"selectedMessage\">\n          {{selectedCount.toLocaleString()}} {{selectedMessage}} / \n        </span>\n        {{rowCount.toLocaleString()}} {{totalMessage}}\n      </div>\n      <datatable-pager *ngIf=\"!footerTemplate\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\">\n      </datatable-pager>\n    </div>\n  ",
            host: {
                class: 'datatable-footer'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DataTableFooterComponent);
    return DataTableFooterComponent;
}());
exports.DataTableFooterComponent = DataTableFooterComponent;


/***/ }),

/***/ "./src/components/footer/footer.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var footer_template_directive_1 = __webpack_require__("./src/components/footer/footer-template.directive.ts");
var DatatableFooterDirective = /** @class */ (function () {
    function DatatableFooterDirective() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableFooterDirective.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "totalMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableFooterDirective.prototype, "selectedMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableFooterDirective.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(footer_template_directive_1.DataTableFooterTemplateDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DatatableFooterDirective.prototype, "template", void 0);
    DatatableFooterDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-footer' })
    ], DatatableFooterDirective);
    return DatatableFooterDirective;
}());
exports.DatatableFooterDirective = DatatableFooterDirective;


/***/ }),

/***/ "./src/components/footer/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/footer/footer.component.ts"));
__export(__webpack_require__("./src/components/footer/pager.component.ts"));
__export(__webpack_require__("./src/components/footer/footer.directive.ts"));
__export(__webpack_require__("./src/components/footer/footer-template.directive.ts"));


/***/ }),

/***/ "./src/components/footer/pager.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DataTablePagerComponent = /** @class */ (function () {
    function DataTablePagerComponent() {
        this.change = new core_1.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
        get: function () {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagerComponent.prototype.canPrevious = function () {
        return this.page > 1;
    };
    DataTablePagerComponent.prototype.canNext = function () {
        return this.page < this.totalPages;
    };
    DataTablePagerComponent.prototype.prevPage = function () {
        this.selectPage(this.page - 1);
    };
    DataTablePagerComponent.prototype.nextPage = function () {
        this.selectPage(this.page + 1);
    };
    DataTablePagerComponent.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page: page
            });
        }
    };
    DataTablePagerComponent.prototype.calcPages = function (page) {
        var pages = [];
        var startPage = 1;
        var endPage = this.totalPages;
        var maxSize = 5;
        var isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (var num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTablePagerComponent.prototype, "size", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTablePagerComponent.prototype, "count", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTablePagerComponent.prototype, "page", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTablePagerComponent.prototype, "change", void 0);
    DataTablePagerComponent = __decorate([
        core_1.Component({
            selector: 'datatable-pager',
            template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          role=\"button\"\n          aria-label=\"go to first page\"\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(1)\">\n          <i class=\"{{pagerPreviousIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          role=\"button\"\n          aria-label=\"go to previous page\"\n          href=\"javascript:void(0)\"\n          (click)=\"prevPage()\">\n          <i class=\"{{pagerLeftArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li\n        role=\"button\"\n        [attr.aria-label]=\"'page ' + pg.number\"\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(pg.number)\">\n          {{pg.text}}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          role=\"button\"\n          aria-label=\"go to next page\"\n          href=\"javascript:void(0)\"\n          (click)=\"nextPage()\">\n          <i class=\"{{pagerRightArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          role=\"button\"\n          aria-label=\"go to last page\"\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(totalPages)\">\n          <i class=\"{{pagerNextIcon}}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
            host: {
                class: 'datatable-pager'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], DataTablePagerComponent);
    return DataTablePagerComponent;
}());
exports.DataTablePagerComponent = DataTablePagerComponent;


/***/ }),

/***/ "./src/components/header/header-cell.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var types_1 = __webpack_require__("./src/types/index.ts");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var events_1 = __webpack_require__("./src/events.ts");
var DataTableHeaderCellComponent = /** @class */ (function () {
    function DataTableHeaderCellComponent(cd) {
        this.cd = cd;
        this.sort = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.columnContextmenu = new core_1.EventEmitter(false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "allRowsSelected", {
        get: function () {
            return this._allRowsSelected;
        },
        set: function (value) {
            this._allRowsSelected = value;
            this.cellContext.allRowsSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.sortDir = this.calcSortDir(val);
            this.cellContext.sortDir = this.sortDir;
            this.sortClass = this.calcSortClass(this.sortDir);
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-header-cell';
            if (this.column.sortable)
                cls += ' sortable';
            if (this.column.resizeable)
                cls += ' resizeable';
            if (this.column.headerClass) {
                if (typeof this.column.headerClass === 'string') {
                    cls += ' ' + this.column.headerClass;
                }
                else if (typeof this.column.headerClass === 'function') {
                    var res = this.column.headerClass({
                        column: this.column
                    });
                    if (typeof res === 'string') {
                        cls += res;
                    }
                    else if (typeof res === 'object') {
                        var keys = Object.keys(res);
                        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            var k = keys_1[_i];
                            if (res[k] === true)
                                cls += " " + k;
                        }
                    }
                }
            }
            var sortDir = this.sortDir;
            if (sortDir) {
                cls += " sort-active sort-" + sortDir;
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "name", {
        get: function () {
            // guaranteed to have a value by setColumnDefaults() in column-helper.ts
            return this.column.headerTemplate === undefined ? this.column.name : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "isCheckboxable", {
        get: function () {
            return this.column.checkboxable &&
                this.column.headerCheckboxable &&
                this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderCellComponent.prototype.onContextmenu = function ($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    };
    DataTableHeaderCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (sorts && this.column) {
            var sort = sorts.find(function (s) {
                return s.prop === _this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    };
    DataTableHeaderCellComponent.prototype.onSort = function () {
        if (!this.column.sortable)
            return;
        var newValue = utils_1.nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue: newValue
        });
    };
    DataTableHeaderCellComponent.prototype.calcSortClass = function (sortDir) {
        if (sortDir === types_1.SortDirection.asc) {
            return "sort-btn sort-asc " + this.sortAscendingIcon;
        }
        else if (sortDir === types_1.SortDirection.desc) {
            return "sort-btn sort-desc " + this.sortDescendingIcon;
        }
        else {
            return "sort-btn";
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableHeaderCellComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableHeaderCellComponent.prototype, "isTarget", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableHeaderCellComponent.prototype, "targetMarkerTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableHeaderCellComponent.prototype, "targetMarkerContext", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableHeaderCellComponent.prototype, "allRowsSelected", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableHeaderCellComponent.prototype, "column", null);
    __decorate([
        core_1.HostBinding('style.height.px'),
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableHeaderCellComponent.prototype, "sorts", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableHeaderCellComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableHeaderCellComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataTableHeaderCellComponent.prototype, "columnContextmenu", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
    __decorate([
        core_1.HostBinding('attr.title'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], DataTableHeaderCellComponent.prototype, "name", null);
    __decorate([
        core_1.HostBinding('style.minWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableHeaderCellComponent.prototype, "minWidth", null);
    __decorate([
        core_1.HostBinding('style.maxWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableHeaderCellComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableHeaderCellComponent.prototype, "width", null);
    __decorate([
        core_1.HostListener('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DataTableHeaderCellComponent.prototype, "onContextmenu", null);
    DataTableHeaderCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-header-cell',
            template: "\n    <div class=\"datatable-header-cell-template-wrap\">\n      <ng-template\n        *ngIf=\"isTarget\"\n        [ngTemplateOutlet]=\"targetMarkerTemplate\"\n        [ngTemplateOutletContext]=\"targetMarkerContext\">\n      </ng-template>\n      <label\n        *ngIf=\"isCheckboxable\"\n        class=\"datatable-checkbox\">\n        <input\n          type=\"checkbox\"\n          [checked]=\"allRowsSelected\"\n          (change)=\"select.emit(!allRowsSelected)\"\n        />\n      </label>\n      <span\n        *ngIf=\"!column.headerTemplate\"\n        class=\"datatable-header-cell-wrapper\">\n        <span\n          class=\"datatable-header-cell-label draggable\"\n          (click)=\"onSort()\"\n          [innerHTML]=\"name\">\n        </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\">\n      </ng-template>\n      <span\n        (click)=\"onSort()\"\n        [class]=\"sortClass\">\n      </span>\n    </div>\n  ",
            host: {
                class: 'datatable-header-cell'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], DataTableHeaderCellComponent);
    return DataTableHeaderCellComponent;
}());
exports.DataTableHeaderCellComponent = DataTableHeaderCellComponent;


/***/ }),

/***/ "./src/components/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var types_1 = __webpack_require__("./src/types/index.ts");
var utils_1 = __webpack_require__("./src/utils/index.ts");
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(cd) {
        this.cd = cd;
        this.sort = new core_1.EventEmitter();
        this.reorder = new core_1.EventEmitter();
        this.resize = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.columnContextmenu = new core_1.EventEmitter(false);
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
    }
    Object.defineProperty(DataTableHeaderComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            this._innerWidth = val;
            if (this._columns) {
                var colByPin = utils_1.columnsByPin(this._columns);
                this._columnGroupWidths = utils_1.columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerHeight", {
        get: function () {
            return this._headerHeight;
        },
        set: function (val) {
            if (val !== 'auto') {
                this._headerHeight = val + "px";
            }
            else {
                this._headerHeight = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (val) {
            this._columns = val;
            var colsByPin = utils_1.columnsByPin(val);
            this._columnsByPin = utils_1.columnsByPinArr(val);
            this._columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "offsetX", {
        get: function () { return this._offsetX; },
        set: function (val) {
            this._offsetX = val;
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderComponent.prototype.onLongPressStart = function (_a) {
        var event = _a.event, model = _a.model;
        model.dragging = true;
        this.dragEventTarget = event;
    };
    DataTableHeaderComponent.prototype.onLongPressEnd = function (_a) {
        var _this = this;
        var event = _a.event, model = _a.model;
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(function () {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            var column = _this._columns.find(function (c) { return c.$$id === model.$$id; });
            if (column) {
                column.dragging = false;
            }
        }, 5);
    };
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerWidth", {
        get: function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            return '100%';
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableHeaderComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    DataTableHeaderComponent.prototype.onColumnResized = function (width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column: column,
            prevValue: column.width,
            newValue: width
        });
    };
    DataTableHeaderComponent.prototype.onColumnReordered = function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, model = _a.model;
        var column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    };
    DataTableHeaderComponent.prototype.onTargetChanged = function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, initialIndex = _a.initialIndex;
        if (prevIndex || prevIndex === 0) {
            var oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            var newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = { class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft') };
            }
        }
    };
    DataTableHeaderComponent.prototype.getColumn = function (index) {
        var leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        var centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    };
    DataTableHeaderComponent.prototype.onSort = function (_a) {
        var column = _a.column, prevValue = _a.prevValue, newValue = _a.newValue;
        // if we are dragging don't sort!
        if (column.dragging)
            return;
        var sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts: sorts,
            column: column,
            prevValue: prevValue,
            newValue: newValue
        });
    };
    DataTableHeaderComponent.prototype.calcNewSorts = function (column, prevValue, newValue) {
        var idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        var sorts = this.sorts.map(function (s, i) {
            s = __assign({}, s);
            if (s.prop === column.prop)
                idx = i;
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === types_1.SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    };
    DataTableHeaderComponent.prototype.setStylesByGroup = function () {
        this._styleByGroup['left'] = this.calcStylesByGroup('left');
        this._styleByGroup['center'] = this.calcStylesByGroup('center');
        this._styleByGroup['right'] = this.calcStylesByGroup('right');
        this.cd.detectChanges();
    };
    DataTableHeaderComponent.prototype.calcStylesByGroup = function (group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            utils_1.translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            var totalDiff = widths.total - this.innerWidth;
            var offset = totalDiff * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableHeaderComponent.prototype, "dealsWithGroup", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableHeaderComponent.prototype, "targetMarkerTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableHeaderComponent.prototype, "innerWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DataTableHeaderComponent.prototype, "sorts", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableHeaderComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableHeaderComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableHeaderComponent.prototype, "reorderable", void 0);
    __decorate([
        core_1.HostBinding('style.height'),
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableHeaderComponent.prototype, "headerHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableHeaderComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableHeaderComponent.prototype, "offsetX", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "reorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "resize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableHeaderComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataTableHeaderComponent.prototype, "columnContextmenu", void 0);
    __decorate([
        core_1.HostBinding('style.width'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], DataTableHeaderComponent.prototype, "headerWidth", null);
    DataTableHeaderComponent = __decorate([
        core_1.Component({
            selector: 'datatable-header',
            template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\">\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\">\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\">\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
            host: {
                class: 'datatable-header'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], DataTableHeaderComponent);
    return DataTableHeaderComponent;
}());
exports.DataTableHeaderComponent = DataTableHeaderComponent;


/***/ }),

/***/ "./src/components/header/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/header/header.component.ts"));
__export(__webpack_require__("./src/components/header/header-cell.component.ts"));


/***/ }),

/***/ "./src/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/datatable.component.ts"));
__export(__webpack_require__("./src/components/header/index.ts"));
__export(__webpack_require__("./src/components/body/index.ts"));
__export(__webpack_require__("./src/components/footer/index.ts"));
__export(__webpack_require__("./src/components/columns/index.ts"));
__export(__webpack_require__("./src/components/row-detail/index.ts"));


/***/ }),

/***/ "./src/components/row-detail/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/components/row-detail/row-detail.directive.ts"));
__export(__webpack_require__("./src/components/row-detail/row-detail-template.directive.ts"));


/***/ }),

/***/ "./src/components/row-detail/row-detail-template.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var DatatableRowDetailTemplateDirective = /** @class */ (function () {
    function DatatableRowDetailTemplateDirective(template) {
        this.template = template;
    }
    DatatableRowDetailTemplateDirective = __decorate([
        core_1.Directive({
            selector: '[ngx-datatable-row-detail-template]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef])
    ], DatatableRowDetailTemplateDirective);
    return DatatableRowDetailTemplateDirective;
}());
exports.DatatableRowDetailTemplateDirective = DatatableRowDetailTemplateDirective;


/***/ }),

/***/ "./src/components/row-detail/row-detail.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var row_detail_template_directive_1 = __webpack_require__("./src/components/row-detail/row-detail-template.directive.ts");
var DatatableRowDetailDirective = /** @class */ (function () {
    function DatatableRowDetailDirective() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new core_1.EventEmitter();
    }
    /**
     * Toggle the expansion of the row
     */
    DatatableRowDetailDirective.prototype.toggleExpandRow = function (row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    };
    /**
     * API method to expand all the rows.
     */
    DatatableRowDetailDirective.prototype.expandAllRows = function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * API method to collapse all the rows.
     */
    DatatableRowDetailDirective.prototype.collapseAllRows = function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(row_detail_template_directive_1.DatatableRowDetailTemplateDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DatatableRowDetailDirective.prototype, "template", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableRowDetailDirective.prototype, "toggle", void 0);
    DatatableRowDetailDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-row-detail' })
    ], DatatableRowDetailDirective);
    return DatatableRowDetailDirective;
}());
exports.DatatableRowDetailDirective = DatatableRowDetailDirective;


/***/ }),

/***/ "./src/datatable.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var components_1 = __webpack_require__("./src/components/index.ts");
var directives_1 = __webpack_require__("./src/directives/index.ts");
var services_1 = __webpack_require__("./src/services/index.ts");
var NgxDatatableModule = /** @class */ (function () {
    function NgxDatatableModule() {
    }
    NgxDatatableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                services_1.ScrollbarHelper,
                services_1.DimensionsHelper
            ],
            declarations: [
                components_1.DataTableFooterTemplateDirective,
                directives_1.VisibilityDirective,
                directives_1.DraggableDirective,
                directives_1.ResizeableDirective,
                directives_1.OrderableDirective,
                directives_1.LongPressDirective,
                components_1.ScrollerComponent,
                components_1.DatatableComponent,
                components_1.DataTableColumnDirective,
                components_1.DataTableHeaderComponent,
                components_1.DataTableHeaderCellComponent,
                components_1.DataTableBodyComponent,
                components_1.DataTableFooterComponent,
                components_1.DataTablePagerComponent,
                components_1.ProgressBarComponent,
                components_1.DataTableBodyRowComponent,
                components_1.DataTableRowWrapperComponent,
                components_1.DatatableRowDetailDirective,
                components_1.DatatableGroupHeaderDirective,
                components_1.DatatableRowDetailTemplateDirective,
                components_1.DataTableBodyCellComponent,
                components_1.DataTableSelectionComponent,
                components_1.DataTableColumnHeaderDirective,
                components_1.DataTableColumnCellDirective,
                components_1.DatatableFooterDirective,
                components_1.DatatableGroupHeaderTemplateDirective,
                components_1.DataTableSummaryRowComponent,
            ],
            exports: [
                components_1.DatatableComponent,
                components_1.DatatableRowDetailDirective,
                components_1.DatatableGroupHeaderDirective,
                components_1.DatatableRowDetailTemplateDirective,
                components_1.DataTableColumnDirective,
                components_1.DataTableColumnHeaderDirective,
                components_1.DataTableColumnCellDirective,
                components_1.DataTableFooterTemplateDirective,
                components_1.DatatableFooterDirective,
                components_1.DataTablePagerComponent,
                components_1.DatatableGroupHeaderTemplateDirective
            ]
        })
    ], NgxDatatableModule);
    return NgxDatatableModule;
}());
exports.NgxDatatableModule = NgxDatatableModule;


/***/ }),

/***/ "./src/directives/draggable.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var rxjs_1 = __webpack_require__("rxjs");
var operators_1 = __webpack_require__("rxjs/operators");
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new core_1.EventEmitter();
        this.dragging = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    DraggableDirective.prototype.ngOnChanges = function (changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this._destroySubscription();
    };
    DraggableDirective.prototype.onMouseup = function (event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    DraggableDirective.prototype.onMousedown = function (event) {
        var _this = this;
        // we only want to drag the inner header text
        var isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            var mouseDownPos_1 = { x: event.clientX, y: event.clientY };
            var mouseup = rxjs_1.fromEvent(document, 'mouseup');
            this.subscription = mouseup
                .subscribe(function (ev) { return _this.onMouseup(ev); });
            var mouseMoveSub = rxjs_1.fromEvent(document, 'mousemove')
                .pipe(operators_1.takeUntil(mouseup))
                .subscribe(function (ev) { return _this.move(ev, mouseDownPos_1); });
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event: event,
                element: this.element,
                model: this.dragModel
            });
        }
    };
    DraggableDirective.prototype.move = function (event, mouseDownPos) {
        if (!this.isDragging)
            return;
        var x = event.clientX - mouseDownPos.x;
        var y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = x + "px";
        if (this.dragY)
            this.element.style.top = y + "px";
        this.element.classList.add('dragging');
        this.dragging.emit({
            event: event,
            element: this.element,
            model: this.dragModel
        });
    };
    DraggableDirective.prototype._destroySubscription = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragEventTarget", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragModel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DraggableDirective.prototype, "dragX", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DraggableDirective.prototype, "dragY", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DraggableDirective.prototype, "dragStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DraggableDirective.prototype, "dragging", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DraggableDirective.prototype, "dragEnd", void 0);
    DraggableDirective = __decorate([
        core_1.Directive({ selector: '[draggable]' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.DraggableDirective = DraggableDirective;


/***/ }),

/***/ "./src/directives/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/directives/draggable.directive.ts"));
__export(__webpack_require__("./src/directives/long-press.directive.ts"));
__export(__webpack_require__("./src/directives/orderable.directive.ts"));
__export(__webpack_require__("./src/directives/resizeable.directive.ts"));
__export(__webpack_require__("./src/directives/visibility.directive.ts"));


/***/ }),

/***/ "./src/directives/long-press.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var rxjs_1 = __webpack_require__("rxjs");
var operators_1 = __webpack_require__("rxjs/operators");
var events_1 = __webpack_require__("./src/events.ts");
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new core_1.EventEmitter();
        this.longPressing = new core_1.EventEmitter();
        this.longPressEnd = new core_1.EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    Object.defineProperty(LongPressDirective.prototype, "press", {
        get: function () { return this.pressing; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongPressDirective.prototype, "isLongPress", {
        get: function () {
            return this.isLongPressing;
        },
        enumerable: true,
        configurable: true
    });
    LongPressDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        var target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        var mouseup = rxjs_1.fromEvent(document, 'mouseup');
        this.subscription = mouseup.subscribe(function (ev) { return _this.onMouseup(); });
        this.timeout = setTimeout(function () {
            _this.isLongPressing = true;
            _this.longPressStart.emit({
                event: event,
                model: _this.pressModel
            });
            _this.subscription.add(rxjs_1.fromEvent(document, 'mousemove')
                .pipe(operators_1.takeUntil(mouseup))
                .subscribe(function (mouseEvent) { return _this.onMouseMove(mouseEvent); }));
            _this.loop(event);
        }, this.duration);
        this.loop(event);
    };
    LongPressDirective.prototype.onMouseMove = function (event) {
        if (this.pressing && !this.isLongPressing) {
            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
            var yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    };
    LongPressDirective.prototype.loop = function (event) {
        var _this = this;
        if (this.isLongPressing) {
            this.timeout = setTimeout(function () {
                _this.longPressing.emit({
                    event: event,
                    model: _this.pressModel
                });
                _this.loop(event);
            }, 50);
        }
    };
    LongPressDirective.prototype.endPress = function () {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    };
    LongPressDirective.prototype.onMouseup = function () {
        this.endPress();
    };
    LongPressDirective.prototype.ngOnDestroy = function () {
        this._destroySubscription();
    };
    LongPressDirective.prototype._destroySubscription = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LongPressDirective.prototype, "pressEnabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LongPressDirective.prototype, "pressModel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LongPressDirective.prototype, "duration", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], LongPressDirective.prototype, "longPressStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], LongPressDirective.prototype, "longPressing", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], LongPressDirective.prototype, "longPressEnd", void 0);
    __decorate([
        core_1.HostBinding('class.press'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], LongPressDirective.prototype, "press", null);
    __decorate([
        core_1.HostBinding('class.longpress'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], LongPressDirective.prototype, "isLongPress", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LongPressDirective.prototype, "onMouseDown", null);
    LongPressDirective = __decorate([
        core_1.Directive({ selector: '[long-press]' })
    ], LongPressDirective);
    return LongPressDirective;
}());
exports.LongPressDirective = LongPressDirective;


/***/ }),

/***/ "./src/directives/orderable.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var draggable_directive_1 = __webpack_require__("./src/directives/draggable.directive.ts");
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
var OrderableDirective = /** @class */ (function () {
    function OrderableDirective(differs, document) {
        this.document = document;
        this.reorder = new core_1.EventEmitter();
        this.targetChanged = new core_1.EventEmitter();
        this.differ = differs.find({}).create();
    }
    OrderableDirective.prototype.ngAfterContentInit = function () {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    };
    OrderableDirective.prototype.ngOnDestroy = function () {
        this.draggables.forEach(function (d) {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    };
    OrderableDirective.prototype.updateSubscriptions = function () {
        var _this = this;
        var diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            var subscribe = function (_a) {
                var currentValue = _a.currentValue, previousValue = _a.previousValue;
                unsubscribe_1({ previousValue: previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(_this.onDragStart.bind(_this));
                    currentValue.dragging.subscribe(_this.onDragging.bind(_this));
                    currentValue.dragEnd.subscribe(_this.onDragEnd.bind(_this));
                }
            };
            var unsubscribe_1 = function (_a) {
                var previousValue = _a.previousValue;
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe.bind(this));
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe_1.bind(this));
        }
    };
    OrderableDirective.prototype.onDragStart = function () {
        this.positions = {};
        var i = 0;
        for (var _i = 0, _a = this.draggables.toArray(); _i < _a.length; _i++) {
            var dragger = _a[_i];
            var elm = dragger.element;
            var left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left: left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    };
    OrderableDirective.prototype.onDragging = function (_a) {
        var element = _a.element, model = _a.model, event = _a.event;
        var prevPos = this.positions[model.prop];
        var target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    };
    OrderableDirective.prototype.onDragEnd = function (_a) {
        var element = _a.element, model = _a.model, event = _a.event;
        var prevPos = this.positions[model.prop];
        var target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model: model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    };
    OrderableDirective.prototype.isTarget = function (model, event) {
        var i = 0;
        var x = event.x || event.clientX;
        var y = event.y || event.clientY;
        var targets = this.document.elementsFromPoint(x, y);
        var _loop_1 = function (prop) {
            // current column position which throws event.
            var pos = this_1.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find(function (el) { return el === pos.element; })) {
                return { value: {
                        pos: pos,
                        i: i
                    } };
            }
            i++;
        };
        var this_1 = this;
        for (var prop in this.positions) {
            var state_1 = _loop_1(prop);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    OrderableDirective.prototype.createMapDiffs = function () {
        return this.draggables.toArray()
            .reduce(function (acc, curr) {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OrderableDirective.prototype, "reorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], OrderableDirective.prototype, "targetChanged", void 0);
    __decorate([
        core_1.ContentChildren(draggable_directive_1.DraggableDirective, { descendants: true }),
        __metadata("design:type", core_1.QueryList)
    ], OrderableDirective.prototype, "draggables", void 0);
    OrderableDirective = __decorate([
        core_1.Directive({ selector: '[orderable]' }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.KeyValueDiffers, Object])
    ], OrderableDirective);
    return OrderableDirective;
}());
exports.OrderableDirective = OrderableDirective;


/***/ }),

/***/ "./src/directives/resizeable.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var rxjs_1 = __webpack_require__("rxjs");
var events_1 = __webpack_require__("./src/events.ts");
var operators_1 = __webpack_require__("rxjs/operators");
var ResizeableDirective = /** @class */ (function () {
    function ResizeableDirective(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new core_1.EventEmitter();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ResizeableDirective.prototype.ngAfterViewInit = function () {
        var renderer2 = this.renderer;
        var node = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(node, 'resize-handle');
        }
        else {
            renderer2.addClass(node, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, node);
    };
    ResizeableDirective.prototype.ngOnDestroy = function () {
        this._destroySubscription();
    };
    ResizeableDirective.prototype.onMouseup = function () {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    };
    ResizeableDirective.prototype.onMousedown = function (event) {
        var _this = this;
        var isHandle = (event.target).classList.contains('resize-handle');
        var initialWidth = this.element.clientWidth;
        var mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            var mouseup = rxjs_1.fromEvent(document, 'mouseup');
            this.subscription = mouseup
                .subscribe(function (ev) { return _this.onMouseup(); });
            var mouseMoveSub = rxjs_1.fromEvent(document, 'mousemove')
                .pipe(operators_1.takeUntil(mouseup))
                .subscribe(function (e) { return _this.move(e, initialWidth, mouseDownScreenX); });
            this.subscription.add(mouseMoveSub);
        }
    };
    ResizeableDirective.prototype.move = function (event, initialWidth, mouseDownScreenX) {
        var movementX = event.screenX - mouseDownScreenX;
        var newWidth = initialWidth + movementX;
        var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = newWidth + "px";
        }
    };
    ResizeableDirective.prototype._destroySubscription = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ResizeableDirective.prototype, "resizeEnabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ResizeableDirective.prototype, "minWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ResizeableDirective.prototype, "maxWidth", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ResizeableDirective.prototype, "resize", void 0);
    __decorate([
        core_1.HostListener('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ResizeableDirective.prototype, "onMousedown", null);
    ResizeableDirective = __decorate([
        core_1.Directive({
            selector: '[resizeable]',
            host: {
                '[class.resizeable]': 'resizeEnabled'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], ResizeableDirective);
    return ResizeableDirective;
}());
exports.ResizeableDirective = ResizeableDirective;


/***/ }),

/***/ "./src/directives/visibility.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new core_1.EventEmitter();
    }
    VisibilityDirective.prototype.ngOnInit = function () {
        this.runCheck();
    };
    VisibilityDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    VisibilityDirective.prototype.onVisibilityChange = function () {
        var _this = this;
        // trigger zone recalc for columns
        this.zone.run(function () {
            _this.isVisible = true;
            _this.visible.emit(true);
        });
    };
    VisibilityDirective.prototype.runCheck = function () {
        var _this = this;
        var check = function () {
            // https://davidwalsh.name/offsetheight-visibility
            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
            if (offsetHeight && offsetWidth) {
                clearTimeout(_this.timeout);
                _this.onVisibilityChange();
            }
            else {
                clearTimeout(_this.timeout);
                _this.zone.runOutsideAngular(function () {
                    _this.timeout = setTimeout(function () { return check(); }, 50);
                });
            }
        };
        this.timeout = setTimeout(function () { return check(); });
    };
    __decorate([
        core_1.HostBinding('class.visible'),
        __metadata("design:type", Boolean)
    ], VisibilityDirective.prototype, "isVisible", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], VisibilityDirective.prototype, "visible", void 0);
    VisibilityDirective = __decorate([
        core_1.Directive({ selector: '[visibilityObserver]' }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
    ], VisibilityDirective);
    return VisibilityDirective;
}());
exports.VisibilityDirective = VisibilityDirective;


/***/ }),

/***/ "./src/events.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:variable-name */
exports.MouseEvent = (window || global).MouseEvent;
exports.KeyboardEvent = (window || global).KeyboardEvent;
exports.Event = (window || global).Event;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/datatable.module.ts"));
__export(__webpack_require__("./src/types/index.ts"));
__export(__webpack_require__("./src/components/index.ts"));
__export(__webpack_require__("./src/services/index.ts"));


/***/ }),

/***/ "./src/services/dimensions-helper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
var DimensionsHelper = /** @class */ (function () {
    function DimensionsHelper() {
    }
    DimensionsHelper.prototype.getDimensions = function (element) {
        return element.getBoundingClientRect();
    };
    DimensionsHelper = __decorate([
        core_1.Injectable()
    ], DimensionsHelper);
    return DimensionsHelper;
}());
exports.DimensionsHelper = DimensionsHelper;


/***/ }),

/***/ "./src/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/services/scrollbar-helper.service.ts"));
__export(__webpack_require__("./src/services/dimensions-helper.service.ts"));


/***/ }),

/***/ "./src/services/scrollbar-helper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
var ScrollbarHelper = /** @class */ (function () {
    function ScrollbarHelper(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    ScrollbarHelper.prototype.getWidth = function () {
        var outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        var inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    };
    ScrollbarHelper = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], ScrollbarHelper);
    return ScrollbarHelper;
}());
exports.ScrollbarHelper = ScrollbarHelper;


/***/ }),

/***/ "./src/types/click.type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickType;
(function (ClickType) {
    ClickType["single"] = "single";
    ClickType["double"] = "double";
})(ClickType = exports.ClickType || (exports.ClickType = {}));


/***/ }),

/***/ "./src/types/column-mode.type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnMode;
(function (ColumnMode) {
    ColumnMode["standard"] = "standard";
    ColumnMode["flex"] = "flex";
    ColumnMode["force"] = "force";
})(ColumnMode = exports.ColumnMode || (exports.ColumnMode = {}));


/***/ }),

/***/ "./src/types/contextmenu.type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContextmenuType;
(function (ContextmenuType) {
    ContextmenuType["header"] = "header";
    ContextmenuType["body"] = "body";
})(ContextmenuType = exports.ContextmenuType || (exports.ContextmenuType = {}));


/***/ }),

/***/ "./src/types/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/types/column-mode.type.ts"));
__export(__webpack_require__("./src/types/sort.type.ts"));
__export(__webpack_require__("./src/types/sort-direction.type.ts"));
__export(__webpack_require__("./src/types/selection.type.ts"));
__export(__webpack_require__("./src/types/click.type.ts"));
__export(__webpack_require__("./src/types/contextmenu.type.ts"));


/***/ }),

/***/ "./src/types/selection.type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType = exports.SelectionType || (exports.SelectionType = {}));


/***/ }),

/***/ "./src/types/sort-direction.type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));


/***/ }),

/***/ "./src/types/sort.type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortType;
(function (SortType) {
    SortType["single"] = "single";
    SortType["multi"] = "multi";
})(SortType = exports.SortType || (exports.SortType = {}));


/***/ }),

/***/ "./src/utils/camel-case.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
exports.camelCase = camelCase;
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
    return str
        .replace(/([A-Z])/g, function (match) { return " " + match; })
        .replace(/^./, function (match) { return match.toUpperCase(); });
}
exports.deCamelCase = deCamelCase;


/***/ }),

/***/ "./src/utils/column-helper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
var id_1 = __webpack_require__("./src/utils/id.ts");
var column_prop_getters_1 = __webpack_require__("./src/utils/column-prop-getters.ts");
/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var column = columns_1[_i];
        if (!column.$$id) {
            column.$$id = id_1.id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camel_case_1.camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = column_prop_getters_1.getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = camel_case_1.deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
    }
}
exports.setColumnDefaults = setColumnDefaults;
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
exports.isNullOrUndefined = isNullOrUndefined;
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
    var result = [];
    for (var _i = 0, templates_1 = templates; _i < templates_1.length; _i++) {
        var temp = templates_1[_i];
        var col = {};
        var props = Object.getOwnPropertyNames(temp);
        for (var _a = 0, props_1 = props; _a < props_1.length; _a++) {
            var prop = props_1[_a];
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}
exports.translateTemplates = translateTemplates;


/***/ }),

/***/ "./src/utils/column-prop-getters.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// maybe rename this file to prop-getters.ts
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Always returns the empty string ''
 * @returns {string}
 */
function emptyStringGetter() {
    return '';
}
exports.emptyStringGetter = emptyStringGetter;
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
    if (prop == null)
        return emptyStringGetter;
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
exports.getterForProp = getterForProp;
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns {any} or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null)
        return '';
    // mimic behavior of deepValueGetter
    if (!row || index == null)
        return row;
    var value = row[index];
    if (value == null)
        return '';
    return value;
}
exports.numericIndexGetter = numericIndexGetter;
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 * @returns {any}
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null)
        return '';
    if (!obj || !fieldName)
        return obj;
    var value = obj[fieldName];
    if (value == null)
        return '';
    return value;
}
exports.shallowValueGetter = shallowValueGetter;
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {object} obj
 * @param {string} path
 */
function deepValueGetter(obj, path) {
    if (obj == null)
        return '';
    if (!obj || !path)
        return obj;
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    var current = obj[path];
    if (current !== undefined)
        return current;
    current = obj;
    var split = path.split('.');
    if (split.length) {
        for (var i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null)
                return '';
        }
    }
    return current;
}
exports.deepValueGetter = deepValueGetter;


/***/ }),

/***/ "./src/utils/column.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
    var ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
            var col = cols_1[_i];
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
exports.columnsByPin = columnsByPin;
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
exports.columnGroupWidths = columnGroupWidths;
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
    var totalWidth = 0;
    if (columns) {
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var c = columns_1[_i];
            var has = prop && c[prop];
            var width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
exports.columnTotalWidth = columnTotalWidth;
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
    var totalWidth = 0;
    for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
        var column = columns_2[_i];
        var has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
exports.columnsTotalWidth = columnsTotalWidth;
function columnsByPinArr(val) {
    var colsByPinArr = [];
    var colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}
exports.columnsByPinArr = columnsByPinArr;


/***/ }),

/***/ "./src/utils/elm-from-point.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
    var elements = [];
    var previousPointerEvents = [];
    var current; // TODO: window.getComputedStyle should be used with inferred type (Element)
    var i;
    var d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
exports.elementsFromPoint = elementsFromPoint;
/*tslint:enable*/


/***/ }),

/***/ "./src/utils/id.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}
exports.id = id;


/***/ }),

/***/ "./src/utils/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/utils/id.ts"));
__export(__webpack_require__("./src/utils/column.ts"));
__export(__webpack_require__("./src/utils/column-prop-getters.ts"));
__export(__webpack_require__("./src/utils/camel-case.ts"));
__export(__webpack_require__("./src/utils/keys.ts"));
__export(__webpack_require__("./src/utils/math.ts"));
__export(__webpack_require__("./src/utils/prefixes.ts"));
__export(__webpack_require__("./src/utils/selection.ts"));
__export(__webpack_require__("./src/utils/translate.ts"));
__export(__webpack_require__("./src/utils/throttle.ts"));
__export(__webpack_require__("./src/utils/sort.ts"));
__export(__webpack_require__("./src/utils/row-height-cache.ts"));
__export(__webpack_require__("./src/utils/column-helper.ts"));
__export(__webpack_require__("./src/utils/elm-from-point.ts"));


/***/ }),

/***/ "./src/utils/keys.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Keys;
(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(Keys = exports.Keys || (exports.Keys = {}));


/***/ }),

/***/ "./src/utils/math.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var column_1 = __webpack_require__("./src/utils/column.ts");
/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
    var totalFlexGrow = 0;
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var c = columns_1[_i];
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
exports.getTotalFlexGrow = getTotalFlexGrow;
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    var columnsWidth = column_1.columnsTotalWidth(allColumns);
    var totalFlexGrow = getTotalFlexGrow(allColumns);
    var colsByGroup = column_1.columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
exports.adjustColumnWidths = adjustColumnWidths;
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (var attr in colsByGroup) {
        for (var _i = 0, _a = colsByGroup[attr]; _i < _a.length; _i++) {
            var column = _a[_i];
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    var hasMinWidth = {};
    var remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        var widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (var attr in colsByGroup) {
            for (var _b = 0, _c = colsByGroup[attr]; _b < _c.length; _b++) {
                var column = _c[_b];
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    var newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth) {
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    var columnsToResize = allColumns
        .slice(startIdx + 1, allColumns.length)
        .filter(function (c) {
        return c.canAutoResize !== false;
    });
    for (var _i = 0, columnsToResize_1 = columnsToResize; _i < columnsToResize_1.length; _i++) {
        var column = columnsToResize_1[_i];
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    var additionWidthPerColumn = 0;
    var exceedsWindow = false;
    var contentWidth = getContentWidth(allColumns, defaultColWidth);
    var remainingWidth = expectedWidth - contentWidth;
    var columnsProcessed = [];
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (var _a = 0, columnsToResize_2 = columnsToResize; _a < columnsToResize_2.length; _a++) {
            var column = columnsToResize_2[_a];
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > 0 && columnsToResize.length !== 0);
}
exports.forceFillColumnWidths = forceFillColumnWidths;
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (var _i = 0, columnsProcessed_1 = columnsProcessed; _i < columnsProcessed_1.length; _i++) {
        var column = columnsProcessed_1[_i];
        var index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth) {
    if (defaultColWidth === void 0) { defaultColWidth = 300; }
    var contentWidth = 0;
    for (var _i = 0, allColumns_1 = allColumns; _i < allColumns_1.length; _i++) {
        var column = allColumns_1[_i];
        contentWidth += (column.width || defaultColWidth);
    }
    return contentWidth;
}


/***/ }),

/***/ "./src/utils/prefixes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
var cache = {};
var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var prefix = function () {
    var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    var match = typeof styles !== 'undefined' ?
        Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
    var pre = match !== null ? match[1] : undefined;
    var dom = typeof pre !== 'undefined' ? ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom ? {
        dom: dom,
        lowercase: pre,
        css: "-" + pre + "-",
        js: pre[0].toUpperCase() + pre.substr(1)
    } : undefined;
}();
function getVendorPrefixedName(property) {
    var name = camel_case_1.camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}
exports.getVendorPrefixedName = getVendorPrefixedName;


/***/ }),

/***/ "./src/utils/row-height-cache.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
var RowHeightCache = /** @class */ (function () {
    function RowHeightCache() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    RowHeightCache.prototype.clearCache = function () {
        this.treeArray = [];
    };
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    RowHeightCache.prototype.initCache = function (details) {
        var rows = details.rows, rowHeight = details.rowHeight, detailRowHeight = details.detailRowHeight, externalVirtual = details.externalVirtual, rowCount = details.rowCount, rowIndexes = details.rowIndexes, rowExpansions = details.rowExpansions;
        var isFn = typeof rowHeight === 'function';
        var isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (" + rowHeight + ") when 'scrollbarV' is enabled.");
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (" + detailRowHeight + ") when 'scrollbarV' is enabled.");
        }
        var n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (var i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (var i = 0; i < n; ++i) {
            var row = rows[i];
            var currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            var expanded = rowExpansions.get(row);
            if (row && expanded === 1) {
                if (isDetailFn) {
                    var index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    };
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    RowHeightCache.prototype.getRowIndex = function (scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    };
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    RowHeightCache.prototype.update = function (atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error("Update at index " + atRowIndex + " with value " + byRowHeight + " failed:\n        Row Height cache not initialized.");
        }
        var n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= (atRowIndex + 1);
        }
    };
    /**
     * Range Sum query from 1 to the rowIndex
     */
    RowHeightCache.prototype.query = function (atIndex) {
        if (!this.treeArray.length) {
            throw new Error("query at index " + atIndex + " failed: Fenwick tree array not initialized.");
        }
        var sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    };
    /**
     * Find the total height between 2 row indexes
     */
    RowHeightCache.prototype.queryBetween = function (atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    };
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    RowHeightCache.prototype.calcRowIndex = function (sum) {
        if (!this.treeArray.length)
            return 0;
        var pos = -1;
        var dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        var highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            var nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    };
    return RowHeightCache;
}());
exports.RowHeightCache = RowHeightCache;


/***/ }),

/***/ "./src/utils/selection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function selectRows(selected, row, comparefn) {
    var selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
exports.selectRows = selectRows;
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    var reverse = index < prevIndex;
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var greater = i >= prevIndex && i <= index;
        var lesser = i <= prevIndex && i >= index;
        var range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}
exports.selectRowsBetween = selectRowsBetween;


/***/ }),

/***/ "./src/utils/sort.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__("./src/types/index.ts");
var column_prop_getters_1 = __webpack_require__("./src/utils/column-prop-getters.ts");
/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
    if (sortType === types_1.SortType.single) {
        if (current === types_1.SortDirection.asc) {
            return types_1.SortDirection.desc;
        }
        else {
            return types_1.SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return types_1.SortDirection.asc;
        }
        else if (current === types_1.SortDirection.asc) {
            return types_1.SortDirection.desc;
        }
        else if (current === types_1.SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
exports.nextSortDir = nextSortDir;
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
exports.orderByComparator = orderByComparator;
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return rows.slice();
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    var rowToIndexMap = new Map();
    rows.forEach(function (row, index) { return rowToIndexMap.set(row, index); });
    var temp = rows.slice();
    var cols = columns.reduce(function (obj, col) {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    var cachedDirs = dirs.map(function (dir) {
        var prop = dir.prop;
        return {
            prop: prop,
            dir: dir.dir,
            valueGetter: column_prop_getters_1.getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (var _i = 0, cachedDirs_1 = cachedDirs; _i < cachedDirs_1.length; _i++) {
            var cachedDir = cachedDirs_1[_i];
            // Get property and valuegetters for column to be sorted
            var prop = cachedDir.prop, valueGetter = cachedDir.valueGetter;
            // Get A and B cell values from rows based on properties of the columns
            var propA = valueGetter(rowA, prop);
            var propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            var comparison = cachedDir.dir !== types_1.SortDirection.desc ?
                cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) :
                -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}
exports.sortRows = sortRows;


/***/ }),

/***/ "./src/utils/throttle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Throttle a function
 */
function throttle(func, wait, options) {
    options = options || {};
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        var now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
exports.throttle = throttle;
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}
exports.throttleable = throttleable;


/***/ }),

/***/ "./src/utils/translate.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var prefixes_1 = __webpack_require__("./src/utils/prefixes.ts");
var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
// browser detection and prefixing tools
var transform = typeof window !== 'undefined' ? prefixes_1.getVendorPrefixedName('transform') : undefined;
var backfaceVisibility = typeof window !== 'undefined' ? prefixes_1.getVendorPrefixedName('backfaceVisibility') : undefined;
var hasCSSTransforms = typeof window !== 'undefined' ? !!prefixes_1.getVendorPrefixedName('transform') : undefined;
var hasCSS3DTransforms = typeof window !== 'undefined' ? !!prefixes_1.getVendorPrefixedName('perspective') : undefined;
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
var isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(" + x + "px, " + y + "px, 0)";
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camel_case_1.camelCase(transform)] = "translate(" + x + "px, " + y + "px)";
        }
    }
    else {
        styles.top = y + "px";
        styles.left = x + "px";
    }
}
exports.translateXY = translateXY;


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;

/***/ }),

/***/ "rxjs":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map

/***/ }),

/***/ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js ***!
  \*****************************************************************/
/*! exports provided: NgxLoadingService, NgxLoadingComponent, NgxLoadingModule, NgxLoadingConfig, ngxLoadingAnimationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingService", function() { return NgxLoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingComponent", function() { return NgxLoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingModule", function() { return NgxLoadingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingConfig", function() { return NgxLoadingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxLoadingAnimationTypes", function() { return ngxLoadingAnimationTypes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var NgxLoadingConfig = /** @class */ (function () {
    /**
     * @param {?=} config
     */
    function NgxLoadingConfig(config) {
        if (config === void 0) { config = {}; }
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
    return NgxLoadingConfig;
}());
var ngxLoadingAnimationTypes = {
    chasingDots: 'chasing-dots',
    circle: 'sk-circle',
    circleSwish: 'circleSwish',
    cubeGrid: 'sk-cube-grid',
    doubleBounce: 'double-bounce',
    none: 'none',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rotatingPlane: 'rotating-plane',
    threeBounce: 'three-bounce',
    wanderingCubes: 'wandering-cubes'
};
var NgxLoadingService = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function NgxLoadingService(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
    return NgxLoadingService;
}());
NgxLoadingService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
NgxLoadingService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['loadingConfig',] },] },
]; };
var NgxLoadingComponent = /** @class */ (function () {
    /**
     * @param {?} LoadingService
     * @param {?} changeDetectorRef
     */
    function NgxLoadingComponent(LoadingService, changeDetectorRef) {
        this.LoadingService = LoadingService;
        this.changeDetectorRef = changeDetectorRef;
        this.config = new NgxLoadingConfig();
        this.defaultConfig = {
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        };
        this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    }
    /**
     * @return {?}
     */
    NgxLoadingComponent.prototype.ngOnInit = function () {
        this.setupConfig();
    };
    /**
     * @return {?}
     */
    NgxLoadingComponent.prototype.setupConfig = function () {
        for (var /** @type {?} */ option in this.defaultConfig) {
            if (typeof this.config[option] === 'boolean') {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
            else {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
        }
    };
    /**
     * @param {?} show
     * @return {?}
     */
    NgxLoadingComponent.prototype.setShow = function (show) {
        this.show = show;
        this.changeDetectorRef.markForCheck();
    };
    return NgxLoadingComponent;
}());
NgxLoadingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-loading',
                template: "\n    <div *ngIf=\"show\">\n      <div class=\"backdrop\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}\"></div>\n\n      <div [ngSwitch]=\"config?.animationType\">\n        <div class=\"spinner-circle\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circle\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"\n          [ngStyle]=\"{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}\">\n        </div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-sk-rotateplane\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rotatingPlane\" [ngStyle]=\"{'background-color': config?.primaryColour}\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div class=\"spinner-rectangle-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rectangleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"rect1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-wandering-cubes\" *ngSwitchCase=\"ngxLoadingAnimationTypes.wanderingCubes\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"cube2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-double-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.doubleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-pulse\" *ngSwitchCase=\"ngxLoadingAnimationTypes.pulse\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n\n        <div class=\"spinner-chasing-dots\" *ngSwitchCase=\"ngxLoadingAnimationTypes.chasingDots\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"dot1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"dot2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-circle-swish\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circleSwish\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': config?.primaryColour}\"></div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.none\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div *ngSwitchDefault class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n          <div class=\"bounce3\" [ngStyle]=\"{'background-color': config?.tertiaryColour}\"></div>\n        </div>\n\n        <ng-container *ngIf=\"template\">\n            <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  ",
                styles: [
                    "\n      .backdrop {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      /* Spinner Circle styles */\n      .spinner-circle,\n      .spinner-circle:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      /* Circle Swish styles */\n      .spinner-circle-swish {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      /* Cube Grid styles */\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      /* Double Bounce styles */\n      .spinner-double-bounce {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1, .double-bounce2 {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      /* Pulse styles */\n      .spinner-pulse {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      /* Three Bounce styles */\n      .spinner-three-bounce {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce > div {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce .bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce .bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      /* Rotate Plane styles */\n      .spinner-sk-rotateplane {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      /* Rectangle Bounce styles*/\n      .spinner-rectangle-bounce {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce > div {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce .rect2 {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce .rect3 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce .rect4 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce .rect5 {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      /* Wandering Cubes styles */\n      .spinner-wandering-cubes {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1, .cube2 {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      /* Circle styles */\n      .sk-circle {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle .sk-child:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle .sk-circle2 {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle .sk-circle3 {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle .sk-circle4 {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle .sk-circle5 {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle .sk-circle6 {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle .sk-circle7 {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle .sk-circle8 {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle .sk-circle9 {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle .sk-circle10 {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle .sk-circle11 {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle .sk-circle12 {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle .sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle .sk-circle3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle .sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle .sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle .sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle .sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle .sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle .sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle .sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle .sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle .sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        /* Chasing Dots styles */\n        .spinner-chasing-dots {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1, .dot2 {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2 {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen {\n          position: fixed;\n          position: -ms-page;\n      }\n    "
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxLoadingComponent.ctorParameters = function () { return [
    { type: NgxLoadingService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
]; };
NgxLoadingComponent.propDecorators = {
    'show': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'template': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var NgxLoadingModule = /** @class */ (function () {
    function NgxLoadingModule() {
    }
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    NgxLoadingModule.forRoot = function (loadingConfig) {
        return {
            ngModule: NgxLoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    };
    return NgxLoadingModule;
}());
NgxLoadingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [NgxLoadingComponent],
                exports: [NgxLoadingComponent],
                providers: [NgxLoadingService]
            },] },
];
/**
 * @nocollapse
 */
NgxLoadingModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-loading.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/pages/membership/membership.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/membership/membership.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <style>\r\n        .swal2-container {\r\n          z-index:1000000;\r\n         }\r\n    </style>\r\n\r\n\r\n\r\n    <div class=\"row mb-1\">\r\n        <div class=\"col\">\r\n\r\n            <!-- <div class=\"input-group mb-3 box-shadow\"> \r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i class=\"fa fa-search\"></i></span>\r\n                </div>                   \r\n                <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Buscar por Num. de empleado, Nombre(s), Ap. paterno, Ap materno, Usuario ó Agencia\" class=\"form-control border-0\">\r\n                <div class=\"input-group-append\">\r\n                    <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-list\"></i></span>\r\n                </div>\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <button class=\"mt-3 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"spinners = !spinners\">\r\n        Mostrar solo activos - {{spinners ? \"SI\" : \"NO\"}}\r\n    </button>   -->\r\n    <div class=\"row mb-1\">\r\n\r\n        <div class=\"col-sm-10\">\r\n            <div class=\"form-group\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\"\r\n                            class=\"custom-control-input checkbox-primary\"\r\n                            id=\"soloActivos\"\r\n                            (change)=\"soloActivos($event)\"\r\n                            checked=\"mostrarActivos\"\r\n                            name=\"soloActivos\"\r\n                            [(ngModel)]=\"mostrarActivos\"\r\n                    >\r\n                    <label class=\"custom-control-label\" for=\"soloActivos\">Mostrar solo usuarios activos</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"text-right mb-1 \">\r\n                <button *ngIf=\"true\" type=\"button\" class=\"btn btn-success mb-1\" (click)=\"openExpPend(expPendientes)\">Ver expedientes pendientes</button>\r\n                <button *ngIf=\"false\" type=\"button\" class=\"btn btn-danger mb-1\" (click)=\"openExpPend(expPendientes)\">Ver expedientes pendientes</button>\r\n            </div> \r\n        </div>   \r\n    </div>\r\n\r\n    <div class=\"my-container\">\r\n        <ng-template #customLoadingTemplate>\r\n            <div class=\"custom-class text-danger\">\r\n                <h3>\r\n                    Cargando...\r\n                </h3>\r\n            </div>\r\n        </ng-template>\r\n                 \r\n        <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n            <!-- //... -->\r\n    </div>\r\n    \r\n    <div *ngIf=\"type=='list'\" class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n\r\n                \r\n\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Número de empleado</th>\r\n                            <th>Nombre(s)</th> \r\n                            <th>Apellido paterno</th>\r\n                            <th>Apellido materno</th>\r\n                            <th>Usuario</th>\r\n                            <th>Estatus</th>\r\n                            <th>Es MP</th>\r\n                            <th>Agencia</th>\r\n                            <th>Roles</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchNumero\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchNombre\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchApPaterno\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchApMaterno\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchUsuario\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchAgencia\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td>\r\n                                <button class=\"btn btn-success btn-block\" (click)=\"recargarFuncionarios()\"><i class=\"fa fa-refresh\"></i> Actualizar</button>\r\n                            </td>\r\n                            <td></td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let funcionario of funcionarios \r\n                                                                    | NumeroempSearchPipe : { cNumeroEmpleado: searchNumero }\r\n                                                                    | NombreSearchPipe : { cNombreFuncionario: searchNombre }\r\n                                                                    | AppaternoSearchPipe : { cApellidoPaternoFuncionario: searchApPaterno }\r\n                                                                    | ApmaternoSearchPipe : { cApellidoMaternoFuncionario: searchApMaterno }\r\n                                                                    | NomusuarioSearchPipe : { cClaveUsuario: searchUsuario }\r\n                                                                    | AgenciaSearchPipe : { cNombre: searchAgencia }\r\n                                                                    | ActivosSearchPipe : {bEsActivo: searchActivos}\r\n                                                                    | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNumeroEmpleado }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombreFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoPaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoMaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cClaveUsuario }}</td>\r\n                            <td class=\"align-middle\">\r\n                                <i *ngIf=\"funcionario.bEsActivo === 1\" class=\"fa fa-user mr-2 text-success\" placement=\"bottom\" [ngbTooltip]=\"'Activo, haga clic para desactivar'\" (click)=\"controlActivos(funcionario)\"></i>\r\n                                <i *ngIf=\"funcionario.bEsActivo != 1\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'Inactivo, haga clic para activar'\" (click)=\"controlInactivo(funcionario)\"></i>\r\n                            </td>\r\n                            <td class=\"align-middle\">\r\n                                <div *ngIf=\"funcionario.bEsActivo === 1\">\r\n                                    <i *ngIf=\"funcionario.esMP === 1\" class=\"fa fa-check mr-2 text-success\" (click)=\"activarMP(funcionario)\" placement=\"bottom\" [ngbTooltip]=\"'Es MP'\"></i>\r\n                                    <i *ngIf=\"funcionario.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" (click)=\"activarMP(funcionario)\" placement=\"bottom\" [ngbTooltip]=\"'No es MP'\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"funcionario.bEsActivo != 1\">\r\n                                    <i *ngIf=\"funcionario.esMP === 1\" class=\"fa fa-check mr-2 text-success\" (click)=\"desactivarMP()\" placement=\"bottom\" [ngbTooltip]=\"'Es MP'\"></i>\r\n                                    <i *ngIf=\"funcionario.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" (click)=\"desactivarMP()\" placement=\"bottom\" [ngbTooltip]=\"'No es MP'\"></i>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombre }}</td>\r\n                            <td><button #ver value=\"{{funcionario.iClaveFuncionario}}\" class=\"btn btn-secondary\" (click)=\"llamarRoles(ver.value)\">Ver Roles</button></td>\r\n                            <td class=\"align-middle\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <button [disabled]=\"funcionario.bEsActivo != 1\" class=\"btn btn-secondary btn-sm\" (click)=\"openModal(modalContent, funcionario)\"><i class=\"fa fa-check\"></i></button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <!-- <tr *ngFor=\"let funcionario of funcionarios | UserSearchPipe : {cNombreFuncionario: searchText,\r\n                                                                                        cApellidoPaternoFuncionario: searchText,\r\n                                                                                        cApellidoMaternoFuncionario: searchText,\r\n                                                                                        cClaveUsuario: searchText,\r\n                                                                                        cNumeroEmpleado: searchText,\r\n                                                                                        cNombre: searchText}\r\n                                                                    | ActivosSearchPipe : {bEsActivo: searchActivos}\r\n                                                                    | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNumeroEmpleado }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombreFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoPaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoMaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cClaveUsuario }}</td>\r\n                            <td class=\"align-middle\">\r\n                                <i *ngIf=\"funcionario.bEsActivo === 1\" class=\"fa fa-user mr-2 text-success\" placement=\"bottom\" [ngbTooltip]=\"'Activo, haga clic para desactivar'\" (click)=\"controlActivos(funcionario)\"></i>\r\n                                <i *ngIf=\"funcionario.bEsActivo != 1\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'Inactivo, haga clic para activar'\" (click)=\"controlInactivo(funcionario)\"></i>\r\n                            </td>\r\n                            <td class=\"align-middle\">\r\n                                <i *ngIf=\"funcionario.esMP === 1\" class=\"fa fa-check mr-2 text-success\" placement=\"bottom\" [ngbTooltip]=\"'Es MP'\"></i>\r\n                                <i *ngIf=\"funcionario.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'No es MP'\"></i>\r\n                            </td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombre }}</td>\r\n                            <td><button #ver value=\"{{funcionario.iClaveFuncionario}}\" class=\"btn btn-secondary\" (click)=\"llamarRoles(ver.value)\">Ver Roles</button></td>\r\n                            <td class=\"align-middle\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <button [disabled]=\"funcionario.bEsActivo != 1\" class=\"btn btn-secondary btn-sm\" (click)=\"openModal(modalContent, funcionario)\"><i class=\"fa fa-check\"></i></button>\r\n                                </div>\r\n                            </td>\r\n                        </tr> -->\r\n                    </tbody>\r\n                </table>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row mb-4\">\r\n        <div class=\"col-12\">\r\n            <div class=\"bg-white text-center\">\r\n                <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"10\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n            </div>        \r\n        </div>\r\n    </div>\r\n    \r\n    <ng-template #modalContent>\r\n        <div class=\"modal-body bg-gray\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 vertical-tabs\">\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"row px-3\" #datos2=\"ngForm\">\r\n                        <ul class=\"nav flex-column left col-2 border-0 rounded-0 mr-0 bg-light\">              \r\n                            <li class=\"nav-item bg-light\">\r\n                                <a class=\"nav-link active\" href=\"#reubicarFuncionario\" data-toggle=\"tab\">Reubicar funcionario</a>\r\n                            </li>\r\n                            <!-- <li class=\"nav-item bg-light\">\r\n                                <a *ngIf=\"valReasignarExpedientes\" class=\"nav-link\" href=\"#reasignarExpedientes\" data-toggle=\"tab\">Reasignar expedientes</a>\r\n                                <a *ngIf=\"!valReasignarExpedientes\" class=\"nav-link disabled\" href=\"#reasignarExpedientes\" data-toggle=\"tab\">Reasignar expedientes</a>\r\n                            </li> -->\r\n                        </ul>\r\n                        <div class=\"tab-content col-10 border-0\">\r\n\r\n                            <div class=\"tab-pane active\" id=\"reubicarFuncionario\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-body\">\r\n                                        <h4 class=\"card-title mb-0\">Reubicar funcionario</h4>\r\n                                        <h5 class=\"card-title mb-0\">Agenc&iacute;a actual:&nbsp;<small>{{ nombreAgActual }}</small></h5>\r\n                                    </div>\r\n\r\n                                    <div class=\"container\">\r\n                                        <label class=\"text-gray\">Nombre del funcionario seleccionado:</label>\r\n\r\n                                        <div class=\"row\">\r\n                                            \r\n                                            <input id=\"iclavefuncionarioselect\" hidden formControlName=\"iClaveFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                               \r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"text-gray\">Nombre</label>\r\n                                                    <input #nombreFunciModal formControlName=\"cNombreFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"text-gray\">Apellido paterno</label>\r\n                                                    <input formControlName=\"cApellidoPaternoFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"text-gray\">Apellido materno</label>\r\n                                                    <input formControlName=\"cApellidoMaternoFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                            <input class=\"form-control\" type=\"hidden\" value=\"{{count}}\" >\r\n                                            \r\n                                        </div>\r\n                                        \r\n                                        <hr>\r\n\r\n                                        <!-- [disabled]=\"!valExpPendCheck\" -->\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"custom-control custom-checkbox\">\r\n                                                        <input fomControlName=\"pendientes\"\r\n                                                                type=\"checkbox\"\r\n                                                                class=\"custom-control-input checkbox-primary\"\r\n                                                                id=\"expedientesPendientes\"\r\n                                                                (change)=\"pendientesCheck($event)\"\r\n                                                                [disabled]=\"true\"\r\n                                                                [checked]=\"true\"\r\n                                                                required>\r\n                                                        <label class=\"custom-control-label\" for=\"expedientesPendientes\">Expedientes pendientes</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <pre>{{ pendientes }}</pre> -->\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"custom-control custom-checkbox\">\r\n                                                        <input fomControlName=\"esMP\"\r\n                                                                type=\"checkbox\"\r\n                                                                class=\"custom-control-input checkbox-primary\"\r\n                                                                id=\"EsMP\"\r\n                                                                (change)=\"esMPCheck($event)\"\r\n                                                                [disabled]=\"!valEsMPCheck || contEsMP != 0\"\r\n                                                                [checked]=\"funcionario.esMP === 1\">\r\n                                                        <label class=\"custom-control-label\" for=\"EsMP\">es MP</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <pre>{{ esMP }}</pre> -->\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"custom-control custom-checkbox\">\r\n                                                        <input fomControlName=\"soloRoles\"\r\n                                                                type=\"checkbox\"\r\n                                                                class=\"custom-control-input checkbox-primary\"\r\n                                                                id=\"SoloRoles\"\r\n                                                                (change)=\"soloRolesCheck($event)\"\r\n                                                                [disabled]=\"!valSolocambioCheck\">\r\n                                                        <label class=\"custom-control-label\" for=\"SoloRoles\">Solo cambio de roles</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <pre>{{ soloRoles }}</pre> -->\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <hr>\r\n                                        <!-- [(ngModel)]=\"catDiscriminante_id\" -->\r\n                                        <div class=\"form-group\">\r\n                                            <label *ngIf=\"valAgenciaSelect\" for=\"catDiscriminante_id\">Nueva agencia:</label>\r\n                                            <select *ngIf=\"valAgenciaSelect\"\r\n                                                    class=\"form-control custom-select\"\r\n                                                    id=\"catDiscriminante_id\"\r\n                                                    formControlName=\"catDiscriminante_id\"\r\n                                                    (change)=\"getCatUIE($event.target.value)\"\r\n                                                    [disabled]=\"valAgenciaSelect\">\r\n                                                <!-- <option selected>-- Seleccione una agencia --</option> -->\r\n                                                <option *ngFor=\"let agencia of agencias\" [value]=\"agencia.catDiscriminante_id\">{{ agencia.cClaveDiscriminante }} - {{ agencia.cNombre }}</option>\r\n                                            </select><br><br>\r\n                                            \r\n                                            <input fromControlName=\"catUIE_id\" class=\"form-control\" type=\"hidden\" [value]=\"r.catUIE_id\" readonly id=\"catUIE_id\" *ngFor=\"let r of catUIE\">\r\n                                            <input fromControlName=\"clavefunciAgenciaNueva\" class=\"form-control\" type=\"hidden\" [value]=\"\" readonly id=\"clavefunciAgenciaNueva\" >\r\n                                        </div>\r\n\r\n                                        <hr>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xl-5 col-lg-6 mb-4\">\r\n                                                <h5 class=\"text-center\">Catalogo de roles</h5>\r\n                                                <table class=\"table table-hover\">\r\n                                                    <thead>\r\n                                                        <tr>\r\n                                                            <!-- <th>Id</th> -->\r\n                                                            <th>Roles</th>\r\n                                                        </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                        <tr *ngFor=\"let r of roles | paginate: { itemsPerPage: 10,\r\n                                                                                                currentPage: p2,\r\n                                                                                                id:'roles'\r\n                                                                                                 }\"\r\n                                                            (click)=\"onSelectRol(r)\"\r\n                                                            [ngClass] = \"{ 'highlight' : r.rol_id === selectedRol }\">\r\n                                                            <!-- <th scope=\"row\">{{ r.rol_id }}</th> -->\r\n                                                            <td>{{ r.cDescripcionRol }}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n\r\n                                                <div class=\"row mb-4\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"bg-white text-center\">\r\n                                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p2 = $event\" id='roles' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                        </div>        \r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xl-2 col-lg-6 mb-4\">\r\n                                                <br><br>\r\n                                                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"agregarRol()\" [ngbTooltip]=\"'Agregar rol'\"> <i class=\"fa fa-long-arrow-right\"></i> </button> <br>\r\n                                                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"quitarRol()\" [ngbTooltip]=\"'Quitar rol'\"> <i class=\"fa fa-long-arrow-left\"></i> </button>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xl-5 col-lg-6 mb-4\">\r\n                                                <h5 class=\"text-center\">Roles del funcionario</h5>\r\n                                                <table class=\"table table-hover\">\r\n                                                    <thead>\r\n                                                        <tr>\r\n                                                            <!-- <th>Id</th> -->\r\n                                                            <th>Roles</th>\r\n                                                            <th>Principal</th>\r\n                                                        </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n\r\n                                                        <!-- <tr *ngFor=\"let fRol of funcionarioRol | paginate: { itemsPerPage: 10, currentPage: p3, id:'rolesFuncionario' }\" (click)=\"onSelectFRolF(fRol)\"\r\n                                                            [ngClass]=\"{'highlight': fRol.rol_id == selectedRolF}\">\r\n                                                            <th scope=\"row\">{{ fRol.rol_id }}</th>\r\n                                                            <td>{{ fRol.cDescripcionRol }}</td>\r\n                                                            <td> <input type=\"radio\" name=\"esPrincipal\" class=\"radio-dark-gray\" id=\"\"> </td>\r\n                                                        </tr> -->\r\n\r\n                                                        <tr *ngFor=\"let rol of funcionarioRol | paginate: { itemsPerPage: 10, currentPage: p3, id:'rolesFuncionario' }\" (click)=\"onSelectFRolF(rol)\"\r\n                                                            [ngClass]=\"{ 'highlight': rol.rol_id === selectedRolF }\">\r\n                                                            <!-- <th scope=\"row\">{{ rol.rol_id }}</th> -->\r\n                                                            <td>{{ rol.cDescripcionRol }}</td>\r\n                                                            <!-- <td> <input type=\"radio\"  name=\"esPrincipal\" class=\"radio-dark-gray\"  [checked]=\"rol.esPrincipal === 1\" id=\"rol.rol_id\"> </td> -->\r\n                                                            <td>\r\n                                                                <input type=\"radio\"\r\n                                                                    name=\"puesto_val\"\r\n                                                                    formControlName=\"puesto_val\" \r\n                                                                    class=\"radio-dark-gray\"\r\n                                                                    (ngModel)=\"puesto_val\"\r\n                                                                    [value]=\"rol.rol_id\"\r\n                                                                    [checked]=\"rol.esPrincipal === 1\"\r\n                                                                    id=\"rol.rol_id\"\r\n                                                                    (change)=\"radioRolChange(rol)\">\r\n                                                                <small class=\"text-danger\" *ngIf=\"form.get('puesto_val').hasError('required')\">Por favor seleccione el rol principal</small>\r\n                                                            </td>\r\n                                                        </tr>\r\n\r\n                                                    </tbody>\r\n                                                </table>\r\n\r\n                                                <!-- <pre>{{ puesto_val | json }}</pre> -->\r\n                                                \r\n                                                <div class=\"row mb-4\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"bg-white text-center\">\r\n                                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p3 = $event\" id='rolesFuncionario' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                        </div>        \r\n                                                    </div>\r\n                                                </div>\r\n                                                \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- <div class=\"tab-pane\" id=\"reasignarExpedientes\">\r\n                                <div class=\"card\">                        \r\n                                    <div class=\"card-body\">\r\n                                        <h5 class=\"card-title mb-0\">Reasignar expedientes en agencia actual: <small>{{ nombreAgActual }}</small></h5>\r\n                                    </div>\r\n                                    <div class=\"container\">\r\n                                        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\r\n                                            <div class=\"card border-0\">\r\n                                                <div class=\"card-header transparent\" role=\"tab\" id=\"headingTwo\">\r\n                                                    <h6 class=\"mb-0\">\r\n                                                        <a class=\"text-primary\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                                                            Funcionarios\r\n                                                        </a>\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div id=\"collapseTwo\" class=\"collapse show\" data-parent=\"#accordion\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n                                                    <div class=\"card-body\">\r\n                                                        <div class=\"input-group mb-2 box-shadow\">\r\n                                                            <span class=\"input-group-prepend\">\r\n                                                                <span class=\"input-group-text\">\r\n                                                                    <i class=\"fa fa-search\"></i>\r\n                                                                </span>\r\n                                                            </span>\r\n                                                            <input type=\"text\" [(ngModel)]=\"buscarFuncionario\" formControlName=\"cNumeroCertificado\" placeholder=\"Buscar...\" class=\"form-control\">\r\n                                                        </div>\r\n                                                        <table class=\"table table-hover\">\r\n                                                            <thead>\r\n                                                                <tr>\r\n                                                                    <th>Número de empleado</th>\r\n                                                                    <th>Nombre</th>\r\n                                                                    <th>Apellido paterno</th>\r\n                                                                    <th>Apellido materno</th>\r\n                                                                    <th>Titular</th>\r\n                                                                    <th></th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let funagen of funciAgencia | FuncionarioSearchPipe : { cNumeroEmpleado: buscarFuncionario,\r\n                                                                                                                                    cNombreFuncionario: buscarFuncionario,\r\n                                                                                                                                    cApellidoPaternoFuncionario: buscarFuncionario,\r\n                                                                                                                                    cApellidoMaternoFuncionario: buscarFuncionario } | paginate: { itemsPerPage: 10, currentPage: p4, id:'FuncionarioAgencia' }\">\r\n                                                                    <td scope=\"row\">{{ funagen.cNumeroEmpleado }}</td>\r\n                                                                    <td>{{ funagen.cNombreFuncionario }}</td>\r\n                                                                    <td>{{ funagen.cApellidoPaternoFuncionario }}</td>\r\n                                                                    <td>{{ funagen.cApellidoMaternoFuncionario }}</td>\r\n                                                                    <td>\r\n                                                                        <i *ngIf=\"funagen.esMP === 1\" class=\"fa fa-check mr-2 text-success\" placement=\"bottom\"></i>\r\n                                                                        <i *ngIf=\"funagen.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" placement=\"bottom\"></i>\r\n                                                                    </td>\r\n                                                                    <td>\r\n                                                                        <input type=\"radio\"\r\n                                                                            name=\"archivoDigital_id\"\r\n                                                                            formControlName=\"archivoDigital_id\" \r\n                                                                            class=\"radio-dark-gray\"\r\n                                                                            [(ngModel)]=\"archivoDigital_id\"\r\n                                                                            [value]=\"funagen.iClaveFuncionario\"\r\n                                                                            id=\"funagen.iClaveFuncionario\"\r\n                                                                            (change)=\"radioChange($event)\">\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n\r\n                                                        <div class=\"row mb-4\">\r\n                                                            <div class=\"col-12\">\r\n                                                                <div class=\"bg-white text-center\">\r\n                                                                    <pagination-controls autoHide=\"true\" (pageChange)=\"p4 = $event\" id='FuncionarioAgencia' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                                </div>        \r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n\r\n                            <!-- <pre>\r\n                                {{ roles | json }}\r\n                            </pre>  -->\r\n                            <!-- <pre>\r\n                                {{ funcionarioRol | json }}\r\n                            </pre> -->\r\n                            <!-- <pre>\r\n                                   {{ form.value | json }}\r\n                            </pre> -->\r\n                                  \r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white py-1\">\r\n                            <div *ngIf=\"form.get('cRFC').hasError('required')\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                                <strong>Atencion!</strong> Por favor ingrese la justificación.\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"justificacion\">justificación</label>\r\n                                <textarea maxlength=\"150\" id=\"justificacion\" class=\"form-control\" formControlName=\"cRFC\" placeholder=\"Máximo 150 caracteres\" required></textarea>\r\n                                <!-- <textarea id=\"justificacion\" class=\"form-control\" formControlName=\"cRFC\" [(ngModel)]=\"cRFC\" required></textarea> -->\r\n                                <!-- <small class=\"text-danger\" *ngIf=\"form.get('cRFC').touched && form.get('cRFC').hasError('required')\">Por favor ingrese la justificación</small> -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white text-center py-1\">\r\n                            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-success mr-1\">Aceptar</button>\r\n                            <!-- <button [disabled]=\"!prueba\" type=\"submit\" class=\"btn btn-success mr-1\">Aceptar</button> -->\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancelar</button>\r\n                        </div>  \r\n                    </form> \r\n                </div>\r\n            </div>    \r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #expPendientes>\r\n        <div class=\"modal-body bg-gray\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"formExpPend\" (ngSubmit)=\"onSubmitExpPend(formExpPend.value)\" class=\"row px-3\" #datos=\"ngForm\">\r\n\r\n                        <div class=\"card col-12\">\r\n                            <div class=\"card-header transparent border-0 text-muted\">\r\n                                <h4 class=\"modal-title\">Expedientes pendientes</h4>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n\r\n                                <div class=\"container\">\r\n                                    <hr>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xl-6 col-lg-6 mb-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"catDiscriminanteAnt\"><h6>Seleccione la agencia:</h6></label>\r\n                                                <select class=\"form-control\"\r\n                                                        id=\"catDiscriminanteAnt\"\r\n                                                        formControlName=\"catDiscriminanteAnt\"\r\n                                                        (change)=\"onSelectAgencia($event.target.value)\">\r\n                                                    <option selected [value]=\"0\">-- Seleccione una agencia --</option>\r\n                                                    <option *ngFor=\"let expPend of agenciasExpPend1\"\r\n                                                            [value]=\"expPend.catDiscriminante_id\"> {{ expPend.cNombre }} \r\n                                                    </option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-3 col-lg-6 mb-3\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"iclaveFuncionarioAsign\"><h6>Seleccione el funcionario:</h6></label>\r\n                                                <select class=\"form-control\"\r\n                                                        id=\"iclaveFuncionarioAsign\"\r\n                                                        formControlName=\"iclaveFuncionarioAsign\"\r\n                                                        (change)=\"onSelectFuncionario($event.target.value)\">\r\n                                                    <option selected [value]=\"0\">-- Seleccione un funcionario --</option>\r\n                                                    <option *ngFor=\"let funAg of funcinarioAgencia\"\r\n                                                            [value]=\"funAg.iClaveFuncionario\"> {{ funAg.cNombreFuncionario }} \r\n                                                                                                {{ funAg.cApellidoPaternoFuncionario }} \r\n                                                                                                {{ funAg.cAPellidoMaternoFuncionario }} \r\n                                                    </option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-3 col-lg-6 mb-3\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"rolesFAsign\"><h6>Seleccione el rol:</h6></label>\r\n                                                <select class=\"form-control\"\r\n                                                        id=\"rolesFAsign\"\r\n                                                        formControlName=\"rolesFAsign\"\r\n                                                        (change)=\"onSelectRoles($event.target.value)\">\r\n                                                    <option selected [value]=\"0\">-- Seleccione un rol --</option>\r\n                                                    <option *ngFor=\"let rol of rolesFun2\"\r\n                                                            [value]=\"rol.rol_id\"> {{ rol.cDescripcionRol }} \r\n                                                    </option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <hr>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xl-6 col-lg-6 mb-6\">\r\n                                            <input class=\"form-control\" type=\"text\" placeholder=\"Filtrar por número de expediente\" (keyup)=\"FiltrarExpediente($event)\"/>\r\n                                        </div>\r\n                                        <div class=\"col-xl-6 col-lg-6 mb-6\">\r\n                                            <input class=\"form-control\" type=\"text\" placeholder=\"Filtrar por número de NUC\" (keyup)=\"FiltrarNuc($event)\"/>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br>\r\n\r\n                                    <!-- <div class=\"row\">\r\n                                        <table class=\"table table-hover\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th><input type=\"checkbox\" name=\"check\" id=\"check\" class=\"form-control\"></th>\r\n                                                    <th>Número de expediente</th>\r\n                                                    <th>Número único de caso</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let list of listaExp | paginate: { itemsPerPage: 10, currentPage: p5, id:'ExpPendientes' }\" (click)=\"onSelectExpPend(expPend)\"\r\n                                                    >\r\n                                                    <td><input type=\"checkbox\" name=\"check\" id=\"check\" class=\"form-control\"></td>\r\n                                                    <td class=\"align-middle text-truncate\">{{list.cNumeroExpediente}}</td>\r\n                                                    <td class=\"align-middle\">{{list.cNumeroGeneralCaso}}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n\r\n                                        <div class=\"row mb-4\">\r\n                                            <div class=\"col-12\">\r\n                                                <div class=\"bg-white text-center\">\r\n                                                    <pagination-controls autoHide=\"true\" (pageChange)=\"p5 = $event\" id='ExpPendientes' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                </div>        \r\n                                            </div>\r\n                                        </div>\r\n                                    </div> -->\r\n\r\n<!-- =====================================================pruebas ngx-datatable====================================== -->\r\n                                    <ngx-datatable\r\n                                        #table\r\n                                        class=\"material\"\r\n                                        [headerHeight]=\"40\"\r\n                                        [limit]=\"10\"\r\n                                        [columnMode]=\"'force'\"\r\n                                        [footerHeight]=\"50\"\r\n                                        [rowHeight]=\"'auto'\"\r\n                                        [rows]=\"rows\"\r\n                                        [loadingIndicator]=\"loadingIndicator\"\r\n                                        [selected]=\"selected\"\r\n                                        [selectionType]=\"'checkbox'\"\r\n                                        (select)='onSelect($event)'>\r\n                                        <ngx-datatable-column\r\n                                            [width]=\"30\"\r\n                                            [sortable]=\"false\"\r\n                                            [canAutoResize]=\"false\"\r\n                                            [draggable]=\"true\"\r\n                                            [resizeable]=\"false\"\r\n                                            [headerCheckboxable]=\"true\"\r\n                                            [checkboxable]=\"true\">\r\n                                        </ngx-datatable-column>\r\n                                        <ngx-datatable-column name=\"cNumeroExpediente\">\r\n                                            <ng-template ngx-datatable-header-template>\r\n                                                <span>Número de expediente</span>\r\n                                            </ng-template>\r\n                                            <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                                                <span>\r\n                                                    {{value}}\r\n                                                </span>\r\n                                            </ng-template>\r\n                                        </ngx-datatable-column>\r\n                                        <ngx-datatable-column name=\"cNumeroGeneralCaso\">\r\n                                            <ng-template ngx-datatable-header-template>\r\n                                                <span>Número único de caso</span>\r\n                                            </ng-template>\r\n                                            <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n                                                <span>\r\n                                                    {{value}}\r\n                                                </span>\r\n                                            </ng-template>\r\n                                        </ngx-datatable-column>\r\n                                    </ngx-datatable>   \r\n<!-- =====================================================pruebas ngx-datatable====================================== -->\r\n\r\n                                    <!-- <div class=\"row\">\r\n                                        <div class=\"col-9\">\r\n\r\n                                            <table class=\"table table-hover\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Nombre del funcionario</th>\r\n                                                        <th>Agencia</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let expPend of expPendientesLista | paginate: { itemsPerPage: 10, currentPage: p5, id:'ExpPendientes' }\" (click)=\"onSelectExpPend(expPend)\"\r\n                                                        [ngClass]=\"{ 'highlight': expPend.cambioAdscripcion_id === selectedExpPend }\">\r\n                                                        <td class=\"align-middle text-truncate\">{{ expPend.nombreFuncionario }}</td>\r\n                                                        <td class=\"align-middle\">{{ expPend.cNombre }}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n\r\n                                            <div class=\"row mb-4\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"bg-white text-center\">\r\n                                                        <pagination-controls autoHide=\"true\" (pageChange)=\"p5 = $event\" id='ExpPendientes' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                    </div>        \r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"col-3\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"iclaveFuncionarioAsign\">Selccione el funcionario de la agencia</label>\r\n                                                <select class=\"form-control custom-select\"\r\n                                                        id=\"iclaveFuncionarioAsign\"\r\n                                                        formControlName=\"iclaveFuncionarioAsign\"\r\n                                                        [(ngModel)]=\"iclaveFuncionarioAsign\"\r\n                                                        required>\r\n                                                    <option *ngFor=\"let funsAg of funcinariosAgencia\" [value]=\"funsAg.iClaveFuncionario\">{{ funsAg.cNombreFuncionario }} {{ funsAg.cApellidoPaternoFuncionario }} {{ funsAg.cAPellidoMaternoFuncionario }}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div> -->\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white py-1\">\r\n                            <h5>Reasignar expedientes</h5>\r\n\r\n                            <br>\r\n\r\n                            <div class=\"col-xl-3 col-lg-6 mb-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"iclaveFuncionarioDestino\"><h6>Seleccione el funcionario para reasignar:</h6></label>\r\n                                    <select class=\"form-control\"\r\n                                            id=\"iclaveFuncionarioDestino\"\r\n                                            formControlName=\"iclaveFuncionarioDestino\"\r\n                                            [(ngModel)]=\"iclaveFuncionarioDestino\"\r\n                                            required>\r\n                                        <option selected [value]=\"0\">-- Seleccione un funcionario --</option>\r\n                                        <option *ngFor=\"let funAg of funcinariosAgencia1\"\r\n                                                [value]=\"funAg.iClaveFuncionario\"> {{ funAg.cNombreFuncionario }} \r\n                                                                                    {{ funAg.cApellidoPaternoFuncionario }} \r\n                                                                                    {{ funAg.cAPellidoMaternoFuncionario }} \r\n                                        </option>\r\n                                    </select>\r\n                                 </div>\r\n                            </div>\r\n                        </div>\r\n    \r\n                        <br><br><br>\r\n    \r\n                        <div class=\"col-12 bg-white py-1\">\r\n                            <div *ngIf=\"formExpPend.get('justificacion').hasError('required')\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                                <strong>Atencion!</strong> Por favor ingrese la justificación.\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"justificacion\">justificación</label>\r\n                                <textarea maxlength=\"150\" id=\"justificacion\" class=\"form-control\" formControlName=\"justificacion\" placeholder=\"Máximo 150 caracteres\" required></textarea>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white text-center py-2\">\r\n                            <button [disabled]=\"!formExpPend.valid\" type=\"submit\" class=\"btn btn-success mr-1\">Aceptar</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModalExpPend()\">Cancelar</button>\r\n                        </div> \r\n\r\n                    </form>            \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/membership/membership.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/membership/membership.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip {\n  width: 100%;\n  height: 180px;\n  position: relative;\n  -webkit-perspective: 800px;\n  -o-perspective: 800px;\n  perspective: 800px; }\n  .flip .content {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    transition: -webkit-transform 0.6s;\n    transition: transform 0.6s;\n    transition: transform 0.6s, -webkit-transform 0.6s;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n  .flip .content div.front, .flip .content div.back {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      z-index: 0;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden; }\n  .flip .content div.front .card, .flip .content div.back .card {\n        height: 180px; }\n  .flip .content div.back {\n      z-index: 1;\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n  .flip .content div.back .dropdown {\n        width: 100%; }\n  .flip .content div.back .dropdown .dropdown-menu {\n          width: 100%;\n          margin-top: -1px; }\n  .flip .content div.back .dropdown .dropdown-menu a {\n            color: #666; }\n  .flip .content div.back .dropdown .dropdown-menu a .fa-check {\n              color: #378D3B; }\n  .flip .content div.back .dropdown .dropdown-menu a .fa-times {\n              color: #D22E2E; }\n  .flip .content.flipped {\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n  .z-index-1 {\n  z-index: 1; }\n  table tr.highlight {\n  background-color: #4CAF50 !important;\n  color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/pages/membership/membership.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/membership/membership.component.ts ***!
  \**********************************************************/
/*! exports provided: MembershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipComponent", function() { return MembershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _membership_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./membership.model */ "./src/app/pages/membership/membership.model.ts");
/* harmony import */ var _membership_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./membership.service */ "./src/app/pages/membership/membership.service.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MembershipComponent = /** @class */ (function () {
    function MembershipComponent(router, fbf, fbExpPend, toastrService, membershipService, menuService, modalService, location) {
        var _this = this;
        this.fbf = fbf;
        this.fbExpPend = fbExpPend;
        this.toastrService = toastrService;
        this.membershipService = membershipService;
        this.menuService = menuService;
        this.modalService = modalService;
        this.location = location;
        this.funcionarios = [];
        this.listaExp = [];
        this.roles = [];
        this.funcionarioRol = [];
        this.agencias = [];
        this.type = 'list';
        this.genders = ['male', 'female'];
        this.selectedRol = 0;
        this.selectedRolF = 0;
        this.posicionRol = 0;
        this.posicionRolF = 0;
        this.funciAgencia = [];
        this.catUIE = [];
        this.val = [];
        this.funciMP = [];
        this.clavedelactaul = [];
        this.expPendientes = false;
        this.esMP = false;
        this.soloRoles = false;
        this.mostrarActivos = true;
        this.prueba = false;
        this.jerarquia = [];
        this.iclave = 0;
        this.catDis = 0;
        this.jerarquiaOrg = 0;
        this.arrayExp = [];
        this.jeraTabla = 0;
        this.searchActivos = "1";
        this.searchNumero = "";
        this.searchNombre = "";
        this.searchApPaterno = "";
        this.searchApMaterno = "";
        this.searchUsuario = "";
        this.searchAgencia = "";
        // =============================================
        this.menuSelectOptions = [];
        this.rev = true;
        this.countHelperExp = 0;
        /*Activar MP*/
        this.rev1 = true;
        this.rev2 = true;
        this.valReasignarExpedientes = true;
        this.valExpPendCheck = true;
        this.valEsMPCheck = true;
        this.valSolocambioCheck = true;
        this.valAgenciaSelect = true;
        this.rolesFunci = [];
        this.rolesSR = [];
        this.contEsMP = 0;
        this.inputOptions = {};
        this.FunAgPendientes = [];
        // Se quita el rol a los roles del funcionario
        this.rolesEliminados = [];
        this.revisarRoles = 0;
        this.expSinAsignar = [];
        this.valorExpSinAsignar = 0;
        this.funcionarioSeleccionado = "";
        this.rolesAMPFac = 0;
        this.loading = false;
        this.radioAsign = false;
        this.expPendientesLista = [];
        this.arrAgTemp = [];
        this.arrAgSinRepetir = [];
        this.agenciasExpPend = [];
        this.agenciasExpPend1 = [];
        this.funcinariosAgencia = [];
        this.selectedExpPend = 0;
        this.funcinarioAgencia = [];
        this.arrTempFun = [];
        this.arrTempFunSinRep = [];
        this.rolesFun = [];
        this.rolesFun2 = [];
        this.arrTempJerar = [];
        /*------------------** --------------------------------------------------------------------------------------------------------------*/
        /*----------------- ** --------------------------------------------------------------------------------------------------------------*/
        /*------------------** --------------------------------------------------------------------------------------------------------------*/
        /*------------------** --------------------------------------------------------------------------------------------------------------*/
        /*------------------** --------------------------------------------------------------------------------------------------------------*/
        /*------------------** --------------------------------------------------------------------------------------------------------------*/
        this.jerarqVal = "";
        this.funcinariosAgencia1 = [];
        /*======================================pruebas ngx-datatable========================================*/
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = false;
        this.reorderable = true;
        this.columns = [
            { prop: 'expediente' },
            { name: 'nuc' },
        ];
        this.listaExp1 = JSON.stringify(this.listaExp);
        this.router = router;
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems.forEach(function (item) {
            var menu = {
                id: item.id,
                name: item.title
            };
            _this.menuSelectOptions.push(menu);
        });
    }
    MembershipComponent.prototype.ngOnInit = function () {
        this.getFuncionarios();
        this.getAgencias();
        this.getRoles();
        this.formExpPend = this.fbExpPend.group({
            cambioAdscripcion_id: null,
            iclaveFuncionario: null,
            catDis_ant: null,
            catDis_asignado: null,
            fecha_creacion: null,
            fecha_modificacion: null,
            esEmp: null,
            Asignados: null,
            iclaveFuncionarioAsign: null,
            catDiscriminanteAnt: null,
            rolesFAsign: null,
            justificacion: null,
            iclaveFuncionarioDestino: null
        });
        this.form = this.fbf.group({
            iClaveFuncionario: null,
            cNombreFuncionario: null,
            cApellidoPaternoFuncionario: null,
            cApellidoMaternoFuncionario: null,
            cSexo: null,
            cRFC: null,
            cCURP: null,
            dFechaNacimiento: null,
            cEmail: null,
            cCedula: null,
            iClaveFuncionarioJefe: null,
            especialidad_val: null,
            puesto_val: null,
            jerarquiaOrganizacional_id: null,
            dcCargaTrabajo: null,
            tipoEspecialidad_val: null,
            bEsPar: null,
            cNumeroEmpleado: null,
            catDiscriminante_id: null,
            dFechaIngreso: null,
            archivoDigital_id: null,
            catUIE_id: null,
            catAreasNegocio_id: null,
            esMP: null,
            cNumeroCertificado: null,
            bEsActivo: null,
            cClaveUsuario: null,
            cNombre: null,
            usuario: null,
            numeroExpediente: null
        });
    };
    MembershipComponent.prototype.ngOnDestroy = function () {
        console.log("onDestroy membership");
    };
    MembershipComponent.prototype.controlActivos = function (funcionario) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Desactivar usuario',
            text: '¿Esta seguro que desea desactivar al usuario?',
            type: 'warning',
            html: '<b>¿Esta seguro que desea desactivar al usuario?</b><br><label><b>Justificacion:</b></label>',
            input: 'text',
            inputValidator: function (value) {
                return !value && 'Por favor ingrese la justificacion.';
            },
            showCancelButton: true,
            confirmButtonText: 'Desactivar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                // const act = e.target.checked;
                var valor = 0;
                funcionario.bEsActivo = 0;
                //  console.log("Se desactiva el funcionario => " + funcionario.cNombreFuncionario );
                //  console.log(valor);      
                var justificacion = result.value;
                var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                var cambioEstatus1 = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["cambioEstatus"](iclaveFuncionarionew, valor, justificacion);
                _this.cambioEstatus(cambioEstatus1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "Usuario desactivado'",
                    text: "Desactivacion exitosa",
                    type: "success"
                }).then(function () {
                    //  location.reload();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                _this.rev = true;
            }
        });
    };
    MembershipComponent.prototype.controlInactivo = function (funcionario) {
        var _this = this;
        // console.log(funcionario);
        var iclaveFunSelect = funcionario.iClaveFuncionario;
        var catDisc = funcionario.catDiscriminante_id;
        // console.log(iclaveFunSelect + " " + catDisc);
        this.membershipService.getCounthelper(iclaveFunSelect, catDisc).subscribe(function (countHelperExp) {
            _this.countHelperExp = countHelperExp;
            if (_this.countHelperExp > 0) {
                _this.getFunAgPendientes(catDisc);
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: 'CUIDADO!',
                    text: "El funcionario tiene expedientes en la agencia seleccionada, " +
                        "si lo activa tomará el control de los mismos expedientes, " +
                        "para reasignarlos antes de activarlo, dirijase a 'Ver expedientes pendientes' " +
                        "¿desea continuar?",
                    type: 'warning',
                    showCancelButton: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#aaa',
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar'
                }).then(function (result) {
                    if (result.value) {
                        // swal(
                        //   'Confirmado',
                        //   'Puede seguir con el proceso.',
                        //   'success'
                        // )
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: 'Activar usuario',
                            text: '¿Esta seguro que desea activar al usuario?',
                            type: 'warning',
                            html: '<b>¿Esta seguro que desea Activar al usuario?</b><br><label><b>Justificacion:</b></label>',
                            input: 'text',
                            inputValidator: function (value) {
                                return !value && 'Por favor ingrese la justificacion.';
                            },
                            showCancelButton: true,
                            confirmButtonText: 'Activar',
                            cancelButtonText: 'Cancelar'
                        }).then(function (result) {
                            // console.log(result.value);
                            if (result.value) {
                                // const inact = e.target.checked;
                                var valor = 1;
                                // console.log(funcionario);
                                funcionario.bEsActivo = 1;
                                // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
                                // console.log(valor);
                                var justificacion = result.value;
                                var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                                var cambioEstatus1 = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["cambioEstatus"](iclaveFuncionarionew, valor, justificacion);
                                _this.cambioEstatus(cambioEstatus1);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                    title: "Usuario Activado",
                                    text: "Activacion exitosa",
                                    type: "success"
                                }).then(function () {
                                    // location.reload();
                                });
                            }
                            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                                // console.log("Se cancelo la activación")
                            }
                        });
                    }
                    // else if (result.dismiss === swal.DismissReason.cancel) {
                    //   swal.mixin({
                    //     title: 'Reasignar',
                    //     text: "Seleccione un funcinario para continuar con la reasignación.",
                    //     type: 'warning',
                    //     allowOutsideClick: false,
                    //     allowEscapeKey : false,
                    //     input: 'select',
                    //     inputOptions: this.inputOptions,
                    //     inputPlaceholder: 'Seleccione un funcionario',
                    //     showCancelButton: true,
                    //     confirmButtonText: 'Siguiente &rarr;',
                    //     cancelButtonText: 'Cancelar',
                    //     progressSteps:['1','2'],
                    //     inputValidator: (value) => {
                    //       return !value && 'Favor de escoger al funcionario a quien reasignara expedientes.'
                    //      },
                    //   }).queue([
                    //       {
                    //       },
                    //       {
                    //         title:'Justificacion',
                    //         inputPlaceholder: 'Justificación',
                    //         text:'Justifique el motivo de la reasignación de expedientes.',
                    //         input:'text',
                    //         inputValidator: (value) => {
                    //           return !value && 'Por favor ingrese la justificacion.'
                    //         },
                    //       }
                    //   ]).then((result) => {
                    //     if (result.value) {
                    //       var iclaveFNuevo = parseInt(result.value[0]);
                    //       swal({
                    //         title: 'Confirmar',
                    //         text: "¿Esta usted seguro(a) de continuar con la reasignación de los expedientes?",
                    //         confirmButtonText: 'Aceptar',
                    //         showCancelButton: true,
                    //         allowOutsideClick: false,
                    //         allowEscapeKey : false,
                    //         cancelButtonText:'Cancelar',
                    //         confirmButtonColor: '#4BAE4F',
                    //         cancelButtonColor: '#d33',
                    //       }).then((result) =>{
                    //         if (result.value) {
                    //           // const iclaveFAnt: number = clave;
                    //           let asignar = new AsignarPendientes(catDisc, iclaveFNuevo, iclaveFunSelect);
                    //           console.log(asignar);
                    //           this.asignarExpPendientes( asignar );
                    //           swal(
                    //             'Confirmado',
                    //             'Los expedientes se han reasignado correctamente.',
                    //             'success'
                    //           )
                    //         } else if (result.dismiss === swal.DismissReason.cancel) {
                    //           swal({
                    //             type: 'error',
                    //             title: 'Cancelado',
                    //             text: 'Se ha cancelado la reasignación de los expedientes.',
                    //           });
                    //         }
                    //       });
                    //     } else if (result.dismiss === swal.DismissReason.cancel) {
                    //       swal({
                    //         type: 'error',
                    //         title: 'Cancelado',
                    //         text: 'Se ha cancelado la reasignación de los expedientes.',
                    //       });
                    //     }
                    //   });
                    // }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: 'Activar usuario',
                    text: '¿Esta seguro que desea activar al usuario?',
                    type: 'warning',
                    html: '<b>¿Esta seguro que desea Activar al usuario?</b><br><label><b>Justificacion:</b></label>',
                    input: 'text',
                    inputValidator: function (value) {
                        return !value && 'Por favor ingrese la justificacion.';
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Activar',
                    cancelButtonText: 'Cancelar'
                }).then(function (result) {
                    // console.log(result.value);
                    if (result.value) {
                        // const inact = e.target.checked;
                        var valor = 1;
                        // console.log(funcionario);
                        funcionario.bEsActivo = 1;
                        // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
                        // console.log(valor);
                        var justificacion = result.value;
                        var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                        var cambioEstatus1 = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["cambioEstatus"](iclaveFuncionarionew, valor, justificacion);
                        _this.cambioEstatus(cambioEstatus1);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                            title: "Usuario Activado",
                            text: "Activacion exitosa",
                            type: "success"
                        }).then(function () {
                            // location.reload();
                        });
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                        // console.log("Se cancelo la activación")
                    }
                });
            }
            _this.inputOptions = {};
        });
    };
    MembershipComponent.prototype.activarMP = function (funcionario) {
        var _this = this;
        if (funcionario.esMP === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: 'Activar MP ',
                text: '¿Esta seguro que desea activar al funcionario como MP?',
                type: 'warning',
                html: '<b>¿Esta seguro que desea activar al funcionario como MP?</b><br><label><b>Justificacion:</b></label>',
                input: 'text',
                inputValidator: function (value) {
                    return !value && 'Por favor ingrese la justificacion.';
                },
                showCancelButton: true,
                confirmButtonText: 'Activar',
                cancelButtonText: 'Cancelar'
            }).then(function (result) {
                if (result.value) {
                    // const act = e.target.checked;
                    var valor = 1;
                    funcionario.esMP = 1;
                    //  console.log("Se Activo el funcionario con la bandera MP => " + funcionario.cNombreFuncionario );
                    //  console.log(valor);      
                    var justificacion = result.value;
                    var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                    var cambioMP2 = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["cambioMP"](iclaveFuncionarionew, valor, justificacion);
                    _this.cambioMP1(cambioMP2);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Funcionario ahora es MP'",
                        text: "Funcionario ahora es MP",
                        type: "success"
                    }).then(function () {
                        //  location.reload();
                    });
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                    _this.rev1 = true;
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: 'Desactivar MP ',
                text: '¿Esta seguro que desea desactivar al funcionario como MP?',
                type: 'warning',
                html: '<b>¿Esta seguro que desea desactivar al funcionario como MP?</b><br><label><b>Justificacion:</b></label>',
                input: 'text',
                inputValidator: function (value) {
                    return !value && 'Por favor ingrese la justificacion.';
                },
                showCancelButton: true,
                confirmButtonText: 'Desactivar',
                cancelButtonText: 'Cancelar'
            }).then(function (result) {
                if (result.value) {
                    // const act = e.target.checked;
                    var valor = 0;
                    funcionario.esMP = 0;
                    //  console.log("Se desactiva el funcionario con la bandera MP => " + funcionario.cNombreFuncionario );
                    //  console.log(valor);      
                    var justificacion = result.value;
                    var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                    var cambioMP2 = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["cambioMP"](iclaveFuncionarionew, valor, justificacion);
                    _this.cambioMP1(cambioMP2);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Funcionario ahora ya no es MP'",
                        text: "Funcionario ahora ya no es MP",
                        type: "success"
                    }).then(function () {
                        //  location.reload();
                    });
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                    _this.rev2 = true;
                }
            });
        }
    };
    /*DESACTIVAR MP*/
    MembershipComponent.prototype.desactivarMP = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Cuidado!!',
            text: '¿Solo los funcionarios activos pueden acceder a esta funcion.?',
            type: 'warning',
            confirmButtonText: 'Aceptar',
        });
    };
    MembershipComponent.prototype.pageRefresh = function () {
        this.form.reset();
        // this.router.navigate(['/pages/blank']);
        // this.router.navigate(['/pages/membership']);
        location.reload();
    };
    MembershipComponent.prototype.pendientesCheck = function (e) {
        this.expPendientes = e.target.checked;
        if (this.radioAsign || this.expPendientes) {
            this.prueba = true;
        }
        if (this.expPendientes) {
            this.valReasignarExpedientes = false;
            this.valSolocambioCheck = false;
        }
        else {
            this.valReasignarExpedientes = true;
            this.valSolocambioCheck = true;
        }
    };
    MembershipComponent.prototype.esMPCheck = function (e) {
        this.esMP = e.target.checked;
        if (this.esMP) {
            this.valSolocambioCheck = false;
        }
        else {
            this.valSolocambioCheck = true;
        }
    };
    MembershipComponent.prototype.soloRolesCheck = function (e) {
        this.soloRoles = e.target.checked;
        if (this.soloRoles || this.contEsMP > 0) {
            this.prueba = true;
            this.valReasignarExpedientes = false;
            this.valExpPendCheck = false;
            this.valEsMPCheck = false;
            this.valAgenciaSelect = false;
            // console.log(this.count);
        }
        else {
            this.prueba = false;
            if (this.count > 0) {
                this.valReasignarExpedientes = true;
                this.valExpPendCheck = true;
            }
            else {
                this.valReasignarExpedientes = false;
                this.valExpPendCheck = false;
                this.prueba = true;
            }
            this.valEsMPCheck = true;
            this.valAgenciaSelect = true;
            // console.log(this.count);
        }
    };
    MembershipComponent.prototype.soloActivos = function (e) {
        this.mostrarActivos = e.target.checked;
        if (this.mostrarActivos) {
            this.searchActivos = "1";
        }
        else if (!this.mostrarActivos) {
            this.searchActivos = "";
        }
        this.p = 1;
    };
    // public llamarRoles( clave:number){
    //   var names = "";
    //   this.membershipService.getFUsuarioRol(clave).subscribe( funcionarioRol => {
    //     this.funcionarioRol = funcionarioRol
    //     //console.log(this.funcionarioRol);
    //     var roles  = JSON.stringify(this.funcionarioRol);
    //     for(var i = 0; i<funcionarioRol.length; i++){
    //       names += "<b>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
    //       //console.log(names);
    //     }
    //     //console.log(names);
    //     swal({
    //       title: "<b>Roles Del Funcionario</b>", 
    //       html: "<b>" + names + "</b><br>",  
    //       confirmButtonText: "Aceptar", 
    //       confirmButtonColor: "#4BAE4F",
    //     });
    //   });
    // }
    MembershipComponent.prototype.llamarRoles = function (clave) {
        var _this = this;
        var names = "";
        this.membershipService.getFUsuarioRol(clave).subscribe(function (funcionarioRol) {
            _this.funcionarioRol = funcionarioRol;
            //console.log(this.funcionarioRol);
            var roles = JSON.stringify(_this.funcionarioRol);
            for (var i = 0; i < funcionarioRol.length; i++) {
                if (_this.funcionarioRol[i].esPrincipal == 1) {
                    names += "<b style= 'color:#4BAE4F'>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
                }
                else {
                    names += "<b>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
                }
                //console.log(names);
            }
            //console.log(names);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "<b>Roles Del Funcionario</b>",
                html: "<b>" + names + "</b><br>",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#4BAE4F",
            });
        });
    };
    MembershipComponent.prototype.recargarFuncionarios = function () {
        // swal({
        //   title:"Cargando...",
        //   position: 'center',
        //   type: 'success',
        //   showConfirmButton: false,
        //   timer: 2000
        // });
        this.getFuncionarios();
    };
    // Se cargan los datos del funcionario
    MembershipComponent.prototype.getFuncionarios = function () {
        var _this = this;
        this.loading = true;
        this.membershipService.getFuncionarios().subscribe(function (funcionarios) {
            _this.funcionarios = funcionarios;
            // console.log(this.funcionarios);
            for (var i = 0; i < _this.funcionarios.length; i++) {
                var ag = _this.funcionarios[i].catDiscriminante_id;
                for (var j = 0; j < _this.agencias.length; j++) {
                    if (ag === _this.agencias[j].catDiscriminante_id) {
                        var agNombre = _this.agencias[j].cNombre;
                        _this.funcionarios[i].cNombre = agNombre;
                    }
                }
            }
            _this.loading = false;
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Error al cargar funcionarios",
                position: 'center',
                // text: "Ocurrió un error: " + err.message + " verifique su conección o los permisos de acceso de la red.",
                html: "Ocurrió un error: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>. <br><br> verifique su conección o los permisos de acceso de la red.",
                type: 'error',
                showConfirmButton: true
            });
            _this.loading = false;
        });
    };
    MembershipComponent.prototype.cargarRoles = function (claveFuncionario) {
        var _this = this;
        this.membershipService.getFUsuarioRol(claveFuncionario).subscribe(function (rF) {
            _this.rolesFunci = rF;
        });
        return this.rolesFunci;
    };
    MembershipComponent.prototype.getRoles = function () {
        var _this = this;
        this.membershipService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
            // console.log(this.roles);
        });
    };
    // Obtener los roles del funcionario que se selecciona
    MembershipComponent.prototype.getFuncionarioRol = function (funcionario) {
        var _this = this;
        this.membershipService.getFUsuarioRol(funcionario.iClaveFuncionario).subscribe(function (funcionarioRol) {
            _this.funcionarioRol = funcionarioRol;
            // console.log(this.funcionarioRol);
            for (var i = 0; i < _this.funcionarioRol.length; i++) {
                var elementFR = _this.funcionarioRol[i];
                for (var j = 0; j < _this.roles.length; j++) {
                    var elementR = _this.roles[j];
                    if (elementFR.rol_id === elementR.rol_id) {
                        _this.roles.splice(j, 1);
                    }
                }
            }
        });
    };
    MembershipComponent.prototype.getCountExp1 = function (funcionario) {
        var _this = this;
        this.membershipService.getCountExp(funcionario.iClaveFuncionario, funcionario.catDiscriminante_id).subscribe(function (count) {
            _this.count = count;
            // console.log("Tiene estos expedientes pendientes => " + this.count);
            if (count == 0) {
                _this.valReasignarExpedientes = false;
                _this.valExpPendCheck = false;
                _this.prueba = true;
            }
            else if (count > 0) {
                _this.valReasignarExpedientes = true;
                _this.valExpPendCheck = true;
            }
        });
    };
    // Se cargan las agencias del catalogo
    MembershipComponent.prototype.getAgencias = function () {
        var _this = this;
        this.membershipService.getAgencias().subscribe(function (agencias) {
            _this.agencias = agencias;
            _this.agencias.sort(function (a, b) { return a.cClaveDiscriminante - b.cClaveDiscriminante; });
            // console.log(this.agencias);
        });
    };
    MembershipComponent.prototype.getFuncionarioAgencia = function (funcionario) {
        var _this = this;
        this.contEsMP = 0;
        this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe(function (funciAgencia) {
            _this.funciAgencia = funciAgencia;
            console.log(_this.funciAgencia);
            _this.nAgActual = _this.funciAgencia.map(function (a) { return a.cNombre; });
            _this.nombreAgActual = _this.nAgActual[0];
            for (var i = 0; i < _this.funciAgencia.length; i++) {
                if (funcionario.iClaveFuncionario === _this.funciAgencia[i].iClaveFuncionario ||
                    _this.funciAgencia[i].usuario[0].bEsActivo === 0) {
                    _this.funciAgencia.splice(i, 1);
                }
                if (_this.funciAgencia[i].esMP == 1) {
                    _this.contEsMP++;
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.funciAgencia[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.funciAgencia[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.funciAgencia.splice(i, 1);
                }
            }
            console.log(_this.contEsMP);
            // console.log(this.funciAgencia);
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Error al cargar",
                text: err.message,
                position: 'center',
                type: 'error',
                showConfirmButton: false
            });
            _this.loading = false;
        });
    };
    MembershipComponent.prototype.getCatUIE = function (valor) {
        var _this = this;
        if (valor !== undefined) {
            // console.log(valor);
            this.membershipService.getcatUIE(valor).subscribe(function (catUIE) {
                _this.catUIE = catUIE;
                // console.log(this.catUIE);
                if (_this.catUIE.some(function (cat) { return cat.catUIE_id !== 0; })) {
                    _this.val = _this.catUIE.map(function (cat) { return cat.catUIE_id; });
                    console.log("");
                }
                else {
                    _this.val = [0];
                    // console.log(this.val);
                }
            });
        }
        else {
            // console.log("No se ha seleccionado agencia");
        }
        if (valor !== undefined) {
            this.membershipService.getfunciMP(valor).subscribe(function (funciMP) {
                _this.funciMP = funciMP;
                console.log("Este es el valor que comparan => " + valor);
                if (_this.funciMP.some(function (cat) { return cat.iClaveFuncionario !== 0; })) {
                    _this.clavedelactaul = _this.funciMP.map(function (cat) { return cat.iClaveFuncionario; });
                    // console.log(this.clavedelactaul);
                }
                else {
                    _this.clavedelactaul = [0];
                    // console.log(this.clavedelactaul);
                }
            });
        }
        if (valor !== undefined) {
            var clave = parseInt(document.getElementById("iclavefuncionarioselect").value);
            console.log(clave);
            this.membershipService.getCounthelper(clave, valor).subscribe(function (countHelper) {
                _this.countHelper = countHelper;
                console.log(countHelper);
                if (_this.countHelper > 0) {
                    _this.getFunAgPendientes(valor);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: "Cuidado",
                        text: "Este funcionario cuenta con expedientes pendientes en la agencia seleccionada, necesita asignar los expedientes para realizar el cambio de adscripción o cualquier otra acción.",
                        type: "info"
                    }).then(function () {
                        _this.pageRefresh();
                        _this.router.navigate(['/pages/membership']);
                    });
                    // swal({
                    //   title: 'CUIDADO!',
                    //   text: "El funcionario tiene expedientes en la agencia seleccionada, " +
                    //   "si lo cambia a esta agencia tomará el control de los mismos, " +
                    //   "¿desea continuar?",
                    //   type: 'warning',
                    //   showCancelButton: true,
                    //   allowOutsideClick: false,
                    //   allowEscapeKey: false,
                    //   confirmButtonColor: '#3085d6',
                    //   cancelButtonColor: '#aaa',
                    //   confirmButtonText: 'Aceptar',
                    //   cancelButtonText: 'Reasignar expedientes'
                    // }).then((result) => {
                    //   if (result.value) {
                    //     swal(
                    //       'Confirmado',
                    //       'Puede seguir con el proceso.',
                    //       'success'
                    //     )
                    //   } else if (result.dismiss === swal.DismissReason.cancel) {
                    //     swal.mixin({
                    //       title: 'Reasignar',
                    //       text: "Seleccione un funcinario para continuar con la reasignación.",
                    //       type: 'warning',
                    //       allowOutsideClick: false,
                    //       allowEscapeKey : false,
                    //       input: 'select',
                    //       inputOptions: this.inputOptions,
                    //       inputPlaceholder: 'Seleccione un funcionario',
                    //       showCancelButton: true,
                    //       confirmButtonText: 'Siguiente &rarr;',
                    //       cancelButtonText: 'Cancelar',
                    //       progressSteps:['1','2'],
                    //       inputValidator: (value) => {
                    //         return !value && 'Favor de escoger al funcionario a quien reasignara expedientes.'
                    //        },
                    //     }).queue([
                    //         {
                    //         },
                    //         {
                    //           title:'Justificacion',
                    //           inputPlaceholder: 'Justificación',
                    //           text:'Justifique el motivo de la reasignación de expedientes.',
                    //           input:'text',
                    //           inputValidator: (value) => {
                    //             return !value && 'Por favor ingrese la justificacion.'
                    //           },
                    //         }
                    //     ]).then((result) => {
                    //       if (result.value) {
                    //         var catDis: number = valor;
                    //         var iclaveFNuevo = parseInt(result.value[0]);
                    //         swal({
                    //           title: 'Confirmar',
                    //           text: "¿Esta usted seguro(a) de continuar con la reasignación de los expedientes?",
                    //           confirmButtonText: 'Aceptar',
                    //           showCancelButton: true,
                    //           allowOutsideClick: false,
                    //           allowEscapeKey : false,
                    //           cancelButtonText:'Cancelar',
                    //           confirmButtonColor: '#4BAE4F',
                    //           cancelButtonColor: '#d33',
                    //         }).then((result) =>{
                    //           if (result.value) {
                    //             const iclaveFAnt: number = clave;
                    //             let asignar = new AsignarPendientes(catDis, iclaveFNuevo, iclaveFAnt);
                    //             // console.log(asignar);
                    //             this.asignarExpPendientes( asignar );
                    //             swal(
                    //               'Confirmado',
                    //               'Los expedientes se han reasignado correctamente.',
                    //               'success'
                    //             )
                    //           } else if (result.dismiss === swal.DismissReason.cancel) {
                    //             swal({
                    //               type: 'error',
                    //               title: 'Cancelado',
                    //               text: 'Se ha cancelado la reasignación de los expedientes.',
                    //             });
                    //           }
                    //         });
                    //       } else if (result.dismiss === swal.DismissReason.cancel) {
                    //         swal({
                    //           type: 'error',
                    //           title: 'Cancelado',
                    //           text: 'Se ha cancelado la reasignación de los expedientes.',
                    //         });
                    //       }
                    //     });
                    //   }
                    // });
                }
                _this.inputOptions = {};
            });
        }
    };
    MembershipComponent.prototype.getFunAgPendientes = function (catDiscriminantePendientes) {
        var _this = this;
        this.membershipService.getFUsuarioAgencia(catDiscriminantePendientes).subscribe(function (exp) {
            _this.FunAgPendientes = exp;
            // console.log(this.FunAgPendientes);
            for (var i = 0; i < _this.FunAgPendientes.length; i++) {
                if (_this.FunAgPendientes[i].usuario[0].bEsActivo === 0) {
                    _this.FunAgPendientes.splice(i, 1);
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.FunAgPendientes[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.FunAgPendientes[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.FunAgPendientes.splice(i, 1);
                }
            }
            for (var j = 0; j < _this.FunAgPendientes.length; j++) {
                var id = _this.FunAgPendientes[j].iClaveFuncionario;
                var name = _this.FunAgPendientes[j].cNombreFuncionario + " " + _this.FunAgPendientes[j].cApellidoPaternoFuncionario;
                _this.inputOptions[id] = name;
            }
            // console.log(this.inputOptions);
        });
    };
    // Se actualiza el funcionario seleccionado
    MembershipComponent.prototype.cambioAdscripcion1 = function (cambioAdscripcion) {
        var _this = this;
        this.loading = true;
        this.membershipService.cambioAdscripcion(cambioAdscripcion).subscribe(function (cambioAdscripcion) {
            _this.cambioAdscripcion;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Cambio exitoso",
                position: 'center',
                text: "El cambio de adscripcioón se ha llevado con exito.",
                type: 'success',
                timer: 3000
            });
            _this.loading = false;
            _this.pageRefresh();
            _this.router.navigate(['/pages/membership']);
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Error en el cambio de adscripción",
                position: 'center',
                // text: "Ocurrió un error: " + err.message + " verifique su conección o los permisos de acceso de la red.",
                html: "Ocurrió un error: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>",
                type: 'error',
                showConfirmButton: true
            });
            _this.loading = false;
        });
        // console.log("Se ejecuto el cambio de adscripcion: " + cambioAdscripcion.iClaveFuncionarioSolicitante);
        // swal({
        //   title:"Registro exitoso...",
        //   text: this.titularAgencia,
        //   type: "success"
        //   }).then(() =>{
        //     this.pageRefresh();
        //     this.router.navigate(['/pages/membership']);
        //   });
    };
    MembershipComponent.prototype.cambioEstatus = function (cambioEstatus) {
        var _this = this;
        this.membershipService.cambioEstatus(cambioEstatus).subscribe(function (cambioEstatus) {
            _this.cambioEstatus;
        });
        // console.log("se ejecuto cambio de estatus.");
    };
    MembershipComponent.prototype.cambioMP1 = function (cambioMP) {
        var _this = this;
        this.membershipService.cambioMP(cambioMP).subscribe(function (cambioMP) {
            _this.cambioMP;
        });
    };
    MembershipComponent.prototype.toggle = function (type) {
        this.type = type;
    };
    // Se dispara con el evento del clic cuando se selecciona un rol del catálogo
    MembershipComponent.prototype.onSelectRol = function (r) {
        this.selectedRol = r.rol_id;
        // console.log("Se selecciono el rol => " + this.selectedRol);
        this.addRol = r;
        // console.log(this.addRol);
        this.posicionRol = this.roles.indexOf(this.addRol);
    };
    // Se agrega el rol a los roles del funcionario
    MembershipComponent.prototype.agregarRol = function () {
        if (this.posicionRol > -1 && this.selectedRol !== 0) {
            this.funcionarioRol.push(this.addRol);
            // console.log("Funcion agregar:");
            // console.log(this.addRol);
            // console.log("Array funcionarioRol:");
            // console.log(this.funcionarioRol);
            this.roles.splice(this.posicionRol, 1);
        }
        else {
            //this.toastrService.warning('Por favor seleccione un rol para agregar!', 'Atención!', {timeOut: 3000});
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Por favor seleccione un rol para agregar!",
                // text: this.titularAgencia,
                text: "Debe seleccionar un rol del catalogo de roles.",
                type: "warning"
            });
        }
        this.posicionRol = 0;
        this.selectedRol = 0;
    };
    MembershipComponent.prototype.onSelectFRolF = function (rol) {
        var _this = this;
        this.selectedRolF = rol.rol_id;
        // console.log("Se seleccion de rol del funcionario=> " + this.selectedRolF);
        this.delRol = rol;
        // console.log(this.delRol);
        this.posicionRolF = this.funcionarioRol.indexOf(this.delRol);
        this.membershipService.getCountRoles(this.funcionario.iClaveFuncionario, this.funcionario.catDiscriminante_id, this.selectedRolF).subscribe(function (revision) {
            _this.revisarRoles = revision;
            console.log(_this.revisarRoles);
        });
    };
    MembershipComponent.prototype.quitarRol = function () {
        if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
            if (this.revisarRoles <= 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "No se puede eliminar el rol!",
                    text: "Este funcionario es el único en la agencia que cuentaba con el rol seleccionado. " +
                        "para poder eliminarlo por favor asegurese que alguien mas tenga este rol.",
                    type: "warning"
                });
            }
            else if (this.delRol.esPrincipal === 1) {
                // console.log("El rol es principal");
                // this.toastrService.warning('no puede eliminar el rol principal! para poder eliminar este rol seleccione otro como principal.', 'Atención!', {timeOut: 3000});
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    title: "no puede eliminar el rol principal!",
                    text: "para poder eliminar este rol seleccione otro como principal.",
                    type: "warning"
                });
            }
            else {
                this.roles.push(this.delRol);
                this.rolesEliminados.push(this.delRol);
                // console.log(this.rolesEliminados);
                // console.log("Funcion quitar");
                // console.log(this.delRol);
                this.roles.sort(function (a, b) { return a.rol_id - b.rol_id; });
                // console.log("Array roles:");
                // console.log(this.roles);
                this.funcionarioRol.splice(this.posicionRolF, 1);
            }
            // if (this.delRol.esPrincipal === 1) {
            //   // console.log("El rol es principal");
            //   // this.toastrService.warning('no puede eliminar el rol principal! para poder eliminar este rol seleccione otro como principal.', 'Atención!', {timeOut: 3000});
            //   swal({
            //     title: "no puede eliminar el rol principal!",
            //     text: "para poder eliminar este rol seleccione otro como principal.",
            //     type: "warning"
            //   });
            // } else {
            //   this.roles.push(this.delRol);
            //   this.rolesEliminados.push(this.delRol);
            //   // console.log(this.rolesEliminados);
            //   // console.log("Funcion quitar");
            //   // console.log(this.delRol);
            //   this.roles.sort( (a, b) => a.rol_id - b.rol_id );
            //   // console.log("Array roles:");
            //   // console.log(this.roles);
            //   this.funcionarioRol.splice(this.posicionRolF, 1);
            // }
        }
        else {
            //this.toastrService.warning('Por favor seleccione un rol para eliminar!', 'Atención!', {timeOut: 3000});
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                title: "Por favor seleccione un rol para eliminar!",
                // text: this.titularAgencia,
                text: "Debe seleccionar un rol del funcionario.",
                type: "warning"
            });
        }
        this.posicionRolF = 0;
        this.selectedRolF = 0;
        this.revisarRoles = 0;
    };
    MembershipComponent.prototype.radioRolChange = function (rol) {
        for (var i = 0; i < this.funcionarioRol.length; i++) {
            if (this.funcionarioRol[i].rol_id === rol.rol_id) {
                this.funcionarioRol[i].esPrincipal = 1;
            }
            else if (this.funcionarioRol[i].rol_id !== rol.rol_id) {
                this.funcionarioRol[i].esPrincipal = 0;
            }
        }
    };
    // Se abre el modal y se cargan los datos del funcionario seleccionado
    MembershipComponent.prototype.openModal = function (modalContent, funcionario, catUIE) {
        var _this = this;
        this.funcionarioSeleccionado = funcionario.iclaveFuncionario;
        console.log(funcionario);
        // this.getAgencias();
        // this.getRoles();
        this.getFuncionarioRol(funcionario);
        this.getFuncionarioAgencia(funcionario);
        this.getCatUIE(catUIE);
        this.getCountExp1(funcionario);
        // this.ExpSinAsignar( funcionario );
        this.loading = true;
        this.membershipService.getExisteExp(funcionario.catDiscriminante_id).subscribe(function (existentes) {
            _this.expSinAsignar = existentes;
            console.log(_this.expSinAsignar);
            _this.valorExpSinAsignar = _this.expSinAsignar.length;
            _this.membershipService.getCountRoles(funcionario.iClaveFuncionario, funcionario.catDiscriminante_id, 6).subscribe(function (roles) {
                _this.rolesAMPFac = roles;
                console.log(_this.rolesAMPFac);
                if (_this.valorExpSinAsignar > 0 && _this.rolesAMPFac <= 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        title: 'Expedientes sin asignar',
                        text: 'Existen expedientes sin asignar en esta agencia, ¿desea continuar con el proceso?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Continuar',
                        cancelButtonText: 'Cancelar'
                    }).then(function (result) {
                        if (result.value) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                                title: "Ha decidido continuar",
                                text: "Al continuar, el proceso de cambio seguira de manera avitual",
                                type: "success"
                            }).then(function () {
                            });
                        }
                        else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.cancel) {
                            _this.closeModal();
                        }
                    });
                }
                if (_this.count <= 0) {
                    _this.prueba = true;
                }
                if (funcionario) {
                    var catDis = funcionario.catDiscriminante_id;
                    for (var i = 0; i < _this.agencias.length; i++) {
                        if (catDis === _this.agencias[i].catDiscriminante_id) {
                            _this.agencias.splice(i, 1);
                        }
                    }
                    _this.funcionario = funcionario;
                    _this.form.setValue(funcionario);
                }
                _this.modalRef = _this.modalService.open(modalContent, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });
                _this.modalRef.result.then(function (result) {
                    _this.form.reset();
                }, function (reason) {
                    _this.form.reset();
                });
            });
            _this.loading = false;
        });
    };
    // Se abre el modal y se cargan los los expedientes pendientes
    MembershipComponent.prototype.openExpPend = function (expPendientes) {
        this.getExpPendientes();
        this.modalExpPend = this.modalService.open(expPendientes, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });
    };
    MembershipComponent.prototype.closeModal = function () {
        this.modalRef.close();
        // this.form.reset();
        this.funcionario = null;
        this.rolesEliminados = [];
        this.getRoles();
        this.selectedRol = 0;
        this.selectedRolF = 0;
        this.getAgencias();
        this.valAgenciaSelect = true;
        this.p2 = 1;
        // this.pageRefresh();
    };
    // Cerrar el modal de expedientes pendientes
    MembershipComponent.prototype.closeModalExpPend = function () {
        this.modalExpPend.close();
        this.formExpPend.reset();
        this.selectedExpPend = 0;
        this.funcinariosAgencia1 = [];
        this.rows = [];
        this.funcinarioAgencia = [];
        this.rolesFun2 = [];
        this.selected = [];
    };
    MembershipComponent.prototype.radioChange = function (e) {
        this.radioAsign = true;
        if (this.radioAsign || this.expPendientes) {
            this.prueba = true;
        }
    };
    // Se ejecuta el envio del formulario
    MembershipComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            // if (this.count > 0 && (this.form.value.archivoDigital_id !== null || this.expPendientes === false)) {
            //   this.prueba = true;
            // }
            if (this.expPendientes) {
                this.pendientesNum = 1;
            }
            else {
                this.pendientesNum = 0;
            }
            if (this.esMP) {
                this.esMPNum = 1;
            }
            else {
                this.esMPNum = 0;
            }
            if (this.soloRoles) {
                this.soloRolesNum = 1;
            }
            else {
                this.soloRolesNum = 0;
            }
            var iClaveFuncionarioSolicitante = 0;
            var iClaveFuncionarioAnterior = 0;
            var iClaveFuncionarioExp = 0;
            var catDiscriminateSolicitante = 0;
            var catUIE_actual = 0;
            var catDiscriminateNuevo = 0;
            var Justificacion = "";
            var rolesFuncionario = [];
            var rolesString = "";
            var esMP = 0;
            var soloRoles = 0;
            iClaveFuncionarioSolicitante = this.form.value.iClaveFuncionario;
            iClaveFuncionarioAnterior = this.clavedelactaul[0];
            iClaveFuncionarioExp = this.form.value.archivoDigital_id;
            catDiscriminateSolicitante = this.funcionario.catDiscriminante_id;
            catUIE_actual = this.val[0];
            catDiscriminateNuevo = this.form.value.catDiscriminante_id;
            Justificacion = this.form.value.cRFC;
            if (this.count > 0) {
                var expPendientes = 1;
                // var  expPendientes: number = this.pendientesNum;
            }
            else {
                var expPendientes = 2;
            }
            this.esPrincipal = this.form.value.puesto_val;
            if (this.esPrincipal === null) {
                rolesFuncionario = this.funcionarioRol;
                for (var i = 0; i < rolesFuncionario.length; i++) {
                    if (rolesFuncionario[i].esPrincipal === 1) {
                        this.esPrincipal = rolesFuncionario[i].rol_id;
                    }
                }
            }
            var id_roles = [];
            id_roles = this.funcionarioRol.map(function (cat) { return cat.rol_id; });
            rolesString = String(id_roles);
            //const esPrincipal: number = this.form.value.puesto_val;
            esMP = this.esMPNum;
            soloRoles = this.soloRolesNum;
            // console.log("iClaveFuncionarioSolicitante => " + iClaveFuncionarioSolicitante);
            // console.log("iClaveFuncionarioAnterior => " + iClaveFuncionarioAnterior);
            // console.log("iClaveFuncionarioExp => " + iClaveFuncionarioExp);
            // console.log("catDiscriminante_id => " + catDiscriminateSolicitante);
            // console.log("catUIE_id => " + catUIE_actual);
            // console.log("catDiscriminante_idNuevo => " + catDiscriminateNuevo);
            // console.log("Jusfificación => " + Justificacion);
            // console.log("Expedientes pendientes => " + expPendientes);
            // console.log("Roles del funcionario => " + rolesFuncionario);
            // console.log("Roles en un string => " + rolesString);
            // console.log("Es principal => " + this.esPrincipal);
            // console.log("Se envio el formulario:");
            // console.log(this.funcionarioRol);
            var cambioAdscripcion = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["CambioAdscripcion"](iClaveFuncionarioSolicitante, iClaveFuncionarioAnterior, iClaveFuncionarioExp, catDiscriminateSolicitante, catUIE_actual, catDiscriminateNuevo, Justificacion, expPendientes, rolesString, this.esPrincipal, esMP, soloRoles);
            // console.log(cambioAdscripcion);
            this.cambioAdscripcion1(cambioAdscripcion);
            this.form.reset({
                hasSubMenu: false,
                parentId: 0
            });
            // }
        }
        this.expPendientes = false;
    };
    // Se cargan los expedientes que se encuentran pendientes
    MembershipComponent.prototype.getExpPendientes = function () {
        var _this = this;
        this.arrAgTemp = [];
        this.arrAgSinRepetir = [];
        this.agenciasExpPend1 = [];
        this.membershipService.getExpPendientes().subscribe(function (eP) {
            _this.expPendientesLista = eP;
            console.log(_this.expPendientesLista);
            for (var i = 0; i < _this.expPendientesLista.length; i++) {
                var ag = _this.expPendientesLista[i].catDiscriminanteAnterior;
                for (var j = 0; j < _this.agencias.length; j++) {
                    if (ag === _this.agencias[j].catDiscriminante_id) {
                        var agNombre = _this.agencias[j].cNombre;
                        // this.expPendientesLista
                        _this.expPendientesLista[i].cNombre = agNombre;
                        break;
                    }
                }
                _this.arrAgTemp.push(_this.expPendientesLista[i].catDiscriminanteAnterior);
            }
            var distinct = function (value, index, self) {
                return self.indexOf(value) === index;
            };
            _this.arrAgSinRepetir = _this.arrAgTemp.filter(distinct);
            console.log(_this.arrAgSinRepetir);
            _this.membershipService.getAgencias().subscribe(function (agencias) {
                _this.agenciasExpPend = agencias;
                for (var i = 0; i < _this.agenciasExpPend.length; i++) {
                    for (var j = 0; j < _this.arrAgSinRepetir.length; j++) {
                        if (_this.arrAgSinRepetir[j] == _this.agenciasExpPend[i].catDiscriminante_id) {
                            _this.agenciasExpPend1.push(_this.agenciasExpPend[i]);
                        }
                    }
                }
                console.log(_this.agenciasExpPend1);
            });
            for (var i = 0; i < _this.expPendientesLista.length; i++) {
                var f = _this.expPendientesLista[i].iClaveFuncionario;
                for (var j = 0; j < _this.funcionarios.length; j++) {
                    if (f === _this.funcionarios[j].iClaveFuncionario) {
                        var nombreFuncionario = _this.funcionarios[j].cNombreFuncionario + " "
                            + _this.funcionarios[j].cApellidoPaternoFuncionario + " "
                            + _this.funcionarios[j].cApellidoMaternoFuncionario;
                        // this.expPendientesLista
                        // this.expPendientesLista[i].cNombre = agNombre;
                        _this.expPendientesLista[i].nombreFuncionario = nombreFuncionario;
                        break;
                    }
                }
            }
        });
    };
    MembershipComponent.prototype.getFuncionariosAg = function (expPend) {
        var _this = this;
        this.membershipService.getFUsuarioAgencia(expPend.catDiscriminanteAnterior).subscribe(function (exp) {
            _this.funcinariosAgencia = exp;
            console.log(_this.funcinariosAgencia);
            for (var i = 0; i < _this.funcinariosAgencia.length; i++) {
                if (_this.funcinariosAgencia[i].usuario[0].bEsActivo === 0) {
                    _this.funcinariosAgencia.splice(i, 1);
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.funcinariosAgencia[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.funcinariosAgencia[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.funcinariosAgencia.splice(i, 1);
                }
            }
        });
    };
    MembershipComponent.prototype.onSelectExpPend = function (expPend) {
        this.selectedExpPend = expPend.cambioAdscripcion_id;
        this.objExpPend = expPend;
        // console.log(this.objExpPend);
        this.getFuncionariosAg(this.objExpPend);
        for (var i = 0; i < this.funcinariosAgencia.length; i++) {
            if (this.objExpPend.iClaveFuncionario === this.funcinariosAgencia[i].iClaveFuncionario) {
                this.funcinariosAgencia.splice(i, 1);
            }
        }
        // this.expPendientesLista.
    };
    MembershipComponent.prototype.onSelectAgencia = function (catDiscriminanteAnterior) {
        this.rows = [];
        this.funcinarioAgencia = [];
        this.rolesFun = [];
        this.rolesFun2 = [];
        this.arrTempFun = [];
        console.log("valor select agencia => " + catDiscriminanteAnterior);
        this.catDisGlobal = catDiscriminanteAnterior;
        for (var i = 0; i < this.expPendientesLista.length; i++) {
            if (this.expPendientesLista[i].catDiscriminanteAnterior == catDiscriminanteAnterior) {
                var flag = this.expPendientesLista[i].iClaveFuncionario;
                this.arrTempFun.push(flag);
            }
        }
        var distinct = function (value, index, self) {
            return self.indexOf(value) === index;
        };
        this.arrTempFunSinRep = this.arrTempFun.filter(distinct);
        for (var j = 0; j < this.funcionarios.length; j++) {
            for (var k = 0; k < this.arrTempFunSinRep.length; k++) {
                if (this.funcionarios[j].iClaveFuncionario === this.arrTempFunSinRep[k]) {
                    this.funcinarioAgencia.push(this.funcionarios[j]);
                }
            }
        }
        console.log(this.funcinarioAgencia);
    };
    MembershipComponent.prototype.onSelectFuncionario = function (iclaveFuncionarioAsign) {
        var _this = this;
        this.rolesFun2 = [];
        this.arrTempJerar = [];
        var arrTemp = [];
        console.log("valor select funcionario => " + iclaveFuncionarioAsign);
        this.claveglobal = iclaveFuncionarioAsign;
        this.catDis = this.catDisGlobal;
        // this.getRoles();
        // console.log(this.roles);
        /*------------------------------------------------------------------------------------------------------------------------------------*/
        for (var h = 0; h < this.expPendientesLista.length; h++) {
            if (this.expPendientesLista[h].iClaveFuncionario == iclaveFuncionarioAsign) {
                this.jeraTabla = this.expPendientesLista[h].jerarquiaOrganizacional_id;
            }
        }
        if (this.jeraTabla == null) {
            this.loadingIndicator = true;
            this.fetch2(function (data) {
                _this.temp = data.slice();
                _this.rows = data;
                console.log(_this.rows);
                for (var i = 0; i < _this.rows.length; i++) {
                    arrTemp.push(_this.rows[i].jerarquiaOrganizacional_id);
                }
                var distinct = function (value, index, self) {
                    return self.indexOf(value) === index;
                };
                _this.arrTempJerar = arrTemp.filter(distinct);
                console.log(_this.arrTempJerar);
                _this.membershipService.getRoles().subscribe(function (roles) {
                    _this.rolesFun = roles;
                    // console.log(this.rolesFun);
                    for (var j = 0; j < _this.arrTempJerar.length; j++) {
                        for (var k = 0; k < _this.rolesFun.length; k++) {
                            if ((_this.rolesFun[k].jerarquiaOrganizacional_id) == _this.arrTempJerar[j]) {
                                if (_this.rolesFun[k].rol_id == 8 ||
                                    _this.rolesFun[k].rol_id == 7 ||
                                    _this.rolesFun[k].rol_id == 6 ||
                                    _this.rolesFun[k].rol_id == 5 ||
                                    _this.rolesFun[k].rol_id == 3 ||
                                    _this.rolesFun[k].rol_id == 2) {
                                    _this.rolesFun2.push(_this.rolesFun[k]);
                                }
                            }
                        }
                    }
                });
                setTimeout(function () { _this.loadingIndicator = false; }, 1500);
            }, this.claveglobal, this.catDis);
            // console.log(this.arrTempJerar);
        }
        else {
            this.loadingIndicator = true;
            this.fetch(function (data) {
                _this.temp = data.slice();
                _this.rows = data;
                console.log(_this.rows);
                for (var i = 0; i < _this.rows.length; i++) {
                    arrTemp.push(_this.rows[i].jerarquiaOrganizacional_id);
                }
                var distinct = function (value, index, self) {
                    return self.indexOf(value) === index;
                };
                _this.arrTempJerar = arrTemp.filter(distinct);
                console.log(_this.arrTempJerar);
                _this.membershipService.getRoles().subscribe(function (roles) {
                    _this.rolesFun = roles;
                    console.log(_this.rolesFun);
                    for (var j = 0; j < _this.arrTempJerar.length; j++) {
                        for (var k = 0; k < _this.rolesFun.length; k++) {
                            if ((_this.rolesFun[k].jerarquiaOrganizacional_id) == _this.arrTempJerar[j]) {
                                if (_this.rolesFun[k].rol_id == 8 ||
                                    _this.rolesFun[k].rol_id == 7 ||
                                    _this.rolesFun[k].rol_id == 6 ||
                                    _this.rolesFun[k].rol_id == 5 ||
                                    _this.rolesFun[k].rol_id == 3 ||
                                    _this.rolesFun[k].rol_id == 2) {
                                    _this.rolesFun2.push(_this.rolesFun[k]);
                                }
                            }
                        }
                    }
                });
                setTimeout(function () { _this.loadingIndicator = false; }, 1500);
            }, this.claveglobal, this.catDis, this.jeraTabla);
        }
    };
    MembershipComponent.prototype.onSelectRoles = function (value) {
        var _this = this;
        this.iclave = this.claveglobal;
        this.catDis = this.catDisGlobal;
        for (var i = 0; i < this.roles.length; i++) {
            var objeto = this.roles[i];
            var rol = objeto.rol_id;
            if (rol == value) {
                this.jerarquiaOrg = objeto.jerarquiaOrganizacional_id;
                this.jerarqVal = this.jerarquiaOrg.toString();
                break;
            }
        }
        this.FiltrarJerarquia(this.jerarqVal);
        console.log("Este es el rol => " + rol);
        console.log("Esta es la jerarquia => " + this.jerarquiaOrg);
        console.log("valor select rol => " + value);
        console.log("valor select iclave => " + this.iclave);
        console.log("valor select catDis => " + this.catDis);
        this.membershipService.getFUsuarioAgencia(this.catDis).subscribe(function (exp) {
            _this.funcinariosAgencia = exp;
            console.log(_this.funcinariosAgencia);
            for (var i = 0; i < _this.funcinariosAgencia.length; i++) {
                // if (this.funcinariosAgencia[i].usuario[0].bEsActivo === 0) {
                //   this.funcinariosAgencia.splice( i, 1 );
                // }
                var rolIdArray = [];
                for (var j = 0; j < _this.funcinariosAgencia[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.funcinariosAgencia[i].usuario[0].usuarioRol[j].rol_id);
                }
                console.log(rolIdArray);
                var cont = false;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === rol) {
                        cont = true;
                    }
                }
                console.log(cont);
                console.log("posicion => " + i);
                if (cont) {
                    _this.funcinariosAgencia1.push(_this.funcinariosAgencia[i]);
                }
            }
            console.log(_this.funcinariosAgencia1);
        });
        // this.membershipService.getListarExp(this.iclave, this.catDis, this.jerarquiaOrg).subscribe( listaExp => {
        //    this.listaExp = listaExp
        //    console.log(listaExp);
        // });
        // this.fetch((data) => {
        //   this.temp = [...data];
        //   this.rows = data;
        //   setTimeout(() => { this.loadingIndicator = false; }, 1500);
        // }, this.iclave, this.catDis, this.jerarquiaOrg);
    };
    MembershipComponent.prototype.fetch = function (data, clave, cat, jerarquiaOrg) {
        var req = new XMLHttpRequest();
        req.open('GET', this.membershipService.general + '/listarExp/GetExpedientes?clavefunci=' + clave
            + '&catDis=' + cat
            + '&jerarquia=' + jerarquiaOrg);
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
        console.log(req);
    };
    MembershipComponent.prototype.fetch2 = function (data, clave, cat) {
        var req = new XMLHttpRequest();
        req.open('GET', this.membershipService.general + '/listarExp/GetExpedientesSinJera?clavefunci=' + clave
            + '&catDis=' + cat);
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
        console.log(req);
    };
    MembershipComponent.prototype.FiltrarExpediente = function (event) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (numExp) {
            return numExp.cNumeroExpediente.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    MembershipComponent.prototype.FiltrarNuc = function (event) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (nNuc) {
            return nNuc.cNumeroGeneralCaso.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    MembershipComponent.prototype.FiltrarJerarquia = function (valor) {
        var val = valor.toLowerCase();
        var temp = this.temp.filter(function (jerarquia) {
            return (jerarquia.jerarquiaOrganizacional_id).toString().toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
    };
    MembershipComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        this.arrayExp.push(selected);
        console.log(this.arrayExp);
        var _b;
    };
    // Se actualiza el funcionario seleccionado
    MembershipComponent.prototype.asignarExpPendientes = function (asignarPendientes) {
        var _this = this;
        this.membershipService.asignarExpPendientes(asignarPendientes).subscribe(function (asignarPendientes) {
            _this.asignarPendientes;
        });
        // console.log("Se ejecuto el asignar expedientes: " + asignarPendientes.iclavefuncionarioNuevo);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Se asignaron los expedientes...",
            text: this.titularAgencia,
            type: "success"
        }).then(function () {
            _this.closeModalExpPend();
            _this.router.navigate(['/pages/membership']);
        });
    };
    MembershipComponent.prototype.onSubmitExpPend = function () {
        if (this.formExpPend.valid) {
            this.arrayExp = this.selected.map(function (uno) { return uno.numeroExpediente_id; });
            var stringArray = String(this.arrayExp);
            var iclavefuncionarioAnt = this.formExpPend.value.iclaveFuncionarioAsign;
            var iclavefuncionarioNuevo = this.formExpPend.value.iclaveFuncionarioDestino;
            var catDiscriminante = this.catDis;
            var justificacion = this.formExpPend.value.justificacion;
            console.log(iclavefuncionarioAnt + "             " + iclavefuncionarioNuevo + "   " + stringArray + "       " + catDiscriminante + "         " + justificacion);
            var asignarPendientes = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["AsignarPendientes"](iclavefuncionarioAnt, iclavefuncionarioNuevo, stringArray, catDiscriminante, justificacion);
            this.asignarExpPendientes(asignarPendientes);
            this.formExpPend.reset({
                hasSubMenu: false,
                parentId: 0
            });
            this.closeModalExpPend();
            //this.pageRefresh();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], MembershipComponent.prototype, "table", void 0);
    MembershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-membership',
            template: __webpack_require__(/*! ./membership.component.html */ "./src/app/pages/membership/membership.component.html"),
            styles: [__webpack_require__(/*! ./membership.component.scss */ "./src/app/pages/membership/membership.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_membership_service__WEBPACK_IMPORTED_MODULE_5__["MembershipService"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _membership_service__WEBPACK_IMPORTED_MODULE_5__["MembershipService"],
            _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
    ], MembershipComponent);
    return MembershipComponent;
}());



/***/ }),

/***/ "./src/app/pages/membership/membership.model.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/membership/membership.model.ts ***!
  \******************************************************/
/*! exports provided: User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, FuncionarioAgencia, FuncionarioUsuario, Agencias, catUIE, Roles, FuncionarioUsuarioRol, FunciAgencia, usuario, usuarioRol, CambioAdscripcion, ExpPendientes, AsignarPendientes, cambioExpPendientes, cambioEstatus, cambioMP, jerarquia, listarExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWork", function() { return UserWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContacts", function() { return UserContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSocial", function() { return UserSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettings", function() { return UserSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionariosData", function() { return FuncionariosData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioAgencia", function() { return FuncionarioAgencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioUsuario", function() { return FuncionarioUsuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agencias", function() { return Agencias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catUIE", function() { return catUIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioUsuarioRol", function() { return FuncionarioUsuarioRol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunciAgencia", function() { return FunciAgencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuario", function() { return usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuarioRol", function() { return usuarioRol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambioAdscripcion", function() { return CambioAdscripcion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpPendientes", function() { return ExpPendientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarPendientes", function() { return AsignarPendientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambioExpPendientes", function() { return cambioExpPendientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambioEstatus", function() { return cambioEstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambioMP", function() { return cambioMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jerarquia", function() { return jerarquia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listarExp", function() { return listarExp; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());

var UserWork = /** @class */ (function () {
    function UserWork() {
    }
    return UserWork;
}());

var UserContacts = /** @class */ (function () {
    function UserContacts() {
    }
    return UserContacts;
}());

var UserSocial = /** @class */ (function () {
    function UserSocial() {
    }
    return UserSocial;
}());

var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());

// Mostrar resultados de la busqueda de funcionarios. (tabla Funcionario)
var FuncionariosData = /** @class */ (function () {
    function FuncionariosData() {
    }
    return FuncionariosData;
}());

// Datos de la agencia. (tabla CatDiscriminante)
var FuncionarioAgencia = /** @class */ (function () {
    function FuncionarioAgencia() {
    }
    return FuncionarioAgencia;
}());

// Datos de usuario especifico. (tabla Usuario)
var FuncionarioUsuario = /** @class */ (function () {
    function FuncionarioUsuario() {
    }
    return FuncionarioUsuario;
}());

// Roles de usuario especifico. (tabla UsuarioRol)
// export class FuncionarioUsuarioRol {
//   Usuario_id: number;
//   rol_id: number;
//   dFechaInicio: Date;
//   dFechaFin: Date;
//   esPrincipal: number;
// }
// Catálogo de agencias. (tabla CatDiscriminante)
var Agencias = /** @class */ (function () {
    function Agencias() {
    }
    return Agencias;
}());

var catUIE = /** @class */ (function () {
    function catUIE() {
    }
    return catUIE;
}());

// Catálogo de roles (tabla Rol)
var Roles = /** @class */ (function () {
    function Roles() {
    }
    return Roles;
}());

// Roles de usuario especifico. (tabla UsuarioRol)
var FuncionarioUsuarioRol = /** @class */ (function () {
    function FuncionarioUsuarioRol() {
    }
    return FuncionarioUsuarioRol;
}());

var FunciAgencia = /** @class */ (function () {
    function FunciAgencia() {
    }
    return FunciAgencia;
}());

var usuario = /** @class */ (function () {
    function usuario() {
    }
    return usuario;
}());

var usuarioRol = /** @class */ (function () {
    function usuarioRol() {
    }
    return usuarioRol;
}());

var CambioAdscripcion = /** @class */ (function () {
    function CambioAdscripcion(iClaveFuncionarioSolicitante, iClaveFuncionarioAnterior, iClaveFuncionarioExp, catDiscriminateSolicitante, catUIE_actual, catDiscriminateNuevo, Justificacion, pendientes, rolesFuncionario, esPrincipal, esMP, funcion_roles) {
        this.iClaveFuncionarioSolicitante = iClaveFuncionarioSolicitante;
        this.iClaveFuncionarioAnterior = iClaveFuncionarioAnterior;
        this.iClaveFuncionarioExp = iClaveFuncionarioExp;
        this.catDiscriminateSolicitante = catDiscriminateSolicitante;
        this.catUIE_actual = catUIE_actual;
        this.catDiscriminateNuevo = catDiscriminateNuevo;
        this.Justificacion = Justificacion;
        this.pendientes = pendientes;
        this.rolesFuncionario = rolesFuncionario;
        this.esPrincipal = esPrincipal;
        this.esMP = esMP;
        this.funcion_roles = funcion_roles;
    }
    return CambioAdscripcion;
}());

var ExpPendientes = /** @class */ (function () {
    function ExpPendientes() {
    }
    return ExpPendientes;
}());

var AsignarPendientes = /** @class */ (function () {
    function AsignarPendientes(iclavefuncionarioAnt, iclavefuncionarioNuevo, expedientestring, catDiscrminante_id, justificaciontring) {
        this.iclavefuncionarioAnt = iclavefuncionarioAnt;
        this.iclavefuncionarioNuevo = iclavefuncionarioNuevo;
        this.expedientestring = expedientestring;
        this.catDiscrminante_id = catDiscrminante_id;
        this.justificaciontring = justificaciontring;
    }
    return AsignarPendientes;
}());

var cambioExpPendientes = /** @class */ (function () {
    function cambioExpPendientes(iclavefuncionarioAnt, iclavefuncionarioNuevo, expedientestring, catDiscrminante_id, justificaciontring) {
        this.iclavefuncionarioAnt = iclavefuncionarioAnt;
        this.iclavefuncionarioNuevo = iclavefuncionarioNuevo;
        this.expedientestring = expedientestring;
        this.catDiscrminante_id = catDiscrminante_id;
        this.justificaciontring = justificaciontring;
    }
    return cambioExpPendientes;
}());

var cambioEstatus = /** @class */ (function () {
    function cambioEstatus(iclavefuncionario, estatus, justificacion) {
        this.iclavefuncionario = iclavefuncionario;
        this.estatus = estatus;
        this.justificacion = justificacion;
    }
    return cambioEstatus;
}());

var cambioMP = /** @class */ (function () {
    function cambioMP(iclavefuncionario, esMP, justificacion) {
        this.iclavefuncionario = iclavefuncionario;
        this.esMP = esMP;
        this.justificacion = justificacion;
    }
    return cambioMP;
}());

var jerarquia = /** @class */ (function () {
    function jerarquia() {
    }
    return jerarquia;
}());

var listarExp = /** @class */ (function () {
    function listarExp() {
    }
    return listarExp;
}());

// export class ExpPendientesTabla {
//   public iclaveFuncionario: number;
//   public catDis_ant: string
// }


/***/ }),

/***/ "./src/app/pages/membership/membership.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/membership/membership.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, MembershipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipModule", function() { return MembershipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _membership_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./membership.component */ "./src/app/pages/membership/membership.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { MembershipData } from './membership.data';

var routes = [
    { path: '', component: _membership_component__WEBPACK_IMPORTED_MODULE_9__["MembershipComponent"], pathMatch: 'full' }
];
var MembershipModule = /** @class */ (function () {
    function MembershipModule() {
    }
    MembershipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                //InMemoryWebApiModule.forRoot(MembershipData, { delay: 0 }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiselectDropdownModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_11__["ngxLoadingAnimationTypes"].circleSwish,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#333300',
                    secondaryColour: '#663300',
                    tertiaryColour: '#ffffff'
                })
            ],
            declarations: [
                _membership_component__WEBPACK_IMPORTED_MODULE_9__["MembershipComponent"]
            ]
        })
    ], MembershipModule);
    return MembershipModule;
}());



/***/ }),

/***/ "./src/app/pages/membership/membership.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/membership/membership.service.ts ***!
  \********************************************************/
/*! exports provided: MembershipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipService", function() { return MembershipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MembershipService = /** @class */ (function () {
    function MembershipService(http) {
        this.http = http;
        // public general = "http://localhost:55244/api";
        this.general = "http://192.168.105.53:55245/api";
        this.url2 = this.general + "/funcionarios";
        this.url3 = this.general + "/catDiscriminantes";
        this.url4 = this.general + "/Roles";
        this.url5 = this.general + "/RolFunci";
        this.url6 = this.general + "/FunciAgencia";
        this.url7 = this.general + "/catUEI";
        this.url8 = this.general + "/funciActual";
        this.url9 = this.general + "/CambioAD/cambioADS";
        this.url10 = this.general + "/cambioAdscripcionExps";
        this.url11 = this.general + "/CambioExp";
        this.url12 = this.general + "/cambiarEstatus";
        this.url13 = this.general + "/CountExp/countExp";
        this.url14 = this.general + "/cambioEsMP";
        this.url15 = this.general + "/HelperAgencia";
        this.url16 = this.general + "/listarExp/GetExpedientes?";
        this.url17 = this.general + "/ObtJerarquia/ObtJerarquia?";
        this.url18 = this.general + "istarExp/GetExpedientesSinJera?";
        this.url19 = this.general + "/ExisteRol/countRolAgencia?";
        this.url20 = this.general + "/listarExp/GetExpedientesSinJA";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    MembershipService.prototype.getFuncionarios = function () {
        return this.http.get(this.url2);
    };
    MembershipService.prototype.getAgencias = function () {
        return this.http.get(this.url3);
    };
    MembershipService.prototype.getFUsuarioAgencia = function (catdis) {
        return this.http.get(this.url6 + "?catdis=" + catdis);
    };
    MembershipService.prototype.getRoles = function () {
        return this.http.get(this.url4);
    };
    MembershipService.prototype.getFUsuarioRol = function (id) {
        return this.http.get(this.url5 + "?iClaveFuncionario=" + id);
    };
    MembershipService.prototype.getCountExp = function (iclave, catdis) {
        return this.http.get(this.url13 + "?iclavefuncionario=" + iclave + "+&catdiscriminate=" + catdis);
    };
    MembershipService.prototype.getJerarquia = function (rol) {
        return this.http.get(this.url17 + "rol=" + rol);
    };
    MembershipService.prototype.getCounthelper = function (iclave, catdis) {
        return this.http.get(this.url15 + "?iclavefuncionario=" + iclave + "+&catdiscriminate=" + catdis);
    };
    /* ----------------------------------------------------------------------------------------------------------------*/
    MembershipService.prototype.getListarExp = function (iclave, catdis, jerarquia) {
        return this.http.get(this.url16 + "clavefunci=" + iclave + "&catDis=" + catdis + "&jerarquia=" + jerarquia);
    };
    MembershipService.prototype.getListarExpSinJera = function (iclave, catdis) {
        return this.http.get(this.url18 + "clavefunci=" + iclave + "&catDis=" + catdis);
    };
    /*-----------------------------------------------------------------------------------------------------------------*/
    MembershipService.prototype.getcatUIE = function (catdis) {
        //console.log(catdis);
        return this.http.get(this.url7 + "?catdis=" + catdis);
    };
    MembershipService.prototype.getfunciMP = function (catdis) {
        return this.http.get(this.url8 + "?catdis=" + catdis);
    };
    MembershipService.prototype.updateFuncionario = function (funcionario) {
        return this.http.put(this.url2, funcionario);
    };
    MembershipService.prototype.cambioAdscripcion = function (cambioAdscripcion) {
        var newpres = JSON.stringify(cambioAdscripcion);
        console.log(newpres);
        return this.http.post(this.url9, newpres, { headers: this.headers });
    };
    MembershipService.prototype.cambioEstatus = function (cambioEstatus) {
        var estatus = JSON.stringify(cambioEstatus);
        return this.http.post(this.url12, estatus, { headers: this.headers });
    };
    MembershipService.prototype.cambioMP = function (cambioMP) {
        var esMP = JSON.stringify(cambioMP);
        return this.http.post(this.url14, esMP, { headers: this.headers });
    };
    MembershipService.prototype.getExpPendientes = function () {
        return this.http.get(this.url10);
    };
    MembershipService.prototype.asignarExpPendientes = function (asignarExpPendientes) {
        var newExp = JSON.stringify(asignarExpPendientes);
        console.log(newExp);
        return this.http.post(this.url11, newExp, { headers: this.headers });
    };
    MembershipService.prototype.getCountRoles = function (iclaveFun, catdis, rolId) {
        return this.http.get(this.url19 + "iclavefuncionario=" + iclaveFun + "&catdiscriminante=" + catdis + "&rolId=" + rolId);
    };
    MembershipService.prototype.getExisteExp = function (catdis) {
        return this.http.get(this.url20 + "?catDis=" + catdis);
    };
    MembershipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MembershipService);
    return MembershipService;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-membership-membership-module.32fa63497f1c38dfd02f.js.map