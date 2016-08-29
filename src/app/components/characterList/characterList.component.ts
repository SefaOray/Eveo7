import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterListService } from '../../services/characterList.service';

@Component({
  moduleId: module.id,
  selector: 'character-list',
  templateUrl: 'characterList.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [CharacterListService],
  styleUrls: ['characterList.component.css']
})

export class CharacterListComponent{
    constructor(private authService: AuthService,private router: Router, private characterListService: CharacterListService){}

    characters: any;

    ngOnInit(){
        if(!this.authService.loggedIn)
        {
            this.router.navigate(["auth"]);
        }

        var request = this.characterListService.getAccountCharacters();

        request.subscribe((response) => {
            this.characters = response;
        });

        if(this.characters.length == 0)
        {
            this.router.navigate(["keyManagement"]);
        }
    }

}
