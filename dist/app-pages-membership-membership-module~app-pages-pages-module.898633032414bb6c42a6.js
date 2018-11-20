(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-membership-membership-module~app-pages-pages-module"],{

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js ***!
  \*******************************************************************************/
/*! exports provided: NgbAccordionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return NgbAccordionConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var NgbAccordionConfig = /** @class */ (function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    NgbAccordionConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbAccordionConfig;
}());

//# sourceMappingURL=accordion-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.js ***!
  \************************************************************************/
/*! exports provided: NgbPanelTitle, NgbPanelContent, NgbPanel, NgbAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return NgbPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return NgbPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return NgbPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return NgbAccordion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _accordion_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");



var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var NgbPanelTitle = /** @class */ (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
    ];
    /** @nocollapse */
    NgbPanelTitle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbPanelTitle;
}());

/**
 * This directive must be used to wrap accordion panel content.
 */
var NgbPanelContent = /** @class */ (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbPanelContent]' },] },
    ];
    /** @nocollapse */
    NgbPanelContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbPanelContent;
}());

/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var NgbPanel = /** @class */ (function () {
    function NgbPanel() {
        /**
           *  A flag determining whether the panel is disabled or not.
           *  When disabled, the panel cannot be toggled.
           */
        this.disabled = false;
        /**
           *  An optional id for the panel. The id should be unique.
           *  If not provided, it will be auto-generated.
           */
        this.id = "ngb-panel-" + nextId++;
        /**
           * A flag telling if the panel is currently open
           */
        this.isOpen = false;
    }
    NgbPanel.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContantChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbPanel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-panel' },] },
    ];
    /** @nocollapse */
    NgbPanel.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "titleTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelTitle, { descendants: false },] },],
        "contentTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanelContent, { descendants: false },] },],
    };
    return NgbPanel;
}());

/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = /** @class */ (function () {
    function NgbAccordion(config) {
        /**
           * An array or comma separated strings of panel identifiers that should be opened
           */
        this.activeIds = [];
        /**
           * Whether the closed panels should be hidden without destroying them
           */
        this.destroyOnHide = true;
        /**
           * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
           */
        this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    /**
       * Programmatically toggle a panel with a given id.
       */
    NgbAccordion.prototype.toggle = /**
       * Programmatically toggle a panel with a given id.
       */
    function (panelId) {
        var panel = this.panels.find(function (p) { return p.id === panelId; });
        if (panel && !panel.disabled) {
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: !panel.isOpen, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                panel.isOpen = !panel.isOpen;
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // active id updates
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isString"])(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        // update panels open states
        this.panels.forEach(function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; });
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        this.panels.forEach(function (panel) {
            if (panel.id !== panelId) {
                panel.isOpen = false;
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        this.activeIds = this.panels.filter(function (panel) { return panel.isOpen && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-accordion',
                    exportAs: 'ngbAccordion',
                    host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                    template: "\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n            [attr.aria-expanded]=\"panel.isOpen\" [attr.aria-controls]=\"(panel.isOpen ? panel.id : null)\"\n            [attr.aria-disabled]=\"panel.disabled\">\n            {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n          </a>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"card-body collapse {{panel.isOpen ? 'show' : null}}\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n             <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbAccordion.ctorParameters = function () { return [
        { type: _accordion_config__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"], },
    ]; };
    NgbAccordion.propDecorators = {
        "panels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbPanel,] },],
        "activeIds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "closeOtherPanels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['closeOthers',] },],
        "destroyOnHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panelChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbAccordion;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js ***!
  \*******************************************************************************/
/*! exports provided: NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbAccordionConfig, NgbAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return NgbAccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.js");
/* harmony import */ var _accordion_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return _accordion_config__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]; });







var NGB_ACCORDION_DIRECTIVES = [_accordion__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"], _accordion__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]];
var NgbAccordionModule = /** @class */ (function () {
    function NgbAccordionModule() {
    }
    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [_accordion_config__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]] }; };
    NgbAccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbAccordionModule;
}());

//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js ***!
  \***********************************************************************/
/*! exports provided: NgbAlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return NgbAlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = /** @class */ (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbAlertConfig;
}());

//# sourceMappingURL=alert-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js ***!
  \****************************************************************/
/*! exports provided: NgbAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return NgbAlert; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = /** @class */ (function () {
    function NgbAlert(config) {
        /**
           * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
           */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    NgbAlert.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-alert',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbAlert.ctorParameters = function () { return [
        { type: _alert_config__WEBPACK_IMPORTED_MODULE_1__["NgbAlertConfig"], },
    ]; };
    NgbAlert.propDecorators = {
        "dismissible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbAlert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js ***!
  \***********************************************************************/
/*! exports provided: NgbAlert, NgbAlertConfig, NgbAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return NgbAlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js");
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return _alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return _alert_config__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]; });







var NgbAlertModule = /** @class */ (function () {
    function NgbAlertModule() {
    }
    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [_alert_config__WEBPACK_IMPORTED_MODULE_3__["NgbAlertConfig"]] }; };
    NgbAlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], exports: [_alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], entryComponents: [_alert__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]] },] },
    ];
    return NgbAlertModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js ***!
  \***************************************************************************/
/*! exports provided: NgbButtonLabel, NgbCheckBox, NgbRadio, NgbRadioGroup, NgbButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return NgbButtonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/checkbox.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/radio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function() { return _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"]; });








var NGB_BUTTON_DIRECTIVES = [_label__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _checkbox__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"], _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"], _radio__WEBPACK_IMPORTED_MODULE_3__["NgbRadio"]];
var NgbButtonsModule = /** @class */ (function () {
    function NgbButtonsModule() {
    }
    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
    NgbButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] },
    ];
    return NgbButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/checkbox.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/checkbox.js ***!
  \*********************************************************************/
/*! exports provided: NgbCheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return NgbCheckBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js");



var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbCheckBox; }),
    multi: true
};
/**
 * Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable
 * specified via ngModel.
 */
var NgbCheckBox = /** @class */ (function () {
    function NgbCheckBox(_label) {
        this._label = _label;
        /**
           * A flag indicating if a given checkbox button is disabled.
           */
        this.disabled = false;
        /**
           * Value to be propagated as model when the checkbox is checked.
           */
        this.valueChecked = true;
        /**
           * Value to be propagated as model when the checkbox is unchecked.
           */
        this.valueUnChecked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbCheckBox.prototype, "focused", {
        set: function (isFocused) {
            this._label.focused = isFocused;
            if (!isFocused) {
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbCheckBox.prototype.onInputChange = function ($event) {
        var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    };
    NgbCheckBox.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbCheckBox.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbCheckBox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    };
    NgbCheckBox.prototype.writeValue = function (value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
    };
    NgbCheckBox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButton][type=checkbox]',
                    host: {
                        'autocomplete': 'off',
                        '[checked]': 'checked',
                        '[disabled]': 'disabled',
                        '(change)': 'onInputChange($event)',
                        '(focus)': 'focused = true',
                        '(blur)': 'focused = false'
                    },
                    providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgbCheckBox.ctorParameters = function () { return [
        { type: _label__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], },
    ]; };
    NgbCheckBox.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "valueChecked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "valueUnChecked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbCheckBox;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js ***!
  \******************************************************************/
/*! exports provided: NgbButtonLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function() { return NgbButtonLabel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgbButtonLabel = /** @class */ (function () {
    function NgbButtonLabel() {
    }
    NgbButtonLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButtonLabel]',
                    host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
                },] },
    ];
    return NgbButtonLabel;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/radio.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/buttons/radio.js ***!
  \******************************************************************/
/*! exports provided: NgbRadioGroup, NgbRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return NgbRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRadio", function() { return NgbRadio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/label.js");



var NGB_RADIO_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbRadioGroup; }),
    multi: true
};
var nextId = 0;
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = /** @class */ (function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        /**
           * The name of the group. Unless enclosed inputs specify a name, this name is used as the name of the
           * enclosed inputs. If not specified, a name is generated automatically.
           */
        this.name = "ngb-radio-" + nextId++;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (isDisabled) { this.setDisabledState(isDisabled); },
        enumerable: true,
        configurable: true
    });
    NgbRadioGroup.prototype.onRadioChange = function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
    NgbRadioGroup.prototype.writeValue = function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype._updateRadiosValue = function () {
        var _this = this;
        this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
    };
    NgbRadioGroup.prototype._updateRadiosDisabled = function () { this._radios.forEach(function (radio) { return radio.updateDisabled(); }); };
    NgbRadioGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'group' }, providers: [NGB_RADIO_VALUE_ACCESSOR] },] },
    ];
    /** @nocollapse */
    NgbRadioGroup.propDecorators = {
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbRadioGroup;
}());

/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */
var NgbRadio = /** @class */ (function () {
    function NgbRadio(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        this._group.register(this);
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: function () { return this._value; },
        set: /**
           * You can specify model value of a given radio by binding to the value property.
           */
        function (value) {
            this._value = value;
            var stringValue = value ? value.toString() : '';
            this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
            this._group.onRadioValueUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: function () { return this._group.disabled || this._disabled; },
        set: /**
           * A flag indicating if a given radio button is disabled.
           */
        function (isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: function (isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
            if (!isFocused) {
                this._group.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: function () { return this._checked; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "nameAttr", {
        get: function () { return this.name || this._group.name; },
        enumerable: true,
        configurable: true
    });
    NgbRadio.prototype.ngOnDestroy = function () { this._group.unregister(this); };
    NgbRadio.prototype.onChange = function () { this._group.onRadioChange(this); };
    NgbRadio.prototype.updateValue = function (value) {
        this._checked = this.value === value;
        this._label.active = this._checked;
    };
    NgbRadio.prototype.updateDisabled = function () { this._label.disabled = this.disabled; };
    NgbRadio.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbButton][type=radio]',
                    host: {
                        '[checked]': 'checked',
                        '[disabled]': 'disabled',
                        '[name]': 'nameAttr',
                        '(change)': 'onChange()',
                        '(focus)': 'focused = true',
                        '(blur)': 'focused = false'
                    }
                },] },
    ];
    /** @nocollapse */
    NgbRadio.ctorParameters = function () { return [
        { type: NgbRadioGroup, },
        { type: _label__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    NgbRadio.propDecorators = {
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] },],
    };
    return NgbRadio;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js ***!
  \*****************************************************************************/
/*! exports provided: NgbCarouselConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return NgbCarouselConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbCarousel component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the carousels used in the application.
 */
var NgbCarouselConfig = /** @class */ (function () {
    function NgbCarouselConfig() {
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
    }
    NgbCarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbCarouselConfig;
}());

//# sourceMappingURL=carousel-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.js ***!
  \**********************************************************************/
/*! exports provided: NgbSlide, NgbCarousel, NgbSlideEventDirection, NGB_CAROUSEL_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return NgbSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return NgbCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbSlideEventDirection", function() { return NgbSlideEventDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGB_CAROUSEL_DIRECTIVES", function() { return NGB_CAROUSEL_DIRECTIVES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");


var nextId = 0;
/**
 * Represents an individual slide to be used within a carousel.
 */
var NgbSlide = /** @class */ (function () {
    function NgbSlide(tplRef) {
        this.tplRef = tplRef;
        /**
           * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
           * Will be auto-generated if not provided.
           */
        this.id = "ngb-slide-" + nextId++;
    }
    NgbSlide.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbSlide]' },] },
    ];
    /** @nocollapse */
    NgbSlide.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    NgbSlide.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbSlide;
}());

/**
 * Directive to easily create carousels based on Bootstrap's markup.
 */
var NgbCarousel = /** @class */ (function () {
    function NgbCarousel(config) {
        /**
           * A carousel slide event fired when the slide transition is completed.
           * See NgbSlideEvent for payload details
           */
        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
    }
    NgbCarousel.prototype.ngAfterContentChecked = function () {
        var activeSlide = this._getSlideById(this.activeId);
        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
    };
    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
    NgbCarousel.prototype.ngOnChanges = function (changes) {
        if ('interval' in changes && !changes['interval'].isFirstChange()) {
            this._restartTimer();
        }
    };
    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
    /**
     * Navigate to a slide with the specified identifier.
     */
    /**
       * Navigate to a slide with the specified identifier.
       */
    NgbCarousel.prototype.select = /**
       * Navigate to a slide with the specified identifier.
       */
    function (slideId) {
        this.cycleToSelected(slideId, this.getSlideEventDirection(this.activeId, slideId));
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    /**
       * Navigate to the next slide.
       */
    NgbCarousel.prototype.prev = /**
       * Navigate to the next slide.
       */
    function () {
        this.cycleToPrev();
        this._restartTimer();
    };
    /**
     * Navigate to the next slide.
     */
    /**
       * Navigate to the next slide.
       */
    NgbCarousel.prototype.next = /**
       * Navigate to the next slide.
       */
    function () {
        this.cycleToNext();
        this._restartTimer();
    };
    /**
     * Stops the carousel from cycling through items.
     */
    /**
       * Stops the carousel from cycling through items.
       */
    NgbCarousel.prototype.pause = /**
       * Stops the carousel from cycling through items.
       */
    function () { this._stopTimer(); };
    /**
     * Restarts cycling through the carousel slides from left to right.
     */
    /**
       * Restarts cycling through the carousel slides from left to right.
       */
    NgbCarousel.prototype.cycle = /**
       * Restarts cycling through the carousel slides from left to right.
       */
    function () { this._startTimer(); };
    NgbCarousel.prototype.cycleToNext = function () { this.cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT); };
    NgbCarousel.prototype.cycleToPrev = function () { this.cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT); };
    NgbCarousel.prototype.cycleToSelected = function (slideIdx, direction) {
        var selectedSlide = this._getSlideById(slideIdx);
        if (selectedSlide) {
            if (selectedSlide.id !== this.activeId) {
                this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction });
            }
            this.activeId = selectedSlide.id;
        }
    };
    NgbCarousel.prototype.getSlideEventDirection = function (currentActiveSlideId, nextActiveSlideId) {
        var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
        var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
        return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
    };
    NgbCarousel.prototype.keyPrev = function () {
        if (this.keyboard) {
            this.prev();
        }
    };
    NgbCarousel.prototype.keyNext = function () {
        if (this.keyboard) {
            this.next();
        }
    };
    NgbCarousel.prototype._restartTimer = function () {
        this._stopTimer();
        this._startTimer();
    };
    NgbCarousel.prototype._startTimer = function () {
        var _this = this;
        if (this.interval > 0) {
            this._slideChangeInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
        }
    };
    NgbCarousel.prototype._stopTimer = function () { clearInterval(this._slideChangeInterval); };
    NgbCarousel.prototype._getSlideById = function (slideId) {
        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
        return slideWithId.length ? slideWithId[0] : null;
    };
    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
        return this.slides.toArray().indexOf(this._getSlideById(slideId));
    };
    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isLastSlide = currentSlideIdx === slideArr.length - 1;
        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
            slideArr[currentSlideIdx + 1].id;
    };
    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
        var slideArr = this.slides.toArray();
        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
        var isFirstSlide = currentSlideIdx === 0;
        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
            slideArr[currentSlideIdx - 1].id;
    };
    NgbCarousel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-carousel',
                    exportAs: 'ngbCarousel',
                    host: {
                        'class': 'carousel slide',
                        '[style.display]': '"block"',
                        'tabIndex': '0',
                        '(mouseenter)': 'pause()',
                        '(mouseleave)': 'cycle()',
                        '(keydown.arrowLeft)': 'keyPrev()',
                        '(keydown.arrowRight)': 'keyNext()'
                    },
                    template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"cycleToSelected(slide.id, getSlideEventDirection(activeId, slide.id))\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbCarousel.ctorParameters = function () { return [
        { type: _carousel_config__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"], },
    ]; };
    NgbCarousel.propDecorators = {
        "slides": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbSlide,] },],
        "interval": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "wrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "activeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "slide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbCarousel;
}());

/**
 * Enum to define the carousel slide event direction
 */
/**
 * Enum to define the carousel slide event direction
 */
var NgbSlideEventDirection;
/**
 * Enum to define the carousel slide event direction
 */
(function (NgbSlideEventDirection) {
    NgbSlideEventDirection[NgbSlideEventDirection["LEFT"] = 'left'] = "LEFT";
    NgbSlideEventDirection[NgbSlideEventDirection["RIGHT"] = 'right'] = "RIGHT";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
//# sourceMappingURL=carousel.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js ***!
  \*****************************************************************************/
/*! exports provided: NgbCarousel, NgbSlide, NgbCarouselConfig, NgbCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return NgbCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.js");
/* harmony import */ var _carousel_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return _carousel__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return _carousel__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return _carousel_config__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]; });







var NgbCarouselModule = /** @class */ (function () {
    function NgbCarouselModule() {
    }
    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [_carousel_config__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]] }; };
    NgbCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: _carousel__WEBPACK_IMPORTED_MODULE_2__["NGB_CAROUSEL_DIRECTIVES"], exports: _carousel__WEBPACK_IMPORTED_MODULE_2__["NGB_CAROUSEL_DIRECTIVES"], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbCarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.js ***!
  \**********************************************************************/
/*! exports provided: NgbCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return NgbCollapse; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
var NgbCollapse = /** @class */ (function () {
    function NgbCollapse() {
        /**
           * A flag indicating collapsed (true) or open (false) state.
           */
        this.collapsed = false;
    }
    NgbCollapse.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbCollapse]',
                    exportAs: 'ngbCollapse',
                    host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
                },] },
    ];
    /** @nocollapse */
    NgbCollapse.propDecorators = {
        "collapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngbCollapse',] },],
    };
    return NgbCollapse;
}());

//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js ***!
  \*****************************************************************************/
/*! exports provided: NgbCollapse, NgbCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return NgbCollapseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse */ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return _collapse__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]; });




var NgbCollapseModule = /** @class */ (function () {
    function NgbCollapseModule() {
    }
    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
    NgbCollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_collapse__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]], exports: [_collapse__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]] },] },
    ];
    return NgbCollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbDatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return NgbDatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = /** @class */ (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    NgbDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDatepickerConfig;
}());

//# sourceMappingURL=datepicker-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js ***!
  \***********************************************************************************/
/*! exports provided: NgbDatepickerDayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerDayView", function() { return NgbDatepickerDayView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgbDatepickerDayView = /** @class */ (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[ngbDatepickerDayView]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                    host: {
                        'class': 'btn-light',
                        '[class.bg-primary]': 'selected',
                        '[class.text-white]': 'selected',
                        '[class.text-muted]': 'isMuted()',
                        '[class.outside]': 'isMuted()',
                        '[class.active]': 'focused'
                    },
                    template: "{{ date.day }}"
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerDayView.propDecorators = {
        "currentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focused": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbDatepickerDayView;
}());

//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js ***!
  \*******************************************************************************/
/*! exports provided: NgbDatepickerI18n, NgbDatepickerI18nDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nDefault", function() { return NgbDatepickerI18nDefault; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = /** @class */ (function () {
    function NgbDatepickerI18n() {
    }
    NgbDatepickerI18n.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDatepickerI18n;
}());

var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault(_locale, _datePipe) {
        var _this = _super.call(this) || this;
        _this._locale = _locale;
        _this._datePipe = _datePipe;
        var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short);
        _this._weekdaysShort = weekdaysStartingOnSunday.map(function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; });
        _this._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated);
        _this._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide);
        return _this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return this._weekdaysShort[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return this._monthsShort[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return this._monthsFull[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getDayAriaLabel = function (date) {
        var jsDate = new Date(date.year, date.month - 1, date.day);
        return this._datePipe.transform(jsDate, 'fullDate', null, this._locale);
    };
    NgbDatepickerI18nDefault.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] },] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], },
    ]; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js ***!
  \********************************************************************************/
/*! exports provided: NgbInputDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return NgbInputDatepicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
/* harmony import */ var _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngb-date-parser-formatter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_focus_trap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/focus-trap */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");










var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbInputDatepicker; }),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
var NgbInputDatepicker = /** @class */ (function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar, _ngbDateAdapter, _focusTrapFactory) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._focusTrapFactory = _focusTrapFactory;
        this._cRef = null;
        this._disabled = false;
        this._focusTrap = null;
        /**
           * Indicates whether the datepicker popup should be closed automatically after date selection or not.
           * If the value is 'false', the popup can be closed via 'close()' or 'toggle()' methods.
           *
           * @since 1.1.0
           */
        this.autoClose = true;
        /**
              * Placement of a datepicker popup accepts:
              *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
              *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
              * and array of above values.
              */
        this.placement = 'bottom-left';
        /**
           * An event fired when user selects a date using keyboard or mouse.
           * The payload of the event is currently selected NgbDateStruct.
           *
           * @since 1.1.1
           */
        this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                Object(_util_positioning__WEBPACK_IMPORTED_MODULE_5__["positionElements"])(_this._elRef.nativeElement, _this._cRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value === '' || (value && value !== 'false');
            if (this.isOpen()) {
                this._cRef.instance.setDisabledState(this._disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    ;
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        var ngbDate = this._fromDateStruct(this._ngbDateAdapter.fromModel(value));
        if (!this._calendar.isValid(ngbDate)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && ngbDate.before(_ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && ngbDate.after(_ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        this._model = this._fromDateStruct(this._ngbDateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value, updateView) {
        if (updateView === void 0) { updateView = false; }
        this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        this._onChange(this._model ? this._ngbDateAdapter.toModel(this._model) : (value === '' ? null : value));
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    };
    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    /**
       * Opens the datepicker with the selected date indicated by the ngModel value.
       */
    NgbInputDatepicker.prototype.open = /**
       * Opens the datepicker with the selected date indicated by the ngModel value.
       */
    function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(_datepicker__WEBPACK_IMPORTED_MODULE_3__["NgbDatepicker"]);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._ngbDateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
            });
            this._cRef.changeDetectorRef.detectChanges();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            }
            this._focusTrap = this._focusTrapFactory.create(this._cRef.location.nativeElement, true);
            // focus handling
            this._cRef.instance.focus();
        }
    };
    /**
     * Closes the datepicker popup.
     */
    /**
       * Closes the datepicker popup.
       */
    NgbInputDatepicker.prototype.close = /**
       * Closes the datepicker popup.
       */
    function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
            this._focusTrap.destroy();
            this._focusTrap = null;
        }
    };
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     */
    /**
       * Toggles the datepicker popup (opens when closed and closes when opened).
       */
    NgbInputDatepicker.prototype.toggle = /**
       * Toggles the datepicker popup (opens when closed and closes when opened).
       */
    function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbInputDatepicker.prototype.navigateTo = /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
    NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
        }
    };
    NgbInputDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._zoneSubscription.unsubscribe();
    };
    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
            .forEach(function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    };
    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.setStyle(nativeElement, 'padding', '0');
        this._renderer.addClass(nativeElement, 'show');
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (date) { return _this.navigate.emit(date); });
        datepickerInstance.select.subscribe(function (date) {
            _this.dateSelect.emit(date);
            if (_this.autoClose) {
                _this.close();
            }
        });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        this._renderer.setProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._ngbDateAdapter.toModel(model));
            this._onTouched();
        }
    };
    NgbInputDatepicker.prototype._fromDateStruct = function (date) {
        var ngbDate = date ? new _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    };
    NgbInputDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[ngbDatepicker]',
                    exportAs: 'ngbDatepicker',
                    host: {
                        '(input)': 'manualDateChange($event.target.value)',
                        '(change)': 'manualDateChange($event.target.value, true)',
                        '(keyup.esc)': 'close()',
                        '(blur)': 'onBlur()',
                        '[disabled]': 'disabled'
                    },
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NGB_DATEPICKER_VALIDATOR, _datepicker_service__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerService"]]
                },] },
    ];
    /** @nocollapse */
    NgbInputDatepicker.ctorParameters = function () { return [
        { type: _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_4__["NgbDateParserFormatter"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_8__["NgbCalendar"], },
        { type: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbDateAdapter"], },
        { type: _util_focus_trap__WEBPACK_IMPORTED_MODULE_6__["NgbFocusTrapFactory"], },
    ]; };
    NgbInputDatepicker.propDecorators = {
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "displayMonths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "markDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dateSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbInputDatepicker;
}());

//# sourceMappingURL=datepicker-input.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js ***!
  \*****************************************************************************************/
/*! exports provided: NgbDatepickerKeyMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerKeyMapService", function() { return NgbDatepickerKeyMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");




var Key;
(function (Key) {
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NgbDatepickerKeyMapService = /** @class */ (function () {
    function NgbDatepickerKeyMapService(_service, _calendar) {
        var _this = this;
        this._service = _service;
        this._calendar = _calendar;
        _service.model$.subscribe(function (model) {
            _this._minDate = model.minDate;
            _this._maxDate = model.maxDate;
            _this._firstViewDate = model.firstDate;
            _this._lastViewDate = model.lastDate;
        });
    }
    NgbDatepickerKeyMapService.prototype.processKey = function (event) {
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toString"])(event.which)]) {
            switch (event.which) {
                case Key.PageUp:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                    break;
                case Key.PageDown:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                    break;
                case Key.End:
                    this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                    break;
                case Key.Home:
                    this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                    break;
                case Key.ArrowLeft:
                    this._service.focusMove('d', -1);
                    break;
                case Key.ArrowUp:
                    this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                    break;
                case Key.ArrowRight:
                    this._service.focusMove('d', 1);
                    break;
                case Key.ArrowDown:
                    this._service.focusMove('d', this._calendar.getDaysPerWeek());
                    break;
                case Key.Enter:
                case Key.Space:
                    this._service.focusSelect();
                    break;
                default:
                    return;
            }
            event.preventDefault();
            event.stopPropagation();
        }
    };
    NgbDatepickerKeyMapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerKeyMapService.ctorParameters = function () { return [
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], },
    ]; };
    return NgbDatepickerKeyMapService;
}());

//# sourceMappingURL=datepicker-keymap-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerMonthView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerMonthView", function() { return NgbDatepickerMonthView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");



var NgbDatepickerMonthView = /** @class */ (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(_ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    NgbDatepickerMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-month-view',
                    host: { 'class': 'd-block', 'role': 'grid' },
                    styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n      text-align: center;\n      font-style: italic;\n    }\n    .ngb-dp-weekday {\n      color: #5bc0de;\n      color: var(--info);\n    }\n    .ngb-dp-week {\n      border-radius: 0.25rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-weekdays {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                    template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"isHidden(day)\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerMonthView.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "month": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerMonthView;
}());

//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js ***!
  \********************************************************************************************/
/*! exports provided: NgbDatepickerNavigationSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigationSelect", function() { return NgbDatepickerNavigationSelect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




var NgbDatepickerNavigationSelect = /** @class */ (function () {
    function NgbDatepickerNavigationSelect(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](this.date.year, Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation-select',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host>select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }\n  "],
                    template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigationSelect.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "years": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigationSelect;
}());

//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigation", function() { return NgbDatepickerNavigation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




// The -ms- and -webkit- element for the CSS can be removed if we are generating the CSS using SASS.
var NgbDatepickerNavigation = /** @class */ (function () {
    function NgbDatepickerNavigation(i18n) {
        this.i18n = i18n;
        this.navigation = _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__["NavigationEvent"];
        this.months = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigation.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      margin-left: 0.25em;\n      margin-right: 0.15em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right .ngb-dp-navigation-chevron {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin-left: 0.15em;\n      margin-right: 0.25em;\n    }\n    .ngb-dp-arrow {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn {\n      padding: 0rem 0.25rem;\n      margin: 0rem 0.5rem;\n      border: none;\n      background-color: transparent;\n      z-index: 1;\n    }\n    .ngb-dp-arrow-btn:focus {\n      outline-style: auto;\n      outline-width: 1px;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }\n  "],
                    template: "\n  <div class=\"ngb-dp-arrow\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.PREV)\" [disabled]=\"prevDisabled\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n  </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name d-block\">\n        {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.NEXT)\" [disabled]=\"nextDisabled\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigation.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigation.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "prevDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectBoxes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigation;
}());

//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js ***!
  \**********************************************************************************/
/*! exports provided: NgbDatepickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerService", function() { return NgbDatepickerService; });
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");








var NgbDatepickerService = /** @class */ (function () {
    function NgbDatepickerService(_calendar, _i18n) {
        this._calendar = _calendar;
        this._i18n = _i18n;
        this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._state = {
            disabled: false,
            displayMonths: 1,
            firstDayOfWeek: 1,
            focusVisible: false,
            months: [],
            navigation: 'select',
            prevDisabled: false,
            nextDisabled: false,
            selectBoxes: { years: [], months: [] },
            selectedDate: null
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () { return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (model) { return model.months.length > 0; })); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "select$", {
        get: function () { return this._select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (date) { return date !== null; })); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
        set: function (disabled) {
            if (this._state.disabled !== disabled) {
                this._nextState({ disabled: disabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
        set: function (displayMonths) {
            displayMonths = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(displayMonths);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                this._nextState({ displayMonths: displayMonths });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: function (firstDayOfWeek) {
            firstDayOfWeek = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(firstDayOfWeek);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                this._nextState({ firstDayOfWeek: firstDayOfWeek });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
        set: function (focusVisible) {
            if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                this._nextState({ focusVisible: focusVisible });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
        set: function (date) {
            var maxDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.maxDate, maxDate)) {
                this._nextState({ maxDate: maxDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
        set: function (markDisabled) {
            if (this._state.markDisabled !== markDisabled) {
                this._nextState({ markDisabled: markDisabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
        set: function (date) {
            var minDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.minDate, minDate)) {
                this._nextState({ minDate: minDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
        set: function (navigation) {
            if (this._state.navigation !== navigation) {
                this._nextState({ navigation: navigation });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.focus = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusMove = function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    NgbDatepickerService.prototype.open = function (date) {
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (!this._state.disabled) {
            this._nextState({ firstDate: firstDate });
        }
    };
    NgbDatepickerService.prototype.select = function (date, options) {
        if (options === void 0) { options = {}; }
        var selectedDate = this.toValidDate(date, null);
        if (!this._state.disabled) {
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(selectedDate, this._state)) {
                this._select$.next(selectedDate);
            }
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype._nextState = function (patch) {
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    NgbDatepickerService.prototype._patchContexts = function (state) {
        state.months.forEach(function (month) {
            month.weeks.forEach(function (week) {
                week.days.forEach(function (day) {
                    // patch focus flag
                    if (state.focusDate) {
                        day.context.focused = state.focusDate.equals(day.date) && state.focusVisible;
                    }
                    day.tabindex =
                        (!state.disabled && day.date.equals(state.focusDate) && state.focusDate.month === month.number) ? 0 : -1;
                    // override context disabled
                    if (state.disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (state.selectedDate !== undefined) {
                        day.context.selected = state.selectedDate !== null && state.selectedDate.equals(day.date);
                    }
                });
            });
        });
    };
    NgbDatepickerService.prototype._updateState = function (patch) {
        // patching fields
        var state = Object.assign({}, this._state, patch);
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkMinBeforeMax"])(state.minDate, state.maxDate);
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
                'maxDate' in patch || 'disabled' in patch;
            var months = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["buildMonths"])(this._calendar, startDate, state, this._i18n, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxYears"])(state.focusDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxMonths"])(this._calendar, state.focusDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["prevMonthDisabled"])(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["nextMonthDisabled"])(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerService.ctorParameters = function () { return [
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerI18n"], },
    ]; };
    return NgbDatepickerService;
}());

//# sourceMappingURL=datepicker-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js ***!
  \********************************************************************************/
/*! exports provided: isChangedDate, dateComparator, checkMinBeforeMax, checkDateInRange, isDateSelectable, generateSelectBoxMonths, generateSelectBoxYears, nextMonthDisabled, prevMonthDisabled, buildMonths, buildMonth, getFirstViewDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChangedDate", function() { return isChangedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateComparator", function() { return dateComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMinBeforeMax", function() { return checkMinBeforeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDateInRange", function() { return checkDateInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSelectable", function() { return isDateSelectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxMonths", function() { return generateSelectBoxMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxYears", function() { return generateSelectBoxYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextMonthDisabled", function() { return nextMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevMonthDisabled", function() { return prevMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonths", function() { return buildMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonth", function() { return buildMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstViewDate", function() { return getFirstViewDate; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(minDate);
    }
    if (date && maxDate && date.after(maxDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(maxDate);
    }
    return date;
}
function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(!Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var months = calendar.getMonths();
    if (minDate && date.year === minDate.year) {
        var index = months.findIndex(function (month) { return month === minDate.month; });
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        var index = months.findIndex(function (month) { return month === maxDate.month; });
        months = months.slice(0, index + 1);
    }
    return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var start = minDate && minDate.year || date.year - 10;
    var end = maxDate && maxDate.year || date.year + 10;
    return Array.from({ length: end - start + 1 }, function (e, i) { return start + i; });
}
function nextMonthDisabled(calendar, date, maxDate) {
    return maxDate && calendar.getNext(date, 'm').after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
    var prevDate = calendar.getPrev(date, 'm');
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
    var displayMonths = state.displayMonths, months = state.months;
    var newMonths = [];
    var _loop_1 = function (i) {
        var newDate = calendar.getNext(date, 'm', i);
        var index = months.findIndex(function (month) { return month.firstDate.equals(newDate); });
        if (force || index === -1) {
            newMonths.push(buildMonth(calendar, newDate, state, i18n));
        }
        else {
            newMonths.push(months[index]);
        }
    };
    for (var i = 0; i < displayMonths; i++) {
        _loop_1(i);
    }
    return newMonths;
}
function buildMonth(calendar, date, state, i18n) {
    var minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled;
    var month = { firstDate: null, lastDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        var days = [];
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays.push(calendar.getWeekday(date));
            }
            var newDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, date.day);
            var nextDate = calendar.getNext(newDate);
            var ariaLabel = i18n.getDayAriaLabel(newDate);
            // marking date as disabled
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            days.push({
                date: newDate,
                context: {
                    date: { year: newDate.year, month: newDate.month, day: newDate.day },
                    currentMonth: month.number,
                    disabled: disabled,
                    focused: false,
                    selected: false
                },
                tabindex: -1, ariaLabel: ariaLabel
            });
            date = nextDate;
        }
        month.weeks.push({ number: calendar.getWeekNumber(days.map(function (day) { return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(day.date); }), firstDayOfWeek), days: days });
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var daysPerWeek = calendar.getDaysPerWeek();
    var firstMonthDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, 1);
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
//# sourceMappingURL=datepicker-tools.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js ***!
  \*************************************************************************************/
/*! exports provided: NavigationEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEvent", function() { return NavigationEvent; });
// clang-format on
// clang-format on
var NavigationEvent;
// clang-format on
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js ***!
  \**************************************************************************/
/*! exports provided: NgbDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return NgbDatepicker; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-keymap-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");












var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = /** @class */ (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           * An event fired when user selects a date using keyboard or mouse.
           * The payload of the event is currently selected NgbDateStruct.
           */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = function (_) { };
        this.onTouched = function () { };
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach(function (input) { return _this[input] = config[input]; });
        this._selectSubscription = _service.select$.subscribe(function (date) { _this.select.emit(date.toStruct()); });
        this._subscription = _service.model$.subscribe(function (model) {
            var newDate = model.firstDate;
            var oldDate = _this.model ? _this.model.firstDate : null;
            var newSelectedDate = model.selectedDate;
            var oldSelectedDate = _this.model ? _this.model.selectedDate : null;
            var newFocusedDate = model.focusDate;
            var oldFocusedDate = _this.model ? _this.model.focusDate : null;
            _this.model = model;
            // handling selection change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_11__["isChangedDate"])(newSelectedDate, oldSelectedDate)) {
                _this.onTouched();
                _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_11__["isChangedDate"])(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                _this.focus();
            }
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                _this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month }
                });
            }
            _cd.markForCheck();
        });
    }
    /**
     * Manually focus the focusable day in the datepicker
     */
    /**
       * Manually focus the focusable day in the datepicker
       */
    NgbDatepicker.prototype.focus = /**
       * Manually focus the focusable day in the datepicker
       */
    function () {
        var _this = this;
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function () {
            var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
            if (elementToFocus) {
                elementToFocus.focus();
            }
        });
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbDatepicker.prototype.navigateTo = /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    function (date) { this._service.open(_ngb_date__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(date)); };
    NgbDatepicker.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
        this._selectSubscription.unsubscribe();
    };
    NgbDatepicker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate'].forEach(function (input) { return _this._service[input] = _this[input]; });
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate']
            .filter(function (input) { return input in changes; })
            .forEach(function (input) { return _this._service[input] = _this[input]; });
        if ('startDate' in changes) {
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    };
    NgbDatepicker.prototype.onKeyDown = function (event) { this._keyMapService.processKey(event); };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__["NavigationEvent"].PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_7__["NavigationEvent"].NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this._service.disabled = isDisabled; };
    NgbDatepicker.prototype.showFocus = function (focusVisible) { this._service.focusVisible = focusVisible; };
    NgbDatepicker.prototype.writeValue = function (value) { this._service.select(_ngb_date__WEBPACK_IMPORTED_MODULE_4__["NgbDate"].from(this._ngbDateAdapter.fromModel(value))); };
    NgbDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    exportAs: 'ngbDatepicker',
                    selector: 'ngb-datepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    .ngb-dp-header {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n    /deep/ .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n    /deep/ .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n  "],
                    template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\" (focusin)=\"showFocus(true)\" (focusout)=\"showFocus(false)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name bg-light\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [outsideDays]=\"(displayMonths === 1 ? outsideDays : 'hidden')\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, _datepicker_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerService"], _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerKeyMapService"]]
                },] },
    ];
    /** @nocollapse */
    NgbDatepicker.ctorParameters = function () { return [
        { type: _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerKeyMapService"], },
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerI18n"], },
        { type: _datepicker_config__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_9__["NgbDateAdapter"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    NgbDatepicker.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "displayMonths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "markDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "navigation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "startDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return NgbDatepicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js ***!
  \*********************************************************************************/
/*! exports provided: NgbDatepicker, NgbInputDatepicker, NgbCalendar, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbDatepickerMonthView, NgbDatepickerDayView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerConfig, NgbDatepickerI18n, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return NgbDatepickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/focus-trap */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
/* harmony import */ var _datepicker_month_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-month-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
/* harmony import */ var _datepicker_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-navigation */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
/* harmony import */ var _datepicker_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-input */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-input.js");
/* harmony import */ var _datepicker_day_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker-day-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngb-date-parser-formatter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _datepicker_navigation_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker-navigation-select */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return _datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return _datepicker_input__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__["NgbCalendar"]; });

/* harmony import */ var _hijri_ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hijri/ngb-calendar-islamic-civil */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return _hijri_ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_15__["NgbCalendarIslamicCivil"]; });

/* harmony import */ var _hijri_ngb_calendar_islamic_umalqura__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hijri/ngb-calendar-islamic-umalqura */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-umalqura.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return _hijri_ngb_calendar_islamic_umalqura__WEBPACK_IMPORTED_MODULE_16__["NgbCalendarIslamicUmalqura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerMonthView", function() { return _datepicker_month_view__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerMonthView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerDayView", function() { return _datepicker_day_view__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerDayView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigation", function() { return _datepicker_navigation__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerNavigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigationSelect", function() { return _datepicker_navigation_select__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerNavigationSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return _datepicker_config__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__["NgbDateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__["NgbDateParserFormatter"]; });





























var NgbDatepickerModule = /** @class */ (function () {
    function NgbDatepickerModule() {
    }
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [
                { provide: _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__["NgbCalendar"], useClass: _ngb_calendar__WEBPACK_IMPORTED_MODULE_10__["NgbCalendarGregorian"] },
                { provide: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18n"], useClass: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18nDefault"] },
                { provide: _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__["NgbDateParserFormatter"], useClass: _ngb_date_parser_formatter__WEBPACK_IMPORTED_MODULE_11__["NgbDateISOParserFormatter"] },
                { provide: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__["NgbDateAdapter"], useClass: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_12__["NgbDateStructAdapter"] }, _datepicker_config__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerConfig"], _util_focus_trap__WEBPACK_IMPORTED_MODULE_3__["NgbFocusTrapFactory"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ]
        };
    };
    NgbDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        _datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"], _datepicker_month_view__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerMonthView"], _datepicker_navigation__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerNavigation"], _datepicker_navigation_select__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerNavigationSelect"], _datepicker_day_view__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerDayView"],
                        _datepicker_input__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"]
                    ],
                    exports: [_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"], _datepicker_input__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    entryComponents: [_datepicker__WEBPACK_IMPORTED_MODULE_4__["NgbDatepicker"]]
                },] },
    ];
    return NgbDatepickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js ***!
  \****************************************************************************************/
/*! exports provided: NgbCalendarHijri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarHijri", function() { return NgbCalendarHijri; });
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NgbCalendarHijri = /** @class */ (function (_super) {
    __extends(NgbCalendarHijri, _super);
    function NgbCalendarHijri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarHijri.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarHijri.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarHijri.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarHijri.prototype.isValid = function (date) {
        return date && Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.year) && Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.month) && Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(date.day) &&
            !isNaN(this.toGregorian(date).getTime());
    };
    NgbCalendarHijri.prototype.setDay = function (date, day) {
        day = +day;
        var mDays = this.getDaysInIslamicMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = this.setMonth(date, date.month - 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = this.setMonth(date, date.month + 1);
                mDays = this.getDaysInIslamicMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    };
    NgbCalendarHijri.prototype.setMonth = function (date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    };
    NgbCalendarHijri.prototype.setYear = function (date, yearValue) {
        date.year = +yearValue;
        return date;
    };
    NgbCalendarHijri.prototype._isIslamicLeapYear = function (year) { return (14 + 11 * year) % 30 < 11; };
    /**
     * Returns the start of Hijri Month.
     * `month` is 0 for Muharram, 1 for Safar, etc.
     * `year` is any Hijri year.
     */
    /**
       * Returns the start of Hijri Month.
       * `month` is 0 for Muharram, 1 for Safar, etc.
       * `year` is any Hijri year.
       */
    NgbCalendarHijri.prototype._getMonthStart = /**
       * Returns the start of Hijri Month.
       * `month` is 0 for Muharram, 1 for Safar, etc.
       * `year` is any Hijri year.
       */
    function (year, month) {
        return Math.ceil(29.5 * month) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    };
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     */
    /**
       * Returns the start of Hijri year.
       * `year` is any Hijri year.
       */
    NgbCalendarHijri.prototype._getYearStart = /**
       * Returns the start of Hijri year.
       * `year` is any Hijri year.
       */
    function (year) { return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0); };
    NgbCalendarHijri.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendarHijri;
}(_ngb_calendar__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"]));

//# sourceMappingURL=ngb-calendar-hijri.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js ***!
  \************************************************************************************************/
/*! exports provided: NgbCalendarIslamicCivil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return NgbCalendarIslamicCivil; });
/* harmony import */ var _ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar-hijri */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function isGregorianLeapYear(date) {
    var year = date.getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function mod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * The civil calendar is one type of Hijri calendars used in islamic countries.
 * Uses a fixed cycle of alternating 29- and 30-day months,
 * with a leap day added to the last month of 11 out of every 30 years.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
 * Dershowitz.
 */
var GREGORIAN_EPOCH = 1721425.5;
var ISLAMIC_EPOCH = 1948439.5;
var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicCivil, _super);
    function NgbCalendarIslamicCivil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hijri.
     */
    /**
       * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
       * `gdate` is a JS Date to be converted to Hijri.
       */
    NgbCalendarIslamicCivil.prototype.fromGregorian = /**
       * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
       * `gdate` is a JS Date to be converted to Hijri.
       */
    function (gdate) {
        var date = new Date(gdate);
        var gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
        var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
            -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(date) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay) + 0.5;
        var days = julianDay - ISLAMIC_EPOCH;
        var hYear = Math.floor((30 * days + 10646) / 10631.0);
        var hMonth = Math.ceil((days - 29 - this._getYearStart(hYear)) / 29.5);
        hMonth = Math.min(hMonth, 11);
        var hDay = Math.ceil(days - this._getMonthStart(hYear, hMonth)) + 1;
        return new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](hYear, hMonth + 1, hDay);
    };
    /**
     * Returns the equivalent JS date value for a give input islamic(civil) date.
     * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
     */
    /**
       * Returns the equivalent JS date value for a give input islamic(civil) date.
       * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
       */
    NgbCalendarIslamicCivil.prototype.toGregorian = /**
       * Returns the equivalent JS date value for a give input islamic(civil) date.
       * `hijriDate` is an islamic(civil) date to be converted to Gregorian.
       */
    function (hijriDate) {
        var hYear = hijriDate.year;
        var hMonth = hijriDate.month - 1;
        var hDate = hijriDate.day;
        var julianDay = hDate + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
        var wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH, quadricent = Math.floor(depoch / 146097), dqc = mod(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod(dcent, 1461), yindex = Math.floor(dquad / 365);
        var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent === 4 || yindex === 4)) {
            year++;
        }
        var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400);
        var yearday = wjd - gYearStart;
        var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
        var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
        var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                1);
        var day = wjd - tjd2 + 1;
        return new Date(year, month - 1, day);
    };
    /**
     * Returns the number of days in a specific Hijri month.
     * `month` is 1 for Muharram, 2 for Safar, etc.
     * `year` is any Hijri year.
     */
    /**
       * Returns the number of days in a specific Hijri month.
       * `month` is 1 for Muharram, 2 for Safar, etc.
       * `year` is any Hijri year.
       */
    NgbCalendarIslamicCivil.prototype.getDaysInIslamicMonth = /**
       * Returns the number of days in a specific Hijri month.
       * `month` is 1 for Muharram, 2 for Safar, etc.
       * `year` is any Hijri year.
       */
    function (month, year) {
        year = year + Math.floor(month / 13);
        month = ((month - 1) % 12) + 1;
        var length = 29 + month % 2;
        if (month === 12 && this._isIslamicLeapYear(year)) {
            length++;
        }
        return length;
    };
    NgbCalendarIslamicCivil.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(date);
        switch (period) {
            case 'y':
                date = this.setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this.setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this.setDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarIslamicCivil.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarIslamicCivil.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarIslamicCivil.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarIslamicCivil.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    NgbCalendarIslamicCivil.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    return NgbCalendarIslamicCivil;
}(_ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_0__["NgbCalendarHijri"]));

//# sourceMappingURL=ngb-calendar-islamic-civil.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-umalqura.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-umalqura.js ***!
  \***************************************************************************************************/
/*! exports provided: NgbCalendarIslamicUmalqura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return NgbCalendarIslamicUmalqura; });
/* harmony import */ var _ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar-islamic-civil */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-islamic-civil.js");
/* harmony import */ var _ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-calendar-hijri */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/hijri/ngb-calendar-hijri.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1000 * 60 * 60 * 24;
var ISLAMIC_CIVIL = new _ngb_calendar_islamic_civil__WEBPACK_IMPORTED_MODULE_0__["NgbCalendarIslamicCivil"]();
var MONTH_LENGTH = [
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
    '001010011101'
];
function getDaysDiff(date1, date2) {
    var diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
    __extends(NgbCalendarIslamicUmalqura, _super);
    function NgbCalendarIslamicUmalqura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
    * `gdate` is s JS Date to be converted to Hijri.
    */
    /**
      * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
      * `gdate` is s JS Date to be converted to Hijri.
      */
    NgbCalendarIslamicUmalqura.prototype.fromGregorian = /**
      * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
      * `gdate` is s JS Date to be converted to Hijri.
      */
    function (gDate) {
        var hDay = 1, hMonth = 0, hYear = 1300;
        var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
        if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            var year = 1300;
            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                for (var j = 0; j < 12; j++) {
                    var numOfDays = +MONTH_LENGTH[i][j] + 29;
                    if (daysDiff <= numOfDays) {
                        hDay = daysDiff + 1;
                        if (hDay > numOfDays) {
                            hDay = 1;
                            j++;
                        }
                        if (j > 11) {
                            j = 0;
                            year++;
                        }
                        hMonth = j;
                        hYear = year;
                        return new _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](hYear, hMonth + 1, hDay);
                    }
                    daysDiff = daysDiff - numOfDays;
                }
            }
        }
        else {
            return ISLAMIC_CIVIL.fromGregorian(gDate);
        }
    };
    /**
    * Converts the current Hijri date to Gregorian.
    */
    /**
      * Converts the current Hijri date to Gregorian.
      */
    NgbCalendarIslamicUmalqura.prototype.toGregorian = /**
      * Converts the current Hijri date to Gregorian.
      */
    function (hijriDate) {
        var hYear = hijriDate.year;
        var hMonth = hijriDate.month - 1;
        var hDay = hijriDate.day;
        var gDate = new Date(GREGORIAN_FIRST_DATE);
        var dayDiff = hDay - 1;
        if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                for (var m = 0; m < 12; m++) {
                    dayDiff += +MONTH_LENGTH[y][m] + 29;
                }
            }
            for (var m = 0; m < hMonth; m++) {
                dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
            }
            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
        }
        else {
            gDate = ISLAMIC_CIVIL.toGregorian(hijriDate);
        }
        return gDate;
    };
    /**
    * Returns the number of days in a specific Hijri month.
    * `month` is 1 for Muharram, 2 for Safar, etc.
    * `year` is any Hijri year.
    */
    /**
      * Returns the number of days in a specific Hijri month.
      * `month` is 1 for Muharram, 2 for Safar, etc.
      * `year` is any Hijri year.
      */
    NgbCalendarIslamicUmalqura.prototype.getDaysInIslamicMonth = /**
      * Returns the number of days in a specific Hijri month.
      * `month` is 1 for Muharram, 2 for Safar, etc.
      * `year` is any Hijri year.
      */
    function (month, year) {
        if (year >= HIJRI_BEGIN && year <= HIJRI_END) {
            var pos = year - HIJRI_BEGIN;
            return MONTH_LENGTH[pos].charAt(month - 1) === '1' ? 30 : 29;
        }
        return ISLAMIC_CIVIL.getDaysInIslamicMonth(month, year);
    };
    NgbCalendarIslamicUmalqura.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        date = _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"].from(date);
        switch (period) {
            case 'y':
                date = this.setYear(date, date.year + number);
                date.month = 1;
                date.day = 1;
                return date;
            case 'm':
                date = this.setMonth(date, date.month + number);
                date.day = 1;
                return date;
            case 'd':
                return this.setDay(date, date.day + number);
            default:
                return date;
        }
    };
    NgbCalendarIslamicUmalqura.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarIslamicUmalqura.prototype.getWeekday = function (date) {
        var day = this.toGregorian(date).getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarIslamicUmalqura.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = this.toGregorian(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        var MuhDate = this.toGregorian(new _ngb_date__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](date.year, 1, 1)); // Compare with Muharram 1
        return Math.floor(Math.round((time - MuhDate.getTime()) / ONE_DAY) / 7) + 1;
    };
    NgbCalendarIslamicUmalqura.prototype.getToday = function () { return this.fromGregorian(new Date()); };
    NgbCalendarIslamicUmalqura.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
    ];
    return NgbCalendarIslamicUmalqura;
}(_ngb_calendar_hijri__WEBPACK_IMPORTED_MODULE_1__["NgbCalendarHijri"]));

//# sourceMappingURL=ngb-calendar-islamic-umalqura.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js ***!
  \****************************************************************************/
/*! exports provided: NgbCalendar, NgbCalendarGregorian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function() { return NgbCalendarGregorian; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function fromJSDate(jsDate) {
    return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = /** @class */ (function () {
    function NgbCalendar() {
    }
    NgbCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendar;
}());

var NgbCalendarGregorian = /** @class */ (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1, 12);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.year) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.month) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NgbCalendarGregorian;
}(NgbCalendar));

//# sourceMappingURL=ngb-calendar.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js ***!
  \********************************************************************************/
/*! exports provided: NgbDateAdapter, NgbDateStructAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateStructAdapter", function() { return NgbDateStructAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract type serving as a DI token for the service converting from your application Date model to internal
 * NgbDateStruct model.
 * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
 * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDateAdapter;
}());

var NgbDateStructAdapter = /** @class */ (function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.fromModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.toModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    NgbDateStructAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDateStructAdapter;
}(NgbDateAdapter));

//# sourceMappingURL=ngb-date-adapter.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter.js ***!
  \*****************************************************************************************/
/*! exports provided: NgbDateParserFormatter, NgbDateISOParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return NgbDateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateISOParserFormatter", function() { return NgbDateISOParserFormatter; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
var /**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
NgbDateParserFormatter = /** @class */ (function () {
    function NgbDateParserFormatter() {
    }
    return NgbDateParserFormatter;
}());
/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */

var NgbDateISOParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[0])) {
                return { year: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[0]) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[1])) {
                return { year: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[0]), month: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[0]) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[1]) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(dateParts[2])) {
                return { year: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[0]), month: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[1]), day: Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ?
            date.year + "-" + (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(date.month) ? Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["padNumber"])(date.month) : '') + "-" + (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(date.day) ? Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["padNumber"])(date.day) : '') :
            '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter));

//# sourceMappingURL=ngb-date-parser-formatter.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js ***!
  \************************************************************************/
/*! exports provided: NgbDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function() { return NgbDate; });
var NgbDate = /** @class */ (function () {
    function NgbDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    NgbDate.from = function (date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    };
    NgbDate.prototype.equals = function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    NgbDate.prototype.toStruct = function () { return { year: this.year, month: this.month, day: this.day }; };
    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
    return NgbDate;
}());

//# sourceMappingURL=ngb-date.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js ***!
  \*****************************************************************************/
/*! exports provided: NgbDropdownConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return NgbDropdownConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
var NgbDropdownConfig = /** @class */ (function () {
    function NgbDropdownConfig() {
        this.autoClose = true;
        this.placement = 'bottom-left';
    }
    NgbDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbDropdownConfig;
}());

//# sourceMappingURL=dropdown-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js ***!
  \**********************************************************************/
/*! exports provided: NgbDropdownMenu, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function() { return NgbDropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownAnchor", function() { return NgbDropdownAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function() { return NgbDropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return NgbDropdown; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 */
var NgbDropdownMenu = /** @class */ (function () {
    function NgbDropdownMenu(dropdown, _elementRef, _renderer) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.placement = 'bottom';
        this.isOpen = false;
    }
    NgbDropdownMenu.prototype.isEventFrom = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    NgbDropdownMenu.prototype.position = function (triggerEl, placement) {
        this.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(triggerEl, this._elementRef.nativeElement, placement));
    };
    NgbDropdownMenu.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._elementRef.nativeElement.parentNode, 'dropup');
        this._renderer.removeClass(this._elementRef.nativeElement.parentNode, 'dropdown');
        this.placement = _placement;
        /**
             * apply the new placement
             * in case of top use up-arrow or down-arrow otherwise
             */
        if (_placement.search('^top') !== -1) {
            this._renderer.addClass(this._elementRef.nativeElement.parentNode, 'dropup');
        }
        else {
            this._renderer.addClass(this._elementRef.nativeElement.parentNode, 'dropdown');
        }
    };
    NgbDropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownMenu]',
                    host: { '[class.dropdown-menu]': 'true', '[class.show]': 'dropdown.isOpen()', '[attr.x-placement]': 'placement' }
                },] },
    ];
    /** @nocollapse */
    NgbDropdownMenu.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdown; }),] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    return NgbDropdownMenu;
}());

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgbDropdownToggle directive. It plays the same role as NgbDropdownToggle but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
var NgbDropdownAnchor = /** @class */ (function () {
    function NgbDropdownAnchor(dropdown, _elementRef) {
        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this.anchorEl = _elementRef.nativeElement;
    }
    NgbDropdownAnchor.prototype.isEventFrom = function ($event) { return this._elementRef.nativeElement.contains($event.target); };
    NgbDropdownAnchor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownAnchor]',
                    host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
                },] },
    ];
    /** @nocollapse */
    NgbDropdownAnchor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdown; }),] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return NgbDropdownAnchor;
}());

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
 * alternative.
 */
var NgbDropdownToggle = /** @class */ (function (_super) {
    __extends(NgbDropdownToggle, _super);
    function NgbDropdownToggle(dropdown, elementRef) {
        return _super.call(this, dropdown, elementRef) || this;
    }
    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
    NgbDropdownToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdownToggle]',
                    host: {
                        'class': 'dropdown-toggle',
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'dropdown.isOpen()',
                        '(click)': 'toggleOpen()'
                    },
                    providers: [{ provide: NgbDropdownAnchor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdownToggle; }) }]
                },] },
    ];
    /** @nocollapse */
    NgbDropdownToggle.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDropdown; }),] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return NgbDropdownToggle;
}(NgbDropdownAnchor));

/**
 * Transforms a node into a dropdown.
 */
var NgbDropdown = /** @class */ (function () {
    function NgbDropdown(config, ngZone) {
        var _this = this;
        /**
           *  Defines whether or not the dropdown-menu is open initially.
           */
        this._open = false;
        /**
           *  An event fired when the dropdown is opened or closed.
           *  Event's payload equals whether dropdown is open.
           */
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placement = config.placement;
        this.autoClose = config.autoClose;
        this._zoneSubscription = ngZone.onStable.subscribe(function () { _this._positionMenu(); });
    }
    NgbDropdown.prototype.ngOnInit = function () {
        if (this._menu) {
            this._menu.applyPlacement(Array.isArray(this.placement) ? (this.placement[0]) : this.placement);
        }
    };
    /**
     * Checks if the dropdown menu is open or not.
     */
    /**
       * Checks if the dropdown menu is open or not.
       */
    NgbDropdown.prototype.isOpen = /**
       * Checks if the dropdown menu is open or not.
       */
    function () { return this._open; };
    /**
     * Opens the dropdown menu of a given navbar or tabbed navigation.
     */
    /**
       * Opens the dropdown menu of a given navbar or tabbed navigation.
       */
    NgbDropdown.prototype.open = /**
       * Opens the dropdown menu of a given navbar or tabbed navigation.
       */
    function () {
        if (!this._open) {
            this._open = true;
            this._positionMenu();
            this.openChange.emit(true);
        }
    };
    /**
     * Closes the dropdown menu of a given navbar or tabbed navigation.
     */
    /**
       * Closes the dropdown menu of a given navbar or tabbed navigation.
       */
    NgbDropdown.prototype.close = /**
       * Closes the dropdown menu of a given navbar or tabbed navigation.
       */
    function () {
        if (this._open) {
            this._open = false;
            this.openChange.emit(false);
        }
    };
    /**
     * Toggles the dropdown menu of a given navbar or tabbed navigation.
     */
    /**
       * Toggles the dropdown menu of a given navbar or tabbed navigation.
       */
    NgbDropdown.prototype.toggle = /**
       * Toggles the dropdown menu of a given navbar or tabbed navigation.
       */
    function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgbDropdown.prototype.closeFromClick = function ($event) {
        if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
            if (this.autoClose === true) {
                this.close();
            }
            else if (this.autoClose === 'inside' && this._isEventFromMenu($event)) {
                this.close();
            }
            else if (this.autoClose === 'outside' && !this._isEventFromMenu($event)) {
                this.close();
            }
        }
    };
    NgbDropdown.prototype.closeFromOutsideEsc = function () {
        if (this.autoClose) {
            this.close();
        }
    };
    NgbDropdown.prototype.ngOnDestroy = function () { this._zoneSubscription.unsubscribe(); };
    NgbDropdown.prototype._isEventFromToggle = function ($event) { return this._anchor.isEventFrom($event); };
    NgbDropdown.prototype._isEventFromMenu = function ($event) { return this._menu ? this._menu.isEventFrom($event) : false; };
    NgbDropdown.prototype._positionMenu = function () {
        if (this.isOpen() && this._menu) {
            this._menu.position(this._anchor.anchorEl, this.placement);
        }
    };
    NgbDropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngbDropdown]',
                    exportAs: 'ngbDropdown',
                    host: {
                        '[class.show]': 'isOpen()',
                        '(keyup.esc)': 'closeFromOutsideEsc()',
                        '(document:click)': 'closeFromClick($event)'
                    }
                },] },
    ];
    /** @nocollapse */
    NgbDropdown.ctorParameters = function () { return [
        { type: _dropdown_config__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbDropdown.propDecorators = {
        "_menu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownMenu,] },],
        "_anchor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NgbDropdownAnchor,] },],
        "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "_open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['open',] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDropdown;
}());

//# sourceMappingURL=dropdown.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js ***!
  \*****************************************************************************/
/*! exports provided: NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownConfig, NgbDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return NgbDropdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.js");
/* harmony import */ var _dropdown_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return _dropdown_config__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]; });






var NGB_DROPDOWN_DIRECTIVES = [_dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownAnchor"], _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _dropdown__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"]];
var NgbDropdownModule = /** @class */ (function () {
    function NgbDropdownModule() {
    }
    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [_dropdown_config__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]] }; };
    NgbDropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] },
    ];
    return NgbDropdownModule;
}());

//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/index.js ***!
  \**********************************************************/
/*! exports provided: NgbAccordionModule, NgbAccordionConfig, NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbAlertModule, NgbAlertConfig, NgbAlert, NgbButtonsModule, NgbCheckBox, NgbRadioGroup, NgbCarouselModule, NgbCarouselConfig, NgbCarousel, NgbSlide, NgbCollapseModule, NgbCollapse, NgbCalendar, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbDatepickerModule, NgbDatepickerI18n, NgbDatepickerConfig, NgbDateParserFormatter, NgbDateAdapter, NgbDatepicker, NgbInputDatepicker, NgbDropdownModule, NgbDropdownConfig, NgbDropdown, NgbModalModule, NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons, NgbPaginationModule, NgbPaginationConfig, NgbPagination, NgbPopoverModule, NgbPopoverConfig, NgbPopover, NgbProgressbarModule, NgbProgressbarConfig, NgbProgressbar, NgbRatingModule, NgbRatingConfig, NgbRating, NgbTabsetModule, NgbTabsetConfig, NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTimepickerModule, NgbTimepickerConfig, NgbTimepicker, NgbTooltipModule, NgbTooltipConfig, NgbTooltip, NgbHighlight, NgbTypeaheadModule, NgbTypeaheadConfig, NgbTypeahead, NgbRootModule, NgbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRootModule", function() { return NgbRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModule", function() { return NgbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion/accordion.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/accordion/accordion.module.js");
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert/alert.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.module.js");
/* harmony import */ var _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/buttons.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/buttons/buttons.module.js");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/carousel/carousel.module.js");
/* harmony import */ var _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collapse/collapse.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/collapse/collapse.module.js");
/* harmony import */ var _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker/datepicker.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module.js");
/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown/dropdown.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagination/pagination.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover/popover.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js");
/* harmony import */ var _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progressbar/progressbar.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js");
/* harmony import */ var _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rating/rating.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js");
/* harmony import */ var _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabset/tabset.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js");
/* harmony import */ var _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timepicker/timepicker.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./typeahead/typeahead.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAccordion", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanel", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function() { return _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function() { return _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbButtonsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function() { return _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbCheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function() { return _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCarousel", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbSlide", function() { return _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function() { return _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCollapse", function() { return _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbCalendarIslamicCivil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbCalendarIslamicUmalqura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerI18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function() { return _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbInputDatepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbDropdown", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeahead"]; });


































var NGB_MODULES = [
    _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"], _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"], _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbButtonsModule"], _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"], _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"], _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
    _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"], _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"],
    _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"], _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"], _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"], _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"]
];
var NgbRootModule = /** @class */ (function () {
    function NgbRootModule() {
    }
    NgbRootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _alert_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(), _buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["NgbButtonsModule"].forRoot(), _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"].forRoot(), _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"].forRoot(),
                        _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"].forRoot(), _typeahead_typeahead_module__WEBPACK_IMPORTED_MODULE_16__["NgbTypeaheadModule"].forRoot(), _accordion_accordion_module__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionModule"].forRoot(), _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselModule"].forRoot(),
                        _datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"].forRoot(), _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"].forRoot(), _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"].forRoot(), _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"].forRoot(),
                        _popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"].forRoot(), _progressbar_progressbar_module__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"].forRoot(), _rating_rating_module__WEBPACK_IMPORTED_MODULE_12__["NgbRatingModule"].forRoot(), _tabset_tabset_module__WEBPACK_IMPORTED_MODULE_13__["NgbTabsetModule"].forRoot(),
                        _timepicker_timepicker_module__WEBPACK_IMPORTED_MODULE_14__["NgbTimepickerModule"].forRoot(), _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_15__["NgbTooltipModule"].forRoot()
                    ],
                    exports: NGB_MODULES
                },] },
    ];
    return NgbRootModule;
}());

var NgbModule = /** @class */ (function () {
    function NgbModule() {
    }
    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
    NgbModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] },
    ];
    return NgbModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js ***!
  \*************************************************************************/
/*! exports provided: NgbModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalBackdrop", function() { return NgbModalBackdrop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgbModalBackdrop = /** @class */ (function () {
    function NgbModalBackdrop() {
    }
    NgbModalBackdrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-modal-backdrop',
                    template: '',
                    host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")' }
                },] },
    ];
    /** @nocollapse */
    NgbModalBackdrop.propDecorators = {
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbModalBackdrop;
}());

//# sourceMappingURL=modal-backdrop.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js ***!
  \********************************************************************************/
/*! exports provided: ModalDismissReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js ***!
  \********************************************************************/
/*! exports provided: NgbActiveModal, NgbModalRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return NgbActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return NgbModalRef; });
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var /**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
NgbActiveModal = /** @class */ (function () {
    function NgbActiveModal() {
    }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbActiveModal.prototype.close = /**
       * Can be used to close a modal, passing an optional result.
       */
    function (result) { };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbActiveModal.prototype.dismiss = /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    function (reason) { };
    return NgbActiveModal;
}());
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */

/**
 * A reference to a newly opened modal.
 */
var /**
 * A reference to a newly opened modal.
 */
NgbModalRef = /** @class */ (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of component used as modal's content.
         * Undefined when a TemplateRef is used as modal's content.
         */
        get: /**
           * The instance of component used as modal's content.
           * Undefined when a TemplateRef is used as modal's content.
           */
        function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set: 
        // only needed to keep TS1.8 compatibility
        function (instance) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbModalRef.prototype.close = /**
       * Can be used to close a modal, passing an optional result.
       */
    function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbModalRef.prototype.dismiss = /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    function (reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss || this._beforeDismiss() !== false) {
                this._reject(reason);
                this._removeModalElements();
            }
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}());
/**
 * A reference to a newly opened modal.
 */

//# sourceMappingURL=modal-ref.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js ***!
  \**********************************************************************/
/*! exports provided: NgbModalStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalStack", function() { return NgbModalStack; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-ref */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");







var NgbModalStack = /** @class */ (function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver, document) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._windowAttributes = ['backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
        this._backdropAttributes = ['backdropClass'];
        this._document = document;
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerEl = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(options.container) ? this._document.querySelector(options.container) : this._document.body;
        if (!containerEl) {
            throw new Error("The specified modal container \"" + (options.container || 'body') + "\" was not found in the DOM.");
        }
        var activeModal = new _modal_ref__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]();
        var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
        var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : null;
        var windowCmptRef = this._attachWindowComponent(containerEl, contentRef);
        var ngbModalRef = new _modal_ref__WEBPACK_IMPORTED_MODULE_6__["NgbModalRef"](windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngbModalRef;
    };
    NgbModalStack.prototype._attachBackdrop = function (containerEl) {
        var backdropFactory = this._componentFactoryResolver.resolveComponentFactory(_modal_backdrop__WEBPACK_IMPORTED_MODULE_4__["NgbModalBackdrop"]);
        var backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    };
    NgbModalStack.prototype._attachWindowComponent = function (containerEl, contentRef) {
        var windowFactory = this._componentFactoryResolver.resolveComponentFactory(_modal_window__WEBPACK_IMPORTED_MODULE_5__["NgbModalWindow"]);
        var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        this._windowAttributes.forEach(function (optionName) {
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._applyBackdropOptions = function (backdropInstance, options) {
        this._backdropAttributes.forEach(function (optionName) {
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            return this._createFromTemplateRef(content, context);
        }
        else if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, context);
        }
    };
    NgbModalStack.prototype._createFromTemplateRef = function (content, context) {
        var viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([viewRef.rootNodes], viewRef);
    };
    NgbModalStack.prototype._createFromString = function (content) {
        var component = this._document.createTextNode("" + content);
        return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[component]]);
    };
    NgbModalStack.prototype._createFromComponent = function (moduleCFR, contentInjector, content, context) {
        var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create([{ provide: _modal_ref__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"], useValue: context }], contentInjector);
        var componentRef = contentCmptFactory.create(modalContentInjector);
        this._applicationRef.attachView(componentRef.hostView);
        return new _util_popup__WEBPACK_IMPORTED_MODULE_2__["ContentRef"]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    };
    NgbModalStack.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    NgbModalStack.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    return NgbModalStack;
}());

//# sourceMappingURL=modal-stack.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js ***!
  \***********************************************************************/
/*! exports provided: NgbModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalWindow", function() { return NgbModalWindow; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dismiss-reasons */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");



var NgbModalWindow = /** @class */ (function () {
    function NgbModalWindow(document, _elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._document = document;
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = this._document.activeElement;
        this._renderer.addClass(this._document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var body = this._document.body;
        var elWithFocus = this._elWithFocus;
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);
        this._elWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    };
    NgbModalWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngb-modal-window',
                    host: {
                        '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                        'role': 'dialog',
                        'tabindex': '-1',
                        '(keyup.esc)': 'escKey($event)',
                        '(click)': 'backdropClick($event)'
                    },
                    template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbModalWindow.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    ]; };
    NgbModalWindow.propDecorators = {
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "centered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "windowClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "dismissEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dismiss',] },],
    };
    return NgbModalWindow;
}());

//# sourceMappingURL=modal-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js ***!
  \****************************************************************/
/*! exports provided: NgbModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return NgbModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-stack */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");


/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
var NgbModal = /** @class */ (function () {
    function NgbModal(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    /**
       * Opens a new modal window with the specified content and using supplied options. Content can be provided
       * as a TemplateRef or a component type. If you pass a component type as content than instances of those
       * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
       * NgbActiveModal class to close / dismiss modals from "inside" of a component.
       */
    NgbModal.prototype.open = /**
       * Opens a new modal window with the specified content and using supplied options. Content can be provided
       * as a TemplateRef or a component type. If you pass a component type as content than instances of those
       * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
       * NgbActiveModal class to close / dismiss modals from "inside" of a component.
       */
    function (content, options) {
        if (options === void 0) { options = {}; }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    NgbModal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbModal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _modal_stack__WEBPACK_IMPORTED_MODULE_1__["NgbModalStack"], },
    ]; };
    return NgbModal;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js ***!
  \***********************************************************************/
/*! exports provided: NgbModal, NgbModalRef, NgbActiveModal, ModalDismissReasons, NgbModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalModule", function() { return NgbModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
/* harmony import */ var _modal_stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-stack */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]; });

/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-ref */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbModalRef", function() { return _modal_ref__WEBPACK_IMPORTED_MODULE_5__["NgbModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function() { return _modal_ref__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]; });

/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-dismiss-reasons */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"]; });









var NgbModalModule = /** @class */ (function () {
    function NgbModalModule() {
    }
    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [_modal__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _modal_stack__WEBPACK_IMPORTED_MODULE_3__["NgbModalStack"]] }; };
    NgbModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_modal_backdrop__WEBPACK_IMPORTED_MODULE_1__["NgbModalBackdrop"], _modal_window__WEBPACK_IMPORTED_MODULE_2__["NgbModalWindow"]],
                    entryComponents: [_modal_backdrop__WEBPACK_IMPORTED_MODULE_1__["NgbModalBackdrop"], _modal_window__WEBPACK_IMPORTED_MODULE_2__["NgbModalWindow"]],
                    providers: [_modal__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]]
                },] },
    ];
    return NgbModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return NgbPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = /** @class */ (function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    NgbPaginationConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbPaginationConfig;
}());

//# sourceMappingURL=pagination-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.js ***!
  \**************************************************************************/
/*! exports provided: NgbPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return NgbPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");



/**
 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
 */
var NgbPagination = /** @class */ (function () {
    function NgbPagination(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
           *  Current page. Page numbers start with 1
           */
        this.page = 1;
        /**
           *  An event fired when the page is changed.
           *  Event's payload equals to the newly selected page.
           *  Will fire only if collection size is set and all values are valid.
           *  Page numbers start with 1
           */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
    NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
    NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    /**
       * Appends ellipses and first/last page number to the displayed pages
       */
    NgbPagination.prototype._applyEllipses = /**
       * Appends ellipses and first/last page number to the displayed pages
       */
    function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift(-1);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                if (end < (this.pageCount - 1)) {
                    this.pages.push(-1);
                }
                this.pages.push(this.pageCount);
            }
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    /**
       * Rotates page numbers based on maxSize items visible.
       * Currently selected page stays in the middle:
       *
       * Ex. for selected page = 6:
       * [5,*6*,7] for maxSize = 3
       * [4,5,*6*,7] for maxSize = 4
       */
    NgbPagination.prototype._applyRotation = /**
       * Rotates page numbers based on maxSize items visible.
       * Currently selected page stays in the middle:
       *
       * Ex. for selected page = 6:
       * [5,*6*,7] for maxSize = 3
       * [4,5,*6*,7] for maxSize = 4
       */
    function () {
        var start = 0;
        var end = this.pageCount;
        var leftOffset = Math.floor(this.maxSize / 2);
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    };
    /**
     * Paginates page numbers based on maxSize items per page
     */
    /**
       * Paginates page numbers based on maxSize items per page
       */
    NgbPagination.prototype._applyPagination = /**
       * Paginates page numbers based on maxSize items per page
       */
    function () {
        var page = Math.ceil(this.page / this.maxSize) - 1;
        var start = page * this.maxSize;
        var end = start + this.maxSize;
        return [start, end];
    };
    NgbPagination.prototype._setPageInRange = function (newPageNo) {
        var prevPageNo = this.page;
        this.page = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["getValueInRange"])(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    };
    NgbPagination.prototype._updatePages = function (newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            var start = 0;
            var end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = this._applyRotation(), start = _a[0], end = _a[1];
            }
            else {
                _b = this._applyPagination(), start = _b[0], end = _b[1];
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
        var _a, _b;
    };
    NgbPagination.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-pagination',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'role': 'navigation' },
                    template: "\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;&laquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"!hasPrevious() || disabled\">\n        <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">\n          {{pageNumber}}\n          <span *ngIf=\"pageNumber === page\" class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext() || disabled\">\n        <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <span aria-hidden=\"true\">&raquo;&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbPagination.ctorParameters = function () { return [
        { type: _pagination_config__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationConfig"], },
    ]; };
    NgbPagination.propDecorators = {
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundaryLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directionLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ellipses": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "collectionSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "page": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbPagination;
}());

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.module.js ***!
  \*********************************************************************************/
/*! exports provided: NgbPagination, NgbPaginationConfig, NgbPaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function() { return NgbPaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination.js");
/* harmony import */ var _pagination_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/pagination/pagination-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPagination", function() { return _pagination__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function() { return _pagination_config__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationConfig"]; });







var NgbPaginationModule = /** @class */ (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [_pagination_config__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationConfig"]] }; };
    NgbPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_pagination__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]], exports: [_pagination__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbPaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbPopoverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return NgbPopoverConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = /** @class */ (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
        this.disablePopover = false;
    }
    NgbPopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbPopoverConfig;
}());

//# sourceMappingURL=popover-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js ***!
  \********************************************************************/
/*! exports provided: NgbPopoverWindow, NgbPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverWindow", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return NgbPopover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");





var nextId = 0;
var NgbPopoverWindow = /** @class */ (function () {
    function NgbPopoverWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbPopoverWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
    };
    NgbPopoverWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-popover-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"popover bs-popover-" + placement.split("-")[0]+" bs-popover-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\">{{title}}</h3><div class=\"popover-body\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    :host.bs-popover-top-left .arrow, :host.bs-popover-bottom-left .arrow {\n      left: 2em;\n    }\n\n    :host.bs-popover-top-right .arrow, :host.bs-popover-bottom-right .arrow {\n      left: auto;\n      right: 2em;\n    }\n\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -5px;\n    }\n\n    :host.bs-popover-left-top .arrow, :host.bs-popover-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-popover-left-bottom .arrow, :host.bs-popover-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbPopoverWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbPopoverWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbPopoverWindow;
}());

/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = /** @class */ (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the popover is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the popover is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    NgbPopover.prototype._isDisabled = function () {
        if (this.disablePopover) {
            return true;
        }
        if (!this.ngbPopover && !this.popoverTitle) {
            return true;
        }
        return false;
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    NgbPopover.prototype.open = /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    function (context) {
        if (!this._windowRef && !this._isDisabled()) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position popover along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.close = /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.toggle = /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    /**
       * Returns whether or not the popover is currently being shown
       */
    NgbPopover.prototype.isOpen = /**
       * Returns whether or not the popover is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnChanges = function (changes) {
        // close popover if title and content become empty, or disablePopover set to true
        if ((changes['ngbPopover'] || changes['popoverTitle'] || changes['disablePopover']) && this._isDisabled()) {
            this.close();
        }
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
    ];
    /** @nocollapse */
    NgbPopover.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _popover_config__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbPopover.propDecorators = {
        "ngbPopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disablePopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbPopover;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.module.js ***!
  \***************************************************************************/
/*! exports provided: NgbPopover, NgbPopoverConfig, NgbPopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function() { return NgbPopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return _popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return _popover_config__WEBPACK_IMPORTED_MODULE_2__["NgbPopoverConfig"]; });






var NgbPopoverModule = /** @class */ (function () {
    function NgbPopoverModule() {
    }
    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [_popover_config__WEBPACK_IMPORTED_MODULE_2__["NgbPopoverConfig"]] }; };
    NgbPopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], _popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverWindow"]], exports: [_popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]], entryComponents: [_popover__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverWindow"]] },] },
    ];
    return NgbPopoverModule;
}());

//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js ***!
  \***********************************************************************************/
/*! exports provided: NgbProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return NgbProgressbarConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbProgressbar component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the progress bars used in the application.
 */
var NgbProgressbarConfig = /** @class */ (function () {
    function NgbProgressbarConfig() {
        this.max = 100;
        this.animated = false;
        this.striped = false;
        this.showValue = false;
    }
    NgbProgressbarConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbProgressbarConfig;
}());

//# sourceMappingURL=progressbar-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js ***!
  \****************************************************************************/
/*! exports provided: NgbProgressbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return NgbProgressbar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");



/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = /** @class */ (function () {
    function NgbProgressbar(config) {
        /**
           * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
           */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    NgbProgressbar.prototype.getValue = function () { return Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["getValueInRange"])(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    NgbProgressbar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-progressbar',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbProgressbar.ctorParameters = function () { return [
        { type: _progressbar_config__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"], },
    ]; };
    NgbProgressbar.propDecorators = {
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "animated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "striped": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbProgressbar;
}());

//# sourceMappingURL=progressbar.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module.js ***!
  \***********************************************************************************/
/*! exports provided: NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function() { return NgbProgressbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar.js");
/* harmony import */ var _progressbar_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function() { return _progressbar__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function() { return _progressbar_config__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarConfig"]; });







var NgbProgressbarModule = /** @class */ (function () {
    function NgbProgressbarModule() {
    }
    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [_progressbar_config__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarConfig"]] }; };
    NgbProgressbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]], exports: [_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js ***!
  \*************************************************************************/
/*! exports provided: NgbRatingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return NgbRatingConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = /** @class */ (function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    NgbRatingConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbRatingConfig;
}());

//# sourceMappingURL=rating-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.js ***!
  \******************************************************************/
/*! exports provided: NgbRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return NgbRating; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rating_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var Key;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbRating; }),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
var NgbRating = /** @class */ (function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
           * An event fired when a user is hovering over a given rating.
           * Event's payload equals to the rating being hovered over.
           */
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when a user stops hovering over a given rating.
           * Event's payload equals to the rating of the last item being hovered over.
           */
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when a user selects a new rating.
           * Event's payload equals to the newly selected rating.
           */
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.max = config.max;
        this.readonly = config.readonly;
    }
    NgbRating.prototype.ariaValueText = function () { return this.nextRate + " out of " + this.max; };
    NgbRating.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    NgbRating.prototype.handleBlur = function () { this.onTouched(); };
    NgbRating.prototype.handleClick = function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
    NgbRating.prototype.handleKeyDown = function (event) {
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toString"])(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    };
    NgbRating.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    NgbRating.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function (v, k) { return ({ fill: 0, index: k }); });
        this._updateState(this.rate);
    };
    NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbRating.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    NgbRating.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbRating.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) { internalChange = true; }
        var newRate = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["getValueInRange"])(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    NgbRating.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    NgbRating.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    };
    NgbRating.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
    };
    NgbRating.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-rating',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'class': 'd-inline-flex',
                        'tabindex': '0',
                        'role': 'slider',
                        'aria-valuemin': '0',
                        '[attr.aria-valuemax]': 'max',
                        '[attr.aria-valuenow]': 'nextRate',
                        '[attr.aria-valuetext]': 'ariaValueText()',
                        '[attr.aria-disabled]': 'readonly ? true : null',
                        '(blur)': 'handleBlur()',
                        '(keydown)': 'handleKeyDown($event)',
                        '(mouseleave)': 'reset()'
                    },
                    template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngTemplateOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
                    providers: [NGB_RATING_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgbRating.ctorParameters = function () { return [
        { type: _rating_config__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    NgbRating.propDecorators = {
        "max": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "readonly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resettable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "starTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] },],
        "hover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "leave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbRating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.module.js ***!
  \*************************************************************************/
/*! exports provided: NgbRating, NgbRatingConfig, NgbRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function() { return NgbRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rating_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating-config.js");
/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating */ "./node_modules/@ng-bootstrap/ng-bootstrap/rating/rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRating", function() { return _rating__WEBPACK_IMPORTED_MODULE_3__["NgbRating"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function() { return _rating_config__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]; });







var NgbRatingModule = /** @class */ (function () {
    function NgbRatingModule() {
    }
    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [_rating_config__WEBPACK_IMPORTED_MODULE_2__["NgbRatingConfig"]] }; };
    NgbRatingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_rating__WEBPACK_IMPORTED_MODULE_3__["NgbRating"]], exports: [_rating__WEBPACK_IMPORTED_MODULE_3__["NgbRating"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbRatingModule;
}());

//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js ***!
  \*************************************************************************/
/*! exports provided: NgbTabsetConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return NgbTabsetConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = /** @class */ (function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.orientation = 'horizontal';
        this.type = 'tabs';
    }
    NgbTabsetConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTabsetConfig;
}());

//# sourceMappingURL=tabset-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.js ***!
  \******************************************************************/
/*! exports provided: NgbTabTitle, NgbTabContent, NgbTab, NgbTabset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return NgbTabTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return NgbTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return NgbTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return NgbTabset; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabset-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");


var nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var NgbTabTitle = /** @class */ (function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabTitle]' },] },
    ];
    /** @nocollapse */
    NgbTabTitle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbTabTitle;
}());

/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
var NgbTabContent = /** @class */ (function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ng-template[ngbTabContent]' },] },
    ];
    /** @nocollapse */
    NgbTabContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return NgbTabContent;
}());

/**
 * A directive representing an individual tab.
 */
var NgbTab = /** @class */ (function () {
    function NgbTab() {
        /**
           * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
           */
        this.id = "ngb-tab-" + nextId++;
        /**
           * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
           */
        this.disabled = false;
    }
    NgbTab.prototype.ngAfterContentChecked = function () {
        // We are using @ContentChildren instead of @ContantChild as in the Angular version being used
        // only @ContentChildren allows us to specify the {descendants: false} option.
        // Without {descendants: false} we are hitting bugs described in:
        // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
        this.titleTpl = this.titleTpls.first;
        this.contentTpl = this.contentTpls.first;
    };
    NgbTab.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngb-tab' },] },
    ];
    /** @nocollapse */
    NgbTab.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "titleTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabTitle, { descendants: false },] },],
        "contentTpls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTabContent, { descendants: false },] },],
    };
    return NgbTab;
}());

/**
 * A component that makes it easy to create tabbed interface.
 */
var NgbTabset = /** @class */ (function () {
    function NgbTabset(config) {
        /**
           * Whether the closed tabs should be hidden without destroying them
           */
        this.destroyOnHide = true;
        /**
           * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
           */
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        set: /**
           * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
           * 'justified'
           * The default value is 'start'.
           */
        function (className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            }
            else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    /**
       * Selects the tab with the given id and shows its associated pane.
       * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
       */
    NgbTabset.prototype.select = /**
       * Selects the tab with the given id and shows its associated pane.
       * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
       */
    function (tabId) {
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    NgbTabset.prototype.ngAfterContentChecked = function () {
        // auto-correct activeId that might have been set incorrectly as input
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    NgbTabset.prototype._getTabById = function (id) {
        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    NgbTabset.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tabset',
                    exportAs: 'ngbTabset',
                    template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbTabset.ctorParameters = function () { return [
        { type: _tabset_config__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"], },
    ]; };
    NgbTabset.propDecorators = {
        "tabs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgbTab,] },],
        "activeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "destroyOnHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "justify": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "orientation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "tabChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbTabset;
}());

//# sourceMappingURL=tabset.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.module.js ***!
  \*************************************************************************/
/*! exports provided: NgbTabset, NgbTab, NgbTabContent, NgbTabTitle, NgbTabsetConfig, NgbTabsetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function() { return NgbTabsetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabset */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset.js");
/* harmony import */ var _tabset_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabset-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tabset/tabset-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabset", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTab", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabContent", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function() { return _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function() { return _tabset_config__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]; });







var NGB_TABSET_DIRECTIVES = [_tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"], _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], _tabset__WEBPACK_IMPORTED_MODULE_2__["NgbTabTitle"]];
var NgbTabsetModule = /** @class */ (function () {
    function NgbTabsetModule() {
    }
    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [_tabset_config__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetConfig"]] }; };
    NgbTabsetModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbTabsetModule;
}());

//# sourceMappingURL=tabset.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js ***!
  \************************************************************************/
/*! exports provided: NgbTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTime", function() { return NgbTime; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");

var NgbTime = /** @class */ (function () {
    function NgbTime(hour, minute, second) {
        this.hour = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(hour);
        this.minute = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(minute);
        this.second = Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) { step = 1; }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        }
        else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) { step = 1; }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        }
        else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) { step = 1; }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        }
        else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) { checkSecs = true; }
        return Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.hour) && Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.minute) && (checkSecs ? Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(this.second) : true);
    };
    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
    return NgbTime;
}());

//# sourceMappingURL=ngb-time.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbTimepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return NgbTimepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTimepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the timepickers used in the application.
 */
var NgbTimepickerConfig = /** @class */ (function () {
    function NgbTimepickerConfig() {
        this.meridian = false;
        this.spinners = true;
        this.seconds = false;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.disabled = false;
        this.readonlyInputs = false;
        this.size = 'medium';
    }
    NgbTimepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTimepickerConfig;
}());

//# sourceMappingURL=timepicker-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js ***!
  \**************************************************************************/
/*! exports provided: NgbTimepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return NgbTimepicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _ngb_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngb-time */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
/* harmony import */ var _timepicker_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");





var NGB_TIMEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbTimepicker; }),
    multi: true
};
/**
 * A lightweight & configurable timepicker directive.
 */
var NgbTimepicker = /** @class */ (function () {
    function NgbTimepicker(config) {
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.meridian = config.meridian;
        this.spinners = config.spinners;
        this.seconds = config.seconds;
        this.hourStep = config.hourStep;
        this.minuteStep = config.minuteStep;
        this.secondStep = config.secondStep;
        this.disabled = config.disabled;
        this.readonlyInputs = config.readonlyInputs;
        this.size = config.size;
    }
    NgbTimepicker.prototype.writeValue = function (value) {
        this.model = value ? new _ngb_time__WEBPACK_IMPORTED_MODULE_3__["NgbTime"](value.hour, value.minute, value.second) : new _ngb_time__WEBPACK_IMPORTED_MODULE_3__["NgbTime"]();
        if (!this.seconds && (!value || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value.second))) {
            this.model.second = 0;
        }
    };
    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
    NgbTimepicker.prototype.changeHour = function (step) {
        this.model.changeHour(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeMinute = function (step) {
        this.model.changeMinute(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.changeSecond = function (step) {
        this.model.changeSecond(step);
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateHour = function (newVal) {
        var isPM = this.model.hour >= 12;
        var enteredHour = Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(newVal);
        if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
        }
        else {
            this.model.updateHour(enteredHour);
        }
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateMinute = function (newVal) {
        this.model.updateMinute(Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.updateSecond = function (newVal) {
        this.model.updateSecond(Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(newVal));
        this.propagateModelChange();
    };
    NgbTimepicker.prototype.toggleMeridian = function () {
        if (this.meridian) {
            this.changeHour(12);
        }
    };
    NgbTimepicker.prototype.formatHour = function (value) {
        if (Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value)) {
            if (this.meridian) {
                return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(value % 24);
            }
        }
        else {
            return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(NaN);
        }
    };
    NgbTimepicker.prototype.formatMinSec = function (value) { return Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["padNumber"])(value); };
    NgbTimepicker.prototype.setFormControlSize = function () { return { 'form-control-sm': this.size === 'small', 'form-control-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.setButtonSize = function () { return { 'btn-sm': this.size === 'small', 'btn-lg': this.size === 'large' }; };
    NgbTimepicker.prototype.ngOnChanges = function (changes) {
        if (changes['seconds'] && !this.seconds && this.model && !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    };
    NgbTimepicker.prototype.propagateModelChange = function (touched) {
        if (touched === void 0) { touched = true; }
        if (touched) {
            this.onTouched();
        }
        if (this.model.isValid(this.seconds)) {
            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
        }
        else {
            this.onChange(null);
        }
    };
    NgbTimepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-timepicker',
                    styles: ["\n    .ngb-tp {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n      align-items: center;\n    }\n\n    .ngb-tp-hour, .ngb-tp-minute, .ngb-tp-second, .ngb-tp-meridian {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      -ms-flex-align: center;\n      align-items: center;\n      -ms-flex-pack: distribute;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    input {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }\n  "],
                    template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeHour(-hourStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeMinute(-minuteStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron\"></span>\n            <span class=\"sr-only\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"setFormControlSize()\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\">\n          <button *ngIf=\"spinners\" type=\"button\" class=\"btn btn-link\" [ngClass]=\"setButtonSize()\" (click)=\"changeSecond(-secondStep)\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n            <span class=\"chevron bottom\"></span>\n            <span class=\"sr-only\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [ngClass]=\"setButtonSize()\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n            (click)=\"toggleMeridian()\">{{model?.hour >= 12 ? 'PM' : 'AM'}}</button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                    providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgbTimepicker.ctorParameters = function () { return [
        { type: _timepicker_config__WEBPACK_IMPORTED_MODULE_4__["NgbTimepickerConfig"], },
    ]; };
    NgbTimepicker.propDecorators = {
        "meridian": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "spinners": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "seconds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "hourStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minuteStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "secondStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "readonlyInputs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTimepicker;
}());

//# sourceMappingURL=timepicker.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module.js ***!
  \*********************************************************************************/
/*! exports provided: NgbTimepicker, NgbTimepickerConfig, NgbTimepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function() { return NgbTimepickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker.js");
/* harmony import */ var _timepicker_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function() { return _timepicker__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function() { return _timepicker_config__WEBPACK_IMPORTED_MODULE_3__["NgbTimepickerConfig"]; });







var NgbTimepickerModule = /** @class */ (function () {
    function NgbTimepickerModule() {
    }
    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [_timepicker_config__WEBPACK_IMPORTED_MODULE_3__["NgbTimepickerConfig"]] }; };
    NgbTimepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_timepicker__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]], exports: [_timepicker__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] },] },
    ];
    return NgbTimepickerModule;
}());

//# sourceMappingURL=timepicker.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbTooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return NgbTooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = /** @class */ (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
        this.disableTooltip = false;
    }
    NgbTooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTooltipConfig;
}());

//# sourceMappingURL=tooltip-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js ***!
  \********************************************************************/
/*! exports provided: NgbTooltipWindow, NgbTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipWindow", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return NgbTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");





var nextId = 0;
var NgbTooltipWindow = /** @class */ (function () {
    function NgbTooltipWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbTooltipWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
    };
    NgbTooltipWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tooltip-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"tooltip show bs-tooltip-" + placement.split("-")[0]+" bs-tooltip-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-top-left .arrow, :host.bs-tooltip-bottom-left .arrow {\n      left: 1em;\n    }\n\n    :host.bs-tooltip-top-right .arrow, :host.bs-tooltip-bottom-right .arrow {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-left-top .arrow, :host.bs-tooltip-right-top .arrow {\n      top: 0.4rem;\n    }\n\n    :host.bs-tooltip-left-bottom .arrow, :host.bs-tooltip-right-bottom .arrow {\n      top: auto;\n      bottom: 0.4rem;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbTooltipWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbTooltipWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltipWindow;
}());

/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = /** @class */ (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the tooltip is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the tooltip is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        set: /**
           * Content to be displayed as tooltip. If falsy, the tooltip won't open.
           */
        function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    NgbTooltip.prototype.open = /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    function (context) {
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._windowRef.instance.placement = Array.isArray(this.placement) ? this.placement[0] : this.placement;
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position tooltip along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.close = /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.toggle = /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    /**
       * Returns whether or not the tooltip is currently being shown
       */
    NgbTooltip.prototype.isOpen = /**
       * Returns whether or not the tooltip is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
    ];
    /** @nocollapse */
    NgbTooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbTooltip.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ngbTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltip;
}());

//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js ***!
  \***************************************************************************/
/*! exports provided: NgbTooltipConfig, NgbTooltip, NgbTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function() { return NgbTooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]; });






var NgbTooltipModule = /** @class */ (function () {
    function NgbTooltipModule() {
    }
    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [_tooltip_config__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"]] }; };
    NgbTooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: [_tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], _tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipWindow"]], exports: [_tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]], entryComponents: [_tooltip__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipWindow"]] },] },
    ];
    return NgbTooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js ***!
  \************************************************************************/
/*! exports provided: NgbHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return NgbHighlight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbHighlight = /** @class */ (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["regExpEscape"])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    NgbHighlight.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-highlight',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                        "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                        "</ng-template>",
                    // template needs to be formatted in a certain way so we don't add empty text nodes
                    styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbHighlight.propDecorators = {
        "highlightClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "result": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbHighlight;
}());

//# sourceMappingURL=highlight.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js ***!
  \*******************************************************************************/
/*! exports provided: NgbTypeaheadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return NgbTypeaheadConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = /** @class */ (function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = 'bottom-left';
    }
    NgbTypeaheadConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgbTypeaheadConfig;
}());

//# sourceMappingURL=typeahead-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js ***!
  \*******************************************************************************/
/*! exports provided: NgbTypeaheadWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadWindow", function() { return NgbTypeaheadWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbTypeaheadWindow = /** @class */ (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
           * Flag indicating if the first row should be active initially
           */
        this.focusFirst = true;
        /**
           * A function used to format a given result before display. This function should return a formatted string without any
           * HTML markup
           */
        this.formatter = _util_util__WEBPACK_IMPORTED_MODULE_1__["toString"];
        /**
           * Event raised when user selects a particular result row
           */
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbTypeaheadWindow.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.resetActive = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () { this.resetActive(); };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    NgbTypeaheadWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-typeahead-window',
                    exportAs: 'ngbTypeaheadWindow',
                    host: { 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                    template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbTypeaheadWindow.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "results": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select',] },],
        "activeChangeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['activeChange',] },],
    };
    return NgbTypeaheadWindow;
}());

//# sourceMappingURL=typeahead-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js ***!
  \************************************************************************/
/*! exports provided: NgbTypeahead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return NgbTypeahead; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _typeahead_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _util_accessibility_live__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/accessibility/live */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js");
/* harmony import */ var _typeahead_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typeahead-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var Key;
(function (Key) {
    Key[Key["Tab"] = 9] = "Tab";
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Escape"] = 27] = "Escape";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbTypeahead; }),
    multi: true
};
var nextWindowId = 0;
/**
 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
 */
var NgbTypeahead = /** @class */ (function () {
    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone, _live) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._injector = _injector;
        this._live = _live;
        /** Placement of a typeahead accepts:
           *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
           *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
           * and array of above values.
          */
        this.placement = 'bottom-left';
        /**
           * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
           */
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.popupId = "ngb-typeahead-" + nextWindowId++;
        this._onTouched = function () { };
        this._onChange = function (_) { };
        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_elementRef.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function ($event) { return $event.target.value; }));
        this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_5__["PopupService"](_typeahead_window__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadWindow"], _injector, _viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this.isPopupOpen()) {
                Object(_util_positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    NgbTypeahead.prototype.ngOnInit = function () {
        var _this = this;
        var inputValues$ = this._valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (value) {
            _this._inputValueBackup = value;
            if (_this.editable) {
                _this._onChange(value);
            }
        }));
        var results$ = inputValues$.pipe(this.ngbTypeahead);
        var processedResults$ = results$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
            if (!_this.editable) {
                _this._onChange(undefined);
            }
        }));
        var userInput$ = this._resubscribeTypeahead.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return processedResults$; }));
        this._subscription = this._subscribeToUserInput(userInput$);
    };
    NgbTypeahead.prototype.ngOnDestroy = function () {
        this._closePopup();
        this._unsubscribeFromUserInput();
        this._zoneSubscription.unsubscribe();
    };
    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgbTypeahead.prototype.onDocumentClick = function (event) {
        if (event.target !== this._elementRef.nativeElement) {
            this.dismissPopup();
        }
    };
    /**
     * Dismisses typeahead popup window
     */
    /**
       * Dismisses typeahead popup window
       */
    NgbTypeahead.prototype.dismissPopup = /**
       * Dismisses typeahead popup window
       */
    function () {
        if (this.isPopupOpen()) {
            this._closePopup();
            this._writeInputValue(this._inputValueBackup);
        }
    };
    /**
     * Returns true if the typeahead popup window is displayed
     */
    /**
       * Returns true if the typeahead popup window is displayed
       */
    NgbTypeahead.prototype.isPopupOpen = /**
       * Returns true if the typeahead popup window is displayed
       */
    function () { return this._windowRef != null; };
    NgbTypeahead.prototype.handleBlur = function () {
        this._resubscribeTypeahead.next(null);
        this._onTouched();
    };
    NgbTypeahead.prototype.handleKeyDown = function (event) {
        if (!this.isPopupOpen()) {
            return;
        }
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["toString"])(event.which)]) {
            switch (event.which) {
                case Key.ArrowDown:
                    event.preventDefault();
                    this._windowRef.instance.next();
                    this._showHint();
                    break;
                case Key.ArrowUp:
                    event.preventDefault();
                    this._windowRef.instance.prev();
                    this._showHint();
                    break;
                case Key.Enter:
                case Key.Tab:
                    var result = this._windowRef.instance.getActive();
                    if (Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(result)) {
                        event.preventDefault();
                        event.stopPropagation();
                        this._selectResult(result);
                    }
                    this._closePopup();
                    break;
                case Key.Escape:
                    event.preventDefault();
                    this._resubscribeTypeahead.next(null);
                    this.dismissPopup();
                    break;
            }
        }
    };
    NgbTypeahead.prototype._openPopup = function () {
        var _this = this;
        if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;
            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
            this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
        }
    };
    NgbTypeahead.prototype._closePopup = function () {
        this._popupService.close();
        this._windowRef = null;
        this.activeDescendant = undefined;
    };
    NgbTypeahead.prototype._selectResult = function (result) {
        var defaultPrevented = false;
        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
        this._resubscribeTypeahead.next(null);
        if (!defaultPrevented) {
            this.writeValue(result);
            this._onChange(result);
        }
    };
    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
        this._selectResult(result);
        this._closePopup();
    };
    NgbTypeahead.prototype._showHint = function () {
        if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
            var userInputLowerCase = this._inputValueBackup.toLowerCase();
            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            }
            else {
                this.writeValue(this._windowRef.instance.getActive());
            }
        }
    };
    NgbTypeahead.prototype._formatItemForInput = function (item) {
        return item && this.inputFormatter ? this.inputFormatter(item) : Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["toString"])(item);
    };
    NgbTypeahead.prototype._writeInputValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', Object(_util_util__WEBPACK_IMPORTED_MODULE_6__["toString"])(value));
    };
    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
        var _this = this;
        return userInput$.subscribe(function (results) {
            if (!results || results.length === 0) {
                _this._closePopup();
            }
            else {
                _this._openPopup();
                _this._windowRef.instance.focusFirst = _this.focusFirst;
                _this._windowRef.instance.results = results;
                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                if (_this.resultFormatter) {
                    _this._windowRef.instance.formatter = _this.resultFormatter;
                }
                if (_this.resultTemplate) {
                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                }
                _this._windowRef.instance.resetActive();
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                // The observable stream we are subscribing to might have async steps
                // and if a component containing typeahead is using the OnPush strategy
                // the change detection turn wouldn't be invoked automatically.
                _this._windowRef.changeDetectorRef.detectChanges();
                _this._showHint();
            }
            var count = results.length;
            _this._live.say(count === 0 ? 'No results available' : count + " result" + (count === 1 ? '' : 's') + " available");
        });
    };
    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._subscription = null;
    };
    NgbTypeahead.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[ngbTypeahead]',
                    exportAs: 'ngbTypeahead',
                    host: {
                        '(blur)': 'handleBlur()',
                        '[class.open]': 'isPopupOpen()',
                        '(document:click)': 'onDocumentClick($event)',
                        '(keydown)': 'handleKeyDown($event)',
                        'autocomplete': 'off',
                        'autocapitalize': 'off',
                        'autocorrect': 'off',
                        'role': 'combobox',
                        'aria-multiline': 'false',
                        '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                        '[attr.aria-activedescendant]': 'activeDescendant',
                        '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                        '[attr.aria-expanded]': 'isPopupOpen()'
                    },
                    providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgbTypeahead.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _typeahead_config__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _util_accessibility_live__WEBPACK_IMPORTED_MODULE_7__["Live"], },
    ]; };
    NgbTypeahead.propDecorators = {
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "inputFormatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "ngbTypeahead": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultFormatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showHint": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectItem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbTypeahead;
}());

//# sourceMappingURL=typeahead.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module.js ***!
  \*******************************************************************************/
/*! exports provided: NgbHighlight, NgbTypeaheadWindow, NgbTypeaheadConfig, NgbTypeahead, NgbTypeaheadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function() { return NgbTypeaheadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
/* harmony import */ var _typeahead_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeahead-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
/* harmony import */ var _typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeahead */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead.js");
/* harmony import */ var _typeahead_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeahead-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config.js");
/* harmony import */ var _util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../util/accessibility/live */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return _highlight__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadWindow", function() { return _typeahead_window__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function() { return _typeahead_config__WEBPACK_IMPORTED_MODULE_5__["NgbTypeaheadConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function() { return _typeahead__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"]; });












var NgbTypeaheadModule = /** @class */ (function () {
    function NgbTypeaheadModule() {
    }
    NgbTypeaheadModule.forRoot = function () {
        return {
            ngModule: NgbTypeaheadModule,
            providers: [_util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__["Live"], _typeahead_config__WEBPACK_IMPORTED_MODULE_5__["NgbTypeaheadConfig"], { provide: _util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__["ARIA_LIVE_DELAY"], useValue: _util_accessibility_live__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ARIA_LIVE_DELAY"] }]
        };
    };
    NgbTypeaheadModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_typeahead__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _highlight__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"], _typeahead_window__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadWindow"]],
                    exports: [_typeahead__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _highlight__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    entryComponents: [_typeahead_window__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadWindow"]]
                },] },
    ];
    return NgbTypeaheadModule;
}());

//# sourceMappingURL=typeahead.module.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/accessibility/live.js ***!
  \****************************************************************************/
/*! exports provided: ARIA_LIVE_DELAY, DEFAULT_ARIA_LIVE_DELAY, Live */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_LIVE_DELAY", function() { return ARIA_LIVE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ARIA_LIVE_DELAY", function() { return DEFAULT_ARIA_LIVE_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live", function() { return Live; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('live announcer delay');
var DEFAULT_ARIA_LIVE_DELAY = 100;
function createLiveElement(document) {
    var element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
    element.classList.add('sr-only');
    document.body.appendChild(element);
    return element;
}
var Live = /** @class */ (function () {
    function Live(document, _delay) {
        this._delay = _delay;
        this._element = createLiveElement(document);
    }
    Live.prototype.ngOnDestroy = function () { this._element.parentElement.removeChild(this._element); };
    Live.prototype.say = function (message) {
        var element = this._element;
        var delay = this._delay;
        element.textContent = '';
        var setText = function () { return element.textContent = message; };
        if (delay === null) {
            setText();
        }
        else {
            setTimeout(setText, delay);
        }
    };
    Live.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Live.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ARIA_LIVE_DELAY,] },] },
    ]; };
    return Live;
}());

//# sourceMappingURL=live.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/focus-trap.js ***!
  \********************************************************************/
/*! exports provided: NgbFocusTrap, NgbFocusTrapFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbFocusTrap", function() { return NgbFocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbFocusTrapFactory", function() { return NgbFocusTrapFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FOCUSABLE_ELEMENTS_SELECTOR = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
    'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
].join(', ');
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["BACKWARD"] = 0] = "BACKWARD";
    DIRECTION[DIRECTION["FORWARD"] = 1] = "FORWARD";
})(DIRECTION || (DIRECTION = {}));
/**
 * Class that enforce the browser focus to be trapped inside a DOM element.
 *
 * The implementation is rather simple, the class add a `focusin` listener on the document with capture phase.
 * Any focus event will then be caught, and therefore the class will only allow the one for elements contained inside
 * it's own element.
 *
 * In case the element is not contained, the class will determine which new element has to be focused based on the `tab`
 * navigation direction.
 *
 * Should not be used directly. Use only via {@link NgbFocusTrapFactory}
 */
var /**
 * Class that enforce the browser focus to be trapped inside a DOM element.
 *
 * The implementation is rather simple, the class add a `focusin` listener on the document with capture phase.
 * Any focus event will then be caught, and therefore the class will only allow the one for elements contained inside
 * it's own element.
 *
 * In case the element is not contained, the class will determine which new element has to be focused based on the `tab`
 * navigation direction.
 *
 * Should not be used directly. Use only via {@link NgbFocusTrapFactory}
 */
NgbFocusTrap = /** @class */ (function () {
    /**
     * @param _element The element around which focus will be trapped inside
     * @param autofocus Initially put the focus on specific element with a `ngbFocustrap` attribute. Will also remenber
     * and restore any previously focused element on destroy.
     * @param _document Document on which `focusin` and `keydown.TAB` events are listened
     * @param _ngZone The zone Angular is running in
     */
    function NgbFocusTrap(_element, autofocus, _document, _ngZone) {
        var _this = this;
        this._element = _element;
        this._document = _document;
        this._ngZone = _ngZone;
        this._direction = DIRECTION.FORWARD;
        this._previouslyFocused = null;
        this._endOfDocument = null;
        this._enforceFocus = this._enforceFocus.bind(this);
        this._detectDirection = this._detectDirection.bind(this);
        var eod = this._endOfDocument = this._document.createElement('i');
        eod.className = 'ngb-focustrap-eod';
        eod.tabIndex = 0;
        this._document.body.appendChild(eod);
        this._ngZone.runOutsideAngular(function () {
            _this._document.addEventListener('focusin', _this._enforceFocus, true);
            _this._document.addEventListener('keydown', _this._detectDirection);
            _this._removeDocumentListener = function () {
                _this._document.removeEventListener('focusin', _this._enforceFocus, true);
                _this._document.removeEventListener('keydown', _this._detectDirection);
            };
        });
        if (autofocus === true) {
            this._previouslyFocused = document.activeElement;
            this._focusInitial();
        }
    }
    Object.defineProperty(NgbFocusTrap.prototype, "focusableElement", {
        /**
         * Guess the next focusable element.
         * Computation is based on specific CSS selector and [tab] navigation direction
         */
        get: /**
           * Guess the next focusable element.
           * Computation is based on specific CSS selector and [tab] navigation direction
           */
        function () {
            var list = this._element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
            return this._direction === DIRECTION.BACKWARD ? list[list.length - 1] : list[0];
        },
        enumerable: true,
        configurable: true
    });
    /** Detect if incoming focus event should be prevented or not */
    /** Detect if incoming focus event should be prevented or not */
    NgbFocusTrap.prototype._enforceFocus = /** Detect if incoming focus event should be prevented or not */
    function (event) {
        var _this = this;
        var target = event.target;
        if (this._document !== target && this._element !== target && !this._element.contains(target)) {
            this._ngZone.run(function () {
                var element = _this.focusableElement;
                if (element) {
                    element.focus();
                    event.stopPropagation();
                }
            });
        }
    };
    /** Event handler detecting current `tab` navigation direction */
    /** Event handler detecting current `tab` navigation direction */
    NgbFocusTrap.prototype._detectDirection = /** Event handler detecting current `tab` navigation direction */
    function (event) {
        var shiftKey = event.shiftKey, key = event.key;
        if (key === 'Tab') {
            this._direction = shiftKey ? DIRECTION.BACKWARD : DIRECTION.FORWARD;
        }
    };
    /** Try to set focus on the first found element that has an ngbAutofocus attribute */
    /** Try to set focus on the first found element that has an ngbAutofocus attribute */
    NgbFocusTrap.prototype._focusInitial = /** Try to set focus on the first found element that has an ngbAutofocus attribute */
    function () {
        var element = this._element.querySelector('[ngbAutofocus]');
        if (element) {
            element.focus();
        }
    };
    /**
     * Destroys the focustrap by removing all event listeners set on document.
     *
     * Eventually put the focus back on the previously focused element at the time
     * focustrap has been initialized.
     */
    /**
       * Destroys the focustrap by removing all event listeners set on document.
       *
       * Eventually put the focus back on the previously focused element at the time
       * focustrap has been initialized.
       */
    NgbFocusTrap.prototype.destroy = /**
       * Destroys the focustrap by removing all event listeners set on document.
       *
       * Eventually put the focus back on the previously focused element at the time
       * focustrap has been initialized.
       */
    function () {
        this._removeDocumentListener();
        this._document.body.removeChild(this._endOfDocument);
        if (this._previouslyFocused) {
            this._previouslyFocused.focus();
        }
    };
    return NgbFocusTrap;
}());
/**
 * Class that enforce the browser focus to be trapped inside a DOM element.
 *
 * The implementation is rather simple, the class add a `focusin` listener on the document with capture phase.
 * Any focus event will then be caught, and therefore the class will only allow the one for elements contained inside
 * it's own element.
 *
 * In case the element is not contained, the class will determine which new element has to be focused based on the `tab`
 * navigation direction.
 *
 * Should not be used directly. Use only via {@link NgbFocusTrapFactory}
 */

/**
 * Factory service to easily create a `NgbFocusTrap` instance on an element
 */
var NgbFocusTrapFactory = /** @class */ (function () {
    function NgbFocusTrapFactory(_document, _ngZone) {
        this._document = _document;
        this._ngZone = _ngZone;
    }
    /**
     * Create an instance of {@link NgbFocusTrap} and return it
     * @param element HTMLElement to trap focus inside
     * @param autofocus Whether the focustrap should automatically move focus into the trapped element upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    /**
       * Create an instance of {@link NgbFocusTrap} and return it
       * @param element HTMLElement to trap focus inside
       * @param autofocus Whether the focustrap should automatically move focus into the trapped element upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
    NgbFocusTrapFactory.prototype.create = /**
       * Create an instance of {@link NgbFocusTrap} and return it
       * @param element HTMLElement to trap focus inside
       * @param autofocus Whether the focustrap should automatically move focus into the trapped element upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
    function (element, autofocus) {
        if (autofocus === void 0) { autofocus = false; }
        return new NgbFocusTrap(element, autofocus, this._document, this._ngZone);
    };
    NgbFocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    NgbFocusTrapFactory.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    return NgbFocusTrapFactory;
}());

//# sourceMappingURL=focus-trap.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js ***!
  \***************************************************************/
/*! exports provided: ContentRef, PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = /** @class */ (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js ***!
  \*********************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = 
    // get the availble placements of the target element in the viewport dependeing on the host element
    function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            availablePlacements.splice(availablePlacements.length, 1, 'top');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.bottom > targetElemClientRect.height) {
            availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForLeftRight = /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForTopBottom = /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order 'top', 'bottom', 'left', 'right'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'right', 'bottom', 'left'].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj + '|^' + obj + '-') !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js ***!
  \******************************************************************/
/*! exports provided: Trigger, parseTriggers, listenToTriggers, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
var noopFn = function () { };
var ɵ0 = noopFn;
function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}

//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js ***!
  \**************************************************************/
/*! exports provided: toInteger, toString, getValueInRange, isString, isNumber, isInteger, isDefined, padNumber, regExpEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInteger", function() { return toInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueInRange", function() { return getValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padNumber", function() { return padNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpEscape", function() { return regExpEscape; });
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.component.js ***!
  \************************************************************************************/
/*! exports provided: MultiselectDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdown", function() { return MultiselectDropdown; });
/* harmony import */ var rxjs_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/takeUntil */ "./node_modules/rxjs-compat/_esm5/add/operator/takeUntil.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-filter.pipe */ "./node_modules/angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");





/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */
var MULTISELECT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MultiselectDropdown; }),
    multi: true
};
var MultiselectDropdown = (function () {
    function MultiselectDropdown(element, fb, searchFilter, differs) {
        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.disabledSelection = false;
        this.selectionLimitReached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropdownClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropdownOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filteredOptions = [];
        this.lazyLoadOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.prevModel = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.checkAllSearchRegister = new Set();
        this.checkAllStatus = false;
        this.loadedValueIds = [];
        this.defaultSettings = {
            closeOnClickOutside: true,
            pullRight: false,
            enableSearch: false,
            searchRenderLimit: 0,
            searchRenderAfter: 1,
            searchMaxLimit: 0,
            searchMaxRenderedItems: 0,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-default btn-secondary',
            containerClasses: 'dropdown-inline',
            selectionLimit: 0,
            minSelectionLimit: 0,
            closeOnSelect: false,
            autoUnselect: false,
            showCheckAll: false,
            showUncheckAll: false,
            fixedTitle: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
            isLazyLoad: false,
            stopScrollPropagation: false,
            loadViewDistance: 1,
            selectAddedValues: false,
            ignoreLabels: false
        };
        this.defaultTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this._isVisible = false;
        this._workerDocClicked = false;
        this.onModelChange = function (_) { };
        this.onModelTouched = function () { };
        this.differ = differs.find([]).create(null);
        this.settings = this.defaultSettings;
        this.texts = this.defaultTexts;
    }
    MultiselectDropdown.prototype.onClick = function (target) {
        if (!this.isVisible || !this.settings.closeOnClickOutside)
            return;
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
            this.dropdownClosed.emit();
        }
    };
    Object.defineProperty(MultiselectDropdown.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (val) {
            this._isVisible = val;
            this._workerDocClicked = val ? false : this._workerDocClicked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchLimit", {
        get: function () {
            return this.settings.searchRenderLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchRenderAfter", {
        get: function () {
            return this.settings.searchRenderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchLimitApplied", {
        get: function () {
            return this.searchLimit > 0 && this.options.length > this.searchLimit;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdown.prototype.getItemStyle = function (option) {
        if (!option.isLabel) {
            return { 'cursor': 'pointer' };
        }
    };
    MultiselectDropdown.prototype.getItemStyleSelectionDisabled = function () {
        if (this.disabledSelection) {
            return { 'cursor': 'default' };
        }
    };
    MultiselectDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.texts = Object.assign(this.defaultTexts, this.texts);
        this.title = this.texts.defaultTitle || '';
        this.filterControl.valueChanges
            .takeUntil(this.destroyed$)
            .subscribe(function () {
            _this.updateRenderItems();
            if (_this.settings.isLazyLoad) {
                _this.load();
            }
        });
    };
    MultiselectDropdown.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
            this.updateRenderItems();
            if (this.settings.isLazyLoad && this.settings.selectAddedValues && this.loadedValueIds.length === 0) {
                this.loadedValueIds = this.loadedValueIds.concat(changes.options.currentValue.map(function (value) { return value.id; }));
            }
            if (this.settings.isLazyLoad && this.settings.selectAddedValues && changes.options.previousValue) {
                var addedValues_1 = changes.options.currentValue.filter(function (value) { return _this.loadedValueIds.indexOf(value.id) === -1; });
                this.loadedValueIds.concat(addedValues_1.map(function (value) { return value.id; }));
                if (this.checkAllStatus) {
                    this.addChecks(addedValues_1);
                }
                else if (this.checkAllSearchRegister.size > 0) {
                    this.checkAllSearchRegister.forEach(function (searchValue) { return _this.addChecks(_this.applyFilters(addedValues_1, searchValue)); });
                }
            }
            if (this.texts) {
                this.updateTitle();
            }
            this.fireModelChange();
        }
        if (changes['texts'] && !changes['texts'].isFirstChange()) {
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    MultiselectDropdown.prototype.updateRenderItems = function () {
        this.renderItems = !this.searchLimitApplied || this.filterControl.value.length >= this.searchRenderAfter;
        this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value);
        this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
    };
    MultiselectDropdown.prototype.applyFilters = function (options, value) {
        return (this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems));
    };
    MultiselectDropdown.prototype.fireModelChange = function () {
        if (this.model != this.prevModel) {
            this.prevModel = this.model;
            this.onModelChange(this.model);
            this.onModelTouched();
        }
    };
    MultiselectDropdown.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = Array.isArray(value) ? value : [value];
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdown.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdown.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.validate = function (_c) {
        return (this.model && this.model.length) ? null : {
            required: {
                valid: false,
            },
        };
    };
    MultiselectDropdown.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdown.prototype.clearSearch = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        this.filterControl.setValue('');
    };
    MultiselectDropdown.prototype.toggleDropdown = function () {
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
    };
    MultiselectDropdown.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdown.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (option.isLabel) {
            return;
        }
        if (!this.disabledSelection) {
            if (_event.stopPropagation) {
                _event.stopPropagation();
            }
            var index = this.model.indexOf(option.id);
            var isAtSelectionLimit = this.settings.selectionLimit > 0 && this.model.length >= this.settings.selectionLimit;
            var removeItem_1 = function (idx, id) {
                _this.model.splice(idx, 1);
                _this.onRemoved.emit(id);
                if (_this.settings.isLazyLoad && _this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                    _this.lazyLoadOptions.splice(_this.lazyLoadOptions.indexOf(_this.lazyLoadOptions.find(function (val) { return val.id === id; })), 1);
                }
            };
            if (index > -1) {
                if ((this.settings.minSelectionLimit === undefined) || (this.numSelected > this.settings.minSelectionLimit)) {
                    removeItem_1(index, option.id);
                }
                var parentIndex = option.parentId && this.model.indexOf(option.parentId);
                if (parentIndex > -1) {
                    removeItem_1(parentIndex, option.parentId);
                }
                else if (this.parents.indexOf(option.id) > -1) {
                    this.options.filter(function (child) { return _this.model.indexOf(child.id) > -1 && child.parentId === option.id; })
                        .forEach(function (child) { return removeItem_1(_this.model.indexOf(child.id), child.id); });
                }
            }
            else if (isAtSelectionLimit && !this.settings.autoUnselect) {
                this.selectionLimitReached.emit(this.model.length);
                return;
            }
            else {
                var addItem_1 = function (id) {
                    _this.model.push(id);
                    _this.onAdded.emit(id);
                    if (_this.settings.isLazyLoad && !_this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                        _this.lazyLoadOptions.push(option);
                    }
                };
                addItem_1(option.id);
                if (!isAtSelectionLimit) {
                    if (option.parentId && !this.settings.ignoreLabels) {
                        var children = this.options.filter(function (child) { return child.id !== option.id && child.parentId === option.parentId; });
                        if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                            addItem_1(option.parentId);
                        }
                    }
                    else if (this.parents.indexOf(option.id) > -1) {
                        var children = this.options.filter(function (child) { return _this.model.indexOf(child.id) < 0 && child.parentId === option.id; });
                        children.forEach(function (child) { return addItem_1(child.id); });
                    }
                }
                else {
                    removeItem_1(0, this.model[0]);
                }
            }
            if (this.settings.closeOnSelect) {
                this.toggleDropdown();
            }
            this.model = this.model.slice();
            this.fireModelChange();
        }
    };
    MultiselectDropdown.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected = this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdown.prototype.updateTitle = function () {
        var _this = this;
        var numSelectedOptions = this.options.length;
        if (this.settings.ignoreLabels) {
            numSelectedOptions = this.options.filter(function (option) { return !option.isLabel; }).length;
        }
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = (this.texts) ? this.texts.defaultTitle : '';
        }
        else if (this.settings.displayAllSelectedText && this.model.length === numSelectedOptions) {
            this.title = (this.texts) ? this.texts.allSelected : '';
        }
        else if (this.settings.dynamicTitleMaxItems && this.settings.dynamicTitleMaxItems >= this.numSelected) {
            var useOptions = this.settings.isLazyLoad && this.lazyLoadOptions.length ? this.lazyLoadOptions : this.options;
            this.title = useOptions
                .filter(function (option) {
                return _this.model.indexOf(option.id) > -1;
            })
                .map(function (option) { return option.name; })
                .join(', ');
        }
        else {
            this.title = this.numSelected
                + ' '
                + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
        }
    };
    MultiselectDropdown.prototype.searchFilterApplied = function () {
        return this.settings.enableSearch && this.filterControl.value && this.filterControl.value.length > 0;
    };
    MultiselectDropdown.prototype.addChecks = function (options) {
        var _this = this;
        var checkedOptions = options
            .filter(function (option) {
            if (_this.model.indexOf(option.id) === -1 && !(_this.settings.ignoreLabels && option.isLabel)) {
                _this.onAdded.emit(option.id);
                return true;
            }
            return false;
        }).map(function (option) { return option.id; });
        this.model = this.model.concat(checkedOptions);
    };
    MultiselectDropdown.prototype.checkAll = function () {
        if (!this.disabledSelection) {
            this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied() && !this.checkAllStatus) {
                    this.checkAllSearchRegister.add(this.filterControl.value);
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = true;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdown.prototype.uncheckAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var checkedOptions = this.model;
            var unCheckedOptions_1 = (!this.searchFilterApplied() ? this.model
                : this.filteredOptions.map(function (option) { return option.id; }));
            // set unchecked options only to the ones that were checked
            unCheckedOptions_1 = checkedOptions.filter(function (item) { return _this.model.includes(item); });
            this.model = this.model.filter(function (id) {
                if (((unCheckedOptions_1.indexOf(id) < 0) && (_this.settings.minSelectionLimit === undefined)) || ((unCheckedOptions_1.indexOf(id) < _this.settings.minSelectionLimit))) {
                    return true;
                }
                else {
                    _this.onRemoved.emit(id);
                    return false;
                }
            });
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied()) {
                    if (this.checkAllSearchRegister.has(this.filterControl.value)) {
                        this.checkAllSearchRegister.delete(this.filterControl.value);
                        this.checkAllSearchRegister.forEach(function (searchTerm) {
                            var filterOptions = _this.applyFilters(_this.options.filter(function (option) { return unCheckedOptions_1.includes(option.id); }), searchTerm);
                            _this.addChecks(filterOptions);
                        });
                    }
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = false;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdown.prototype.preventCheckboxCheck = function (event, option) {
        if (this.settings.selectionLimit && !this.settings.autoUnselect &&
            this.model.length >= this.settings.selectionLimit &&
            this.model.indexOf(option.id) === -1 &&
            event.preventDefault) {
            event.preventDefault();
        }
    };
    MultiselectDropdown.prototype.isCheckboxDisabled = function () {
        return this.disabledSelection;
    };
    MultiselectDropdown.prototype.checkScrollPosition = function (ev) {
        var scrollTop = ev.target.scrollTop;
        var scrollHeight = ev.target.scrollHeight;
        var scrollElementHeight = ev.target.clientHeight;
        var roundingPixel = 1;
        var gutterPixel = 1;
        if (scrollTop >= scrollHeight - (1 + this.settings.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
            this.load();
        }
    };
    MultiselectDropdown.prototype.checkScrollPropagation = function (ev, element) {
        var scrollTop = element.scrollTop;
        var scrollHeight = element.scrollHeight;
        var scrollElementHeight = element.clientHeight;
        if ((ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight) || (ev.deltaY < 0 && scrollTop <= 0)) {
            ev = ev || window.event;
            ev.preventDefault && ev.preventDefault();
            ev.returnValue = false;
        }
    };
    MultiselectDropdown.prototype.load = function () {
        this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value,
            checkAllSearches: this.checkAllSearchRegister,
            checkAllStatus: this.checkAllStatus
        });
    };
    return MultiselectDropdown;
}());

MultiselectDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ss-multiselect-dropdown',
                template: '<div class="dropdown" [ngClass]="settings.containerClasses" [class.open]="isVisible"><button type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown()" [disabled]="disabled">{{ title }}<span class="caret"></span></button><ul #scroller *ngIf="isVisible" class="dropdown-menu" [ngClass]="{\'chunkydropdown-menu\': settings.checkedStyle == \'visual\' }" (scroll)="settings.isLazyLoad ? checkScrollPosition($event) : null" (wheel)="settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null" [class.pull-right]="settings.pullRight" [class.dropdown-menu-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto"><li class="dropdown-item search" *ngIf="settings.enableSearch"><div class="input-group input-group-sm"><span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span> <input type="text" class="form-control" placeholder="{{ texts.searchPlaceholder }}" aria-describedby="sizing-addon3" [formControl]="filterControl" autofocus> <span class="input-group-btn" *ngIf="filterControl.value.length > 0"><button class="btn btn-default btn-secondary" type="button" (click)="clearSearch($event)"><i class="fa fa-times"></i></button></span></div></li><li class="dropdown-divider divider" *ngIf="settings.enableSearch"></li><li class="dropdown-item check-control check-control-check" *ngIf="settings.showCheckAll && !disabledSelection" (click)="checkAll()"><a href="javascript:;" role="menuitem" tabindex="-1"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-ok\': settings.checkedStyle !== \'fontawesome\',\'fa fa-check\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.checkAll }}</a></li><li class="dropdown-item check-control check-control-uncheck" *ngIf="settings.showUncheckAll && !disabledSelection" (click)="uncheckAll()"><a href="javascript:;" role="menuitem" tabindex="-1"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-remove\': settings.checkedStyle !== \'fontawesome\',\'fa fa-times\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.uncheckAll }}</a></li><li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="dropdown-divider divider"></li><li *ngIf="!renderItems" class="dropdown-item empty">{{ texts.searchNoRenderText }}</li><li *ngIf="renderItems && !renderFilteredOptions.length" class="dropdown-item empty">{{ texts.searchEmptyResult }}</li><li class="dropdown-item" *ngFor="let option of renderFilteredOptions" (click)="setSelected($event, option)" [ngClass] = "{\'active\': isSelected(option) }" [ngStyle]="getItemStyle(option)" [ngClass]="option.classes" [class.dropdown-header]="option.isLabel"><a *ngIf="!option.isLabel; else label" href="javascript:;" role="menuitem" tabindex="-1" [style.padding-left]="this.parents.length>0&&this.parents.indexOf(option.id)<0&&\'30px\'" [ngStyle]="getItemStyleSelectionDisabled()"><ng-container [ngSwitch]="settings.checkedStyle"><input *ngSwitchCase="\'checkboxes\'" type="checkbox" [checked]="isSelected(option)" (click)="preventCheckboxCheck($event, option)" [disabled]="isCheckboxDisabled()" [ngStyle]="getItemStyleSelectionDisabled()" > <span *ngSwitchCase="\'glyphicon\'" style="width: 16px" class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span> <span *ngSwitchCase="\'fontawesome\'" style="width: 16px;display: inline-block"><i *ngIf="isSelected(option)" class="fa fa-check" aria-hidden="true"></i> </span><span *ngSwitchCase="\'visual\'" style="display:block;float:left; border-radius: 0.2em; border: 0.1em solid rgba(44, 44, 44, 0.63);background:rgba(0, 0, 0, 0.1);width: 5.5em"><div class="slider" [ngClass]="{\'slideron\': isSelected(option)}"><img *ngIf="option.image != null" [src]="option.image" style="height: 100%; width: 100%; object-fit: contain"><div *ngIf="option.image == null" style="height: 100%; width: 100%;text-align: center; display: table; background-color:rgba(0, 0, 0, 0.74)"><div class="content_wrapper"><span style="font-size:3em;color:white" class="glyphicon glyphicon-eye-close"></span></div></div></div></span></ng-container><span [ngClass] = "{\'chunkyrow\': settings.checkedStyle == \'visual\' }" [ngClass]="settings.itemClasses" [style.font-weight]="this.parents.indexOf(option.id)>=0?\'bold\':\'normal\'">{{ option.name }}</span></a><ng-template #label>{{ option.name }}</ng-template></li></ul></div>',
                styles: ['a {  outline: none !important;}.dropdown-inline {  display: inline-block;}.dropdown-toggle .caret {  margin-left: 4px;  white-space: nowrap;  display: inline-block;}.chunkydropdown-menu {  min-width: 20em;}.chunkyrow {  line-height: 2;  margin-left: 1em;  font-size: 2em;}.slider {  width:3.8em;  height:3.8em;  display:block;  -webkit-transition: all 0.125s linear;  -moz-transition: all 0.125s linear;  -o-transition: all 0.125s linear;  transition: all 0.125s linear;  margin-left: 0.125em;  margin-top: auto;}.slideron {  margin-left: 1.35em;}.content_wrapper{  display: table-cell;  vertical-align: middle;}'],
                providers: [MULTISELECT_VALUE_ACCESSOR, _search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["MultiSelectSearchFilter"]]
            },] },
];
/** @nocollapse */
MultiselectDropdown.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], },
    { type: _search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["MultiSelectSearchFilter"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], },
]; };
MultiselectDropdown.propDecorators = {
    'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'texts': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'disabledSelection': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    'selectionLimitReached': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'dropdownClosed': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'dropdownOpened': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'onAdded': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'onRemoved': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'onLazyLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'onFilter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document: click', ['$event.target'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document: touchstart', ['$event.target'],] },],
};
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.module.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.module.js ***!
  \*********************************************************************************/
/*! exports provided: MultiselectDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdownModule", function() { return MultiselectDropdownModule; });
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component */ "./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* harmony import */ var _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-filter.pipe */ "./node_modules/angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MultiselectDropdownModule = (function () {
    function MultiselectDropdownModule() {
    }
    return MultiselectDropdownModule;
}());

MultiselectDropdownModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
                exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["MultiselectDropdown"], _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["MultiSelectSearchFilter"]],
                declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["MultiselectDropdown"], _search_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["MultiSelectSearchFilter"]],
            },] },
];
/** @nocollapse */
MultiselectDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "./node_modules/angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js":
/*!************************************************************************************!*\
  !*** ./node_modules/angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js ***!
  \************************************************************************************/
/*! exports provided: MultiSelectSearchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectSearchFilter", function() { return MultiSelectSearchFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MultiSelectSearchFilter = (function () {
    function MultiSelectSearchFilter() {
        this._searchCache = {};
        this._searchCacheInclusive = {};
        this._prevSkippedItems = {};
    }
    MultiSelectSearchFilter.prototype.transform = function (options, str, limit, renderLimit) {
        if (str === void 0) { str = ''; }
        if (limit === void 0) { limit = 0; }
        if (renderLimit === void 0) { renderLimit = 0; }
        str = str.toLowerCase();
        // Drop cache because options were updated
        if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
            this._prevSkippedItems = {};
        }
        var filteredOpts = this._searchCache.hasOwnProperty(str)
            ? this._searchCache[str]
            : this._doSearch(options, str, limit);
        var isUnderLimit = options.length <= limit;
        return isUnderLimit
            ? filteredOpts
            : this._limitRenderedItems(filteredOpts, renderLimit);
    };
    MultiSelectSearchFilter.prototype._getSubsetOptions = function (options, prevOptions, prevSearchStr) {
        var prevInclusiveOrIdx = this._searchCacheInclusive[prevSearchStr];
        if (prevInclusiveOrIdx === true) {
            // If have previous results and it was inclusive, do only subsearch
            return prevOptions;
        }
        else if (typeof prevInclusiveOrIdx === 'number') {
            // Or reuse prev results with unchecked ones
            return prevOptions.concat(options.slice(prevInclusiveOrIdx));
        }
        return options;
    };
    MultiSelectSearchFilter.prototype._doSearch = function (options, str, limit) {
        var prevStr = str.slice(0, -1);
        var prevResults = this._searchCache[prevStr];
        var prevResultShift = this._prevSkippedItems[prevStr] || 0;
        if (prevResults) {
            options = this._getSubsetOptions(options, prevResults, prevStr);
        }
        var optsLength = options.length;
        var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
        var regexp = new RegExp(this._escapeRegExp(str), 'i');
        var filteredOpts = [];
        var i = 0, founded = 0, removedFromPrevResult = 0;
        var doesOptionMatch = function (option) { return regexp.test(option.name); };
        var getChildren = function (option) {
            return options.filter(function (child) { return child.parentId === option.id; });
        };
        var getParent = function (option) {
            return options.find(function (parent) { return option.parentId === parent.id; });
        };
        var foundFn = function (item) { filteredOpts.push(item); founded++; };
        var notFoundFn = prevResults ? function () { return removedFromPrevResult++; } : function () { };
        for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = doesOptionMatch(option);
            if (directMatch) {
                foundFn(option);
                continue;
            }
            if (typeof option.parentId === 'undefined') {
                var childrenMatch = getChildren(option).some(doesOptionMatch);
                if (childrenMatch) {
                    foundFn(option);
                    continue;
                }
            }
            if (typeof option.parentId !== 'undefined') {
                var parentMatch = doesOptionMatch(getParent(option));
                if (parentMatch) {
                    foundFn(option);
                    continue;
                }
            }
            notFoundFn();
        }
        var totalIterations = i + prevResultShift;
        this._searchCache[str] = filteredOpts;
        this._searchCacheInclusive[str] = i === optsLength || totalIterations;
        this._prevSkippedItems[str] = removedFromPrevResult + prevResultShift;
        return filteredOpts;
    };
    MultiSelectSearchFilter.prototype._limitRenderedItems = function (items, limit) {
        return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
    };
    MultiSelectSearchFilter.prototype._escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    return MultiSelectSearchFilter;
}());

MultiSelectSearchFilter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'searchFilter'
            },] },
];
/** @nocollapse */
MultiSelectSearchFilter.ctorParameters = function () { return []; };
//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ "./node_modules/angular-2-dropdown-multiselect/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular-2-dropdown-multiselect/index.js ***!
  \**************************************************************/
/*! exports provided: MultiSelectSearchFilter, MultiselectDropdownModule, MultiselectDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown/search-filter.pipe */ "./node_modules/angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiSelectSearchFilter", function() { return _dropdown_search_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["MultiSelectSearchFilter"]; });

/* harmony import */ var _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown/dropdown.module */ "./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdownModule", function() { return _dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_1__["MultiselectDropdownModule"]; });

/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./node_modules/angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiselectDropdown", function() { return _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["MultiselectDropdown"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-pipes/fesm5/ngx-pipes.js ***!
  \***************************************************/
/*! exports provided: NgPipesModule, NgArrayPipesModule, DiffPipe, InitialPipe, FlattenPipe, IntersectionPipe, ReversePipe, TailPipe, TrurthifyPipe, UnionPipe, UniquePipe, WithoutPipe, PluckPipe, ShufflePipe, EveryPipe, SomePipe, SamplePipe, GroupByPipe, FilterByPipe, OrderByPipe, GroupByImpurePipe, FilterByImpurePipe, OrderByImpurePipe, RangePipe, NgObjectPipesModule, KeysPipe, ValuesPipe, PairsPipe, PickPipe, OmitPipe, InvertPipe, InvertByPipe, DiffObjPipe, STRING_PIPES, NgStringPipesModule, UcWordsPipe, LeftTrimPipe, RepeatPipe, RightTrimPipe, ScanPipe, ShortenPipe, StripTagsPipe, TrimPipe, UcFirstPipe, SlugifyPipe, CamelizePipe, LatinisePipe, LinesPipe, UnderscorePipe, MatchPipe, TestPipe, LeftPadPipe, RightPadPipe, WrapPipe, MATH_PIPES, NgMathPipesModule, MaxPipe, MinPipe, PercentagePipe, SumPipe, FloorPipe, RoundPipe, SqrtPipe, PowerPipe, CeilPipe, DegreesPipe, BytesPipe, BOOLEAN_PIPES, NgBooleanPipesModule, IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe, IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe, IsLessThanPipe, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function() { return NgArrayPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffPipe", function() { return DiffPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPipe", function() { return InitialPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function() { return IntersectionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailPipe", function() { return TailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrurthifyPipe", function() { return TrurthifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionPipe", function() { return UnionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomePipe", function() { return SomePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePipe", function() { return SamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByImpurePipe", function() { return GroupByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByImpurePipe", function() { return FilterByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByImpurePipe", function() { return OrderByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function() { return NgObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairsPipe", function() { return PairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickPipe", function() { return PickPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitPipe", function() { return OmitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertPipe", function() { return InvertPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertByPipe", function() { return InvertByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffObjPipe", function() { return DiffObjPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_PIPES", function() { return STRING_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function() { return NgStringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcWordsPipe", function() { return UcWordsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTrimPipe", function() { return LeftTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTrimPipe", function() { return RightTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPipe", function() { return ScanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcFirstPipe", function() { return UcFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelizePipe", function() { return CamelizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinisePipe", function() { return LatinisePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesPipe", function() { return LinesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderscorePipe", function() { return UnderscorePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH_PIPES", function() { return MATH_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function() { return NgMathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentagePipe", function() { return PercentagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerPipe", function() { return PowerPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN_PIPES", function() { return BOOLEAN_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function() { return NgBooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterEqualThanPipe", function() { return IsGreaterEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterThanPipe", function() { return IsGreaterThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessEqualThanPipe", function() { return IsLessEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualToPipe", function() { return IsEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualToPipe", function() { return IsNotEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalToPipe", function() { return IsIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalToPipe", function() { return IsNotIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessThanPipe", function() { return IsLessThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RadiansPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiffPipe = /** @class */ (function () {
    function DiffPipe() {
    }
    /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    DiffPipe.prototype.transform = /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce(function (d, c) { return d.filter(function (e) { return !~c.indexOf(e); }); }, input);
    };
    DiffPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "diff" },] },
    ];
    return DiffPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InitialPipe = /** @class */ (function () {
    function InitialPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} num
     * @return {?}
     */
    InitialPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} num
     * @return {?}
     */
    function (input, num) {
        if (num === void 0) { num = 0; }
        return Array.isArray(input) ? input.slice(0, input.length - num) : input;
    };
    InitialPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "initial" },] },
    ];
    return InitialPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FlattenPipe = /** @class */ (function () {
    function FlattenPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} shallow
     * @return {?}
     */
    FlattenPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} shallow
     * @return {?}
     */
    function (input, shallow) {
        if (shallow === void 0) { shallow = false; }
        if (!Array.isArray(input)) {
            return input;
        }
        return shallow ? [].concat.apply([], input) : this.flatten(input);
    };
    /**
     * @param {?} array
     * @return {?}
     */
    FlattenPipe.prototype.flatten = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        var _this = this;
        return array.reduce(function (arr, elm) {
            if (Array.isArray(elm)) {
                return arr.concat(_this.flatten(elm));
            }
            return arr.concat(elm);
        }, []);
    };
    FlattenPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "flatten" },] },
    ];
    return FlattenPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IntersectionPipe = /** @class */ (function () {
    function IntersectionPipe() {
    }
    /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    IntersectionPipe.prototype.transform = /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce(function (n, c) { return n.filter(function (e) { return !!~c.indexOf(e); }); }, input);
    };
    IntersectionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "intersection" },] },
    ];
    return IntersectionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isUndefined(value) {
    return typeof value === "undefined";
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === "function";
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return typeof value === "number";
}
/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return typeof value === "string";
}
/**
 * @param {?} value
 * @return {?}
 */
function isBoolean(value) {
    return typeof value === "boolean";
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return value !== null && typeof value === "object";
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
/**
 * @param {?} num
 * @param {?} precision
 * @return {?}
 */
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    var /** @type {?} */ tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
/**
 * @param {?} obj
 * @param {?} map
 * @return {?}
 */
function extractDeepPropertyByMapKey(obj, map) {
    var /** @type {?} */ keys = map.split(".");
    var /** @type {?} */ head = keys.shift();
    return keys.reduce(function (prop, key) {
        return !isUndefined(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || ""]);
}
/**
 * @param {?} obj
 * @param {?} map
 * @return {?}
 */
function extractDeepPropertyByParentMapKey(obj, map) {
    var /** @type {?} */ keys = map.split(".");
    var /** @type {?} */ tail = keys.pop();
    var /** @type {?} */ props = extractDeepPropertyByMapKey(obj, keys.join("."));
    return { props: props, tail: tail };
}
/**
 * @param {?} obj
 * @param {?} other
 * @return {?}
 */
function getKeysTwoObjects(obj, other) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(Object.keys(obj), Object.keys(other)).filter(function (key, index, array) { return array.indexOf(key) === index; });
}
/**
 * @param {?} obj
 * @param {?} other
 * @return {?}
 */
function isDeepEqual(obj, other) {
    if (!isObject(obj) || !isObject(other)) {
        return obj === other;
    }
    return getKeysTwoObjects(obj, other).every(function (key) {
        if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
        }
        if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
        }
        return isDeepEqual(obj[key], other[key]);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ReversePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (isString(input)) {
            return input
                .split("")
                .reverse()
                .join("");
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    };
    ReversePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "reverse" },] },
    ];
    return ReversePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TailPipe = /** @class */ (function () {
    function TailPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} num
     * @return {?}
     */
    TailPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} num
     * @return {?}
     */
    function (input, num) {
        if (num === void 0) { num = 0; }
        return Array.isArray(input) ? input.slice(num) : input;
    };
    TailPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "tail" },] },
    ];
    return TailPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TrurthifyPipe = /** @class */ (function () {
    function TrurthifyPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    TrurthifyPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return Array.isArray(input) ? input.filter(function (e) { return !!e; }) : input;
    };
    TrurthifyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "truthify" },] },
    ];
    return TrurthifyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UnionPipe = /** @class */ (function () {
    function UnionPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} args
     * @return {?}
     */
    UnionPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} args
     * @return {?}
     */
    function (input, args) {
        if (args === void 0) { args = []; }
        if (!Array.isArray(input) || !Array.isArray(args)) {
            return input;
        }
        return args.reduce(function (newArr, currArr) {
            return newArr.concat(currArr.reduce(function (noDupArr, curr) {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
            }, []));
        }, input);
    };
    UnionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "union" },] },
    ];
    return UnionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UniquePipe = /** @class */ (function () {
    function UniquePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} propertyName
     * @return {?}
     */
    UniquePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} propertyName
     * @return {?}
     */
    function (input, propertyName) {
        var /** @type {?} */ uniques = [];
        return Array.isArray(input)
            ? isUndefined(propertyName)
                ? input.filter(function (e, i) { return input.indexOf(e) === i; })
                : input.filter(function (e, i) {
                    var /** @type {?} */ value = extractDeepPropertyByMapKey(e, propertyName);
                    value = isObject(value) ? JSON.stringify(value) : value;
                    if (isUndefined(value) || uniques[value]) {
                        return false;
                    }
                    uniques[value] = true;
                    return true;
                })
            : input;
    };
    UniquePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "unique" },] },
    ];
    return UniquePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WithoutPipe = /** @class */ (function () {
    function WithoutPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} args
     * @return {?}
     */
    WithoutPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} args
     * @return {?}
     */
    function (input, args) {
        if (args === void 0) { args = []; }
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(function (e) { return !~args.indexOf(e); })
            : input;
    };
    WithoutPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "without" },] },
    ];
    return WithoutPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PluckPipe = /** @class */ (function () {
    function PluckPipe() {
    }
    /**
     * @param {?} input
     * @param {?} map
     * @return {?}
     */
    PluckPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} map
     * @return {?}
     */
    function (input, map) {
        return Array.isArray(input) ? input.map(function (e) { return extractDeepPropertyByMapKey(e, map); }) : input;
    };
    PluckPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "pluck", pure: false },] },
    ];
    return PluckPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShufflePipe = /** @class */ (function () {
    function ShufflePipe() {
    }
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    /**
     * @param {?} input
     * @return {?}
     */
    ShufflePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!Array.isArray(input)) {
            return input;
        }
        var /** @type {?} */ shuffled = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(input);
        var /** @type {?} */ n = input.length - 1;
        for (var /** @type {?} */ i = 0; i < n; ++i) {
            var /** @type {?} */ j = Math.floor(Math.random() * (n - i + 1)) + i;
            _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])([shuffled[j], shuffled[i]], 2), shuffled[i] = _a[0], shuffled[j] = _a[1];
        }
        return shuffled;
        var _a;
    };
    ShufflePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "shuffle" },] },
    ];
    return ShufflePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EveryPipe = /** @class */ (function () {
    function EveryPipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    EveryPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    function (input, predicate) {
        return Array.isArray(input) ? input.every(predicate) : false;
    };
    EveryPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "every" },] },
    ];
    return EveryPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SomePipe = /** @class */ (function () {
    function SomePipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    SomePipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    function (input, predicate) {
        return Array.isArray(input) ? input.some(predicate) : input;
    };
    SomePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "some" },] },
    ];
    return SomePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SamplePipe = /** @class */ (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} len
     * @return {?}
     */
    SamplePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} len
     * @return {?}
     */
    function (input, len) {
        if (len === void 0) { len = 1; }
        if (!Array.isArray(input)) {
            return input;
        }
        var /** @type {?} */ sample = [];
        var /** @type {?} */ tmp = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(input);
        var /** @type {?} */ l = len < tmp.length ? len : tmp.length;
        for (var /** @type {?} */ i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    };
    SamplePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "sample" },] },
    ];
    return SamplePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} discriminator
     * @param {?=} delimiter
     * @return {?}
     */
    GroupByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} discriminator
     * @param {?=} delimiter
     * @return {?}
     */
    function (input, discriminator, delimiter) {
        if (discriminator === void 0) { discriminator = []; }
        if (delimiter === void 0) { delimiter = "|"; }
        if (!Array.isArray(input)) {
            return input;
        }
        return this.groupBy(input, discriminator, delimiter);
    };
    /**
     * @param {?} list
     * @param {?} discriminator
     * @param {?} delimiter
     * @return {?}
     */
    GroupByPipe.prototype.groupBy = /**
     * @param {?} list
     * @param {?} discriminator
     * @param {?} delimiter
     * @return {?}
     */
    function (list, discriminator, delimiter) {
        var _this = this;
        return list.reduce(function (acc, payload) {
            var /** @type {?} */ key = _this.extractKeyByDiscriminator(discriminator, payload, delimiter);
            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
            return acc;
        }, {});
    };
    /**
     * @param {?} discriminator
     * @param {?} payload
     * @param {?} delimiter
     * @return {?}
     */
    GroupByPipe.prototype.extractKeyByDiscriminator = /**
     * @param {?} discriminator
     * @param {?} payload
     * @param {?} delimiter
     * @return {?}
     */
    function (discriminator, payload, delimiter) {
        if (isFunction(discriminator)) {
            return (/** @type {?} */ (discriminator))(payload);
        }
        if (Array.isArray(discriminator)) {
            return discriminator.map(function (k) { return extractDeepPropertyByMapKey(payload, k); }).join(delimiter);
        }
        return extractDeepPropertyByMapKey(payload, /** @type {?} */ (discriminator));
    };
    GroupByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "groupBy" },] },
    ];
    return GroupByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterByPipe = /** @class */ (function () {
    function FilterByPipe() {
    }
    /**
     * @param {?} input
     * @param {?} props
     * @param {?=} search
     * @param {?=} strict
     * @return {?}
     */
    FilterByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} props
     * @param {?=} search
     * @param {?=} strict
     * @return {?}
     */
    function (input, props, search, strict) {
        if (search === void 0) { search = ""; }
        if (strict === void 0) { strict = false; }
        if (!Array.isArray(input) || (!isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
            return input;
        }
        var /** @type {?} */ term = String(search).toLowerCase();
        return input.filter(function (obj) {
            return props.some(function (prop) {
                var /** @type {?} */ value = extractDeepPropertyByMapKey(obj, prop);
                var _a = extractDeepPropertyByParentMapKey(obj, prop), props = _a.props, tail = _a.tail;
                if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                    return props.some(function (parent) {
                        var /** @type {?} */ str = String(parent[tail]).toLowerCase();
                        return strict ? str === term : !!~str.indexOf(term);
                    });
                }
                if (isUndefined(value)) {
                    return false;
                }
                var /** @type {?} */ strValue = String(value).toLowerCase();
                return strict ? term === strValue : !!~strValue.indexOf(term);
            });
        });
    };
    FilterByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "filterBy" },] },
    ];
    return FilterByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    OrderByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    function (input, config) {
        if (!Array.isArray(input)) {
            return input;
        }
        var /** @type {?} */ out = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(input);
        // sort by multiple properties
        if (Array.isArray(config)) {
            return out.sort(function (a, b) {
                var /** @type {?} */ l = config.length;
                for (var /** @type {?} */ i = 0; i < l; ++i) {
                    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(OrderByPipe.extractFromConfig(config[i]), 2), prop = _a[0], asc = _a[1];
                    var /** @type {?} */ pos = OrderByPipe.orderCompare(prop, asc, a, b);
                    if (pos !== 0) {
                        return pos;
                    }
                }
                return 0;
            });
        }
        // sort by a single property value
        if (isString(config)) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(OrderByPipe.extractFromConfig(config), 3), prop = _a[0], asc = _a[1], sign = _a[2];
            if (config.length === 1) {
                // tslint:disable-next-line:switch-default
                switch (sign) {
                    case "+":
                        return out.sort(OrderByPipe.simpleSort.bind(this));
                    case "-":
                        return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
                }
            }
            return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
        }
        // default sort by value
        return out.sort(OrderByPipe.simpleSort.bind(this));
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderByPipe.simpleSort = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
    };
    /**
     * @param {?} prop
     * @param {?} asc
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderByPipe.orderCompare = /**
     * @param {?} prop
     * @param {?} asc
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (prop, asc, a, b) {
        var /** @type {?} */ first = extractDeepPropertyByMapKey(a, prop);
        var /** @type {?} */ second = extractDeepPropertyByMapKey(b, prop);
        if (first === second) {
            return 0;
        }
        if (isUndefined(first) || first === "") {
            return 1;
        }
        if (isUndefined(second) || second === "") {
            return -1;
        }
        if (isString(first) && isString(second)) {
            var /** @type {?} */ pos = first.toLowerCase().localeCompare(second.toLowerCase());
            return asc ? pos : -pos;
        }
        return asc ? first - second : second - first;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    OrderByPipe.extractFromConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ sign = config.substr(0, 1);
        var /** @type {?} */ prop = config.replace(/^[-+]/, "");
        var /** @type {?} */ asc = sign !== "-";
        return [prop, asc, sign];
    };
    OrderByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "orderBy" },] },
    ];
    return OrderByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GroupByImpurePipe = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GroupByImpurePipe, _super);
    function GroupByImpurePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupByImpurePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "groupByImpure", pure: false },] },
    ];
    return GroupByImpurePipe;
}(GroupByPipe));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterByImpurePipe = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FilterByImpurePipe, _super);
    function FilterByImpurePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterByImpurePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "filterByImpure", pure: false },] },
    ];
    return FilterByImpurePipe;
}(FilterByPipe));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OrderByImpurePipe = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(OrderByImpurePipe, _super);
    function OrderByImpurePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderByImpurePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "orderByImpure", pure: false },] },
    ];
    return OrderByImpurePipe;
}(OrderByPipe));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    /**
     * @param {?=} start
     * @param {?=} count
     * @param {?=} step
     * @return {?}
     */
    RangePipe.prototype.transform = /**
     * @param {?=} start
     * @param {?=} count
     * @param {?=} step
     * @return {?}
     */
    function (start, count, step) {
        if (start === void 0) { start = 1; }
        if (count === void 0) { count = 0; }
        if (step === void 0) { step = 1; }
        return Array(count)
            .fill("")
            .map(function (v, i) { return step * i + start; });
    };
    RangePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "range" },] },
    ];
    return RangePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ARRAY_PIPES = [
    DiffPipe,
    FlattenPipe,
    InitialPipe,
    IntersectionPipe,
    ReversePipe,
    TailPipe,
    TrurthifyPipe,
    UnionPipe,
    UniquePipe,
    WithoutPipe,
    PluckPipe,
    ShufflePipe,
    EveryPipe,
    SomePipe,
    SamplePipe,
    GroupByPipe,
    GroupByImpurePipe,
    FilterByPipe,
    FilterByImpurePipe,
    OrderByPipe,
    OrderByImpurePipe,
    RangePipe,
];
var NgArrayPipesModule = /** @class */ (function () {
    function NgArrayPipesModule() {
    }
    NgArrayPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: ARRAY_PIPES,
                    imports: [],
                    exports: ARRAY_PIPES,
                },] },
    ];
    return NgArrayPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    KeysPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    };
    KeysPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "keys" },] },
    ];
    return KeysPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    ValuesPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(function (k) { return obj[k]; });
    };
    ValuesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "values" },] },
    ];
    return ValuesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PairsPipe = /** @class */ (function () {
    function PairsPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    PairsPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(function (k) { return [k, obj[k]]; });
    };
    PairsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "pairs" },] },
    ];
    return PairsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PickPipe = /** @class */ (function () {
    function PickPipe() {
    }
    /**
     * @param {?} obj
     * @param {...?} args
     * @return {?}
     */
    PickPipe.prototype.transform = /**
     * @param {?} obj
     * @param {...?} args
     * @return {?}
     */
    function (obj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return args.reduce(function (o, k) {
            return Object.assign(o, (_a = {}, _a[k] = obj[k], _a));
            var _a;
        }, {});
    };
    PickPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "pick" },] },
    ];
    return PickPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OmitPipe = /** @class */ (function () {
    function OmitPipe() {
    }
    /**
     * @param {?} obj
     * @param {...?} args
     * @return {?}
     */
    OmitPipe.prototype.transform = /**
     * @param {?} obj
     * @param {...?} args
     * @return {?}
     */
    function (obj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return (Object.keys(obj)
            .filter(function (k) { return !~args.indexOf(k); })
            .reduce(function (o, k) {
            return Object.assign(o, (_a = {}, _a[k] = obj[k], _a));
            var _a;
        }, {}));
    };
    OmitPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "omit" },] },
    ];
    return OmitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InvertPipe = /** @class */ (function () {
    function InvertPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    InvertPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce(function (o, k) {
            return Object.assign(o, (_a = {}, _a[obj[k]] = k, _a));
            var _a;
        }, {});
    };
    InvertPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "invert" },] },
    ];
    return InvertPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InvertByPipe = /** @class */ (function () {
    function InvertByPipe() {
    }
    /**
     * @param {?} obj
     * @param {?=} cb
     * @return {?}
     */
    InvertByPipe.prototype.transform = /**
     * @param {?} obj
     * @param {?=} cb
     * @return {?}
     */
    function (obj, cb) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce(function (o, k) {
            var /** @type {?} */ key = cb ? cb(obj[k]) : obj[k];
            return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, (_a = {}, _a[key] = [k], _a));
            var _a;
        }, {});
    };
    InvertByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "invertBy" },] },
    ];
    return InvertByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiffObjPipe = /** @class */ (function () {
    function DiffObjPipe() {
    }
    /**
     * @param {?} obj
     * @param {?=} original
     * @return {?}
     */
    DiffObjPipe.prototype.transform = /**
     * @param {?} obj
     * @param {?=} original
     * @return {?}
     */
    function (obj, original) {
        if (original === void 0) { original = {}; }
        if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
            return {};
        }
        return getKeysTwoObjects(obj, original).reduce(function (diff, key) {
            if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    };
    DiffObjPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "diffObj" },] },
    ];
    return DiffObjPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
var NgObjectPipesModule = /** @class */ (function () {
    function NgObjectPipesModule() {
    }
    NgObjectPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: OBJECT_PIPES,
                    imports: [],
                    exports: OBJECT_PIPES,
                },] },
    ];
    return NgObjectPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UcWordsPipe = /** @class */ (function () {
    function UcWordsPipe() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    UcWordsPipe.prototype.transform = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (isString(text)) {
            return text
                .split(" ")
                .map(function (sub) { return sub.slice(0, 1).toUpperCase() + sub.slice(1); })
                .join(" ");
        }
        return text;
    };
    UcWordsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "ucwords" },] },
    ];
    return UcWordsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeftTrimPipe = /** @class */ (function () {
    function LeftTrimPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    LeftTrimPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        if (chars === void 0) { chars = "\\s"; }
        return isString(text) ? text.replace(new RegExp("^[" + chars + "]+"), "") : text;
    };
    LeftTrimPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "ltrim" },] },
    ];
    return LeftTrimPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RepeatPipe = /** @class */ (function () {
    function RepeatPipe() {
    }
    /**
     * @param {?} str
     * @param {?=} n
     * @param {?=} separator
     * @return {?}
     */
    RepeatPipe.prototype.transform = /**
     * @param {?} str
     * @param {?=} n
     * @param {?=} separator
     * @return {?}
     */
    function (str, n, separator) {
        if (n === void 0) { n = 1; }
        if (separator === void 0) { separator = ""; }
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    };
    /**
     * @param {?} str
     * @param {?} n
     * @param {?} separator
     * @return {?}
     */
    RepeatPipe.prototype.repeat = /**
     * @param {?} str
     * @param {?} n
     * @param {?} separator
     * @return {?}
     */
    function (str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    };
    RepeatPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "repeat" },] },
    ];
    return RepeatPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RightTrimPipe = /** @class */ (function () {
    function RightTrimPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    RightTrimPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        if (chars === void 0) { chars = "\\s"; }
        return isString(text) ? text.replace(new RegExp("[" + chars + "]+$"), "") : text;
    };
    RightTrimPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "rtrim" },] },
    ];
    return RightTrimPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScanPipe = /** @class */ (function () {
    function ScanPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} args
     * @return {?}
     */
    ScanPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} args
     * @return {?}
     */
    function (text, args) {
        if (args === void 0) { args = []; }
        return isString(text)
            ? text.replace(/\{(\d+)}/g, function (match, index) { return (!isUndefined(args[index]) ? args[index] : match); })
            : text;
    };
    ScanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "scan" },] },
    ];
    return ScanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ShortenPipe = /** @class */ (function () {
    function ShortenPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} length
     * @param {?=} suffix
     * @param {?=} wordBreak
     * @return {?}
     */
    ShortenPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} length
     * @param {?=} suffix
     * @param {?=} wordBreak
     * @return {?}
     */
    function (text, length, suffix, wordBreak) {
        if (length === void 0) { length = 0; }
        if (suffix === void 0) { suffix = ""; }
        if (wordBreak === void 0) { wordBreak = true; }
        if (!isString(text)) {
            return text;
        }
        if (text.length > length) {
            if (wordBreak) {
                return text.slice(0, length) + suffix;
            }
            // tslint:disable-next-line:no-bitwise
            if (!!~text.indexOf(" ", length)) {
                return text.slice(0, text.indexOf(" ", length)) + suffix;
            }
        }
        return text;
    };
    ShortenPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "shorten" },] },
    ];
    return ShortenPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StripTagsPipe = /** @class */ (function () {
    function StripTagsPipe() {
    }
    /**
     * @param {?} text
     * @param {...?} allowedTags
     * @return {?}
     */
    StripTagsPipe.prototype.transform = /**
     * @param {?} text
     * @param {...?} allowedTags
     * @return {?}
     */
    function (text) {
        var allowedTags = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            allowedTags[_i - 1] = arguments[_i];
        }
        return allowedTags.length > 0
            ? text.replace(new RegExp("<(?!/?(" + allowedTags.join("|") + ")s*/?)[^>]+>", "g"), "")
            : text.replace(/<(?:.|\s)*?>/g, "");
    };
    StripTagsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "stripTags" },] },
    ];
    return StripTagsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    TrimPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        if (chars === void 0) { chars = "\\s"; }
        return isString(text) ? text.replace(new RegExp("^[" + chars + "]+|[" + chars + "]+$", "g"), "") : text;
    };
    TrimPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "trim" },] },
    ];
    return TrimPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UcFirstPipe = /** @class */ (function () {
    function UcFirstPipe() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    UcFirstPipe.prototype.transform = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        return isString(text) ? text.slice(0, 1).toUpperCase() + text.slice(1) : text;
    };
    UcFirstPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "ucfirst" },] },
    ];
    return UcFirstPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SlugifyPipe = /** @class */ (function () {
    function SlugifyPipe() {
    }
    /**
     * @param {?} str
     * @return {?}
     */
    SlugifyPipe.prototype.transform = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, " ")
                .replace(/\s+/g, "-")
            : str;
    };
    SlugifyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "slugify" },] },
    ];
    return SlugifyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CamelizePipe = /** @class */ (function () {
    function CamelizePipe() {
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    CamelizePipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        if (chars === void 0) { chars = "\\s"; }
        if (!isString(text)) {
            return text;
        }
        return text
            .toLowerCase()
            .split(/[-_\s]/g)
            .filter(function (v) { return !!v; })
            .map(function (word, key) {
            return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
        })
            .join("");
    };
    CamelizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "camelize" },] },
    ];
    return CamelizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LatinisePipe = /** @class */ (function () {
    function LatinisePipe() {
        this.latinMap = {
            Á: "A",
            Ă: "A",
            Ắ: "A",
            Ặ: "A",
            Ằ: "A",
            Ẳ: "A",
            Ẵ: "A",
            Ǎ: "A",
            Â: "A",
            Ấ: "A",
            Ậ: "A",
            Ầ: "A",
            Ẩ: "A",
            Ẫ: "A",
            Ä: "A",
            Ǟ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ạ: "A",
            Ȁ: "A",
            À: "A",
            Ả: "A",
            Ȃ: "A",
            Ā: "A",
            Ą: "A",
            Å: "A",
            Ǻ: "A",
            Ḁ: "A",
            Ⱥ: "A",
            Ã: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            Ḃ: "B",
            Ḅ: "B",
            Ɓ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ć: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ĉ: "C",
            Ċ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ď: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḋ: "D",
            Ḍ: "D",
            Ɗ: "D",
            Ḏ: "D",
            ǲ: "D",
            ǅ: "D",
            Đ: "D",
            Ƌ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            É: "E",
            Ĕ: "E",
            Ě: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ê: "E",
            Ế: "E",
            Ệ: "E",
            Ề: "E",
            Ể: "E",
            Ễ: "E",
            Ḙ: "E",
            Ë: "E",
            Ė: "E",
            Ẹ: "E",
            Ȅ: "E",
            È: "E",
            Ẻ: "E",
            Ȇ: "E",
            Ē: "E",
            Ḗ: "E",
            Ḕ: "E",
            Ę: "E",
            Ɇ: "E",
            Ẽ: "E",
            Ḛ: "E",
            Ꝫ: "ET",
            Ḟ: "F",
            Ƒ: "F",
            Ǵ: "G",
            Ğ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ĝ: "G",
            Ġ: "G",
            Ɠ: "G",
            Ḡ: "G",
            Ǥ: "G",
            Ḫ: "H",
            Ȟ: "H",
            Ḩ: "H",
            Ĥ: "H",
            Ⱨ: "H",
            Ḧ: "H",
            Ḣ: "H",
            Ḥ: "H",
            Ħ: "H",
            Í: "I",
            Ĭ: "I",
            Ǐ: "I",
            Î: "I",
            Ï: "I",
            Ḯ: "I",
            İ: "I",
            Ị: "I",
            Ȉ: "I",
            Ì: "I",
            Ỉ: "I",
            Ȋ: "I",
            Ī: "I",
            Į: "I",
            Ɨ: "I",
            Ĩ: "I",
            Ḭ: "I",
            Ꝺ: "D",
            Ꝼ: "F",
            Ᵹ: "G",
            Ꞃ: "R",
            Ꞅ: "S",
            Ꞇ: "T",
            Ꝭ: "IS",
            Ĵ: "J",
            Ɉ: "J",
            Ḱ: "K",
            Ǩ: "K",
            Ķ: "K",
            Ⱪ: "K",
            Ꝃ: "K",
            Ḳ: "K",
            Ƙ: "K",
            Ḵ: "K",
            Ꝁ: "K",
            Ꝅ: "K",
            Ĺ: "L",
            Ƚ: "L",
            Ľ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ḻ: "L",
            Ŀ: "L",
            Ɫ: "L",
            ǈ: "L",
            Ł: "L",
            Ǉ: "LJ",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ń: "N",
            Ň: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṅ: "N",
            Ṇ: "N",
            Ǹ: "N",
            Ɲ: "N",
            Ṉ: "N",
            Ƞ: "N",
            ǋ: "N",
            Ñ: "N",
            Ǌ: "NJ",
            Ó: "O",
            Ŏ: "O",
            Ǒ: "O",
            Ô: "O",
            Ố: "O",
            Ộ: "O",
            Ồ: "O",
            Ổ: "O",
            Ỗ: "O",
            Ö: "O",
            Ȫ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ọ: "O",
            Ő: "O",
            Ȍ: "O",
            Ò: "O",
            Ỏ: "O",
            Ơ: "O",
            Ớ: "O",
            Ợ: "O",
            Ờ: "O",
            Ở: "O",
            Ỡ: "O",
            Ȏ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Ō: "O",
            Ṓ: "O",
            Ṑ: "O",
            Ɵ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Õ: "O",
            Ṍ: "O",
            Ṏ: "O",
            Ȭ: "O",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ɛ: "E",
            Ɔ: "O",
            Ȣ: "OU",
            Ṕ: "P",
            Ṗ: "P",
            Ꝓ: "P",
            Ƥ: "P",
            Ꝕ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝙ: "Q",
            Ꝗ: "Q",
            Ŕ: "R",
            Ř: "R",
            Ŗ: "R",
            Ṙ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꜿ: "C",
            Ǝ: "E",
            Ś: "S",
            Ṥ: "S",
            Š: "S",
            Ṧ: "S",
            Ş: "S",
            Ŝ: "S",
            Ș: "S",
            Ṡ: "S",
            Ṣ: "S",
            Ṩ: "S",
            ẞ: "SS",
            Ť: "T",
            Ţ: "T",
            Ṱ: "T",
            Ț: "T",
            Ⱦ: "T",
            Ṫ: "T",
            Ṭ: "T",
            Ƭ: "T",
            Ṯ: "T",
            Ʈ: "T",
            Ŧ: "T",
            Ɐ: "A",
            Ꞁ: "L",
            Ɯ: "M",
            Ʌ: "V",
            Ꜩ: "TZ",
            Ú: "U",
            Ŭ: "U",
            Ǔ: "U",
            Û: "U",
            Ṷ: "U",
            Ü: "U",
            Ǘ: "U",
            Ǚ: "U",
            Ǜ: "U",
            Ǖ: "U",
            Ṳ: "U",
            Ụ: "U",
            Ű: "U",
            Ȕ: "U",
            Ù: "U",
            Ủ: "U",
            Ư: "U",
            Ứ: "U",
            Ự: "U",
            Ừ: "U",
            Ử: "U",
            Ữ: "U",
            Ȗ: "U",
            Ū: "U",
            Ṻ: "U",
            Ų: "U",
            Ů: "U",
            Ũ: "U",
            Ṹ: "U",
            Ṵ: "U",
            Ꝟ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ṽ: "V",
            Ꝡ: "VY",
            Ẃ: "W",
            Ŵ: "W",
            Ẅ: "W",
            Ẇ: "W",
            Ẉ: "W",
            Ẁ: "W",
            Ⱳ: "W",
            Ẍ: "X",
            Ẋ: "X",
            Ý: "Y",
            Ŷ: "Y",
            Ÿ: "Y",
            Ẏ: "Y",
            Ỵ: "Y",
            Ỳ: "Y",
            Ƴ: "Y",
            Ỷ: "Y",
            Ỿ: "Y",
            Ȳ: "Y",
            Ɏ: "Y",
            Ỹ: "Y",
            Ź: "Z",
            Ž: "Z",
            Ẑ: "Z",
            Ⱬ: "Z",
            Ż: "Z",
            Ẓ: "Z",
            Ȥ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ĳ: "IJ",
            Œ: "OE",
            ᴀ: "A",
            ᴁ: "AE",
            ʙ: "B",
            ᴃ: "B",
            ᴄ: "C",
            ᴅ: "D",
            ᴇ: "E",
            ꜰ: "F",
            ɢ: "G",
            ʛ: "G",
            ʜ: "H",
            ɪ: "I",
            ʁ: "R",
            ᴊ: "J",
            ᴋ: "K",
            ʟ: "L",
            ᴌ: "L",
            ᴍ: "M",
            ɴ: "N",
            ᴏ: "O",
            ɶ: "OE",
            ᴐ: "O",
            ᴕ: "OU",
            ᴘ: "P",
            ʀ: "R",
            ᴎ: "N",
            ᴙ: "R",
            ꜱ: "S",
            ᴛ: "T",
            ⱻ: "E",
            ᴚ: "R",
            ᴜ: "U",
            ᴠ: "V",
            ᴡ: "W",
            ʏ: "Y",
            ᴢ: "Z",
            á: "a",
            ă: "a",
            ắ: "a",
            ặ: "a",
            ằ: "a",
            ẳ: "a",
            ẵ: "a",
            ǎ: "a",
            â: "a",
            ấ: "a",
            ậ: "a",
            ầ: "a",
            ẩ: "a",
            ẫ: "a",
            ä: "a",
            ǟ: "a",
            ȧ: "a",
            ǡ: "a",
            ạ: "a",
            ȁ: "a",
            à: "a",
            ả: "a",
            ȃ: "a",
            ā: "a",
            ą: "a",
            ᶏ: "a",
            ẚ: "a",
            å: "a",
            ǻ: "a",
            ḁ: "a",
            ⱥ: "a",
            ã: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            ḃ: "b",
            ḅ: "b",
            ɓ: "b",
            ḇ: "b",
            ᵬ: "b",
            ᶀ: "b",
            ƀ: "b",
            ƃ: "b",
            ɵ: "o",
            ć: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ĉ: "c",
            ɕ: "c",
            ċ: "c",
            ƈ: "c",
            ȼ: "c",
            ď: "d",
            ḑ: "d",
            ḓ: "d",
            ȡ: "d",
            ḋ: "d",
            ḍ: "d",
            ɗ: "d",
            ᶑ: "d",
            ḏ: "d",
            ᵭ: "d",
            ᶁ: "d",
            đ: "d",
            ɖ: "d",
            ƌ: "d",
            ı: "i",
            ȷ: "j",
            ɟ: "j",
            ʄ: "j",
            ǳ: "dz",
            ǆ: "dz",
            é: "e",
            ĕ: "e",
            ě: "e",
            ȩ: "e",
            ḝ: "e",
            ê: "e",
            ế: "e",
            ệ: "e",
            ề: "e",
            ể: "e",
            ễ: "e",
            ḙ: "e",
            ë: "e",
            ė: "e",
            ẹ: "e",
            ȅ: "e",
            è: "e",
            ẻ: "e",
            ȇ: "e",
            ē: "e",
            ḗ: "e",
            ḕ: "e",
            ⱸ: "e",
            ę: "e",
            ᶒ: "e",
            ɇ: "e",
            ẽ: "e",
            ḛ: "e",
            ꝫ: "et",
            ḟ: "f",
            ƒ: "f",
            ᵮ: "f",
            ᶂ: "f",
            ǵ: "g",
            ğ: "g",
            ǧ: "g",
            ģ: "g",
            ĝ: "g",
            ġ: "g",
            ɠ: "g",
            ḡ: "g",
            ᶃ: "g",
            ǥ: "g",
            ḫ: "h",
            ȟ: "h",
            ḩ: "h",
            ĥ: "h",
            ⱨ: "h",
            ḧ: "h",
            ḣ: "h",
            ḥ: "h",
            ɦ: "h",
            ẖ: "h",
            ħ: "h",
            ƕ: "hv",
            í: "i",
            ĭ: "i",
            ǐ: "i",
            î: "i",
            ï: "i",
            ḯ: "i",
            ị: "i",
            ȉ: "i",
            ì: "i",
            ỉ: "i",
            ȋ: "i",
            ī: "i",
            į: "i",
            ᶖ: "i",
            ɨ: "i",
            ĩ: "i",
            ḭ: "i",
            ꝺ: "d",
            ꝼ: "f",
            ᵹ: "g",
            ꞃ: "r",
            ꞅ: "s",
            ꞇ: "t",
            ꝭ: "is",
            ǰ: "j",
            ĵ: "j",
            ʝ: "j",
            ɉ: "j",
            ḱ: "k",
            ǩ: "k",
            ķ: "k",
            ⱪ: "k",
            ꝃ: "k",
            ḳ: "k",
            ƙ: "k",
            ḵ: "k",
            ᶄ: "k",
            ꝁ: "k",
            ꝅ: "k",
            ĺ: "l",
            ƚ: "l",
            ɬ: "l",
            ľ: "l",
            ļ: "l",
            ḽ: "l",
            ȴ: "l",
            ḷ: "l",
            ḹ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ḻ: "l",
            ŀ: "l",
            ɫ: "l",
            ᶅ: "l",
            ɭ: "l",
            ł: "l",
            ǉ: "lj",
            ſ: "s",
            ẜ: "s",
            ẛ: "s",
            ẝ: "s",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ᵯ: "m",
            ᶆ: "m",
            ń: "n",
            ň: "n",
            ņ: "n",
            ṋ: "n",
            ȵ: "n",
            ṅ: "n",
            ṇ: "n",
            ǹ: "n",
            ɲ: "n",
            ṉ: "n",
            ƞ: "n",
            ᵰ: "n",
            ᶇ: "n",
            ɳ: "n",
            ñ: "n",
            ǌ: "nj",
            ó: "o",
            ŏ: "o",
            ǒ: "o",
            ô: "o",
            ố: "o",
            ộ: "o",
            ồ: "o",
            ổ: "o",
            ỗ: "o",
            ö: "o",
            ȫ: "o",
            ȯ: "o",
            ȱ: "o",
            ọ: "o",
            ő: "o",
            ȍ: "o",
            ò: "o",
            ỏ: "o",
            ơ: "o",
            ớ: "o",
            ợ: "o",
            ờ: "o",
            ở: "o",
            ỡ: "o",
            ȏ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ⱺ: "o",
            ō: "o",
            ṓ: "o",
            ṑ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            õ: "o",
            ṍ: "o",
            ṏ: "o",
            ȭ: "o",
            ƣ: "oi",
            ꝏ: "oo",
            ɛ: "e",
            ᶓ: "e",
            ɔ: "o",
            ᶗ: "o",
            ȣ: "ou",
            ṕ: "p",
            ṗ: "p",
            ꝓ: "p",
            ƥ: "p",
            ᵱ: "p",
            ᶈ: "p",
            ꝕ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝙ: "q",
            ʠ: "q",
            ɋ: "q",
            ꝗ: "q",
            ŕ: "r",
            ř: "r",
            ŗ: "r",
            ṙ: "r",
            ṛ: "r",
            ṝ: "r",
            ȑ: "r",
            ɾ: "r",
            ᵳ: "r",
            ȓ: "r",
            ṟ: "r",
            ɼ: "r",
            ᵲ: "r",
            ᶉ: "r",
            ɍ: "r",
            ɽ: "r",
            ↄ: "c",
            ꜿ: "c",
            ɘ: "e",
            ɿ: "r",
            ś: "s",
            ṥ: "s",
            š: "s",
            ṧ: "s",
            ş: "s",
            ŝ: "s",
            ș: "s",
            ṡ: "s",
            ṣ: "s",
            ṩ: "s",
            ʂ: "s",
            ᵴ: "s",
            ᶊ: "s",
            ȿ: "s",
            ɡ: "g",
            ß: "ss",
            ᴑ: "o",
            ᴓ: "o",
            ᴝ: "u",
            ť: "t",
            ţ: "t",
            ṱ: "t",
            ț: "t",
            ȶ: "t",
            ẗ: "t",
            ⱦ: "t",
            ṫ: "t",
            ṭ: "t",
            ƭ: "t",
            ṯ: "t",
            ᵵ: "t",
            ƫ: "t",
            ʈ: "t",
            ŧ: "t",
            ᵺ: "th",
            ɐ: "a",
            ᴂ: "ae",
            ǝ: "e",
            ᵷ: "g",
            ɥ: "h",
            ʮ: "h",
            ʯ: "h",
            ᴉ: "i",
            ʞ: "k",
            ꞁ: "l",
            ɯ: "m",
            ɰ: "m",
            ᴔ: "oe",
            ɹ: "r",
            ɻ: "r",
            ɺ: "r",
            ⱹ: "r",
            ʇ: "t",
            ʌ: "v",
            ʍ: "w",
            ʎ: "y",
            ꜩ: "tz",
            ú: "u",
            ŭ: "u",
            ǔ: "u",
            û: "u",
            ṷ: "u",
            ü: "u",
            ǘ: "u",
            ǚ: "u",
            ǜ: "u",
            ǖ: "u",
            ṳ: "u",
            ụ: "u",
            ű: "u",
            ȕ: "u",
            ù: "u",
            ủ: "u",
            ư: "u",
            ứ: "u",
            ự: "u",
            ừ: "u",
            ử: "u",
            ữ: "u",
            ȗ: "u",
            ū: "u",
            ṻ: "u",
            ų: "u",
            ᶙ: "u",
            ů: "u",
            ũ: "u",
            ṹ: "u",
            ṵ: "u",
            ᵫ: "ue",
            ꝸ: "um",
            ⱴ: "v",
            ꝟ: "v",
            ṿ: "v",
            ʋ: "v",
            ᶌ: "v",
            ⱱ: "v",
            ṽ: "v",
            ꝡ: "vy",
            ẃ: "w",
            ŵ: "w",
            ẅ: "w",
            ẇ: "w",
            ẉ: "w",
            ẁ: "w",
            ⱳ: "w",
            ẘ: "w",
            ẍ: "x",
            ẋ: "x",
            ᶍ: "x",
            ý: "y",
            ŷ: "y",
            ÿ: "y",
            ẏ: "y",
            ỵ: "y",
            ỳ: "y",
            ƴ: "y",
            ỷ: "y",
            ỿ: "y",
            ȳ: "y",
            ẙ: "y",
            ɏ: "y",
            ỹ: "y",
            ź: "z",
            ž: "z",
            ẑ: "z",
            ʑ: "z",
            ⱬ: "z",
            ż: "z",
            ẓ: "z",
            ȥ: "z",
            ẕ: "z",
            ᵶ: "z",
            ᶎ: "z",
            ʐ: "z",
            ƶ: "z",
            ɀ: "z",
            ﬀ: "ff",
            ﬃ: "ffi",
            ﬄ: "ffl",
            ﬁ: "fi",
            ﬂ: "fl",
            ĳ: "ij",
            œ: "oe",
            ﬆ: "st",
            ₐ: "a",
            ₑ: "e",
            ᵢ: "i",
            ⱼ: "j",
            ₒ: "o",
            ᵣ: "r",
            ᵤ: "u",
            ᵥ: "v",
            ₓ: "x",
        };
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    LatinisePipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        var _this = this;
        if (chars === void 0) { chars = "\\s"; }
        return isString(text)
            ? text.replace(/[^A-Za-z0-9]/g, function (key) {
                return _this.latinMap[key] || key;
            })
            : text;
    };
    LatinisePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "latinise" },] },
    ];
    return LatinisePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinesPipe = /** @class */ (function () {
    function LinesPipe() {
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    LinesPipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        if (chars === void 0) { chars = "\\s"; }
        return isString(text) ? text.replace(/\r\n/g, "\n").split("\n") : text;
    };
    LinesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "lines" },] },
    ];
    return LinesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UnderscorePipe = /** @class */ (function () {
    function UnderscorePipe() {
    }
    /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    UnderscorePipe.prototype.transform = /**
     * @param {?} text
     * @param {?=} chars
     * @return {?}
     */
    function (text, chars) {
        if (chars === void 0) { chars = "\\s"; }
        return isString(text)
            ? text
                .trim()
                .replace(/\s+/g, "")
                .replace(/[A-Z]/g, function (c, k) {
                return k ? "_" + c.toLowerCase() : c.toLowerCase();
            })
            : text;
    };
    UnderscorePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "underscore" },] },
    ];
    return UnderscorePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatchPipe = /** @class */ (function () {
    function MatchPipe() {
    }
    /**
     * @param {?} text
     * @param {?} pattern
     * @param {?=} flags
     * @return {?}
     */
    MatchPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} pattern
     * @param {?=} flags
     * @return {?}
     */
    function (text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    };
    MatchPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "match" },] },
    ];
    return MatchPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestPipe = /** @class */ (function () {
    function TestPipe() {
    }
    /**
     * @param {?} text
     * @param {?} pattern
     * @param {?=} flags
     * @return {?}
     */
    TestPipe.prototype.transform = /**
     * @param {?} text
     * @param {?} pattern
     * @param {?=} flags
     * @return {?}
     */
    function (text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return new RegExp(pattern, flags).test(text);
    };
    TestPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "test" },] },
    ];
    return TestPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LeftPadPipe = /** @class */ (function () {
    function LeftPadPipe() {
    }
    /**
     * @param {?} str
     * @param {?} length
     * @param {?=} padCharacter
     * @return {?}
     */
    LeftPadPipe.prototype.transform = /**
     * @param {?} str
     * @param {?} length
     * @param {?=} padCharacter
     * @return {?}
     */
    function (str, length, padCharacter) {
        if (padCharacter === void 0) { padCharacter = " "; }
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    };
    LeftPadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "lpad" },] },
    ];
    return LeftPadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RightPadPipe = /** @class */ (function () {
    function RightPadPipe() {
    }
    /**
     * @param {?} str
     * @param {?=} length
     * @param {?=} padCharacter
     * @return {?}
     */
    RightPadPipe.prototype.transform = /**
     * @param {?} str
     * @param {?=} length
     * @param {?=} padCharacter
     * @return {?}
     */
    function (str, length, padCharacter) {
        if (length === void 0) { length = 1; }
        if (padCharacter === void 0) { padCharacter = " "; }
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    };
    RightPadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "rpad" },] },
    ];
    return RightPadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    /**
     * @param {?} str
     * @param {?=} prefix
     * @param {?=} suffix
     * @return {?}
     */
    WrapPipe.prototype.transform = /**
     * @param {?} str
     * @param {?=} prefix
     * @param {?=} suffix
     * @return {?}
     */
    function (str, prefix, suffix) {
        if (prefix === void 0) { prefix = ""; }
        if (suffix === void 0) { suffix = ""; }
        if (!isString(str)) {
            return str;
        }
        return (!!prefix && isString(prefix) ? prefix : "") + str + (!!suffix && isString(suffix) ? suffix : "");
    };
    WrapPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "wrap" },] },
    ];
    return WrapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ STRING_PIPES = [
    LeftTrimPipe,
    RepeatPipe,
    RightTrimPipe,
    ScanPipe,
    ShortenPipe,
    StripTagsPipe,
    TrimPipe,
    UcFirstPipe,
    UcWordsPipe,
    SlugifyPipe,
    CamelizePipe,
    LatinisePipe,
    LinesPipe,
    UnderscorePipe,
    MatchPipe,
    TestPipe,
    LeftPadPipe,
    RightPadPipe,
    WrapPipe,
];
var NgStringPipesModule = /** @class */ (function () {
    function NgStringPipesModule() {
    }
    NgStringPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: STRING_PIPES,
                    imports: [],
                    exports: STRING_PIPES,
                },] },
    ];
    return NgStringPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaxPipe = /** @class */ (function () {
    function MaxPipe() {
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    MaxPipe.prototype.transform = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return Array.isArray(arr) ? Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(arr)) : arr;
    };
    MaxPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "max" },] },
    ];
    return MaxPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    MinPipe.prototype.transform = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return Array.isArray(arr) ? Math.min.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(arr)) : arr;
    };
    MinPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "min" },] },
    ];
    return MinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PercentagePipe = /** @class */ (function () {
    function PercentagePipe() {
    }
    /**
     * @param {?} num
     * @param {?=} total
     * @param {?=} floor
     * @return {?}
     */
    PercentagePipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} total
     * @param {?=} floor
     * @return {?}
     */
    function (num, total, floor) {
        if (total === void 0) { total = 100; }
        if (floor === void 0) { floor = false; }
        if (isNaN(num)) {
            return num;
        }
        var /** @type {?} */ percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    };
    PercentagePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "percentage" },] },
    ];
    return PercentagePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SumPipe = /** @class */ (function () {
    function SumPipe() {
    }
    /**
     * @param {?} arr
     * @return {?}
     */
    SumPipe.prototype.transform = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return Array.isArray(arr) ? arr.reduce(function (sum, curr) { return sum + curr; }, 0) : arr;
    };
    SumPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "sum" },] },
    ];
    return SumPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FloorPipe = /** @class */ (function () {
    function FloorPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    FloorPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    function (num, precision) {
        if (precision === void 0) { precision = 0; }
        if (precision <= 0) {
            return Math.floor(num);
        }
        var /** @type {?} */ tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    };
    FloorPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "floor" },] },
    ];
    return FloorPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    RoundPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    function (num, precision) {
        if (precision === void 0) { precision = 0; }
        return applyPrecision(num, precision);
    };
    RoundPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "round" },] },
    ];
    return RoundPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SqrtPipe = /** @class */ (function () {
    function SqrtPipe() {
    }
    /**
     * @param {?} num
     * @return {?}
     */
    SqrtPipe.prototype.transform = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return !isNaN(num) ? Math.sqrt(num) : num;
    };
    SqrtPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "sqrt" },] },
    ];
    return SqrtPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PowerPipe = /** @class */ (function () {
    function PowerPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} power
     * @return {?}
     */
    PowerPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} power
     * @return {?}
     */
    function (num, power) {
        if (power === void 0) { power = 2; }
        return !isNaN(num) ? Math.pow(num, power) : num;
    };
    PowerPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "pow" },] },
    ];
    return PowerPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CeilPipe = /** @class */ (function () {
    function CeilPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    CeilPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} precision
     * @return {?}
     */
    function (num, precision) {
        if (precision === void 0) { precision = 0; }
        if (precision <= 0) {
            return Math.ceil(num);
        }
        var /** @type {?} */ tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    };
    CeilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "ceil" },] },
    ];
    return CeilPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DegreesPipe = /** @class */ (function () {
    function DegreesPipe() {
    }
    /**
     * @param {?} radians
     * @return {?}
     */
    DegreesPipe.prototype.transform = /**
     * @param {?} radians
     * @return {?}
     */
    function (radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    };
    DegreesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "degrees" },] },
    ];
    return DegreesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BytesPipe = /** @class */ (function () {
    function BytesPipe() {
        this.dictionary = [
            { max: 1024, type: "B" },
            { max: 1048576, type: "KB" },
            { max: 1073741824, type: "MB" },
            { max: 1.0995116e12, type: "GB" },
        ];
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    BytesPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (!isNumberFinite(value)) {
            return NaN;
        }
        var /** @type {?} */ format = this.dictionary.find(function (d) { return value < d.max; }) || this.dictionary[this.dictionary.length - 1];
        var /** @type {?} */ calc = value / (format.max / 1024);
        var /** @type {?} */ num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
        return num + " " + format.type;
    };
    BytesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "bytes" },] },
    ];
    return BytesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RadiansPipe = /** @class */ (function () {
    function RadiansPipe() {
    }
    /**
     * @param {?} degrees
     * @return {?}
     */
    RadiansPipe.prototype.transform = /**
     * @param {?} degrees
     * @return {?}
     */
    function (degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    };
    RadiansPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "radians" },] },
    ];
    return RadiansPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MATH_PIPES = [
    MaxPipe,
    MinPipe,
    PercentagePipe,
    SumPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    PowerPipe,
    CeilPipe,
    DegreesPipe,
    BytesPipe,
    RadiansPipe,
];
var NgMathPipesModule = /** @class */ (function () {
    function NgMathPipesModule() {
    }
    NgMathPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: MATH_PIPES,
                    imports: [],
                    exports: MATH_PIPES,
                },] },
    ];
    return NgMathPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsDefinedPipe = /** @class */ (function () {
    function IsDefinedPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsDefinedPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return !isUndefined(input);
    };
    IsDefinedPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isDefined" },] },
    ];
    return IsDefinedPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsNullPipe = /** @class */ (function () {
    function IsNullPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsNullPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === null;
    };
    IsNullPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isNull" },] },
    ];
    return IsNullPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsUndefinedPipe = /** @class */ (function () {
    function IsUndefinedPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsUndefinedPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return isUndefined(input);
    };
    IsUndefinedPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isUndefined" },] },
    ];
    return IsUndefinedPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsStringPipe = /** @class */ (function () {
    function IsStringPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsStringPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return isString(input);
    };
    IsStringPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isString" },] },
    ];
    return IsStringPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsFunctionPipe = /** @class */ (function () {
    function IsFunctionPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsFunctionPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return isFunction(input);
    };
    IsFunctionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isFunction" },] },
    ];
    return IsFunctionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsNumberPipe = /** @class */ (function () {
    function IsNumberPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsNumberPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return isNumber(input);
    };
    IsNumberPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isNumber" },] },
    ];
    return IsNumberPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsArrayPipe = /** @class */ (function () {
    function IsArrayPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsArrayPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return Array.isArray(input);
    };
    IsArrayPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isArray" },] },
    ];
    return IsArrayPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsObjectPipe = /** @class */ (function () {
    function IsObjectPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    IsObjectPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return isObject(input);
    };
    IsObjectPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isObject" },] },
    ];
    return IsObjectPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsGreaterEqualThanPipe = /** @class */ (function () {
    function IsGreaterEqualThanPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsGreaterEqualThanPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        return input >= other;
    };
    IsGreaterEqualThanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isGreaterEqualThan" },] },
    ];
    return IsGreaterEqualThanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsGreaterThanPipe = /** @class */ (function () {
    function IsGreaterThanPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsGreaterThanPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        return input > other;
    };
    IsGreaterThanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isGreaterThan" },] },
    ];
    return IsGreaterThanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsLessEqualThanPipe = /** @class */ (function () {
    function IsLessEqualThanPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsLessEqualThanPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        return input <= other;
    };
    IsLessEqualThanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isLessEqualThan" },] },
    ];
    return IsLessEqualThanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsEqualToPipe = /** @class */ (function () {
    function IsEqualToPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsEqualToPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    };
    IsEqualToPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isEqualTo" },] },
    ];
    return IsEqualToPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsNotEqualToPipe = /** @class */ (function () {
    function IsNotEqualToPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsNotEqualToPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    };
    IsNotEqualToPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isNotEqualTo" },] },
    ];
    return IsNotEqualToPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsIdenticalToPipe = /** @class */ (function () {
    function IsIdenticalToPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsIdenticalToPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        return input === other;
    };
    IsIdenticalToPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isIdenticalTo" },] },
    ];
    return IsIdenticalToPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsNotIdenticalToPipe = /** @class */ (function () {
    function IsNotIdenticalToPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsNotIdenticalToPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        return input !== other;
    };
    IsNotIdenticalToPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isNotIdenticalTo" },] },
    ];
    return IsNotIdenticalToPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IsLessThanPipe = /** @class */ (function () {
    function IsLessThanPipe() {
    }
    /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    IsLessThanPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} other
     * @return {?}
     */
    function (input, other) {
        return input < other;
    };
    IsLessThanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "isLessThan" },] },
    ];
    return IsLessThanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsStringPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsGreaterEqualThanPipe,
    IsGreaterThanPipe,
    IsLessEqualThanPipe,
    IsLessEqualThanPipe,
    IsEqualToPipe,
    IsNotEqualToPipe,
    IsIdenticalToPipe,
    IsNotIdenticalToPipe,
    IsLessThanPipe,
];
var NgBooleanPipesModule = /** @class */ (function () {
    function NgBooleanPipesModule() {
    }
    NgBooleanPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: BOOLEAN_PIPES,
                    imports: [],
                    exports: BOOLEAN_PIPES,
                },] },
    ];
    return NgBooleanPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgPipesModule = /** @class */ (function () {
    function NgPipesModule() {
    }
    NgPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [NgArrayPipesModule, NgStringPipesModule, NgMathPipesModule, NgBooleanPipesModule, NgObjectPipesModule],
                },] },
    ];
    return NgPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBpcGVzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L2RpZmYudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYXJyYXkvaW5pdGlhbC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS9mbGF0dGVuLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L2ludGVyc2VjdGlvbi50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9oZWxwZXJzL2hlbHBlcnMudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYXJyYXkvcmV2ZXJzZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS90YWlsLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L3RydXRoaWZ5LnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L3VuaW9uLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L3VuaXF1ZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS93aXRob3V0LnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L3BsdWNrLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L3NodWZmbGUudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYXJyYXkvZXZlcnkudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYXJyYXkvc29tZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS9zYW1wbGUudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYXJyYXkvZ3JvdXAtYnkudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYXJyYXkvZmlsdGVyLWJ5LnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L29yZGVyLWJ5LnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L2dyb3VwLWJ5LWltcHVyZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS9maWx0ZXItYnktaW1wdXJlLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2FycmF5L29yZGVyLWJ5LWltcHVyZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS9yYW5nZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9hcnJheS9pbmRleC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9vYmplY3Qva2V5cy50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9vYmplY3QvdmFsdWVzLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL29iamVjdC9wYWlycy50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9vYmplY3QvcGljay50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9vYmplY3Qvb21pdC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9vYmplY3QvaW52ZXJ0LnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL29iamVjdC9pbnZlcnQtYnkudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvb2JqZWN0L2RpZmYtb2JqLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL29iamVjdC9pbmRleC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9zdHJpbmcvdWN3b3Jkcy50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9zdHJpbmcvbHRyaW0udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3JlcGVhdC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9zdHJpbmcvcnRyaW0udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3NjYW4udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3Nob3J0ZW4udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3N0cmlwLXRhZ3MudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3RyaW0udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3VjZmlyc3QudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3NsdWdpZnkudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL2NhbWVsaXplLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL3N0cmluZy9sYXRpbmlzZS50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9zdHJpbmcvbGluZXMudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL3VuZGVyc2NvcmUudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvc3RyaW5nL21hdGNoLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL3N0cmluZy90ZXN0LnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL3N0cmluZy9scGFkLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL3N0cmluZy9ycGFkLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL3N0cmluZy93cmFwLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL3N0cmluZy9pbmRleC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9tYXRoL21heC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9tYXRoL21pbi50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9tYXRoL3BlcmNlbnRhZ2UudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvbWF0aC9zdW0udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvbWF0aC9mbG9vci50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9tYXRoL3JvdW5kLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL21hdGgvc3FydC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9tYXRoL3Bvdy50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9tYXRoL2NlaWwudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvbWF0aC9kZWdyZWVzLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL21hdGgvYnl0ZXMudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvbWF0aC9yYWRpYW5zLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL21hdGgvaW5kZXgudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1kZWZpbmVkLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2Jvb2xlYW4vaXMtbnVsbC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9ib29sZWFuL2lzLXVuZGVmaW5lZC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9ib29sZWFuL2lzLXN0cmluZy50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9ib29sZWFuL2lzLWZ1bmN0aW9uLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2Jvb2xlYW4vaXMtbnVtYmVyLnRzIiwibmc6Ly9uZ3gtcGlwZXMvc3JjL3BpcGVzL2Jvb2xlYW4vaXMtYXJyYXkudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1vYmplY3QudHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1ncmVhdGVyLWVxdWFsLXRoYW4udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1ncmVhdGVyLXRoYW4udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1sZXNzLWVxdWFsLXRoYW4udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1lcXVhbC10by50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9ib29sZWFuL2lzLW5vdC1lcXVhbC10by50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9ib29sZWFuL2lzLWlkZW50aWNhbC10by50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9ib29sZWFuL2lzLW5vdC1pZGVudGljYWwtdG8udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pcy1sZXNzLXRoYW4udHMiLCJuZzovL25neC1waXBlcy9zcmMvcGlwZXMvYm9vbGVhbi9pbmRleC50cyIsIm5nOi8vbmd4LXBpcGVzL3NyYy9waXBlcy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcImRpZmZcIiB9KVxuZXhwb3J0IGNsYXNzIERpZmZQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55W10sIC4uLmFyZ3M6IGFueVtdKTogYW55W107XG4gIHRyYW5zZm9ybTxUPihpbnB1dDogVCwgLi4uYXJnczogYW55W10pOiBUO1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgcmV0dXJuIGFyZ3MucmVkdWNlKChkLCBjKSA9PiBkLmZpbHRlcigoZTogYW55KSA9PiAhfmMuaW5kZXhPZihlKSksIGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpbml0aWFsXCIgfSlcbmV4cG9ydCBjbGFzcyBJbml0aWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBudW06IG51bWJlcik6IGFueVtdO1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSk6IGFueTtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgbnVtOiBudW1iZXIgPSAwKTogYW55W10ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IGlucHV0LnNsaWNlKDAsIGlucHV0Lmxlbmd0aCAtIG51bSkgOiBpbnB1dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJmbGF0dGVuXCIgfSlcbmV4cG9ydCBjbGFzcyBGbGF0dGVuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBzaGFsbG93PzogYm9vbGVhbik6IGFueVtdO1xuICB0cmFuc2Zvcm08VD4oaW5wdXQ6IFQsIHNoYWxsb3c/OiBib29sZWFuKTogVDtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWxsb3cgPyBbXS5jb25jYXQuYXBwbHkoW10sIGlucHV0KSA6IHRoaXMuZmxhdHRlbihpbnB1dCk7XG4gIH1cblxuICBwcml2YXRlIGZsYXR0ZW4oYXJyYXk6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycjogYW55W10sIGVsbTogYW55KSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShlbG0pKSB7XG4gICAgICAgIHJldHVybiBhcnIuY29uY2F0KHRoaXMuZmxhdHRlbihlbG0pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyci5jb25jYXQoZWxtKTtcbiAgICB9LCBbXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwiaW50ZXJzZWN0aW9uXCIgfSlcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55W10sIC4uLmFyZ3M6IGFueVtdKTogYW55W107XG4gIHRyYW5zZm9ybTxUPihpbnB1dDogVCwgLi4uYXJnczogYW55W10pOiBUO1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgcmV0dXJuIGFyZ3MucmVkdWNlKChuLCBjKSA9PiBuLmZpbHRlcigoZTogYW55KSA9PiAhIX5jLmluZGV4T2YoZSkpLCBpbnB1dCk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IGFueSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWU6IGFueSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckZpbml0ZSh2YWx1ZTogYW55KSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQcmVjaXNpb24obnVtOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyKSB7XG4gIGlmIChwcmVjaXNpb24gPD0gMCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSk7XG4gIH1cblxuICBjb25zdCB0aG8gPSAxMCAqKiBwcmVjaXNpb247XG5cbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogdGhvKSAvIHRobztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REZWVwUHJvcGVydHlCeU1hcEtleShvYmo6IGFueSwgbWFwOiBzdHJpbmcpOiBhbnkge1xuICBjb25zdCBrZXlzID0gbWFwLnNwbGl0KFwiLlwiKTtcbiAgY29uc3QgaGVhZCA9IGtleXMuc2hpZnQoKTtcblxuICByZXR1cm4ga2V5cy5yZWR1Y2UoKHByb3A6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHByb3ApICYmICFpc1VuZGVmaW5lZChwcm9wW2tleV0pID8gcHJvcFtrZXldIDogdW5kZWZpbmVkO1xuICB9LCBvYmpbaGVhZCB8fCBcIlwiXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RGVlcFByb3BlcnR5QnlQYXJlbnRNYXBLZXkob2JqOiBhbnksIG1hcDogc3RyaW5nKTogYW55IHtcbiAgY29uc3Qga2V5cyA9IG1hcC5zcGxpdChcIi5cIik7XG4gIGNvbnN0IHRhaWwgPSBrZXlzLnBvcCgpO1xuICBjb25zdCBwcm9wcyA9IGV4dHJhY3REZWVwUHJvcGVydHlCeU1hcEtleShvYmosIGtleXMuam9pbihcIi5cIikpO1xuXG4gIHJldHVybiB7IHByb3BzLCB0YWlsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlzVHdvT2JqZWN0cyhvYmo6IGFueSwgb3RoZXI6IGFueSk6IGFueSB7XG4gIHJldHVybiBbLi4uT2JqZWN0LmtleXMob2JqKSwgLi4uT2JqZWN0LmtleXMob3RoZXIpXS5maWx0ZXIoKGtleSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKGtleSkgPT09IGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVlcEVxdWFsKG9iajogYW55LCBvdGhlcjogYW55KTogYW55IHtcbiAgaWYgKCFpc09iamVjdChvYmopIHx8ICFpc09iamVjdChvdGhlcikpIHtcbiAgICByZXR1cm4gb2JqID09PSBvdGhlcjtcbiAgfVxuXG4gIHJldHVybiBnZXRLZXlzVHdvT2JqZWN0cyhvYmosIG90aGVyKS5ldmVyeShcbiAgICAoa2V5OiBhbnkpOiBib29sZWFuID0+IHtcbiAgICAgIGlmICghaXNPYmplY3Qob2JqW2tleV0pICYmICFpc09iamVjdChvdGhlcltrZXldKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tleV0gPT09IG90aGVyW2tleV07XG4gICAgICB9XG4gICAgICBpZiAoIWlzT2JqZWN0KG9ialtrZXldKSB8fCAhaXNPYmplY3Qob3RoZXJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNEZWVwRXF1YWwob2JqW2tleV0sIG90aGVyW2tleV0pO1xuICAgIH1cbiAgKTtcbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJyZXZlcnNlXCIgfSlcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSk6IGFueSB7XG4gICAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0XG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IGlucHV0LnNsaWNlKCkucmV2ZXJzZSgpIDogaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwidGFpbFwiIH0pXG5leHBvcnQgY2xhc3MgVGFpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnlbXSwgbnVtPzogbnVtYmVyKTogYW55W107XG4gIHRyYW5zZm9ybTxUPihpbnB1dDogVCwgbnVtPzogbnVtYmVyKTogVDtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgbnVtOiBudW1iZXIgPSAwKTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBpbnB1dC5zbGljZShudW0pIDogaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwidHJ1dGhpZnlcIiB9KVxuZXhwb3J0IGNsYXNzIFRydXJ0aGlmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnlbXSk6IGFueVtdO1xuICB0cmFuc2Zvcm08VD4oaW5wdXQ6IFQpOiBUO1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBpbnB1dC5maWx0ZXIoZSA9PiAhIWUpIDogaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwidW5pb25cIiB9KVxuZXhwb3J0IGNsYXNzIFVuaW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBhcmdzPzogYW55W10pOiBhbnlbXTtcbiAgdHJhbnNmb3JtPFQ+KGlucHV0OiBULCBhcmdzPzogYW55W10pOiBUO1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBhcmdzOiBhbnlbXSA9IFtdKTogYW55IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpIHx8ICFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3MucmVkdWNlKChuZXdBcnIsIGN1cnJBcnIpID0+IHtcbiAgICAgIHJldHVybiBuZXdBcnIuY29uY2F0KFxuICAgICAgICBjdXJyQXJyLnJlZHVjZSgobm9EdXBBcnI6IGFueVtdLCBjdXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgIHJldHVybiAhfm5vRHVwQXJyLmluZGV4T2YoY3VycikgJiYgIX5uZXdBcnIuaW5kZXhPZihjdXJyKSA/IG5vRHVwQXJyLmNvbmNhdChbY3Vycl0pIDogbm9EdXBBcnI7XG4gICAgICAgIH0sIFtdKVxuICAgICAgKTtcbiAgICB9LCBpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5LCBpc09iamVjdCwgaXNVbmRlZmluZWQgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJ1bmlxdWVcIiB9KVxuZXhwb3J0IGNsYXNzIFVuaXF1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnlbXSwgYXJncz86IHN0cmluZyB8IHVuZGVmaW5lZCk6IGFueVtdO1xuICB0cmFuc2Zvcm08VD4oaW5wdXQ6IFQsIGFyZ3M/OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBUO1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBhbnkge1xuICAgIGNvbnN0IHVuaXF1ZXM6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpXG4gICAgICA/IGlzVW5kZWZpbmVkKHByb3BlcnR5TmFtZSlcbiAgICAgICAgPyBpbnB1dC5maWx0ZXIoKGUsIGkpID0+IGlucHV0LmluZGV4T2YoZSkgPT09IGkpXG4gICAgICAgIDogaW5wdXQuZmlsdGVyKChlLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBleHRyYWN0RGVlcFByb3BlcnR5QnlNYXBLZXkoZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIHZhbHVlID0gaXNPYmplY3QodmFsdWUpID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkgfHwgdW5pcXVlc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bmlxdWVzW3ZhbHVlXSA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0pXG4gICAgICA6IGlucHV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcIndpdGhvdXRcIiB9KVxuZXhwb3J0IGNsYXNzIFdpdGhvdXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55W10sIGFyZ3M/OiBhbnlbXSk6IGFueVtdO1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgYXJncz86IGFueVtdKTogYW55O1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBhcmdzOiBhbnlbXSA9IFtdKTogYW55W10ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KVxuICAgICAgPyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBpbnB1dC5maWx0ZXIoZSA9PiAhfmFyZ3MuaW5kZXhPZihlKSlcbiAgICAgIDogaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5IH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwicGx1Y2tcIiwgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBQbHVja1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnlbXSwgbWFwOiBzdHJpbmcpOiBhbnlbXTtcbiAgdHJhbnNmb3JtPFQ+KGlucHV0OiBULCBtYXA6IHN0cmluZyk6IFQ7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIG1hcDogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBpbnB1dC5tYXAoZSA9PiBleHRyYWN0RGVlcFByb3BlcnR5QnlNYXBLZXkoZSwgbWFwKSkgOiBpbnB1dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJzaHVmZmxlXCIgfSlcbmV4cG9ydCBjbGFzcyBTaHVmZmxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdKTogYW55W107XG4gIHRyYW5zZm9ybTxUPihpbnB1dDogVCk6IFQ7XG5cbiAgLy8gVXNpbmcgYSB2ZXJzaW9uIG9mIHRoZSBGaXNoZXItWWF0ZXMgc2h1ZmZsZSBhbGdvcml0aG1cbiAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVyJUUyJTgwJTkzWWF0ZXNfc2h1ZmZsZVxuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IHNodWZmbGVkID0gWy4uLmlucHV0XTtcbiAgICBjb25zdCBuID0gaW5wdXQubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuIC0gaSArIDEpKSArIGk7XG4gICAgICBbc2h1ZmZsZWRbaV0sIHNodWZmbGVkW2pdXSA9IFtzaHVmZmxlZFtqXSwgc2h1ZmZsZWRbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJldmVyeVwiIH0pXG5leHBvcnQgY2xhc3MgRXZlcnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBwcmVkaWNhdGU6ICh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyLCBhcnJheTogYW55W10pID0+IGJvb2xlYW4pOiBib29sZWFuIHwgYW55W10ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IGlucHV0LmV2ZXJ5KHByZWRpY2F0ZSkgOiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJzb21lXCIgfSlcbmV4cG9ydCBjbGFzcyBTb21lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBwcmVkaWNhdGU6ICh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyLCBhcnJheTogYW55W10pID0+IGJvb2xlYW4pOiBib29sZWFuO1xuICB0cmFuc2Zvcm08VD4oaW5wdXQ6IFQsIHByZWRpY2F0ZTogKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIGFycmF5OiBhbnlbXSkgPT4gYm9vbGVhbik6IFQ7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHByZWRpY2F0ZTogKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIGFycmF5OiBhbnlbXSkgPT4gYm9vbGVhbik6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpID8gaW5wdXQuc29tZShwcmVkaWNhdGUpIDogaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwic2FtcGxlXCIgfSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55W10sIGxlbj86IG51bWJlcik6IGFueVtdO1xuICB0cmFuc2Zvcm08VD4oaW5wdXQ6IFQsIGxlbj86IG51bWJlcik6IFQ7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGxlbjogbnVtYmVyID0gMSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGxldCBzYW1wbGU6IGFueVtdID0gW107XG4gICAgY29uc3QgdG1wID0gWy4uLmlucHV0XTtcbiAgICBjb25zdCBsID0gbGVuIDwgdG1wLmxlbmd0aCA/IGxlbiA6IHRtcC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgIHNhbXBsZSA9IHNhbXBsZS5jb25jYXQodG1wLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0bXAubGVuZ3RoKSwgMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwiZ3JvdXBCeVwiIH0pXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGRpc2NyaW1pbmF0b3I6IGFueSA9IFtdLCBkZWxpbWl0ZXI6IHN0cmluZyA9IFwifFwiKTogYW55IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBCeShpbnB1dCwgZGlzY3JpbWluYXRvciwgZGVsaW1pdGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZ3JvdXBCeShsaXN0OiBhbnlbXSwgZGlzY3JpbWluYXRvcjogYW55LCBkZWxpbWl0ZXI6IHN0cmluZykge1xuICAgIHJldHVybiBsaXN0LnJlZHVjZSgoYWNjOiBhbnksIHBheWxvYWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5leHRyYWN0S2V5QnlEaXNjcmltaW5hdG9yKGRpc2NyaW1pbmF0b3IsIHBheWxvYWQsIGRlbGltaXRlcik7XG5cbiAgICAgIGFjY1trZXldID0gQXJyYXkuaXNBcnJheShhY2Nba2V5XSkgPyBhY2Nba2V5XS5jb25jYXQoW3BheWxvYWRdKSA6IFtwYXlsb2FkXTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RLZXlCeURpc2NyaW1pbmF0b3IoZGlzY3JpbWluYXRvcjogYW55LCBwYXlsb2FkOiBzdHJpbmcsIGRlbGltaXRlcjogc3RyaW5nKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZGlzY3JpbWluYXRvcikpIHtcbiAgICAgIHJldHVybiAoPEZ1bmN0aW9uPmRpc2NyaW1pbmF0b3IpKHBheWxvYWQpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc2NyaW1pbmF0b3IpKSB7XG4gICAgICByZXR1cm4gZGlzY3JpbWluYXRvci5tYXAoayA9PiBleHRyYWN0RGVlcFByb3BlcnR5QnlNYXBLZXkocGF5bG9hZCwgaykpLmpvaW4oZGVsaW1pdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5KHBheWxvYWQsIDxzdHJpbmc+ZGlzY3JpbWluYXRvcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5LFxuICBleHRyYWN0RGVlcFByb3BlcnR5QnlQYXJlbnRNYXBLZXksXG4gIGlzQm9vbGVhbixcbiAgaXNOdW1iZXJGaW5pdGUsXG4gIGlzU3RyaW5nLFxuICBpc1VuZGVmaW5lZCxcbn0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBuby1iaXR3aXNlXG5AUGlwZSh7IG5hbWU6IFwiZmlsdGVyQnlcIiB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBwcm9wczogQXJyYXk8c3RyaW5nPiwgc2VhcmNoPzogYW55LCBzdHJpY3Q/OiBib29sZWFuKTogYW55W107XG4gIHRyYW5zZm9ybTxUPihpbnB1dDogVCwgcHJvcHM6IEFycmF5PHN0cmluZz4sIHNlYXJjaD86IGFueSwgc3RyaWN0PzogYm9vbGVhbik6IFQ7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBwcm9wczogQXJyYXk8c3RyaW5nPiwgc2VhcmNoOiBhbnkgPSBcIlwiLCBzdHJpY3Q6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSB8fCAoIWlzU3RyaW5nKHNlYXJjaCkgJiYgIWlzTnVtYmVyRmluaXRlKHNlYXJjaCkgJiYgIWlzQm9vbGVhbihzZWFyY2gpKSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm0gPSBTdHJpbmcoc2VhcmNoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIGlucHV0LmZpbHRlcihvYmogPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLnNvbWUocHJvcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5KG9iaiwgcHJvcCk7XG4gICAgICAgIGNvbnN0IHsgcHJvcHMsIHRhaWwgfSA9IGV4dHJhY3REZWVwUHJvcGVydHlCeVBhcmVudE1hcEtleShvYmosIHByb3ApO1xuXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgIWlzVW5kZWZpbmVkKHByb3BzKSAmJiBBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5zb21lKHBhcmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSBTdHJpbmcocGFyZW50W3RhaWxdKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RyaWN0ID8gc3RyID09PSB0ZXJtIDogISF+c3RyLmluZGV4T2YodGVybSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RyVmFsdWU6IHN0cmluZyA9IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gc3RyaWN0ID8gdGVybSA9PT0gc3RyVmFsdWUgOiAhIX5zdHJWYWx1ZS5pbmRleE9mKHRlcm0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5LCBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJvcmRlckJ5XCIgfSlcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueVtdLCBjb25maWc/OiBhbnkpOiBhbnlbXTtcbiAgdHJhbnNmb3JtPFQ+KGlucHV0OiBULCBjb25maWc/OiBhbnkpOiBUO1xuXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBjb25maWc/OiBhbnkpOiBhbnkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBvdXQgPSBbLi4uaW5wdXRdO1xuXG4gICAgLy8gc29ydCBieSBtdWx0aXBsZSBwcm9wZXJ0aWVzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkge1xuICAgICAgcmV0dXJuIG91dC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGwgPSBjb25maWcubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgIGNvbnN0IFtwcm9wLCBhc2NdID0gT3JkZXJCeVBpcGUuZXh0cmFjdEZyb21Db25maWcoY29uZmlnW2ldKTtcbiAgICAgICAgICBjb25zdCBwb3MgPSBPcmRlckJ5UGlwZS5vcmRlckNvbXBhcmUocHJvcCwgYXNjLCBhLCBiKTtcbiAgICAgICAgICBpZiAocG9zICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc29ydCBieSBhIHNpbmdsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgIGlmIChpc1N0cmluZyhjb25maWcpKSB7XG4gICAgICBjb25zdCBbcHJvcCwgYXNjLCBzaWduXSA9IE9yZGVyQnlQaXBlLmV4dHJhY3RGcm9tQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmIChjb25maWcubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzd2l0Y2gtZGVmYXVsdFxuICAgICAgICBzd2l0Y2ggKHNpZ24pIHtcbiAgICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgICAgcmV0dXJuIG91dC5zb3J0KE9yZGVyQnlQaXBlLnNpbXBsZVNvcnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgIHJldHVybiBvdXQuc29ydChPcmRlckJ5UGlwZS5zaW1wbGVTb3J0LmJpbmQodGhpcykpLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0LnNvcnQoT3JkZXJCeVBpcGUub3JkZXJDb21wYXJlLmJpbmQodGhpcywgcHJvcCwgYXNjKSk7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBzb3J0IGJ5IHZhbHVlXG4gICAgcmV0dXJuIG91dC5zb3J0KE9yZGVyQnlQaXBlLnNpbXBsZVNvcnQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzaW1wbGVTb3J0KGE6IGFueSwgYjogYW55KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGEpICYmIGlzU3RyaW5nKGIpID8gYS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi50b0xvd2VyQ2FzZSgpKSA6IGEgLSBiO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgb3JkZXJDb21wYXJlKHByb3A6IHN0cmluZywgYXNjOiBib29sZWFuLCBhOiBhbnksIGI6IGFueSkge1xuICAgIGNvbnN0IGZpcnN0ID0gZXh0cmFjdERlZXBQcm9wZXJ0eUJ5TWFwS2V5KGEsIHByb3ApO1xuICAgIGNvbnN0IHNlY29uZCA9IGV4dHJhY3REZWVwUHJvcGVydHlCeU1hcEtleShiLCBwcm9wKTtcblxuICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZmluZWQoZmlyc3QpIHx8IGZpcnN0ID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZmluZWQoc2Vjb25kKSB8fCBzZWNvbmQgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBpZiAoaXNTdHJpbmcoZmlyc3QpICYmIGlzU3RyaW5nKHNlY29uZCkpIHtcbiAgICAgIGNvbnN0IHBvcyA9IGZpcnN0LnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShzZWNvbmQudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgIHJldHVybiBhc2MgPyBwb3MgOiAtcG9zO1xuICAgIH1cblxuICAgIHJldHVybiBhc2MgPyBmaXJzdCAtIHNlY29uZCA6IHNlY29uZCAtIGZpcnN0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdEZyb21Db25maWcoY29uZmlnOiBhbnkpIHtcbiAgICBjb25zdCBzaWduID0gY29uZmlnLnN1YnN0cigwLCAxKTtcbiAgICBjb25zdCBwcm9wID0gY29uZmlnLnJlcGxhY2UoL15bLStdLywgXCJcIik7XG4gICAgY29uc3QgYXNjID0gc2lnbiAhPT0gXCItXCI7XG5cbiAgICByZXR1cm4gW3Byb3AsIGFzYywgc2lnbl07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JvdXBCeVBpcGUgfSBmcm9tIFwiLi9ncm91cC1ieVwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSB1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXG5AUGlwZSh7IG5hbWU6IFwiZ3JvdXBCeUltcHVyZVwiLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEdyb3VwQnlJbXB1cmVQaXBlIGV4dGVuZHMgR3JvdXBCeVBpcGUge31cbiIsImltcG9ydCB7IFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRmlsdGVyQnlQaXBlIH0gZnJvbSBcIi4vZmlsdGVyLWJ5XCI7XG5cbi8vIHRzbGludDpkaXNhYmxlIHVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogXCJmaWx0ZXJCeUltcHVyZVwiLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlckJ5SW1wdXJlUGlwZSBleHRlbmRzIEZpbHRlckJ5UGlwZSB7fVxuIiwiaW1wb3J0IHsgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPcmRlckJ5UGlwZSB9IGZyb20gXCIuL29yZGVyLWJ5XCI7XG5cbi8vIHRzbGludDpkaXNhYmxlIHVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogXCJvcmRlckJ5SW1wdXJlXCIsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgT3JkZXJCeUltcHVyZVBpcGUgZXh0ZW5kcyBPcmRlckJ5UGlwZSB7fVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJyYW5nZVwiIH0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdGFydDogbnVtYmVyID0gMSwgY291bnQ6IG51bWJlciA9IDAsIHN0ZXA6IG51bWJlciA9IDEpOiBhbnkge1xuICAgIHJldHVybiBBcnJheShjb3VudClcbiAgICAgIC5maWxsKFwiXCIpXG4gICAgICAubWFwKCh2LCBpKSA9PiBzdGVwICogaSArIHN0YXJ0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlmZlBpcGUgfSBmcm9tIFwiLi9kaWZmXCI7XG5pbXBvcnQgeyBJbml0aWFsUGlwZSB9IGZyb20gXCIuL2luaXRpYWxcIjtcbmltcG9ydCB7IEZsYXR0ZW5QaXBlIH0gZnJvbSBcIi4vZmxhdHRlblwiO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uUGlwZSB9IGZyb20gXCIuL2ludGVyc2VjdGlvblwiO1xuaW1wb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tIFwiLi9yZXZlcnNlXCI7XG5pbXBvcnQgeyBUYWlsUGlwZSB9IGZyb20gXCIuL3RhaWxcIjtcbmltcG9ydCB7IFRydXJ0aGlmeVBpcGUgfSBmcm9tIFwiLi90cnV0aGlmeVwiO1xuaW1wb3J0IHsgVW5pb25QaXBlIH0gZnJvbSBcIi4vdW5pb25cIjtcbmltcG9ydCB7IFVuaXF1ZVBpcGUgfSBmcm9tIFwiLi91bmlxdWVcIjtcbmltcG9ydCB7IFdpdGhvdXRQaXBlIH0gZnJvbSBcIi4vd2l0aG91dFwiO1xuaW1wb3J0IHsgUGx1Y2tQaXBlIH0gZnJvbSBcIi4vcGx1Y2tcIjtcbmltcG9ydCB7IFNodWZmbGVQaXBlIH0gZnJvbSBcIi4vc2h1ZmZsZVwiO1xuaW1wb3J0IHsgRXZlcnlQaXBlIH0gZnJvbSBcIi4vZXZlcnlcIjtcbmltcG9ydCB7IFNvbWVQaXBlIH0gZnJvbSBcIi4vc29tZVwiO1xuaW1wb3J0IHsgU2FtcGxlUGlwZSB9IGZyb20gXCIuL3NhbXBsZVwiO1xuaW1wb3J0IHsgR3JvdXBCeVBpcGUgfSBmcm9tIFwiLi9ncm91cC1ieVwiO1xuaW1wb3J0IHsgRmlsdGVyQnlQaXBlIH0gZnJvbSBcIi4vZmlsdGVyLWJ5XCI7XG5pbXBvcnQgeyBPcmRlckJ5UGlwZSB9IGZyb20gXCIuL29yZGVyLWJ5XCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcm91cEJ5SW1wdXJlUGlwZSB9IGZyb20gXCIuL2dyb3VwLWJ5LWltcHVyZVwiO1xuaW1wb3J0IHsgRmlsdGVyQnlJbXB1cmVQaXBlIH0gZnJvbSBcIi4vZmlsdGVyLWJ5LWltcHVyZVwiO1xuaW1wb3J0IHsgT3JkZXJCeUltcHVyZVBpcGUgfSBmcm9tIFwiLi9vcmRlci1ieS1pbXB1cmVcIjtcbmltcG9ydCB7IFJhbmdlUGlwZSB9IGZyb20gXCIuL3JhbmdlXCI7XG5cbmNvbnN0IEFSUkFZX1BJUEVTID0gW1xuICBEaWZmUGlwZSxcbiAgRmxhdHRlblBpcGUsXG4gIEluaXRpYWxQaXBlLFxuICBJbnRlcnNlY3Rpb25QaXBlLFxuICBSZXZlcnNlUGlwZSxcbiAgVGFpbFBpcGUsXG4gIFRydXJ0aGlmeVBpcGUsXG4gIFVuaW9uUGlwZSxcbiAgVW5pcXVlUGlwZSxcbiAgV2l0aG91dFBpcGUsXG4gIFBsdWNrUGlwZSxcbiAgU2h1ZmZsZVBpcGUsXG4gIEV2ZXJ5UGlwZSxcbiAgU29tZVBpcGUsXG4gIFNhbXBsZVBpcGUsXG4gIEdyb3VwQnlQaXBlLFxuICBHcm91cEJ5SW1wdXJlUGlwZSxcbiAgRmlsdGVyQnlQaXBlLFxuICBGaWx0ZXJCeUltcHVyZVBpcGUsXG4gIE9yZGVyQnlQaXBlLFxuICBPcmRlckJ5SW1wdXJlUGlwZSxcbiAgUmFuZ2VQaXBlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBBUlJBWV9QSVBFUyxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IEFSUkFZX1BJUEVTLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0FycmF5UGlwZXNNb2R1bGUge31cblxuZXhwb3J0IHsgRGlmZlBpcGUgfSBmcm9tIFwiLi9kaWZmXCI7XG5leHBvcnQgeyBJbml0aWFsUGlwZSB9IGZyb20gXCIuL2luaXRpYWxcIjtcbmV4cG9ydCB7IEZsYXR0ZW5QaXBlIH0gZnJvbSBcIi4vZmxhdHRlblwiO1xuZXhwb3J0IHsgSW50ZXJzZWN0aW9uUGlwZSB9IGZyb20gXCIuL2ludGVyc2VjdGlvblwiO1xuZXhwb3J0IHsgUmV2ZXJzZVBpcGUgfSBmcm9tIFwiLi9yZXZlcnNlXCI7XG5leHBvcnQgeyBUYWlsUGlwZSB9IGZyb20gXCIuL3RhaWxcIjtcbmV4cG9ydCB7IFRydXJ0aGlmeVBpcGUgfSBmcm9tIFwiLi90cnV0aGlmeVwiO1xuZXhwb3J0IHsgVW5pb25QaXBlIH0gZnJvbSBcIi4vdW5pb25cIjtcbmV4cG9ydCB7IFVuaXF1ZVBpcGUgfSBmcm9tIFwiLi91bmlxdWVcIjtcbmV4cG9ydCB7IFdpdGhvdXRQaXBlIH0gZnJvbSBcIi4vd2l0aG91dFwiO1xuZXhwb3J0IHsgUGx1Y2tQaXBlIH0gZnJvbSBcIi4vcGx1Y2tcIjtcbmV4cG9ydCB7IFNodWZmbGVQaXBlIH0gZnJvbSBcIi4vc2h1ZmZsZVwiO1xuZXhwb3J0IHsgRXZlcnlQaXBlIH0gZnJvbSBcIi4vZXZlcnlcIjtcbmV4cG9ydCB7IFNvbWVQaXBlIH0gZnJvbSBcIi4vc29tZVwiO1xuZXhwb3J0IHsgU2FtcGxlUGlwZSB9IGZyb20gXCIuL3NhbXBsZVwiO1xuZXhwb3J0IHsgR3JvdXBCeVBpcGUgfSBmcm9tIFwiLi9ncm91cC1ieVwiO1xuZXhwb3J0IHsgRmlsdGVyQnlQaXBlIH0gZnJvbSBcIi4vZmlsdGVyLWJ5XCI7XG5leHBvcnQgeyBPcmRlckJ5UGlwZSB9IGZyb20gXCIuL29yZGVyLWJ5XCI7XG5leHBvcnQgeyBHcm91cEJ5SW1wdXJlUGlwZSB9IGZyb20gXCIuL2dyb3VwLWJ5LWltcHVyZVwiO1xuZXhwb3J0IHsgRmlsdGVyQnlJbXB1cmVQaXBlIH0gZnJvbSBcIi4vZmlsdGVyLWJ5LWltcHVyZVwiO1xuZXhwb3J0IHsgT3JkZXJCeUltcHVyZVBpcGUgfSBmcm9tIFwiLi9vcmRlci1ieS1pbXB1cmVcIjtcbmV4cG9ydCB7IFJhbmdlUGlwZSB9IGZyb20gXCIuL3JhbmdlXCI7XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwia2V5c1wiIH0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9iajogYW55KTogYW55W10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJ2YWx1ZXNcIiB9KVxuZXhwb3J0IGNsYXNzIFZhbHVlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9iajogYW55KTogYW55W10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGsgPT4gb2JqW2tdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcInBhaXJzXCIgfSlcbmV4cG9ydCBjbGFzcyBQYWlyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9iajogYW55KTogYW55W10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGsgPT4gW2ssIG9ialtrXV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwicGlja1wiIH0pXG5leHBvcnQgY2xhc3MgUGlja1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9iajogYW55LCAuLi5hcmdzOiBBcnJheTxzdHJpbmc+KTogT2JqZWN0IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopIHx8ICFpc09iamVjdChvYmopKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLnJlZHVjZSgobywgaykgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obywgeyBba106IG9ialtrXSB9KTtcbiAgICB9LCB7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJvbWl0XCIgfSlcbmV4cG9ydCBjbGFzcyBPbWl0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob2JqOiBhbnksIC4uLmFyZ3M6IEFycmF5PHN0cmluZz4pOiBPYmplY3Qge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIE9iamVjdC5rZXlzKG9iailcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgLmZpbHRlcihrID0+ICF+YXJncy5pbmRleE9mKGspKVxuICAgICAgICAucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obywgeyBba106IG9ialtrXSB9KTtcbiAgICAgICAgfSwge30pXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImludmVydFwiIH0pXG5leHBvcnQgY2xhc3MgSW52ZXJ0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob2JqOiBhbnkpOiBPYmplY3Qge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvLCB7IFtvYmpba11dOiBrIH0pO1xuICAgIH0sIHt9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImludmVydEJ5XCIgfSlcbmV4cG9ydCBjbGFzcyBJbnZlcnRCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9iajogYW55LCBjYj86IEZ1bmN0aW9uKTogT2JqZWN0IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopIHx8ICFpc09iamVjdChvYmopKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgobzogYW55LCBrOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGNiID8gY2Iob2JqW2tdKSA6IG9ialtrXTtcblxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob1trZXldKSA/IChvW2tleV0ucHVzaChrKSwgbykgOiBPYmplY3QuYXNzaWduKG8sIHsgW2tleV06IFtrXSB9KTtcbiAgICB9LCB7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0S2V5c1R3b09iamVjdHMsIGlzRGVlcEVxdWFsLCBpc09iamVjdCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImRpZmZPYmpcIiB9KVxuZXhwb3J0IGNsYXNzIERpZmZPYmpQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShvYmo6IGFueSwgb3JpZ2luYWw6IGFueSA9IHt9KTogYW55IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopIHx8IEFycmF5LmlzQXJyYXkob3JpZ2luYWwpIHx8ICFpc09iamVjdChvYmopIHx8ICFpc09iamVjdChvcmlnaW5hbCkpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0S2V5c1R3b09iamVjdHMob2JqLCBvcmlnaW5hbCkucmVkdWNlKChkaWZmOiBhbnksIGtleTogYW55KSA9PiB7XG4gICAgICBpZiAoIWlzRGVlcEVxdWFsKG9yaWdpbmFsW2tleV0sIG9ialtrZXldKSkge1xuICAgICAgICBkaWZmW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpZmY7XG4gICAgfSwge30pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gXCIuL2tleXNcIjtcbmltcG9ydCB7IFZhbHVlc1BpcGUgfSBmcm9tIFwiLi92YWx1ZXNcIjtcbmltcG9ydCB7IFBhaXJzUGlwZSB9IGZyb20gXCIuL3BhaXJzXCI7XG5pbXBvcnQgeyBQaWNrUGlwZSB9IGZyb20gXCIuL3BpY2tcIjtcbmltcG9ydCB7IE9taXRQaXBlIH0gZnJvbSBcIi4vb21pdFwiO1xuaW1wb3J0IHsgSW52ZXJ0UGlwZSB9IGZyb20gXCIuL2ludmVydFwiO1xuaW1wb3J0IHsgSW52ZXJ0QnlQaXBlIH0gZnJvbSBcIi4vaW52ZXJ0LWJ5XCI7XG5pbXBvcnQgeyBEaWZmT2JqUGlwZSB9IGZyb20gXCIuL2RpZmYtb2JqXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNvbnN0IE9CSkVDVF9QSVBFUyA9IFtLZXlzUGlwZSwgVmFsdWVzUGlwZSwgUGFpcnNQaXBlLCBQaWNrUGlwZSwgSW52ZXJ0UGlwZSwgSW52ZXJ0QnlQaXBlLCBPbWl0UGlwZSwgRGlmZk9ialBpcGVdO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IE9CSkVDVF9QSVBFUyxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IE9CSkVDVF9QSVBFUyxcbn0pXG5leHBvcnQgY2xhc3MgTmdPYmplY3RQaXBlc01vZHVsZSB7fVxuXG5leHBvcnQgeyBLZXlzUGlwZSB9IGZyb20gXCIuL2tleXNcIjtcbmV4cG9ydCB7IFZhbHVlc1BpcGUgfSBmcm9tIFwiLi92YWx1ZXNcIjtcbmV4cG9ydCB7IFBhaXJzUGlwZSB9IGZyb20gXCIuL3BhaXJzXCI7XG5leHBvcnQgeyBQaWNrUGlwZSB9IGZyb20gXCIuL3BpY2tcIjtcbmV4cG9ydCB7IE9taXRQaXBlIH0gZnJvbSBcIi4vb21pdFwiO1xuZXhwb3J0IHsgSW52ZXJ0UGlwZSB9IGZyb20gXCIuL2ludmVydFwiO1xuZXhwb3J0IHsgSW52ZXJ0QnlQaXBlIH0gZnJvbSBcIi4vaW52ZXJ0LWJ5XCI7XG5leHBvcnQgeyBEaWZmT2JqUGlwZSB9IGZyb20gXCIuL2RpZmYtb2JqXCI7XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwidWN3b3Jkc1wiIH0pXG5leHBvcnQgY2xhc3MgVWNXb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBzdHJpbmc7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55O1xuXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChpc1N0cmluZyh0ZXh0KSkge1xuICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAubWFwKChzdWI6IGFueSkgPT4gc3ViLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdWIuc2xpY2UoMSkpXG4gICAgICAgIC5qb2luKFwiIFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImx0cmltXCIgfSlcbmV4cG9ydCBjbGFzcyBMZWZ0VHJpbVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgY2hhcnM6IHN0cmluZyA9IFwiXFxcXHNcIik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRleHQpID8gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoYF5bJHtjaGFyc31dK2ApLCBcIlwiKSA6IHRleHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJyZXBlYXRcIiB9KVxuZXhwb3J0IGNsYXNzIFJlcGVhdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0cjogc3RyaW5nLCBuOiBudW1iZXIgPSAxLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgIGlmIChuIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG4gPT09IDEgPyBzdHIgOiB0aGlzLnJlcGVhdChzdHIsIG4gLSAxLCBzZXBhcmF0b3IpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBlYXQoc3RyOiBzdHJpbmcsIG46IG51bWJlciwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHIpID8gKG4gPT09IDAgPyBzdHIgOiBzdHIgKyBzZXBhcmF0b3IgKyB0aGlzLnJlcGVhdChzdHIsIG4gLSAxLCBzZXBhcmF0b3IpKSA6IHN0cjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcInJ0cmltXCIgfSlcbmV4cG9ydCBjbGFzcyBSaWdodFRyaW1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIGNoYXJzOiBzdHJpbmcgPSBcIlxcXFxzXCIpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXh0KSA/IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtjaGFyc31dKyRgKSwgXCJcIikgOiB0ZXh0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc1VuZGVmaW5lZCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcInNjYW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNjYW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXh0KVxuICAgICAgPyB0ZXh0LnJlcGxhY2UoL1xceyhcXGQrKX0vZywgKG1hdGNoLCBpbmRleCkgPT4gKCFpc1VuZGVmaW5lZChhcmdzW2luZGV4XSkgPyBhcmdzW2luZGV4XSA6IG1hdGNoKSlcbiAgICAgIDogdGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcInNob3J0ZW5cIiB9KVxuZXhwb3J0IGNsYXNzIFNob3J0ZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZywgd29yZEJyZWFrPzogYm9vbGVhbik6IHN0cmluZztcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGxlbmd0aD86IG51bWJlciwgc3VmZml4Pzogc3RyaW5nLCB3b3JkQnJlYWs/OiBib29sZWFuKTogYW55O1xuXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIGxlbmd0aDogbnVtYmVyID0gMCwgc3VmZml4OiBzdHJpbmcgPSBcIlwiLCB3b3JkQnJlYWs6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzU3RyaW5nKHRleHQpKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgIGlmICh3b3JkQnJlYWspIHtcbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgbGVuZ3RoKSArIHN1ZmZpeDtcbiAgICAgIH1cblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgIGlmICghIX50ZXh0LmluZGV4T2YoXCIgXCIsIGxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgdGV4dC5pbmRleE9mKFwiIFwiLCBsZW5ndGgpKSArIHN1ZmZpeDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJzdHJpcFRhZ3NcIiB9KVxuZXhwb3J0IGNsYXNzIFN0cmlwVGFnc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgLi4uYWxsb3dlZFRhZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYWxsb3dlZFRhZ3MubGVuZ3RoID4gMFxuICAgICAgPyB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgPCg/IVxcLz8oJHthbGxvd2VkVGFncy5qb2luKFwifFwiKX0pXFxzKlxcLz8pW14+XSs+YCwgXCJnXCIpLCBcIlwiKVxuICAgICAgOiB0ZXh0LnJlcGxhY2UoLzwoPzoufFxccykqPz4vZywgXCJcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJ0cmltXCIgfSlcbmV4cG9ydCBjbGFzcyBUcmltUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odGV4dDogc3RyaW5nLCBjaGFyczogc3RyaW5nID0gXCJcXFxcc1wiKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGV4dCkgPyB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgXlske2NoYXJzfV0rfFske2NoYXJzfV0rJGAsIFwiZ1wiKSwgXCJcIikgOiB0ZXh0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwidWNmaXJzdFwiIH0pXG5leHBvcnQgY2xhc3MgVWNGaXJzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBzdHJpbmc7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55O1xuXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXh0KSA/IHRleHQuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSkgOiB0ZXh0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwic2x1Z2lmeVwiIH0pXG5leHBvcnQgY2xhc3MgU2x1Z2lmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyKVxuICAgICAgPyBzdHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCBcIiBcIilcbiAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgIDogc3RyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwiY2FtZWxpemVcIiB9KVxuZXhwb3J0IGNsYXNzIENhbWVsaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgY2hhcnM/OiBzdHJpbmcpOiBzdHJpbmc7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBjaGFycz86IHN0cmluZyk6IGFueTtcblxuICB0cmFuc2Zvcm0odGV4dDogYW55LCBjaGFyczogc3RyaW5nID0gXCJcXFxcc1wiKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzU3RyaW5nKHRleHQpKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dFxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5zcGxpdCgvWy1fXFxzXS9nKVxuICAgICAgLmZpbHRlcigodjogc3RyaW5nKSA9PiAhIXYpXG4gICAgICAubWFwKCh3b3JkOiBzdHJpbmcsIGtleTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAha2V5ID8gd29yZCA6IHdvcmQuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJsYXRpbmlzZVwiIH0pXG5leHBvcnQgY2xhc3MgTGF0aW5pc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8vIFNvdXJjZTogaHR0cDovL3NlbXBsaWNld2Vic2l0ZXMuY29tL3JlbW92aW5nLWFjY2VudHMtamF2YXNjcmlwdFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgd2hpdGVzcGFjZSBtYXgtbGluZS1sZW5ndGggb2JqZWN0LWxpdGVyYWwta2V5LXF1b3Rlc1xuICBwcml2YXRlIGxhdGluTWFwOiBhbnkgPSB7XG4gICAgw4PCgTogXCJBXCIsXG4gICAgw4TCgjogXCJBXCIsXG4gICAgw6HCusKuOiBcIkFcIixcbiAgICDDocK6wrY6IFwiQVwiLFxuICAgIMOhwrrCsDogXCJBXCIsXG4gICAgw6HCusKyOiBcIkFcIixcbiAgICDDocK6wrQ6IFwiQVwiLFxuICAgIMOHwo06IFwiQVwiLFxuICAgIMODwoI6IFwiQVwiLFxuICAgIMOhwrrCpDogXCJBXCIsXG4gICAgw6HCusKsOiBcIkFcIixcbiAgICDDocK6wqY6IFwiQVwiLFxuICAgIMOhwrrCqDogXCJBXCIsXG4gICAgw6HCusKqOiBcIkFcIixcbiAgICDDg8KEOiBcIkFcIixcbiAgICDDh8KeOiBcIkFcIixcbiAgICDDiMKmOiBcIkFcIixcbiAgICDDh8KgOiBcIkFcIixcbiAgICDDocK6wqA6IFwiQVwiLFxuICAgIMOIwoA6IFwiQVwiLFxuICAgIMODwoA6IFwiQVwiLFxuICAgIMOhwrrCojogXCJBXCIsXG4gICAgw4jCgjogXCJBXCIsXG4gICAgw4TCgDogXCJBXCIsXG4gICAgw4TChDogXCJBXCIsXG4gICAgw4PChTogXCJBXCIsXG4gICAgw4fCujogXCJBXCIsXG4gICAgw6HCuMKAOiBcIkFcIixcbiAgICDDiMK6OiBcIkFcIixcbiAgICDDg8KDOiBcIkFcIixcbiAgICDDqsKcwrI6IFwiQUFcIixcbiAgICDDg8KGOiBcIkFFXCIsXG4gICAgw4fCvDogXCJBRVwiLFxuICAgIMOHwqI6IFwiQUVcIixcbiAgICDDqsKcwrQ6IFwiQU9cIixcbiAgICDDqsKcwrY6IFwiQVVcIixcbiAgICDDqsKcwrg6IFwiQVZcIixcbiAgICDDqsKcwro6IFwiQVZcIixcbiAgICDDqsKcwrw6IFwiQVlcIixcbiAgICDDocK4woI6IFwiQlwiLFxuICAgIMOhwrjChDogXCJCXCIsXG4gICAgw4bCgTogXCJCXCIsXG4gICAgw6HCuMKGOiBcIkJcIixcbiAgICDDicKDOiBcIkJcIixcbiAgICDDhsKCOiBcIkJcIixcbiAgICDDhMKGOiBcIkNcIixcbiAgICDDhMKMOiBcIkNcIixcbiAgICDDg8KHOiBcIkNcIixcbiAgICDDocK4wog6IFwiQ1wiLFxuICAgIMOEwog6IFwiQ1wiLFxuICAgIMOEwoo6IFwiQ1wiLFxuICAgIMOGwoc6IFwiQ1wiLFxuICAgIMOIwrs6IFwiQ1wiLFxuICAgIMOEwo46IFwiRFwiLFxuICAgIMOhwrjCkDogXCJEXCIsXG4gICAgw6HCuMKSOiBcIkRcIixcbiAgICDDocK4woo6IFwiRFwiLFxuICAgIMOhwrjCjDogXCJEXCIsXG4gICAgw4bCijogXCJEXCIsXG4gICAgw6HCuMKOOiBcIkRcIixcbiAgICDDh8KyOiBcIkRcIixcbiAgICDDh8KFOiBcIkRcIixcbiAgICDDhMKQOiBcIkRcIixcbiAgICDDhsKLOiBcIkRcIixcbiAgICDDh8KxOiBcIkRaXCIsXG4gICAgw4fChDogXCJEWlwiLFxuICAgIMODwok6IFwiRVwiLFxuICAgIMOEwpQ6IFwiRVwiLFxuICAgIMOEwpo6IFwiRVwiLFxuICAgIMOIwqg6IFwiRVwiLFxuICAgIMOhwrjCnDogXCJFXCIsXG4gICAgw4PCijogXCJFXCIsXG4gICAgw6HCusK+OiBcIkVcIixcbiAgICDDocK7woY6IFwiRVwiLFxuICAgIMOhwrvCgDogXCJFXCIsXG4gICAgw6HCu8KCOiBcIkVcIixcbiAgICDDocK7woQ6IFwiRVwiLFxuICAgIMOhwrjCmDogXCJFXCIsXG4gICAgw4PCizogXCJFXCIsXG4gICAgw4TCljogXCJFXCIsXG4gICAgw6HCusK4OiBcIkVcIixcbiAgICDDiMKEOiBcIkVcIixcbiAgICDDg8KIOiBcIkVcIixcbiAgICDDocK6wro6IFwiRVwiLFxuICAgIMOIwoY6IFwiRVwiLFxuICAgIMOEwpI6IFwiRVwiLFxuICAgIMOhwrjCljogXCJFXCIsXG4gICAgw6HCuMKUOiBcIkVcIixcbiAgICDDhMKYOiBcIkVcIixcbiAgICDDicKGOiBcIkVcIixcbiAgICDDocK6wrw6IFwiRVwiLFxuICAgIMOhwrjCmjogXCJFXCIsXG4gICAgw6rCncKqOiBcIkVUXCIsXG4gICAgw6HCuMKeOiBcIkZcIixcbiAgICDDhsKROiBcIkZcIixcbiAgICDDh8K0OiBcIkdcIixcbiAgICDDhMKeOiBcIkdcIixcbiAgICDDh8KmOiBcIkdcIixcbiAgICDDhMKiOiBcIkdcIixcbiAgICDDhMKcOiBcIkdcIixcbiAgICDDhMKgOiBcIkdcIixcbiAgICDDhsKTOiBcIkdcIixcbiAgICDDocK4wqA6IFwiR1wiLFxuICAgIMOHwqQ6IFwiR1wiLFxuICAgIMOhwrjCqjogXCJIXCIsXG4gICAgw4jCnjogXCJIXCIsXG4gICAgw6HCuMKoOiBcIkhcIixcbiAgICDDhMKkOiBcIkhcIixcbiAgICDDosKxwqc6IFwiSFwiLFxuICAgIMOhwrjCpjogXCJIXCIsXG4gICAgw6HCuMKiOiBcIkhcIixcbiAgICDDocK4wqQ6IFwiSFwiLFxuICAgIMOEwqY6IFwiSFwiLFxuICAgIMODwo06IFwiSVwiLFxuICAgIMOEwqw6IFwiSVwiLFxuICAgIMOHwo86IFwiSVwiLFxuICAgIMODwo46IFwiSVwiLFxuICAgIMODwo86IFwiSVwiLFxuICAgIMOhwrjCrjogXCJJXCIsXG4gICAgw4TCsDogXCJJXCIsXG4gICAgw6HCu8KKOiBcIklcIixcbiAgICDDiMKIOiBcIklcIixcbiAgICDDg8KMOiBcIklcIixcbiAgICDDocK7wog6IFwiSVwiLFxuICAgIMOIwoo6IFwiSVwiLFxuICAgIMOEwqo6IFwiSVwiLFxuICAgIMOEwq46IFwiSVwiLFxuICAgIMOGwpc6IFwiSVwiLFxuICAgIMOEwqg6IFwiSVwiLFxuICAgIMOhwrjCrDogXCJJXCIsXG4gICAgw6rCncK5OiBcIkRcIixcbiAgICDDqsKdwrs6IFwiRlwiLFxuICAgIMOqwp3CvTogXCJHXCIsXG4gICAgw6rCnsKCOiBcIlJcIixcbiAgICDDqsKewoQ6IFwiU1wiLFxuICAgIMOqwp7ChjogXCJUXCIsXG4gICAgw6rCncKsOiBcIklTXCIsXG4gICAgw4TCtDogXCJKXCIsXG4gICAgw4nCiDogXCJKXCIsXG4gICAgw6HCuMKwOiBcIktcIixcbiAgICDDh8KoOiBcIktcIixcbiAgICDDhMK2OiBcIktcIixcbiAgICDDosKxwqk6IFwiS1wiLFxuICAgIMOqwp3CgjogXCJLXCIsXG4gICAgw6HCuMKyOiBcIktcIixcbiAgICDDhsKYOiBcIktcIixcbiAgICDDocK4wrQ6IFwiS1wiLFxuICAgIMOqwp3CgDogXCJLXCIsXG4gICAgw6rCncKEOiBcIktcIixcbiAgICDDhMK5OiBcIkxcIixcbiAgICDDiMK9OiBcIkxcIixcbiAgICDDhMK9OiBcIkxcIixcbiAgICDDhMK7OiBcIkxcIixcbiAgICDDocK4wrw6IFwiTFwiLFxuICAgIMOhwrjCtjogXCJMXCIsXG4gICAgw6HCuMK4OiBcIkxcIixcbiAgICDDosKxwqA6IFwiTFwiLFxuICAgIMOqwp3CiDogXCJMXCIsXG4gICAgw6HCuMK6OiBcIkxcIixcbiAgICDDhMK/OiBcIkxcIixcbiAgICDDosKxwqI6IFwiTFwiLFxuICAgIMOHwog6IFwiTFwiLFxuICAgIMOFwoE6IFwiTFwiLFxuICAgIMOHwoc6IFwiTEpcIixcbiAgICDDocK4wr46IFwiTVwiLFxuICAgIMOhwrnCgDogXCJNXCIsXG4gICAgw6HCucKCOiBcIk1cIixcbiAgICDDosKxwq46IFwiTVwiLFxuICAgIMOFwoM6IFwiTlwiLFxuICAgIMOFwoc6IFwiTlwiLFxuICAgIMOFwoU6IFwiTlwiLFxuICAgIMOhwrnCijogXCJOXCIsXG4gICAgw6HCucKEOiBcIk5cIixcbiAgICDDocK5woY6IFwiTlwiLFxuICAgIMOHwrg6IFwiTlwiLFxuICAgIMOGwp06IFwiTlwiLFxuICAgIMOhwrnCiDogXCJOXCIsXG4gICAgw4jCoDogXCJOXCIsXG4gICAgw4fCizogXCJOXCIsXG4gICAgw4PCkTogXCJOXCIsXG4gICAgw4fCijogXCJOSlwiLFxuICAgIMODwpM6IFwiT1wiLFxuICAgIMOFwo46IFwiT1wiLFxuICAgIMOHwpE6IFwiT1wiLFxuICAgIMODwpQ6IFwiT1wiLFxuICAgIMOhwrvCkDogXCJPXCIsXG4gICAgw6HCu8KYOiBcIk9cIixcbiAgICDDocK7wpI6IFwiT1wiLFxuICAgIMOhwrvClDogXCJPXCIsXG4gICAgw6HCu8KWOiBcIk9cIixcbiAgICDDg8KWOiBcIk9cIixcbiAgICDDiMKqOiBcIk9cIixcbiAgICDDiMKuOiBcIk9cIixcbiAgICDDiMKwOiBcIk9cIixcbiAgICDDocK7wow6IFwiT1wiLFxuICAgIMOFwpA6IFwiT1wiLFxuICAgIMOIwow6IFwiT1wiLFxuICAgIMODwpI6IFwiT1wiLFxuICAgIMOhwrvCjjogXCJPXCIsXG4gICAgw4bCoDogXCJPXCIsXG4gICAgw6HCu8KaOiBcIk9cIixcbiAgICDDocK7wqI6IFwiT1wiLFxuICAgIMOhwrvCnDogXCJPXCIsXG4gICAgw6HCu8KeOiBcIk9cIixcbiAgICDDocK7wqA6IFwiT1wiLFxuICAgIMOIwo46IFwiT1wiLFxuICAgIMOqwp3CijogXCJPXCIsXG4gICAgw6rCncKMOiBcIk9cIixcbiAgICDDhcKMOiBcIk9cIixcbiAgICDDocK5wpI6IFwiT1wiLFxuICAgIMOhwrnCkDogXCJPXCIsXG4gICAgw4bCnzogXCJPXCIsXG4gICAgw4fCqjogXCJPXCIsXG4gICAgw4fCrDogXCJPXCIsXG4gICAgw4PCmDogXCJPXCIsXG4gICAgw4fCvjogXCJPXCIsXG4gICAgw4PClTogXCJPXCIsXG4gICAgw6HCucKMOiBcIk9cIixcbiAgICDDocK5wo46IFwiT1wiLFxuICAgIMOIwqw6IFwiT1wiLFxuICAgIMOGwqI6IFwiT0lcIixcbiAgICDDqsKdwo46IFwiT09cIixcbiAgICDDhsKQOiBcIkVcIixcbiAgICDDhsKGOiBcIk9cIixcbiAgICDDiMKiOiBcIk9VXCIsXG4gICAgw6HCucKUOiBcIlBcIixcbiAgICDDocK5wpY6IFwiUFwiLFxuICAgIMOqwp3CkjogXCJQXCIsXG4gICAgw4bCpDogXCJQXCIsXG4gICAgw6rCncKUOiBcIlBcIixcbiAgICDDosKxwqM6IFwiUFwiLFxuICAgIMOqwp3CkDogXCJQXCIsXG4gICAgw6rCncKYOiBcIlFcIixcbiAgICDDqsKdwpY6IFwiUVwiLFxuICAgIMOFwpQ6IFwiUlwiLFxuICAgIMOFwpg6IFwiUlwiLFxuICAgIMOFwpY6IFwiUlwiLFxuICAgIMOhwrnCmDogXCJSXCIsXG4gICAgw6HCucKaOiBcIlJcIixcbiAgICDDocK5wpw6IFwiUlwiLFxuICAgIMOIwpA6IFwiUlwiLFxuICAgIMOIwpI6IFwiUlwiLFxuICAgIMOhwrnCnjogXCJSXCIsXG4gICAgw4nCjDogXCJSXCIsXG4gICAgw6LCscKkOiBcIlJcIixcbiAgICDDqsKcwr46IFwiQ1wiLFxuICAgIMOGwo46IFwiRVwiLFxuICAgIMOFwpo6IFwiU1wiLFxuICAgIMOhwrnCpDogXCJTXCIsXG4gICAgw4XCoDogXCJTXCIsXG4gICAgw6HCucKmOiBcIlNcIixcbiAgICDDhcKeOiBcIlNcIixcbiAgICDDhcKcOiBcIlNcIixcbiAgICDDiMKYOiBcIlNcIixcbiAgICDDocK5wqA6IFwiU1wiLFxuICAgIMOhwrnCojogXCJTXCIsXG4gICAgw6HCucKoOiBcIlNcIixcbiAgICDDocK6wp46IFwiU1NcIixcbiAgICDDhcKkOiBcIlRcIixcbiAgICDDhcKiOiBcIlRcIixcbiAgICDDocK5wrA6IFwiVFwiLFxuICAgIMOIwpo6IFwiVFwiLFxuICAgIMOIwr46IFwiVFwiLFxuICAgIMOhwrnCqjogXCJUXCIsXG4gICAgw6HCucKsOiBcIlRcIixcbiAgICDDhsKsOiBcIlRcIixcbiAgICDDocK5wq46IFwiVFwiLFxuICAgIMOGwq46IFwiVFwiLFxuICAgIMOFwqY6IFwiVFwiLFxuICAgIMOiwrHCrzogXCJBXCIsXG4gICAgw6rCnsKAOiBcIkxcIixcbiAgICDDhsKcOiBcIk1cIixcbiAgICDDicKFOiBcIlZcIixcbiAgICDDqsKcwqg6IFwiVFpcIixcbiAgICDDg8KaOiBcIlVcIixcbiAgICDDhcKsOiBcIlVcIixcbiAgICDDh8KTOiBcIlVcIixcbiAgICDDg8KbOiBcIlVcIixcbiAgICDDocK5wrY6IFwiVVwiLFxuICAgIMODwpw6IFwiVVwiLFxuICAgIMOHwpc6IFwiVVwiLFxuICAgIMOHwpk6IFwiVVwiLFxuICAgIMOHwps6IFwiVVwiLFxuICAgIMOHwpU6IFwiVVwiLFxuICAgIMOhwrnCsjogXCJVXCIsXG4gICAgw6HCu8KkOiBcIlVcIixcbiAgICDDhcKwOiBcIlVcIixcbiAgICDDiMKUOiBcIlVcIixcbiAgICDDg8KZOiBcIlVcIixcbiAgICDDocK7wqY6IFwiVVwiLFxuICAgIMOGwq86IFwiVVwiLFxuICAgIMOhwrvCqDogXCJVXCIsXG4gICAgw6HCu8KwOiBcIlVcIixcbiAgICDDocK7wqo6IFwiVVwiLFxuICAgIMOhwrvCrDogXCJVXCIsXG4gICAgw6HCu8KuOiBcIlVcIixcbiAgICDDiMKWOiBcIlVcIixcbiAgICDDhcKqOiBcIlVcIixcbiAgICDDocK5wro6IFwiVVwiLFxuICAgIMOFwrI6IFwiVVwiLFxuICAgIMOFwq46IFwiVVwiLFxuICAgIMOFwqg6IFwiVVwiLFxuICAgIMOhwrnCuDogXCJVXCIsXG4gICAgw6HCucK0OiBcIlVcIixcbiAgICDDqsKdwp46IFwiVlwiLFxuICAgIMOhwrnCvjogXCJWXCIsXG4gICAgw4bCsjogXCJWXCIsXG4gICAgw6HCucK8OiBcIlZcIixcbiAgICDDqsKdwqA6IFwiVllcIixcbiAgICDDocK6woI6IFwiV1wiLFxuICAgIMOFwrQ6IFwiV1wiLFxuICAgIMOhwrrChDogXCJXXCIsXG4gICAgw6HCusKGOiBcIldcIixcbiAgICDDocK6wog6IFwiV1wiLFxuICAgIMOhwrrCgDogXCJXXCIsXG4gICAgw6LCscKyOiBcIldcIixcbiAgICDDocK6wow6IFwiWFwiLFxuICAgIMOhwrrCijogXCJYXCIsXG4gICAgw4PCnTogXCJZXCIsXG4gICAgw4XCtjogXCJZXCIsXG4gICAgw4XCuDogXCJZXCIsXG4gICAgw6HCusKOOiBcIllcIixcbiAgICDDocK7wrQ6IFwiWVwiLFxuICAgIMOhwrvCsjogXCJZXCIsXG4gICAgw4bCszogXCJZXCIsXG4gICAgw6HCu8K2OiBcIllcIixcbiAgICDDocK7wr46IFwiWVwiLFxuICAgIMOIwrI6IFwiWVwiLFxuICAgIMOJwo46IFwiWVwiLFxuICAgIMOhwrvCuDogXCJZXCIsXG4gICAgw4XCuTogXCJaXCIsXG4gICAgw4XCvTogXCJaXCIsXG4gICAgw6HCusKQOiBcIlpcIixcbiAgICDDosKxwqs6IFwiWlwiLFxuICAgIMOFwrs6IFwiWlwiLFxuICAgIMOhwrrCkjogXCJaXCIsXG4gICAgw4jCpDogXCJaXCIsXG4gICAgw6HCusKUOiBcIlpcIixcbiAgICDDhsK1OiBcIlpcIixcbiAgICDDhMKyOiBcIklKXCIsXG4gICAgw4XCkjogXCJPRVwiLFxuICAgIMOhwrTCgDogXCJBXCIsXG4gICAgw6HCtMKBOiBcIkFFXCIsXG4gICAgw4rCmTogXCJCXCIsXG4gICAgw6HCtMKDOiBcIkJcIixcbiAgICDDocK0woQ6IFwiQ1wiLFxuICAgIMOhwrTChTogXCJEXCIsXG4gICAgw6HCtMKHOiBcIkVcIixcbiAgICDDqsKcwrA6IFwiRlwiLFxuICAgIMOJwqI6IFwiR1wiLFxuICAgIMOKwps6IFwiR1wiLFxuICAgIMOKwpw6IFwiSFwiLFxuICAgIMOJwqo6IFwiSVwiLFxuICAgIMOKwoE6IFwiUlwiLFxuICAgIMOhwrTCijogXCJKXCIsXG4gICAgw6HCtMKLOiBcIktcIixcbiAgICDDisKfOiBcIkxcIixcbiAgICDDocK0wow6IFwiTFwiLFxuICAgIMOhwrTCjTogXCJNXCIsXG4gICAgw4nCtDogXCJOXCIsXG4gICAgw6HCtMKPOiBcIk9cIixcbiAgICDDicK2OiBcIk9FXCIsXG4gICAgw6HCtMKQOiBcIk9cIixcbiAgICDDocK0wpU6IFwiT1VcIixcbiAgICDDocK0wpg6IFwiUFwiLFxuICAgIMOKwoA6IFwiUlwiLFxuICAgIMOhwrTCjjogXCJOXCIsXG4gICAgw6HCtMKZOiBcIlJcIixcbiAgICDDqsKcwrE6IFwiU1wiLFxuICAgIMOhwrTCmzogXCJUXCIsXG4gICAgw6LCscK7OiBcIkVcIixcbiAgICDDocK0wpo6IFwiUlwiLFxuICAgIMOhwrTCnDogXCJVXCIsXG4gICAgw6HCtMKgOiBcIlZcIixcbiAgICDDocK0wqE6IFwiV1wiLFxuICAgIMOKwo86IFwiWVwiLFxuICAgIMOhwrTCojogXCJaXCIsXG4gICAgw4PCoTogXCJhXCIsXG4gICAgw4TCgzogXCJhXCIsXG4gICAgw6HCusKvOiBcImFcIixcbiAgICDDocK6wrc6IFwiYVwiLFxuICAgIMOhwrrCsTogXCJhXCIsXG4gICAgw6HCusKzOiBcImFcIixcbiAgICDDocK6wrU6IFwiYVwiLFxuICAgIMOHwo46IFwiYVwiLFxuICAgIMODwqI6IFwiYVwiLFxuICAgIMOhwrrCpTogXCJhXCIsXG4gICAgw6HCusKtOiBcImFcIixcbiAgICDDocK6wqc6IFwiYVwiLFxuICAgIMOhwrrCqTogXCJhXCIsXG4gICAgw6HCusKrOiBcImFcIixcbiAgICDDg8KkOiBcImFcIixcbiAgICDDh8KfOiBcImFcIixcbiAgICDDiMKnOiBcImFcIixcbiAgICDDh8KhOiBcImFcIixcbiAgICDDocK6wqE6IFwiYVwiLFxuICAgIMOIwoE6IFwiYVwiLFxuICAgIMODwqA6IFwiYVwiLFxuICAgIMOhwrrCozogXCJhXCIsXG4gICAgw4jCgzogXCJhXCIsXG4gICAgw4TCgTogXCJhXCIsXG4gICAgw4TChTogXCJhXCIsXG4gICAgw6HCtsKPOiBcImFcIixcbiAgICDDocK6wpo6IFwiYVwiLFxuICAgIMODwqU6IFwiYVwiLFxuICAgIMOHwrs6IFwiYVwiLFxuICAgIMOhwrjCgTogXCJhXCIsXG4gICAgw6LCscKlOiBcImFcIixcbiAgICDDg8KjOiBcImFcIixcbiAgICDDqsKcwrM6IFwiYWFcIixcbiAgICDDg8KmOiBcImFlXCIsXG4gICAgw4fCvTogXCJhZVwiLFxuICAgIMOHwqM6IFwiYWVcIixcbiAgICDDqsKcwrU6IFwiYW9cIixcbiAgICDDqsKcwrc6IFwiYXVcIixcbiAgICDDqsKcwrk6IFwiYXZcIixcbiAgICDDqsKcwrs6IFwiYXZcIixcbiAgICDDqsKcwr06IFwiYXlcIixcbiAgICDDocK4woM6IFwiYlwiLFxuICAgIMOhwrjChTogXCJiXCIsXG4gICAgw4nCkzogXCJiXCIsXG4gICAgw6HCuMKHOiBcImJcIixcbiAgICDDocK1wqw6IFwiYlwiLFxuICAgIMOhwrbCgDogXCJiXCIsXG4gICAgw4bCgDogXCJiXCIsXG4gICAgw4bCgzogXCJiXCIsXG4gICAgw4nCtTogXCJvXCIsXG4gICAgw4TChzogXCJjXCIsXG4gICAgw4TCjTogXCJjXCIsXG4gICAgw4PCpzogXCJjXCIsXG4gICAgw6HCuMKJOiBcImNcIixcbiAgICDDhMKJOiBcImNcIixcbiAgICDDicKVOiBcImNcIixcbiAgICDDhMKLOiBcImNcIixcbiAgICDDhsKIOiBcImNcIixcbiAgICDDiMK8OiBcImNcIixcbiAgICDDhMKPOiBcImRcIixcbiAgICDDocK4wpE6IFwiZFwiLFxuICAgIMOhwrjCkzogXCJkXCIsXG4gICAgw4jCoTogXCJkXCIsXG4gICAgw6HCuMKLOiBcImRcIixcbiAgICDDocK4wo06IFwiZFwiLFxuICAgIMOJwpc6IFwiZFwiLFxuICAgIMOhwrbCkTogXCJkXCIsXG4gICAgw6HCuMKPOiBcImRcIixcbiAgICDDocK1wq06IFwiZFwiLFxuICAgIMOhwrbCgTogXCJkXCIsXG4gICAgw4TCkTogXCJkXCIsXG4gICAgw4nCljogXCJkXCIsXG4gICAgw4bCjDogXCJkXCIsXG4gICAgw4TCsTogXCJpXCIsXG4gICAgw4jCtzogXCJqXCIsXG4gICAgw4nCnzogXCJqXCIsXG4gICAgw4rChDogXCJqXCIsXG4gICAgw4fCszogXCJkelwiLFxuICAgIMOHwoY6IFwiZHpcIixcbiAgICDDg8KpOiBcImVcIixcbiAgICDDhMKVOiBcImVcIixcbiAgICDDhMKbOiBcImVcIixcbiAgICDDiMKpOiBcImVcIixcbiAgICDDocK4wp06IFwiZVwiLFxuICAgIMODwqo6IFwiZVwiLFxuICAgIMOhwrrCvzogXCJlXCIsXG4gICAgw6HCu8KHOiBcImVcIixcbiAgICDDocK7woE6IFwiZVwiLFxuICAgIMOhwrvCgzogXCJlXCIsXG4gICAgw6HCu8KFOiBcImVcIixcbiAgICDDocK4wpk6IFwiZVwiLFxuICAgIMODwqs6IFwiZVwiLFxuICAgIMOEwpc6IFwiZVwiLFxuICAgIMOhwrrCuTogXCJlXCIsXG4gICAgw4jChTogXCJlXCIsXG4gICAgw4PCqDogXCJlXCIsXG4gICAgw6HCusK7OiBcImVcIixcbiAgICDDiMKHOiBcImVcIixcbiAgICDDhMKTOiBcImVcIixcbiAgICDDocK4wpc6IFwiZVwiLFxuICAgIMOhwrjClTogXCJlXCIsXG4gICAgw6LCscK4OiBcImVcIixcbiAgICDDhMKZOiBcImVcIixcbiAgICDDocK2wpI6IFwiZVwiLFxuICAgIMOJwoc6IFwiZVwiLFxuICAgIMOhwrrCvTogXCJlXCIsXG4gICAgw6HCuMKbOiBcImVcIixcbiAgICDDqsKdwqs6IFwiZXRcIixcbiAgICDDocK4wp86IFwiZlwiLFxuICAgIMOGwpI6IFwiZlwiLFxuICAgIMOhwrXCrjogXCJmXCIsXG4gICAgw6HCtsKCOiBcImZcIixcbiAgICDDh8K1OiBcImdcIixcbiAgICDDhMKfOiBcImdcIixcbiAgICDDh8KnOiBcImdcIixcbiAgICDDhMKjOiBcImdcIixcbiAgICDDhMKdOiBcImdcIixcbiAgICDDhMKhOiBcImdcIixcbiAgICDDicKgOiBcImdcIixcbiAgICDDocK4wqE6IFwiZ1wiLFxuICAgIMOhwrbCgzogXCJnXCIsXG4gICAgw4fCpTogXCJnXCIsXG4gICAgw6HCuMKrOiBcImhcIixcbiAgICDDiMKfOiBcImhcIixcbiAgICDDocK4wqk6IFwiaFwiLFxuICAgIMOEwqU6IFwiaFwiLFxuICAgIMOiwrHCqDogXCJoXCIsXG4gICAgw6HCuMKnOiBcImhcIixcbiAgICDDocK4wqM6IFwiaFwiLFxuICAgIMOhwrjCpTogXCJoXCIsXG4gICAgw4nCpjogXCJoXCIsXG4gICAgw6HCusKWOiBcImhcIixcbiAgICDDhMKnOiBcImhcIixcbiAgICDDhsKVOiBcImh2XCIsXG4gICAgw4PCrTogXCJpXCIsXG4gICAgw4TCrTogXCJpXCIsXG4gICAgw4fCkDogXCJpXCIsXG4gICAgw4PCrjogXCJpXCIsXG4gICAgw4PCrzogXCJpXCIsXG4gICAgw6HCuMKvOiBcImlcIixcbiAgICDDocK7wos6IFwiaVwiLFxuICAgIMOIwok6IFwiaVwiLFxuICAgIMODwqw6IFwiaVwiLFxuICAgIMOhwrvCiTogXCJpXCIsXG4gICAgw4jCizogXCJpXCIsXG4gICAgw4TCqzogXCJpXCIsXG4gICAgw4TCrzogXCJpXCIsXG4gICAgw6HCtsKWOiBcImlcIixcbiAgICDDicKoOiBcImlcIixcbiAgICDDhMKpOiBcImlcIixcbiAgICDDocK4wq06IFwiaVwiLFxuICAgIMOqwp3CujogXCJkXCIsXG4gICAgw6rCncK8OiBcImZcIixcbiAgICDDocK1wrk6IFwiZ1wiLFxuICAgIMOqwp7CgzogXCJyXCIsXG4gICAgw6rCnsKFOiBcInNcIixcbiAgICDDqsKewoc6IFwidFwiLFxuICAgIMOqwp3CrTogXCJpc1wiLFxuICAgIMOHwrA6IFwialwiLFxuICAgIMOEwrU6IFwialwiLFxuICAgIMOKwp06IFwialwiLFxuICAgIMOJwok6IFwialwiLFxuICAgIMOhwrjCsTogXCJrXCIsXG4gICAgw4fCqTogXCJrXCIsXG4gICAgw4TCtzogXCJrXCIsXG4gICAgw6LCscKqOiBcImtcIixcbiAgICDDqsKdwoM6IFwia1wiLFxuICAgIMOhwrjCszogXCJrXCIsXG4gICAgw4bCmTogXCJrXCIsXG4gICAgw6HCuMK1OiBcImtcIixcbiAgICDDocK2woQ6IFwia1wiLFxuICAgIMOqwp3CgTogXCJrXCIsXG4gICAgw6rCncKFOiBcImtcIixcbiAgICDDhMK6OiBcImxcIixcbiAgICDDhsKaOiBcImxcIixcbiAgICDDicKsOiBcImxcIixcbiAgICDDhMK+OiBcImxcIixcbiAgICDDhMK8OiBcImxcIixcbiAgICDDocK4wr06IFwibFwiLFxuICAgIMOIwrQ6IFwibFwiLFxuICAgIMOhwrjCtzogXCJsXCIsXG4gICAgw6HCuMK5OiBcImxcIixcbiAgICDDosKxwqE6IFwibFwiLFxuICAgIMOqwp3CiTogXCJsXCIsXG4gICAgw6HCuMK7OiBcImxcIixcbiAgICDDhcKAOiBcImxcIixcbiAgICDDicKrOiBcImxcIixcbiAgICDDocK2woU6IFwibFwiLFxuICAgIMOJwq06IFwibFwiLFxuICAgIMOFwoI6IFwibFwiLFxuICAgIMOHwok6IFwibGpcIixcbiAgICDDhcK/OiBcInNcIixcbiAgICDDocK6wpw6IFwic1wiLFxuICAgIMOhwrrCmzogXCJzXCIsXG4gICAgw6HCusKdOiBcInNcIixcbiAgICDDocK4wr86IFwibVwiLFxuICAgIMOhwrnCgTogXCJtXCIsXG4gICAgw6HCucKDOiBcIm1cIixcbiAgICDDicKxOiBcIm1cIixcbiAgICDDocK1wq86IFwibVwiLFxuICAgIMOhwrbChjogXCJtXCIsXG4gICAgw4XChDogXCJuXCIsXG4gICAgw4XCiDogXCJuXCIsXG4gICAgw4XChjogXCJuXCIsXG4gICAgw6HCucKLOiBcIm5cIixcbiAgICDDiMK1OiBcIm5cIixcbiAgICDDocK5woU6IFwiblwiLFxuICAgIMOhwrnChzogXCJuXCIsXG4gICAgw4fCuTogXCJuXCIsXG4gICAgw4nCsjogXCJuXCIsXG4gICAgw6HCucKJOiBcIm5cIixcbiAgICDDhsKeOiBcIm5cIixcbiAgICDDocK1wrA6IFwiblwiLFxuICAgIMOhwrbChzogXCJuXCIsXG4gICAgw4nCszogXCJuXCIsXG4gICAgw4PCsTogXCJuXCIsXG4gICAgw4fCjDogXCJualwiLFxuICAgIMODwrM6IFwib1wiLFxuICAgIMOFwo86IFwib1wiLFxuICAgIMOHwpI6IFwib1wiLFxuICAgIMODwrQ6IFwib1wiLFxuICAgIMOhwrvCkTogXCJvXCIsXG4gICAgw6HCu8KZOiBcIm9cIixcbiAgICDDocK7wpM6IFwib1wiLFxuICAgIMOhwrvClTogXCJvXCIsXG4gICAgw6HCu8KXOiBcIm9cIixcbiAgICDDg8K2OiBcIm9cIixcbiAgICDDiMKrOiBcIm9cIixcbiAgICDDiMKvOiBcIm9cIixcbiAgICDDiMKxOiBcIm9cIixcbiAgICDDocK7wo06IFwib1wiLFxuICAgIMOFwpE6IFwib1wiLFxuICAgIMOIwo06IFwib1wiLFxuICAgIMODwrI6IFwib1wiLFxuICAgIMOhwrvCjzogXCJvXCIsXG4gICAgw4bCoTogXCJvXCIsXG4gICAgw6HCu8KbOiBcIm9cIixcbiAgICDDocK7wqM6IFwib1wiLFxuICAgIMOhwrvCnTogXCJvXCIsXG4gICAgw6HCu8KfOiBcIm9cIixcbiAgICDDocK7wqE6IFwib1wiLFxuICAgIMOIwo86IFwib1wiLFxuICAgIMOqwp3CizogXCJvXCIsXG4gICAgw6rCncKNOiBcIm9cIixcbiAgICDDosKxwro6IFwib1wiLFxuICAgIMOFwo06IFwib1wiLFxuICAgIMOhwrnCkzogXCJvXCIsXG4gICAgw6HCucKROiBcIm9cIixcbiAgICDDh8KrOiBcIm9cIixcbiAgICDDh8KtOiBcIm9cIixcbiAgICDDg8K4OiBcIm9cIixcbiAgICDDh8K/OiBcIm9cIixcbiAgICDDg8K1OiBcIm9cIixcbiAgICDDocK5wo06IFwib1wiLFxuICAgIMOhwrnCjzogXCJvXCIsXG4gICAgw4jCrTogXCJvXCIsXG4gICAgw4bCozogXCJvaVwiLFxuICAgIMOqwp3CjzogXCJvb1wiLFxuICAgIMOJwps6IFwiZVwiLFxuICAgIMOhwrbCkzogXCJlXCIsXG4gICAgw4nClDogXCJvXCIsXG4gICAgw6HCtsKXOiBcIm9cIixcbiAgICDDiMKjOiBcIm91XCIsXG4gICAgw6HCucKVOiBcInBcIixcbiAgICDDocK5wpc6IFwicFwiLFxuICAgIMOqwp3CkzogXCJwXCIsXG4gICAgw4bCpTogXCJwXCIsXG4gICAgw6HCtcKxOiBcInBcIixcbiAgICDDocK2wog6IFwicFwiLFxuICAgIMOqwp3ClTogXCJwXCIsXG4gICAgw6HCtcK9OiBcInBcIixcbiAgICDDqsKdwpE6IFwicFwiLFxuICAgIMOqwp3CmTogXCJxXCIsXG4gICAgw4rCoDogXCJxXCIsXG4gICAgw4nCizogXCJxXCIsXG4gICAgw6rCncKXOiBcInFcIixcbiAgICDDhcKVOiBcInJcIixcbiAgICDDhcKZOiBcInJcIixcbiAgICDDhcKXOiBcInJcIixcbiAgICDDocK5wpk6IFwiclwiLFxuICAgIMOhwrnCmzogXCJyXCIsXG4gICAgw6HCucKdOiBcInJcIixcbiAgICDDiMKROiBcInJcIixcbiAgICDDicK+OiBcInJcIixcbiAgICDDocK1wrM6IFwiclwiLFxuICAgIMOIwpM6IFwiclwiLFxuICAgIMOhwrnCnzogXCJyXCIsXG4gICAgw4nCvDogXCJyXCIsXG4gICAgw6HCtcKyOiBcInJcIixcbiAgICDDocK2wok6IFwiclwiLFxuICAgIMOJwo06IFwiclwiLFxuICAgIMOJwr06IFwiclwiLFxuICAgIMOiwobChDogXCJjXCIsXG4gICAgw6rCnMK/OiBcImNcIixcbiAgICDDicKYOiBcImVcIixcbiAgICDDicK/OiBcInJcIixcbiAgICDDhcKbOiBcInNcIixcbiAgICDDocK5wqU6IFwic1wiLFxuICAgIMOFwqE6IFwic1wiLFxuICAgIMOhwrnCpzogXCJzXCIsXG4gICAgw4XCnzogXCJzXCIsXG4gICAgw4XCnTogXCJzXCIsXG4gICAgw4jCmTogXCJzXCIsXG4gICAgw6HCucKhOiBcInNcIixcbiAgICDDocK5wqM6IFwic1wiLFxuICAgIMOhwrnCqTogXCJzXCIsXG4gICAgw4rCgjogXCJzXCIsXG4gICAgw6HCtcK0OiBcInNcIixcbiAgICDDocK2woo6IFwic1wiLFxuICAgIMOIwr86IFwic1wiLFxuICAgIMOJwqE6IFwiZ1wiLFxuICAgIMODwp86IFwic3NcIixcbiAgICDDocK0wpE6IFwib1wiLFxuICAgIMOhwrTCkzogXCJvXCIsXG4gICAgw6HCtMKdOiBcInVcIixcbiAgICDDhcKlOiBcInRcIixcbiAgICDDhcKjOiBcInRcIixcbiAgICDDocK5wrE6IFwidFwiLFxuICAgIMOIwps6IFwidFwiLFxuICAgIMOIwrY6IFwidFwiLFxuICAgIMOhwrrClzogXCJ0XCIsXG4gICAgw6LCscKmOiBcInRcIixcbiAgICDDocK5wqs6IFwidFwiLFxuICAgIMOhwrnCrTogXCJ0XCIsXG4gICAgw4bCrTogXCJ0XCIsXG4gICAgw6HCucKvOiBcInRcIixcbiAgICDDocK1wrU6IFwidFwiLFxuICAgIMOGwqs6IFwidFwiLFxuICAgIMOKwog6IFwidFwiLFxuICAgIMOFwqc6IFwidFwiLFxuICAgIMOhwrXCujogXCJ0aFwiLFxuICAgIMOJwpA6IFwiYVwiLFxuICAgIMOhwrTCgjogXCJhZVwiLFxuICAgIMOHwp06IFwiZVwiLFxuICAgIMOhwrXCtzogXCJnXCIsXG4gICAgw4nCpTogXCJoXCIsXG4gICAgw4rCrjogXCJoXCIsXG4gICAgw4rCrzogXCJoXCIsXG4gICAgw6HCtMKJOiBcImlcIixcbiAgICDDisKeOiBcImtcIixcbiAgICDDqsKewoE6IFwibFwiLFxuICAgIMOJwq86IFwibVwiLFxuICAgIMOJwrA6IFwibVwiLFxuICAgIMOhwrTClDogXCJvZVwiLFxuICAgIMOJwrk6IFwiclwiLFxuICAgIMOJwrs6IFwiclwiLFxuICAgIMOJwro6IFwiclwiLFxuICAgIMOiwrHCuTogXCJyXCIsXG4gICAgw4rChzogXCJ0XCIsXG4gICAgw4rCjDogXCJ2XCIsXG4gICAgw4rCjTogXCJ3XCIsXG4gICAgw4rCjjogXCJ5XCIsXG4gICAgw6rCnMKpOiBcInR6XCIsXG4gICAgw4PCujogXCJ1XCIsXG4gICAgw4XCrTogXCJ1XCIsXG4gICAgw4fClDogXCJ1XCIsXG4gICAgw4PCuzogXCJ1XCIsXG4gICAgw6HCucK3OiBcInVcIixcbiAgICDDg8K8OiBcInVcIixcbiAgICDDh8KYOiBcInVcIixcbiAgICDDh8KaOiBcInVcIixcbiAgICDDh8KcOiBcInVcIixcbiAgICDDh8KWOiBcInVcIixcbiAgICDDocK5wrM6IFwidVwiLFxuICAgIMOhwrvCpTogXCJ1XCIsXG4gICAgw4XCsTogXCJ1XCIsXG4gICAgw4jClTogXCJ1XCIsXG4gICAgw4PCuTogXCJ1XCIsXG4gICAgw6HCu8KnOiBcInVcIixcbiAgICDDhsKwOiBcInVcIixcbiAgICDDocK7wqk6IFwidVwiLFxuICAgIMOhwrvCsTogXCJ1XCIsXG4gICAgw6HCu8KrOiBcInVcIixcbiAgICDDocK7wq06IFwidVwiLFxuICAgIMOhwrvCrzogXCJ1XCIsXG4gICAgw4jClzogXCJ1XCIsXG4gICAgw4XCqzogXCJ1XCIsXG4gICAgw6HCucK7OiBcInVcIixcbiAgICDDhcKzOiBcInVcIixcbiAgICDDocK2wpk6IFwidVwiLFxuICAgIMOFwq86IFwidVwiLFxuICAgIMOFwqk6IFwidVwiLFxuICAgIMOhwrnCuTogXCJ1XCIsXG4gICAgw6HCucK1OiBcInVcIixcbiAgICDDocK1wqs6IFwidWVcIixcbiAgICDDqsKdwrg6IFwidW1cIixcbiAgICDDosKxwrQ6IFwidlwiLFxuICAgIMOqwp3CnzogXCJ2XCIsXG4gICAgw6HCucK/OiBcInZcIixcbiAgICDDisKLOiBcInZcIixcbiAgICDDocK2wow6IFwidlwiLFxuICAgIMOiwrHCsTogXCJ2XCIsXG4gICAgw6HCucK9OiBcInZcIixcbiAgICDDqsKdwqE6IFwidnlcIixcbiAgICDDocK6woM6IFwid1wiLFxuICAgIMOFwrU6IFwid1wiLFxuICAgIMOhwrrChTogXCJ3XCIsXG4gICAgw6HCusKHOiBcIndcIixcbiAgICDDocK6wok6IFwid1wiLFxuICAgIMOhwrrCgTogXCJ3XCIsXG4gICAgw6LCscKzOiBcIndcIixcbiAgICDDocK6wpg6IFwid1wiLFxuICAgIMOhwrrCjTogXCJ4XCIsXG4gICAgw6HCusKLOiBcInhcIixcbiAgICDDocK2wo06IFwieFwiLFxuICAgIMODwr06IFwieVwiLFxuICAgIMOFwrc6IFwieVwiLFxuICAgIMODwr86IFwieVwiLFxuICAgIMOhwrrCjzogXCJ5XCIsXG4gICAgw6HCu8K1OiBcInlcIixcbiAgICDDocK7wrM6IFwieVwiLFxuICAgIMOGwrQ6IFwieVwiLFxuICAgIMOhwrvCtzogXCJ5XCIsXG4gICAgw6HCu8K/OiBcInlcIixcbiAgICDDiMKzOiBcInlcIixcbiAgICDDocK6wpk6IFwieVwiLFxuICAgIMOJwo86IFwieVwiLFxuICAgIMOhwrvCuTogXCJ5XCIsXG4gICAgw4XCujogXCJ6XCIsXG4gICAgw4XCvjogXCJ6XCIsXG4gICAgw6HCusKROiBcInpcIixcbiAgICDDisKROiBcInpcIixcbiAgICDDosKxwqw6IFwielwiLFxuICAgIMOFwrw6IFwielwiLFxuICAgIMOhwrrCkzogXCJ6XCIsXG4gICAgw4jCpTogXCJ6XCIsXG4gICAgw6HCusKVOiBcInpcIixcbiAgICDDocK1wrY6IFwielwiLFxuICAgIMOhwrbCjjogXCJ6XCIsXG4gICAgw4rCkDogXCJ6XCIsXG4gICAgw4bCtjogXCJ6XCIsXG4gICAgw4nCgDogXCJ6XCIsXG4gICAgw6/CrMKAOiBcImZmXCIsXG4gICAgw6/CrMKDOiBcImZmaVwiLFxuICAgIMOvwqzChDogXCJmZmxcIixcbiAgICDDr8KswoE6IFwiZmlcIixcbiAgICDDr8KswoI6IFwiZmxcIixcbiAgICDDhMKzOiBcImlqXCIsXG4gICAgw4XCkzogXCJvZVwiLFxuICAgIMOvwqzChjogXCJzdFwiLFxuICAgIMOiwoLCkDogXCJhXCIsXG4gICAgw6LCgsKROiBcImVcIixcbiAgICDDocK1wqI6IFwiaVwiLFxuICAgIMOiwrHCvDogXCJqXCIsXG4gICAgw6LCgsKSOiBcIm9cIixcbiAgICDDocK1wqM6IFwiclwiLFxuICAgIMOhwrXCpDogXCJ1XCIsXG4gICAgw6HCtcKlOiBcInZcIixcbiAgICDDosKCwpM6IFwieFwiLFxuICB9O1xuXG4gIHRyYW5zZm9ybShpbnB1dDogc3RyaW5nLCBjaGFycz86IHN0cmluZyk6IHN0cmluZztcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGNoYXJzPzogc3RyaW5nKTogYW55O1xuXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIGNoYXJzOiBzdHJpbmcgPSBcIlxcXFxzXCIpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXh0KVxuICAgICAgPyB0ZXh0LnJlcGxhY2UoL1teQS1aYS16MC05XS9nLCAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sYXRpbk1hcFtrZXldIHx8IGtleTtcbiAgICAgICAgfSlcbiAgICAgIDogdGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImxpbmVzXCIgfSlcbmV4cG9ydCBjbGFzcyBMaW5lc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IGFueSwgY2hhcnM6IHN0cmluZyA9IFwiXFxcXHNcIik6IEFycmF5PHN0cmluZz4gfCBhbnkge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXh0KSA/IHRleHQucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpLnNwbGl0KFwiXFxuXCIpIDogdGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcInVuZGVyc2NvcmVcIiB9KVxuZXhwb3J0IGNsYXNzIFVuZGVyc2NvcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogc3RyaW5nLCBjaGFycz86IHN0cmluZyk6IHN0cmluZztcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIGNoYXJzPzogc3RyaW5nKTogYW55O1xuXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIGNoYXJzOiBzdHJpbmcgPSBcIlxcXFxzXCIpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXh0KVxuICAgICAgPyB0ZXh0XG4gICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiXCIpXG4gICAgICAgICAgLnJlcGxhY2UoL1tBLVpdL2csIChjOiBzdHJpbmcsIGs6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGsgPyBgXyR7Yy50b0xvd2VyQ2FzZSgpfWAgOiBjLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfSlcbiAgICAgIDogdGV4dDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcIm1hdGNoXCIgfSlcbmV4cG9ydCBjbGFzcyBNYXRjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgcGF0dGVybjogc3RyaW5nLCBmbGFncz86IHN0cmluZyk6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsO1xuICB0cmFuc2Zvcm08VD4odGV4dDogVCwgcGF0dGVybjogc3RyaW5nLCBmbGFncz86IHN0cmluZyk6IFQ7XG5cbiAgdHJhbnNmb3JtKHRleHQ6IGFueSwgcGF0dGVybjogc3RyaW5nLCBmbGFncz86IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKCFpc1N0cmluZyh0ZXh0KSkge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQubWF0Y2gobmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncykpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwidGVzdFwiIH0pXG5leHBvcnQgY2xhc3MgVGVzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgcGF0dGVybjogc3RyaW5nLCBmbGFncz86IHN0cmluZyk6IGJvb2xlYW47XG4gIHRyYW5zZm9ybTxUPih0ZXh0OiBULCBwYXR0ZXJuOiBzdHJpbmcsIGZsYWdzPzogc3RyaW5nKTogVDtcblxuICB0cmFuc2Zvcm0odGV4dDogYW55LCBwYXR0ZXJuOiBzdHJpbmcsIGZsYWdzPzogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoIWlzU3RyaW5nKHRleHQpKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncykudGVzdCh0ZXh0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImxwYWRcIiB9KVxuZXhwb3J0IGNsYXNzIExlZnRQYWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdHI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIHBhZENoYXJhY3Rlcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcge1xuICAgIGlmICghaXNTdHJpbmcoc3RyKSB8fCBzdHIubGVuZ3RoID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgIHN0ciA9IHBhZENoYXJhY3RlciArIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwicnBhZFwiIH0pXG5leHBvcnQgY2xhc3MgUmlnaHRQYWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdHI6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIgPSAxLCBwYWRDaGFyYWN0ZXI6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzU3RyaW5nKHN0cikgfHwgc3RyLmxlbmd0aCA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICBzdHIgPSBzdHIgKyBwYWRDaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcIndyYXBcIiB9KVxuZXhwb3J0IGNsYXNzIFdyYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzdHI6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgPSBcIlwiLCBzdWZmaXg6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICAgIGlmICghaXNTdHJpbmcoc3RyKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gKCEhcHJlZml4ICYmIGlzU3RyaW5nKHByZWZpeCkgPyBwcmVmaXggOiBcIlwiKSArIHN0ciArICghIXN1ZmZpeCAmJiBpc1N0cmluZyhzdWZmaXgpID8gc3VmZml4IDogXCJcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVjV29yZHNQaXBlIH0gZnJvbSBcIi4vdWN3b3Jkc1wiO1xuaW1wb3J0IHsgTGVmdFRyaW1QaXBlIH0gZnJvbSBcIi4vbHRyaW1cIjtcbmltcG9ydCB7IFJlcGVhdFBpcGUgfSBmcm9tIFwiLi9yZXBlYXRcIjtcbmltcG9ydCB7IFJpZ2h0VHJpbVBpcGUgfSBmcm9tIFwiLi9ydHJpbVwiO1xuaW1wb3J0IHsgU2NhblBpcGUgfSBmcm9tIFwiLi9zY2FuXCI7XG5pbXBvcnQgeyBTaG9ydGVuUGlwZSB9IGZyb20gXCIuL3Nob3J0ZW5cIjtcbmltcG9ydCB7IFN0cmlwVGFnc1BpcGUgfSBmcm9tIFwiLi9zdHJpcC10YWdzXCI7XG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gXCIuL3RyaW1cIjtcbmltcG9ydCB7IFVjRmlyc3RQaXBlIH0gZnJvbSBcIi4vdWNmaXJzdFwiO1xuaW1wb3J0IHsgU2x1Z2lmeVBpcGUgfSBmcm9tIFwiLi9zbHVnaWZ5XCI7XG5pbXBvcnQgeyBDYW1lbGl6ZVBpcGUgfSBmcm9tIFwiLi9jYW1lbGl6ZVwiO1xuaW1wb3J0IHsgTGF0aW5pc2VQaXBlIH0gZnJvbSBcIi4vbGF0aW5pc2VcIjtcbmltcG9ydCB7IExpbmVzUGlwZSB9IGZyb20gXCIuL2xpbmVzXCI7XG5pbXBvcnQgeyBVbmRlcnNjb3JlUGlwZSB9IGZyb20gXCIuL3VuZGVyc2NvcmVcIjtcbmltcG9ydCB7IE1hdGNoUGlwZSB9IGZyb20gXCIuL21hdGNoXCI7XG5pbXBvcnQgeyBUZXN0UGlwZSB9IGZyb20gXCIuL3Rlc3RcIjtcbmltcG9ydCB7IExlZnRQYWRQaXBlIH0gZnJvbSBcIi4vbHBhZFwiO1xuaW1wb3J0IHsgUmlnaHRQYWRQaXBlIH0gZnJvbSBcIi4vcnBhZFwiO1xuaW1wb3J0IHsgV3JhcFBpcGUgfSBmcm9tIFwiLi93cmFwXCI7XG5cbmV4cG9ydCBjb25zdCBTVFJJTkdfUElQRVMgPSBbXG4gIExlZnRUcmltUGlwZSxcbiAgUmVwZWF0UGlwZSxcbiAgUmlnaHRUcmltUGlwZSxcbiAgU2NhblBpcGUsXG4gIFNob3J0ZW5QaXBlLFxuICBTdHJpcFRhZ3NQaXBlLFxuICBUcmltUGlwZSxcbiAgVWNGaXJzdFBpcGUsXG4gIFVjV29yZHNQaXBlLFxuICBTbHVnaWZ5UGlwZSxcbiAgQ2FtZWxpemVQaXBlLFxuICBMYXRpbmlzZVBpcGUsXG4gIExpbmVzUGlwZSxcbiAgVW5kZXJzY29yZVBpcGUsXG4gIE1hdGNoUGlwZSxcbiAgVGVzdFBpcGUsXG4gIExlZnRQYWRQaXBlLFxuICBSaWdodFBhZFBpcGUsXG4gIFdyYXBQaXBlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBTVFJJTkdfUElQRVMsXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBTVFJJTkdfUElQRVMsXG59KVxuZXhwb3J0IGNsYXNzIE5nU3RyaW5nUGlwZXNNb2R1bGUge31cblxuZXhwb3J0IHsgVWNXb3Jkc1BpcGUgfSBmcm9tIFwiLi91Y3dvcmRzXCI7XG5leHBvcnQgeyBMZWZ0VHJpbVBpcGUgfSBmcm9tIFwiLi9sdHJpbVwiO1xuZXhwb3J0IHsgUmVwZWF0UGlwZSB9IGZyb20gXCIuL3JlcGVhdFwiO1xuZXhwb3J0IHsgUmlnaHRUcmltUGlwZSB9IGZyb20gXCIuL3J0cmltXCI7XG5leHBvcnQgeyBTY2FuUGlwZSB9IGZyb20gXCIuL3NjYW5cIjtcbmV4cG9ydCB7IFNob3J0ZW5QaXBlIH0gZnJvbSBcIi4vc2hvcnRlblwiO1xuZXhwb3J0IHsgU3RyaXBUYWdzUGlwZSB9IGZyb20gXCIuL3N0cmlwLXRhZ3NcIjtcbmV4cG9ydCB7IFRyaW1QaXBlIH0gZnJvbSBcIi4vdHJpbVwiO1xuZXhwb3J0IHsgVWNGaXJzdFBpcGUgfSBmcm9tIFwiLi91Y2ZpcnN0XCI7XG5leHBvcnQgeyBTbHVnaWZ5UGlwZSB9IGZyb20gXCIuL3NsdWdpZnlcIjtcbmV4cG9ydCB7IENhbWVsaXplUGlwZSB9IGZyb20gXCIuL2NhbWVsaXplXCI7XG5leHBvcnQgeyBMYXRpbmlzZVBpcGUgfSBmcm9tIFwiLi9sYXRpbmlzZVwiO1xuZXhwb3J0IHsgTGluZXNQaXBlIH0gZnJvbSBcIi4vbGluZXNcIjtcbmV4cG9ydCB7IFVuZGVyc2NvcmVQaXBlIH0gZnJvbSBcIi4vdW5kZXJzY29yZVwiO1xuZXhwb3J0IHsgTWF0Y2hQaXBlIH0gZnJvbSBcIi4vbWF0Y2hcIjtcbmV4cG9ydCB7IFRlc3RQaXBlIH0gZnJvbSBcIi4vdGVzdFwiO1xuZXhwb3J0IHsgTGVmdFBhZFBpcGUgfSBmcm9tIFwiLi9scGFkXCI7XG5leHBvcnQgeyBSaWdodFBhZFBpcGUgfSBmcm9tIFwiLi9ycGFkXCI7XG5leHBvcnQgeyBXcmFwUGlwZSB9IGZyb20gXCIuL3dyYXBcIjtcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwibWF4XCIgfSlcbmV4cG9ydCBjbGFzcyBNYXhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShhcnI6IGFueSk6IG51bWJlciB8IG51bWJlcltdIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gTWF0aC5tYXgoLi4uYXJyKSA6IGFycjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJtaW5cIiB9KVxuZXhwb3J0IGNsYXNzIE1pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGFycjogYW55KTogbnVtYmVyIHwgbnVtYmVyW10ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBNYXRoLm1pbiguLi5hcnIpIDogYXJyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcInBlcmNlbnRhZ2VcIiB9KVxuZXhwb3J0IGNsYXNzIFBlcmNlbnRhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShudW06IG51bWJlciwgdG90YWw/OiBudW1iZXIsIGZsb29yPzogYm9vbGVhbik6IG51bWJlcjtcbiAgdHJhbnNmb3JtPFQ+KG51bTogVCwgdG90YWw/OiBudW1iZXIsIGZsb29yPzogYm9vbGVhbik6IFQ7XG5cbiAgdHJhbnNmb3JtKG51bTogYW55LCB0b3RhbDogbnVtYmVyID0gMTAwLCBmbG9vcjogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICBjb25zdCBwZXJjZW50ID0gKG51bSAqIDEwMCkgLyB0b3RhbDtcblxuICAgIHJldHVybiBmbG9vciA/IE1hdGguZmxvb3IocGVyY2VudCkgOiBwZXJjZW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcInN1bVwiIH0pXG5leHBvcnQgY2xhc3MgU3VtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0obnVtOiBhbnlbXSk6IG51bWJlcjtcbiAgdHJhbnNmb3JtPFQ+KG51bTogYW55KTogVDtcblxuICB0cmFuc2Zvcm0oYXJyOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIucmVkdWNlKChzdW0sIGN1cnIpID0+IHN1bSArIGN1cnIsIDApIDogYXJyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcImZsb29yXCIgfSlcbmV4cG9ydCBjbGFzcyBGbG9vclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG51bTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgIGlmIChwcmVjaXNpb24gPD0gMCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aG8gPSAxMCAqKiBwcmVjaXNpb247XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihudW0gKiB0aG8pIC8gdGhvO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGFwcGx5UHJlY2lzaW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwicm91bmRcIiB9KVxuZXhwb3J0IGNsYXNzIFJvdW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0obnVtOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGFwcGx5UHJlY2lzaW9uKG51bSwgcHJlY2lzaW9uKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJzcXJ0XCIgfSlcbmV4cG9ydCBjbGFzcyBTcXJ0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0obnVtOiBudW1iZXIpOiBudW1iZXI7XG4gIHRyYW5zZm9ybTxUPihudW06IFQpOiBUO1xuXG4gIHRyYW5zZm9ybShudW06IGFueSk6IGFueSB7XG4gICAgcmV0dXJuICFpc05hTihudW0pID8gTWF0aC5zcXJ0KG51bSkgOiBudW07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwicG93XCIgfSlcbmV4cG9ydCBjbGFzcyBQb3dlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG51bTogbnVtYmVyLCBwb3dlcj86IG51bWJlcik6IG51bWJlcjtcbiAgdHJhbnNmb3JtKG51bTogYW55LCBwb3dlcj86IG51bWJlcik6IGFueTtcblxuICB0cmFuc2Zvcm0obnVtOiBhbnksIHBvd2VyOiBudW1iZXIgPSAyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gIWlzTmFOKG51bSkgPyBudW0gKiogcG93ZXIgOiBudW07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwiY2VpbFwiIH0pXG5leHBvcnQgY2xhc3MgQ2VpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG51bTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgIGlmIChwcmVjaXNpb24gPD0gMCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRobyA9IDEwICoqIHByZWNpc2lvbjtcblxuICAgIHJldHVybiBNYXRoLmNlaWwobnVtICogdGhvKSAvIHRobztcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImRlZ3JlZXNcIiB9KVxuZXhwb3J0IGNsYXNzIERlZ3JlZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICghaXNOdW1iZXJGaW5pdGUocmFkaWFucykpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgYXBwbHlQcmVjaXNpb24sIGlzTnVtYmVyRmluaXRlLCBpc1VuZGVmaW5lZCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImJ5dGVzXCIgfSlcbmV4cG9ydCBjbGFzcyBCeXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSBkaWN0aW9uYXJ5OiBBcnJheTx7IG1heDogbnVtYmVyOyB0eXBlOiBzdHJpbmcgfT4gPSBbXG4gICAgeyBtYXg6IDEwMjQsIHR5cGU6IFwiQlwiIH0sXG4gICAgeyBtYXg6IDEwNDg1NzYsIHR5cGU6IFwiS0JcIiB9LFxuICAgIHsgbWF4OiAxMDczNzQxODI0LCB0eXBlOiBcIk1CXCIgfSxcbiAgICB7IG1heDogMS4wOTk1MTE2ZTEyLCB0eXBlOiBcIkdCXCIgfSxcbiAgXTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgcHJlY2lzaW9uPzogbnVtYmVyIHwgdW5kZWZpbmVkKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICBpZiAoIWlzTnVtYmVyRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLmRpY3Rpb25hcnkuZmluZChkID0+IHZhbHVlIDwgZC5tYXgpIHx8IHRoaXMuZGljdGlvbmFyeVt0aGlzLmRpY3Rpb25hcnkubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgY2FsYyA9IHZhbHVlIC8gKGZvcm1hdC5tYXggLyAxMDI0KTtcbiAgICBjb25zdCBudW0gPSBpc1VuZGVmaW5lZChwcmVjaXNpb24pID8gY2FsYyA6IGFwcGx5UHJlY2lzaW9uKGNhbGMsIHByZWNpc2lvbik7XG5cbiAgICByZXR1cm4gYCR7bnVtfSAke2Zvcm1hdC50eXBlfWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNOdW1iZXJGaW5pdGUgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJyYWRpYW5zXCIgfSlcbmV4cG9ydCBjbGFzcyBSYWRpYW5zUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGVncmVlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIWlzTnVtYmVyRmluaXRlKGRlZ3JlZXMpKSB7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHJldHVybiAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXhQaXBlIH0gZnJvbSBcIi4vbWF4XCI7XG5pbXBvcnQgeyBNaW5QaXBlIH0gZnJvbSBcIi4vbWluXCI7XG5pbXBvcnQgeyBQZXJjZW50YWdlUGlwZSB9IGZyb20gXCIuL3BlcmNlbnRhZ2VcIjtcbmltcG9ydCB7IFN1bVBpcGUgfSBmcm9tIFwiLi9zdW1cIjtcbmltcG9ydCB7IEZsb29yUGlwZSB9IGZyb20gXCIuL2Zsb29yXCI7XG5pbXBvcnQgeyBSb3VuZFBpcGUgfSBmcm9tIFwiLi9yb3VuZFwiO1xuaW1wb3J0IHsgU3FydFBpcGUgfSBmcm9tIFwiLi9zcXJ0XCI7XG5pbXBvcnQgeyBQb3dlclBpcGUgfSBmcm9tIFwiLi9wb3dcIjtcbmltcG9ydCB7IENlaWxQaXBlIH0gZnJvbSBcIi4vY2VpbFwiO1xuaW1wb3J0IHsgRGVncmVlc1BpcGUgfSBmcm9tIFwiLi9kZWdyZWVzXCI7XG5pbXBvcnQgeyBCeXRlc1BpcGUgfSBmcm9tIFwiLi9ieXRlc1wiO1xuaW1wb3J0IHsgUmFkaWFuc1BpcGUgfSBmcm9tIFwiLi9yYWRpYW5zXCI7XG5cbmV4cG9ydCBjb25zdCBNQVRIX1BJUEVTID0gW1xuICBNYXhQaXBlLFxuICBNaW5QaXBlLFxuICBQZXJjZW50YWdlUGlwZSxcbiAgU3VtUGlwZSxcbiAgRmxvb3JQaXBlLFxuICBSb3VuZFBpcGUsXG4gIFNxcnRQaXBlLFxuICBQb3dlclBpcGUsXG4gIENlaWxQaXBlLFxuICBEZWdyZWVzUGlwZSxcbiAgQnl0ZXNQaXBlLFxuICBSYWRpYW5zUGlwZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogTUFUSF9QSVBFUyxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IE1BVEhfUElQRVMsXG59KVxuZXhwb3J0IGNsYXNzIE5nTWF0aFBpcGVzTW9kdWxlIHt9XG5cbmV4cG9ydCB7IE1heFBpcGUgfSBmcm9tIFwiLi9tYXhcIjtcbmV4cG9ydCB7IE1pblBpcGUgfSBmcm9tIFwiLi9taW5cIjtcbmV4cG9ydCB7IFBlcmNlbnRhZ2VQaXBlIH0gZnJvbSBcIi4vcGVyY2VudGFnZVwiO1xuZXhwb3J0IHsgU3VtUGlwZSB9IGZyb20gXCIuL3N1bVwiO1xuZXhwb3J0IHsgRmxvb3JQaXBlIH0gZnJvbSBcIi4vZmxvb3JcIjtcbmV4cG9ydCB7IFJvdW5kUGlwZSB9IGZyb20gXCIuL3JvdW5kXCI7XG5leHBvcnQgeyBTcXJ0UGlwZSB9IGZyb20gXCIuL3NxcnRcIjtcbmV4cG9ydCB7IFBvd2VyUGlwZSB9IGZyb20gXCIuL3Bvd1wiO1xuZXhwb3J0IHsgQ2VpbFBpcGUgfSBmcm9tIFwiLi9jZWlsXCI7XG5leHBvcnQgeyBEZWdyZWVzUGlwZSB9IGZyb20gXCIuL2RlZ3JlZXNcIjtcbmV4cG9ydCB7IEJ5dGVzUGlwZSB9IGZyb20gXCIuL2J5dGVzXCI7XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwiaXNEZWZpbmVkXCIgfSlcbmV4cG9ydCBjbGFzcyBJc0RlZmluZWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwiaXNOdWxsXCIgfSlcbmV4cG9ydCBjbGFzcyBJc051bGxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlucHV0ID09PSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwiaXNVbmRlZmluZWRcIiB9KVxuZXhwb3J0IGNsYXNzIElzVW5kZWZpbmVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc1N0cmluZ1wiIH0pXG5leHBvcnQgY2xhc3MgSXNTdHJpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuXG5AUGlwZSh7IG5hbWU6IFwiaXNGdW5jdGlvblwiIH0pXG5leHBvcnQgY2xhc3MgSXNGdW5jdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc051bWJlclwiIH0pXG5leHBvcnQgY2xhc3MgSXNOdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTnVtYmVyKGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc0FycmF5XCIgfSlcbmV4cG9ydCBjbGFzcyBJc0FycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcblxuQFBpcGUoeyBuYW1lOiBcImlzT2JqZWN0XCIgfSlcbmV4cG9ydCBjbGFzcyBJc09iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNPYmplY3QoaW5wdXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcImlzR3JlYXRlckVxdWFsVGhhblwiIH0pXG5leHBvcnQgY2xhc3MgSXNHcmVhdGVyRXF1YWxUaGFuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgb3RoZXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCA+PSBvdGhlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc0dyZWF0ZXJUaGFuXCIgfSlcbmV4cG9ydCBjbGFzcyBJc0dyZWF0ZXJUaGFuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgb3RoZXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCA+IG90aGVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcImlzTGVzc0VxdWFsVGhhblwiIH0pXG5leHBvcnQgY2xhc3MgSXNMZXNzRXF1YWxUaGFuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgb3RoZXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCA8PSBvdGhlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc0VxdWFsVG9cIiB9KVxuZXhwb3J0IGNsYXNzIElzRXF1YWxUb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIG90aGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgIHJldHVybiBpbnB1dCA9PSBvdGhlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc05vdEVxdWFsVG9cIiB9KVxuZXhwb3J0IGNsYXNzIElzTm90RXF1YWxUb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIG90aGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgIHJldHVybiBpbnB1dCAhPSBvdGhlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBQaXBlKHsgbmFtZTogXCJpc0lkZW50aWNhbFRvXCIgfSlcbmV4cG9ydCBjbGFzcyBJc0lkZW50aWNhbFRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgb3RoZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbnB1dCA9PT0gb3RoZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7IG5hbWU6IFwiaXNOb3RJZGVudGljYWxUb1wiIH0pXG5leHBvcnQgY2xhc3MgSXNOb3RJZGVudGljYWxUb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIG90aGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5wdXQgIT09IG90aGVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQFBpcGUoeyBuYW1lOiBcImlzTGVzc1RoYW5cIiB9KVxuZXhwb3J0IGNsYXNzIElzTGVzc1RoYW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogbnVtYmVyLCBvdGhlcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlucHV0IDwgb3RoZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElzRGVmaW5lZFBpcGUgfSBmcm9tIFwiLi9pcy1kZWZpbmVkXCI7XG5pbXBvcnQgeyBJc051bGxQaXBlIH0gZnJvbSBcIi4vaXMtbnVsbFwiO1xuaW1wb3J0IHsgSXNVbmRlZmluZWRQaXBlIH0gZnJvbSBcIi4vaXMtdW5kZWZpbmVkXCI7XG5pbXBvcnQgeyBJc1N0cmluZ1BpcGUgfSBmcm9tIFwiLi9pcy1zdHJpbmdcIjtcbmltcG9ydCB7IElzRnVuY3Rpb25QaXBlIH0gZnJvbSBcIi4vaXMtZnVuY3Rpb25cIjtcbmltcG9ydCB7IElzTnVtYmVyUGlwZSB9IGZyb20gXCIuL2lzLW51bWJlclwiO1xuaW1wb3J0IHsgSXNBcnJheVBpcGUgfSBmcm9tIFwiLi9pcy1hcnJheVwiO1xuaW1wb3J0IHsgSXNPYmplY3RQaXBlIH0gZnJvbSBcIi4vaXMtb2JqZWN0XCI7XG5pbXBvcnQgeyBJc0dyZWF0ZXJFcXVhbFRoYW5QaXBlIH0gZnJvbSBcIi4vaXMtZ3JlYXRlci1lcXVhbC10aGFuXCI7XG5pbXBvcnQgeyBJc0dyZWF0ZXJUaGFuUGlwZSB9IGZyb20gXCIuL2lzLWdyZWF0ZXItdGhhblwiO1xuaW1wb3J0IHsgSXNMZXNzRXF1YWxUaGFuUGlwZSB9IGZyb20gXCIuL2lzLWxlc3MtZXF1YWwtdGhhblwiO1xuaW1wb3J0IHsgSXNFcXVhbFRvUGlwZSB9IGZyb20gXCIuL2lzLWVxdWFsLXRvXCI7XG5pbXBvcnQgeyBJc05vdEVxdWFsVG9QaXBlIH0gZnJvbSBcIi4vaXMtbm90LWVxdWFsLXRvXCI7XG5pbXBvcnQgeyBJc0lkZW50aWNhbFRvUGlwZSB9IGZyb20gXCIuL2lzLWlkZW50aWNhbC10b1wiO1xuaW1wb3J0IHsgSXNOb3RJZGVudGljYWxUb1BpcGUgfSBmcm9tIFwiLi9pcy1ub3QtaWRlbnRpY2FsLXRvXCI7XG5pbXBvcnQgeyBJc0xlc3NUaGFuUGlwZSB9IGZyb20gXCIuL2lzLWxlc3MtdGhhblwiO1xuXG5leHBvcnQgY29uc3QgQk9PTEVBTl9QSVBFUyA9IFtcbiAgSXNEZWZpbmVkUGlwZSxcbiAgSXNOdWxsUGlwZSxcbiAgSXNVbmRlZmluZWRQaXBlLFxuICBJc1N0cmluZ1BpcGUsXG4gIElzRnVuY3Rpb25QaXBlLFxuICBJc051bWJlclBpcGUsXG4gIElzQXJyYXlQaXBlLFxuICBJc09iamVjdFBpcGUsXG4gIElzR3JlYXRlckVxdWFsVGhhblBpcGUsXG4gIElzR3JlYXRlclRoYW5QaXBlLFxuICBJc0xlc3NFcXVhbFRoYW5QaXBlLFxuICBJc0xlc3NFcXVhbFRoYW5QaXBlLFxuICBJc0VxdWFsVG9QaXBlLFxuICBJc05vdEVxdWFsVG9QaXBlLFxuICBJc0lkZW50aWNhbFRvUGlwZSxcbiAgSXNOb3RJZGVudGljYWxUb1BpcGUsXG4gIElzTGVzc1RoYW5QaXBlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBCT09MRUFOX1BJUEVTLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogQk9PTEVBTl9QSVBFUyxcbn0pXG5leHBvcnQgY2xhc3MgTmdCb29sZWFuUGlwZXNNb2R1bGUge31cblxuZXhwb3J0IHsgSXNEZWZpbmVkUGlwZSB9IGZyb20gXCIuL2lzLWRlZmluZWRcIjtcbmV4cG9ydCB7IElzTnVsbFBpcGUgfSBmcm9tIFwiLi9pcy1udWxsXCI7XG5leHBvcnQgeyBJc1VuZGVmaW5lZFBpcGUgfSBmcm9tIFwiLi9pcy11bmRlZmluZWRcIjtcbmV4cG9ydCB7IElzU3RyaW5nUGlwZSB9IGZyb20gXCIuL2lzLXN0cmluZ1wiO1xuZXhwb3J0IHsgSXNGdW5jdGlvblBpcGUgfSBmcm9tIFwiLi9pcy1mdW5jdGlvblwiO1xuZXhwb3J0IHsgSXNOdW1iZXJQaXBlIH0gZnJvbSBcIi4vaXMtbnVtYmVyXCI7XG5leHBvcnQgeyBJc0FycmF5UGlwZSB9IGZyb20gXCIuL2lzLWFycmF5XCI7XG5leHBvcnQgeyBJc09iamVjdFBpcGUgfSBmcm9tIFwiLi9pcy1vYmplY3RcIjtcbmV4cG9ydCB7IElzR3JlYXRlckVxdWFsVGhhblBpcGUgfSBmcm9tIFwiLi9pcy1ncmVhdGVyLWVxdWFsLXRoYW5cIjtcbmV4cG9ydCB7IElzR3JlYXRlclRoYW5QaXBlIH0gZnJvbSBcIi4vaXMtZ3JlYXRlci10aGFuXCI7XG5leHBvcnQgeyBJc0xlc3NFcXVhbFRoYW5QaXBlIH0gZnJvbSBcIi4vaXMtbGVzcy1lcXVhbC10aGFuXCI7XG5leHBvcnQgeyBJc0VxdWFsVG9QaXBlIH0gZnJvbSBcIi4vaXMtZXF1YWwtdG9cIjtcbmV4cG9ydCB7IElzTm90RXF1YWxUb1BpcGUgfSBmcm9tIFwiLi9pcy1ub3QtZXF1YWwtdG9cIjtcbmV4cG9ydCB7IElzSWRlbnRpY2FsVG9QaXBlIH0gZnJvbSBcIi4vaXMtaWRlbnRpY2FsLXRvXCI7XG5leHBvcnQgeyBJc05vdElkZW50aWNhbFRvUGlwZSB9IGZyb20gXCIuL2lzLW5vdC1pZGVudGljYWwtdG9cIjtcbmV4cG9ydCB7IElzTGVzc1RoYW5QaXBlIH0gZnJvbSBcIi4vaXMtbGVzcy10aGFuXCI7XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ0FycmF5UGlwZXNNb2R1bGUgfSBmcm9tIFwiLi9hcnJheS9pbmRleFwiO1xuaW1wb3J0IHsgTmdPYmplY3RQaXBlc01vZHVsZSB9IGZyb20gXCIuL29iamVjdC9pbmRleFwiO1xuaW1wb3J0IHsgTmdTdHJpbmdQaXBlc01vZHVsZSB9IGZyb20gXCIuL3N0cmluZy9pbmRleFwiO1xuaW1wb3J0IHsgTmdNYXRoUGlwZXNNb2R1bGUgfSBmcm9tIFwiLi9tYXRoL2luZGV4XCI7XG5pbXBvcnQgeyBOZ0Jvb2xlYW5QaXBlc01vZHVsZSB9IGZyb20gXCIuL2Jvb2xlYW4vaW5kZXhcIjtcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW05nQXJyYXlQaXBlc01vZHVsZSwgTmdTdHJpbmdQaXBlc01vZHVsZSwgTmdNYXRoUGlwZXNNb2R1bGUsIE5nQm9vbGVhblBpcGVzTW9kdWxlLCBOZ09iamVjdFBpcGVzTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdQaXBlc01vZHVsZSB7fVxuXG5leHBvcnQgKiBmcm9tIFwiLi9hcnJheS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vb2JqZWN0L2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zdHJpbmcvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hdGgvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Jvb2xlYW4vaW5kZXhcIjtcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fc3ByZWFkIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFPRSw0QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQs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QUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxJQUFJO1lBQ1AsQ0FBQyxFQUFFLElBQUk7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixD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

/***/ }),

/***/ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-toastr/fesm5/ngx-toastr.js ***!
  \*****************************************************/
/*! exports provided: ComponentPortal, BasePortalHost, Overlay, OVERLAY_PROVIDERS, OverlayContainer, OverlayRef, ToastContainerDirective, ToastContainerModule, Toast, ToastrService, ToastPackage, DefaultGlobalConfig, ToastrModule, ToastRef, ToastInjector, TOAST_CONFIG, ToastNoAnimation, ToastNoAnimationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function() { return ToastContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function() { return ToastContainerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPackage", function() { return ToastPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function() { return DefaultGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastInjector", function() { return ToastInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function() { return TOAST_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function() { return ToastNoAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function() { return ToastNoAnimationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-toastr/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var ComponentPortal = /** @class */ (function () {
    /**
     * @param {?} component
     * @param {?} injector
     */
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /**
     * Detach this portal from its host
     * @return {?}
     */
    ComponentPortal.prototype.detach = function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?=} host
     * @return {?}
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalHost, _super);
    /**
     * @param {?} _hostDomElement
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return /** @type {?} */ (((componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalHost;
}(BasePortalHost));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    /**
     * @param {?} _portalHost
     */
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?=} newestOnTop
     * @return {?}
     */
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        if (newestOnTop === void 0) { newestOnTop = true; }
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = function () {
        var /** @type {?} */ container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    /**
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    /**
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (positionClass === void 0) { positionClass = ''; }
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var /** @type {?} */ pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    return Overlay;
}());
Overlay.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
Overlay.ctorParameters = function () { return [
    { type: OverlayContainer, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
]; };
/**
 * Providers for Overlay and its related injectables.
 */
var /** @type {?} */ OVERLAY_PROVIDERS = [
    Overlay,
    OverlayContainer,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastContainerDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ToastContainerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());
ToastContainerDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[toastContainer]',
                exportAs: 'toastContainer',
            },] },
];
/** @nocollapse */
ToastContainerDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    return ToastContainerModule;
}());
ToastContainerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [ToastContainerDirective],
                exports: [ToastContainerDirective],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Everything a toast needs to launch
 */
var ToastPackage = /** @class */ (function () {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();
            _this._onTap.complete();
        });
    }
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        this._onTap.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to a toast opened via the Toastr service.
 * @template T
 */
var ToastRef = /** @class */ (function () {
    /**
     * @param {?} _overlayRef
     */
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the toast has finished closing.
         */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * triggered when toast is activated
         */
        this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * notifies the toast that it should close before the timeout
         */
        this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    /**
     * Close the toast.
     * @return {?}
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
    };
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());
/**
 * Custom injector type specifically for instantiating components with a toast.
 */
var ToastInjector = /** @class */ (function () {
    /**
     * @param {?} _toastPackage
     * @param {?} _parentInjector
     */
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ToastConfig');

var ToastrService = /** @class */ (function () {
    /**
     * @param {?} token
     * @param {?} overlay
     * @param {?} _injector
     * @param {?} sanitizer
     * @param {?} ngZone
     */
    function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        var /** @type {?} */ defaultConfig = new token.defaults;
        this.toastrConfig = Object.assign({}, defaultConfig, token.config);
        this.toastrConfig.iconClasses = Object.assign({}, defaultConfig.iconClasses, token.config.iconClasses);
    }
    /**
     * show toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    ToastrService.prototype.show = function (message, title, override, type) {
        if (override === void 0) { override = {}; }
        if (type === void 0) { type = ''; }
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show successful toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.success = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show error toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.error = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show info toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.info = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show warning toast
     * @param {?=} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.warning = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var /** @type {?} */ type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    ToastrService.prototype.clear = function (toastId) {
        try {
            // Call every toastRef manualClose function
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.toasts), _b = _a.next(); !_b.done; _b = _a.next()) {
                var toast = _b.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    ToastrService.prototype.remove = function (toastId) {
        var /** @type {?} */ found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var /** @type {?} */ p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    ToastrService.prototype.isDuplicate = function (message) {
        for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /**
     * create a clone of global config and apply individual settings
     * @param {?=} override
     * @return {?}
     */
    ToastrService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        return Object.assign({}, this.toastrConfig, override);
    };
    /**
     * Find toast object by id
     * @param {?} toastId
     * @return {?}
     */
    ToastrService.prototype._findToast = function (toastId) {
        for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Determines the need to run inside angular's zone then builds the toast
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastrService.prototype._preBuildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (config.onActivateTick) {
            return this.ngZone.run(function () { return _this._buildNotification(toastType, message, title, config); });
        }
        return this._buildNotification(toastType, message, title, config);
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastrService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (!config.toastComponent) {
            throw new Error('toastComponent required');
        }
        // max opened and auto dismiss = true
        if (message && this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        var /** @type {?} */ keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var /** @type {?} */ overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var /** @type {?} */ sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, message);
        }
        var /** @type {?} */ toastRef = new ToastRef(overlayRef);
        var /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        var /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
        var /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
        var /** @type {?} */ portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        toastRef.componentInstance = ((portal))._component;
        var /** @type {?} */ ins = {
            toastId: this.index,
            message: message || '',
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal: portal,
        };
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    return ToastrService;
}());
ToastrService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
ToastrService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [TOAST_CONFIG,] },] },
    { type: Overlay, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Toast = /** @class */ (function () {
    /**
     * @param {?} toastrService
     * @param {?} toastPackage
     * @param {?=} ngZone
     */
    function Toast(toastrService, toastPackage, ngZone) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = {
            value: 'inactive',
            params: {
                easeTime: this.toastPackage.config.easeTime,
                easing: 'ease-in',
            },
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    /**
     * @return {?}
     */
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = Object.assign({}, this.state, { value: 'active' });
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.outsideTimeout(function () { return _this.remove(); }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.outsideInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
    };
    /**
     * updates progress bar width
     * @return {?}
     */
    Toast.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var /** @type {?} */ now = new Date().getTime();
        var /** @type {?} */ remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = Object.assign({}, this.state, { value: 'removed' });
        this.outsideTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); }, +this.toastPackage.config.easeTime);
    };
    /**
     * @return {?}
     */
    Toast.prototype.tapToast = function () {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    Toast.prototype.stickAround = function () {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut
            || this.options.extendedTimeOut === 0
            || this.state.value === 'removed') {
            return;
        }
        this.outsideTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    Toast.prototype.outsideTimeout = function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () { return _this.timeout = setTimeout(function () { return _this.runInsideAngular(func); }, timeout); });
        }
        else {
            this.timeout = setTimeout(function () { return func(); }, timeout);
        }
    };
    /**
     * @param {?} func
     * @param {?} timeout
     * @return {?}
     */
    Toast.prototype.outsideInterval = function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () { return _this.intervalId = setInterval(function () { return _this.runInsideAngular(func); }, timeout); });
        }
        else {
            this.intervalId = setInterval(function () { return func(); }, timeout);
        }
    };
    /**
     * @param {?} func
     * @return {?}
     */
    Toast.prototype.runInsideAngular = function (func) {
        if (this.ngZone) {
            this.ngZone.run(function () { return func(); });
        }
        else {
            func();
        }
    };
    return Toast;
}());
Toast.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: '[toast-component]',
                template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            display: 'none',
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({})),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{ easeTime }}ms {{ easing }}')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('{{ easeTime }}ms {{ easing }}')),
                    ]),
                ],
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
Toast.ctorParameters = function () { return [
    { type: ToastrService, },
    { type: ToastPackage, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
]; };
Toast.propDecorators = {
    "toastClasses": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class',] },],
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@flyInOut',] },],
    "tapToast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] },],
    "stickAround": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseenter',] },],
    "delayedHideToast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DefaultGlobalConfig = /** @class */ (function () {
    function DefaultGlobalConfig() {
        // Global
        this.maxOpened = 0;
        this.autoDismiss = false;
        this.newestOnTop = true;
        this.preventDuplicates = false;
        this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
        };
        // Individual
        this.toastComponent = Toast;
        this.closeButton = false;
        this.timeOut = 5000;
        this.extendedTimeOut = 1000;
        this.enableHtml = false;
        this.progressBar = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        this.easing = 'ease-in';
        this.easeTime = 300;
        this.tapToDismiss = true;
        this.onActivateTick = false;
        this.progressAnimation = 'decreasing';
    }
    return DefaultGlobalConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastrModule = /** @class */ (function () {
    /**
     * @param {?} parentModule
     */
    function ToastrModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ToastrModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: { config: config, defaults: DefaultGlobalConfig } },
                OverlayContainer,
                Overlay,
                ToastrService,
            ],
        };
    };
    return ToastrModule;
}());
ToastrModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                exports: [Toast],
                declarations: [Toast],
                entryComponents: [Toast],
            },] },
];
/** @nocollapse */
ToastrModule.ctorParameters = function () { return [
    { type: ToastrModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastNoAnimation = /** @class */ (function () {
    /**
     * @param {?} toastrService
     * @param {?} toastPackage
     * @param {?} appRef
     */
    function ToastNoAnimation(toastrService, toastPackage, appRef) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    Object.defineProperty(ToastNoAnimation.prototype, "displayStyle", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.state === 'inactive') {
                return 'none';
            }
            return 'inherit';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    ToastNoAnimation.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     * @return {?}
     */
    ToastNoAnimation.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var /** @type {?} */ now = new Date().getTime();
        var /** @type {?} */ remaining = this.hideTime - now;
        this.width = remaining / this.options.timeOut * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    ToastNoAnimation.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); });
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    ToastNoAnimation.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut
            || this.options.extendedTimeOut === 0
            || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    return ToastNoAnimation;
}());
ToastNoAnimation.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: '[toast-component]',
                template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
            },] },
];
/** @nocollapse */
ToastNoAnimation.ctorParameters = function () { return [
    { type: ToastrService, },
    { type: ToastPackage, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
]; };
ToastNoAnimation.propDecorators = {
    "toastClasses": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class',] },],
    "displayStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.display',] },],
    "tapToast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] },],
    "stickAround": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseenter',] },],
    "delayedHideToast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave',] },],
};
var ToastNoAnimationModule = /** @class */ (function () {
    function ToastNoAnimationModule() {
    }
    return ToastNoAnimationModule;
}());
ToastNoAnimationModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                declarations: [ToastNoAnimation],
                exports: [ToastNoAnimation],
                entryComponents: [ToastNoAnimation],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=ngx-toastr.js.map


/***/ }),

/***/ "./node_modules/ngx-toastr/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-toastr/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/takeUntil.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/takeUntil.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_takeUntil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/takeUntil */ "./node_modules/rxjs-compat/_esm5/operator/takeUntil.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.takeUntil = _operator_takeUntil__WEBPACK_IMPORTED_MODULE_1__["takeUntil"];
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/takeUntil.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/takeUntil.js ***!
  \**************************************************************/
/*! exports provided: takeUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits a value. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes. If the `notifier` doesn't emit any value and completes
 * then `takeUntil` will pass all values.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = /** @class */ (function () {
    function MenuService(location, renderer2, router) {
        this.location = location;
        this.renderer2 = renderer2;
        this.router = router;
    }
    MenuService.prototype.getVerticalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    };
    MenuService.prototype.getHorizontalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    };
    MenuService.prototype.createMenu = function (menu, nativeElement, type) {
        if (type == 'vertical') {
            this.createVerticalMenu(menu, nativeElement);
        }
        if (type == 'horizontal') {
            this.createHorizontalMenu(menu, nativeElement);
        }
    };
    MenuService.prototype.createVerticalMenu = function (menu, nativeElement) {
        var _this = this;
        var menu0 = this.renderer2.createElement('div');
        this.renderer2.setAttribute(menu0, 'id', 'menu0');
        menu.forEach(function (menuItem) {
            if (menuItem.parentId == 0) {
                var subMenu = _this.createVerticalMenuItem(menu, menuItem);
                _this.renderer2.appendChild(menu0, subMenu);
            }
        });
        this.renderer2.appendChild(nativeElement, menu0);
    };
    MenuService.prototype.createHorizontalMenu = function (menu, nativeElement) {
        var _this = this;
        var nav = this.renderer2.createElement('div');
        this.renderer2.setAttribute(nav, 'id', 'navigation');
        var ul = this.renderer2.createElement('ul');
        this.renderer2.addClass(ul, 'menu');
        this.renderer2.appendChild(nav, ul);
        menu.forEach(function (menuItem) {
            if (menuItem.parentId == 0) {
                var subMenu = _this.createHorizontalMenuItem(menu, menuItem);
                _this.renderer2.appendChild(ul, subMenu);
            }
        });
        this.renderer2.appendChild(nativeElement, nav);
    };
    MenuService.prototype.createVerticalMenuItem = function (menu, menuItem) {
        var _this = this;
        var div = this.renderer2.createElement('div');
        this.renderer2.addClass(div, 'card');
        var link = this.renderer2.createElement('a');
        this.renderer2.addClass(link, 'menu-item-link');
        this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
        this.renderer2.setAttribute(link, 'data-placement', 'right');
        this.renderer2.setAttribute(link, 'data-animation', 'false');
        this.renderer2.setAttribute(link, 'data-container', '.vertical-menu-tooltip-place');
        this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
        var icon = this.renderer2.createElement('i');
        this.renderer2.addClass(icon, 'fa');
        this.renderer2.addClass(icon, 'fa-' + menuItem.icon);
        this.renderer2.appendChild(link, icon);
        var span = this.renderer2.createElement('span');
        this.renderer2.addClass(span, 'menu-title');
        this.renderer2.appendChild(link, span);
        var menuText = this.renderer2.createText(menuItem.title);
        this.renderer2.appendChild(span, menuText);
        this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
        this.renderer2.addClass(link, 'transition');
        this.renderer2.appendChild(div, link);
        if (menuItem.routerLink) {
            this.renderer2.listen(link, "click", function () {
                _this.router.navigate([menuItem.routerLink]);
                _this.setActiveLink(menu, link);
                _this.closeOtherSubMenus(div);
            });
        }
        if (menuItem.href) {
            this.renderer2.setAttribute(link, 'href', menuItem.href);
        }
        if (menuItem.target) {
            this.renderer2.setAttribute(link, 'target', menuItem.target);
        }
        if (menuItem.hasSubMenu) {
            this.renderer2.addClass(link, 'collapsed');
            var caret = this.renderer2.createElement('b');
            this.renderer2.addClass(caret, 'fa');
            this.renderer2.addClass(caret, 'fa-angle-up');
            this.renderer2.appendChild(link, caret);
            this.renderer2.setAttribute(link, 'data-toggle', 'collapse');
            this.renderer2.setAttribute(link, 'href', '#collapse' + menuItem.id);
            var collapse = this.renderer2.createElement('div');
            this.renderer2.setAttribute(collapse, 'id', 'collapse' + menuItem.id);
            this.renderer2.setAttribute(collapse, 'data-parent', '#menu' + menuItem.parentId);
            this.renderer2.addClass(collapse, 'collapse');
            this.renderer2.appendChild(div, collapse);
            this.createSubMenu(menu, menuItem.id, collapse, 'vertical');
        }
        return div;
    };
    MenuService.prototype.createHorizontalMenuItem = function (menu, menuItem) {
        var _this = this;
        var li = this.renderer2.createElement('li');
        this.renderer2.addClass(li, 'menu-item');
        var link = this.renderer2.createElement('a');
        this.renderer2.addClass(link, 'menu-item-link');
        this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
        this.renderer2.setAttribute(link, 'data-placement', 'top');
        this.renderer2.setAttribute(link, 'data-animation', 'false');
        this.renderer2.setAttribute(link, 'data-container', '.horizontal-menu-tooltip-place');
        this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
        var icon = this.renderer2.createElement('i');
        this.renderer2.addClass(icon, 'fa');
        this.renderer2.addClass(icon, 'fa-' + menuItem.icon);
        this.renderer2.appendChild(link, icon);
        var span = this.renderer2.createElement('span');
        this.renderer2.addClass(span, 'menu-title');
        this.renderer2.appendChild(link, span);
        var menuText = this.renderer2.createText(menuItem.title);
        this.renderer2.appendChild(span, menuText);
        this.renderer2.appendChild(li, link);
        this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
        this.renderer2.addClass(link, 'transition');
        if (menuItem.routerLink) {
            this.renderer2.listen(link, "click", function () {
                _this.router.navigate([menuItem.routerLink]);
                _this.setActiveLink(menu, link);
            });
        }
        if (menuItem.href) {
            this.renderer2.setAttribute(link, 'href', menuItem.href);
        }
        if (menuItem.target) {
            this.renderer2.setAttribute(link, 'target', menuItem.target);
        }
        if (menuItem.hasSubMenu) {
            this.renderer2.addClass(li, 'menu-item-has-children');
            var subMenu = this.renderer2.createElement('ul');
            this.renderer2.addClass(subMenu, 'sub-menu');
            this.renderer2.appendChild(li, subMenu);
            this.createSubMenu(menu, menuItem.id, subMenu, 'horizontal');
        }
        return li;
    };
    MenuService.prototype.createSubMenu = function (menu, menuItemId, parentElement, type) {
        var _this = this;
        var menus = menu.filter(function (item) { return item.parentId === menuItemId; });
        menus.forEach(function (menuItem) {
            var subMenu = null;
            if (type == 'vertical') {
                subMenu = _this.createVerticalMenuItem(menu, menuItem);
            }
            if (type == 'horizontal') {
                subMenu = _this.createHorizontalMenuItem(menu, menuItem);
            }
            _this.renderer2.appendChild(parentElement, subMenu);
        });
    };
    MenuService.prototype.closeOtherSubMenus = function (elem) {
        var children = (this.renderer2.parentNode(elem)).children;
        for (var i = 0; i < children.length; i++) {
            var child = this.renderer2.nextSibling(children[i].children[0]);
            if (child) {
                this.renderer2.addClass(children[i].children[0], 'collapsed');
                this.renderer2.removeClass(child, 'show');
            }
        }
    };
    MenuService.prototype.getActiveLink = function (menu) {
        var url = this.location.path();
        var routerLink = url; // url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var activeLink = document.querySelector("#link" + activeMenuItem[0].id);
            return activeLink;
        }
        return false;
    };
    MenuService.prototype.setActiveLink = function (menu, link) {
        if (link) {
            menu.forEach(function (menuItem) {
                var activeLink = document.querySelector("#link" + menuItem.id);
                if (activeLink) {
                    if (activeLink.classList.contains('active-link')) {
                        activeLink.classList.remove('active-link');
                    }
                }
            });
            this.renderer2.addClass(link, 'active-link');
        }
    };
    MenuService.prototype.showActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = url; //url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var activeLink = document.querySelector("#link" + activeMenuItem[0].id);
            var parent_1 = this.renderer2.parentNode(activeLink);
            while (this.renderer2.parentNode(parent_1)) {
                parent_1 = this.renderer2.parentNode(parent_1);
                if (parent_1.className == 'collapse') {
                    var parentMenu = menu.filter(function (item) { return item.id === activeMenuItem[0].parentId; });
                    var activeParentLink = document.querySelector("#link" + parentMenu[0].id);
                    this.renderer2.removeClass(activeParentLink, 'collapsed');
                    this.renderer2.addClass(parent_1, 'show');
                }
                if (parent_1.classList.contains('menu-wrapper')) {
                    break;
                }
            }
        }
    };
    MenuService.prototype.addNewMenuItem = function (menu, newMenuItem, type) {
        menu.push(newMenuItem);
        if (newMenuItem.parentId != 0) {
            var parentMenu = menu.filter(function (item) { return item.id === newMenuItem.parentId; });
            if (parentMenu.length) {
                if (!parentMenu[0].hasSubMenu) {
                    parentMenu[0].hasSubMenu = true;
                    // parentMenu[0].routerLink = null;
                }
            }
        }
        var menu_wrapper = null;
        if (type == 'vertical') {
            menu_wrapper = document.getElementById('vertical-menu');
        }
        if (type == 'horizontal') {
            menu_wrapper = document.getElementById('horizontal-menu');
        }
        while (menu_wrapper.firstChild) {
            menu_wrapper.removeChild(menu_wrapper.firstChild);
        }
        this.createMenu(menu, menu_wrapper, type);
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");

var verticalMenuItems = [
    // new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    // new Menu (3, 'UI Features', null, null, 'laptop', null, true, 0),   
    // new Menu (4, 'Buttons', '/pages/ui/buttons', null, 'keyboard-o', null, false, 3),  
    // new Menu (5, 'Cards', '/pages/ui/cards', null, 'address-card-o', null, false, 3), 
    // new Menu (6, 'Components', '/pages/ui/components', null, 'creative-commons', null, false, 3),
    // new Menu (7, 'Icons', '/pages/ui/icons', null, 'font-awesome', null, false, 3), 
    // new Menu (8, 'List Group', '/pages/ui/list-group', null, 'th-list', null, false, 3), 
    // new Menu (9, 'Media Objects', '/pages/ui/media-objects', null, 'object-group', null, false, 3), 
    // new Menu (10, 'Tabs & Accordions', '/pages/ui/tabs-accordions', null, 'server', null, false, 3),
    // new Menu (11, 'Typography', '/pages/ui/typography', null, 'font', null, false, 3),
    // new Menu (15, 'Dynamic Menu', '/pages/dynamic-menu', null, 'list-ul', null, false, 0),    
    // new Menu (16, 'Mailbox', '/pages/mailbox', null, 'envelope-o', null, false, 0),
    // new Menu (20, 'Form Elements', null, null, 'pencil-square-o', null, true, 0), 
    // new Menu (21, 'Form Controls', '/pages/form-elements/controls', null, 'check-square-o', null, false, 20),
    // new Menu (22, 'Form Layouts', '/pages/form-elements/layouts', null, 'th-large', null, false, 20),
    // new Menu (23, 'Form Validations', '/pages/form-elements/validations', null, 'exclamation-triangle', null, false, 20),
    // new Menu (24, 'Form Wizard', '/pages/form-elements/wizard', null, 'magic', null, false, 20),
    // new Menu (25, 'Editor', '/pages/form-elements/editor', null, 'pencil', null, false, 20),
    // new Menu (26, 'Tables', null, null, 'table', null, true, 0),
    // new Menu (27, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 26), 
    // new Menu (28, 'Dynamic Tables', null, null, 'th-large', null, true, 26), 
    // new Menu (29, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 28),
    // new Menu (30, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28), 
    // new Menu (31, 'Tools', null, null, 'wrench', null, true, 0),
    // new Menu (32, 'Drag & Drop', '/pages/tools/drag-drop', null, 'hand-paper-o', null, false, 31), 
    // new Menu (33, 'Resizable', '/pages/tools/resizable', null, 'expand', null, false, 31), 
    // new Menu (34, 'Toaster', '/pages/tools/toaster', null, 'bell-o', null, false, 31), 
    // new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    // new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 40),    
    // new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    // new Menu (45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    // new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    // new Menu (50, 'Calendar', '/pages/calendar', null, 'calendar', null, false, 0),
    // new Menu (66, 'Maps', null, null, 'globe', null, true, 0),
    // new Menu (67, 'Google Maps', '/pages/maps/googlemaps', null, 'map-marker', null, false, 66),
    // new Menu (68, 'Leaflet Maps', '/pages/maps/leafletmaps', null, 'map-o', null, false, 66),
    // new Menu (70, 'Charts', null, null, 'area-chart', null, true, 0),
    // new Menu (71, 'Bar Charts', '/pages/charts/bar', null, 'bar-chart', null, false, 70),
    // new Menu (72, 'Pie Charts', '/pages/charts/pie', null, 'pie-chart', null, false, 70),
    // new Menu (73, 'Line Charts', '/pages/charts/line', null, 'line-chart', null, false, 70),
    // new Menu (74, 'Bubble Charts', '/pages/charts/bubble', null, 'comment-o', null, false, 70),    
    // new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    // new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    // new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    // new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    // new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    // new Menu (200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0),
    // new Menu (201, 'Pruebas Carlos', '/pages/prueba', null, 'trash', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Cambio de adscripción', '/pages/membership', null, 'exchange', null, false, 0),
];
var horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Membership', '/pages/membership', null, 'users', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'laptop', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/pages/ui/buttons', null, 'keyboard-o', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/pages/ui/cards', null, 'address-card-o', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Components', '/pages/ui/components', null, 'creative-commons', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Icons', '/pages/ui/icons', null, 'font-awesome', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'List Group', '/pages/ui/list-group', null, 'th-list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Media Objects', '/pages/ui/media-objects', null, 'object-group', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Tabs & Accordions', '/pages/ui/tabs-accordions', null, 'server', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Typography', '/pages/ui/typography', null, 'font', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Tools', null, null, 'wrench', null, true, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Drag & Drop', '/pages/tools/drag-drop', null, 'hand-paper-o', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Resizable', '/pages/tools/resizable', null, 'expand', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Toaster', '/pages/tools/toaster', null, 'bell-o', null, false, 31),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Elements', null, null, 'pencil-square-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Form Controls', '/pages/form-elements/controls', null, 'check-square-o', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Form Layouts', '/pages/form-elements/layouts', null, 'th-large', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Form Validations', '/pages/form-elements/validations', null, 'exclamation-triangle', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form Wizard', '/pages/form-elements/wizard', null, 'magic', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Editor', '/pages/form-elements/editor', null, 'pencil', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Tables', null, null, 'table', null, true, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 26),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Dynamic Tables', null, null, 'th-large', null, true, 26),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 28),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 28),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/pages/dynamic-menu', null, 'list-ul', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'sign-in', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'registered', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Calendar', '/pages/calendar', null, 'calendar', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/pages/mailbox', null, 'envelope-o', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'globe', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/pages/maps/googlemaps', null, 'map-marker', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/pages/maps/leafletmaps', null, 'map-o', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'area-chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/pages/charts/bar', null, 'bar-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/pages/charts/pie', null, 'pie-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/pages/charts/line', null, 'line-chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/pages/charts/bubble', null, 'comment-o', null, false, 70)
];


/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");
/* harmony import */ var _search_funcionario_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/funcionario-search.pipe */ "./src/app/theme/pipes/search/funcionario-search.pipe.ts");
/* harmony import */ var _search_activos_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/activos-search.pipe */ "./src/app/theme/pipes/search/activos-search.pipe.ts");
/* harmony import */ var _search_numeroemp_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/numeroemp-search.pipe */ "./src/app/theme/pipes/search/numeroemp-search.pipe.ts");
/* harmony import */ var _search_nombre_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/nombre-search.pipe */ "./src/app/theme/pipes/search/nombre-search.pipe.ts");
/* harmony import */ var _search_appaterno_search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/appaterno-search.pipe */ "./src/app/theme/pipes/search/appaterno-search.pipe.ts");
/* harmony import */ var _search_apmaterno_search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/apmaterno-search.pipe */ "./src/app/theme/pipes/search/apmaterno-search.pipe.ts");
/* harmony import */ var _search_nomusuario_search_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/nomusuario-search.pipe */ "./src/app/theme/pipes/search/nomusuario-search.pipe.ts");
/* harmony import */ var _search_agencia_search_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/agencia-search.pipe */ "./src/app/theme/pipes/search/agencia-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_2__["NgPipesModule"]
            ],
            declarations: [
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"],
                _search_funcionario_search_pipe__WEBPACK_IMPORTED_MODULE_8__["FuncionarioSearchPipe"],
                _search_activos_search_pipe__WEBPACK_IMPORTED_MODULE_9__["ActivosSearchPipe"],
                _search_numeroemp_search_pipe__WEBPACK_IMPORTED_MODULE_10__["NumeroempSearchPipe"],
                _search_nombre_search_pipe__WEBPACK_IMPORTED_MODULE_11__["NombreSearchPipe"],
                _search_appaterno_search_pipe__WEBPACK_IMPORTED_MODULE_12__["AppaternoSearchPipe"],
                _search_apmaterno_search_pipe__WEBPACK_IMPORTED_MODULE_13__["ApmaternoSearchPipe"],
                _search_nomusuario_search_pipe__WEBPACK_IMPORTED_MODULE_14__["NomusuarioSearchPipe"],
                _search_agencia_search_pipe__WEBPACK_IMPORTED_MODULE_15__["AgenciaSearchPipe"]
            ],
            exports: [
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"],
                _search_funcionario_search_pipe__WEBPACK_IMPORTED_MODULE_8__["FuncionarioSearchPipe"],
                _search_activos_search_pipe__WEBPACK_IMPORTED_MODULE_9__["ActivosSearchPipe"],
                _search_numeroemp_search_pipe__WEBPACK_IMPORTED_MODULE_10__["NumeroempSearchPipe"],
                _search_nombre_search_pipe__WEBPACK_IMPORTED_MODULE_11__["NombreSearchPipe"],
                _search_appaterno_search_pipe__WEBPACK_IMPORTED_MODULE_12__["AppaternoSearchPipe"],
                _search_apmaterno_search_pipe__WEBPACK_IMPORTED_MODULE_13__["ApmaternoSearchPipe"],
                _search_nomusuario_search_pipe__WEBPACK_IMPORTED_MODULE_14__["NomusuarioSearchPipe"],
                _search_agencia_search_pipe__WEBPACK_IMPORTED_MODULE_15__["AgenciaSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilePicturePipe = /** @class */ (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    ProfilePicturePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'profilePicture' })
    ], ProfilePicturePipe);
    return ProfilePicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/activos-search.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/search/activos-search.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ActivosSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivosSearchPipe", function() { return ActivosSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActivosSearchPipe = /** @class */ (function () {
    function ActivosSearchPipe() {
    }
    // transform(funcionarios, args?): Array<any> {
    //   let searchActivos = new RegExp(args, 'ig');
    //   if (funcionarios) {
    //     return funcionarios.filter(funcionario => {
    //       if (funcionario.bEsActivo) { 
    //         return funcionario.bEsActivo.search(searchActivos) !== -1;
    //       }
    //       else{
    //         return funcionario.bEsActivo.search(searchActivos) !== -1;
    //       }
    //     });
    //   }
    // }
    ActivosSearchPipe.prototype.transform = function (funcionarios, searchActivos, defaultFilter) {
        if (!searchActivos) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchActivos && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchActivos);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchActivos[keyName], 'gi').test(item[keyName])) || searchActivos[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchActivos[key], 'gi').test(it[key]) || searchActivos[key] == "";
                    });
                });
            }
        }
    };
    ActivosSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ActivosSearchPipe', pure: false })
    ], ActivosSearchPipe);
    return ActivosSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/agencia-search.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/search/agencia-search.pipe.ts ***!
  \***********************************************************/
/*! exports provided: AgenciaSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaSearchPipe", function() { return AgenciaSearchPipe; });
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

var AgenciaSearchPipe = /** @class */ (function () {
    function AgenciaSearchPipe() {
        this.defaultAccentsRemovalMap = [
            { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
            { 'base': 'AA', 'letters': '\uA732' },
            { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
            { 'base': 'AO', 'letters': '\uA734' },
            { 'base': 'AU', 'letters': '\uA736' },
            { 'base': 'AV', 'letters': '\uA738\uA73A' },
            { 'base': 'AY', 'letters': '\uA73C' },
            { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
            { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
            { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0' },
            { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
            { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
            { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
            { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
            { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
            { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
            { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
            { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
            { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
            { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
            { 'base': 'LJ', 'letters': '\u01C7' },
            { 'base': 'Lj', 'letters': '\u01C8' },
            { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
            { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
            { 'base': 'NJ', 'letters': '\u01CA' },
            { 'base': 'Nj', 'letters': '\u01CB' },
            { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
            { 'base': 'OI', 'letters': '\u01A2' },
            { 'base': 'OO', 'letters': '\uA74E' },
            { 'base': 'OU', 'letters': '\u0222' },
            { 'base': 'OE', 'letters': '\u008C\u0152' },
            { 'base': 'oe', 'letters': '\u009C\u0153' },
            { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
            { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
            { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
            { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
            { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
            { 'base': 'TZ', 'letters': '\uA728' },
            { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
            { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
            { 'base': 'VY', 'letters': '\uA760' },
            { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
            { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
            { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
            { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
            { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
            { 'base': 'aa', 'letters': '\uA733' },
            { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
            { 'base': 'ao', 'letters': '\uA735' },
            { 'base': 'au', 'letters': '\uA737' },
            { 'base': 'av', 'letters': '\uA739\uA73B' },
            { 'base': 'ay', 'letters': '\uA73D' },
            { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
            { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
            { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
            { 'base': 'dz', 'letters': '\u01F3\u01C6' },
            { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
            { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
            { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
            { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
            { 'base': 'hv', 'letters': '\u0195' },
            { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
            { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
            { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
            { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
            { 'base': 'lj', 'letters': '\u01C9' },
            { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
            { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
            { 'base': 'nj', 'letters': '\u01CC' },
            { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
            { 'base': 'oi', 'letters': '\u01A3' },
            { 'base': 'ou', 'letters': '\u0223' },
            { 'base': 'oo', 'letters': '\uA74F' },
            { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
            { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
            { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
            { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
            { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
            { 'base': 'tz', 'letters': '\uA729' },
            { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
            { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
            { 'base': 'vy', 'letters': '\uA761' },
            { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
            { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
            { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
            { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
        ];
        this.AccentsMap = {};
        for (var i = 0; i < this.defaultAccentsRemovalMap.length; i++) {
            var letters = this.defaultAccentsRemovalMap[i].letters;
            for (var j = 0; j < letters.length; j++) {
                this.AccentsMap[letters[j]] = this.defaultAccentsRemovalMap[i].base;
            }
        }
    }
    AgenciaSearchPipe.prototype.removeAccents = function (str) {
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return this.AccentsMap[a] || a;
        }.bind(this));
    };
    AgenciaSearchPipe.prototype.transform = function (funcionarios, searchAgencia, defaultFilter) {
        var _this = this;
        if (!searchAgencia) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchAgencia && Array.isArray(funcionarios)) {
            var filtrados_1 = Object.keys(searchAgencia);
            if (defaultFilter) {
                return funcionarios.filter(function (it) {
                    filtrados_1.reduce(function (x, nombre) {
                        return (x && new RegExp(searchAgencia[nombre], 'gi').test(_this.removeAccents(it[nombre]))) || searchAgencia[nombre] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filtrados_1.some(function (key) {
                        return new RegExp(searchAgencia[key], 'gi').test(_this.removeAccents(it[key])) || searchAgencia[key] == "";
                    });
                });
            }
        }
    };
    AgenciaSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'AgenciaSearchPipe', pure: false }),
        __metadata("design:paramtypes", [])
    ], AgenciaSearchPipe);
    return AgenciaSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/apmaterno-search.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/pipes/search/apmaterno-search.pipe.ts ***!
  \*************************************************************/
/*! exports provided: ApmaternoSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApmaternoSearchPipe", function() { return ApmaternoSearchPipe; });
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

var ApmaternoSearchPipe = /** @class */ (function () {
    function ApmaternoSearchPipe() {
        this.defaultAccentsRemovalMap = [
            { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
            { 'base': 'AA', 'letters': '\uA732' },
            { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
            { 'base': 'AO', 'letters': '\uA734' },
            { 'base': 'AU', 'letters': '\uA736' },
            { 'base': 'AV', 'letters': '\uA738\uA73A' },
            { 'base': 'AY', 'letters': '\uA73C' },
            { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
            { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
            { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0' },
            { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
            { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
            { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
            { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
            { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
            { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
            { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
            { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
            { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
            { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
            { 'base': 'LJ', 'letters': '\u01C7' },
            { 'base': 'Lj', 'letters': '\u01C8' },
            { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
            { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
            { 'base': 'NJ', 'letters': '\u01CA' },
            { 'base': 'Nj', 'letters': '\u01CB' },
            { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
            { 'base': 'OI', 'letters': '\u01A2' },
            { 'base': 'OO', 'letters': '\uA74E' },
            { 'base': 'OU', 'letters': '\u0222' },
            { 'base': 'OE', 'letters': '\u008C\u0152' },
            { 'base': 'oe', 'letters': '\u009C\u0153' },
            { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
            { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
            { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
            { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
            { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
            { 'base': 'TZ', 'letters': '\uA728' },
            { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
            { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
            { 'base': 'VY', 'letters': '\uA760' },
            { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
            { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
            { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
            { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
            { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
            { 'base': 'aa', 'letters': '\uA733' },
            { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
            { 'base': 'ao', 'letters': '\uA735' },
            { 'base': 'au', 'letters': '\uA737' },
            { 'base': 'av', 'letters': '\uA739\uA73B' },
            { 'base': 'ay', 'letters': '\uA73D' },
            { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
            { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
            { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
            { 'base': 'dz', 'letters': '\u01F3\u01C6' },
            { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
            { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
            { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
            { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
            { 'base': 'hv', 'letters': '\u0195' },
            { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
            { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
            { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
            { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
            { 'base': 'lj', 'letters': '\u01C9' },
            { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
            { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
            { 'base': 'nj', 'letters': '\u01CC' },
            { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
            { 'base': 'oi', 'letters': '\u01A3' },
            { 'base': 'ou', 'letters': '\u0223' },
            { 'base': 'oo', 'letters': '\uA74F' },
            { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
            { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
            { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
            { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
            { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
            { 'base': 'tz', 'letters': '\uA729' },
            { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
            { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
            { 'base': 'vy', 'letters': '\uA761' },
            { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
            { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
            { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
            { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
        ];
        this.AccentsMap = {};
        for (var i = 0; i < this.defaultAccentsRemovalMap.length; i++) {
            var letters = this.defaultAccentsRemovalMap[i].letters;
            for (var j = 0; j < letters.length; j++) {
                this.AccentsMap[letters[j]] = this.defaultAccentsRemovalMap[i].base;
            }
        }
    }
    ApmaternoSearchPipe.prototype.removeAccents = function (str) {
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return this.AccentsMap[a] || a;
        }.bind(this));
    };
    ApmaternoSearchPipe.prototype.transform = function (funcionarios, searchApMaterno, defaultFilter) {
        var _this = this;
        if (!searchApMaterno) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchApMaterno && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchApMaterno);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchApMaterno[keyName], 'gi').test(_this.removeAccents(item[keyName]))) || searchApMaterno[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchApMaterno[key], 'gi').test(_this.removeAccents(it[key])) || searchApMaterno[key] == "";
                    });
                });
            }
        }
    };
    ApmaternoSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ApmaternoSearchPipe', pure: false }),
        __metadata("design:paramtypes", [])
    ], ApmaternoSearchPipe);
    return ApmaternoSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/appaterno-search.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/pipes/search/appaterno-search.pipe.ts ***!
  \*************************************************************/
/*! exports provided: AppaternoSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppaternoSearchPipe", function() { return AppaternoSearchPipe; });
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

var AppaternoSearchPipe = /** @class */ (function () {
    function AppaternoSearchPipe() {
        this.defaultAccentsRemovalMap = [
            { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
            { 'base': 'AA', 'letters': '\uA732' },
            { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
            { 'base': 'AO', 'letters': '\uA734' },
            { 'base': 'AU', 'letters': '\uA736' },
            { 'base': 'AV', 'letters': '\uA738\uA73A' },
            { 'base': 'AY', 'letters': '\uA73C' },
            { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
            { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
            { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0' },
            { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
            { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
            { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
            { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
            { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
            { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
            { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
            { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
            { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
            { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
            { 'base': 'LJ', 'letters': '\u01C7' },
            { 'base': 'Lj', 'letters': '\u01C8' },
            { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
            { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
            { 'base': 'NJ', 'letters': '\u01CA' },
            { 'base': 'Nj', 'letters': '\u01CB' },
            { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
            { 'base': 'OI', 'letters': '\u01A2' },
            { 'base': 'OO', 'letters': '\uA74E' },
            { 'base': 'OU', 'letters': '\u0222' },
            { 'base': 'OE', 'letters': '\u008C\u0152' },
            { 'base': 'oe', 'letters': '\u009C\u0153' },
            { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
            { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
            { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
            { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
            { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
            { 'base': 'TZ', 'letters': '\uA728' },
            { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
            { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
            { 'base': 'VY', 'letters': '\uA760' },
            { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
            { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
            { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
            { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
            { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
            { 'base': 'aa', 'letters': '\uA733' },
            { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
            { 'base': 'ao', 'letters': '\uA735' },
            { 'base': 'au', 'letters': '\uA737' },
            { 'base': 'av', 'letters': '\uA739\uA73B' },
            { 'base': 'ay', 'letters': '\uA73D' },
            { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
            { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
            { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
            { 'base': 'dz', 'letters': '\u01F3\u01C6' },
            { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
            { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
            { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
            { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
            { 'base': 'hv', 'letters': '\u0195' },
            { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
            { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
            { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
            { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
            { 'base': 'lj', 'letters': '\u01C9' },
            { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
            { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
            { 'base': 'nj', 'letters': '\u01CC' },
            { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
            { 'base': 'oi', 'letters': '\u01A3' },
            { 'base': 'ou', 'letters': '\u0223' },
            { 'base': 'oo', 'letters': '\uA74F' },
            { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
            { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
            { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
            { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
            { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
            { 'base': 'tz', 'letters': '\uA729' },
            { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
            { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
            { 'base': 'vy', 'letters': '\uA761' },
            { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
            { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
            { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
            { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
        ];
        this.AccentsMap = {};
        for (var i = 0; i < this.defaultAccentsRemovalMap.length; i++) {
            var letters = this.defaultAccentsRemovalMap[i].letters;
            for (var j = 0; j < letters.length; j++) {
                this.AccentsMap[letters[j]] = this.defaultAccentsRemovalMap[i].base;
            }
        }
    }
    AppaternoSearchPipe.prototype.removeAccents = function (str) {
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return this.AccentsMap[a] || a;
        }.bind(this));
    };
    AppaternoSearchPipe.prototype.transform = function (funcionarios, searchApPaterno, defaultFilter) {
        if (!searchApPaterno) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchApPaterno && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchApPaterno);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchApPaterno[keyName], 'gi').test(item[keyName])) || searchApPaterno[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchApPaterno[key], 'gi').test(it[key]) || searchApPaterno[key] == "";
                    });
                });
            }
        }
    };
    AppaternoSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'AppaternoSearchPipe', pure: false }),
        __metadata("design:paramtypes", [])
    ], AppaternoSearchPipe);
    return AppaternoSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatPersonSearchPipe = /** @class */ (function () {
    function ChatPersonSearchPipe() {
    }
    ChatPersonSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (message) {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    };
    ChatPersonSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ChatPersonSearchPipe' })
    ], ChatPersonSearchPipe);
    return ChatPersonSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/funcionario-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/funcionario-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: FuncionarioSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionarioSearchPipe", function() { return FuncionarioSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FuncionarioSearchPipe = /** @class */ (function () {
    function FuncionarioSearchPipe() {
    }
    // transform(value, args?): Array<any> {
    //   let buscarFuncionario = new RegExp(args, 'ig');
    //   if (value) {
    //     return value.filter(funcionario => {
    //       if (funcionario.cNombreFuncionario) {
    //         return funcionario.cNombreFuncionario.search(buscarFuncionario) !== -1;
    //       }
    //       else{
    //         return funcionario.cApellidoPaternoFuncionario.search(buscarFuncionario) !== -1;
    //       }
    //     });
    //   }
    // }
    FuncionarioSearchPipe.prototype.transform = function (funciAgencia, buscarFuncionario, defaultFilter) {
        if (!buscarFuncionario) {
            return funciAgencia;
        }
        if (!Array.isArray(funciAgencia)) {
            return funciAgencia;
        }
        if (buscarFuncionario && Array.isArray(funciAgencia)) {
            var filterKeys_1 = Object.keys(buscarFuncionario);
            if (defaultFilter) {
                return funciAgencia.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(buscarFuncionario[keyName], 'gi').test(item[keyName])) || buscarFuncionario[keyName] == "";
                    }, true);
                });
            }
            else {
                return funciAgencia.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(buscarFuncionario[key], 'gi').test(it[key]) || buscarFuncionario[key] == "";
                    });
                });
            }
        }
    };
    FuncionarioSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'FuncionarioSearchPipe', pure: false })
    ], FuncionarioSearchPipe);
    return FuncionarioSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (funcionarios, searchText, defaultFilter) {
        if (!searchText) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchText && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchText);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchText[keyName], 'gi').test(item[keyName])) || searchText[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchText[key], 'gi').test(it[key]) || searchText[key] == "";
                    });
                });
            }
        }
    };
    MailSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/nombre-search.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/pipes/search/nombre-search.pipe.ts ***!
  \**********************************************************/
/*! exports provided: NombreSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NombreSearchPipe", function() { return NombreSearchPipe; });
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

var NombreSearchPipe = /** @class */ (function () {
    function NombreSearchPipe() {
        this.defaultAccentsRemovalMap = [
            { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
            { 'base': 'AA', 'letters': '\uA732' },
            { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
            { 'base': 'AO', 'letters': '\uA734' },
            { 'base': 'AU', 'letters': '\uA736' },
            { 'base': 'AV', 'letters': '\uA738\uA73A' },
            { 'base': 'AY', 'letters': '\uA73C' },
            { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
            { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
            { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0' },
            { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
            { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
            { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
            { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
            { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
            { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
            { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
            { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
            { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
            { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
            { 'base': 'LJ', 'letters': '\u01C7' },
            { 'base': 'Lj', 'letters': '\u01C8' },
            { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
            { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
            { 'base': 'NJ', 'letters': '\u01CA' },
            { 'base': 'Nj', 'letters': '\u01CB' },
            { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
            { 'base': 'OI', 'letters': '\u01A2' },
            { 'base': 'OO', 'letters': '\uA74E' },
            { 'base': 'OU', 'letters': '\u0222' },
            { 'base': 'OE', 'letters': '\u008C\u0152' },
            { 'base': 'oe', 'letters': '\u009C\u0153' },
            { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
            { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
            { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
            { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
            { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
            { 'base': 'TZ', 'letters': '\uA728' },
            { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
            { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
            { 'base': 'VY', 'letters': '\uA760' },
            { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
            { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
            { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
            { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
            { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
            { 'base': 'aa', 'letters': '\uA733' },
            { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
            { 'base': 'ao', 'letters': '\uA735' },
            { 'base': 'au', 'letters': '\uA737' },
            { 'base': 'av', 'letters': '\uA739\uA73B' },
            { 'base': 'ay', 'letters': '\uA73D' },
            { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
            { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
            { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
            { 'base': 'dz', 'letters': '\u01F3\u01C6' },
            { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
            { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
            { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
            { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
            { 'base': 'hv', 'letters': '\u0195' },
            { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
            { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
            { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
            { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
            { 'base': 'lj', 'letters': '\u01C9' },
            { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
            { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
            { 'base': 'nj', 'letters': '\u01CC' },
            { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
            { 'base': 'oi', 'letters': '\u01A3' },
            { 'base': 'ou', 'letters': '\u0223' },
            { 'base': 'oo', 'letters': '\uA74F' },
            { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
            { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
            { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
            { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
            { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
            { 'base': 'tz', 'letters': '\uA729' },
            { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
            { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
            { 'base': 'vy', 'letters': '\uA761' },
            { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
            { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
            { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
            { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
        ];
        this.AccentsMap = {};
        for (var i = 0; i < this.defaultAccentsRemovalMap.length; i++) {
            var letters = this.defaultAccentsRemovalMap[i].letters;
            for (var j = 0; j < letters.length; j++) {
                this.AccentsMap[letters[j]] = this.defaultAccentsRemovalMap[i].base;
            }
        }
    }
    NombreSearchPipe.prototype.removeAccents = function (str) {
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return this.AccentsMap[a] || a;
        }.bind(this));
    };
    NombreSearchPipe.prototype.transform = function (funcionarios, searchNombre, defaultFilter) {
        var _this = this;
        if (!searchNombre) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchNombre && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchNombre);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchNombre[keyName], 'gi').test(_this.removeAccents(item[keyName]))) || searchNombre[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchNombre[key], 'gi').test(_this.removeAccents(it[key])) || searchNombre[key] == "";
                    });
                });
            }
        }
    };
    NombreSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'NombreSearchPipe', pure: false }),
        __metadata("design:paramtypes", [])
    ], NombreSearchPipe);
    return NombreSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/nomusuario-search.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/pipes/search/nomusuario-search.pipe.ts ***!
  \**************************************************************/
/*! exports provided: NomusuarioSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomusuarioSearchPipe", function() { return NomusuarioSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NomusuarioSearchPipe = /** @class */ (function () {
    function NomusuarioSearchPipe() {
    }
    NomusuarioSearchPipe.prototype.transform = function (funcionarios, searchUsuario, defaultFilter) {
        if (!searchUsuario) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchUsuario && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchUsuario);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchUsuario[keyName], 'gi').test(item[keyName])) || searchUsuario[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchUsuario[key], 'gi').test(it[key]) || searchUsuario[key] == "";
                    });
                });
            }
        }
    };
    NomusuarioSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'NomusuarioSearchPipe', pure: false })
    ], NomusuarioSearchPipe);
    return NomusuarioSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/numeroemp-search.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/pipes/search/numeroemp-search.pipe.ts ***!
  \*************************************************************/
/*! exports provided: NumeroempSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumeroempSearchPipe", function() { return NumeroempSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumeroempSearchPipe = /** @class */ (function () {
    function NumeroempSearchPipe() {
    }
    NumeroempSearchPipe.prototype.transform = function (funcionarios, searchNumero, defaultFilter) {
        if (!searchNumero) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchNumero && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchNumero);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchNumero[keyName], 'gi').test(item[keyName])) || searchNumero[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchNumero[key], 'gi').test(it[key]) || searchNumero[key] == "";
                    });
                });
            }
        }
    };
    NumeroempSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'NumeroempSearchPipe', pure: false })
    ], NumeroempSearchPipe);
    return NumeroempSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (funcionarios, searchText, defaultFilter) {
        if (!searchText) {
            return funcionarios;
        }
        if (!Array.isArray(funcionarios)) {
            return funcionarios;
        }
        if (searchText && Array.isArray(funcionarios)) {
            var filterKeys_1 = Object.keys(searchText);
            if (defaultFilter) {
                return funcionarios.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(searchText[keyName], 'gi').test(item[keyName])) || searchText[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(searchText[key], 'gi').test(it[key]) || searchText[key] == "";
                    });
                });
            }
        }
    };
    UserSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'UserSearchPipe', pure: false })
    ], UserSearchPipe);
    return UserSearchPipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-membership-membership-module~app-pages-pages-module.898633032414bb6c42a6.js.map