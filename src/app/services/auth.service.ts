import { ApiService } from "./api.service"
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{

    constructor(private apiService : ApiService){

    }

    token: string;
    loggedIn: boolean;

    login(userName: string, password:string){
        var request = this.apiService.post("Auth/login/"+ userName  + "/" + password, null);
        
        return request
        .map((res) => {
            if (res.status) {
            this.token = res.text();
            this.loggedIn = true;
        }

        return this.token != null;
      });
    }
}