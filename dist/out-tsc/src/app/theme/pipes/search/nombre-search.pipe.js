"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NombreSearchPipe = /** @class */ (function () {
    function NombreSearchPipe() {
    }
    NombreSearchPipe.prototype.removeAccents = function (str) {
        // return str.replace(/[^\u0000-\u007E]/g, function(a) {
        //   return this.AccentsMap[a] || a;
        // }.bind(this));
        return str.normalize('NFD')
            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
            .normalize();
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
                        return (x && new RegExp(_this.removeAccents(searchNombre[keyName]), 'gi').test(_this.removeAccents(item[keyName]))) || searchNombre[keyName] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filterKeys_1.some(function (key) {
                        return new RegExp(_this.removeAccents(searchNombre[key]), 'gi').test(_this.removeAccents(it[key])) || searchNombre[key] == "";
                    });
                });
            }
        }
    };
    NombreSearchPipe = __decorate([
        core_1.Pipe({ name: 'NombreSearchPipe', pure: false })
    ], NombreSearchPipe);
    return NombreSearchPipe;
}());
exports.NombreSearchPipe = NombreSearchPipe;
//# sourceMappingURL=nombre-search.pipe.js.map