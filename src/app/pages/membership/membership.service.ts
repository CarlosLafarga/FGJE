import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, FuncionariosData, Rol, Agencias } from './membership.model';

@Injectable()
export class MembershipService {

    //public url2 = "http://192.168.105.30:55244/api/funcionarios";
    public url = "api/users";
    public url2 = "http://localhost:55244/api/funcionarios";
    public url3 = "http://localhost:55244/api/catDiscriminantes";
    public url4 = "api/rol";

    constructor(public http: HttpClient) { }

    getFuncionarios(): Observable<FuncionariosData[]> {
        return this.http.get<FuncionariosData[]>(this.url2);
    }

    getRol(): Observable<Rol[]> {
        return this.http.get<Rol[]>(this.url4);
    }

    getAgencias(): Observable<Agencias[]> {
        return this.http.get<Agencias[]>(this.url3);
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

/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './membership.model';

@Injectable()
export class MembershipService {
    public url = "api/users";
    constructor(public http:HttpClient) { }

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
*/