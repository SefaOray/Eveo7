import { Component } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar-component',
    templateUrl : './app/components/navbar/navbar.component.html'
})

export class NavBarComponent{
    constructor(public auth : AuthService, private router: Router) {
    }

    logout()
    {
        this.auth.logout();
        this.router.navigate(['characterList']);
    }

    myKeys(){
        this.router.navigate(['apiKeyList']);
    }
} 