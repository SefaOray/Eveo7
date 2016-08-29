import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ApiService{
    
    constructor(protected _http: Http) {
    }
    baseUrl: string = "http://localhost:2680/";

    
    get(endpoint: string) : Observable<Response>{
        return this._http.get(this.baseUrl + endpoint);
    }

    post(endpoint: string, body: any): Observable<Response>{
        return this._http.post(this.baseUrl + endpoint,body);
    }
}