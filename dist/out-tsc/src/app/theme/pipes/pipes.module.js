"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_pipes_1 = require("ngx-pipes");
var profilePicture_pipe_1 = require("./profilePicture/profilePicture.pipe");
var chat_person_search_pipe_1 = require("./search/chat-person-search.pipe");
var user_search_pipe_1 = require("./search/user-search.pipe");
var truncate_pipe_1 = require("./truncate/truncate.pipe");
var mail_search_pipe_1 = require("./search/mail-search.pipe");
var funcionario_search_pipe_1 = require("./search/funcionario-search.pipe");
var activos_search_pipe_1 = require("./search/activos-search.pipe");
var numeroemp_search_pipe_1 = require("./search/numeroemp-search.pipe");
var nombre_search_pipe_1 = require("./search/nombre-search.pipe");
var appaterno_search_pipe_1 = require("./search/appaterno-search.pipe");
var apmaterno_search_pipe_1 = require("./search/apmaterno-search.pipe");
var nomusuario_search_pipe_1 = require("./search/nomusuario-search.pipe");
var agencia_search_pipe_1 = require("./search/agencia-search.pipe");
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_pipes_1.NgPipesModule
            ],
            declarations: [
                profilePicture_pipe_1.ProfilePicturePipe,
                chat_person_search_pipe_1.ChatPersonSearchPipe,
                user_search_pipe_1.UserSearchPipe,
                truncate_pipe_1.TruncatePipe,
                mail_search_pipe_1.MailSearchPipe,
                funcionario_search_pipe_1.FuncionarioSearchPipe,
                activos_search_pipe_1.ActivosSearchPipe,
                numeroemp_search_pipe_1.NumeroempSearchPipe,
                nombre_search_pipe_1.NombreSearchPipe,
                appaterno_search_pipe_1.AppaternoSearchPipe,
                apmaterno_search_pipe_1.ApmaternoSearchPipe,
                nomusuario_search_pipe_1.NomusuarioSearchPipe,
                agencia_search_pipe_1.AgenciaSearchPipe
            ],
            exports: [
                profilePicture_pipe_1.ProfilePicturePipe,
                chat_person_search_pipe_1.ChatPersonSearchPipe,
                user_search_pipe_1.UserSearchPipe,
                truncate_pipe_1.TruncatePipe,
                mail_search_pipe_1.MailSearchPipe,
                funcionario_search_pipe_1.FuncionarioSearchPipe,
                activos_search_pipe_1.ActivosSearchPipe,
                numeroemp_search_pipe_1.NumeroempSearchPipe,
                nombre_search_pipe_1.NombreSearchPipe,
                appaterno_search_pipe_1.AppaternoSearchPipe,
                apmaterno_search_pipe_1.ApmaternoSearchPipe,
                nomusuario_search_pipe_1.NomusuarioSearchPipe,
                agencia_search_pipe_1.AgenciaSearchPipe
            ]
        })
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map