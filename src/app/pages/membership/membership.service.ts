import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, FuncionariosData, Roles, Agencias, FuncionarioUsuarioRol, FunciAgencia, catUIE , CambioAdscripcion, ExpPendientes, AsignarPendientes } from './membership.model';

@Injectable()
export class MembershipService {

    //public url2 = "http://192.168.105.30:55244/api/funcionarios";
    public url = "api/users";
    public url2 = "http://localhost:55244/api/funcionarios";
    public url3 = "http://localhost:55244/api/catDiscriminantes";
    public url4 = "http://localhost:55244/api/Roles";
    public url5 = "http://localhost:55244/api/RolFunci";
    public url6 = "http://localhost:55244/api/FunciAgencia";
    public url7 = "http://localhost:55244/api/catUEI";
    public url8 = "http://localhost:55244/api/funciActual";
    public url9 = "http://localhost:55244/api/CambioAD/cambioADS";
    public url10 = "http://localhost:55244/api/cambioAdscripcionExps";
    public url11 = "http://localhost:55244/api/";
    //public url2 = "/api/funcionarios";
    //public url3 = "api/catDiscriminantes";
    //public url4 = "api/rol";
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
        return this.http.post(this.url9, newpres ,{headers:this.headers});
    }

    getExpPendientes(): Observable<ExpPendientes[]> {
        return this.http.get<ExpPendientes[]>(this.url10);
    }

    asignarExpPendientes(asignarExpPendientes:AsignarPendientes){
        const newExp = JSON.stringify(asignarExpPendientes);
        console.log(newExp);
        return this.http.post(this.url11, newExp ,{headers:this.headers});
    }




    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    addUser(user:User){	    
        return this.http.post(this.url, user);
    }

    updateUser(user:User){
        return this.http.put(this.url, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + "/" + id);
    }
} 
