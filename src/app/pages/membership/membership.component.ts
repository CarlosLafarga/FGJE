import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE, CambioAdscripcion, expPendientes } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { gridSize } from '../../../../node_modules/@swimlane/ngx-charts';
import { RouteConfigLoadStart } from '@angular/router';
import swal from 'sweetalert2';
import { Location } from '@angular/common'
 
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
    //console.log(JSON.stringify(this.roles));

    this.formExpPend =  this.fbExpPend.group({
      cambioAdscripcion_id: null,
      iclaveFuncionario: null,
      catDis_ant: null,
      catDis_asignado: null,
      fecha_creacion: null,
      fecha_modificacion: null,
      esEmp: null,
      Asignados: null,
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

  pageRefresh() {
    location.reload();
  }

  public valReasignarExpedientes: boolean = true;
  public valExpPendCheck: boolean = true;
  public valEsMPCheck: boolean = true;
  public valSolocambioCheck: boolean = true;

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
    } else {
      this.valReasignarExpedientes = true;
      this.valExpPendCheck = true;
      this.valEsMPCheck = true;
    }
    //this.checkEPyMP = null;
  }

  // Se cargan los datos del funcionario
  public getFuncionarios(): void {
    this.membershipService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios
      console.log(this.funcionarios);
    });
  }

  public rolesSR: Roles[] = [];
  
  // Se cargan los roles del catalogo
  public getRoles(): void {
    this.membershipService.getRoles().subscribe( roles => {
      this.roles = roles
      console.log(this.roles);

      // for (let index = 1; index <= roles.length; index++) {
      //   var obj = roles.filter( function ( rol ) {
      //     return rol.rol_id === index;
      //   });
      //   for( const i in obj ) {
      //     this.rolesSR.push( obj[0] );
      //     obj = [];
      //     break
      //   }
      // }

      // console.log(this.rolesSR);

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
    console.log(this.nombreAgActual);
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

    this.getFuncionarioRol( funcionario );
    this.getFuncionarioAgencia( funcionario );
    this.getCatUIE(catUIE);
    
    if(funcionario){
      this.funcionario = funcionario;
      this.form.setValue(funcionario);
    } 
    
    this.modalRef = this.modalService.open(modalContent, { size: 'lg', container: '.app' });

    this.modalRef.result.then((result) => {
      this.form.reset();
    }, (reason) => {
      this.form.reset();
    });
  }

  // Se abre el modal y se cargan los los expedientes pendientes
  openExpPend(expPendientes) {
    this.modalExpPend = this.modalService.open(expPendientes, { size: 'lg', container: '.app' });
  }

  // Cerrar el modal
  public closeModal(){
    this.modalRef.close();
    this.form.reset();
    this.funcionario = null;
    this.rolesEliminados = [];
    this.getRoles();
  }

  // Cerrar el modal de expedientes pendientes
  closeModalExpPend() {
    this.modalExpPend.close();
    this.formExpPend.reset();
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

      const id_rolesEliminados = this.rolesEliminados.map(obt => obt.rol_id)
      const rolesEliminadosString = String(id_rolesEliminados);

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
      console.log("Roles eliminados => " + rolesEliminadosString)
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
                                                    rolesEliminadosString,
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
  } 

  public expPendientesLista: expPendientes[] = [];

  // Se cargan los expedientes que se encuentran pendientes
  public getExpPendientes(): void {
    this.membershipService.getExpPendientes().subscribe( eP => {
      this.expPendientesLista = eP
      console.log(this.expPendientesLista);
    });
  }

  onSubmitExpPend(): void {
    if (this.formExpPend.valid) {
      console.log("se envia el formulario de expedientes pendientes validado");
      this.closeModalExpPend();
    }
  }

}
