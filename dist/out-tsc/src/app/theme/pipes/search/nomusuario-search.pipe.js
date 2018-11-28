"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        core_1.Pipe({ name: 'NomusuarioSearchPipe', pure: false })
    ], NomusuarioSearchPipe);
    return NomusuarioSearchPipe;
}());
exports.NomusuarioSearchPipe = NomusuarioSearchPipe;
//# sourceMappingURL=nomusuario-search.pipe.js.map