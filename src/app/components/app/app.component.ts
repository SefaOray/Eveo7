import { Component } from '@angular/core';
import { NavBarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-component',
    templateUrl : './app/components/app/app.component.html',
    directives: [NavBarComponent]
    
})

export class AppComponent{
    
}