import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class AuthService{

    constructor(private http: Http){
        this.loggedIn = false;
    }
    baseAddress = 'http://localhost:2680/';
    token: string;
    loggedIn: boolean;

    login(userName: string, password:string){
        var request = this.http.post(this.baseAddress + "Auth/login/"+ userName  + "/" + password, null);
        
        return request
        .map((res) => {
            if (res.status) {
            this.token = res.text();
            this.loggedIn = true;
        }

        return this.token != null;
      });

    }

    logout(){
        if(!this.loggedIn)
            return;
        
        this.token = "";
        this.loggedIn = false;
    }
}