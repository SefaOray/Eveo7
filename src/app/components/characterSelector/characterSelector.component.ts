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

    @Input()
    character: AccountCharacter;


}