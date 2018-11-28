"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        core_1.Pipe({ name: 'ActivosSearchPipe', pure: false })
    ], ActivosSearchPipe);
    return ActivosSearchPipe;
}());
exports.ActivosSearchPipe = ActivosSearchPipe;
//# sourceMappingURL=activos-search.pipe.js.map