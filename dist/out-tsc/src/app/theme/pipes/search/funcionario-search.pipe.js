"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        core_1.Pipe({ name: 'FuncionarioSearchPipe', pure: false })
    ], FuncionarioSearchPipe);
    return FuncionarioSearchPipe;
}());
exports.FuncionarioSearchPipe = FuncionarioSearchPipe;
//# sourceMappingURL=funcionario-search.pipe.js.map