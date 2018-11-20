(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-membership-membership-module"],{

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

module.exports = "    <style>\r\n        .swal2-container {\r\n          z-index:1000000;\r\n         }\r\n    </style>\r\n\r\n\r\n\r\n    <div class=\"row mb-1\">\r\n        <div class=\"col\">\r\n\r\n            <!-- <div class=\"input-group mb-3 box-shadow\"> \r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i class=\"fa fa-search\"></i></span>\r\n                </div>                   \r\n                <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Buscar por Num. de empleado, Nombre(s), Ap. paterno, Ap materno, Usuario ó Agencia\" class=\"form-control border-0\">\r\n                <div class=\"input-group-append\">\r\n                    <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-list\"></i></span>\r\n                </div>\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <button class=\"mt-3 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"spinners = !spinners\">\r\n        Mostrar solo activos - {{spinners ? \"SI\" : \"NO\"}}\r\n    </button>   -->\r\n    <div class=\"row mb-1\">\r\n\r\n        <div class=\"col-sm-10\">\r\n            <div class=\"form-group\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\"\r\n                            class=\"custom-control-input checkbox-primary\"\r\n                            id=\"soloActivos\"\r\n                            (change)=\"soloActivos($event)\"\r\n                            checked=\"mostrarActivos\"\r\n                            name=\"soloActivos\"\r\n                            [(ngModel)]=\"mostrarActivos\"\r\n                    >\r\n                    <label class=\"custom-control-label\" for=\"soloActivos\">Mostrar solo usuarios activos</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"text-right mb-1 \">\r\n                <button *ngIf=\"true\" type=\"button\" class=\"btn btn-success mb-1\" (click)=\"openExpPend(expPendientes)\">Ver expedientes pendientes</button>\r\n                <button *ngIf=\"false\" type=\"button\" class=\"btn btn-danger mb-1\" (click)=\"openExpPend(expPendientes)\">Ver expedientes pendientes</button>\r\n            </div> \r\n        </div>   \r\n    </div>\r\n\r\n    \r\n    \r\n    <div *ngIf=\"type=='list'\" class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"table-responsive bg-white box-shadow\">\r\n\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Número de empleado</th>\r\n                            <th>Nombre(s)</th> \r\n                            <th>Apellido paterno</th>\r\n                            <th>Apellido materno</th>\r\n                            <th>Usuario</th>\r\n                            <th>Estatus</th>\r\n                            <th>Es MP</th>\r\n                            <th>Agencia</th>\r\n                            <th>Roles</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchNumero\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchNombre\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchApPaterno\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchApMaterno\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchUsuario\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td><input type=\"text\" [(ngModel)]=\"searchAgencia\" placeholder=\"\" class=\"form-control border-1\"></td>\r\n                            <td></td>\r\n                            <td>\r\n                                <button class=\"btn btn-success btn-sm\" (click)=\"recargarFuncionarios()\"><i class=\"fa fa-refresh\"></i></button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let funcionario of funcionarios \r\n                                                                    | NumeroempSearchPipe : { cNumeroEmpleado: searchNumero }\r\n                                                                    | NombreSearchPipe : { cNombreFuncionario: searchNombre }\r\n                                                                    | AppaternoSearchPipe : { cApellidoPaternoFuncionario: searchApPaterno }\r\n                                                                    | ApmaternoSearchPipe : { cApellidoMaternoFuncionario: searchApMaterno }\r\n                                                                    | NomusuarioSearchPipe : { cClaveUsuario: searchUsuario }\r\n                                                                    | AgenciaSearchPipe : { cNombre: searchAgencia }\r\n                                                                    | ActivosSearchPipe : {bEsActivo: searchActivos}\r\n                                                                    | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNumeroEmpleado }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombreFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoPaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoMaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cClaveUsuario }}</td>\r\n                            <td class=\"align-middle\">\r\n                                <i *ngIf=\"funcionario.bEsActivo === 1\" class=\"fa fa-user mr-2 text-success\" placement=\"bottom\" [ngbTooltip]=\"'Activo, haga clic para desactivar'\" (click)=\"controlActivos(funcionario)\"></i>\r\n                                <i *ngIf=\"funcionario.bEsActivo != 1\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'Inactivo, haga clic para activar'\" (click)=\"controlInactivo(funcionario)\"></i>\r\n                            </td>\r\n                            <td class=\"align-middle\">\r\n                                <div *ngIf=\"funcionario.bEsActivo === 1\">\r\n                                    <i *ngIf=\"funcionario.esMP === 1\" class=\"fa fa-check mr-2 text-success\" (click)=\"activarMP(funcionario)\" placement=\"bottom\" [ngbTooltip]=\"'Es MP'\"></i>\r\n                                    <i *ngIf=\"funcionario.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" (click)=\"activarMP(funcionario)\" placement=\"bottom\" [ngbTooltip]=\"'No es MP'\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"funcionario.bEsActivo != 1\">\r\n                                    <i *ngIf=\"funcionario.esMP === 1\" class=\"fa fa-check mr-2 text-success\" (click)=\"desactivarMP()\" placement=\"bottom\" [ngbTooltip]=\"'Es MP'\"></i>\r\n                                    <i *ngIf=\"funcionario.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" (click)=\"desactivarMP()\" placement=\"bottom\" [ngbTooltip]=\"'No es MP'\"></i>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombre }}</td>\r\n                            <td><button #ver value=\"{{funcionario.iClaveFuncionario}}\" class=\"btn btn-secondary\" (click)=\"llamarRoles(ver.value)\">Ver Roles</button></td>\r\n                            <td class=\"align-middle\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <button [disabled]=\"funcionario.bEsActivo != 1\" class=\"btn btn-secondary btn-sm\" (click)=\"openModal(modalContent, funcionario)\"><i class=\"fa fa-check\"></i></button>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        <!-- <tr *ngFor=\"let funcionario of funcionarios | UserSearchPipe : {cNombreFuncionario: searchText,\r\n                                                                                        cApellidoPaternoFuncionario: searchText,\r\n                                                                                        cApellidoMaternoFuncionario: searchText,\r\n                                                                                        cClaveUsuario: searchText,\r\n                                                                                        cNumeroEmpleado: searchText,\r\n                                                                                        cNombre: searchText}\r\n                                                                    | ActivosSearchPipe : {bEsActivo: searchActivos}\r\n                                                                    | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNumeroEmpleado }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombreFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoPaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cApellidoMaternoFuncionario }}</td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cClaveUsuario }}</td>\r\n                            <td class=\"align-middle\">\r\n                                <i *ngIf=\"funcionario.bEsActivo === 1\" class=\"fa fa-user mr-2 text-success\" placement=\"bottom\" [ngbTooltip]=\"'Activo, haga clic para desactivar'\" (click)=\"controlActivos(funcionario)\"></i>\r\n                                <i *ngIf=\"funcionario.bEsActivo != 1\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'Inactivo, haga clic para activar'\" (click)=\"controlInactivo(funcionario)\"></i>\r\n                            </td>\r\n                            <td class=\"align-middle\">\r\n                                <i *ngIf=\"funcionario.esMP === 1\" class=\"fa fa-check mr-2 text-success\" placement=\"bottom\" [ngbTooltip]=\"'Es MP'\"></i>\r\n                                <i *ngIf=\"funcionario.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'No es MP'\"></i>\r\n                            </td>\r\n                            <td class=\"align-middle text-truncate\">{{ funcionario.cNombre }}</td>\r\n                            <td><button #ver value=\"{{funcionario.iClaveFuncionario}}\" class=\"btn btn-secondary\" (click)=\"llamarRoles(ver.value)\">Ver Roles</button></td>\r\n                            <td class=\"align-middle\">\r\n                                <div class=\"btn-group\" role=\"group\">\r\n                                    <button [disabled]=\"funcionario.bEsActivo != 1\" class=\"btn btn-secondary btn-sm\" (click)=\"openModal(modalContent, funcionario)\"><i class=\"fa fa-check\"></i></button>\r\n                                </div>\r\n                            </td>\r\n                        </tr> -->\r\n                    </tbody>\r\n                </table>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row mb-4\">\r\n        <div class=\"col-12\">\r\n            <div class=\"bg-white text-center\">\r\n                <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"10\" previousLabel=\"Anterior\" nextLabel=\"Siguiente\"></pagination-controls>\r\n            </div>        \r\n        </div>\r\n    </div>\r\n    \r\n    <ng-template #modalContent>\r\n        <div class=\"modal-body bg-gray\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 vertical-tabs\">\r\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"row px-3\" #datos2=\"ngForm\">\r\n                        <ul class=\"nav flex-column left col-2 border-0 rounded-0 mr-0 bg-light\">              \r\n                            <li class=\"nav-item bg-light\">\r\n                                <a class=\"nav-link active\" href=\"#reubicarFuncionario\" data-toggle=\"tab\">Reubicar funcionario</a>\r\n                            </li>\r\n                            <li class=\"nav-item bg-light\">\r\n                                <a *ngIf=\"valReasignarExpedientes\" class=\"nav-link\" href=\"#reasignarExpedientes\" data-toggle=\"tab\">Reasignar expedientes</a>\r\n                                <a *ngIf=\"!valReasignarExpedientes\" class=\"nav-link disabled\" href=\"#reasignarExpedientes\" data-toggle=\"tab\">Reasignar expedientes</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content col-10 border-0\">\r\n\r\n                            <div class=\"tab-pane active\" id=\"reubicarFuncionario\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-body\">\r\n                                        <h4 class=\"card-title mb-0\">Reubicar funcionario</h4>\r\n                                        <h5 class=\"card-title mb-0\">Agenc&iacute;a actual:&nbsp;<small>{{ nombreAgActual }}</small></h5>\r\n                                    </div>\r\n\r\n                                    <div class=\"container\">\r\n                                        <label class=\"text-gray\">Nombre del funcionario seleccionado:</label>\r\n\r\n                                        <div class=\"row\">\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"text-gray\">Nombre</label>\r\n                                                    <input formControlName=\"cNombreFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"text-gray\">Apellido paterno</label>\r\n                                                    <input formControlName=\"cApellidoPaternoFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"text-gray\">Apellido materno</label>\r\n                                                    <input formControlName=\"cApellidoMaternoFuncionario\" class=\"form-control\" type=\"text\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                            <input class=\"form-control\" type=\"hidden\" value=\"{{count}}\" >\r\n                                            \r\n                                        </div>\r\n                                        \r\n                                        <hr>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"custom-control custom-checkbox\">\r\n                                                        <input fomControlName=\"pendientes\"\r\n                                                                type=\"checkbox\"\r\n                                                                class=\"custom-control-input checkbox-primary\"\r\n                                                                id=\"expedientesPendientes\"\r\n                                                                (change)=\"pendientesCheck($event)\"\r\n                                                                [disabled]=\"!valExpPendCheck\"\r\n                                                                required>\r\n                                                        <label class=\"custom-control-label\" for=\"expedientesPendientes\">Expedientes pendientes</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <pre>{{ pendientes }}</pre> -->\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"custom-control custom-checkbox\">\r\n                                                        <input fomControlName=\"esMP\"\r\n                                                                type=\"checkbox\"\r\n                                                                class=\"custom-control-input checkbox-primary\"\r\n                                                                id=\"EsMP\"\r\n                                                                (change)=\"esMPCheck($event)\"\r\n                                                                [disabled]=\"!valEsMPCheck\"\r\n                                                                [checked]=\"funcionario.esMP === 1\">\r\n                                                        <label class=\"custom-control-label\" for=\"EsMP\">es MP</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <pre>{{ esMP }}</pre> -->\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"custom-control custom-checkbox\">\r\n                                                        <input fomControlName=\"soloRoles\"\r\n                                                                type=\"checkbox\"\r\n                                                                class=\"custom-control-input checkbox-primary\"\r\n                                                                id=\"SoloRoles\"\r\n                                                                (change)=\"soloRolesCheck($event)\"\r\n                                                                [disabled]=\"!valSolocambioCheck\">\r\n                                                        <label class=\"custom-control-label\" for=\"SoloRoles\">Solo cambio de roles</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <pre>{{ soloRoles }}</pre> -->\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <hr>\r\n                                        <!-- [(ngModel)]=\"catDiscriminante_id\" -->\r\n                                        <div class=\"form-group\">\r\n                                            <label *ngIf=\"valAgenciaSelect\" for=\"catDiscriminante_id\">Nueva agencia:</label>\r\n                                            <select *ngIf=\"valAgenciaSelect\"\r\n                                                    class=\"form-control custom-select\"\r\n                                                    id=\"catDiscriminante_id\"\r\n                                                    formControlName=\"catDiscriminante_id\"\r\n                                                    (change)=\"getCatUIE($event.target.value)\"\r\n                                                    [disabled]=\"valAgenciaSelect\">\r\n                                                <option selected>-- Seleccione una agencia --</option>\r\n                                                <option *ngFor=\"let agencia of agencias\" [value]=\"agencia.catDiscriminante_id\">{{ agencia.cClaveDiscriminante }} - {{ agencia.cNombre }}</option>\r\n                                            </select><br><br>\r\n                                            \r\n                                            <input fromControlName=\"catUIE_id\" class=\"form-control\" type=\"hidden\" [value]=\"r.catUIE_id\" readonly id=\"catUIE_id\" *ngFor=\"let r of catUIE\">\r\n                                            <input fromControlName=\"clavefunciAgenciaNueva\" class=\"form-control\" type=\"hidden\" [value]=\"\" readonly id=\"clavefunciAgenciaNueva\" >\r\n                                        </div>\r\n\r\n                                        <hr>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xl-5 col-lg-6 mb-4\">\r\n                                                <h5 class=\"text-center\">Catalogo de roles</h5>\r\n                                                <table class=\"table table-hover\">\r\n                                                    <thead>\r\n                                                        <tr>\r\n                                                            <!-- <th>Id</th> -->\r\n                                                            <th>Roles</th>\r\n                                                        </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                        <tr *ngFor=\"let r of roles | paginate: { itemsPerPage: 10,\r\n                                                                                                currentPage: p2,\r\n                                                                                                id:'roles'\r\n                                                                                                 }\"\r\n                                                            (click)=\"onSelectRol(r)\"\r\n                                                            [ngClass] = \"{ 'highlight' : r.rol_id === selectedRol }\">\r\n                                                            <!-- <th scope=\"row\">{{ r.rol_id }}</th> -->\r\n                                                            <td>{{ r.cDescripcionRol }}</td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n\r\n                                                <div class=\"row mb-4\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"bg-white text-center\">\r\n                                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p2 = $event\" id='roles' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                        </div>        \r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xl-2 col-lg-6 mb-4\">\r\n                                                <br><br>\r\n                                                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"agregarRol()\" [ngbTooltip]=\"'Agregar rol'\"> <i class=\"fa fa-long-arrow-right\"></i> </button> <br>\r\n                                                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"quitarRol()\" [ngbTooltip]=\"'Quitar rol'\"> <i class=\"fa fa-long-arrow-left\"></i> </button>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-xl-5 col-lg-6 mb-4\">\r\n                                                <h5 class=\"text-center\">Roles del funcionario</h5>\r\n                                                <table class=\"table table-hover\">\r\n                                                    <thead>\r\n                                                        <tr>\r\n                                                            <!-- <th>Id</th> -->\r\n                                                            <th>Roles</th>\r\n                                                            <th>Principal</th>\r\n                                                        </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n\r\n                                                        <!-- <tr *ngFor=\"let fRol of funcionarioRol | paginate: { itemsPerPage: 10, currentPage: p3, id:'rolesFuncionario' }\" (click)=\"onSelectFRolF(fRol)\"\r\n                                                            [ngClass]=\"{'highlight': fRol.rol_id == selectedRolF}\">\r\n                                                            <th scope=\"row\">{{ fRol.rol_id }}</th>\r\n                                                            <td>{{ fRol.cDescripcionRol }}</td>\r\n                                                            <td> <input type=\"radio\" name=\"esPrincipal\" class=\"radio-dark-gray\" id=\"\"> </td>\r\n                                                        </tr> -->\r\n\r\n                                                        <tr *ngFor=\"let rol of funcionarioRol | paginate: { itemsPerPage: 10, currentPage: p3, id:'rolesFuncionario' }\" (click)=\"onSelectFRolF(rol)\"\r\n                                                            [ngClass]=\"{ 'highlight': rol.rol_id === selectedRolF }\">\r\n                                                            <!-- <th scope=\"row\">{{ rol.rol_id }}</th> -->\r\n                                                            <td>{{ rol.cDescripcionRol }}</td>\r\n                                                            <!-- <td> <input type=\"radio\"  name=\"esPrincipal\" class=\"radio-dark-gray\"  [checked]=\"rol.esPrincipal === 1\" id=\"rol.rol_id\"> </td> -->\r\n                                                            <td>\r\n                                                                <input type=\"radio\"\r\n                                                                    name=\"puesto_val\"\r\n                                                                    formControlName=\"puesto_val\" \r\n                                                                    class=\"radio-dark-gray\"\r\n                                                                    (ngModel)=\"puesto_val\"\r\n                                                                    [value]=\"rol.rol_id\"\r\n                                                                    [checked]=\"rol.esPrincipal === 1\"\r\n                                                                    id=\"rol.rol_id\"\r\n                                                                    (change)=\"radioRolChange(rol)\">\r\n                                                                <small class=\"text-danger\" *ngIf=\"form.get('puesto_val').hasError('required')\">Por favor seleccione el rol principal</small>\r\n                                                            </td>\r\n                                                        </tr>\r\n\r\n                                                    </tbody>\r\n                                                </table>\r\n\r\n                                                <!-- <pre>{{ puesto_val | json }}</pre> -->\r\n                                                \r\n                                                <div class=\"row mb-4\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"bg-white text-center\">\r\n                                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p3 = $event\" id='rolesFuncionario' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                        </div>        \r\n                                                    </div>\r\n                                                </div>\r\n                                                \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"tab-pane\" id=\"reasignarExpedientes\">\r\n                                <div class=\"card\">                        \r\n                                    <div class=\"card-body\">\r\n                                        <h5 class=\"card-title mb-0\">Reasignar expedientes en agencia actual: <small>{{ nombreAgActual }}</small></h5>\r\n                                    </div>\r\n                                    <div class=\"container\">\r\n                                        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\r\n                                            <!-- <div class=\"card border-0\">\r\n                                                <div class=\"card-header transparent\" role=\"tab\" id=\"headingOne\">\r\n                                                    <h6 class=\"mb-0\">\r\n                                                        <a class=\"text-primary\" data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                                            Titular de la agencia\r\n                                                        </a>\r\n                                                    </h6>\r\n                                                </div>\r\n                    \r\n                                                <div id=\"collapseOne\" class=\"collapse show\" data-parent=\"#accordion\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n                                                    <div class=\"card-body\">\r\n                                                        <h6>Nombre del funcionario titular de la agencia: </h6>\r\n                                                        <p>(mostrar el nombre del titular de la agencia)</p> \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n\r\n                                            <div class=\"card border-0\">\r\n                                                <div class=\"card-header transparent\" role=\"tab\" id=\"headingTwo\">\r\n                                                    <h6 class=\"mb-0\">\r\n                                                        <a class=\"text-primary\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                                                            Funcionarios\r\n                                                        </a>\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div id=\"collapseTwo\" class=\"collapse show\" data-parent=\"#accordion\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n                                                    <div class=\"card-body\">\r\n                                                        <div class=\"input-group mb-2 box-shadow\">\r\n                                                            <span class=\"input-group-prepend\">\r\n                                                                <span class=\"input-group-text\">\r\n                                                                    <i class=\"fa fa-search\"></i>\r\n                                                                </span>\r\n                                                            </span>\r\n                                                            <input type=\"text\" [(ngModel)]=\"buscarFuncionario\" formControlName=\"cNumeroCertificado\" placeholder=\"Buscar...\" class=\"form-control\">\r\n                                                        </div>\r\n                                                        <table class=\"table table-hover\">\r\n                                                            <thead>\r\n                                                                <tr>\r\n                                                                    <th>Número de empleado</th>\r\n                                                                    <th>Nombre</th>\r\n                                                                    <th>Apellido paterno</th>\r\n                                                                    <th>Apellido materno</th>\r\n                                                                    <!-- <th>Nombre Agencia</th> -->\r\n                                                                    <th>Titular</th>\r\n                                                                    <th></th>\r\n                                                                </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                                <tr *ngFor=\"let funagen of funciAgencia | FuncionarioSearchPipe : { cNumeroEmpleado: buscarFuncionario,\r\n                                                                                                                                    cNombreFuncionario: buscarFuncionario,\r\n                                                                                                                                    cApellidoPaternoFuncionario: buscarFuncionario,\r\n                                                                                                                                    cApellidoMaternoFuncionario: buscarFuncionario } | paginate: { itemsPerPage: 10, currentPage: p4, id:'FuncionarioAgencia' }\">\r\n                                                                    <td scope=\"row\">{{ funagen.cNumeroEmpleado }}</td>\r\n                                                                    <td>{{ funagen.cNombreFuncionario }}</td>\r\n                                                                    <td>{{ funagen.cApellidoPaternoFuncionario }}</td>\r\n                                                                    <td>{{ funagen.cApellidoMaternoFuncionario }}</td>\r\n                                                                    <!-- <td>{{ funagen.cNombre }}</td>  -->\r\n                                                                    <td>\r\n                                                                        <i *ngIf=\"funagen.esMP === 1\" class=\"fa fa-check mr-2 text-success\" placement=\"bottom\"></i>\r\n                                                                        <i *ngIf=\"funagen.esMP != 1\" class=\"fa fa-close mr-2 text-danger\" placement=\"bottom\"></i>\r\n                                                                    </td>\r\n                                                                    <td>\r\n                                                                        <input type=\"radio\"\r\n                                                                            name=\"archivoDigital_id\"\r\n                                                                            formControlName=\"archivoDigital_id\" \r\n                                                                            class=\"radio-dark-gray\"\r\n                                                                            [(ngModel)]=\"archivoDigital_id\"\r\n                                                                            [value]=\"funagen.iClaveFuncionario\"\r\n                                                                            id=\"funagen.iClaveFuncionario\"\r\n                                                                            (change)=\"radioChange($event)\">\r\n                                                                    </td>\r\n                                                                </tr>\r\n                                                            </tbody>\r\n                                                        </table>\r\n\r\n                                                        <div class=\"row mb-4\">\r\n                                                            <div class=\"col-12\">\r\n                                                                <div class=\"bg-white text-center\">\r\n                                                                    <pagination-controls autoHide=\"true\" (pageChange)=\"p4 = $event\" id='FuncionarioAgencia' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                                </div>        \r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- <pre>\r\n                                {{ roles | json }}\r\n                            </pre>  -->\r\n                            <!-- <pre>\r\n                                {{ funcionarioRol | json }}\r\n                            </pre> -->\r\n                            <!-- <pre>\r\n                                   {{ form.value | json }}\r\n                            </pre> -->\r\n                                  \r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white py-1\">\r\n                            <div *ngIf=\"form.get('cRFC').hasError('required')\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                                <strong>Atencion!</strong> Por favor ingrese la justificación.\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"justificacion\">justificación</label>\r\n                                <textarea maxlength=\"150\" id=\"justificacion\" class=\"form-control\" formControlName=\"cRFC\" placeholder=\"Máximo 150 caracteres\" required></textarea>\r\n                                <!-- <textarea id=\"justificacion\" class=\"form-control\" formControlName=\"cRFC\" [(ngModel)]=\"cRFC\" required></textarea> -->\r\n                                <!-- <small class=\"text-danger\" *ngIf=\"form.get('cRFC').touched && form.get('cRFC').hasError('required')\">Por favor ingrese la justificación</small> -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white text-center py-1\">\r\n                            <button [disabled]=\"!form.valid || !prueba\" type=\"submit\" class=\"btn btn-success mr-1\">Aceptar</button>\r\n                            <!-- <button [disabled]=\"!prueba\" type=\"submit\" class=\"btn btn-success mr-1\">Aceptar</button> -->\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancelar</button>\r\n                        </div>  \r\n                    </form> \r\n                </div>\r\n            </div>    \r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #expPendientes>\r\n        <div class=\"modal-body bg-gray\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form [formGroup]=\"formExpPend\" (ngSubmit)=\"onSubmitExpPend(formExpPend.value)\" class=\"row px-3\" #datos=\"ngForm\">\r\n\r\n                        <div class=\"card col-12\">\r\n                            <div class=\"card-header transparent border-0 text-muted\">\r\n                                <h4 class=\"modal-title\">Expedientes pendientes</h4>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n\r\n                                <div class=\"container\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-10\">\r\n\r\n                                            <table class=\"table table-hover\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>Nombre del funcionario</th>\r\n                                                        <th>Agencia</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let expPend of expPendientesLista | paginate: { itemsPerPage: 10, currentPage: p5, id:'ExpPendientes' }\" (click)=\"onSelectExpPend(expPend)\"\r\n                                                        [ngClass]=\"{ 'highlight': expPend.cambioAdscripcion_id === selectedExpPend }\">\r\n                                                        <td class=\"align-middle text-truncate\">{{ expPend.nombreFuncionario }}</td>\r\n                                                        <td class=\"align-middle text-truncate\">{{ expPend.cNombre }}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n\r\n                                            <div class=\"row mb-4\">\r\n                                                <div class=\"col-12\">\r\n                                                    <div class=\"bg-white text-center\">\r\n                                                        <pagination-controls autoHide=\"true\" (pageChange)=\"p5 = $event\" id='ExpPendientes' maxSize=\"10\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                                                    </div>        \r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"col-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"iclaveFuncionarioAsign\">Selccione el funcionario de la agencia</label>\r\n                                                <select class=\"form-control custom-select\"\r\n                                                        id=\"iclaveFuncionarioAsign\"\r\n                                                        formControlName=\"iclaveFuncionarioAsign\"\r\n                                                        [(ngModel)]=\"iclaveFuncionarioAsign\"\r\n                                                        required>\r\n                                                    <option selected>-- Seleccione un funcionario --</option>\r\n                                                    <option *ngFor=\"let funsAg of funcinariosAgencia\" [value]=\"funsAg.iClaveFuncionario\">{{ funsAg.cNombreFuncionario }} {{ funsAg.cApellidoPaternoFuncionario }} {{ funsAg.cAPellidoMaternoFuncionario }}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 bg-white text-center py-2\">\r\n                            <button [disabled]=\"!formExpPend.valid\" type=\"submit\" class=\"btn btn-success mr-1\">Aceptar</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModalExpPend()\">Cancelar</button>\r\n                        </div> \r\n\r\n                    </form>            \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n"

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
        this.searchActivos = "1";
        // =============================================
        this.menuSelectOptions = [];
        this.rev = true;
        /*Activar MP*/
        this.rev1 = true;
        this.rev2 = true;
        this.valReasignarExpedientes = true;
        this.valExpPendCheck = true;
        this.valEsMPCheck = true;
        this.valSolocambioCheck = true;
        this.valAgenciaSelect = true;
        //   let sinDiacriticos = (function(){
        //     let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
        //          a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
        //         re = new RegExp('['+de+']' , 'ug');
        //     return texto =>
        //         texto.replace(
        //             re, 
        //             match => a.charAt(de.indexOf(match))
        //         );
        // })();
        this.rolesFunci = [];
        this.rolesSR = [];
        // Se quita el rol a los roles del funcionario
        this.rolesEliminados = [];
        this.radioAsign = false;
        this.expPendientesLista = [];
        this.funcinariosAgencia = [];
        this.selectedExpPend = 0;
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
            iclaveFuncionarioAsign: null
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
        if (this.soloRoles) {
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
                    names += "<b style= 'color:#ff0000'>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
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
        this.getFuncionarios();
    };
    // Se cargan los datos del funcionario
    MembershipComponent.prototype.getFuncionarios = function () {
        var _this = this;
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
        this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe(function (funciAgencia) {
            _this.funciAgencia = funciAgencia;
            // console.log(this.funciAgencia);
            _this.nAgActual = _this.funciAgencia.map(function (a) { return a.cNombre; });
            _this.nombreAgActual = _this.nAgActual[0];
            for (var i = 0; i < _this.funciAgencia.length; i++) {
                if (funcionario.iClaveFuncionario === _this.funciAgencia[i].iClaveFuncionario ||
                    _this.funciAgencia[i].usuario[0].bEsActivo === 0) {
                    _this.funciAgencia.splice(i, 1);
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
            // console.log(this.funciAgencia);
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
                    // console.log(this.val);
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
                // console.log(funciMP);
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
    };
    // Se actualiza el funcionario seleccionado
    MembershipComponent.prototype.cambioAdscripcion1 = function (cambioAdscripcion) {
        var _this = this;
        this.membershipService.cambioAdscripcion(cambioAdscripcion).subscribe(function (cambioAdscripcion) {
            _this.cambioAdscripcion;
        });
        // console.log("Se ejecuto el cambio de adscripcion: " + cambioAdscripcion.iClaveFuncionarioSolicitante);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "Registro exitoso...",
            text: this.titularAgencia,
            type: "success"
        }).then(function () {
            _this.pageRefresh();
            _this.router.navigate(['/pages/membership']);
        });
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
        this.selectedRolF = rol.rol_id;
        // console.log("Se seleccion de rol del funcionario=> " + this.selectedRolF);
        this.delRol = rol;
        // console.log(this.delRol);
        this.posicionRolF = this.funcionarioRol.indexOf(this.delRol);
    };
    MembershipComponent.prototype.quitarRol = function () {
        if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
            if (this.delRol.esPrincipal === 1) {
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
        // console.log(funcionario);
        // this.getAgencias();
        // this.getRoles();
        this.getFuncionarioRol(funcionario);
        this.getFuncionarioAgencia(funcionario);
        this.getCatUIE(catUIE);
        this.getCountExp1(funcionario);
        if (this.count <= 0) {
            this.prueba = true;
        }
        if (funcionario) {
            var catDis = funcionario.catDiscriminante_id;
            for (var i = 0; i < this.agencias.length; i++) {
                if (catDis === this.agencias[i].catDiscriminante_id) {
                    this.agencias.splice(i, 1);
                }
            }
            this.funcionario = funcionario;
            this.form.setValue(funcionario);
        }
        this.modalRef = this.modalService.open(modalContent, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });
        this.modalRef.result.then(function (result) {
            _this.form.reset();
        }, function (reason) {
            _this.form.reset();
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
        this.funcinariosAgencia = [];
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
                var expPendientes = this.pendientesNum;
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
        // this.closeModal();
    };
    // Se cargan los expedientes que se encuentran pendientes
    MembershipComponent.prototype.getExpPendientes = function () {
        var _this = this;
        this.membershipService.getExpPendientes().subscribe(function (eP) {
            _this.expPendientesLista = eP;
            // console.log(this.expPendientesLista); 
            for (var i = 0; i < _this.expPendientesLista.length; i++) {
                var ag = _this.expPendientesLista[i].catDiscriminanteAnterior;
                for (var j = 0; j < _this.agencias.length; j++) {
                    if (ag === _this.agencias[j].catDiscriminante_id) {
                        var agNombre = _this.agencias[j].cNombre;
                        // this.expPendientesLista
                        // this.expPendientesLista[i].cNombre = agNombre;
                        _this.expPendientesLista[i].cNombre = agNombre;
                        break;
                    }
                }
            }
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
            // console.log(this.expPendientesLista); 
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
        // this.expPendientesLista.
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
            _this.router.navigate(['/pages/membership']);
        });
    };
    MembershipComponent.prototype.onSubmitExpPend = function () {
        if (this.formExpPend.valid) {
            var iclavefuncionarioAnt = this.formExpPend.value.iclaveFuncionarioAsign;
            var iclavefuncionarioNuevo = this.objExpPend.iClaveFuncionario;
            var catDiscriminante = this.objExpPend.catDiscriminanteAnterior;
            // console.log(iclavefuncionarioAnt+"             "+iclavefuncionarioNuevo+"       "+catDiscriminante);
            var asignarPendientes = new _membership_model__WEBPACK_IMPORTED_MODULE_4__["AsignarPendientes"](catDiscriminante, iclavefuncionarioNuevo, iclavefuncionarioAnt);
            this.asignarExpPendientes(asignarPendientes);
            this.formExpPend.reset({
                hasSubMenu: false,
                parentId: 0
            });
            this.closeModalExpPend();
            //this.pageRefresh();
        }
    };
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
/*! exports provided: User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, FuncionarioAgencia, FuncionarioUsuario, Agencias, catUIE, Roles, FuncionarioUsuarioRol, FunciAgencia, usuario, usuarioRol, CambioAdscripcion, ExpPendientes, AsignarPendientes, cambioEstatus, cambioMP */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambioEstatus", function() { return cambioEstatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cambioMP", function() { return cambioMP; });
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
    function AsignarPendientes(catDiscriminante, iclavefuncionarioAnt, iclavefuncionarioNuevo) {
        this.catDiscriminante = catDiscriminante;
        this.iclavefuncionarioAnt = iclavefuncionarioAnt;
        this.iclavefuncionarioNuevo = iclavefuncionarioNuevo;
    }
    return AsignarPendientes;
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
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
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
        //   public general = "http://localhost:55244/api";
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
    MembershipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MembershipService);
    return MembershipService;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-membership-membership-module.d172fdedc59894b826d9.js.map