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
var loginServices = /** @class */ (function () {
    function loginServices(http) {
        this.http = http;
        this.general = "http://localhost:55244/api";
        // public general = "http://192.168.105.53:55245/api";
        this.url = this.general + "/Auth/";
        this.loggedInStatus = false;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    loginServices.prototype.setLoggedIn = function (value) {
        console.log("PARAMETRO VALUE => " + value);
        this.loggedInStatus = value;
        localStorage.setItem('isLoggedIn', this.loggedInStatus + '');
        console.log("PARAMETRO LOGGEDINSTATUS => " + this.loggedInStatus);
    };
    Object.defineProperty(loginServices.prototype, "isLoggedIn", {
        get: function () {
            console.log("LOGGEDINSATATUS DEL SI LOGGEDIND => " + this.loggedInStatus);
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    loginServices.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    loginServices.prototype.userAuth = function (username, password) {
        return this.http.get(this.url + "?username=" + username + "&passwordd=" + password);
    };
    loginServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], loginServices);
    return loginServices;
}());
exports.loginServices = loginServices;
//# sourceMappingURL=login.service.js.map