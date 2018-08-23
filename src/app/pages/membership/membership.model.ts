export class User {
  id: number;
  nombreUsuario: string;
  contrasena: string;  
  profile: UserProfile;
  work: UserWork;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
  menuIds: number[];//  =>   for create ngModel multiselect
}

export class UserProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class UserWork {
  company: string;
  position: string;
  salary: number;
}

export class UserContacts{
  email: string;
  phone: string;
  address: string;  
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}

// Mostrar resultados de la busqueda de funcionarios. (tabla Funcionario)
export class FuncionariosData {
  claveFuncionario: number;
  nombre: string;
  username: string;
  estatus: string;
  fechaIngreso: Date;
  apPaterno: string;
  apMaterno: string;
  iClaveFuncionario: number;
  cNombreFuncionario: string;
  cApellidoPaternoFuncionario: string;
  cApellidoMaternoFuncionario: string;
  cSexo: string;
  cRFC: string;
  cCURP: string;
  dFechaNacimiento: Date;
  cEmail: string;
  cCedula: string;
  iClaveFuncionarioJefe: number;
  especialidad_val: number;
  puesto_val: number;
  jerarquiaOrganizacional_id: number;
  dcCargaTrabajo: number;
  tipoEspecialidad_val: number;
  bEsPar: number;
  cNumeroEmpleado: number;
  catDiscriminante_id: number;
  dFechaIngreso: Date;
  archivoDigital_id: number;
  catUIE_id: number;
  catAreasNegocio_id: number;
  esMP: number;
  cNumeroCertificado: string;
  usuario: string;
  numeroExpediente: number;
  //agencia: string;
}

// Datos de la agencia. (tabla CatDiscriminante)
export class FuncionarioAgencia {
  catDiscriminante: number;
  claveDiscriminante: number;
  nombreAgencia: string;
}

// Datos de usuario especifico. (tabla Usuario)
export class FuncionarioUsuario {
  usuarioId: number;
  claveUsuario: string;
  claveFuncionario:number;
  esActivo: number;
}

// Roles de usuario especifico. (tabla UsuarioRol)
export class FuncionarioUsuarioRol {
  Usuario_id: number;
  rol_id: number;
  dFechaInicio: Date;
  dFechaFin: Date;
  esPrincipal: number;
}

// Catálogo de agencias. (tabla CatDiscriminante)
export class Agencias {
  catDiscriminante_id: number;
  catDistrito_id: number;
  cClaveDiscriminante: number;
  cNombre: string;
  iTipo: number;
  catDelegacion_id: number;
}

// Catálogo de roles (tabla Rol)
export class Roles {
  rol_id: number;
  cNombreRol: string;
  cDescripcionRol: string;
  bEsActivo: number;
  confInstitucion_id: number;
  jerarquiaOrganizacional_id: number;
  rolPadre_id: number;
}

/*
export class User {
  id: number;
  username: string;
  password: string;  
  profile: UserProfile;
  work: UserWork;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
  menuIds: number[];//  =>   for create ngModel multiselect
}

export class UserProfile {  
  name: string;
  surname: string;  
  birthday: Object;
  gender: string;
  image: string;
}

export class UserWork {
  company: string;
  position: string;
  salary: number;
}

export class UserContacts{
  email: string;
  phone: string;
  address: string;  
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}
*/

// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();


// export const users: User[] = [
//   {
//     id: 1,
//     username: "pretty",
//     password: "pretty123",
//     profile: {
//       name: "Ashley",
//       surname: "Ahlberg",
//       birthday: { day: 29, month: 3, year: 1981 },
//       gender: "female",
//       image: "assets/img/profile/ashley.jpg"
//     },
//     work: {
//       company: "Google",
//       position: "Product designer",
//       salary: 5000
//     },
//     contacts:{
//       email: "ashley@gmail.com",
//       phone: "(202) 756-9756",
//       address: "Washington"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: true,
//       isDeleted: false,
//       registrationDate: new Date(year-1, month, day-2, hour, minute),
//       joinedDate: new Date(year, month, day-1, hour, minute)
//     } 
//   },
//   {
//     id: 2,
//     username: "bruno.V",
//     password: "bruno123",
//     profile: {
//       name: "Bruno",
//       surname: "Vespa",
//       birthday: { day: 20, month: 11, year: 1992 },
//       gender: "male",
//       image: "assets/img/profile/bruno.jpg"
//     },
//     work: {
//       company: "Dell EMC",
//       position: "Sale manager",
//       salary: 17000
//     },
//     contacts:{
//       email: "bruno@dell.com",
//       phone: "(415) 231-0332",
//       address: "San Francisco"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: false,
//       isDeleted: false,
//       registrationDate:  new Date(year-3, month-2, day-8, hour, minute),
//       joinedDate:  new Date(year, month, day, hour-2, minute)
//     } 
//   },
//   {
//     id: 3,
//     username: "andy.79",
//     password: "andy123",
//     profile: {
//       name: "Andy",
//       surname: "Warhol",
//       birthday: { day: 21, month: 10, year: 1979 },
//       gender: "male",
//       image: "assets/img/avatars/avatar-3.png"
//     },
//     work: {
//       company: "Adecco",
//       position: "Product manager",
//       salary: 13000
//     },
//     contacts:{
//       email: "andy@adecco.com",
//       phone: "(212) 457-2308",
//       address: "New York"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: true,
//       isDeleted: true,
//       registrationDate:  new Date(year-4, month-2, day-3, hour, minute),
//       joinedDate:  new Date(year, month, day, hour-6, minute)
//     } 
//   }

 
// ]

