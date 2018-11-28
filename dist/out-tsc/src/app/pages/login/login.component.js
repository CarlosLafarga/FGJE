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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var login_service_1 = require("./login.service");
var sweetalert2_1 = require("sweetalert2");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, loginservices) {
        this.loginservices = loginservices;
        this.error = '';
        this.router = router;
        this.form = fb.group({
            'usuario': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.nullValidator])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
        this.usuario = this.form.controls['usuario'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginservices.userAuth(this.form.value['usuario'], this.form.value['password']).subscribe(function (data) {
            _this.loginservices.setLoggedIn(true);
            _this.router.navigate(['/pages/membership']);
        }, function (error) {
            _this.error = error;
            sweetalert2_1.default({
                title: "Error",
                text: "Usuario o Contraseña incorrecta",
                type: "error"
            }).then(function () {
                _this.form.reset();
            });
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            providers: [login_service_1.loginServices],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, login_service_1.loginServices])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map