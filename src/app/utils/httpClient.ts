import {Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { AuthService} from '../services/auth.service';

@Injectable()
export class HttpClient {
  private http: Http;
  private auth: AuthService;
  baseUrl: string = "http://localhost:2680/";
  constructor(http: Http, auth: AuthService) {
    this.http = http;
    this.auth = auth;
  }

  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', this.auth.token);
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.baseUrl + url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.baseUrl + url, data, {
      headers: headers
    });
  }
}