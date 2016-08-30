import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'auth-component',
  templateUrl: 'auth.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [],
  styleUrls: ['auth.component.css']
})

export class AuthComponent{
    constructor(private authSerive: AuthService, private router: Router){

    }

    username: string;
    password: string;
    loginErr: string;
    username_register: string;
    password_register: string;
    password_register_repeat: string;

    login(){
      var request = this.authSerive.login(this.username,this.password);

      request.subscribe((result) => {
          this.router.navigate(['characterList']);
      },
      (err) => {
        if(err._body)
        {
          var responseMsg = JSON.parse(err._body);
          this.loginErr = responseMsg.message;
        }
      })
    }
}