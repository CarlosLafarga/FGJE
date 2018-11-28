"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AgenciaSearchPipe = /** @class */ (function () {
    function AgenciaSearchPipe() {
    }
    AgenciaSearchPipe.prototype.removeAccents = function (str) {
        // return str.replace(/[^\u0000-\u007E]/g, function(a) {
        //   return this.AccentsMap[a] || a;
        // }.bind(this));
        return str.normalize('NFD')
            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
            .normalize();
        // return str
        //         .replace(/á/g, 'a')            
        //         .replace(/é/g, 'e')
        //         .replace(/í/g, 'i')
        //         .replace(/ó/g, 'o')
        //         .replace(/ú/g, 'u')
        //         .replace(/Ú/g, 'U');
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
                        return (x && new RegExp(_this.removeAccents(searchAgencia[nombre]), 'gi').test(_this.removeAccents(it[nombre]))) || searchAgencia[nombre] == "";
                    }, true);
                });
            }
            else {
                return funcionarios.filter(function (it) {
                    return filtrados_1.some(function (key) {
                        return new RegExp(_this.removeAccents(searchAgencia[key]), 'gi').test(_this.removeAccents(it[key])) || searchAgencia[key] == "";
                    });
                });
            }
        }
    };
    AgenciaSearchPipe = __decorate([
        core_1.Pipe({ name: 'AgenciaSearchPipe', pure: false })
    ], AgenciaSearchPipe);
    return AgenciaSearchPipe;
}());
exports.AgenciaSearchPipe = AgenciaSearchPipe;
//# sourceMappingURL=agencia-search.pipe.js.map