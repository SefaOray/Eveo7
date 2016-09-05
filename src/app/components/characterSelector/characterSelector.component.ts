import { Component, Input} from '@angular/core';
import { FormsModule, FORM_DIRECTIVES }    from '@angular/forms';
import { CharacterListService} from '../../services/characterlist.Service'
import { AccountCharacter} from '../../models/AccountCharacter'

@Component({
  moduleId: module.id,
  selector: 'character-selector',
  templateUrl: 'characterSelector.component.html',
  directives: [FORM_DIRECTIVES],
  providers: [CharacterListService],
  styleUrls: ['characterSelector.component.css']
})

export class CharacterSelectorComponent{
    constructor(private characterListService: CharacterListService) {

    }
    @Input()
    character: AccountCharacter;
    @Input()
    keyId: number;

    toggle(){
      if(this.character.isAdded)
      {
          this.characterListService.addCharacterToAccount(this.keyId,this.character.id).subscribe();
      }
      else
      {
          this.characterListService.removeCharacterFromAccount(this.keyId,this.character.id).subscribe();
      }
    }
}