"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var MembershipService = /** @class */ (function () {
    function MembershipService(http) {
        this.http = http;
        this.general = "http://localhost:55244/api";
        // public general = "http://192.168.105.53:55245/api";
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
        this.url15 = this.general + "/HelperAgencia";
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
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
    MembershipService.prototype.getCounthelper = function (iclave, catdis) {
        return this.http.get(this.url15 + "?iclavefuncionario=" + iclave + "+&catdiscriminate=" + catdis);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MembershipService);
    return MembershipService;
}());
exports.MembershipService = MembershipService;
//# sourceMappingURL=membership.service.js.map