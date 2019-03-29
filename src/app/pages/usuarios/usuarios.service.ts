import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { usuario, usuarioRol, cambioEstatus } from './usuarios.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // public generals = 'http://localhost:55244/api';
  // public general = "http://192.168.105.53:55245/api";
  public API_URL = environment.API_URL;
  // public url = this.API_URL + '/Usuarios';
  private headers;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getUsuarios(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.API_URL + '/Usuarios');
  }

  cambioEstatus(cambioEstatus: cambioEstatus) {
    const estatus = JSON.stringify(cambioEstatus);
    return this.http.post(this.API_URL + '/cambiarEstatus', estatus, { headers: this.headers });
  }

}
