import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'auth-component',
  templateUrl: 'auth.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [AuthService, ApiService],
  styleUrls: ['auth.component.css']
})

export class AuthComponent{
    constructor(private authSerive: AuthService){

    }

    username: string;
    password: string;
    
    login(){
      var result = this.authSerive.login(this.username,this.password);
    }
}