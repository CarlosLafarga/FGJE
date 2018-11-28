"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        core_1.Pipe({ name: 'NumeroempSearchPipe', pure: false })
    ], NumeroempSearchPipe);
    return NumeroempSearchPipe;
}());
exports.NumeroempSearchPipe = NumeroempSearchPipe;
//# sourceMappingURL=numeroemp-search.pipe.js.map