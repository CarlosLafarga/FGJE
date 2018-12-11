import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE , CambioAdscripcion, ExpPendientes, AsignarPendientes , cambioEstatus,listarExp} from './membership.model';

@Injectable()
export class MembershipService {

    public general = "http://localhost:55244/api";
    // public general = "http://192.168.105.53:55245/api";
    public url2 = this.general + "/funcionarios";
    public url3 = this.general + "/catDiscriminantes";
    public url4 = this.general + "/Roles";
    public url5 = this.general + "/RolFunci";
    public url6 = this.general + "/FunciAgencia";
    public url7 = this.general + "/catUEI";
    public url8 = this.general + "/funciActual";
    public url9 = this.general + "/CambioAD/cambioADS";
    public url10 = this.general + "/cambioAdscripcionExps";
    public url11 = this.general + "/CambioExp";
    public url12 = this.general + "/cambiarEstatus";
    public url13 = this.general + "/CountExp/countExp";
    public url14 = this.general + "/cambioEsMP";
    public url15 = this.general + "/HelperAgencia"
    public url16 = this.general + "/listarExp/GetExpedientes?"
    public url17 = this.general + "/ObtJerarquia/ObtJerarquia?"
    public url18 = this.general + "istarExp/GetExpedientesSinJera?";
    public url19 = this.general + "/ExisteRol/countRolAgencia?";
    private headers;

    constructor(public http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
     }

    getFuncionarios(): Observable<FuncionariosData[]> {
        return this.http.get<FuncionariosData[]>(this.url2);
    }

    getAgencias(): Observable<Agencias[]> {
        return this.http.get<Agencias[]>(this.url3);
    }

    getFUsuarioAgencia( catdis: number ) : Observable<FunciAgencia[]> {
        return this.http.get<FunciAgencia[]>(this.url6 + "?catdis=" + catdis);
    }

    getRoles(): Observable<Roles[]> {
        return this.http.get<Roles[]>(this.url4);
    }

    getFUsuarioRol( id: number ): Observable<Roles[]> {
        return this.http.get<Roles[]>(this.url5 + "?iClaveFuncionario=" + id);
    }

    getCountExp(iclave: number,catdis:number):Observable<any>{
        return this.http.get(this.url13+"?iclavefuncionario="+iclave+"+&catdiscriminate="+catdis);
    }

    getJerarquia(rol:number):Observable<any>{
        return this.http.get(this.url17+"rol="+rol);
    }

    getCounthelper(iclave: number,catdis:number):Observable<any>{
        return this.http.get(this.url15+"?iclavefuncionario=" + iclave + "+&catdiscriminate=" + catdis);
    }
    /* ----------------------------------------------------------------------------------------------------------------*/
    getListarExp(iclave:number,catdis:number,jerarquia:number):Observable<any>{
        return this.http.get(this.url16+"clavefunci="+iclave+"&catDis="+catdis+"&jerarquia="+jerarquia);
    }

    getListarExpSinJera(iclave:number,catdis:number):Observable<any>{
        return this.http.get(this.url18+"clavefunci="+iclave+"&catDis="+catdis);
    }
   /*-----------------------------------------------------------------------------------------------------------------*/
    getcatUIE( catdis: number ): Observable<catUIE[]> {
        //console.log(catdis);
        return this.http.get<catUIE[]>(this.url7 + "?catdis=" + catdis);
    }

    getfunciMP(catdis:number): Observable<FuncionariosData[]>{
        return this.http.get<FuncionariosData[]>(this.url8 + "?catdis=" + catdis);
    }

    updateFuncionario( funcionario:FuncionariosData){
        return this.http.put(this.url2, funcionario);
    }

    cambioAdscripcion(cambioAdscripcion:CambioAdscripcion){
        const newpres = JSON.stringify(cambioAdscripcion);
        console.log(newpres);
        return this.http.post(this.url9, newpres, { headers: this.headers });
    }

    cambioEstatus(cambioEstatus:cambioEstatus){
        const estatus = JSON.stringify(cambioEstatus);
        return this.http.post(this.url12, estatus, { headers: this.headers });
    }
    cambioMP(cambioMP){
        const esMP = JSON.stringify(cambioMP);
        return this.http.post(this.url14,esMP,{headers:this.headers})
    }

    getExpPendientes(): Observable<ExpPendientes[]> {
        return this.http.get<ExpPendientes[]>(this.url10);
    }

    asignarExpPendientes(asignarExpPendientes:AsignarPendientes){
        const newExp = JSON.stringify(asignarExpPendientes);
        console.log(newExp);
        return this.http.post(this.url11, newExp , { headers: this.headers });
    }

    getCountRoles(iclaveFun:number,catdis:number,rolId:number):Observable<any>{
        return this.http.get(this.url19+"iclavefuncionario="+iclaveFun+"&catdiscriminante="+catdis+"&rolId="+rolId);
    }

} 
