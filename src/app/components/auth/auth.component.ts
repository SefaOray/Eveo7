import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'auth-component',
  templateUrl: 'auth.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [AuthService]
})

export class AuthComponent{
    constructor(private authSerive: AuthService){

    }

    username: string;
    password: string;
    
    login(){

    }
}