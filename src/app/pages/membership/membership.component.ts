import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User, UserProfile, UserWork, UserContacts, UserSocial, UserSettings, FuncionariosData, Rol, Agencias, FuncionarioUsuarioRol } from './membership.model';
import { MembershipService } from './membership.service';
import { MenuService } from '../../theme/components/menu/menu.service';
import { gridSize } from '../../../../node_modules/@swimlane/ngx-charts';
 
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MembershipService, MenuService ]
})
export class MembershipComponent implements OnInit {

  public menuItems: Array<any>;  
  public funcionarios: FuncionariosData[];
  public funcionario: FuncionariosData;
  public rol: Rol[];
  public funcionarioRol: FuncionarioUsuarioRol[];
  public agencias: Agencias[];
  public users: User[];
  public user: User;
  public searchText: string;
  public p: any;
  public type: string = 'list';
  public modalRef: NgbModalRef;
  public form: FormGroup;
  public genders = ['male', 'female'];
  public genderOption: string;
 
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
  
  constructor(public fb: FormBuilder, 
              public fbf: FormBuilder,
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
    this.getRol()
    console.log(this.agencias);
    console.log(this.rol);
    
    this.form = this.fbf.group({
      claveFuncionario: null,
      nombre: null,
      username: null,
      estatus: null,
      fechaIngreso: null,
      apPaterno: null,
      apMaterno:null,
      iClaveFuncionario:null,
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
      esMP:null,
      cNumeroCertificado: null,
      usuario: null,
      numeroExpediente: null
    });
  }

  public getFuncionarios(): void {
    this.membershipService.getFuncionarios().subscribe( funcionarios =>
      this.funcionarios = funcionarios
    );
  }

  public getRol(): void {
    this.membershipService.getRol().subscribe( rol =>
      this.rol = rol
    );
  }

  public getFuncionarioRol(funcionario: FuncionariosData): void {
    this.membershipService.getFUsuarioRol(funcionario.claveFuncionario).subscribe( funcionarioRol =>
      this.funcionarioRol = funcionarioRol
    );
  }

  public getAgencias(): void {
    this.membershipService.getAgencias().subscribe( agencias =>
      this.agencias = agencias
    );
  }

  public updateFuncionario(funcionario:FuncionariosData) {
    this.membershipService.updateFuncionario(funcionario).subscribe(funcionario => {
      this.getFuncionarios();
    });
    //console.log("Se ejecuto el updateFuncionario: " + funcionario.nombre);
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

  agregarRol(){
    console.log("Funcion agregar");
  }

  quitarRol(){
    console.log("Funcion quitar");
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

  public openModal(modalContent, funcionario) {
    console.log(funcionario);

    //this.getFuncionarioRol( funcionario );
    
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

  public closeModal(){
    this.modalRef.close();
  }

  public onSubmit(funcionario:FuncionariosData):void {
    if (this.form.valid) {
      console.log("Se envio el formulario:");
      console.log(this.form.value);
      if(funcionario.claveFuncionario){
        this.updateFuncionario(funcionario);
        console.log("Se actualizo el funcionario => " + funcionario.claveFuncionario);
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