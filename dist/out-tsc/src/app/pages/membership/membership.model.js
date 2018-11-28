"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());
exports.UserProfile = UserProfile;
var UserWork = /** @class */ (function () {
    function UserWork() {
    }
    return UserWork;
}());
exports.UserWork = UserWork;
var UserContacts = /** @class */ (function () {
    function UserContacts() {
    }
    return UserContacts;
}());
exports.UserContacts = UserContacts;
var UserSocial = /** @class */ (function () {
    function UserSocial() {
    }
    return UserSocial;
}());
exports.UserSocial = UserSocial;
var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());
exports.UserSettings = UserSettings;
// Mostrar resultados de la busqueda de funcionarios. (tabla Funcionario)
var FuncionariosData = /** @class */ (function () {
    function FuncionariosData() {
    }
    return FuncionariosData;
}());
exports.FuncionariosData = FuncionariosData;
// Datos de la agencia. (tabla CatDiscriminante)
var FuncionarioAgencia = /** @class */ (function () {
    function FuncionarioAgencia() {
    }
    return FuncionarioAgencia;
}());
exports.FuncionarioAgencia = FuncionarioAgencia;
// Datos de usuario especifico. (tabla Usuario)
var FuncionarioUsuario = /** @class */ (function () {
    function FuncionarioUsuario() {
    }
    return FuncionarioUsuario;
}());
exports.FuncionarioUsuario = FuncionarioUsuario;
// Roles de usuario especifico. (tabla UsuarioRol)
// export class FuncionarioUsuarioRol {
//   Usuario_id: number;
//   rol_id: number;
//   dFechaInicio: Date;
//   dFechaFin: Date;
//   esPrincipal: number;
// }
// Catálogo de agencias. (tabla CatDiscriminante)
var Agencias = /** @class */ (function () {
    function Agencias() {
    }
    return Agencias;
}());
exports.Agencias = Agencias;
var catUIE = /** @class */ (function () {
    function catUIE() {
    }
    return catUIE;
}());
exports.catUIE = catUIE;
// Catálogo de roles (tabla Rol)
var Roles = /** @class */ (function () {
    function Roles() {
    }
    return Roles;
}());
exports.Roles = Roles;
// Roles de usuario especifico. (tabla UsuarioRol)
var FuncionarioUsuarioRol = /** @class */ (function () {
    function FuncionarioUsuarioRol() {
    }
    return FuncionarioUsuarioRol;
}());
exports.FuncionarioUsuarioRol = FuncionarioUsuarioRol;
var FunciAgencia = /** @class */ (function () {
    function FunciAgencia() {
    }
    return FunciAgencia;
}());
exports.FunciAgencia = FunciAgencia;
var usuario = /** @class */ (function () {
    function usuario() {
    }
    return usuario;
}());
exports.usuario = usuario;
var usuarioRol = /** @class */ (function () {
    function usuarioRol() {
    }
    return usuarioRol;
}());
exports.usuarioRol = usuarioRol;
var CambioAdscripcion = /** @class */ (function () {
    function CambioAdscripcion(iClaveFuncionarioSolicitante, iClaveFuncionarioAnterior, iClaveFuncionarioExp, catDiscriminateSolicitante, catUIE_actual, catDiscriminateNuevo, Justificacion, pendientes, rolesFuncionario, esPrincipal, esMP, funcion_roles) {
        this.iClaveFuncionarioSolicitante = iClaveFuncionarioSolicitante;
        this.iClaveFuncionarioAnterior = iClaveFuncionarioAnterior;
        this.iClaveFuncionarioExp = iClaveFuncionarioExp;
        this.catDiscriminateSolicitante = catDiscriminateSolicitante;
        this.catUIE_actual = catUIE_actual;
        this.catDiscriminateNuevo = catDiscriminateNuevo;
        this.Justificacion = Justificacion;
        this.pendientes = pendientes;
        this.rolesFuncionario = rolesFuncionario;
        this.esPrincipal = esPrincipal;
        this.esMP = esMP;
        this.funcion_roles = funcion_roles;
    }
    return CambioAdscripcion;
}());
exports.CambioAdscripcion = CambioAdscripcion;
var ExpPendientes = /** @class */ (function () {
    function ExpPendientes() {
    }
    return ExpPendientes;
}());
exports.ExpPendientes = ExpPendientes;
var AsignarPendientes = /** @class */ (function () {
    function AsignarPendientes(catDiscriminante, iclavefuncionarioAnt, iclavefuncionarioNuevo) {
        this.catDiscriminante = catDiscriminante;
        this.iclavefuncionarioAnt = iclavefuncionarioAnt;
        this.iclavefuncionarioNuevo = iclavefuncionarioNuevo;
    }
    return AsignarPendientes;
}());
exports.AsignarPendientes = AsignarPendientes;
var cambioEstatus = /** @class */ (function () {
    function cambioEstatus(iclavefuncionario, estatus, justificacion) {
        this.iclavefuncionario = iclavefuncionario;
        this.estatus = estatus;
        this.justificacion = justificacion;
    }
    return cambioEstatus;
}());
exports.cambioEstatus = cambioEstatus;
var cambioMP = /** @class */ (function () {
    function cambioMP(iclavefuncionario, esMP, justificacion) {
        this.iclavefuncionario = iclavefuncionario;
        this.esMP = esMP;
        this.justificacion = justificacion;
    }
    return cambioMP;
}());
exports.cambioMP = cambioMP;
// export class ExpPendientesTabla {
//   public iclaveFuncionario: number;
//   public catDis_ant: string
// }
//# sourceMappingURL=membership.model.js.map