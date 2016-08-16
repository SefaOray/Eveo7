import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ApiService{
    constructor(){};
    baseUrl: string = "http://localhost:2680/";
    http : Http;
    
    get(endpoint: string) : Observable<Response>{
        return this.http.get(this.baseUrl + endpoint);
    }
}