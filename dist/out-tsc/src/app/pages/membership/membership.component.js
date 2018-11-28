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
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_toastr_1 = require("ngx-toastr");
var membership_model_1 = require("./membership.model");
var membership_service_1 = require("./membership.service");
var menu_service_1 = require("../../theme/components/menu/menu.service");
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var common_1 = require("@angular/common");
var MembershipComponent = /** @class */ (function () {
    function MembershipComponent(router, fbf, fbExpPend, toastrService, membershipService, menuService, modalService, location) {
        var _this = this;
        this.fbf = fbf;
        this.fbExpPend = fbExpPend;
        this.toastrService = toastrService;
        this.membershipService = membershipService;
        this.menuService = menuService;
        this.modalService = modalService;
        this.location = location;
        this.funcionarios = [];
        this.roles = [];
        this.funcionarioRol = [];
        this.agencias = [];
        this.type = 'list';
        this.genders = ['male', 'female'];
        this.selectedRol = 0;
        this.selectedRolF = 0;
        this.posicionRol = 0;
        this.posicionRolF = 0;
        this.funciAgencia = [];
        this.catUIE = [];
        this.val = [];
        this.funciMP = [];
        this.clavedelactaul = [];
        this.expPendientes = false;
        this.esMP = false;
        this.soloRoles = false;
        this.mostrarActivos = true;
        this.prueba = false;
        this.searchActivos = "1";
        this.searchNumero = "";
        this.searchNombre = "";
        this.searchApPaterno = "";
        this.searchApMaterno = "";
        this.searchUsuario = "";
        this.searchAgencia = "";
        // =============================================
        this.menuSelectOptions = [];
        this.rev = true;
        this.countHelperExp = 0;
        /*Activar MP*/
        this.rev1 = true;
        this.rev2 = true;
        this.valReasignarExpedientes = true;
        this.valExpPendCheck = true;
        this.valEsMPCheck = true;
        this.valSolocambioCheck = true;
        this.valAgenciaSelect = true;
        //   let sinDiacriticos = (function(){
        //     let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
        //          a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
        //         re = new RegExp('['+de+']' , 'ug');
        //     return texto =>
        //         texto.replace(
        //             re, 
        //             match => a.charAt(de.indexOf(match))
        //         );
        // })();
        this.rolesFunci = [];
        this.rolesSR = [];
        this.inputOptions = {};
        this.FunAgPendientes = [];
        // Se quita el rol a los roles del funcionario
        this.rolesEliminados = [];
        this.funcionarioSeleccionado = "";
        this.radioAsign = false;
        this.expPendientesLista = [];
        this.funcinariosAgencia = [];
        this.selectedExpPend = 0;
        this.funcinarioAgencia = [];
        this.rolesFun = [];
        this.router = router;
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems.forEach(function (item) {
            var menu = {
                id: item.id,
                name: item.title
            };
            _this.menuSelectOptions.push(menu);
        });
    }
    MembershipComponent.prototype.ngOnInit = function () {
        this.getFuncionarios();
        this.getAgencias();
        this.getRoles();
        this.formExpPend = this.fbExpPend.group({
            cambioAdscripcion_id: null,
            iclaveFuncionario: null,
            catDis_ant: null,
            catDis_asignado: null,
            fecha_creacion: null,
            fecha_modificacion: null,
            esEmp: null,
            Asignados: null,
            iclaveFuncionarioAsign: 0,
            catDiscriminanteAnt: null,
            rolesFAsign: 0
        });
        this.form = this.fbf.group({
            iClaveFuncionario: null,
            cNombreFuncionario: null,
            cApellidoPaternoFuncionario: null,
            cApellidoMaternoFuncionario: null,
            cSexo: null,
            cRFC: null,
            cCURP: null,
            dFechaNacimiento: null,
            cEmail: null,
            cCedula: null,
            iClaveFuncionarioJefe: null,
            especialidad_val: null,
            puesto_val: null,
            jerarquiaOrganizacional_id: null,
            dcCargaTrabajo: null,
            tipoEspecialidad_val: null,
            bEsPar: null,
            cNumeroEmpleado: null,
            catDiscriminante_id: null,
            dFechaIngreso: null,
            archivoDigital_id: null,
            catUIE_id: null,
            catAreasNegocio_id: null,
            esMP: null,
            cNumeroCertificado: null,
            bEsActivo: null,
            cClaveUsuario: null,
            cNombre: null,
            usuario: null,
            numeroExpediente: null
        });
    };
    MembershipComponent.prototype.ngOnDestroy = function () {
        console.log("onDestroy membership");
    };
    MembershipComponent.prototype.controlActivos = function (funcionario) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Desactivar usuario',
            text: '¿Esta seguro que desea desactivar al usuario?',
            type: 'warning',
            html: '<b>¿Esta seguro que desea desactivar al usuario?</b><br><label><b>Justificacion:</b></label>',
            input: 'text',
            inputValidator: function (value) {
                return !value && 'Por favor ingrese la justificacion.';
            },
            showCancelButton: true,
            confirmButtonText: 'Desactivar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                // const act = e.target.checked;
                var valor = 0;
                funcionario.bEsActivo = 0;
                //  console.log("Se desactiva el funcionario => " + funcionario.cNombreFuncionario );
                //  console.log(valor);      
                var justificacion = result.value;
                var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                var cambioEstatus1 = new membership_model_1.cambioEstatus(iclaveFuncionarionew, valor, justificacion);
                _this.cambioEstatus(cambioEstatus1);
                sweetalert2_1.default({
                    title: "Usuario desactivado'",
                    text: "Desactivacion exitosa",
                    type: "success"
                }).then(function () {
                    //  location.reload();
                });
            }
            else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                _this.rev = true;
            }
        });
    };
    MembershipComponent.prototype.controlInactivo = function (funcionario) {
        var _this = this;
        // console.log(funcionario);
        var iclaveFunSelect = funcionario.iClaveFuncionario;
        var catDisc = funcionario.catDiscriminante_id;
        // console.log(iclaveFunSelect + " " + catDisc);
        this.membershipService.getCounthelper(iclaveFunSelect, catDisc).subscribe(function (countHelperExp) {
            _this.countHelperExp = countHelperExp;
            if (_this.countHelperExp > 0) {
                _this.getFunAgPendientes(catDisc);
                sweetalert2_1.default({
                    title: 'CUIDADO!',
                    text: "El funcionario tiene expedientes en la agencia seleccionada, " +
                        "si lo cambia a esta agencia tomará el control de los mismos, " +
                        "¿desea continuar?",
                    type: 'warning',
                    showCancelButton: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#aaa',
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Reasignar expedientes'
                }).then(function (result) {
                    if (result.value) {
                        sweetalert2_1.default('Confirmado', 'Puede seguir con el proceso.', 'success');
                        sweetalert2_1.default({
                            title: 'Activar usuario',
                            text: '¿Esta seguro que desea activar al usuario?',
                            type: 'warning',
                            html: '<b>¿Esta seguro que desea Activar al usuario?</b><br><label><b>Justificacion:</b></label>',
                            input: 'text',
                            inputValidator: function (value) {
                                return !value && 'Por favor ingrese la justificacion.';
                            },
                            showCancelButton: true,
                            confirmButtonText: 'Activar',
                            cancelButtonText: 'Cancelar'
                        }).then(function (result) {
                            // console.log(result.value);
                            if (result.value) {
                                // const inact = e.target.checked;
                                var valor = 1;
                                // console.log(funcionario);
                                funcionario.bEsActivo = 1;
                                // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
                                // console.log(valor);
                                var justificacion = result.value;
                                var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                                var cambioEstatus1 = new membership_model_1.cambioEstatus(iclaveFuncionarionew, valor, justificacion);
                                _this.cambioEstatus(cambioEstatus1);
                                sweetalert2_1.default({
                                    title: "Usuario Activado",
                                    text: "Activacion exitosa",
                                    type: "success"
                                }).then(function () {
                                    // location.reload();
                                });
                            }
                            else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                                // console.log("Se cancelo la activación")
                            }
                        });
                    }
                    else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                        sweetalert2_1.default.mixin({
                            title: 'Reasignar',
                            text: "Seleccione un funcinario para continuar con la reasignación.",
                            type: 'warning',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            input: 'select',
                            inputOptions: _this.inputOptions,
                            inputPlaceholder: 'Seleccione un funcionario',
                            showCancelButton: true,
                            confirmButtonText: 'Siguiente &rarr;',
                            cancelButtonText: 'Cancelar',
                            progressSteps: ['1', '2'],
                            inputValidator: function (value) {
                                return !value && 'Favor de escoger al funcionario a quien reasignara expedientes.';
                            },
                        }).queue([
                            {},
                            {
                                title: 'Justificacion',
                                inputPlaceholder: 'Justificación',
                                text: 'Justifique el motivo de la reasignación de expedientes.',
                                input: 'text',
                                inputValidator: function (value) {
                                    return !value && 'Por favor ingrese la justificacion.';
                                },
                            }
                        ]).then(function (result) {
                            if (result.value) {
                                var iclaveFNuevo = parseInt(result.value[0]);
                                sweetalert2_1.default({
                                    title: 'Confirmar',
                                    text: "¿Esta usted seguro(a) de continuar con la reasignación de los expedientes?",
                                    confirmButtonText: 'Aceptar',
                                    showCancelButton: true,
                                    allowOutsideClick: false,
                                    allowEscapeKey: false,
                                    cancelButtonText: 'Cancelar',
                                    confirmButtonColor: '#4BAE4F',
                                    cancelButtonColor: '#d33',
                                }).then(function (result) {
                                    if (result.value) {
                                        // const iclaveFAnt: number = clave;
                                        var asignar = new membership_model_1.AsignarPendientes(catDisc, iclaveFNuevo, iclaveFunSelect);
                                        console.log(asignar);
                                        _this.asignarExpPendientes(asignar);
                                        sweetalert2_1.default('Confirmado', 'Los expedientes se han reasignado correctamente.', 'success');
                                    }
                                    else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                                        sweetalert2_1.default({
                                            type: 'error',
                                            title: 'Cancelado',
                                            text: 'Se ha cancelado la reasignación de los expedientes.',
                                        });
                                    }
                                });
                            }
                            else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                                sweetalert2_1.default({
                                    type: 'error',
                                    title: 'Cancelado',
                                    text: 'Se ha cancelado la reasignación de los expedientes.',
                                });
                            }
                        });
                    }
                });
            }
            else {
                sweetalert2_1.default({
                    title: 'Activar usuario',
                    text: '¿Esta seguro que desea activar al usuario?',
                    type: 'warning',
                    html: '<b>¿Esta seguro que desea Activar al usuario?</b><br><label><b>Justificacion:</b></label>',
                    input: 'text',
                    inputValidator: function (value) {
                        return !value && 'Por favor ingrese la justificacion.';
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Activar',
                    cancelButtonText: 'Cancelar'
                }).then(function (result) {
                    // console.log(result.value);
                    if (result.value) {
                        // const inact = e.target.checked;
                        var valor = 1;
                        // console.log(funcionario);
                        funcionario.bEsActivo = 1;
                        // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
                        // console.log(valor);
                        var justificacion = result.value;
                        var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                        var cambioEstatus1 = new membership_model_1.cambioEstatus(iclaveFuncionarionew, valor, justificacion);
                        _this.cambioEstatus(cambioEstatus1);
                        sweetalert2_1.default({
                            title: "Usuario Activado",
                            text: "Activacion exitosa",
                            type: "success"
                        }).then(function () {
                            // location.reload();
                        });
                    }
                    else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                        // console.log("Se cancelo la activación")
                    }
                });
            }
            _this.inputOptions = {};
        });
    };
    MembershipComponent.prototype.activarMP = function (funcionario) {
        var _this = this;
        if (funcionario.esMP === 0) {
            sweetalert2_1.default({
                title: 'Activar MP ',
                text: '¿Esta seguro que desea activar al funcionario como MP?',
                type: 'warning',
                html: '<b>¿Esta seguro que desea activar al funcionario como MP?</b><br><label><b>Justificacion:</b></label>',
                input: 'text',
                inputValidator: function (value) {
                    return !value && 'Por favor ingrese la justificacion.';
                },
                showCancelButton: true,
                confirmButtonText: 'Activar',
                cancelButtonText: 'Cancelar'
            }).then(function (result) {
                if (result.value) {
                    // const act = e.target.checked;
                    var valor = 1;
                    funcionario.esMP = 1;
                    //  console.log("Se Activo el funcionario con la bandera MP => " + funcionario.cNombreFuncionario );
                    //  console.log(valor);      
                    var justificacion = result.value;
                    var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                    var cambioMP2 = new membership_model_1.cambioMP(iclaveFuncionarionew, valor, justificacion);
                    _this.cambioMP1(cambioMP2);
                    sweetalert2_1.default({
                        title: "Funcionario ahora es MP'",
                        text: "Funcionario ahora es MP",
                        type: "success"
                    }).then(function () {
                        //  location.reload();
                    });
                }
                else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                    _this.rev1 = true;
                }
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Desactivar MP ',
                text: '¿Esta seguro que desea desactivar al funcionario como MP?',
                type: 'warning',
                html: '<b>¿Esta seguro que desea desactivar al funcionario como MP?</b><br><label><b>Justificacion:</b></label>',
                input: 'text',
                inputValidator: function (value) {
                    return !value && 'Por favor ingrese la justificacion.';
                },
                showCancelButton: true,
                confirmButtonText: 'Desactivar',
                cancelButtonText: 'Cancelar'
            }).then(function (result) {
                if (result.value) {
                    // const act = e.target.checked;
                    var valor = 0;
                    funcionario.esMP = 0;
                    //  console.log("Se desactiva el funcionario con la bandera MP => " + funcionario.cNombreFuncionario );
                    //  console.log(valor);      
                    var justificacion = result.value;
                    var iclaveFuncionarionew = funcionario.iClaveFuncionario;
                    var cambioMP2 = new membership_model_1.cambioMP(iclaveFuncionarionew, valor, justificacion);
                    _this.cambioMP1(cambioMP2);
                    sweetalert2_1.default({
                        title: "Funcionario ahora ya no es MP'",
                        text: "Funcionario ahora ya no es MP",
                        type: "success"
                    }).then(function () {
                        //  location.reload();
                    });
                }
                else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                    _this.rev2 = true;
                }
            });
        }
    };
    /*DESACTIVAR MP*/
    MembershipComponent.prototype.desactivarMP = function () {
        sweetalert2_1.default({
            title: 'Cuidado!!',
            text: '¿Solo los funcionarios activos pueden acceder a esta funcion.?',
            type: 'warning',
            confirmButtonText: 'Aceptar',
        });
    };
    MembershipComponent.prototype.pageRefresh = function () {
        this.form.reset();
        // this.router.navigate(['/pages/blank']);
        // this.router.navigate(['/pages/membership']);
        location.reload();
    };
    MembershipComponent.prototype.pendientesCheck = function (e) {
        this.expPendientes = e.target.checked;
        if (this.radioAsign || this.expPendientes) {
            this.prueba = true;
        }
        if (this.expPendientes) {
            this.valReasignarExpedientes = false;
            this.valSolocambioCheck = false;
        }
        else {
            this.valReasignarExpedientes = true;
            this.valSolocambioCheck = true;
        }
    };
    MembershipComponent.prototype.esMPCheck = function (e) {
        this.esMP = e.target.checked;
        if (this.esMP) {
            this.valSolocambioCheck = false;
        }
        else {
            this.valSolocambioCheck = true;
        }
    };
    MembershipComponent.prototype.soloRolesCheck = function (e) {
        this.soloRoles = e.target.checked;
        if (this.soloRoles) {
            this.prueba = true;
            this.valReasignarExpedientes = false;
            this.valExpPendCheck = false;
            this.valEsMPCheck = false;
            this.valAgenciaSelect = false;
            // console.log(this.count);
        }
        else {
            this.prueba = false;
            if (this.count > 0) {
                this.valReasignarExpedientes = true;
                this.valExpPendCheck = true;
            }
            else {
                this.valReasignarExpedientes = false;
                this.valExpPendCheck = false;
                this.prueba = true;
            }
            this.valEsMPCheck = true;
            this.valAgenciaSelect = true;
            // console.log(this.count);
        }
    };
    MembershipComponent.prototype.soloActivos = function (e) {
        this.mostrarActivos = e.target.checked;
        if (this.mostrarActivos) {
            this.searchActivos = "1";
        }
        else if (!this.mostrarActivos) {
            this.searchActivos = "";
        }
        this.p = 1;
    };
    // public llamarRoles( clave:number){
    //   var names = "";
    //   this.membershipService.getFUsuarioRol(clave).subscribe( funcionarioRol => {
    //     this.funcionarioRol = funcionarioRol
    //     //console.log(this.funcionarioRol);
    //     var roles  = JSON.stringify(this.funcionarioRol);
    //     for(var i = 0; i<funcionarioRol.length; i++){
    //       names += "<b>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
    //       //console.log(names);
    //     }
    //     //console.log(names);
    //     swal({
    //       title: "<b>Roles Del Funcionario</b>", 
    //       html: "<b>" + names + "</b><br>",  
    //       confirmButtonText: "Aceptar", 
    //       confirmButtonColor: "#4BAE4F",
    //     });
    //   });
    // }
    MembershipComponent.prototype.llamarRoles = function (clave) {
        var _this = this;
        var names = "";
        this.membershipService.getFUsuarioRol(clave).subscribe(function (funcionarioRol) {
            _this.funcionarioRol = funcionarioRol;
            //console.log(this.funcionarioRol);
            var roles = JSON.stringify(_this.funcionarioRol);
            for (var i = 0; i < funcionarioRol.length; i++) {
                if (_this.funcionarioRol[i].esPrincipal == 1) {
                    names += "<b style= 'color:#ff0000'>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
                }
                else {
                    names += "<b>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
                }
                //console.log(names);
            }
            //console.log(names);
            sweetalert2_1.default({
                title: "<b>Roles Del Funcionario</b>",
                html: "<b>" + names + "</b><br>",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#4BAE4F",
            });
        });
    };
    MembershipComponent.prototype.recargarFuncionarios = function () {
        sweetalert2_1.default({
            position: 'center',
            type: 'success',
            showConfirmButton: false,
            timer: 3000
        });
        this.getFuncionarios();
    };
    // Se cargan los datos del funcionario
    MembershipComponent.prototype.getFuncionarios = function () {
        var _this = this;
        this.membershipService.getFuncionarios().subscribe(function (funcionarios) {
            _this.funcionarios = funcionarios;
            // console.log(this.funcionarios);
            for (var i = 0; i < _this.funcionarios.length; i++) {
                var ag = _this.funcionarios[i].catDiscriminante_id;
                for (var j = 0; j < _this.agencias.length; j++) {
                    if (ag === _this.agencias[j].catDiscriminante_id) {
                        var agNombre = _this.agencias[j].cNombre;
                        _this.funcionarios[i].cNombre = agNombre;
                    }
                }
            }
        });
    };
    MembershipComponent.prototype.cargarRoles = function (claveFuncionario) {
        var _this = this;
        this.membershipService.getFUsuarioRol(claveFuncionario).subscribe(function (rF) {
            _this.rolesFunci = rF;
        });
        return this.rolesFunci;
    };
    MembershipComponent.prototype.getRoles = function () {
        var _this = this;
        this.membershipService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
            // console.log(this.roles);
        });
    };
    // Obtener los roles del funcionario que se selecciona
    MembershipComponent.prototype.getFuncionarioRol = function (funcionario) {
        var _this = this;
        this.membershipService.getFUsuarioRol(funcionario.iClaveFuncionario).subscribe(function (funcionarioRol) {
            _this.funcionarioRol = funcionarioRol;
            // console.log(this.funcionarioRol);
            for (var i = 0; i < _this.funcionarioRol.length; i++) {
                var elementFR = _this.funcionarioRol[i];
                for (var j = 0; j < _this.roles.length; j++) {
                    var elementR = _this.roles[j];
                    if (elementFR.rol_id === elementR.rol_id) {
                        _this.roles.splice(j, 1);
                    }
                }
            }
        });
    };
    MembershipComponent.prototype.getCountExp1 = function (funcionario) {
        var _this = this;
        this.membershipService.getCountExp(funcionario.iClaveFuncionario, funcionario.catDiscriminante_id).subscribe(function (count) {
            _this.count = count;
            // console.log("Tiene estos expedientes pendientes => " + this.count);
            if (count == 0) {
                _this.valReasignarExpedientes = false;
                _this.valExpPendCheck = false;
                _this.prueba = true;
            }
            else if (count > 0) {
                _this.valReasignarExpedientes = true;
                _this.valExpPendCheck = true;
            }
        });
    };
    // Se cargan las agencias del catalogo
    MembershipComponent.prototype.getAgencias = function () {
        var _this = this;
        this.membershipService.getAgencias().subscribe(function (agencias) {
            _this.agencias = agencias;
            _this.agencias.sort(function (a, b) { return a.cClaveDiscriminante - b.cClaveDiscriminante; });
            // console.log(this.agencias);
        });
    };
    MembershipComponent.prototype.getFuncionarioAgencia = function (funcionario) {
        var _this = this;
        this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe(function (funciAgencia) {
            _this.funciAgencia = funciAgencia;
            console.log(_this.funciAgencia);
            _this.nAgActual = _this.funciAgencia.map(function (a) { return a.cNombre; });
            _this.nombreAgActual = _this.nAgActual[0];
            for (var i = 0; i < _this.funciAgencia.length; i++) {
                if (funcionario.iClaveFuncionario === _this.funciAgencia[i].iClaveFuncionario ||
                    _this.funciAgencia[i].usuario[0].bEsActivo === 0) {
                    _this.funciAgencia.splice(i, 1);
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.funciAgencia[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.funciAgencia[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.funciAgencia.splice(i, 1);
                }
            }
            // console.log(this.funciAgencia);
        });
    };
    MembershipComponent.prototype.getCatUIE = function (valor) {
        var _this = this;
        if (valor !== undefined) {
            // console.log(valor);
            this.membershipService.getcatUIE(valor).subscribe(function (catUIE) {
                _this.catUIE = catUIE;
                // console.log(this.catUIE);
                if (_this.catUIE.some(function (cat) { return cat.catUIE_id !== 0; })) {
                    _this.val = _this.catUIE.map(function (cat) { return cat.catUIE_id; });
                    console.log("");
                }
                else {
                    _this.val = [0];
                    // console.log(this.val);
                }
            });
        }
        else {
            // console.log("No se ha seleccionado agencia");
        }
        if (valor !== undefined) {
            this.membershipService.getfunciMP(valor).subscribe(function (funciMP) {
                _this.funciMP = funciMP;
                console.log("Este es el valor que comparan => " + valor);
                if (_this.funciMP.some(function (cat) { return cat.iClaveFuncionario !== 0; })) {
                    _this.clavedelactaul = _this.funciMP.map(function (cat) { return cat.iClaveFuncionario; });
                    // console.log(this.clavedelactaul);
                }
                else {
                    _this.clavedelactaul = [0];
                    // console.log(this.clavedelactaul);
                }
            });
        }
        if (valor !== undefined) {
            var clave = parseInt(document.getElementById("iclavefuncionarioselect").value);
            console.log(clave);
            this.membershipService.getCounthelper(clave, valor).subscribe(function (countHelper) {
                _this.countHelper = countHelper;
                console.log(countHelper);
                if (_this.countHelper > 0) {
                    _this.getFunAgPendientes(valor);
                    sweetalert2_1.default({
                        title: 'CUIDADO!',
                        text: "El funcionario tiene expedientes en la agencia seleccionada, " +
                            "si lo cambia a esta agencia tomará el control de los mismos, " +
                            "¿desea continuar?",
                        type: 'warning',
                        showCancelButton: true,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#aaa',
                        confirmButtonText: 'Aceptar',
                        cancelButtonText: 'Reasignar expedientes'
                    }).then(function (result) {
                        if (result.value) {
                            sweetalert2_1.default('Confirmado', 'Puede seguir con el proceso.', 'success');
                        }
                        else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                            sweetalert2_1.default.mixin({
                                title: 'Reasignar',
                                text: "Seleccione un funcinario para continuar con la reasignación.",
                                type: 'warning',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                input: 'select',
                                inputOptions: _this.inputOptions,
                                inputPlaceholder: 'Seleccione un funcionario',
                                showCancelButton: true,
                                confirmButtonText: 'Siguiente &rarr;',
                                cancelButtonText: 'Cancelar',
                                progressSteps: ['1', '2'],
                                inputValidator: function (value) {
                                    return !value && 'Favor de escoger al funcionario a quien reasignara expedientes.';
                                },
                            }).queue([
                                {},
                                {
                                    title: 'Justificacion',
                                    inputPlaceholder: 'Justificación',
                                    text: 'Justifique el motivo de la reasignación de expedientes.',
                                    input: 'text',
                                    inputValidator: function (value) {
                                        return !value && 'Por favor ingrese la justificacion.';
                                    },
                                }
                            ]).then(function (result) {
                                if (result.value) {
                                    var catDis = valor;
                                    var iclaveFNuevo = parseInt(result.value[0]);
                                    sweetalert2_1.default({
                                        title: 'Confirmar',
                                        text: "¿Esta usted seguro(a) de continuar con la reasignación de los expedientes?",
                                        confirmButtonText: 'Aceptar',
                                        showCancelButton: true,
                                        allowOutsideClick: false,
                                        allowEscapeKey: false,
                                        cancelButtonText: 'Cancelar',
                                        confirmButtonColor: '#4BAE4F',
                                        cancelButtonColor: '#d33',
                                    }).then(function (result) {
                                        if (result.value) {
                                            var iclaveFAnt = clave;
                                            var asignar = new membership_model_1.AsignarPendientes(catDis, iclaveFNuevo, iclaveFAnt);
                                            // console.log(asignar);
                                            _this.asignarExpPendientes(asignar);
                                            sweetalert2_1.default('Confirmado', 'Los expedientes se han reasignado correctamente.', 'success');
                                        }
                                        else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                                            sweetalert2_1.default({
                                                type: 'error',
                                                title: 'Cancelado',
                                                text: 'Se ha cancelado la reasignación de los expedientes.',
                                            });
                                        }
                                    });
                                }
                                else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
                                    sweetalert2_1.default({
                                        type: 'error',
                                        title: 'Cancelado',
                                        text: 'Se ha cancelado la reasignación de los expedientes.',
                                    });
                                }
                            });
                        }
                    });
                }
                _this.inputOptions = {};
            });
        }
    };
    MembershipComponent.prototype.getFunAgPendientes = function (catDiscriminantePendientes) {
        var _this = this;
        this.membershipService.getFUsuarioAgencia(catDiscriminantePendientes).subscribe(function (exp) {
            _this.FunAgPendientes = exp;
            // console.log(this.FunAgPendientes);
            for (var i = 0; i < _this.FunAgPendientes.length; i++) {
                if (_this.FunAgPendientes[i].usuario[0].bEsActivo === 0) {
                    _this.FunAgPendientes.splice(i, 1);
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.FunAgPendientes[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.FunAgPendientes[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.FunAgPendientes.splice(i, 1);
                }
            }
            for (var j = 0; j < _this.FunAgPendientes.length; j++) {
                var id = _this.FunAgPendientes[j].iClaveFuncionario;
                var name = _this.FunAgPendientes[j].cNombreFuncionario + " " + _this.FunAgPendientes[j].cApellidoPaternoFuncionario;
                _this.inputOptions[id] = name;
            }
            // console.log(this.inputOptions);
        });
    };
    // Se actualiza el funcionario seleccionado
    MembershipComponent.prototype.cambioAdscripcion1 = function (cambioAdscripcion) {
        var _this = this;
        this.membershipService.cambioAdscripcion(cambioAdscripcion).subscribe(function (cambioAdscripcion) {
            _this.cambioAdscripcion;
        });
        // console.log("Se ejecuto el cambio de adscripcion: " + cambioAdscripcion.iClaveFuncionarioSolicitante);
        sweetalert2_1.default({
            title: "Registro exitoso...",
            text: this.titularAgencia,
            type: "success"
        }).then(function () {
            _this.pageRefresh();
            _this.router.navigate(['/pages/membership']);
        });
    };
    MembershipComponent.prototype.cambioEstatus = function (cambioEstatus) {
        var _this = this;
        this.membershipService.cambioEstatus(cambioEstatus).subscribe(function (cambioEstatus) {
            _this.cambioEstatus;
        });
        // console.log("se ejecuto cambio de estatus.");
    };
    MembershipComponent.prototype.cambioMP1 = function (cambioMP) {
        var _this = this;
        this.membershipService.cambioMP(cambioMP).subscribe(function (cambioMP) {
            _this.cambioMP;
        });
    };
    MembershipComponent.prototype.toggle = function (type) {
        this.type = type;
    };
    // Se dispara con el evento del clic cuando se selecciona un rol del catálogo
    MembershipComponent.prototype.onSelectRol = function (r) {
        this.selectedRol = r.rol_id;
        // console.log("Se selecciono el rol => " + this.selectedRol);
        this.addRol = r;
        // console.log(this.addRol);
        this.posicionRol = this.roles.indexOf(this.addRol);
    };
    // Se agrega el rol a los roles del funcionario
    MembershipComponent.prototype.agregarRol = function () {
        if (this.posicionRol > -1 && this.selectedRol !== 0) {
            this.funcionarioRol.push(this.addRol);
            // console.log("Funcion agregar:");
            // console.log(this.addRol);
            // console.log("Array funcionarioRol:");
            // console.log(this.funcionarioRol);
            this.roles.splice(this.posicionRol, 1);
        }
        else {
            //this.toastrService.warning('Por favor seleccione un rol para agregar!', 'Atención!', {timeOut: 3000});
            sweetalert2_1.default({
                title: "Por favor seleccione un rol para agregar!",
                // text: this.titularAgencia,
                text: "Debe seleccionar un rol del catalogo de roles.",
                type: "warning"
            });
        }
        this.posicionRol = 0;
        this.selectedRol = 0;
    };
    MembershipComponent.prototype.onSelectFRolF = function (rol) {
        this.selectedRolF = rol.rol_id;
        // console.log("Se seleccion de rol del funcionario=> " + this.selectedRolF);
        this.delRol = rol;
        // console.log(this.delRol);
        this.posicionRolF = this.funcionarioRol.indexOf(this.delRol);
    };
    MembershipComponent.prototype.quitarRol = function () {
        if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
            if (this.delRol.esPrincipal === 1) {
                // console.log("El rol es principal");
                // this.toastrService.warning('no puede eliminar el rol principal! para poder eliminar este rol seleccione otro como principal.', 'Atención!', {timeOut: 3000});
                sweetalert2_1.default({
                    title: "no puede eliminar el rol principal!",
                    text: "para poder eliminar este rol seleccione otro como principal.",
                    type: "warning"
                });
            }
            else {
                this.roles.push(this.delRol);
                this.rolesEliminados.push(this.delRol);
                // console.log(this.rolesEliminados);
                // console.log("Funcion quitar");
                // console.log(this.delRol);
                this.roles.sort(function (a, b) { return a.rol_id - b.rol_id; });
                // console.log("Array roles:");
                // console.log(this.roles);
                this.funcionarioRol.splice(this.posicionRolF, 1);
            }
        }
        else {
            //this.toastrService.warning('Por favor seleccione un rol para eliminar!', 'Atención!', {timeOut: 3000});
            sweetalert2_1.default({
                title: "Por favor seleccione un rol para eliminar!",
                // text: this.titularAgencia,
                text: "Debe seleccionar un rol del funcionario.",
                type: "warning"
            });
        }
        this.posicionRolF = 0;
        this.selectedRolF = 0;
    };
    MembershipComponent.prototype.radioRolChange = function (rol) {
        for (var i = 0; i < this.funcionarioRol.length; i++) {
            if (this.funcionarioRol[i].rol_id === rol.rol_id) {
                this.funcionarioRol[i].esPrincipal = 1;
            }
            else if (this.funcionarioRol[i].rol_id !== rol.rol_id) {
                this.funcionarioRol[i].esPrincipal = 0;
            }
        }
    };
    // Se abre el modal y se cargan los datos del funcionario seleccionado
    MembershipComponent.prototype.openModal = function (modalContent, funcionario, catUIE) {
        var _this = this;
        this.funcionarioSeleccionado = funcionario.iclaveFuncionario;
        // console.log(funcionario);
        // this.getAgencias();
        // this.getRoles();
        this.getFuncionarioRol(funcionario);
        this.getFuncionarioAgencia(funcionario);
        this.getCatUIE(catUIE);
        this.getCountExp1(funcionario);
        if (this.count <= 0) {
            this.prueba = true;
        }
        if (funcionario) {
            var catDis = funcionario.catDiscriminante_id;
            for (var i = 0; i < this.agencias.length; i++) {
                if (catDis === this.agencias[i].catDiscriminante_id) {
                    this.agencias.splice(i, 1);
                }
            }
            this.funcionario = funcionario;
            this.form.setValue(funcionario);
        }
        this.modalRef = this.modalService.open(modalContent, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });
        this.modalRef.result.then(function (result) {
            _this.form.reset();
        }, function (reason) {
            _this.form.reset();
        });
    };
    // Se abre el modal y se cargan los los expedientes pendientes
    MembershipComponent.prototype.openExpPend = function (expPendientes) {
        this.getExpPendientes();
        this.modalExpPend = this.modalService.open(expPendientes, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });
    };
    MembershipComponent.prototype.closeModal = function () {
        this.modalRef.close();
        // this.form.reset();
        this.funcionario = null;
        this.rolesEliminados = [];
        this.getRoles();
        this.selectedRol = 0;
        this.selectedRolF = 0;
        this.getAgencias();
        this.valAgenciaSelect = true;
        this.p2 = 1;
        // this.pageRefresh();
    };
    // Cerrar el modal de expedientes pendientes
    MembershipComponent.prototype.closeModalExpPend = function () {
        this.modalExpPend.close();
        this.formExpPend.reset();
        this.selectedExpPend = 0;
        this.funcinariosAgencia = [];
    };
    MembershipComponent.prototype.radioChange = function (e) {
        this.radioAsign = true;
        if (this.radioAsign || this.expPendientes) {
            this.prueba = true;
        }
    };
    // Se ejecuta el envio del formulario
    MembershipComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            // if (this.count > 0 && (this.form.value.archivoDigital_id !== null || this.expPendientes === false)) {
            //   this.prueba = true;
            // }
            if (this.expPendientes) {
                this.pendientesNum = 1;
            }
            else {
                this.pendientesNum = 0;
            }
            if (this.esMP) {
                this.esMPNum = 1;
            }
            else {
                this.esMPNum = 0;
            }
            if (this.soloRoles) {
                this.soloRolesNum = 1;
            }
            else {
                this.soloRolesNum = 0;
            }
            var iClaveFuncionarioSolicitante = 0;
            var iClaveFuncionarioAnterior = 0;
            var iClaveFuncionarioExp = 0;
            var catDiscriminateSolicitante = 0;
            var catUIE_actual = 0;
            var catDiscriminateNuevo = 0;
            var Justificacion = "";
            var rolesFuncionario = [];
            var rolesString = "";
            var esMP = 0;
            var soloRoles = 0;
            iClaveFuncionarioSolicitante = this.form.value.iClaveFuncionario;
            iClaveFuncionarioAnterior = this.clavedelactaul[0];
            iClaveFuncionarioExp = this.form.value.archivoDigital_id;
            catDiscriminateSolicitante = this.funcionario.catDiscriminante_id;
            catUIE_actual = this.val[0];
            catDiscriminateNuevo = this.form.value.catDiscriminante_id;
            Justificacion = this.form.value.cRFC;
            if (this.count > 0) {
                var expPendientes = this.pendientesNum;
            }
            else {
                var expPendientes = 2;
            }
            this.esPrincipal = this.form.value.puesto_val;
            if (this.esPrincipal === null) {
                rolesFuncionario = this.funcionarioRol;
                for (var i = 0; i < rolesFuncionario.length; i++) {
                    if (rolesFuncionario[i].esPrincipal === 1) {
                        this.esPrincipal = rolesFuncionario[i].rol_id;
                    }
                }
            }
            var id_roles = [];
            id_roles = this.funcionarioRol.map(function (cat) { return cat.rol_id; });
            rolesString = String(id_roles);
            //const esPrincipal: number = this.form.value.puesto_val;
            esMP = this.esMPNum;
            soloRoles = this.soloRolesNum;
            // console.log("iClaveFuncionarioSolicitante => " + iClaveFuncionarioSolicitante);
            // console.log("iClaveFuncionarioAnterior => " + iClaveFuncionarioAnterior);
            // console.log("iClaveFuncionarioExp => " + iClaveFuncionarioExp);
            // console.log("catDiscriminante_id => " + catDiscriminateSolicitante);
            // console.log("catUIE_id => " + catUIE_actual);
            // console.log("catDiscriminante_idNuevo => " + catDiscriminateNuevo);
            // console.log("Jusfificación => " + Justificacion);
            // console.log("Expedientes pendientes => " + expPendientes);
            // console.log("Roles del funcionario => " + rolesFuncionario);
            // console.log("Roles en un string => " + rolesString);
            // console.log("Es principal => " + this.esPrincipal);
            // console.log("Se envio el formulario:");
            // console.log(this.funcionarioRol);
            var cambioAdscripcion = new membership_model_1.CambioAdscripcion(iClaveFuncionarioSolicitante, iClaveFuncionarioAnterior, iClaveFuncionarioExp, catDiscriminateSolicitante, catUIE_actual, catDiscriminateNuevo, Justificacion, expPendientes, rolesString, this.esPrincipal, esMP, soloRoles);
            // console.log(cambioAdscripcion);
            this.cambioAdscripcion1(cambioAdscripcion);
            this.form.reset({
                hasSubMenu: false,
                parentId: 0
            });
            // }
        }
        this.expPendientes = false;
        // this.closeModal();
    };
    // Se cargan los expedientes que se encuentran pendientes
    MembershipComponent.prototype.getExpPendientes = function () {
        var _this = this;
        this.membershipService.getExpPendientes().subscribe(function (eP) {
            _this.expPendientesLista = eP;
            console.log(_this.expPendientesLista);
            for (var i = 0; i < _this.expPendientesLista.length; i++) {
                var ag = _this.expPendientesLista[i].catDiscriminanteAnterior;
                for (var j = 0; j < _this.agencias.length; j++) {
                    if (ag === _this.agencias[j].catDiscriminante_id) {
                        var agNombre = _this.agencias[j].cNombre;
                        // this.expPendientesLista
                        // this.expPendientesLista[i].cNombre = agNombre;
                        _this.expPendientesLista[i].cNombre = agNombre;
                        break;
                    }
                }
            }
            for (var i = 0; i < _this.expPendientesLista.length; i++) {
                var f = _this.expPendientesLista[i].iClaveFuncionario;
                for (var j = 0; j < _this.funcionarios.length; j++) {
                    if (f === _this.funcionarios[j].iClaveFuncionario) {
                        var nombreFuncionario = _this.funcionarios[j].cNombreFuncionario + " "
                            + _this.funcionarios[j].cApellidoPaternoFuncionario + " "
                            + _this.funcionarios[j].cApellidoMaternoFuncionario;
                        // this.expPendientesLista
                        // this.expPendientesLista[i].cNombre = agNombre;
                        _this.expPendientesLista[i].nombreFuncionario = nombreFuncionario;
                        break;
                    }
                }
            }
            // console.log(this.expPendientesLista); 
        });
    };
    MembershipComponent.prototype.getFuncionariosAg = function (expPend) {
        var _this = this;
        this.membershipService.getFUsuarioAgencia(expPend.catDiscriminanteAnterior).subscribe(function (exp) {
            _this.funcinariosAgencia = exp;
            console.log(_this.funcinariosAgencia);
            for (var i = 0; i < _this.funcinariosAgencia.length; i++) {
                if (_this.funcinariosAgencia[i].usuario[0].bEsActivo === 0) {
                    _this.funcinariosAgencia.splice(i, 1);
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.funcinariosAgencia[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.funcinariosAgencia[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.funcinariosAgencia.splice(i, 1);
                }
            }
        });
    };
    MembershipComponent.prototype.onSelectExpPend = function (expPend) {
        this.selectedExpPend = expPend.cambioAdscripcion_id;
        this.objExpPend = expPend;
        // console.log(this.objExpPend);
        this.getFuncionariosAg(this.objExpPend);
        for (var i = 0; i < this.funcinariosAgencia.length; i++) {
            if (this.objExpPend.iClaveFuncionario === this.funcinariosAgencia[i].iClaveFuncionario) {
                this.funcinariosAgencia.splice(i, 1);
            }
        }
        // this.expPendientesLista.
    };
    MembershipComponent.prototype.onSelectAgencia = function (catDiscriminanteAnterior) {
        var _this = this;
        console.log("valor select agencia => " + catDiscriminanteAnterior);
        this.membershipService.getFUsuarioAgencia(catDiscriminanteAnterior).subscribe(function (exp) {
            _this.funcinariosAgencia = exp;
            console.log(_this.funcinariosAgencia);
            for (var i = 0; i < _this.funcinariosAgencia.length; i++) {
                if (_this.funcinariosAgencia[i].usuario[0].bEsActivo === 0) {
                    _this.funcinariosAgencia.splice(i, 1);
                }
                var rolIdArray = [];
                for (var j = 0; j < _this.funcinariosAgencia[i].usuario[0].usuarioRol.length; j++) {
                    rolIdArray.push(_this.funcinariosAgencia[i].usuario[0].usuarioRol[j].rol_id);
                }
                var cont = 0;
                for (var k = 0; k < rolIdArray.length; k++) {
                    if (rolIdArray[k] === 8 ||
                        rolIdArray[k] === 7 ||
                        rolIdArray[k] === 6 ||
                        rolIdArray[k] === 5 ||
                        rolIdArray[k] === 3 ||
                        rolIdArray[k] === 2) {
                        cont = cont + 1;
                    }
                }
                if (cont <= 0) {
                    _this.funcinariosAgencia.splice(i, 1);
                }
            }
        });
        // for (let i = 0; i < this.expPendientesLista.length; i++) {
        //   if (this.expPendientesLista[i].catDiscriminanteAnterior === catDiscriminanteAnterior) {
        //     this.funcinarioAgencia[0].iClaveFuncionario = this.expPendientesLista[i].iClaveFuncionario;
        //     this.funcinarioAgencia[0].cNombreFuncionario = this.expPendientesLista[i].nombreFuncionario;
        //   }
        // }
        // console.log(this.funcinarioAgencia);
    };
    MembershipComponent.prototype.onSelectFuncionario = function (iclaveFuncionarioAsign) {
        var _this = this;
        console.log("valor select funcionario => " + iclaveFuncionarioAsign);
        this.membershipService.getFUsuarioRol(iclaveFuncionarioAsign).subscribe(function (roles) {
            _this.rolesFun = roles;
            console.log(_this.rolesFun);
        });
    };
    MembershipComponent.prototype.onSelectRoles = function (value) {
        console.log("valor select rol => " + value);
    };
    // Se actualiza el funcionario seleccionado
    MembershipComponent.prototype.asignarExpPendientes = function (asignarPendientes) {
        var _this = this;
        this.membershipService.asignarExpPendientes(asignarPendientes).subscribe(function (asignarPendientes) {
            _this.asignarPendientes;
        });
        // console.log("Se ejecuto el asignar expedientes: " + asignarPendientes.iclavefuncionarioNuevo);
        sweetalert2_1.default({
            title: "Se asignaron los expedientes...",
            text: this.titularAgencia,
            type: "success"
        }).then(function () {
            _this.router.navigate(['/pages/membership']);
        });
    };
    MembershipComponent.prototype.onSubmitExpPend = function () {
        if (this.formExpPend.valid) {
            var iclavefuncionarioAnt = this.formExpPend.value.iclaveFuncionarioAsign;
            var iclavefuncionarioNuevo = this.objExpPend.iClaveFuncionario;
            var catDiscriminante = this.objExpPend.catDiscriminanteAnterior;
            // console.log(iclavefuncionarioAnt+"             "+iclavefuncionarioNuevo+"       "+catDiscriminante);
            var asignarPendientes = new membership_model_1.AsignarPendientes(catDiscriminante, iclavefuncionarioNuevo, iclavefuncionarioAnt);
            this.asignarExpPendientes(asignarPendientes);
            this.formExpPend.reset({
                hasSubMenu: false,
                parentId: 0
            });
            this.closeModalExpPend();
            //this.pageRefresh();
        }
    };
    MembershipComponent = __decorate([
        core_1.Component({
            selector: 'app-membership',
            templateUrl: './membership.component.html',
            styleUrls: ['./membership.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [membership_service_1.MembershipService, menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            forms_1.FormBuilder,
            forms_1.FormBuilder,
            ngx_toastr_1.ToastrService,
            membership_service_1.MembershipService,
            menu_service_1.MenuService,
            ng_bootstrap_1.NgbModal,
            common_1.Location])
    ], MembershipComponent);
    return MembershipComponent;
}());
exports.MembershipComponent = MembershipComponent;
//# sourceMappingURL=membership.component.js.map