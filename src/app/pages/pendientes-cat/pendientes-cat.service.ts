import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PendientesCatService {
    
    public API_URL = environment.API_URL;

    constructor(public http: HttpClient) {
        
    }

    

}