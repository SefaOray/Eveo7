import { ApiService } from "./api.service"
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{

    constructor(private apiService : ApiService){

    }

    login(userName: string, password:string) : string{
        var response = this.apiService.get("auth/"+ userName  + "/" + password);
        var token;
        response.subscribe(
            response => token = response.text
        );

        return token;
    }
}