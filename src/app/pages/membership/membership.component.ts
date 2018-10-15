import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE, CambioAdscripcion, ExpPendientes, AsignarPendientes } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { gridSize } from '../../../../node_modules/@swimlane/ngx-charts';
import { RouteConfigLoadStart } from '@angular/router';
import swal from 'sweetalert2';
import { Location } from '@angular/common';
import { promise } from 'protractor';
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService ]
})
export class MembershipComponent implements OnInit {

  public titularAgencia: string;
  public buscarFuncionario: string;
  public menuItems: Array<any>;  
  public cambioAdscripcion : CambioAdscripcion[];
  public adscripcion : CambioAdscripcion;
  public funcionarios: FuncionariosData[] = [];
  public funcionario: FuncionariosData;
  public roles: Roles[] = [];
  public funcionarioRol: Roles[] = [];
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
  public val: number[];
  public funciMP:FuncionariosData[] = [];
  public clavedelactaul :number[];
  public cambio : any[];
  public expPendientes: boolean = false;
  public esMP: boolean = false;
  public soloRoles: boolean = false;
  public pendientesNum: number;
  public esMPNum: number;
  public soloRolesNum: number;
  public esPrincipal: number;
 
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
  
  constructor(public fbf: FormBuilder,
              public fbExpPend: FormBuilder,
              public toastrService: ToastrService,
              public membershipService: MembershipService,
              public menuService: MenuService, 
              public modalService: NgbModal,
              public location: Location) {

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
    console.log(this.funcionarios);

    this.getAgencias();
    console.log(this.agencias);

    this.getRoles();
    console.log(this.roles);

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

  public controlActivos(e, funcionario) {

    swal({
      title: 'Desactivar usuario',
      text: '¿Esta seguro que desea desactivar al usuario?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        const act = e.target.checked;
        const valor: number = 0;
        console.log(funcionario);
        funcionario.bEsActivo = 0;
        console.log("Se desactiva el funcionario => " + funcionario.iClaveFuncionario );
        console.log(valor);
        
        swal(
          'Usuario desactivado',
          'Desactivacion exitosa',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        console.log("Se cancelo la desactivación")
        swal(
          'Cancelado',
          'El usuario no se ha desactivado',
          'error'
        )
      }
    })

    // const act = e.target.checked = true;
    // const valor: number = 0;
    // console.log(funcionario);
    // funcionario.bEsActivo = 0;
    // console.log("Se desactiva el funcionario => " + funcionario.iClaveFuncionario );
    // console.log(valor);
  }

  public controlInactivo(e, funcionario) {

    swal({
      title: 'Activar usuario',
      text: '¿Esta seguro que desea activar al usuario?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Activar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        const inact = e.target.checked;
        const valor: number = 1;
        console.log(funcionario);
        funcionario.bEsActivo = 1;
        console.log("Se activa el funcionario => " + funcionario.iClaveFuncionario);
        console.log(valor);
        swal(
          'Usuario Activado',
          'Activacion exitosa',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        console.log("Se cancelo la activación")
        swal(
          'Cancelado',
          'El usuario no se ha Activado',
          'error'
        )
      }
    })

    const inact = e.target.checked;
    const valor: number = 1;
    console.log(funcionario);
    funcionario.bEsActivo = 1;
    console.log("Se activa el funcionario => " + funcionario.iClaveFuncionario);
    console.log(valor);
  }

  pageRefresh() {
    location.reload();
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
    //this.checkEPyMP = null;
  }

  public llamarRoles( clave:number){
    var names = "";
    this.membershipService.getFUsuarioRol(clave).subscribe( funcionarioRol => {
      this.funcionarioRol = funcionarioRol
      //console.log(this.funcionarioRol);
      var roles  = JSON.stringify(this.funcionarioRol);

      for(var i = 0; i<funcionarioRol.length; i++){
      
        names += funcionarioRol[i].cDescripcionRol+"<br>";
        //console.log(names);
      }
      //console.log(names);
      
      swal({
        title: "<b>Roles Del Funcionario</b>", 
        html: names+"<br>",  
        confirmButtonText: "Aceptar", 
      });

    });
  }


  // Se cargan los datos del funcionario
  public getFuncionarios(): void {
    this.membershipService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios
      console.log(this.funcionarios);

      // for (let j = 0; j < this.funcionarios.length; j++) {

      //   this.cargarRoles(this.funcionarios[j].iClaveFuncionario);

      //   this.funcionarios[j].usuario.push();
      // }

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
  public getRoles(): void {
    var hash = {}
    this.membershipService.getRoles().subscribe( roles => {
      this.roles = roles.filter(function(current){
        var exists = !hash[current.rol_id] || false;
        hash[current.rol_id] = true;
        // console.log("Este es el arreglo ya formateado:=>"+exists);
        return exists;
      });
      console.log("Estos son los roles");
      console.log(this.roles);

    });
  }

  // Obtener los roles del funcionario que se selecciona
  public getFuncionarioRol(funcionario: FuncionariosData): void {
    this.membershipService.getFUsuarioRol(funcionario.iClaveFuncionario).subscribe( funcionarioRol => {
      this.funcionarioRol = funcionarioRol
      console.log(this.funcionarioRol);
      
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

  // Se cargan las agencias del catalogo
  public getAgencias(): void {
    this.membershipService.getAgencias().subscribe( agencias => {
      this.agencias = agencias
      console.log(this.agencias);
    });
  }

  public nombreAgActual: string;
  public nAgActual: string[];

  public getFuncionarioAgencia(funcionario:FuncionariosData):void{
    this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe( funciAgencia => {
      this.funciAgencia = funciAgencia
      this.nAgActual = this.funciAgencia.map(a => a.cNombre);
      this.nombreAgActual = this.nAgActual[0];
    });
  }

  public getCatUIE(valor: number): void {
    if (valor !== undefined) {
      console.log(valor);
      this.membershipService.getcatUIE(valor).subscribe( catUIE => {
        this.catUIE = catUIE
        console.log(this.catUIE);
        if (this.catUIE.some(cat => cat.catUIE_id !== 0)) {
          this.val = this.catUIE.map(cat => cat.catUIE_id);
          console.log(this.val);
        } else {
          this.val = [0];
          console.log(this.val);
        }
      });
    } else {
      console.log("No se ha seleccionado agencia");
    }

    if(valor !== undefined){
      this.membershipService.getfunciMP(valor).subscribe( funciMP => {
        this.funciMP = funciMP
        console.log(funciMP);
        if (this.funciMP.some(cat => cat.iClaveFuncionario !== 0)) {
          this.clavedelactaul = this.funciMP.map(cat => cat.iClaveFuncionario);
          console.log(this.clavedelactaul);
        } else {
          this.clavedelactaul = [0];
          console.log(this.clavedelactaul);
        }
      });
    }
  }
  
  // Se actualiza el funcionario seleccionado
  public cambioAdscripcion1(cambioAdscripcion:CambioAdscripcion) {
    this.membershipService.cambioAdscripcion(cambioAdscripcion).subscribe( cambioAdscripcion => {
      this.cambioAdscripcion;
    });
    console.log("Se ejecuto el cambio de adscripcion: " + cambioAdscripcion.iClaveFuncionarioSolicitante);
    swal('Registro exitoso...', this.titularAgencia, 'success');
    
  }

  public toggle(type) {
    this.type = type;
  }

  // Se dispara con el evento del clic cuando se selecciona un rol del catálogo
  public onSelectRol(r: Roles) {
    this.selectedRol = r.rol_id;
    console.log("Se selecciono el rol => " + this.selectedRol);
    this.addRol = r;
    console.log(this.addRol);

    this.posicionRol = this.roles.indexOf(this.addRol);
  }

  // Se agrega el rol a los roles del funcionario
  agregarRol() {
    if (this.posicionRol > -1 && this.selectedRol !== 0) {
      this.funcionarioRol.push(this.addRol);
      console.log("Funcion agregar:");
      console.log(this.addRol);
      console.log("Array funcionarioRol:");
      console.log(this.funcionarioRol);
      this.roles.splice(this.posicionRol, 1);
    } else {
      console.log("Seleccine un rol a agregar!");
      this.toastrService.warning('Por favor seleccione un rol para agregar!', 'Atención!', {timeOut: 3000});
    }
    
    this.posicionRol = 0;
    this.selectedRol = 0;
  }

  public onSelectFRolF(rol: Roles) {
    this.selectedRolF = rol.rol_id;
    console.log("Se seleccion de rol del funcionario=> " + this.selectedRolF);
    this.delRol = rol;
    console.log(this.delRol);

    this.posicionRolF = this.funcionarioRol.indexOf(this.delRol);
  }

  // Se quita el rol a los roles del funcionario
  public rolesEliminados: Roles[] = [];
  quitarRol() {
    if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
      this.roles.push(this.delRol);
      this.rolesEliminados.push(this.delRol);
      console.log(this.rolesEliminados);
      console.log("Funcion quitar");
      console.log(this.delRol);
      this.roles.sort( (a, b) => a.rol_id - b.rol_id );
      console.log("Array roles:");
      console.log(this.roles);
      this.funcionarioRol.splice(this.posicionRolF, 1);
    } else {
      console.log("Seleccione el rol a eliminar!");
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
  public closeModal(){
    this.modalRef.close();
    this.form.reset();
    this.funcionario = null;
    this.rolesEliminados = [];
    this.getRoles();
    // this.pageRefresh();
    this.selectedRol = 0;
    this.selectedRolF = 0;
    this.getAgencias();
  }

  // Cerrar el modal de expedientes pendientes
  closeModalExpPend() {
    this.modalExpPend.close();
    this.formExpPend.reset();
    // this.pageRefresh();
    this.selectedExpPend = 0;
  }

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

      const iClaveFuncionarioSolicitante: number = this.form.value.iClaveFuncionario;
      const iClaveFuncionarioAnterior: number = this.clavedelactaul[0];
      const iClaveFuncionarioExp: number = this.form.value.archivoDigital_id;
      const catDiscriminateSolicitante: number = this.funcionario.catDiscriminante_id;
      const catUIE_actual: number = this.val[0];
      const catDiscriminateNuevo: number = this.form.value.catDiscriminante_id;
      const Justificacion: string = this.form.value.cRFC;
      const expPendientes: number = this.pendientesNum;
      const rolesFuncionario: Roles[] = this.funcionarioRol;
     
      const id_roles  = this.funcionarioRol.map(cat => cat.rol_id)
      const rolesString = String(id_roles);

      const esPrincipal: number = this.form.value.puesto_val;
      const esMP: number = this.esMPNum;
      const soloRoles: number = this.soloRolesNum;

      console.log("iClaveFuncionarioSolicitante => " + iClaveFuncionarioSolicitante);
      console.log("iClaveFuncionarioAnterior => " + iClaveFuncionarioAnterior);
      console.log("iClaveFuncionarioExp => " + iClaveFuncionarioExp);
      console.log("catDiscriminante_id => " + catDiscriminateSolicitante);
      console.log("catUIE_id => " + catUIE_actual);
      console.log("catDiscriminante_idNuevo => " + catDiscriminateNuevo);
      console.log("Jusfificación => " + Justificacion);
      console.log("Expedientes pendientes => " + expPendientes);
      console.log("Roles del funcionario => " + rolesFuncionario);
      console.log("Roles en un string => " + rolesString);
      console.log("Es principal => " + esPrincipal);

      console.log("Se envio el formulario:");
     // console.log(this.form.value);
     console.log(this.funcionarioRol);
    
     let cambioAdscripcion = new CambioAdscripcion( iClaveFuncionarioSolicitante,
                                                    iClaveFuncionarioAnterior,
                                                    iClaveFuncionarioExp,
                                                    catDiscriminateSolicitante,
                                                    catUIE_actual,
                                                    catDiscriminateNuevo,
                                                    Justificacion,
                                                    expPendientes,
                                                    rolesString,
                                                    esPrincipal,
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

    //this.modalRef.close();
    this.closeModal();
    this.pageRefresh();
  } 

  public expPendientesLista: ExpPendientes[] = [];

  // Se cargan los expedientes que se encuentran pendientes
  public getExpPendientes(): void {
    this.membershipService.getExpPendientes().subscribe( eP => {
      this.expPendientesLista = eP
      console.log(this.expPendientesLista); 

      for (let i = 0; i < this.expPendientesLista.length; i++) {
        const ag: number = this.expPendientesLista[i].catDis_ant;
        for (let j = 0; j < this.agencias.length; j++) {
          if (ag === this.agencias[j].catDiscriminante_id) {
            const agNombre: string = this.agencias[j].cNombre;
            this.expPendientesLista
            this.expPendientesLista[i].cNombre = agNombre;

            this.expPendientesLista[i].cNombre = agNombre;
          }
        }
      }

    });
  }

  public funcinariosAgencia: FunciAgencia[] = [];

  public getFuncionariosAg(expPend: ExpPendientes):void {
    this.membershipService.getFUsuarioAgencia(expPend.catDis_ant).subscribe( exp => {
      this.funcinariosAgencia = exp
      console.log(this.funcinariosAgencia);
    });
  }

  public selectedExpPend: number = 0;
  public objExpPend: ExpPendientes;

  public onSelectExpPend(expPend: ExpPendientes) {
    this.selectedExpPend = expPend.cambioAdscripcion_id;
    console.log("Se seleccionaron los expedientes pendientes => " + this.selectedExpPend);
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
    console.log("Se ejecuto el asignar expedientes: " + asignarPendientes.iclavefuncionarioNuevo);
    swal('Se asignaron los expedientes...', this.titularAgencia, 'success');

    // swal({
    //   title: 'Funcionarios de la agencia',
    //   text: 'Mostrar los funcionarios de la agencia seleccionada',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Asignar',
    //   cancelButtonText: 'Cancelar'
    // }).then((result) => {
    //   if (result.value) {
    //     swal(
    //       'Expedientes asignados',
    //       'Funcionario al que se le asigno',
    //       'success'
    //     )
    //   // For more information about handling dismissals please visit
    //   // https://sweetalert2.github.io/#handling-dismissals
    //   } else if (result.dismiss === swal.DismissReason.cancel) {
    //     swal(
    //       'Cancelado',
    //       'Los expedientes no se asignaron',
    //       'error'
    //     )
    //   }
    // })
    
  }

  onSubmitExpPend(): void {
    if (this.formExpPend.valid) {

      const iclavefuncionarioAnt: number = this.formExpPend.value.iclaveFuncionarioAsign;
      const iclavefuncionarioNuevo: number = this.objExpPend.iclaveFuncionario;
      const catDiscriminante: number = this.objExpPend.catDis_ant;

      let asignarPendientes = new AsignarPendientes(  iclavefuncionarioAnt,
                                                      iclavefuncionarioNuevo,
                                                      catDiscriminante );

      this.asignarExpPendientes( asignarPendientes );

      this.formExpPend.reset({
        hasSubMenu:false,
        parentId:0
      });

      console.log("se envia el formulario de expedientes pendientes validado");
      this.closeModalExpPend();
      this.pageRefresh();
    }
  }

}
