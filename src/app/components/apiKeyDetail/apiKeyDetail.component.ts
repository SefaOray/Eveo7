import { Component, Input} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApiKey} from '../../models/AccountApiKey'
import {MaterializeDirective} from "angular2-materialize";
import { CharacterListService} from '../../services/characterlist.Service'
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'apikey-component',
  templateUrl: 'apiKeyDetail.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, MaterializeDirective],
  providers: [CharacterListService],
  styleUrls: ['apiKeyDetail.component.css']
})

export class ApiKeyDetailComponent{
    @Input()
    apiKey : AccountApiKey;
    initialized: boolean = false;

    constructor(private characterListService: CharacterListService) {
    }

    toggle(){
      if(!this.initialized){
        var characters;
        this.characterListService.getCharactersInKey(this.apiKey.id).subscribe((res)=> {
          characters = res;
        }, (err) => {console.log(err)});
      }
    }
}