import { Component, Input} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApiKey} from '../../models/AccountApiKey'
import { AccountCharacter} from '../../models/AccountCharacter'
import {MaterializeDirective} from "angular2-materialize";
import { CharacterListService} from '../../services/characterlist.Service'
import { CharacterSelectorComponent} from '../characterSelector/characterSelector.component'
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'apikey-component',
  templateUrl: 'apiKeyDetail.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, MaterializeDirective, CharacterSelectorComponent],
  providers: [CharacterListService],
  styleUrls: ['apiKeyDetail.component.css']
})

export class ApiKeyDetailComponent{
    @Input()
    apiKey : AccountApiKey;
    initialized: boolean = false;
    characters: AccountCharacter[];
    constructor(private characterListService: CharacterListService) {
    }

    toggle(){
      if(!this.initialized){
        this.initialized = true;
        this.characterListService.getCharactersInKey(this.apiKey.id).subscribe((res)=> {
          this.characters = res;
        }, (err) => {console.log(err)});
      }
    }
}