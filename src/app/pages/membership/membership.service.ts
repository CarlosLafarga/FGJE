import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE , CambioAdscripcion, ExpPendientes, AsignarPendientes , cambioEstatus} from './membership.model';

@Injectable()
export class MembershipService {

    public general = "http://localhost:55244/api";
    public url2 =   this.general+"/funcionarios";
    public url3 =   this.general+"/catDiscriminantes";
    public url4 =   this.general+"/Roles";
    public url5 =   this.general+"/RolFunci";
    public url6 =   this.general+"/FunciAgencia";
    public url7 =   this.general+"/catUEI";
    public url8 =   this.general+"/funciActual";
    public url9 =   this.general+"/CambioAD/cambioADS";
    public url10 =  this.general+"/cambioAdscripcionExps";
    public url11 =  this.general+"/CambioExp";
    public url12 =  this.general+"/cambiarEstatus";
    public url13 =  this.general+"/CountExp/countExp";
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
        return this.http.get<Roles[]>(this.url5 + "?usuario_id=" + id);
    }

    getCountExp(iclave: number,catdis:number):Observable<any>{
        return this.http.get(this.url13+"?iclavefuncionario="+iclave+"+&catdiscriminate="+catdis);
    }

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
        return this.http.post(this.url9, newpres ,{headers: this.headers});
    }

    cambioEstatus(cambioEstatus:cambioEstatus){
        const estatus = JSON.stringify(cambioEstatus);
        return this.http.post(this.url12,estatus,{headers: this.headers});
    }

    getExpPendientes(): Observable<ExpPendientes[]> {
        return this.http.get<ExpPendientes[]>(this.url10);
    }

    asignarExpPendientes(asignarExpPendientes:AsignarPendientes){
        const newExp = JSON.stringify(asignarExpPendientes);
        console.log(newExp);
        return this.http.post(this.url11, newExp ,{headers: this.headers});
    }

    
} 
