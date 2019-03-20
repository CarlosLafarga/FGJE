import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {usuario, usuarioRol} from './usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public generals = 'http://localhost:55244/api';
  // public general = "http://192.168.105.53:55245/api";
  public url = this.generals + '/Usuarios';
  private headers;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getUsuarios(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.url);
}
}
