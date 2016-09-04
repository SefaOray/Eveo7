import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiKeyService } from '../../services/apiKey.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES,FormControl,Validators, FormBuilder, FormGroup, REACTIVE_FORM_DIRECTIVES }    from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApiKey} from '../../models/AccountApiKey'
import { ApiKeyDetailComponent} from '../apiKeyDetail/apiKeyDetail.component'

@Component({
  moduleId: module.id,
  selector: 'apiKeyList-component',
  templateUrl: 'apiKeyList.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, ApiKeyDetailComponent],
  providers: [ApiKeyService, FormBuilder],
  styleUrls: ['apiKeyList.component.css']
})

export class ApiKeyListComponent{

    formModel: AccountApiKey;
    constructor(private apiKeyService : ApiKeyService, private authService: AuthService, private router: Router) {
        this.formModel = new AccountApiKey();
    }

    ApiKeys: any;
    err: string;

    ngOnInit(){
        if(!this.authService.loggedIn)
        {
            this.router.navigate(['auth']);
            return;
        }

        var response = this.apiKeyService.GetAccountApiKeyList().subscribe(
            (res) => {this.ApiKeys = res},
            (err) => {console.log(err)});
    }

    addKey(){
        if(!this.formModel.keyId || !this.formModel.verificationCode)
            return;

        var request = this.apiKeyService.AddApiKeyToAccount(this.formModel.keyId, this.formModel.verificationCode, this.formModel.name);

        request.subscribe((res) => {
            if(res)
            {
                this.err = undefined;
                this.ApiKeys.push(res);
            }
        }, (err) => {
            this.err = err._body
        });
    }

    deleteKey(accountKeyId, event){
        var request = this.apiKeyService.DeleteApiKeyFromAccont(accountKeyId);

        request.subscribe((res) => {
            if(res)
            {
                var target = event.target;
                //TODO: Apply passive looking class to the element
            }
        }, (err) => {
            console.log(err);
        })
    }
}
