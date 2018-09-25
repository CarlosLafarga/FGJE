
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
  bEsActivo: number;
  cClaveUsuario: string;
  cNombre: string;
  usuario: string[];
  numeroExpediente: number[];
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
// export class FuncionarioUsuarioRol {
//   Usuario_id: number;
//   rol_id: number;
//   dFechaInicio: Date;
//   dFechaFin: Date;
//   esPrincipal: number;
// }

// Catálogo de agencias. (tabla CatDiscriminante)
export class Agencias {
  catDiscriminante_id: number;
  catDistrito_id: number;
  cClaveDiscriminante: number;
  cNombre: string;
  iTipo: number;
  catDelegacion_id: number;
}

export class catUIE {
  catUIE_id: number;
  cClaveUIE: string;
  cNombreUIE:string;
  cAcronimo: string;
  catDiscriminante_id: number;
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
  esPrincipal?: number;
}

// Roles de usuario especifico. (tabla UsuarioRol)
export class FuncionarioUsuarioRol {
  usuario_id: number;
  cClaveUsuario: string;
  cPalabraSecreta: string;
  iClaveFuncionario: number;
  password: string;
  cllave: string;
  iSesion: number;
  iIntentos:number;
  cIP: string;
  bEsActivo: number;
  idSesionServertring;
  usuarioRol: string[];
}

export class FunciAgencia {
  iClaveFuncionario: number;
  cNombreFuncionario: string;
  cApellidoPaternoFuncionario: string;
  cAPellidoMaternoFuncionario: string;
  cNombre: string;
  EsMP: number;
}

export class CambioAdscripcion{
 constructor(
   public iClaveFuncionarioSolicitante: number,
   public iClaveFuncionarioAnterior: number,
   public iClaveFuncionarioExp: number,
   public catDiscriminateSolicitante: number,
   public catUIE_actual: number,
   public catDiscriminateNuevo: number,
   public Justificacion: string,
   public pendientes: number,
   public rolesFuncionario: string,
   public esPrincipal: number,
   public esMP: number,
   public soloRoles: number
  ){}
}

export class ExpPendientes {
  public cambioAdscripcion_id: number;
  public iclaveFuncionario: number;
  public catDis_ant: number;
  public catDis_asignado: number;
  public fecha_creacion: Date;
  public fecha_modificacion: Date;
  public esEmp: number;
  public Asignados: number;
}

export class AsignarPendientes {
  constructor(
    public iClaveFuncionarioAsignar: number,
    public iClaveFuncionarioAnterior: number,
    public catDiscriminanteAnterior: number,
   ){}

}
