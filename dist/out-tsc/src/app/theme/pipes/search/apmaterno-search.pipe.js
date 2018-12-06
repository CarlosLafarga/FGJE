"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApmaternoSearchPipe = /** @class */ (function () {
    function ApmaternoSearchPipe() {
    }
    ApmaternoSearchPipe.prototype.removeAccents = function (str) {
        // return str.replace(/[^\u0000-\u007E]/g, function(a) {
        //   return this.AccentsMap[a] || a;
        // }.bind(this));
        return str.normalize('NFD')
            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
            .normalize();
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
                        return (x && new RegExp(_this.removeAccents(searchApMaterno[keyName]), 'gi').test(_this.removeAccents(item[keyName]))) || searchApMaterno[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(_this.removeAccents(searchApMaterno[key]), 'gi').test(_this.removeAccents(it[key])) || searchApMaterno[key] == "";
                    });
                });
            }
        }
    };
    ApmaternoSearchPipe = __decorate([
        core_1.Pipe({ name: 'ApmaternoSearchPipe', pure: false })
    ], ApmaternoSearchPipe);
    return ApmaternoSearchPipe;
}());
exports.ApmaternoSearchPipe = ApmaternoSearchPipe;
//# sourceMappingURL=apmaterno-search.pipe.js.map