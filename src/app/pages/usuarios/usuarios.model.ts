
// tslint:disable-next-line:class-name
export interface usuario {
    Usuario_id: number;
    cClaveUsuario: string;
    cPalabraSecreta: string;
    iClaveFuncionario: number;
    password: string;
    cllave: string;
    iSesion: number;
    iIntentos: number;
    cIP: string;
    bEsActivo: number;
    idSesionServer;
    usuarioRol: usuarioRol[];
  }

  // tslint:disable-next-line:class-name
  export interface usuarioRol {
    Usuario_id: number;
    rol_id: number;
    dFechaInicio: Date;
    dFechaFin: Date;
    esPrincipal: number;
  }

  export interface cambioEstatus{
    Usuario_id : number;
    iClaveFuncionario : number;
  }
