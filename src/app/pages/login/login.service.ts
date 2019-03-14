import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class loginServices {
    
   public general = "http://localhost:55244/api";
    //  public general = "http://192.168.105.53:55245/api";
    public url = this.general+"/Auth/";
    public headers;
    public loggedInStatus:boolean = false;

    constructor(public http: HttpClient ) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
      
    }

      setLoggedIn(value:boolean){
        console.log("PARAMETRO VALUE => " + value);
        this.loggedInStatus = value;
        localStorage.setItem('isLoggedIn', this.loggedInStatus + '');
        console.log("PARAMETRO LOGGEDINSTATUS => "+this.loggedInStatus);
        
    }
    
    get isLoggedIn (){
        console.log("LOGGEDINSATATUS DEL SI LOGGEDIND => " + this.loggedInStatus);
        return this.loggedInStatus;
    }

    loggedIn(){

        return !!localStorage.getItem('token');
    }
    userAuth( username: string, password: string ): Observable <any>{

        return this.http.get<any>( this.url + "?username=" + username + "&passwordd=" + password);
    }
}