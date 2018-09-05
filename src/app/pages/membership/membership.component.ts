import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { gridSize } from '../../../../node_modules/@swimlane/ngx-charts';
import { RouteConfigLoadStart } from '@angular/router';
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService ]
})
export class MembershipComponent implements OnInit {

  public buscarFuncionario: string;
  public menuItems: Array<any>;  
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
  public form: FormGroup;
  public genders = ['male', 'female'];
  public genderOption: string;
  public selectedRol: number = 0;
  public selectedRolF: number = 0;
  public addRol: Roles;
  public delRol: Roles;
  public posicionRol: number = 0;
  public posicionRolF: number = 0;
  public funciAgencia: FunciAgencia[];
  public catUIE: catUIE[] = [];
 
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
              public toastrService: ToastrService,
              public membershipService: MembershipService,
              public menuService: MenuService, 
              public modalService: NgbModal) {

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

  // Se cargan los datos del funcionario
  public getFuncionarios(): void {
    this.membershipService.getFuncionarios().subscribe( funcionarios => {
      this.funcionarios = funcionarios
      console.log(this.funcionarios);
    });
  }

  // Se cargan los roles del catalogo
  public getRoles(): void {
    this.membershipService.getRoles().subscribe( roles => {
      this.roles = roles
      console.log(this.roles);
      /* for (const id$ in roles) {
        const p = roles[id$];
        p.id$ = id$;
        this.roles.push(roles[id$]);
      } */
    });
  }

  // Obtener los roles del funcionario que se selecciona
  public getFuncionarioRol(funcionario: FuncionariosData): void {
    this.membershipService.getFUsuarioRol(funcionario.iClaveFuncionario).subscribe( funcionarioRol => {
      this.funcionarioRol = funcionarioRol
      console.log(this.funcionarioRol);
    });
  }

  // Se cargan las agencias del catalogo
  public getAgencias(): void {
    this.membershipService.getAgencias().subscribe( agencias => {
      this.agencias = agencias
      console.log(this.agencias);
    });
  }

  public getFuncionarioAgencia(funcionario:FuncionariosData):void{
    this.membershipService.getFUsuarioAgencia(funcionario.catDiscriminante_id).subscribe( funciAgencia => {
      this.funciAgencia = funciAgencia
    });
  }

  public getCatUIE(agencia: Agencias): void {
    this.membershipService.getcatUIE(agencia.catDiscriminante_id).subscribe( catUIE => {
      this.catUIE = catUIE
    });
    }

  // Se actualiza el funcionario seleccionado
  public updateFuncionario(funcionario:FuncionariosData) {
    this.membershipService.updateFuncionario(funcionario).subscribe(funcionario => {
      this.getFuncionarios();
    });
    console.log("Se ejecuto el updateFuncionario: " + funcionario.cNombreFuncionario);
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
  quitarRol() {
    if (this.posicionRolF > -1 && this.selectedRolF !== 0) {
      this.roles.push(this.delRol);
      console.log("Funcion quitar");
      console.log(this.delRol);
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
  public openModal(modalContent, funcionario) {
    console.log(funcionario);

    this.getFuncionarioRol( funcionario );
    this.getFuncionarioAgencia( funcionario );
    // this.getCatUIE( funcionario );
    
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

  // Cerrar el modal
  public closeModal(){
    this.modalRef.close();
    this.form.reset();
    this.funcionario = null;
  }

  // Se ejecuta el envio del formulario
  public onSubmit(funcionario:FuncionariosData):void {

    if (this.form.valid) {
      const iClaveFuncionarioSolicitante: number = this.form.value.iClaveFuncionario;
      const iClaveFuncionarioAnterior: number = 0;
      const catDiscriminante_id: number = this.funcionario.catDiscriminante_id;
      const catUIE_id: number = 0;
      const catDiscriminante_idNuevo: number = this.form.value.catDiscriminante_id;

      console.log("iClaveFuncionarioSolicitante => " + iClaveFuncionarioSolicitante);
      console.log("iClaveFuncionarioAnterior => " + iClaveFuncionarioAnterior);
      console.log("catDiscriminante_id => " + catDiscriminante_id);
      console.log("catUIE_id => " + catUIE_id);
      console.log("catDiscriminante_idNuevo => " + catDiscriminante_idNuevo);
      console.log("Jusfificación (pendiente) => ");

      console.log("Se envio el formulario:");
      console.log(this.form.value);
      if(funcionario.iClaveFuncionario){
        this.updateFuncionario(funcionario);
        console.log("Se actualizo el funcionario => " + funcionario.iClaveFuncionario);
      }      
      this.modalRef.close();    
    }
  } 

}


/*
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService ]
})
export class MembershipComponent implements OnInit {

  public menuItems:Array<any>;  
  public users: User[];
  public user: User;
  public searchText: string;
  public p:any;
  public type:string = 'grid';
  public modalRef: NgbModalRef;
  public form:FormGroup;
  public genders = ['male', 'female'];
  public genderOption:string;
 
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
  
  constructor(public fb:FormBuilder, 
              public toastrService: ToastrService,
              public membershipService:MembershipService,
              public menuService:MenuService, 
              public modalService: NgbModal) {

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
    this.getUsers(); 
    this.form = this.fb.group({
        id: null,
        username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
        password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
        profile: this.fb.group({
          name: null,
          surname: null,  
          birthday: null,
          gender: null,
          image: null
        }),
        work: this.fb.group({
          company: null,
          position: null,
          salary: null
        }),
        contacts: this.fb.group({
          email: null,
          phone: null,
          address: null          
        }),
        social: this.fb.group({
          facebook: null,
          twitter: null,
          google: null
        }),
        settings: this.fb.group({
          isActive: null,
          isDeleted: null,
          registrationDate: null,
          joinedDate: null
        }),
        menuIds: null
    });
  }

  public getUsers(): void {
    this.membershipService.getUsers().subscribe( users => 
      this.users = users
    );    
  }

  public addUser(user:User){
    this.membershipService.addUser(user).subscribe(user => {
      this.getUsers();      
    });
  }

  public updateUser(user:User){
    this.membershipService.updateUser(user).subscribe(user => {
      this.getUsers();      
    });
  }

  public deleteUser(user:User){
    this.membershipService.deleteUser(user.id).subscribe(result => 
      this.getUsers()
    );
  }

  public toggle(type){
    this.type = type;
  }

  public openMenuAssign(event){
    let parent = event.target.parentNode;
    while (parent){
      parent = parent.parentNode;
      if(parent.classList.contains('content')){
        parent.classList.add('flipped');
        parent.parentNode.parentNode.classList.add('z-index-1');
        break;
      }
    }
  }

  public closeMenuAssign(event){
    let parent = event.target.parentNode;
    while (parent){
      parent = parent.parentNode;
      if(parent.classList.contains('content')){
        parent.classList.remove('flipped');
        parent.parentNode.parentNode.classList.remove('z-index-1');
        break;
      }
    }
  }

  public assignMenuItemsToUser(user){  
    this.updateUser(user);
    sessionStorage.setItem('userMenuItems', JSON.stringify(user.menuIds));
    this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
  }

  public openModal(modalContent, user) {
    if(user){
      this.user = user;
      this.form.setValue(user);
      this.genderOption = user.profile.gender; 
    } 
    else{
      this.user = new User();
      this.user.profile = new UserProfile();
      this.user.work = new UserWork();
      this.user.contacts = new UserContacts();
      this.user.social = new UserSocial();
      this.user.settings = new UserSettings();
    }   
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
    
    this.modalRef.result.then((result) => {
      this.form.reset();
      this.genderOption = null;
    }, (reason) => {
      this.form.reset();
      this.genderOption = null;
    });
  }

  public closeModal(){
    this.modalRef.close();
  }

  public onSubmit(user:User):void {
    if (this.form.valid) {
      if(user.id){
        this.updateUser(user);
      }
      else{
        this.addUser(user);
      }      
      this.modalRef.close();    
    }
  } 

}
*/