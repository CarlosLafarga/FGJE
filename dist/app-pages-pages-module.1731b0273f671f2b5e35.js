(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pages-module"],{

/***/ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js ***!
  \******************************************************************************/
/*! exports provided: PerfectScrollbarComponent, PerfectScrollbarDirective, Geometry, Position, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfig, PerfectScrollbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function() { return PerfectScrollbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function() { return PerfectScrollbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function() { return PERFECT_SCROLLBAR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function() { return PerfectScrollbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function() { return PerfectScrollbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
var /** @type {?} */ PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PerfectScrollbarConfig.prototype.assign = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        for (var /** @type {?} */ key in config) {
            this[key] = config[key];
        }
    };
    return PerfectScrollbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarDirective = /** @class */ (function () {
    function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.PS_SCROLL_Y = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_X = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_UP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_DOWN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_LEFT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_RIGHT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_Y_REACH_END = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_Y_REACH_START = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_X_REACH_END = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_X_REACH_START = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.emit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this[event.type.replace(/-/g, '_').toUpperCase()].emit(event); };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(function () {
                _this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](_this.elementRef.nativeElement, config_1);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(function () {
                _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](function (entries, observer) {
                    _this.update();
                });
                if (_this.elementRef.nativeElement.children[0]) {
                    _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                }
                _this.ro.observe(_this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(function () {
                PerfectScrollbarEvents.forEach(function (eventName) {
                    var /** @type {?} */ eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this.elementRef.nativeElement, eventType)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                        .subscribe(function (event) { return _this.emit(event); });
                });
            });
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            if (this.instance) {
                this.zone.runOutsideAngular(function () {
                    _this.instance.destroy();
                });
                this.instance = null;
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            var /** @type {?} */ changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.ps = /**
     * @return {?}
     */
    function () {
        return this.instance;
    };
    /**
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(function () {
                if (!_this.disabled && _this.configDiff) {
                    try {
                        _this.zone.runOutsideAngular(function () {
                            if (_this.instance) {
                                _this.instance.update();
                            }
                        });
                    }
                    catch (/** @type {?} */ error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    };
    /**
     * @param {?=} prefix
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.geometry = /**
     * @param {?=} prefix
     * @return {?}
     */
    function (prefix) {
        if (prefix === void 0) { prefix = 'scroll'; }
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    };
    /**
     * @param {?=} absolute
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.position = /**
     * @param {?=} absolute
     * @return {?}
     */
    function (absolute) {
        if (absolute === void 0) { absolute = false; }
        if (!absolute) {
            return new Position(this.instance.reach.x, this.instance.reach.y);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    };
    /**
     * @param {?=} direction
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollable = /**
     * @param {?=} direction
     * @return {?}
     */
    function (direction) {
        if (direction === void 0) { direction = 'any'; }
        var /** @type {?} */ element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    };
    /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollTo = /**
     * @param {?} x
     * @param {?=} y
     * @param {?=} speed
     * @return {?}
     */
    function (x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    };
    /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToX = /**
     * @param {?} x
     * @param {?=} speed
     * @return {?}
     */
    function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToY = /**
     * @param {?} y
     * @param {?=} speed
     * @return {?}
     */
    function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToTop = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToLeft = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToRight = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    };
    /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToBottom = /**
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (offset, speed) {
        var /** @type {?} */ top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    };
    /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.scrollToElement = /**
     * @param {?} qs
     * @param {?=} offset
     * @param {?=} speed
     * @return {?}
     */
    function (qs, offset, speed) {
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            var /** @type {?} */ elementPos = element.getBoundingClientRect();
            var /** @type {?} */ scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollLeft'];
                var /** @type {?} */ position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                var /** @type {?} */ currentPos = this.elementRef.nativeElement['scrollTop'];
                var /** @type {?} */ position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    };
    /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    PerfectScrollbarDirective.prototype.animateScrolling = /**
     * @param {?} target
     * @param {?} value
     * @param {?=} speed
     * @return {?}
     */
    function (target, value, speed) {
        var _this = this;
        if (!speed || typeof window === 'undefined') {
            var /** @type {?} */ oldValue = this.elementRef.nativeElement[target];
            this.elementRef.nativeElement[target] = value;
            if (this.instance && value !== oldValue) {
                this.instance.update();
            }
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            var /** @type {?} */ newValue_1 = 0;
            var /** @type {?} */ scrollCount_1 = 0;
            var /** @type {?} */ oldTimestamp_1 = performance.now();
            var /** @type {?} */ oldValue_1 = this.elementRef.nativeElement[target];
            var /** @type {?} */ cosParameter_1 = (oldValue_1 - value) / 2;
            var /** @type {?} */ step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.elementRef.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.animateScrolling(target, value, 0);
                    }
                    else {
                        _this.elementRef.nativeElement[target] = newValue_1;
                        // On a zoomed out page the resulting offset may differ
                        // On a zoomed out page the resulting offset may differ
                        oldValue_1 = _this.elementRef.nativeElement[target];
                        if (_this.instance) {
                            _this.instance.update();
                        }
                        oldTimestamp_1 = newTimestamp;
                        window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    PerfectScrollbarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] }
    ];
    /** @nocollapse */
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERFECT_SCROLLBAR_CONFIG,] },] },
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['perfectScrollbar',] },],
        "PS_SCROLL_Y": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollY',] },],
        "PS_SCROLL_X": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollX',] },],
        "PS_SCROLL_UP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollUp',] },],
        "PS_SCROLL_DOWN": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollDown',] },],
        "PS_SCROLL_LEFT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollLeft',] },],
        "PS_SCROLL_RIGHT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollRight',] },],
        "PS_Y_REACH_END": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psYReachEnd',] },],
        "PS_Y_REACH_START": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psYReachStart',] },],
        "PS_X_REACH_END": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psXReachEnd',] },],
        "PS_X_REACH_START": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psXReachStart',] },],
    };
    return PerfectScrollbarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarComponent = /** @class */ (function () {
    function PerfectScrollbarComponent(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.stateTimeout = null;
        this.scrollPositionX = null;
        this.scrollPositionY = null;
        this.scrollDirectionX = null;
        this.scrollDirectionY = null;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.PS_SCROLL_Y = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_X = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_UP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_DOWN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_LEFT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_SCROLL_RIGHT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_Y_REACH_END = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_Y_REACH_START = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_X_REACH_END = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PS_X_REACH_START = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (a, b) { return (a === b && !_this.stateTimeout); }))
                .subscribe(function (state) {
                if (_this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(_this.stateTimeout);
                    _this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    _this.interaction = false;
                    if (state === 'x') {
                        _this.indicatorX = false;
                        _this.states.left = false;
                        _this.states.right = false;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        _this.indicatorY = false;
                        _this.states.top = false;
                        _this.states.bottom = false;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        _this.states.left = false;
                        _this.states.right = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationX) {
                            _this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        _this.states.top = false;
                        _this.states.bottom = false;
                        _this.states[state] = true;
                        if (_this.autoPropagation && _this.usePropagationY) {
                            _this.indicatorY = true;
                        }
                    }
                    if (_this.autoPropagation && typeof window !== 'undefined') {
                        _this.stateTimeout = window.setTimeout(function () {
                            _this.indicatorX = false;
                            _this.indicatorY = false;
                            _this.stateTimeout = null;
                            if (_this.interaction && (_this.states.left || _this.states.right)) {
                                _this.allowPropagationX = true;
                            }
                            if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                _this.allowPropagationY = true;
                            }
                            _this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                _this.cdRef.markForCheck();
                _this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(function () {
                var /** @type {?} */ element = _this.directiveRef.elementRef.nativeElement;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'wheel')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                    .subscribe(function (event) {
                    if (!_this.disabled && _this.autoPropagation) {
                        var /** @type {?} */ scrollDeltaX = event.deltaX;
                        var /** @type {?} */ scrollDeltaY = event.deltaY;
                        _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                    }
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'touchmove')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                    .subscribe(function (event) {
                    if (!_this.disabled && _this.autoPropagation) {
                        var /** @type {?} */ scrollPositionX = event.touches[0].clientX;
                        var /** @type {?} */ scrollPositionY = event.touches[0].clientY;
                        var /** @type {?} */ scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                        var /** @type {?} */ scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                        _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        _this.scrollPositionX = scrollPositionX;
                        _this.scrollPositionY = scrollPositionY;
                    }
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-scroll-x')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'x'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-scroll-y')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'y'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-x-reach-end')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'right'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-y-reach-end')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'bottom'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-x-reach-start')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'left'; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'ps-y-reach-start')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.state = 'top'; })))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.ngDestroy))
                    .subscribe(function (event) {
                    if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                        _this.stateUpdate.next(event.state);
                    }
                });
            });
            window.setTimeout(function () {
                if (_this.directiveRef) {
                    PerfectScrollbarEvents.forEach(function (eventName) {
                        eventName = eventName.replace(/([A-Z])/g, function (c) { return "_" + c; }).toUpperCase();
                        _this.directiveRef[eventName] = _this[eventName];
                    });
                }
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    };
    /**
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                var /** @type {?} */ element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    };
    /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    PerfectScrollbarComponent.prototype.checkPropagation = /**
     * @param {?} event
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (event, deltaX, deltaY) {
        this.interaction = true;
        var /** @type {?} */ scrollDirectionX = (deltaX < 0) ? -1 : 1;
        var /** @type {?} */ scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    };
    PerfectScrollbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'perfect-scrollbar',
                    exportAs: 'ngxPerfectScrollbar',
                    template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto; }\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent; }\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6; }\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9; }\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute; }\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px; }\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important; } }\n\n/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\nperfect-scrollbar {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  perfect-scrollbar[hidden] {\n    display: none; }\n  perfect-scrollbar[fxflex] {\n    display: flex;\n    flex-direction: column;\n    -webkit-box-orient: column;\n    -webkit-box-direction: column;\n    height: auto;\n    min-width: 0;\n    min-height: 0; }\n    perfect-scrollbar[fxflex] > .ps {\n      flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      -webkit-box-flex: 1;\n      width: auto;\n      height: auto;\n      min-width: 0;\n      min-height: 0; }\n  perfect-scrollbar[fxlayout] > .ps,\n  perfect-scrollbar[fxlayout] > .ps > .ps-content {\n    display: flex;\n    flex: 1 1 auto;\n    -ms-flex: 1 1 auto;\n    -webkit-box-flex: 1;\n    align-item: inherit;\n    place-content: inherit;\n    -webkit-box-pack: inherit;\n    -webkit-box-align: inherit;\n    flex-direction: inherit;\n    -webkit-box-orient: inherit;\n    -webkit-box-direction: inherit;\n    width: 100%;\n    height: 100%; }\n  perfect-scrollbar[fxlayout=\"row\"] > .ps,\n  perfect-scrollbar[fxlayout=\"row\"] > .ps > .ps-content {\n    flex-direction: row !important;\n    -webkit-box-orient: row !important;\n    -webkit-box-direction: row !important; }\n  perfect-scrollbar[fxlayout=\"column\"] > .ps,\n  perfect-scrollbar[fxlayout=\"column\"] > .ps > .ps-content {\n    flex-direction: column !important;\n    -webkit-box-orient: column !important;\n    -webkit-box-direction: column !important; }\n  perfect-scrollbar > .ps {\n    position: static;\n    display: block;\n    width: inherit;\n    height: inherit;\n    max-width: inherit;\n    max-height: inherit; }\n    perfect-scrollbar > .ps > .ps-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: block;\n      overflow: hidden;\n      pointer-events: none; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        position: absolute;\n        opacity: 0;\n        transition: opacity 300ms ease-in-out; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        left: 0;\n        min-width: 100%;\n        min-height: 24px; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        top: 0;\n        min-width: 24px;\n        min-height: 100%; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n        top: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n        left: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n        right: 0; }\n      perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n        bottom: 0; }\n    perfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n      top: 0 !important;\n      right: 0 !important;\n      left: auto !important;\n      width: 10px;\n      cursor: default;\n      transition: width 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover {\n        width: 15px; }\n    perfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n      top: auto !important;\n      bottom: 0 !important;\n      left: 0 !important;\n      height: 10px;\n      cursor: default;\n      transition: height 200ms linear, opacity 200ms linear, background-color 200ms linear; }\n      perfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover {\n        height: 15px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n      margin: 0 0 10px; }\n    perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n      margin: 0 10px 0 0; }\n    perfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {\n      opacity: 0.9;\n      background-color: #eee; }\n    perfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n      opacity: 0.9;\n      background-color: #eee; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n    opacity: 0.6; }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n    opacity: 1;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n    opacity: 1;\n    background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n    opacity: 1;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n    opacity: 1;\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n    background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n    background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n    background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show {\n      opacity: 1; }\n  perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n    background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%); }\n    perfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n      opacity: 1; }\n\n/*# sourceMappingURL=perfect-scrollbar.component.css.map */"]
                }] }
    ];
    /** @nocollapse */
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePSClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "autoPropagation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ps-show-limits',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollIndicators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ps-show-active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directiveRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [PerfectScrollbarDirective,] },],
        "PS_SCROLL_Y": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollY',] },],
        "PS_SCROLL_X": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollX',] },],
        "PS_SCROLL_UP": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollUp',] },],
        "PS_SCROLL_DOWN": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollDown',] },],
        "PS_SCROLL_LEFT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollLeft',] },],
        "PS_SCROLL_RIGHT": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psScrollRight',] },],
        "PS_Y_REACH_END": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psYReachEnd',] },],
        "PS_Y_REACH_START": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psYReachStart',] },],
        "PS_X_REACH_END": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psXReachEnd',] },],
        "PS_X_REACH_START": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['psXReachStart',] },],
    };
    return PerfectScrollbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PerfectScrollbarModule = /** @class */ (function () {
    function PerfectScrollbarModule() {
    }
    PerfectScrollbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
                },] }
    ];
    return PerfectScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-perfect-scrollbar.es5.js.map


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      element.scrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + element.scrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: element.scrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var isTop = element.scrollTop === 0;
    var isBottom =
      element.scrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.offsetWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: false,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = element.scrollTop; // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = this.element.scrollTop;
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./src/app/pages/blank/blank.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blank/blank.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () { };
    BlankComponent.prototype.ngOnDestroy = function () {
        console.log("onDestroy blank");
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/pages/blank/blank.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-inner\" [ngClass]=\"{ 'vertical-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'vertical'),\r\n                                        'horizontal-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'horizontal') }\">\r\n    \r\n    <app-header></app-header>\r\n\r\n    <div class=\"d-flex h-100\" [ngClass]=\"{'flex-row': settings.theme.menu == 'vertical', 'flex-column': settings.theme.menu != 'vertical'}\">\r\n        <app-sidebar *ngIf=\"settings.theme.menu == 'vertical'\"></app-sidebar> \r\n        <div class=\"main-content\"> \r\n            <app-side-chat></app-side-chat>           \r\n            <app-breadcrumb></app-breadcrumb>            \r\n            <router-outlet></router-outlet>              \r\n        </div>\r\n    </div>   \r\n\r\n</div>\r\n<app-footer></app-footer>\r\n<app-back-top position=\"200\"></app-back-top>\r\n\r\n<!-- <div class=\"settings\" [ngClass]=\"{'show': showSetting}\">\r\n    <button class=\"btn btn-default toggle\" (click)=\"showSetting=!showSetting\"><i class=\"fa fa-spin fa-gear\"></i></button>\r\n    <div class=\"card\">\r\n        <div class=\"card-header text-center\">\r\n            Settings\r\n        </div>      \r\n        <div class=\"card-body mt-2\">\r\n            <h6>Choose menu</h6>  \r\n            <div class=\"form-group\">\r\n                <div *ngFor=\"let menu of menus; let i = index;\" class=\"custom-control custom-radio\">\r\n                    <input [attr.id]=\"'radio-'+i\" type=\"radio\" name=\"menus\" class=\"custom-control-input radio-dark-gray\"\r\n                        (change)=\"chooseMenu(menu)\" [checked]=\"menu === menuOption\" [value]=\"menu\">\r\n                    <label [attr.for]=\"'radio-'+i\" class=\"custom-control-label text-capitalize\">{{menu}}</label>\r\n                </div>\r\n            </div>\r\n        </div> \r\n        <div class=\"card-body\">\r\n            <h6>Choose menu type</h6>\r\n            <div class=\"form-group\">\r\n                <div *ngFor=\"let menuType of menuTypes; let i = index;\" class=\"custom-control custom-radio\">\r\n                    <input [attr.id]=\"'menuType-'+i\" type=\"radio\" name=\"menuTypes\" class=\"custom-control-input radio-dark-gray\"\r\n                        (change)=\"chooseMenuType(menuType)\" [checked]=\"menuType === menuTypeOption\" [value]=\"menuType\">\r\n                    <label [attr.for]=\"'menuType-'+i\" class=\"custom-control-label text-capitalize\">{{menuType}}</label>\r\n                </div>\r\n            </div> \r\n        </div> \r\n        <div class=\"card-body mb-3\">\r\n            <h6>Choose theme skin</h6>          \r\n            <div class=\"theme light\" (click)=\"changeTheme('light')\"></div>\r\n            <div class=\"theme dark\" (click)=\"changeTheme('dark')\"></div>\r\n            <div class=\"theme blue\" (click)=\"changeTheme('blue')\"></div>\r\n            <div class=\"theme green\" (click)=\"changeTheme('green')\"></div>\r\n            <div class=\"theme combined\" (click)=\"changeTheme('combined')\"></div>\r\n            <div class=\"theme purple\" (click)=\"changeTheme('purple')\"></div>\r\n            <div class=\"theme orange\" (click)=\"changeTheme('orange')\"></div>\r\n            <div class=\"theme brown\" (click)=\"changeTheme('brown')\"></div>\r\n            <div class=\"theme grey\" (click)=\"changeTheme('grey')\"></div>\r\n            <div class=\"theme pink\" (click)=\"changeTheme('pink')\"></div>\r\n        </div>  \r\n        <div class=\"card-body mb-2\">\r\n            <h6>Other theme options</h6> \r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"navbarIsFixed\" [checked]=\"settings.theme.navbarIsFixed\" (change)=\"settings.theme.navbarIsFixed = !settings.theme.navbarIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"navbarIsFixed\">Fixed header</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"sidebarIsFixed\" [checked]=\"settings.theme.sidebarIsFixed\" (change)=\"settings.theme.sidebarIsFixed = !settings.theme.sidebarIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"sidebarIsFixed\">Fixed sidebar</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"footerIsFixed\" [checked]=\"settings.theme.footerIsFixed\" (change)=\"settings.theme.footerIsFixed = !settings.theme.footerIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"footerIsFixed\">Fixed footer</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.wrapper-inner {\n  min-height: 100%;\n  height: auto !important;\n  margin-bottom: -auto;\n  padding: 0 0 auto; }\n.main-content {\n  width: 100%;\n  padding: 25px;\n  -webkit-box-flex: 1;\n  min-height: calc(100vh - (65px + auto));\n  overflow: hidden; }\n/*settings*/\n.settings {\n  position: fixed;\n  top: 80px;\n  right: -212px;\n  z-index: 995;\n  width: 210px;\n  transition: all .2s; }\n.settings.show {\n    right: -1px; }\n.settings .btn {\n    position: absolute;\n    left: -34px;\n    padding: 7px 12px 7px 10px;\n    z-index: 99;\n    background: #fff;\n    border-color: rgba(0, 0, 0, 0.125);\n    border-style: solid;\n    border-width: 1px 0px 1px 1px;\n    border-radius: 0;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n    cursor: pointer; }\n.settings .btn:focus {\n      box-shadow: none; }\n.settings .card {\n    border-top: none;\n    border-radius: 0; }\n.settings .card .card-header {\n      padding: 0.34rem 1.25rem;\n      background: #fff !important;\n      border-radius: 0;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      font-weight: bold;\n      border-top: 1px solid rgba(0, 0, 0, 0.125);\n      border-bottom: 0; }\n.settings .card-body {\n    padding: 2px 20px; }\n.settings .card-body h6 {\n      border-bottom: 1px solid #eceeef;\n      padding-bottom: 2px; }\n.settings .theme {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 10px;\n    cursor: pointer; }\n.settings .theme.light {\n      background-color: #ececec; }\n.settings .theme.dark {\n      background-color: #262626; }\n.settings .theme.blue {\n      background-color: #1875D1; }\n.settings .theme.green {\n      background-color: #00786A; }\n.settings .theme.combined {\n      overflow: hidden;\n      background-color: #262626; }\n.settings .theme.combined:before {\n        content: \"\";\n        background-color: #f5f5f5;\n        width: 10px;\n        height: 20px;\n        display: inline-block; }\n.settings .theme.purple {\n      background-color: #7A1EA1; }\n.settings .theme.orange {\n      background-color: #F47B00; }\n.settings .theme.brown {\n      background-color: #5C3F36; }\n.settings .theme.grey {\n      background-color: #445963; }\n.settings .theme.pink {\n      background-color: #C1175A; }\n.settings .custom-control .custom-control-description {\n    margin-top: -1px; }\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
        if (sessionStorage["skin"]) {
            this.settings.theme.skin = sessionStorage["skin"];
        }
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.theme.showMenu = false;
            this.settings.theme.sideChatIsHoverable = false;
        }
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    };
    PagesComponent.prototype.chooseMenu = function (menu) {
        this.settings.theme.menu = menu;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function (menuType) {
        this.settings.theme.menuType = menuType;
        if (menuType == 'mini') {
            jQuery('.menu-item-link').tooltip('enable');
        }
        else {
            jQuery('.menu-item-link').tooltip('disable');
        }
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme.skin = theme;
        sessionStorage["skin"] = theme;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    PagesComponent.prototype.onWindowResize = function () {
        var showMenu = !this._showMenu();
        if (this.showMenu !== showMenu) {
            this.showMenuStateChange(showMenu);
        }
        this.showMenu = showMenu;
    };
    PagesComponent.prototype.showMenuStateChange = function (showMenu) {
        this.settings.theme.showMenu = showMenu;
    };
    PagesComponent.prototype._showMenu = function () {
        return window.innerWidth <= 768;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/index.js");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme/components/header/header.component */ "./src/app/theme/components/header/header.component.ts");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/components/footer/footer.component */ "./src/app/theme/components/footer/footer.component.ts");
/* harmony import */ var _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme/components/sidebar/sidebar.component */ "./src/app/theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme/components/breadcrumb/breadcrumb.component */ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../theme/components/back-top/back-top.component */ "./src/app/theme/components/back-top/back-top.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_side_chat_side_chat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../theme/components/side-chat/side-chat.component */ "./src/app/theme/components/side-chat/side-chat.component.ts");
/* harmony import */ var _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../theme/components/favorites/favorites.component */ "./src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};






















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiselectDropdownModule"],
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _pages_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"],
                _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_13__["VerticalMenuComponent"],
                _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_14__["HorizontalMenuComponent"],
                _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbComponent"],
                _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_16__["BackTopComponent"],
                _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_17__["FullScreenComponent"],
                _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_18__["ApplicationsComponent"],
                _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
                _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"],
                _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_21__["FlagsMenuComponent"],
                _theme_components_side_chat_side_chat_component__WEBPACK_IMPORTED_MODULE_22__["SideChatComponent"],
                _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_23__["FavoritesComponent"],
                _blank_blank_component__WEBPACK_IMPORTED_MODULE_24__["BlankComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_25__["SearchComponent"],
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/pages/auth/auth.guard.ts");




//import { CambioAdscripcionComponent } from './cambio-adscripcion/cambio-adscripcion.component';
var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            // { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },          
            { path: 'membership', loadChildren: 'app/pages/membership/membership.module#MembershipModule', data: { breadcrumb: 'Cambio de adscripción' }, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            // { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            // { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
            // { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            // { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
            // { path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
            // { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            // { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            // { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            // { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'blank', component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"], data: { breadcrumb: 'Blank page' } },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Search results...</h4>"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"applications\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 box-shadow\" aria-labelledby=\"applications\">\r\n        <div class=\"applications text-center pt-1\" perfectScrollbar>\r\n            <h5>Applications</h5>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-4 p-1 mb-3 item\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-user text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">My account</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-search text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Search</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-youtube-play text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Youtube</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-wrench text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Settings</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-calendar text-warning\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Calendar</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-picture-o text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Gallery</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-file-text-o text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Documents</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-envelope-o text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Mail</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-globe text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Maps</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu .applications {\n  height: 255px;\n  width: 270px;\n  padding: 0 22px; }\n  .dropdown-menu .applications h5 {\n    color: #666; }\n  .dropdown-menu .applications .item {\n    background: transparent;\n    border-radius: 5px; }\n  .dropdown-menu .applications .item:hover {\n      background: #f5f5f5; }\n  .dropdown-menu .applications .item i {\n      font-size: 28px; }\n  .dropdown-menu .applications .item span {\n      color: #666; }\n"

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./applications.component.scss */ "./src/app/theme/components/applications/applications.component.scss")],
            template: __webpack_require__(/*! ./applications.component.html */ "./src/app/theme/components/applications/applications.component.html")
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/back-top/back-top.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 28px;\n  text-align: center;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  line-height: 34px; }\n  .back-to-top:hover {\n    opacity: 1; }\n"

/***/ }),

/***/ "./src/app/theme/components/back-top/back-top.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopComponent", function() { return BackTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackTopComponent = /** @class */ (function () {
    function BackTopComponent() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 700;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "showSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "moveSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backTop'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BackTopComponent.prototype, "_selector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BackTopComponent.prototype, "_onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BackTopComponent.prototype, "_onWindowScroll", null);
    BackTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-top',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./back-top.component.scss */ "./src/app/theme/components/back-top/back-top.component.scss")],
            template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top transition\" title=\"Back to Top\"></i>\n  "
        })
    ], BackTopComponent);
    return BackTopComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">  \r\n    <li *ngIf=\"router.url != '/pages/dashboard'\" class=\"breadcrumb-item\"><a routerLink=\"/\" (click)=\"closeSubMenus()\"><i class=\"fa fa-home mr-2\"></i>Home</a></li>\r\n    <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\">\r\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>          \r\n        <span [hidden]=\"i != (breadcrumbs.length - 1)\"><i *ngIf=\"router.url == '/pages/dashboard'\" class=\"fa fa-home mr-2\"></i><b>{{breadcrumb.name}}</b></span>\r\n    </li>\r\n</ol>"

/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/theme/components/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());

// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// }


/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-start favorites-container ml-5\" [class.show-list]=\"toggle\">\r\n    <ul *ngIf=\"favorites.length == 0\" class=\"list-inline mb-0\">\r\n        <li class=\"list-inline-item\"><span class=\"fs-13 font-italic\">Choose favorites <i id=\"arrow\" class=\"fa fa-long-arrow-right\"></i></span></li>\r\n    </ul> \r\n    <ul *ngIf=\"favorites.length > 0\" class=\"list-inline mb-0\">\r\n        <li *ngFor=\"let favorite of favorites\" class=\"list-inline-item\" placement=\"bottom\" [ngbTooltip]=\"favorite.name\">\r\n            <a *ngIf=\"favorite.href\" href=\"{{favorite.href}}\" target=\"{{favorite.target}}\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\r\n            <a *ngIf=\"favorite.routerLink\" [routerLink]=\"favorite.routerLink\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\r\n        </li>\r\n    </ul>    \r\n    <ss-multiselect-dropdown id=\"favorites\" class=\"custom-multiselect\"\r\n        [options]=\"favoriteOptions\" \r\n        [texts]=\"favoriteTexts\" \r\n        [settings]=\"favoriteSettings\"\r\n        (dropdownOpened)=\"onDropdownOpened()\"\r\n        (dropdownClosed)=\"onDropdownClosed()\" \r\n        [(ngModel)]=\"favoriteModel\"\r\n        (ngModelChange)=\"onChange()\">\r\n    </ss-multiselect-dropdown>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favorites-container {\n  position: relative;\n  padding: 0 20px 0 6px; }\n  .favorites-container:after {\n    font-family: FontAwesome;\n    content: \"\\f004\";\n    color: #DD1B16;\n    position: absolute;\n    right: 4px;\n    top: 1px;\n    pointer-events: none;\n    cursor: pointer; }\n  .favorites-container.show-list {\n    width: 242px;\n    border: none !important; }\n  .favorites-container ul.list-inline {\n    white-space: nowrap;\n    overflow: hidden; }\n  .favorites-container ul.list-inline .list-inline-item {\n      margin-right: 10px; }\n  #favorites .dropdown {\n  position: absolute;\n  right: 0;\n  top: -6px;\n  width: 18px;\n  height: 22px;\n  overflow: hidden; }\n  #favorites .dropdown .btn-block {\n    width: 242px;\n    opacity: 0;\n    box-shadow: none;\n    cursor: pointer;\n    position: relative;\n    z-index: 1;\n    border: 0;\n    padding-bottom: 13px; }\n  #favorites .dropdown .dropdown-menu li a {\n    color: #666; }\n  #favorites .dropdown .dropdown-menu li a i.fa-check {\n      color: #378D3B; }\n  #favorites .dropdown.open {\n    overflow: visible;\n    width: auto;\n    height: auto; }\n  #favorites .dropdown.open .btn-block {\n      opacity: 1; }\n  #favorites .dropdown .dropdown-toggle::after {\n    content: none; }\n  @-webkit-keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0); } }\n  @keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  #arrow {\n  -webkit-animation: arrow-jump 2s infinite;\n  animation: arrow-jump 2s infinite; }\n"

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(menuService) {
        var _this = this;
        this.menuService = menuService;
        this.favoriteModel = [];
        this.favoriteSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true
        };
        this.favoriteTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find menu item...',
            defaultTitle: 'Select favorite menu items',
            allSelected: 'All selected',
        };
        this.favoriteOptions = [];
        this.favorites = [];
        this.menuItems = this.menuService.getVerticalMenuItems().filter(function (menu) { return menu.routerLink != null || menu.href != null; });
        this.menuItems.forEach(function (item) {
            var menu = {
                id: item.id,
                name: item.title,
                routerLink: item.routerLink,
                href: item.href,
                icon: item.icon,
                target: item.target
            };
            _this.favoriteOptions.push(menu);
        });
        if (sessionStorage["favorites"]) {
            this.favorites = JSON.parse(sessionStorage.getItem("favorites"));
            this.favorites.forEach(function (favorite) {
                _this.favoriteModel.push(favorite.id);
            });
        }
    }
    FavoritesComponent.prototype.onDropdownOpened = function () {
        this.toggle = true;
    };
    FavoritesComponent.prototype.onDropdownClosed = function () {
        this.toggle = false;
    };
    FavoritesComponent.prototype.onChange = function () {
        var _this = this;
        this.favorites.length = 0;
        this.favoriteModel.forEach(function (i) {
            var favorite = _this.favoriteOptions.find(function (mail) { return mail.id === +i; });
            _this.favorites.push(favorite);
        });
        sessionStorage.setItem("favorites", JSON.stringify(this.favorites));
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/theme/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/theme/components/favorites/favorites.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"flags-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"flag-icon flag-icon-gb\"></span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"flags-menu\">\r\n        <div class=\"flags-menu\">          \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-gb mr-2\"></span> English</a> \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-de mr-2\"></span> German</a>        \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-fr mr-2\"></span> French</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-ru mr-2\"></span> Russian</a>                \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-tr mr-2\"></span> Turkish</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flag-icon-background {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n\n.flag-icon {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1.33333333em;\n  line-height: 1em; }\n\n.flag-icon:before {\n  content: \"\\00a0\"; }\n\n.flag-icon-gb {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cdefs%3E%0D    %3CclipPath id%3D%22a%22%3E%0D      %3Cpath fill-opacity%3D%22.67%22 d%3D%22M-85.333 0h682.67v512h-682.67z%22%2F%3E%0D    %3C%2FclipPath%3E%0D  %3C%2Fdefs%3E%0D  %3Cg clip-path%3D%22url(%23a)%22 transform%3D%22translate(80) scale(.94)%22%3E%0D    %3Cg stroke-width%3D%221pt%22%3E%0D      %3Cpath fill%3D%22%23006%22 d%3D%22M-256 0H768.02v512.01H-256z%22%2F%3E%0D      %3Cpath d%3D%22M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z%22 fill%3D%22%23fff%22%2F%3E%0D      %3Cpath d%3D%22M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z%22 fill%3D%22%23fff%22%2F%3E%0D      %3Cpath d%3D%22M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z%22 fill%3D%22%23c00%22%2F%3E%0D    %3C%2Fg%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-de {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cpath fill%3D%22%23ffce00%22 d%3D%22M0 320h640v160.002H0z%22%2F%3E%0D  %3Cpath d%3D%22M0 0h640v160H0z%22%2F%3E%0D  %3Cpath fill%3D%22%23d00%22 d%3D%22M0 160h640v160H0z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-fr {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22 stroke-width%3D%221pt%22%3E%0D    %3Cpath fill%3D%22%23fff%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%2300267f%22 d%3D%22M0 0h213.337v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%23f31830%22 d%3D%22M426.662 0H640v480H426.662z%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-ru {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22 stroke-width%3D%221pt%22%3E%0D    %3Cpath fill%3D%22%23fff%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%230039a6%22 d%3D%22M0 160.003h640V480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%23d52b1e%22 d%3D%22M0 319.997h640V480H0z%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-tr {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22%3E%0D    %3Cpath fill%3D%22%23f31930%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath d%3D%22M406.977 247.473c0 66.215-54.606 119.89-121.97 119.89S163.04 313.686 163.04 247.472s54.606-119.89 121.968-119.89 121.97 53.677 121.97 119.89z%22 fill%3D%22%23fff%22%2F%3E%0D    %3Cpath d%3D%22M413.077 247.467c0 52.97-43.686 95.91-97.575 95.91s-97.574-42.94-97.574-95.91 43.686-95.91 97.574-95.91 97.575 42.94 97.575 95.91z%22 fill%3D%22%23f31830%22%2F%3E%0D    %3Cpath d%3D%22M430.726 191.465l-.985 44.318-41.345 11.225 40.756 14.514-.984 40.642 26.58-31.738 40.164 13.934-23.233-34.06 28.352-33.868-43.513 11.998-25.793-36.964z%22 fill%3D%22%23fff%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n"

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent() {
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__(/*! ./flags-menu.component.html */ "./src/app/theme/components/flags-menu/flags-menu.component.html"),
            styles: [__webpack_require__(/*! ./flags-menu.component.scss */ "./src/app/theme/components/flags-menu/flags-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer d-flex align-items-center justify-content-between\" [class.fixed-bottom]=\"settings.theme.footerIsFixed\">\r\n        <!--  <span class=\"social-icons\">\r\n               <a href=\"https://www.facebook.com/themeseason\" target=\"_blank\"><i class=\"fa fa-facebook-square transition\" aria-hidden=\"true\"></i></a>\r\n               <a href=\"https://twitter.com/themeseason\" target=\"_blank\"><i class=\"fa fa-twitter-square transition\" aria-hidden=\"true\"></i></a>\r\n               <a href=\"https://www.instagram.com/themeseason\" target=\"_blank\"><i class=\"fa fa-instagram transition\" aria-hidden=\"true\"></i></a>\r\n               <a href=\"https://www.pinterest.com/themeseason\" target=\"_blank\"><i class=\"fa fa-pinterest-square transition\" aria-hidden=\"true\"></i></a>             \r\n          </span>-->\r\n          <span class=\"social-icons\">\r\n              <span class=\"copyright\"> Direcci&oacute;n General de Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones - Teléfono: (662) 259-48-00 Ext. 14500.</span>\r\n          </span>\r\n          <span class=\"copyright\">© 2018 FGJE. Todos los derechos reservados</span>   \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.app-footer {\n  width: 100%;\n  height: auto;\n  padding: 0 25px; }\n.app-footer .copyright {\n    font-size: 12px; }\n.app-footer .social-icons {\n    font-size: 18px; }\n.app-footer .social-icons a {\n      color: inherit; }\n.app-footer .social-icons i {\n      margin-right: 4px;\n      opacity: 0.8; }\n.app-footer .social-icons i:hover {\n        opacity: 1; }\n"

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/theme/components/footer/footer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
        // @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
        //     if (event.keyCode === 122) {
        //         console.log('F11 pressed');
        //     }
        //     if (event.keyCode === 27) {
        //         console.log('Esc pressed');
        //     }
        // }
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expand'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('compress'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <span class=\"pl-2 pr-2\">\n        <i *ngIf=\"!toggle\" #expand class=\"fa fa-expand transition\"></i>\n        <i *ngIf=\"toggle\" #compress class=\"fa fa-compress transition\"></i>\n    </span>\n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar box-shadow app-header\" [class.fixed-top]=\"settings.theme.navbarIsFixed\" [class.logo-visible]=\"showInfoContent\">\r\n    <div class=\"d-flex flex-column w-100\">\r\n        <div id=\"info-content\" class=\"panel-collapse collapse\">\r\n            <a class=\"close\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" [class.show]=\"showInfoContent\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </a>\r\n            <div class=\"row align-items-center\">\r\n                <!-- <div class=\"col-md-5\">\r\n                    <div class=\"d-flex justify-content-center align-items-center pt-md-0 pt-3 info\">\r\n                        <img src=\"assets/img/users/user.jpg\" class=\"rounded-circle user-img\"> \r\n                        <div class=\"d-flex flex-column pl-3\">\r\n                            <h5 class=\"mb-0\">Emilio Verdines <i class=\"fa fa-check-circle fs-13 text-success ml-2\"></i></h5>\r\n                            <span>Project menecer</span>\r\n                            <div class=\"pt-3\">\r\n                                <button class=\"btn btn-success mr-1\">Profile</button> \r\n                                <button class=\"btn btn-gray\">Edit</button> \r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"col-md-7\">\r\n                    <div class=\"row py-4\">                        \r\n                        <!-- <div class=\"col-lg-7 col-sm-8 col-12 left-border\">\r\n                            <div class=\"info w-280p mx-auto text-center\">\r\n                                <form>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Recipients\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Subject\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <textarea class=\"form-control form-control-sm\" placeholder=\"Message\" rows=\"3\"></textarea>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-sm btn-gray\"><i class=\"fa fa-paper-plane mr-2\"></i>Send</button>\r\n                                </form>\r\n                            </div>                           \r\n                        </div> -->\r\n                        <!-- <div class=\"col-lg-5 col-sm-4 left-border d-none d-sm-block\">\r\n                            <div class=\"info w-100p mx-auto\">\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxNotifications\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxNotifications\">Notifications</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxTasks\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxTasks\">Tasks</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxEvents\">\r\n                                    <label class=\"custom-control-label\" for=\"checkboxEvents\">Events</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxDownloads\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxDownloads\">Downloads</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxMessages\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxMessages\">Messages</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxUpdates\">\r\n                                    <label class=\"custom-control-label\" for=\"checkboxUpdates\">Updates</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-checkbox mb-1\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxSettings\" checked>\r\n                                    <label class=\"custom-control-label\" for=\"checkboxSettings\">Settings</label>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-start align-items-center top-navbar\">                  \r\n            \r\n            <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">\r\n                <img src=\"assets/img/app/logo.png\" width=\"60px\">\r\n                <!--  <span class=\"start\">start</span><span class=\"ng\">NG</span>-->\r\n            </a>\r\n\r\n            <span class=\"navbar-text menu-icon transition ml-3 mr-3\" [ngClass]=\"{'open': settings.theme.showMenu}\"\r\n                (click)=\"settings.theme.showMenu = !settings.theme.showMenu\">\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n            </span>\r\n\r\n            <div class=\"ml-2 mr-2 d-none d-sm-block\">\r\n                 <a id=\"info-content-icon\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" class=\"d-flex\" [class.show]=\"showInfoContent\">\r\n                    <div [@showInfo]=\"showInfoContent\" class=\"triangle\"></div>\r\n                </a>\r\n            </div>\r\n\r\n            <!-- <form class=\"app-search d-none d-md-inline-block ml-3\">\r\n                <i class=\"fa fa-search\"></i>\r\n                <input type=\"text\" placeholder=\"Type to search...\" class=\"form-control\">\r\n            </form> -->\r\n\r\n            <!-- <app-favorites class=\"d-none d-lg-inline-block\"></app-favorites> -->\r\n\r\n            <div class=\"top-rigth-icons ml-auto\">\r\n                <!-- <span class=\"d-none d-sm-inline-block\">\r\n                    <app-flags-menu></app-flags-menu>\r\n                </span>  -->\r\n                <!-- <span class=\"d-none d-sm-inline-block\">\r\n                    <app-fullscreen></app-fullscreen>\r\n                </span>  -->\r\n                <!-- <span class=\"d-none d-sm-inline-block\">\r\n                    <app-applications></app-applications>                    \r\n                </span>  -->\r\n                <!-- <span class=\"d-none d-sm-inline-block\">\r\n                    <app-messages></app-messages>\r\n                </span>  -->\r\n                <!-- <span class=\"d-none d-sm-inline-block pl-2 pr-2\" (click)=\"settings.theme.showSideChat = !settings.theme.showSideChat\">\r\n                    <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\r\n                </span>  -->\r\n                <span class=\"d-none d-sm-inline-block\">\r\n                    <app-user-menu></app-user-menu>\r\n                </span> \r\n                <span class=\"pl-2 pr-2\">\r\n                        <button (click)=\"logOut()\" class=\"btn btn-default\">Cerrar Sesion\r\n                            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                        </button>                   \r\n                    <!-- <a routerLink=\"/login\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                    </a>                    -->\r\n                </span> \r\n            </div> \r\n\r\n        </div>\r\n\r\n        <div class=\"horizontal-menu-outer\" *ngIf=\"settings.theme.menu == 'horizontal'\">                   \r\n            <app-horizontal-menu *ngIf=\"showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-horizontal-menu>        \r\n            <app-vertical-menu *ngIf=\"!showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-vertical-menu>\r\n        </div>\r\n\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/theme/components/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.navbar.app-header {\n  padding: 0;\n  z-index: 9;\n  transition: z-index 0.5s linear; }\n.navbar.app-header .top-navbar {\n    padding: 0 1rem;\n    height: 65px; }\n.navbar.app-header .top-navbar .logo {\n      width: 220px;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n.navbar.app-header.logo-visible {\n    z-index: 99999; }\n.top-navbar .app-search {\n  position: relative;\n  margin-left: 20px; }\n.top-navbar .app-search i {\n    position: absolute;\n    right: 2px;\n    font-size: 14px;\n    cursor: pointer;\n    z-index: 9; }\n.top-navbar .app-search .form-control {\n    border: none;\n    font-size: 12px;\n    height: 18px;\n    background: transparent;\n    padding: 0;\n    padding-right: 24px;\n    padding-left: 4px;\n    box-shadow: none;\n    width: 190px;\n    opacity: 0.7; }\n.top-navbar .app-search .form-control:focus {\n      opacity: 1; }\n.top-rigth-icons span {\n  font-size: 14px;\n  cursor: pointer; }\n.menu-icon {\n  position: relative;\n  width: 18px;\n  cursor: pointer; }\n.menu-icon .line {\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    background-color: #ccc;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    transition: .15s ease-in-out;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    outline: 1px solid transparent; }\n.menu-icon .line:nth-child(1) {\n    top: 0; }\n.menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n    top: 4px; }\n.menu-icon .line:nth-child(4) {\n    top: 8px; }\n.menu-icon.open {\n    -webkit-backface-visibility: hidden; }\n.menu-icon.open .line:nth-child(1), .menu-icon.open .line:nth-child(4) {\n      top: 4px;\n      width: 0%;\n      left: 50%; }\n.menu-icon.open .line:nth-child(2) {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n.menu-icon.open .line:nth-child(3) {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n.logo {\n  font-family: \"MoonHouse\";\n  padding: 0;\n  font-size: 27px;\n  display: inline-block;\n  width: 250px; }\n.logo:hover, .logo:focus {\n    text-decoration: none;\n    color: initial; }\n#info-content {\n  z-index: 1; }\n#info-content .info, #info-content .left-border {\n    opacity: 0;\n    transition: opacity 0.5s ease-out; }\n#info-content .close {\n    position: absolute;\n    right: 5px;\n    z-index: 1; }\n#info-content.show .info, #info-content.show .left-border {\n    opacity: 1; }\n#info-content .user-img {\n    width: 120px; }\n.triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 11px 10px 0 10px; }\n.horizontal-menu-outer {\n  height: auto; }\n.horizontal-menu-outer #menu0 {\n    height: 250px; }\n"

/***/ }),

/***/ "./src/app/theme/components/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.showHorizontalMenu = true;
        this.showInfoContent = false;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getHorizontalMenuItems();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768)
            this.showHorizontalMenu = false;
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    HeaderComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
        else {
            this.showHorizontalMenu = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowResize", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/theme/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/theme/components/header/header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showInfo', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"horizontal-menu\" class=\"menu-wrapper horizontal-menu-wrapper d-flex justify-content-start align-items-center\"></div>  \r\n"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.horizontal-menu-wrapper {\n  min-height: 38px; }\n#navigation {\n  margin-left: auto;\n  margin-right: auto; }\n#navigation .menu {\n    margin-bottom: 0; }\n#navigation .menu li {\n      display: inline-block;\n      position: relative; }\n#navigation .menu li a {\n        font-size: 14px;\n        display: block;\n        padding: 0.6em 1em;\n        cursor: pointer; }\n#navigation .menu li a i {\n          margin-right: 10px; }\n#navigation .menu li.menu-item-has-children > a:after {\n        font-family: FontAwesome;\n        content: \"\\f107\";\n        margin-left: 10px;\n        font-size: 13px; }\n#navigation .menu .sub-menu {\n  display: none;\n  padding: 0;\n  position: absolute;\n  margin-top: 0;\n  left: 0;\n  z-index: 99999;\n  text-align: left; }\n#navigation ul.menu ul a,\n#navigation .menu ul ul a {\n  margin: 0;\n  font-size: 14px;\n  padding: 6px 10px;\n  min-width: 160px;\n  line-height: 20px; }\n#navigation ul.menu li:hover > ul,\n#navigation .menu ul li:hover > ul {\n  display: block; }\n#navigation .menu .sub-menu ul {\n  left: 100%;\n  top: 0; }\n#navigation ul.sub-menu > li.menu-item-has-children > a:after {\n  font-family: FontAwesome;\n  content: \"\\f105\";\n  float: right;\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
            }
        });
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'horizontal');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuItems", void 0);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__(/*! ./horizontal-menu.component.html */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"vertical-menu\" class=\"menu-wrapper\" perfectScrollbar></div>"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-wrapper {\n  height: 100%; }\n  .menu-wrapper .card {\n    border: 0;\n    border-radius: 0;\n    background: transparent; }\n  .menu-wrapper .card a {\n      cursor: pointer;\n      padding: 10px 0;\n      font-size: 14px;\n      display: inline-block;\n      width: 100%;\n      outline: none; }\n  .menu-wrapper .card a i {\n        padding: 0 12px; }\n  .menu-wrapper .card a b {\n        float: right;\n        margin-right: 15px;\n        margin-top: 4px;\n        transition: -webkit-transform 0.2s linear;\n        transition: transform 0.2s linear;\n        transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n  .menu-wrapper .card a.collapsed b {\n        -webkit-transform: rotate(-180deg);\n        transform: rotate(-180deg); }\n  .menu-wrapper .collapsing {\n    transition: height .25s ease; }\n"

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
                if (window.innerWidth <= 768) {
                    _this.settings.theme.showMenu = false;
                }
            }
        });
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'vertical');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        this.menuService.showActiveSubMenu(this.menuItems);
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    VerticalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__(/*! ./vertical-menu.component.html */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            styles: [__webpack_require__(/*! ./vertical-menu.component.scss */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"messagesDropDown\" class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"messages\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 p-0 mt-3 box-shadow\" aria-labelledby=\"messages\">    \r\n        <div class=\"clearfix\">            \r\n            <ul id=\"messagesTabs\" class=\"nav nav-tabs nav-justified border-0\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active transition\" data-toggle=\"tab\" href=\"#comments\"><i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#files\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#meetings\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></a>\r\n                </li>                                            \r\n            </ul>\r\n        </div>\r\n        <div class=\"tab-content\" perfectScrollbar>\r\n            <div class=\"tab-pane active\" id=\"comments\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let message of messages\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\">                    \r\n                        <div class=\"list-content\">\r\n                            <h3>{{message.name}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.time}}</span></h3>\r\n                            <p>{{message.text}}</p>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n            <div class=\"tab-pane\" id=\"files\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let file of files\" href class=\"transition\">\r\n                        <h3>{{file.text}} <span class=\"pull-right\">{{file.size}}</span></h3>\r\n                        <div class=\"progress progress-sm\">\r\n                            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-{{file.class}}\" role=\"progressbar\" [style.width]=\"file.value\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"meetings\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let meeting of meetings\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        <div class=\"meeting-day bg-{{meeting.color}} pull-left\">\r\n                            <span>{{meeting.day}}</span>\r\n                            <span>{{meeting.month}}</span>\r\n                        </div>                   \r\n                        <div class=\"list-content\">\r\n                            <h2>{{meeting.title}}</h2>\r\n                            <p>{{meeting.text}}</p>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n        </div> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messagesDropDown .dropdown-menu {\n  width: 312px; }\n\n#messagesDropDown .nav-link {\n  color: #a6a6a6;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 4px solid transparent; }\n\n#messagesDropDown .nav-link:hover {\n    background-color: #f5f5f5; }\n\n#messagesDropDown .tab-content {\n  height: 250px;\n  border: 0;\n  border-top: 1px solid #ccc; }\n\n#messagesDropDown .tab-content .tab-pane {\n    padding: 0; }\n\n#messagesDropDown .tab-content .tab-pane .list a {\n      float: left;\n      width: 100%;\n      display: block;\n      padding: 10px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n#messagesDropDown .tab-content .tab-pane .list a:hover {\n        background: #f5f5f5; }\n\n#messagesDropDown .tab-content .tab-pane .list a h3, #messagesDropDown .tab-content .tab-pane .list a h2 {\n        padding: 0;\n        margin: 0 0 4px 0;\n        color: #666666; }\n\n#messagesDropDown .tab-content .tab-pane .list a h3 {\n        font-size: 12px; }\n\n#messagesDropDown .tab-content .tab-pane .list a h2 {\n        font-size: 14px; }\n\n#messagesDropDown .tab-content .tab-pane .list span {\n      font-size: 10px; }\n\n#messagesDropDown .tab-content .tab-pane .list .meeting-day {\n      width: 46px;\n      height: 42px;\n      border-radius: 4px;\n      color: #fff;\n      text-align: center; }\n\n#messagesDropDown .tab-content .tab-pane .list .meeting-day span {\n        font-size: 13px;\n        display: block;\n        font-style: italic; }\n\n#messagesDropDown .tab-content .tab-pane .list .list-content {\n      float: right;\n      width: 235px; }\n\n#messagesDropDown .tab-content .tab-pane .list img {\n      float: left;\n      width: 45px;\n      margin-right: 10px;\n      border-radius: 50%; }\n\n#messagesDropDown .tab-content .tab-pane .list p {\n      color: #7d7d7d;\n      font-size: 11px;\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.service */ "./src/app/theme/components/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            var _this = this;
            setTimeout(function () { return jQuery(_this).closest('.dropdown').addClass('show'); });
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/theme/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/theme/components/messages/messages.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]]
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/messages/messages.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'startng.zip',
                size: '~7.2 MB',
                value: '47%',
                class: 'danger'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33%',
                class: 'info'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60%',
                class: 'success'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80%',
                class: 'warning'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55%',
                class: 'primary'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75%',
                class: 'info'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-chat h-100 transition\" [class.hoverable]=\"settings.theme.sideChatIsHoverable\" [class.show]=\"settings.theme.showSideChat\" [class.show-chat-item]=\"showHoverableChatItem\" [class.show-chat-window]=\"showChatWindow\">\r\n    <div [hidden]=\"showChatWindow\" class=\"media p-1 rounded-left transition person-search-media align-items-center\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\">\r\n        <i class=\"fa fa-search mr-1\" aria-hidden=\"true\"></i>\r\n        <div class=\"media-body\">\r\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control form-control-sm person-search\" placeholder=\"Search person...\">      \r\n        </div>\r\n    </div>      \r\n       \r\n    <div class=\"chat-list h-100\" [hidden]=\"showChatWindow\" perfectScrollbar>\r\n        <div *ngFor=\"let chat of chats | ChatPersonSearchPipe : searchText\" class=\"media p-1 rounded-left transition\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\" (click)=\"getChat(chat)\">\r\n            <img class=\"d-flex mr-3 rounded\" [src]=\"chat.image\">\r\n            <div class=\"media-body\">\r\n                <h6 class=\"mb-1 mt-1 text-white\">{{chat.author}}</h6>\r\n                <span [ngSwitch]=\"chat.authorStatus\">\r\n                    <i *ngSwitchCase=\"'Online'\" class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i>\r\n                    <i *ngSwitchCase=\"'Offline'\" class=\"fa fa-times-circle text-danger\" aria-hidden=\"true\"></i> \r\n                    <i *ngSwitchCase=\"'Away'\" class=\"fa fa-clock-o text-info\" aria-hidden=\"true\"></i> \r\n                    <i *ngSwitchCase=\"'Do not disturb'\" class=\"fa fa-minus-circle text-warning\" aria-hidden=\"true\"></i>   \r\n                </span>              \r\n                <span class=\"status ml-1\">{{chat.authorStatus}}</span>\r\n            </div>\r\n        </div>\r\n    </div>      \r\n\r\n    <div class=\"chat-window\" [hidden]=\"!showChatWindow\">\r\n        <div class=\"d-flex justify-content-between align-items-center header\"> \r\n                <span class=\"pl-2 pr-2 back\" (click)=\"back()\"> \r\n                <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> \r\n            </span>               \r\n            <h6 class=\"text-white mb-0 mr-2\">{{interlocutor}}</h6>                \r\n        </div>\r\n\r\n        <div class=\"chat-talk-list pt-2\" perfectScrollbar>\r\n            <div *ngFor=\"let talk of talks\" class=\"media p-1 mb-1 border-0\"> \r\n                <img *ngIf=\"talk.side=='left'\" class=\"d-flex mr-3 rounded\" src=\"{{ talk.image }}\">        \r\n                <div class=\"media-body rounded pl-2 pr-2 {{talk.side}}\">\r\n                    <span class=\"d-block talk-text\">{{talk.text}}</span>\r\n                    <small class=\"mt-2 mb-1 pull-right\">{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>  \r\n                </div>\r\n                <img *ngIf=\"talk.side=='right'\" class=\"d-flex ml-3 rounded\" src=\"{{ talk.image }}\">\r\n            </div>\r\n        </div>        \r\n        \r\n        <div class=\"d-flex align-items-center pl-1 pr-1 footer\">\r\n            <div class=\"input-group\">                    \r\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\"\r\n                (keyup)=\"addChatItem($event)\" [(ngModel)]=\"newChatText\">\r\n                <div class=\"input-group-append\" (click)=\"addChatItem($event)\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-paper-plane\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>     \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.side-chat {\n  position: fixed;\n  right: -52px;\n  z-index: 999;\n  width: 0;\n  top: 66px; }\n.side-chat .person-search-media {\n    height: 32px; }\n.side-chat .person-search-media .fa-search {\n      font-size: 18px;\n      padding: 0px 16px 4px; }\n.side-chat .person-search-media .person-search {\n      border: none;\n      background: rgba(255, 255, 255, 0.15);\n      padding: 4px 6px 2px;\n      box-shadow: none;\n      border-radius: 0;\n      color: #fff; }\n.side-chat .media {\n    position: relative;\n    width: 230px;\n    right: 0;\n    z-index: 9999999;\n    color: #fff; }\n.side-chat .media img {\n      width: 45px; }\n.side-chat .media h6 {\n      font-weight: 400; }\n.side-chat .media .status {\n      font-size: 12px; }\n.side-chat .chat-list {\n    padding-bottom: 97px; }\n.side-chat .chat-list .ps__rail-y {\n      z-index: 9999999; }\n.side-chat .chat-list .media {\n      cursor: pointer; }\n.side-chat .chat-window {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: block; }\n.side-chat .chat-window .header {\n      height: 30px; }\n.side-chat .chat-window .header .back {\n        font-size: 18px;\n        cursor: pointer; }\n.side-chat .chat-window .chat-talk-list {\n      height: calc(100vh - (65px + 30px + 46px)); }\n.side-chat .chat-window .chat-talk-list .talk-text {\n        width: 150px;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n.side-chat .chat-window .chat-talk-list .ps__rail-y {\n        z-index: 9999999; }\n.side-chat .chat-window .media {\n      right: 0 !important; }\n.side-chat .chat-window .media .media-body {\n        background: rgba(255, 255, 255, 0.05); }\n.side-chat .chat-window .media .media-body.left:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-right-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          left: 49px; }\n.side-chat .chat-window .media .media-body.right:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-left-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          right: 48px; }\n.side-chat .chat-window .footer {\n      position: fixed;\n      bottom: 0;\n      height: 46px;\n      width: 230px; }\n.side-chat .chat-window .footer input[type='text'] {\n        border: 1px solid #fff; }\n.side-chat.show {\n    right: 0;\n    width: 230px; }\n.side-chat.show-chat-item {\n    width: 230px; }\n.side-chat.hoverable.show {\n    width: 52px; }\n.side-chat.hoverable.show.show-chat-window {\n      width: 230px !important; }\n.side-chat.hoverable.show-chat-item {\n    width: 230px; }\n.side-chat.hoverable.show-chat-item .media {\n      right: -178px; }\n.side-chat.hoverable.show-chat-item .media:hover {\n        right: 0; }\n.side-chat.hoverable .chat-list {\n    padding-bottom: 97px; }\n.side-chat.hoverable .chat-list .ps__rail-y {\n      z-index: 0; }\n"

/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.ts ***!
  \*******************************************************************/
/*! exports provided: SideChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChatComponent", function() { return SideChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _side_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-chat.service */ "./src/app/theme/components/side-chat/side-chat.service.ts");
/* harmony import */ var _side_chat_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-chat.model */ "./src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideChatComponent = /** @class */ (function () {
    function SideChatComponent(appSettings, sideChatService) {
        this.appSettings = appSettings;
        this.sideChatService = sideChatService;
        this.showHoverableChatItem = false;
        this.showChatWindow = false;
        this.newChatText = '';
        this.settings = this.appSettings.settings;
        this.chats = sideChatService.getChats();
        this.talks = this.sideChatService.getTalk();
    }
    SideChatComponent.prototype.ngOnInit = function () { };
    SideChatComponent.prototype.back = function () {
        this.showChatWindow = false;
        this.talks.shift();
        this.talks.length = 2;
    };
    SideChatComponent.prototype.getChat = function (chat) {
        this.searchText = '';
        this.showChatWindow = true;
        this.interlocutor = chat.author;
        this.talks.forEach(function (item) {
            if (item.side == 'left') {
                item.image = chat.image;
            }
        });
        this.talks.unshift(chat);
    };
    SideChatComponent.prototype.addChatItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.talks.push(new _side_chat_model__WEBPACK_IMPORTED_MODULE_3__["SideChat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newChatText, new Date(), 'right'));
            this.newChatText = '';
            var chatContainer_1 = document.querySelector('.chat-talk-list');
            setTimeout(function () {
                var nodes = chatContainer_1.querySelectorAll('.media');
                var newChatTextHeight = nodes[nodes.length - 1];
                chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
            });
        }
    };
    SideChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-chat',
            template: __webpack_require__(/*! ./side-chat.component.html */ "./src/app/theme/components/side-chat/side-chat.component.html"),
            styles: [__webpack_require__(/*! ./side-chat.component.scss */ "./src/app/theme/components/side-chat/side-chat.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_side_chat_service__WEBPACK_IMPORTED_MODULE_2__["SideChatService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _side_chat_service__WEBPACK_IMPORTED_MODULE_2__["SideChatService"]])
    ], SideChatComponent);
    return SideChatComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.model.ts ***!
  \***************************************************************/
/*! exports provided: SideChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChat", function() { return SideChat; });
var SideChat = /** @class */ (function () {
    function SideChat(image, author, authorStatus, text, date, side) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.side = side;
    }
    return SideChat;
}());



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.service.ts ***!
  \*****************************************************************/
/*! exports provided: SideChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChatService", function() { return SideChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _side_chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-chat.model */ "./src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/users/default-user.jpg', 'unknown', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left')
];
var talks = [
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_1__["SideChat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left'),
];
var SideChatService = /** @class */ (function () {
    function SideChatService() {
    }
    SideChatService.prototype.getChats = function () {
        return chats;
    };
    SideChatService.prototype.getTalk = function () {
        return talks;
    };
    SideChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SideChatService);
    return SideChatService;
}());

// import {Injectable} from '@angular/core'
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// @Injectable()
// export class SideChatService {
//     private chats = [
//         {
//             image: 'assets/img/profile/ashley.jpg',
//             author: 'Ashley Ahlberg', 
//             authorStatus: 'Online',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/bruno.jpg',
//             author: 'Bruno Vespa', 
//             authorStatus: 'Do not disturb',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/julia.jpg',
//             author: 'Julia Aniston', 
//             authorStatus: 'Away',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/users/default-user.jpg',
//             author: 'unknown',
//             authorStatus: 'Offline',
//             text: 'After you get up and running, you can place Font Awesome icons just about...',
//             time: '1 min ago'
//         },
//         // {
//         //     image: 'michael',
//         //     author: 'Michael Blair',
//         //     text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
//         //     time: '2 hrs ago'
//         // },
//         // {
//         //     image: 'julia',
//         //     author: 'Julia Aniston',
//         //     text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
//         //     time: '10 hrs ago'
//         // },
//         // {
//         //     image: 'bruno',
//         //     author: 'Bruno Vespa',
//         //     text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'tereza',
//         //     author: 'Tereza Stiles',
//         //     text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'adam',
//         //     author: 'Adam Sandler',
//         //     text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
//         //     time: '2 days ago'
//         // },
//     ]; 
//     public getChats():Array<Object> {
//         return this.chats;
//     }
// }


/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-outer\">\r\n        <a class=\"logo d-flex align-items-center\" routerLink=\"/\" (click)=\"closeSubMenus()\" *ngIf=\"settings.theme.sidebarIsFixed\" style=\"background: white\">\r\n            <img src=\"assets/img/app/logo_completo.png\" width=\"180px\">\r\n        </a>\r\n    <!--<a class=\"logo d-flex align-items-center\" routerLink=\"/\" (click)=\"closeSubMenus()\" *ngIf=\"settings.theme.sidebarIsFixed\">\r\n        <span class=\"start\">start</span><span class=\"ng\">NG</span>\r\n    </a> -->\r\n    <app-vertical-menu [menuItems]=\"menuItems\">></app-vertical-menu>    \r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** General ****/\n.sidebar-outer {\n  height: 100%;\n  width: 250px; }\n.sidebar-outer .logo {\n    height: 65px;\n    padding: 0 14px;\n    width: 250px; }\n"

/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage["userMenuItems"]) {
            var ids = JSON.parse(sessionStorage.getItem("userMenuItems"));
            var newArr_1 = [];
            ids.forEach(function (id) {
                var newMenuItem = _this.menuItems.filter(function (mail) { return mail.id == id; });
                newArr_1.push(newMenuItem[0]);
            });
            this.menuItems = newArr_1;
        }
    };
    SidebarComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        for (var i = 0; i < menu.children.length; i++) {
            var child = menu.children[i].children[1];
            if (child) {
                if (child.classList.contains('show')) {
                    child.classList.remove('show');
                    menu.children[i].children[0].classList.add('collapsed');
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/theme/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/theme/components/sidebar/sidebar.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"user-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"user-menu\">\r\n        <div class=\"user-menu\">\r\n            <div class=\"user-info text-center p-3\">\r\n                <img src=\"assets/img/users/default-user.jpg\" alt=\"user-img\" class=\"user-img rounded-circle\">                    \r\n                <p class=\"mt-1 mb-0\"> \r\n                    Nombre - Puesto\r\n                    <small>Miembro desde 2016</small>\r\n                </p>\r\n            </div>\r\n            <!-- <a class=\"dropdown-item\" routerLink=\"profile\"><i class=\"fa fa-user mr-2\"></i>Profile</a>\r\n            <a class=\"dropdown-item\" routerLink=\"settings\"><i class=\"fa fa-cog mr-2\"></i>Settings</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-lock mr-2\"></i>Lock screen</a> -->\r\n            <a class=\"dropdown-item mb-1\" routerLink=\"/login\"><i class=\"fa fa-power-off mr-2\"></i>Log out</a>\r\n           \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu .user-menu {\n  width: 240px;\n  padding: 0; }\n  .dropdown-menu .user-menu .user-img {\n    width: 100px; }\n  .dropdown-menu .user-menu .dropdown-item {\n    color: #666 !important; }\n"

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/theme/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/theme/components/user-menu/user-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-pages-module.1731b0273f671f2b5e35.js.map