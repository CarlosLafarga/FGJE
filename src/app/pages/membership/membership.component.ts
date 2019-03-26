import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE, CambioAdscripcion, ExpPendientes, AsignarPendientes, cambioEstatus ,cambioMP, usuario, usuarioRol,listarExp,jerarquia} from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { gridSize } from '../../../../node_modules/@swimlane/ngx-charts';
import { RouteConfigLoadStart, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Location } from '@angular/common';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BytesPipe, NgBooleanPipesModule } from 'ngx-pipes';
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService ]
})
export class MembershipComponent implements OnInit, OnDestroy {

  public router: Router;
  public titularAgencia: string;
  public menuItems: Array<any>;  
  public cambioAdscripcion : CambioAdscripcion[];
  public adscripcion: CambioAdscripcion;
  public funcionarios: FuncionariosData[] = [];
  public funcionarioss: FuncionariosData[] = [];
  public listaExp: listarExp[] = [];
  public funcionario: FuncionariosData;
  public roles: Roles[] = [];
  public funcionarioRol: Roles[] = [];
  public count : number;
  public countHelper: number;
  public agencias: Agencias[] = [];
  public agencia: Agencias;
  public users: User[];
  public user: User;
  public p: any;
  public type: string = 'list';
  public modalRef: NgbModalRef;
  public modalExpPend: NgbModalRef;
  public form: FormGroup;
  public formExpPend: FormGroup;
  public genders = ['male', 'female'];
  public genderOption: string;
  public selectedRol: number = 0;
  public selectedRolF: number = 0;
  public addRol: Roles;
  public delRol: Roles;
  public posicionRol: number = 0;
  public posicionRolF: number = 0;
  public funciAgencia: FunciAgencia[] = [];
  public catUIE: catUIE[] = [];
  public val: number[] = [];
  public funciMP: FuncionariosData[] = [];
  public clavedelactaul: number[] = [];
  public cambio: any[];
  public expPendientes: boolean = false;
  public esMP: boolean = false;
  public soloRoles: boolean = false;
  public pendientesNum: number;
  public esMPNum: number;
  public soloRolesNum: number;
  public esPrincipal: number;
  public cambioEstatus1: cambioEstatus[];
  public cambioMP: cambioMP[];
  public mostrarActivos: boolean = true;
  public prueba: boolean = false;
  public validarModal: boolean = false;
  public claveglobal:number;
  public catDisGlobal:number;
  public myobjJson:string;
  public jerarquia: jerarquia[]= [];
  public iclave: number = 0;
  public catDis: number = 0;
  public jerarquiaOrg: number = 0;
  public arrayExp:any[]= [];
  public jeraTabla: number = 0;
  public contEsMP: number = 0;
  public esmp: any[] = [];
  public numMP: number;
  public alertAgencia: boolean = true;

  // ============variables de filtrado============
  public searchText: string;
  public searchActivos: string = "1";
  public buscarFuncionario: string;

  public searchNumero: string = "";
  public searchNombre: string = "";
  public searchApPaterno: string = "";
  public searchApMaterno: string = "";
  public searchUsuario: string = "";
  public searchAgencia: string = "";
  // =============================================
 
  public menuSelectOptions: IMultiSelectOption[] = [];
  
  constructor(router: Router,
              public fbf: FormBuilder,
              public fbExpPend: FormBuilder,
              public toastrService: ToastrService,
              public membershipService: MembershipService,
              public menuService: MenuService, 
              public modalService: NgbModal,
              public location: Location) {

    this.router = router;

    this.menuItems = this.menuService.getVerticalMenuItems();
    this.menuItems.forEach(item=>{
      let menu = { 
        id: item.id, 
        name: item.title
      }
      this.menuSelectOptions.push(menu);
    });

  }

  ngOnInit() {

    this.getFuncionarios();
    this.getAgencias();
    this.getRoles();

    this.formExpPend =  this.fbExpPend.group({
      cambioAdscripcion_id: [''],
      iclaveFuncionario: [''],
      catDis_ant: [''],
      catDis_asignado: [''],
      fecha_creacion: [''],
      fecha_modificacion: [''],
      esEmp: [''],
      Asignados: [''],
      iclaveFuncionarioAsign: ['', Validators.required],
      catDiscriminanteAnt: ['', Validators.required],
      rolesFAsign: ['', Validators.required],
      justificacion: ['', Validators.required],
      iclaveFuncionarioDestino: ['', Validators.required]
    });
    
    this.form = this.fbf.group({
      iClaveFuncionario: [''],
      cNombreFuncionario: [''],
      cApellidoPaternoFuncionario: [''],
      cApellidoMaternoFuncionario: [''],
      cSexo: [''],
      cRFC: ['', Validators.required],
      cCURP: [''],
      dFechaNacimiento: [''],
      cEmail: [''],
      cCedula: [''],
      iClaveFuncionarioJefe: [''],
      especialidad_val: [''],
      puesto_val: [''],
      jerarquiaOrganizacional_id: [''],
      dcCargaTrabajo: [''],
      tipoEspecialidad_val: [''],
      bEsPar: [''],
      cNumeroEmpleado: [''],
      catDiscriminante_id: [''],
      dFechaIngreso: [''],
      archivoDigital_id: [''],
      catUIE_id: [''],
      catAreasNegocio_id: [''],
      esMP: [''],
      cNumeroCertificado: [''],
      bEsActivo: [''],
      cClaveUsuario: [''],
      cNombre: [''],
      usuario: [''],
      numeroExpediente: ['']
    });

  }

  ngOnDestroy() {
    // console.log("onDestroy membership");
  }

  public rev: boolean = true;
  public controlActivos(funcionario) {

    swal({
      title: 'Desactivar usuario',
      text: '¿Esta seguro que desea desactivar al usuario?',
      type: 'warning',
      html: '<b>¿Esta seguro que desea desactivar al usuario?</b><br><label><b>Justificacion:</b></label>',
      input: 'text',
      inputValidator: (value) => {
        return !value && 'Por favor ingrese la justificacion.'
       },
      showCancelButton: true,
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'

    }).then((result) => {

      if (result.value) {
        // const act = e.target.checked;
        const valor: number = 0;
        funcionario.bEsActivo = 0;
        //  console.log("Se desactiva el funcionario => " + funcionario.cNombreFuncionario );
        //  console.log(valor);      
        var justificacion = result.value;
        var iclaveFuncionarionew = funcionario.iClaveFuncionario;

        let cambioEstatus1 = new cambioEstatus(iclaveFuncionarionew, valor, justificacion);
        this.cambioEstatus( cambioEstatus1 );
        
        swal({
          title:"Usuario desactivado'",
          text: "Desactivacion exitosa",
          type: "success"
          }).then(() =>{
          
          //  location.reload();
          });
      } else if (result.dismiss === swal.DismissReason.cancel) {
        this.rev = true; 
      }
    });
    
  }

  public countHelperExp: number = 0;

  public controlInactivo(funcionario) {

    // console.log(funcionario);
    var iclaveFunSelect: number = funcionario.iClaveFuncionario;
    var catDisc: number = funcionario.catDiscriminante_id
    // console.log(iclaveFunSelect + " " + catDisc);
    
    this.membershipService.getCounthelper( iclaveFunSelect, catDisc ).subscribe( countHelperExp => {
      this.countHelperExp = countHelperExp

      if (this.countHelperExp > 0) {
        this.getFunAgPendientes(catDisc);
        
          swal({
            title: 'CUIDADO!',
            text: "El funcionario tiene expedientes en la agencia seleccionada, " +
            "si lo activa tomará el control de los mismos expedientes, " +
            "para reasignarlos antes de activarlo, dirijase a 'Ver expedientes pendientes' " +
            "¿desea continuar?",
            type: 'warning',
            showCancelButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              // swal(
              //   'Confirmado',
              //   'Puede seguir con el proceso.',
              //   'success'
              // )

              swal({
                title: 'Activar usuario',
                text: '¿Esta seguro que desea activar al usuario?',
                type: 'warning',
                html: '<b>¿Esta seguro que desea Activar al usuario?</b><br><label><b>Justificacion:</b></label>',
                input: 'text',
                inputValidator: (value) => {
                  return !value && 'Por favor ingrese la justificacion.'
                 },
                showCancelButton: true,
                confirmButtonText: 'Activar',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
          
                // console.log(result.value);
          
                if (result.value) {
                  // const inact = e.target.checked;
                  const valor: number = 1;
                  // console.log(funcionario);
                  funcionario.bEsActivo = 1;
                  // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
                  // console.log(valor);
                  var justificacion = result.value;
                  var iclaveFuncionarionew = funcionario.iClaveFuncionario;
          
          
                  let cambioEstatus1 = new cambioEstatus(iclaveFuncionarionew,valor,justificacion);
                  this.cambioEstatus(cambioEstatus1);
                  swal({
                    title:"Usuario Activado",
                    text: "Activacion exitosa",
                    type: "success"
                    }).then(() =>{
                    
                    // location.reload();
                    });
                } else if (result.dismiss === swal.DismissReason.cancel) {
                  // console.log("Se cancelo la activación")
                
                }
              });

            } 
            // else if (result.dismiss === swal.DismissReason.cancel) {
            //   swal.mixin({
            //     title: 'Reasignar',
            //     text: "Seleccione un funcinario para continuar con la reasignación.",
            //     type: 'warning',
            //     allowOutsideClick: false,
            //     allowEscapeKey : false,
            //     input: 'select',
            //     inputOptions: this.inputOptions,
            //     inputPlaceholder: 'Seleccione un funcionario',
            //     showCancelButton: true,
            //     confirmButtonText: 'Siguiente &rarr;',
            //     cancelButtonText: 'Cancelar',
            //     progressSteps:['1','2'],
            //     inputValidator: (value) => {
            //       return !value && 'Favor de escoger al funcionario a quien reasignara expedientes.'
            //      },
            //   }).queue([
            //       {
                    
            //       },
            //       {
            //         title:'Justificacion',
            //         inputPlaceholder: 'Justificación',
            //         text:'Justifique el motivo de la reasignación de expedientes.',
            //         input:'text',
            //         inputValidator: (value) => {
            //           return !value && 'Por favor ingrese la justificacion.'
            //         },
                    
            //       }
            //   ]).then((result) => {
            //     if (result.value) {
            //       var iclaveFNuevo = parseInt(result.value[0]);
                
            //       swal({
            //         title: 'Confirmar',
            //         text: "¿Esta usted seguro(a) de continuar con la reasignación de los expedientes?",
            //         confirmButtonText: 'Aceptar',
            //         showCancelButton: true,
            //         allowOutsideClick: false,
            //         allowEscapeKey : false,
            //         cancelButtonText:'Cancelar',
            //         confirmButtonColor: '#4BAE4F',
            //         cancelButtonColor: '#d33',
            //       }).then((result) =>{
            //         if (result.value) {
            //           // const iclaveFAnt: number = clave;

            //           let asignar = new AsignarPendientes(catDisc, iclaveFNuevo, iclaveFunSelect);
            //           console.log(asignar);
            //           this.asignarExpPendientes( asignar );

            //           swal(
            //             'Confirmado',
            //             'Los expedientes se han reasignado correctamente.',
            //             'success'
            //           )
            //         } else if (result.dismiss === swal.DismissReason.cancel) {

            //           swal({
            //             type: 'error',
            //             title: 'Cancelado',
            //             text: 'Se ha cancelado la reasignación de los expedientes.',
            //           });
            //         }
            //       });
            //     } else if (result.dismiss === swal.DismissReason.cancel) {
            //       swal({
            //         type: 'error',
            //         title: 'Cancelado',
            //         text: 'Se ha cancelado la reasignación de los expedientes.',
            //       });
            //     }
            //   });
            // }
          });
      } else {
        swal({
          title: 'Activar usuario',
          text: '¿Esta seguro que desea activar al usuario?',
          type: 'warning',
          html: '<b>¿Esta seguro que desea Activar al usuario?</b><br><label><b>Justificacion:</b></label>',
          input: 'text',
          inputValidator: (value) => {
            return !value && 'Por favor ingrese la justificacion.'
           },
          showCancelButton: true,
          confirmButtonText: 'Activar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
    
          // console.log(result.value);
    
          if (result.value) {
            // const inact = e.target.checked;
            const valor: number = 1;
            // console.log(funcionario);
            funcionario.bEsActivo = 1;
            // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
            // console.log(valor);
            var justificacion = result.value;
            var iclaveFuncionarionew = funcionario.iClaveFuncionario;
    
    
            let cambioEstatus1 = new cambioEstatus(iclaveFuncionarionew,valor,justificacion);
            this.cambioEstatus(cambioEstatus1);
            swal({
              title:"Usuario Activado",
              text: "Activacion exitosa",
              type: "success"
              }).then(() =>{
              
              // location.reload();
              });
          } else if (result.dismiss === swal.DismissReason.cancel) {
            // console.log("Se cancelo la activación")
          
          }
        });
      }

      this.inputOptions = {};

    });

  }

/*Activar MP*/
public rev1: boolean = true;
public rev2: boolean = true;

public checarMP (catDis:number){
  this.numMP = 0;
  this.membershipService.getfunciMP(catDis).subscribe( (esmp:any) => {
    this.funcionarioss = esmp
    this.numMP = this.funcionarioss.length;
  });
  console.log(this.numMP);
  return this.numMP;
}

public activarMP(funcionario) {
  this.contEsMP = 0;
  this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe( funciAgencia => {
    this.funciAgencia = funciAgencia
    

    for (let i = 0; i < this.funciAgencia.length; i++) {
      
      if (this.funciAgencia[i].esMP == 1) {
        this.contEsMP ++;
      }
    }

    // console.log("Existe un mp => "+this.contEsMP);
    // console.log(this.funciAgencia);
    /*--------------------------------------------------------------------------------------------------------*/
    

      if(funcionario.esMP === 0){
        if(this.contEsMP != 1 ){
        swal({
          title: 'Activar MP ',
          text: '¿Esta seguro que desea activar al funcionario como MP?',
          type: 'warning',
          html: '<b>¿Esta seguro que desea activar al funcionario como MP?</b><br><label><b>Justificacion:</b></label>',
          input: 'text',
          inputValidator: (value) => {
            return !value && 'Por favor ingrese la justificacion.'
          },
          showCancelButton: true,
          confirmButtonText: 'Activar',
          cancelButtonText: 'Cancelar'
      
          }).then((result) => {
      
          if (result.value) {
            // const act = e.target.checked;
            const valor: number = 1;
            funcionario.esMP = 1;
            //  console.log("Se Activo el funcionario con la bandera MP => " + funcionario.cNombreFuncionario );
            //  console.log(valor);      
            var justificacion = result.value;
            var iclaveFuncionarionew = funcionario.iClaveFuncionario;
      
            let cambioMP2 = new cambioMP(iclaveFuncionarionew, valor, justificacion);
            this.cambioMP1( cambioMP2 );
            
            swal({
              title:"Funcionario ahora es MP'",
              text: "Funcionario ahora es MP",
              type: "success"
              }).then(() =>{
              
              //  location.reload();
              });
             } else if (result.dismiss === swal.DismissReason.cancel) {
               this.rev1 = true; 
            } 
        
            });
            
          }else{
      
            swal({
              title:"ATENCIÓN",
              text: "Ya existe un MP en esta agencia.",
              type: "warning"
              }).then(() =>{
              
              //  location.reload();
              });

            }


            } else {
          
            swal({
            title: 'Desactivar MP ',
            text: '¿Esta seguro que desea desactivar al funcionario como MP?',
            type: 'warning',
            html: '<b>¿Esta seguro que desea desactivar al funcionario como MP?</b><br><label><b>Justificacion:</b></label>',
            input: 'text',
            inputValidator: (value) => {
              return !value && 'Por favor ingrese la justificacion.'
            },
            showCancelButton: true,
            confirmButtonText: 'Desactivar',
            cancelButtonText: 'Cancelar'
      
           }).then((result) => {
      
            if (result.value) {
              // const act = e.target.checked;
              const valor: number = 0;
              funcionario.esMP = 0;
              //  console.log("Se desactiva el funcionario con la bandera MP => " + funcionario.cNombreFuncionario );
              //  console.log(valor);      
              var justificacion = result.value;
              var iclaveFuncionarionew = funcionario.iClaveFuncionario;
      
              let cambioMP2 = new cambioMP(iclaveFuncionarionew, valor, justificacion);
              this.cambioMP1( cambioMP2 );
              
              swal({
                title:"Funcionario ahora ya no es MP'",
                text: "Funcionario ahora ya no es MP",
                type: "success"
                }).then(() =>{
                
                //  location.reload();
                });
            } else if (result.dismiss === swal.DismissReason.cancel) {
              this.rev2 = true; 
            }
          });
      
            }
        
  });
  
  

    

}

/*DESACTIVAR MP*/
public desactivarMP() {

  swal({
    title: 'Cuidado!!',
    text: '¿Solo los funcionarios activos pueden acceder a esta funcion.?',
    type: 'warning',
    confirmButtonText: 'Aceptar',
    
  });
  
}

  pageRefresh() {
    this.form.reset();
    // this.router.navigate(['/pages/blank']);
    // this.router.navigate(['/pages/membership']);
    location.reload();
  }

  public valReasignarExpedientes: boolean = true;
  public valExpPendCheck: boolean = true;
  public valEsMPCheck: boolean = true;
  public valSolocambioCheck: boolean = true;
  public valAgenciaSelect: boolean = true;

  public pendientesCheck( e ) {
    this.expPendientes = e.target.checked;

    if (this.radioAsign || this.expPendientes) {
      this.prueba = true;
    }
    
    if (this.expPendientes) {
      this.valReasignarExpedientes = false;
      this.valSolocambioCheck = false;
    } else {
      this.valReasignarExpedientes = true;
      this.valSolocambioCheck = true;
    }
  }

  public esMPCheck( e ) {
    this.esMP = e.target.checked;
    if (this.esMP) {
      this.valSolocambioCheck = false;
    } else {
      this.valSolocambioCheck = true
    }
  }

  public soloRolesCheck( e ) {
    // this.validarModal = !this.validarModal;
    this.soloRoles = e.target.checked;
    if (this.soloRoles ) {
      this.prueba = true;
      this.validarModal = true;
      
      this.valReasignarExpedientes = false;
      this.valExpPendCheck = false;
     
      this.valEsMPCheck = false;
      this.valAgenciaSelect = false;
      this.alertAgencia = false;
      // console.log(this.count);
      // console.log(false);
    } else {
      this.validarModal = false;
      this.prueba = false;
      if( this.count > 0 ){
        this.valReasignarExpedientes = true;
        this.valExpPendCheck = true;
      }else{
        this.valReasignarExpedientes = false;
        this.valExpPendCheck = false;
        this.prueba = true;
      }
      this.valEsMPCheck = true;
      this.valAgenciaSelect = true;
      this.alertAgencia = true
      // console.log(true);
      // console.log(this.count);
    }
  }

  public soloActivos( e ) {
    this.mostrarActivos = e.target.checked
    if (this.mostrarActivos) {
      this.searchActivos = "1";
    } else if(!this.mostrarActivos) {
      this.searchActivos = ""
    }

    this.p = 1;

  }

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

  public llamarRoles( clave:number){
    var names = "";
    this.membershipService.getFUsuarioRol(clave).subscribe( funcionarioRol => {
      this.funcionarioRol = funcionarioRol
      //console.log(this.funcionarioRol);
      var roles  = JSON.stringify(this.funcionarioRol);

      for(var i = 0; i<funcionarioRol.length; i++){
        if(this.funcionarioRol[i].esPrincipal == 1){
          names += "<b style= 'color:#4BAE4F'>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
        }else{
          names += "<b>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
        }
        
        //console.log(names);
      }
      //console.log(names);
      
      swal({
        title: "<b>Roles Del Funcionario</b>", 
        html: "<b>" + names + "</b><br>",  
        confirmButtonText: "Aceptar", 
        confirmButtonColor: "#4BAE4F",
      });

    });
  }

  public recargarFuncionarios() {
    this.getFuncionarios();
  }

  // Se cargan los datos del funcionario
  public getFuncionarios(): void {
    this.loading = true;
    this.membershipService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios
      // console.log(this.funcionarios);

      for (let i = 0; i < this.funcionarios.length; i++) {
        const ag: number = this.funcionarios[i].catDiscriminante_id;
        for (let j = 0; j < this.agencias.length; j++) {
          if (ag === this.agencias[j].catDiscriminante_id) {
            const agNombre: string = this.agencias[j].cNombre;
            this.funcionarios[i].cNombre = agNombre;
          }
        }
      }
      // swal({
      //   title:"Cargando...",
      //   position: 'center',
      //   type: 'success',
      //   showConfirmButton: false,
      //   timer: 2000
      // });
      this.loading = false;
    }, err => {
      swal({
        title:"Error al cargar funcionarios",
        position: 'center',
        // text: "Ocurrió un error: " + err.message + " verifique su conección o los permisos de acceso de la red.",
        html: "Ocurrió un error: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>. <br><br> verifique su conección o los permisos de acceso de la red.",
        type: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
      this.loading = false;
    });
  }

  public rolesFunci: Roles[] = [];

  public cargarRoles(claveFuncionario: number) {
    this.membershipService.getFUsuarioRol(claveFuncionario).subscribe( rF =>  {
      this.rolesFunci = rF
    });
    return this.rolesFunci;
  }

  public rolesSR: Roles[] = [];

  public cont: number;
  public getRoles(): void {
    this.membershipService.getRoles().subscribe( roles => {
      this.roles = roles
      // console.log(this.roles);
    });
  }

  // Obtener los roles del funcionario que se selecciona
  public getFuncionarioRol(funcionario: FuncionariosData): void {
    this.membershipService.getFUsuarioRol(funcionario.iClaveFuncionario).subscribe( funcionarioRol => {
      this.funcionarioRol = funcionarioRol
      // console.log(this.funcionarioRol);
      
      for (let i = 0; i < this.funcionarioRol.length; i++) {
        const elementFR = this.funcionarioRol[i];
        for (let j = 0; j < this.roles.length; j++) {
          const elementR = this.roles[j];
          if ( elementFR.rol_id === elementR.rol_id) {
            this.roles.splice(j, 1);
          }
        }
      }

    });
  }

  public getCountExp1(funcionario: FuncionariosData){
    this.membershipService.getCountExp(funcionario.iClaveFuncionario,funcionario.catDiscriminante_id).subscribe(
      count =>{ this.count = count
        // console.log("Tiene estos expedientes pendientes => " + this.count);
        if(count == 0){
          this.valReasignarExpedientes = false;
          this.valExpPendCheck = false;
          this.prueba = true;
        }else if(count > 0){
          this.valReasignarExpedientes = true;
          this.valExpPendCheck = true;
        }
      });
  }

  // Se cargan las agencias del catalogo
  public getAgencias(): void {
    this.membershipService.getAgencias().subscribe( agencias => {
      this.agencias = agencias
      
      this.agencias.sort( (a, b) => a.cClaveDiscriminante - b.cClaveDiscriminante );
      // console.log(this.agencias);

    });
  }

  public nombreAgActual: string;
  public nAgActual: string[];
  

  

  public getFuncionarioAgencia(funcionario: FuncionariosData):void{
    this.contEsMP = 0;
    this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe( funciAgencia => {
      this.funciAgencia = funciAgencia
      // console.log(this.funciAgencia);

      this.nAgActual = this.funciAgencia.map(a => a.cNombre);
      this.nombreAgActual = this.nAgActual[0];

      for (let i = 0; i < this.funciAgencia.length; i++) {
        if (funcionario.iClaveFuncionario === this.funciAgencia[i].iClaveFuncionario ||
            this.funciAgencia[i].usuario[0].bEsActivo === 0) {
          this.funciAgencia.splice( i, 1 );
        }

        if (this.funciAgencia[i].esMP == 1) {
          this.contEsMP ++;
        }

        var rolIdArray: number[] = [];
        for (let j = 0; j < this.funciAgencia[i].usuario[0].usuarioRol.length; j++) {
          rolIdArray.push(this.funciAgencia[i].usuario[0].usuarioRol[j].rol_id);
        }

        var cont: number = 0;
        for (let k = 0; k < rolIdArray.length; k++) {
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
          this.funciAgencia.splice( i, 1 );
        }
      }

      // console.log("Existe un mp => " + this.contEsMP);

    }, err => {
      swal({
        title:"Error al cargar",
        html: "Ocurrió un error al cargar los datos: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>",
        position: 'center',
        type: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
      this.loading = false;
    });
  }

  public getCatUIE(valor: number): void {
    // console.log(valor);
    if (valor !== undefined) {
      this.alertAgencia = false;
      this.validarModal = true;
      // console.log(valor);
      this.membershipService.getcatUIE(valor).subscribe( catUIE => {
        this.catUIE = catUIE
        // console.log(this.catUIE);
        if(this.catUIE.some(cat => cat.catUIE_id !== 0)) {
          this.val = this.catUIE.map(cat => cat.catUIE_id);
        }else{
          this.val = [0];
          // console.log(this.val);
        }
      });
    } else {
      this.alertAgencia = true;
      // console.log("No se ha seleccionado agencia");
    }

    if(valor !== undefined){
      this.membershipService.getfunciMP(valor).subscribe( funciMP => {
        this.funciMP = funciMP
        // console.log("Este es el valor que comparan => "+valor);
        if (this.funciMP.some(cat => cat.iClaveFuncionario !== 0)) {
          this.clavedelactaul = this.funciMP.map(cat => cat.iClaveFuncionario);
          // console.log(this.clavedelactaul);
        } else {
          this.clavedelactaul = [0];
          // console.log(this.clavedelactaul);
        }
      });
    }

    if(valor !==undefined){
      
      var clave  = parseInt((<HTMLInputElement>document.getElementById("iclavefuncionarioselect")).value);
      // console.log(clave);
      this.membershipService.getCounthelper( clave, valor ).subscribe( countHelper => {
      this.countHelper = countHelper
      // console.log(countHelper);

        if(this.countHelper > 0){
          this.getFunAgPendientes(valor);

          swal({
            title: 'CUIDADO!',
            text: "El funcionario tiene expedientes en la agencia seleccionada, " +
            "si lo cambia tomará el control de los mismos expedientes, " +
            "para reasignarlos antes de cambiarlo, dirijase a 'Ver expedientes pendientes' " +
            "¿desea continuar?",
            type: 'warning',
            showCancelButton: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#aaa',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {

              swal({
                title:"Continuar",
                text: "ha decidido continuar con el proceso, el funcionario podra ver sus expedientes en la agencia destino.",
                confirmButtonText: 'Aceptar',
                type: "success"
                });

            } else if (result.dismiss === swal.DismissReason.cancel) {
              
              this.closeModal();
            
            }
          });

          // swal({
          //   title:"Cuidado",
          //   text: "Este funcionario cuenta con expedientes pendientes en la agencia seleccionada, necesita asignar los expedientes para realizar el cambio de adscripción o cualquier otra acción.",
          //   type: "info"
          //   }).then(() =>{
          //     this.pageRefresh();
          //     this.router.navigate(['/pages/membership']);
          //   });
            
        }

        this.inputOptions = {};

      });
    }
  }

  public inputOptions = {};
  public FunAgPendientes: FunciAgencia[] = [];

  public getFunAgPendientes(catDiscriminantePendientes: number):void {
    this.membershipService.getFUsuarioAgencia(catDiscriminantePendientes).subscribe( exp => {
      this.FunAgPendientes = exp
      // console.log(this.FunAgPendientes);

      for (let i = 0; i < this.FunAgPendientes.length; i++) {
        if (this.FunAgPendientes[i].usuario[0].bEsActivo === 0) {
          this.FunAgPendientes.splice( i, 1 );
        }

        var rolIdArray: number[] = [];
        for (let j = 0; j < this.FunAgPendientes[i].usuario[0].usuarioRol.length; j++) {
          rolIdArray.push(this.FunAgPendientes[i].usuario[0].usuarioRol[j].rol_id);
        }

        var cont: number = 0;
        for (let k = 0; k < rolIdArray.length; k++) {
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
          this.FunAgPendientes.splice( i, 1 );
        }
      }

      for (let j = 0; j < this.FunAgPendientes.length; j++) {
        var id = this.FunAgPendientes[j].iClaveFuncionario;
        var name = this.FunAgPendientes[j].cNombreFuncionario+" "+this.FunAgPendientes[j].cApellidoPaternoFuncionario;
        this.inputOptions[id] = name;
      }
      // console.log(this.inputOptions);

    });
  }
  
  // Se actualiza el funcionario seleccionado
  public cambioAdscripcion1(cambioAdscripcion:CambioAdscripcion) {
    this.loading = true;
    this.membershipService.cambioAdscripcion(cambioAdscripcion).subscribe( cambioAdscripcion => {
      this.cambioAdscripcion;
      swal({
        title:"Cambio exitoso",
        position: 'center',
        text: "El cambio de adscripcioón se ha llevado con exito.",
        type: 'success',
        timer: 3000
        }).then(() =>{
          this.pageRefresh();
          this.router.navigate(['/pages/membership']);
        });

      }, err => {
        swal({
          title:"Error al modificar",
          html: "Ocurrió un error al modificar los datos: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>",
          position: 'center',
          type: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        });
        this.loading = false;
      });
    // console.log("Se ejecuto el cambio de adscripcion: " + cambioAdscripcion.iClaveFuncionarioSolicitante);
    
    // swal({
    //   title:"Registro exitoso...",
    //   text: this.titularAgencia,
    //   type: "success"
    //   }).then(() =>{
    //     this.pageRefresh();
    //     this.router.navigate(['/pages/membership']);
    //   });
  }

  public cambioEstatus(cambioEstatus: cambioEstatus){
    this.membershipService.cambioEstatus(cambioEstatus).subscribe(cambioEstatus =>{
      this.cambioEstatus;
    });
    // console.log("se ejecuto cambio de estatus.");
  }

  public cambioMP1(cambioMP:cambioMP){
    this.membershipService.cambioMP(cambioMP).subscribe(cambioMP => {
      this.cambioMP;
    });
  }

  public toggle(type) {
    this.type = type;
  }

  // Se dispara con el evento del clic cuando se selecciona un rol del catálogo
  public onSelectRol(r: Roles) {
    this.selectedRol = r.rol_id;
    // console.log("Se selecciono el rol => " + this.selectedRol);
    this.addRol = r;
    // console.log(this.addRol);

    this.posicionRol = this.roles.indexOf(this.addRol);
  }

  // Se agrega el rol a los roles del funcionario
  public agregarRol() {
    if (this.posicionRol > -1 && this.selectedRol !== 0) {
      this.funcionarioRol.push(this.addRol);
      // console.log("Funcion agregar:");
      // console.log(this.addRol);
      // console.log("Array funcionarioRol:");
      // console.log(this.funcionarioRol);
      this.roles.splice(this.posicionRol, 1);
    } else {
      //this.toastrService.warning('Por favor seleccione un rol para agregar!', 'Atención!', {timeOut: 3000});
      swal({
        title: "Por favor seleccione un rol para agregar!",
        // text: this.titularAgencia,
        text: "Debe seleccionar un rol del catalogo de roles.",
        type: "warning"
      });
    }
    
    this.posicionRol = 0;
    this.selectedRol = 0;
  }

  public valido: boolean = false;

  public onSelectFRolF(rol: Roles) {
    this.selectedRolF = rol.rol_id;
    // console.log("Se seleccion de rol del funcionario=> " + this.selectedRolF);
    this.delRol = rol;
    // console.log(this.delRol);

    this.posicionRolF = this.funcionarioRol.indexOf(this.delRol);

    this.membershipService.getCountRoles( this.funcionario.iClaveFuncionario,
                                          this.funcionario.catDiscriminante_id,
                                          this.selectedRolF).subscribe( revision => {
                                            this.revisarRoles = revision
                                            // console.log(this.revisarRoles);

                                            if (this.selectedRolF == 8 ||
                                                this.selectedRolF == 7 ||
                                                this.selectedRolF == 6 ||
                                                this.selectedRolF == 5 ||
                                                this.selectedRolF == 3 ||
                                                this.selectedRolF == 2) {
                                              this.valido = true;
                                            } else {
                                              this.valido = false
                                            }

                                          });
  }

  // Se quita el rol a los roles del funcionario
  public rolesEliminados: Roles[] = [];
  public revisarRoles: number = 0;

  public quitarRol() {
    if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
      // if (this.revisarRoles <= 0 && this.valido) {
      //   swal({
      //     title: "No se puede eliminar el rol!",
      //     text: "Este funcionario es el único en la agencia que cuenta con el rol seleccionado. " +
      //           "para poder eliminarlo por favor asegurese que alguien mas tenga este rol.",
      //     type: "warning"
      //   });
      // } else 
      if (this.delRol.esPrincipal === 1) {
        // console.log("El rol es principal");
        // this.toastrService.warning('no puede eliminar el rol principal! para poder eliminar este rol seleccione otro como principal.', 'Atención!', {timeOut: 3000});
        swal({
          title: "no puede eliminar el rol principal!",
          text: "para poder eliminar este rol seleccione otro como principal.",
          type: "warning"
        });
      } else {
        this.roles.push(this.delRol);
        this.rolesEliminados.push(this.delRol);
        // console.log(this.rolesEliminados);
        // console.log("Funcion quitar");
        // console.log(this.delRol);
        this.roles.sort( (a, b) => a.rol_id - b.rol_id );
        // console.log("Array roles:");
        // console.log(this.roles);
        this.funcionarioRol.splice(this.posicionRolF, 1);
      }

      // if (this.delRol.esPrincipal === 1) {
      //   // console.log("El rol es principal");
      //   // this.toastrService.warning('no puede eliminar el rol principal! para poder eliminar este rol seleccione otro como principal.', 'Atención!', {timeOut: 3000});
      //   swal({
      //     title: "no puede eliminar el rol principal!",
      //     text: "para poder eliminar este rol seleccione otro como principal.",
      //     type: "warning"
      //   });
      // } else {
      //   this.roles.push(this.delRol);
      //   this.rolesEliminados.push(this.delRol);
      //   // console.log(this.rolesEliminados);
      //   // console.log("Funcion quitar");
      //   // console.log(this.delRol);
      //   this.roles.sort( (a, b) => a.rol_id - b.rol_id );
      //   // console.log("Array roles:");
      //   // console.log(this.roles);
      //   this.funcionarioRol.splice(this.posicionRolF, 1);
      // }
    } else {
      //this.toastrService.warning('Por favor seleccione un rol para eliminar!', 'Atención!', {timeOut: 3000});
      swal({
        title: "Por favor seleccione un rol para eliminar!",
        // text: this.titularAgencia,
        text: "Debe seleccionar un rol del funcionario.",
        type: "warning"
      });
    }

    this.posicionRolF = 0;
    this.selectedRolF = 0;
    this.revisarRoles = 0;
  }

  radioRolChange( rol: Roles ) {
    for (let i = 0; i < this.funcionarioRol.length; i++) {
      if (this.funcionarioRol[i].rol_id === rol.rol_id) {
        this.funcionarioRol[i].esPrincipal = 1;
      } else if (this.funcionarioRol[i].rol_id !== rol.rol_id) {
        this.funcionarioRol[i].esPrincipal = 0;
      }
    }
  }

  public expSinAsignar: listarExp[] = [];
  public valorExpSinAsignar: number = 0;
  public funcionarioSeleccionado: string = "";
  public rolesAMPFac: number = 0;
  public loading: boolean = false;
  
  // Se abre el modal y se cargan los datos del funcionario seleccionado
  public openModal(modalContent, funcionario, catUIE) {
    this.funcionarioSeleccionado = funcionario.iclaveFuncionario;
    // console.log(funcionario);
    // this.getAgencias();
    // this.getRoles();
    this.getFuncionarioRol( funcionario );
    this.getFuncionarioAgencia( funcionario );
    this.getCatUIE(catUIE);
    this.getCountExp1(funcionario);
    // this.ExpSinAsignar( funcionario );
    for (let i = 0; i < this.agencias.length; i++) {
      if (funcionario.catDiscriminante_id === this.agencias[i].catDiscriminante_id) {
        var tipoUnidadAdmva = this.agencias[i].iTipoUnidadAdministrativa
      }
    }
    this.loading = true;
    
    this.membershipService.getExisteExp( funcionario.catDiscriminante_id ).subscribe( existentes => {
      this.expSinAsignar = existentes
      // console.log(this.expSinAsignar);
      this.valorExpSinAsignar = this.expSinAsignar.length;

        this.membershipService.getCountRoles( funcionario.iClaveFuncionario,
          funcionario.catDiscriminante_id,
          6 ).subscribe( roles => {
            this.rolesAMPFac = roles;
            // console.log(this.rolesAMPFac);

        if (this.valorExpSinAsignar > 0 && this.rolesAMPFac <= 0 && tipoUnidadAdmva == 3) {
          swal({
            title: 'Expedientes sin asignar',
            text: 'Existen expedientes sin asignar en esta agencia que solo éste funcionario, '
                  + 'puede ver, asegurese de que los asigne antes de cambiarlo o agregar el rol ' 
                  + 'a alguien mas para que pueda ver los expedientes sin asignar.',
            type: 'warning',
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true
          }).then((result) => {
            if (result.value) {
    
              this.closeModal();
              
            }
          });
        }

        if (this.count <= 0) {
          this.prueba = true;
        }
        
        if(funcionario){
          const catDis: number = funcionario.catDiscriminante_id
          for (let i = 0; i < this.agencias.length; i++) {
            if (catDis === this.agencias[i].catDiscriminante_id) {
              this.agencias.splice(i, 1);
            }
          }
          this.funcionario = funcionario;
          this.form.setValue(funcionario);
        } 
    
        this.modalRef = this.modalService.open(modalContent, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });
    
        this.modalRef.result.then((result) => {
          this.form.reset();
        }, (reason) => {
          this.form.reset();
        });
      });
      this.loading = false;
    });
  }

  // Se abre el modal y se cargan los los expedientes pendientes
  openExpPend(expPendientes) {

    this.getExpPendientes();
    this.modalExpPend = this.modalService.open(expPendientes, { size: 'lg', container: '.app', backdrop: 'static', keyboard: false });

  }

  // Cerrar el modal
  public p2: number;

  public closeModal(){
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

  }

  // Cerrar el modal de expedientes pendientes
  closeModalExpPend() {
    this.modalExpPend.close();
    this.formExpPend.reset();
    this.selectedExpPend = 0;
    this.funcionariosAgencia1 = [];
    this.rows = [];
    this.funcinarioAgencia = [];
    this.rolesFun2 = [];
    this.selected = [];
  }

  public radioAsign: boolean = false;
  radioChange( e ) {
    this.radioAsign = true;
    if (this.radioAsign || this.expPendientes) {
      this.prueba = true;
    }
  }

  // Se ejecuta el envio del formulario
  public onSubmit():void {

    if (this.form.valid) {

      // if (this.count > 0 && (this.form.value.archivoDigital_id !== null || this.expPendientes === false)) {
      //   this.prueba = true;
      // }
      
      if (this.expPendientes) {
        this.pendientesNum = 1;
      } else {
        this.pendientesNum = 0;
      }

      if (this.esMP) {
        this.esMPNum = 1;
      } else {
        this.esMPNum = 0;
      }

      if (this.soloRoles) {
        this.soloRolesNum = 1;
      } else {
        this.soloRolesNum = 0;
      }

      var iClaveFuncionarioSolicitante: number = 0;
      var iClaveFuncionarioAnterior: number = 0;
      var iClaveFuncionarioExp: number = 0;
      var catDiscriminateSolicitante: number = 0;
      var catUIE_actual: number = 0;
      var catDiscriminateNuevo: number = 0;
      var Justificacion: string = "";
      var rolesFuncionario: Roles[] = [];
      var rolesString: string = "";
      var esMP: number = 0;
      var soloRoles: number = 0;

      iClaveFuncionarioSolicitante = this.form.value.iClaveFuncionario;
      iClaveFuncionarioAnterior = this.clavedelactaul[0];
      // iClaveFuncionarioExp = this.form.value.archivoDigital_id;
      catDiscriminateSolicitante = this.funcionario.catDiscriminante_id;
      catUIE_actual = this.val[0];
      catDiscriminateNuevo = this.form.value.catDiscriminante_id;
      Justificacion = this.form.value.cRFC;

      if(this.count > 0){
        var  expPendientes: number = 1;
      // var  expPendientes: number = this.pendientesNum;
      }else{
      var expPendientes: number = 2;
      }

      this.esPrincipal = this.form.value.puesto_val;

      if (this.esPrincipal === null) {
        rolesFuncionario = this.funcionarioRol;
        for (let i = 0; i < rolesFuncionario.length; i++) {
          if (rolesFuncionario[i].esPrincipal === 1) {
            this.esPrincipal = rolesFuncionario[i].rol_id;
          }
        }
      }

      var id_roles: number[] = [];

      id_roles = this.funcionarioRol.map(cat => cat.rol_id)
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
    
      let cambioAdscripcion = new CambioAdscripcion( iClaveFuncionarioSolicitante,
                                                    iClaveFuncionarioAnterior,
                                                    iClaveFuncionarioExp,
                                                    catDiscriminateSolicitante,
                                                    catUIE_actual,
                                                    catDiscriminateNuevo,
                                                    Justificacion,
                                                    expPendientes,
                                                    rolesString,
                                                    this.esPrincipal,
                                                    esMP,
                                                    soloRoles );
      // console.log(cambioAdscripcion);
      this.cambioAdscripcion1(cambioAdscripcion);
      this.form.reset({
        hasSubMenu:false,
        parentId:0
      });
      // }
    }
    this.expPendientes = false;
  } 

  public expPendientesLista: ExpPendientes[] = [];
  public arrAgTemp: number[] = [];
  public arrAgSinRepetir: number[] = [];
  public agenciasExpPend: Agencias[] = [];
  public agenciasExpPend1: Agencias[] = [];

  // Se cargan los expedientes que se encuentran pendientes
  public getExpPendientes(): void {
    this.arrAgTemp = [];
    this.arrAgSinRepetir = [];
    this.agenciasExpPend1 = [];
    this.loading = true;
    this.membershipService.getExpPendientes().subscribe( eP => {
      this.expPendientesLista = eP
      // console.log(this.expPendientesLista); 

      for (let i = 0; i < this.expPendientesLista.length; i++) {
        const ag: number = this.expPendientesLista[i].catDiscriminanteAnterior;
        for (let j = 0; j < this.agencias.length; j++) {
          if (ag === this.agencias[j].catDiscriminante_id) {
            const agNombre: string = this.agencias[j].cNombre;
            // this.expPendientesLista
            this.expPendientesLista[i].cNombre = agNombre;
            break;
          }
        }
        this.arrAgTemp.push(this.expPendientesLista[i].catDiscriminanteAnterior);
      }
      
      const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
      }
      this.arrAgSinRepetir = this.arrAgTemp.filter( distinct );
      // console.log(this.arrAgSinRepetir);

      this.membershipService.getAgencias().subscribe( agencias => {
        this.agenciasExpPend = agencias

        for (let i = 0; i < this.agenciasExpPend.length; i++) {
          for (let j = 0; j < this.arrAgSinRepetir.length; j++) {
            if (this.arrAgSinRepetir[j] == this.agenciasExpPend[i].catDiscriminante_id) {
              this.agenciasExpPend1.push(this.agenciasExpPend[i]);
            }
          }
        }

        // console.log(this.agenciasExpPend1);
  
      });

      for (let i = 0; i < this.expPendientesLista.length; i++) {
        const f: number = this.expPendientesLista[i].iClaveFuncionario;
        for (let j = 0; j < this.funcionarios.length; j++) {
          if (f === this.funcionarios[j].iClaveFuncionario) {
            const nombreFuncionario: string = this.funcionarios[j].cNombreFuncionario + " "
                                              + this.funcionarios[j].cApellidoPaternoFuncionario + " "
                                              + this.funcionarios[j].cApellidoMaternoFuncionario;
            // this.expPendientesLista
            // this.expPendientesLista[i].cNombre = agNombre;

            this.expPendientesLista[i].nombreFuncionario = nombreFuncionario;
            break;
          }
        }
      }
      this.loading = false;
    }, err => {
      swal({
        title:"Error al cargar expedientes pendientes",
        position: 'center',
        // text: "Ocurrió un error: " + err.message + " verifique su conección o los permisos de acceso de la red.",
        html: "Ocurrió un error: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>. <br><br> verifique su conección o los permisos de acceso de la red.",
        type: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
      this.loading = false;
    });
  }

  public funcionariosAgencia: FunciAgencia[] = [];

  public getFuncionariosAg(expPend: ExpPendientes):void {
    this.membershipService.getFUsuarioAgencia(expPend.catDiscriminanteAnterior).subscribe( exp => {
      this.funcionariosAgencia = exp
      // console.log(this.funcionariosAgencia);

      for (let i = 0; i < this.funcionariosAgencia.length; i++) {
        if (this.funcionariosAgencia[i].usuario[0].bEsActivo === 0) {
          this.funcionariosAgencia.splice( i, 1 );
        }

        var rolIdArray: number[] = [];
        for (let j = 0; j < this.funcionariosAgencia[i].usuario[0].usuarioRol.length; j++) {
          rolIdArray.push(this.funcionariosAgencia[i].usuario[0].usuarioRol[j].rol_id);
        }

        var cont: number = 0;
        for (let k = 0; k < rolIdArray.length; k++) {
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
          this.funcionariosAgencia.splice( i, 1 );
        }
      }

    });
  }

  public selectedExpPend: number = 0;
  public objExpPend: ExpPendientes;

  public onSelectExpPend(expPend: ExpPendientes) {
    this.selectedExpPend = expPend.cambioAdscripcion_id;
    this.objExpPend = expPend;
    // console.log(this.objExpPend);
    
    this.getFuncionariosAg(this.objExpPend);

    for (let i = 0; i < this.funcionariosAgencia.length; i++) {
      if (this.objExpPend.iClaveFuncionario === this.funcionariosAgencia[i].iClaveFuncionario) {
        this.funcionariosAgencia.splice( i, 1);
      }
    }

    // this.expPendientesLista.

  }

  public funcinarioAgencia: FuncionariosData[] = [];
  public arrTempFun: number[] = [];
  public arrTempFunSinRep: number[] = [];

  public onSelectAgencia(catDiscriminanteAnterior: number) {
    this.formExpPend.controls['iclaveFuncionarioAsign'].setValue("");
    this.formExpPend.controls['rolesFAsign'].setValue("");
    this.formExpPend.controls['iclaveFuncionarioDestino'].setValue("");
    this.rows = [];
    this.funcinarioAgencia = [];
    this.rolesFun = [];
    this.rolesFun2 = [];
    this.arrTempFun = [];
    // console.log("valor select agencia => " + catDiscriminanteAnterior);
    this.catDisGlobal = catDiscriminanteAnterior;

   

    for (let i = 0; i < this.expPendientesLista.length; i++) {
      if (this.expPendientesLista[i].catDiscriminanteAnterior == catDiscriminanteAnterior) {
        var flag: number = this.expPendientesLista[i].iClaveFuncionario;
        this.arrTempFun.push(flag);
      }
    }

    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    this.arrTempFunSinRep = this.arrTempFun.filter( distinct );

    for (let j = 0; j < this.funcionarios.length; j++) {
      for (let k = 0; k < this.arrTempFunSinRep.length; k++) {
        if (this.funcionarios[j].iClaveFuncionario === this.arrTempFunSinRep[k]) {
          this.funcinarioAgencia.push(this.funcionarios[j]);
        }
      }
    }
    // console.log(this.funcinarioAgencia);
  }

  public rolesFun: Roles[] = [];
  public rolesFun2: Roles[] = [];
  public arrTempJerar: number[] = [];
  public temp2 = [];

  public jeraTablaAux: number[] = [];
  
  public onSelectFuncionario(iclaveFuncionarioAsign: number) {
    this.rolesFun2 = [];
    this.arrTempJerar = [];
    var arrTemp: number[] = [];
    this.jeraTablaAux = [];
    this.rows = [];
    // console.log("valor select funcionario => " + iclaveFuncionarioAsign);
    this.claveglobal = iclaveFuncionarioAsign;
    this.catDis = this.catDisGlobal;
    // this.getRoles();
    // console.log(this.roles);
/*-----------------------------------------------------------------------------------------------------*/
    // var jerarquiasString: string = "";
    // var jerarquiasTabla: number[] = [];

    for(let h = 0; h < this.expPendientesLista.length; h ++){
      if(this.expPendientesLista[h].iClaveFuncionario == iclaveFuncionarioAsign){
        this.jeraTabla = this.expPendientesLista[h].jerarquiaOrganizacional_id;
        this.jeraTablaAux.push(this.expPendientesLista[h].jerarquiaOrganizacional_id);
      }
    }

      // jerarquiasTabla = this.funcionarioRol.map(cat => cat.rol_id)
      // jerarquiasString = String(jerarquiasTabla);
    
    if(this.jeraTabla == null){
      this.loadingIndicator = true;

      this.getExpedientesSinJerarquia((data) => {
        this.temp = [...data];
        this.rows = data;
        console.log(this.rows);

        for (let i = 0; i < this.rows.length; i++) {
          arrTemp.push(this.rows[i].jerarquiaOrganizacional_id);
        }

        const distinct = (value, index, self)=> {
          return self.indexOf(value) === index;
        }
        this.arrTempJerar = arrTemp.filter(distinct);
        // console.log(this.arrTempJerar);

        this.membershipService.getRoles().subscribe( roles => {
        this.rolesFun = roles
        // console.log(this.rolesFun);
  
        for (let j = 0; j < this.arrTempJerar.length; j++) {
          for (let k = 0; k < this.rolesFun.length; k++) {
            if ((this.rolesFun[k].jerarquiaOrganizacional_id) == this.arrTempJerar[j]) {
              if (this.rolesFun[k].rol_id == 8 ||
                  this.rolesFun[k].rol_id == 7 ||
                  this.rolesFun[k].rol_id == 6 ||
                  this.rolesFun[k].rol_id == 5 ||
                  this.rolesFun[k].rol_id == 3 ||
                  this.rolesFun[k].rol_id == 2) {
                this.rolesFun2.push(this.rolesFun[k]);
              }
            }
          }
        }
        
      });

      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }, this.claveglobal, this.catDis);

    // console.log(this.arrTempJerar);
    } else {

// ==============================================================================

      // for (let j = 0; j < this.jeraTablaAux.length; j++) {

      //   this.membershipService.getListarExp( iclaveFuncionarioAsign, this.catDis, this.jeraTablaAux[j] ).
      //     subscribe(res => {
      //       this.temp = res;
      //       this.rows.push(...res);
      //       this.rows = [...this.rows];
      //       for (let i = 0; i < this.temp.length; i++) {
      //         this.rows.push(this.temp[i]);
      //       }
      //       // this.rows = this.temp2
      //       console.log(this.rows);
      //     });

      //     this.temp = [];
          
      //   }
      //   console.log(this.temp2);
      //   console.log(this.rows);

// ==============================================================================
      this.loadingIndicator = true;

      console.log(this.jeraTablaAux);

      for (let i = 0; i < this.jeraTablaAux.length; i++) {
          
        console.log(this.jeraTablaAux[i]);
  
        this.getExpedientes((data) => {
          this.temp = [...data];
          this.rows.push(...data);
          this.rows = [...this.rows];

          console.log(this.rows);
  
          for (let i = 0; i < this.rows.length; i++) {
            arrTemp.push(this.rows[i].jerarquiaOrganizacional_id);
          }
  
          const distinct = (value, index, self)=> {
            return self.indexOf(value) === index;
          }
          this.arrTempJerar = arrTemp.filter(distinct);
          // console.log(this.arrTempJerar);
  
          this.membershipService.getRoles().subscribe( roles => {
            this.rolesFun = roles
            // console.log(this.rolesFun);
      
            for (let j = 0; j < this.arrTempJerar.length; j++) {
              for (let k = 0; k < this.rolesFun.length; k++) {
                if ((this.rolesFun[k].jerarquiaOrganizacional_id) == this.arrTempJerar[j]) {
                  if (this.rolesFun[k].rol_id == 8 ||
                      this.rolesFun[k].rol_id == 7 ||
                      this.rolesFun[k].rol_id == 6 ||
                      this.rolesFun[k].rol_id == 5 ||
                      this.rolesFun[k].rol_id == 3 ||
                      this.rolesFun[k].rol_id == 2) {
                    this.rolesFun2.push(this.rolesFun[k]);
                  }
                }
              }
            }
          });
  
          setTimeout(() => { this.loadingIndicator = false; }, 1500);
        }, this.claveglobal, this.catDis, this.jeraTablaAux[i]);

      }

    }

  }
/*------------------** --------------------------------------------------------------------------------------------------------------*/
/*----------------- ** --------------------------------------------------------------------------------------------------------------*/
/*------------------** --------------------------------------------------------------------------------------------------------------*/
/*------------------** --------------------------------------------------------------------------------------------------------------*/
/*------------------** --------------------------------------------------------------------------------------------------------------*/
/*------------------** --------------------------------------------------------------------------------------------------------------*/
  
  public jerarqVal: string = "";
  public funcionariosAgencia1: FunciAgencia[] = [];

  public onSelectRoles(value: number) {
    this.funcionariosAgencia1 = [];
    this.iclave = this.claveglobal;
    this.catDis = this.catDisGlobal;
    for (let i = 0; i< this.roles.length; i++){
      var objeto = this.roles[i];
      var rol: number = objeto.rol_id;
      if(rol == value){
      this.jerarquiaOrg = objeto.jerarquiaOrganizacional_id;
      this.jerarqVal = this.jerarquiaOrg.toString();
      break;
      }
    }

    this.FiltrarJerarquia(this.jerarqVal);

    // console.log("Este es el rol => " + rol);
    // console.log("Esta es la jerarquia => " + this.jerarquiaOrg);
    // console.log("valor select rol => " + value);
    // console.log("valor select iclave => " + this.iclave);
    // console.log("valor select catDis => " + this.catDis);

    this.membershipService.getFUsuarioAgencia(this.catDis).subscribe( exp => {
      this.funcionariosAgencia = exp
      // console.log(this.funcionariosAgencia);

      for (let i:number = 0; i < this.funcionariosAgencia.length; i++) {
        // if (this.funcinariosAgencia[i].usuario[0].bEsActivo === 0) {
        //   this.funcinariosAgencia.splice( i, 1 );
        // }

        var rolIdArray: number[] = [];
        for (let j:number = 0; j < this.funcionariosAgencia[i].usuario[0].usuarioRol.length; j++) {
          rolIdArray.push(this.funcionariosAgencia[i].usuario[0].usuarioRol[j].rol_id);
        }
        // console.log(rolIdArray);

        var cont: boolean = false;
        for (let k = 0; k < rolIdArray.length; k++) {
          if (rolIdArray[k] === rol) {
            cont = true;
          }
        }
        // console.log(cont);
        // console.log("posicion => " + i);

        if (cont) {
          this.funcionariosAgencia1.push(this.funcionariosAgencia[i]);
        }
      }

      // console.log(this.funcionariosAgencia1);

    });
  }

  /*======================================pruebas ngx-datatable========================================*/
  public rows = [];
  public temp = [];
  public selected = [];
  public loadingIndicator: boolean = false;
  reorderable: boolean = true;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  columns = [
    { prop: 'expediente' },
    { name: 'nuc' },
  ];

  public listaExp1 = JSON.stringify(this.listaExp);

  getExpedientes(data, clave, cat, jerarquiaOrg) {
    const req = new XMLHttpRequest();
    req.open('GET', this.membershipService.API_URL + '/listarExp/GetExpedientes?clavefunci=' + clave
                    + '&catDis=' + cat
                    + '&jerarquia=' + jerarquiaOrg); 
    req.onload = () => {
      data(JSON.parse(req.response));
    };
    req.send();
    console.log(req);
  }

  getExpedientesSinJerarquia(data, clave, cat) {
    const req = new XMLHttpRequest();
    req.open('GET', this.membershipService.API_URL + '/listarExp/GetExpedientesSinJera?clavefunci=' + clave
                    + '&catDis=' + cat); 
    req.onload = () => {
      data(JSON.parse(req.response));
    };
    req.send();
    console.log(req);
  }

  FiltrarExpediente(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(numExp) {
      return numExp.cNumeroExpediente.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  FiltrarNuc(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(nNuc) {
      return nNuc.cNumeroGeneralCaso.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  FiltrarJerarquia(valor: string) {
    const val = valor.toLowerCase();
    const temp = this.temp.filter(function(jerarquia) {
      return (jerarquia.jerarquiaOrganizacional_id).toString().toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  onSelect({ selected }) {
   
    // console.log('Select Event', this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.arrayExp.push(selected);
    // console.log(this.arrayExp);
  }
  /*===================================================================================================*/

  public asignarPendientes : AsignarPendientes[];

  // Se actualiza el funcionario seleccionado
  public asignarExpPendientes(asignarPendientes: AsignarPendientes) {
    this.loading = true;
    this.membershipService.asignarExpPendientes(asignarPendientes).subscribe( asignarPendientes => {
      this.asignarPendientes;
      swal({
        title:"Se asignaron los expedientes...",
        text: this.titularAgencia,
        type: "success"
      }).then(() =>{
        this.closeModalExpPend();
        this.router.navigate(['/pages/membership']);
      });
      this.loading = false;
    }, err => {
      swal({
        title:"Error en reasignación",
        position: 'center',
        // text: "Ocurrió un error: " + err.message + " verifique su conección o los permisos de acceso de la red.",
        html: "Ocurrió un error al reasignar los expedientes: <br> <strong style= 'color:#FD2D00'>" + err.message + "</strong>",
        type: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
      });
      this.loading = false;
    });
    // console.log("Se ejecuto el asignar expedientes: " + asignarPendientes.iclavefuncionarioNuevo);
    
    
    
  }

  onSubmitExpPend(): void {
    if (this.formExpPend.valid) {

      this.arrayExp = this.selected.map(uno => uno.numeroExpediente_id);
      var stringArray = String(this.arrayExp);
      const iclavefuncionarioAnt: number = this.formExpPend.value.iclaveFuncionarioAsign;
      const iclavefuncionarioNuevo: number = this.formExpPend.value.iclaveFuncionarioDestino;
      const catDiscriminante: number = this.catDis;
      const justificacion: number = this.formExpPend.value.justificacion;

      // console.log(iclavefuncionarioAnt+"             "+iclavefuncionarioNuevo+"   "+ stringArray+"       "+catDiscriminante +"         "+justificacion);

      let asignarPendientes = new AsignarPendientes(iclavefuncionarioAnt,
                                                    iclavefuncionarioNuevo,
                                                    stringArray,
                                                    catDiscriminante,
                                                    justificacion);

      this.asignarExpPendientes( asignarPendientes );

      this.formExpPend.reset({
        hasSubMenu:false,
        parentId:0
      });

      this.closeModalExpPend();
      //this.pageRefresh();
    }
  }

}
