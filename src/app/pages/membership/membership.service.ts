import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FuncionariosData,
        Roles,
        Agencias,
        FunciAgencia,
        catUIE,
        CambioAdscripcion,
        ExpPendientes,
        AsignarPendientes,
        cambioEstatus
    } from './membership.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class MembershipService {

//    public general = 'http://localhost:55244/api';
    // public general = 'http://192.168.105.53:55245/api';
    public API_URL = environment.API_URL;
    // public url2 = this.general + '/funcionarios';
    // public url3 = this.general + '/catDiscriminantes';
    // public url4 = this.general + '/Roles';
    // public url5 = this.general + '/RolFunci';
    // public url6 = this.general + '/FunciAgencia';
    // public url7 = this.general + '/catUEI';
    // public url8 = this.general + '/funciActual';
    // public url9 = this.general + '/CambioAD/cambioADS';
    // public url10 = this.general + '/cambioAdscripcionExps';
    // public url11 = this.general + '/CambioExp';
    // public url12 = this.general + '/cambiarEstatus';
    // public url13 = this.general + '/CountExp/countExp';
    // public url14 = this.general + '/cambioEsMP';
    // public url15 = this.general + '/HelperAgencia'
    // public url16 = this.general + '/listarExp/GetExpedientes?'
    // public url17 = this.general + '/ObtJerarquia/ObtJerarquia?'
    // public url18 = this.general + 'istarExp/GetExpedientesSinJera?';
    // public url19 = this.general + '/ExisteRol/countRolAgencia?';
    // public url20 = this.general + '/listarExp/GetExpedientesSinJA';
    private headers;

    constructor(public http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    }

    getFuncionarios(): Observable<FuncionariosData[]> {
        return this.http.get<FuncionariosData[]>(this.API_URL + '/funcionarios');
    }

    getAgencias(): Observable<Agencias[]> {
        return this.http.get<Agencias[]>(this.API_URL + '/catDiscriminantes');
    }

    getFUsuarioAgencia( catdis: number ): Observable<FunciAgencia[]> {
        return this.http.get<FunciAgencia[]>(this.API_URL + '/FunciAgencia?catdis=' + catdis);
    }

    getRoles(): Observable<Roles[]> {
        return this.http.get<Roles[]>(this.API_URL + '/Roles');
    }

    getFUsuarioRol( id: number ): Observable<Roles[]> {
        return this.http.get<Roles[]>(this.API_URL + '/RolFunci?iClaveFuncionario=' + id);
    }

    getCountExp(iclave: number,catdis:number):Observable<any> {
        return this.http.get(this.API_URL + '/CountExp/countExp?iclavefuncionario=' + iclave + '+&catdiscriminate=' + catdis);
    }

    getJerarquia(rol: number):Observable<any> {
        return this.http.get(this.API_URL + '/ObtJerarquia/ObtJerarquia?rol=' + rol);
    }

    getCounthelper(iclave: number, catdis: number):Observable<any> {
        return this.http.get(this.API_URL + '/HelperAgencia?iclavefuncionario=' + iclave + '+&catdiscriminate=' + catdis);
    }
    /* ----------------------------------------------------------------------------------------------------------------*/
    getListarExp(iclave:number,catdis:number,jerarquia:number):Observable<any> {
        return this.http.get(this.API_URL + '/listarExp/GetExpedientes?clavefunci=' + iclave + '&catDis=' + catdis + '&jerarquia=' + jerarquia);
    }

    getListarExpSinJera(iclave:number,catdis:number):Observable<any> {
        return this.http.get(this.API_URL + 'istarExp/GetExpedientesSinJera?clavefunci=' + iclave + '&catDis=' + catdis);
    }
   /*-----------------------------------------------------------------------------------------------------------------*/
    getcatUIE( catdis: number ): Observable<catUIE[]> {
        //console.log(catdis);
        return this.http.get<catUIE[]>(this.API_URL + '/catUEI?catdis=' + catdis);
    }

    getfunciMP(catdis:number): Observable<FuncionariosData[]> {
        return this.http.get<FuncionariosData[]>(this.API_URL + '/funciActual?catdis=' + catdis);
    }

    updateFuncionario( funcionario:FuncionariosData) {
        return this.http.put(this.API_URL, funcionario);
    }

    cambioAdscripcion(cambioAdscripcion:CambioAdscripcion) {
        const newpres = JSON.stringify(cambioAdscripcion);
        // console.log(newpres);
        return this.http.post(this.API_URL + '/CambioAD/cambioADS', newpres, { headers: this.headers });
    }

    cambioEstatus(cambioEstatus:cambioEstatus) {
        const estatus = JSON.stringify(cambioEstatus);
        return this.http.post(this.API_URL + '/cambiarEstatus', estatus, { headers: this.headers });
    }
    cambioMP(cambioMP) {
        const esMP = JSON.stringify(cambioMP);
        return this.http.post(this.API_URL + '/cambioEsMP', esMP, {headers:this.headers});
    }

    getExpPendientes(): Observable<ExpPendientes[]> {
        return this.http.get<ExpPendientes[]>(this.API_URL + '/cambioAdscripcionExps');
    }

    asignarExpPendientes(asignarExpPendientes:AsignarPendientes) {
        const newExp = JSON.stringify(asignarExpPendientes);
        // console.log(newExp);
        return this.http.post(this.API_URL + '/CambioExp', newExp , { headers: this.headers });
    }

    getCountRoles( iclaveFun: number, catdis: number, rolId: number ):Observable<any> {
        return this.http.get( this.API_URL + '/ExisteRol/countRolAgencia?iclavefuncionario=' + iclaveFun + '&catdiscriminante=' + catdis + '&rolId=' + rolId );
    }

    getExisteExp( catdis: number ):Observable<any> {
        return this.http.get( this.API_URL + '/listarExp/GetExpedientesSinJA?catDis=' + catdis );
    }

    getExpedientesATP( catdiscriminante: number, claveFuncionario: number ):Observable<any> {
        return this.http.get( this.API_URL + '/GetExpedientes/GetExpedientesATP?catDiscriminante=' + catdiscriminante + '&claveFuncionario=' + claveFuncionario );
    }

    getExpedientesJA( catdiscriminante: number, claveFuncionario: number ):Observable<any> {
        return this.http.get( this.API_URL + '/GetExpedientes/GetExpedientesJA?catDiscriminante=' + catdiscriminante + '&claveFuncionario=' + claveFuncionario );
    }

} 
