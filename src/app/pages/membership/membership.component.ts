import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE, CambioAdscripcion, ExpPendientes, AsignarPendientes, cambioEstatus } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { gridSize } from '../../../../node_modules/@swimlane/ngx-charts';
import { RouteConfigLoadStart, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Location } from '@angular/common';
import { $ } from 'protractor';
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService ]
})
export class MembershipComponent implements OnInit {

  public router: Router;
  public titularAgencia: string;
  public buscarFuncionario: string;
  public menuItems: Array<any>;  
  public cambioAdscripcion : CambioAdscripcion[];
  public adscripcion : CambioAdscripcion;
  public funcionarios: FuncionariosData[] = [];
  public funcionario: FuncionariosData;
  public roles: Roles[] = [];
  public funcionarioRol: Roles[] = [];
  public count : number;
  public agencias: Agencias[] = [];
  public agencia: Agencias;
  public users: User[];
  public user: User;
  public searchText: string;
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
  public funciMP:FuncionariosData[] = [];
  public clavedelactaul :number[] = [];
  public cambio : any[];
  public expPendientes: boolean = false;
  public esMP: boolean = false;
  public soloRoles: boolean = false;
  public pendientesNum: number;
  public esMPNum: number;
  public soloRolesNum: number;
  public esPrincipal: number;
  public cambioEstatus1: cambioEstatus[];
  public mostrarActivos: boolean = true;
 
  public menuSelectSettings: IMultiSelectSettings = {
      enableSearch: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn btn-secondary btn-block',
      dynamicTitleMaxItems: 0,
      displayAllSelectedText: true,
      showCheckAll: true,
      showUncheckAll: true
  };
  public menuSelectTexts: IMultiSelectTexts = {
      checkAll: 'Select all',
      uncheckAll: 'Unselect all',
      checked: 'menu item selected',
      checkedPlural: 'menu items selected',
      searchPlaceholder: 'Find menu item...',
      defaultTitle: 'Select menu items for user',
      allSelected: 'All selected',
  };
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
    })

  }

  ngOnInit() {
    this.getFuncionarios();

    this.getAgencias();

    this.getRoles();

    this.formExpPend =  this.fbExpPend.group({
      cambioAdscripcion_id: null,
      iclaveFuncionario: null,
      catDis_ant: null,
      catDis_asignado: null,
      fecha_creacion: null,
      fecha_modificacion: null,
      esEmp: null,
      Asignados: null,
      iclaveFuncionarioAsign: null
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
        // console.log("Se desactiva el funcionario => " + funcionario.cNombreFuncionario );
        // console.log(valor);
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

  public controlInactivo(funcionario) {

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

      console.log(result.value);

      if (result.value) {
        // const inact = e.target.checked;
        const valor: number = 1;
        // console.log(funcionario);
        funcionario.bEsActivo = 1;
        // console.log("Se activa el funcionario => " + funcionario.cNombreFuncionario);
        // console.log(valor);
        var justificacion = "";
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
        console.log("Se cancelo la activación")
      
      }
    })

  }

  pageRefresh() {
    this.form.reset();
    this.router.navigate(['/pages/membership']);
    // location.reload();
  }

  public valReasignarExpedientes: boolean = true;
  public valExpPendCheck: boolean = true;
  public valEsMPCheck: boolean = true;
  public valSolocambioCheck: boolean = true;
  public valAgenciaSelect: boolean = true;

  public pendientesCheck( e ) {
    this.expPendientes = e.target.checked;
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
    this.soloRoles = e.target.checked;
    if (this.soloRoles) {
      this.valReasignarExpedientes = false;
      this.valExpPendCheck = false;
      this.valEsMPCheck = false;
      this.valAgenciaSelect = false;
    } else {
      this.valReasignarExpedientes = true;
      this.valExpPendCheck = true;
      this.valEsMPCheck = true;
      this.valAgenciaSelect = true;
    }
  }

  public searchActivos: string = "1";

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
          names += "<b style= 'color:#ff0000'>" + funcionarioRol[i].cDescripcionRol + "</b><br>";
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

  // Se cargan los datos del funcionario
  public getFuncionarios(): void {
    this.membershipService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios
      // console.log(this.funcionarios);

      for (let i = 0; i < this.funcionarios.length; i++) {
        const ag: number = this.funcionarios[i].catDiscriminante_id;
        for (let j = 0; j < this.agencias.length; j++) {
          if (ag === this.agencias[j].catDiscriminante_id) {
            const agNombre: string = this.agencias[j].cNombre;
            this.funcionarios[i].cNombre = agNombre;

            this.funcionarios[i].cNombre = agNombre;
          }
        }
      }

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
  
  // Se cargan los roles del catalogo
  // public getRoles(): void {
  //   var hash = {}
  //   this.membershipService.getRoles().subscribe( roles => {
  //     this.roles = roles.filter(function(current){
  //       var exists = !hash[current.rol_id] || false;
  //       hash[current.rol_id] = true;
  //       // console.log("Este es el arreglo ya formateado:=>"+exists);
  //       return exists;
  //     });
  //     console.log("Estos son los roles");
  //     console.log(this.roles);

  //   });
  // }

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
      console.log(this.funcionarioRol);
      
      // for (let i = 0; i < this.funcionarioRol.length; i++) {
      //   const elementFR = this.funcionarioRol[i];
      //   for (let j = 0; j < this.roles.length; j++) {
      //     const elementR = this.roles[j];
      //     if ( elementFR.rol_id === elementR.rol_id) {
      //       this.roles.splice(j, 1);
      //     }
      //   }
      // }

    });
  }

  public getCountExp1(funcionario: FuncionariosData){
    this.membershipService.getCountExp(funcionario.iClaveFuncionario,funcionario.catDiscriminante_id).subscribe(
      count =>{ this.count = count
        // console.log("Tiene estos expedientes pendientes => "+this.count);
        if(count == 0){
          this.valReasignarExpedientes = false;
          this.valExpPendCheck = false;
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

  public getFuncionarioAgencia(funcionario:FuncionariosData):void{
    this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe( funciAgencia => {
      this.funciAgencia = funciAgencia
      this.nAgActual = this.funciAgencia.map(a => a.cNombre);
      this.nombreAgActual = this.nAgActual[0];

      for (let i = 0; i < this.funciAgencia.length; i++) {
        if (this.funcionario.iClaveFuncionario === this.funciAgencia[i].iClaveFuncionario) {
          this.funciAgencia.splice( i, 1);
        }
      }

    });
  }

  public getCatUIE(valor: number): void {
    if (valor !== undefined) {
      // console.log(valor);
      this.membershipService.getcatUIE(valor).subscribe( catUIE => {
        this.catUIE = catUIE
        // console.log(this.catUIE);
        if (this.catUIE.some(cat => cat.catUIE_id !== 0)) {
          this.val = this.catUIE.map(cat => cat.catUIE_id);
          // console.log(this.val);
        } else {
          this.val = [0];
          // console.log(this.val);
        }
      });
    } else {
      // console.log("No se ha seleccionado agencia");
    }

    if(valor !== undefined){
      this.membershipService.getfunciMP(valor).subscribe( funciMP => {
        this.funciMP = funciMP
        // console.log(funciMP);
        if (this.funciMP.some(cat => cat.iClaveFuncionario !== 0)) {
          this.clavedelactaul = this.funciMP.map(cat => cat.iClaveFuncionario);
          // console.log(this.clavedelactaul);
        } else {
          this.clavedelactaul = [0];
          // console.log(this.clavedelactaul);
        }
      });
    }
  }
  
  // Se actualiza el funcionario seleccionado
  public cambioAdscripcion1(cambioAdscripcion:CambioAdscripcion) {
    this.membershipService.cambioAdscripcion(cambioAdscripcion).subscribe( cambioAdscripcion => {
      this.cambioAdscripcion;
    });
    // console.log("Se ejecuto el cambio de adscripcion: " + cambioAdscripcion.iClaveFuncionarioSolicitante);
    
    swal({
      title:"Registro exitoso...",
      text: this.titularAgencia,
      type: "success"
      }).then(() =>{
      
        this.router.navigate(['/pages/membership']);
      });
  }

  public cambioEstatus(cambioEstatus: cambioEstatus){
    this.membershipService.cambioEstatus(cambioEstatus).subscribe(cambioEstatus =>{
      this.cambioEstatus;
    });
    // console.log("se ejecuto cambio de estatus.");
    
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
  agregarRol() {
    if (this.posicionRol > -1 && this.selectedRol !== 0) {
      this.funcionarioRol.push(this.addRol);
      // console.log("Funcion agregar:");
      // console.log(this.addRol);
      // console.log("Array funcionarioRol:");
      // console.log(this.funcionarioRol);
      this.roles.splice(this.posicionRol, 1);
    } else {
      this.toastrService.warning('Por favor seleccione un rol para agregar!', 'Atención!', {timeOut: 3000});
    }
    
    this.posicionRol = 0;
    this.selectedRol = 0;
  }

  public onSelectFRolF(rol: Roles) {
    this.selectedRolF = rol.rol_id;
    // console.log("Se seleccion de rol del funcionario=> " + this.selectedRolF);
    this.delRol = rol;
    console.log(this.delRol);

    this.posicionRolF = this.funcionarioRol.indexOf(this.delRol);
  }

  // Se quita el rol a los roles del funcionario
  public rolesEliminados: Roles[] = [];
  quitarRol() {
    if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
      if (this.delRol.esPrincipal === 1) {
        // console.log("El rol es principal");
        this.toastrService.warning('no puede eliminar el rol principal! para poder eliminar este rol seleccione otro como principal.', 'Atención!', {timeOut: 3000});
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
    } else {
      this.toastrService.warning('Por favor seleccione un rol para eliminar!', 'Atención!', {timeOut: 3000});
    }

    this.posicionRolF = 0;
    this.selectedRolF = 0;
  }
  
  // Se abre el modal y se cargan los datos del funcionario seleccionado
  public openModal(modalContent, funcionario, catUIE) {
    console.log(funcionario);

    // this.getAgencias();
    // this.getRoles();
    this.getFuncionarioRol( funcionario );
    this.getFuncionarioAgencia( funcionario );
    this.getCatUIE(catUIE);
    this.getCountExp1(funcionario);
    
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
    this.form.reset();
    this.funcionario = null;
    this.rolesEliminados = [];
    this.getRoles();
    this.selectedRol = 0;
    this.selectedRolF = 0;
    this.getAgencias();

    this.p2 = 1;

    this.pageRefresh();

  }

  // Cerrar el modal de expedientes pendientes
  closeModalExpPend() {
    this.modalExpPend.close();
    this.formExpPend.reset();
    this.selectedExpPend = 0;
    this.funcinariosAgencia = [];
  }

  // radioChange( e ) {
  //   console.log("detecte el evento del radio");
  // }

  // Se ejecuta el envio del formulario
  public onSubmit():void {

    if (this.form.valid) {

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
      iClaveFuncionarioExp = this.form.value.archivoDigital_id;
      catDiscriminateSolicitante = this.funcionario.catDiscriminante_id;
      catUIE_actual = this.val[0];
      catDiscriminateNuevo = this.form.value.catDiscriminante_id;
      Justificacion = this.form.value.cRFC;

      if(this.count >0){
      var  expPendientes: number = this.pendientesNum;
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
      console.log("Es principal => " + this.esPrincipal);

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
      console.log(cambioAdscripcion);
      this.cambioAdscripcion1(cambioAdscripcion);
      this.form.reset({
        hasSubMenu:false,
        parentId:0
      });
    }

    this.expPendientes = false;

    this.closeModal();
  } 

  public expPendientesLista: ExpPendientes[] = [];

  // Se cargan los expedientes que se encuentran pendientes
  public getExpPendientes(): void {
    this.membershipService.getExpPendientes().subscribe( eP => {
      this.expPendientesLista = eP
      // console.log(this.expPendientesLista); 

      for (let i = 0; i < this.expPendientesLista.length; i++) {
        const ag: number = this.expPendientesLista[i].catDiscriminante_anterior;
        for (let j = 0; j < this.agencias.length; j++) {
          if (ag === this.agencias[j].catDiscriminante_id) {
            const agNombre: string = this.agencias[j].cNombre;
            // this.expPendientesLista
            // this.expPendientesLista[i].cNombre = agNombre;

            this.expPendientesLista[i].cNombre = agNombre;
            break;
          }
        }
      }

      for (let i = 0; i < this.expPendientesLista.length; i++) {
        const f: number = this.expPendientesLista[i].iclaveFuncionario;
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

      // console.log(this.expPendientesLista); 

    });
  }

  public funcinariosAgencia: FunciAgencia[] = [];

  public getFuncionariosAg(expPend: ExpPendientes):void {
    this.membershipService.getFUsuarioAgencia(expPend.catDiscriminante_anterior).subscribe( exp => {
      this.funcinariosAgencia = exp
      console.log(this.funcinariosAgencia);
    });
  }

  public selectedExpPend: number = 0;
  public objExpPend: ExpPendientes;

  public onSelectExpPend(expPend: ExpPendientes) {
    this.selectedExpPend = expPend.cambioAdscripcionExp_id;
    this.objExpPend = expPend;
    console.log(this.objExpPend);
    
    this.getFuncionariosAg(this.objExpPend);

    // this.expPendientesLista.

  }

  public asignarPendientes : AsignarPendientes[];

  // Se actualiza el funcionario seleccionado
  public asignarExpPendientes(asignarPendientes: AsignarPendientes) {
    this.membershipService.asignarExpPendientes(asignarPendientes).subscribe( asignarPendientes => {
      this.asignarPendientes;
    });
    // console.log("Se ejecuto el asignar expedientes: " + asignarPendientes.iclavefuncionarioNuevo);
    
    swal({
      title:"Se asignaron los expedientes...",
      text: this.titularAgencia,
      type: "success"
      }).then(() =>{
      
        this.router.navigate(['/pages/membership']);
      });
    
    
  }

  onSubmitExpPend(): void {
    if (this.formExpPend.valid) {

      const iclavefuncionarioAnt: number = this.formExpPend.value.iclaveFuncionarioAsign;
      const iclavefuncionarioNuevo: number = this.objExpPend.iclaveFuncionario;
      const catDiscriminante: number = this.objExpPend.catDiscriminante_anterior;

      // console.log(iclavefuncionarioAnt+"             "+iclavefuncionarioNuevo+"       "+catDiscriminante);

      let asignarPendientes = new AsignarPendientes(catDiscriminante, iclavefuncionarioNuevo, iclavefuncionarioAnt);

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
