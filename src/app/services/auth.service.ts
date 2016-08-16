import { ApiService } from "./api.service"
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{
    private _apiService : ApiService;

    constructor(){
        this._apiService = new ApiService;
    };

    login(userName: string, password:string) : string{
        var response = this._apiService.get("auth/"+ userName  + "/" + password);
        var token;
        response.subscribe(
            response => token = response.text
        );

        return token;
    }
}