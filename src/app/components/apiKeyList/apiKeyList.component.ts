import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiKeyService } from '../../services/apiKey.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormsModule, FORM_DIRECTIVES,FormControl,Validators, FormBuilder, FormGroup, REACTIVE_FORM_DIRECTIVES }    from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApiKey} from '../../models/AccountApiKey'

@Component({
  moduleId: module.id,
  selector: 'apiKeyList-component',
  templateUrl: 'apiKeyList.component.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  providers: [ApiKeyService, FormBuilder],
  styleUrls: ['apiKeyList.component.css']
})

export class ApiKeyListComponent{

    formModel: AccountApiKey;
    apiKeyForm: FormGroup;
    constructor(private apiKeyService : ApiKeyService, private authService: AuthService, private router: Router, fb: FormBuilder) {
        //this.keyId = new FormControl('',Validators.required);
        //this.verificationCode = new FormControl('',Validators.required);
        //this.name = new FormControl('', Validators.maxLength(50));
        this.formModel = new AccountApiKey;
        this.apiKeyForm = fb.group({
            'keyId': new FormControl(this.formModel.KeyId,Validators.required),
            'verificationCode': new FormControl(this.formModel.VerificationCode, Validators.required)
        });
    }

    ApiKeys: any;

    ngOnInit(){
        if(!this.authService.loggedIn)
            this.router.navigate(['auth']);

        var response = this.apiKeyService.GetAccountApiKeyList().subscribe(
            (res) => {this.ApiKeys = res},
            (err) => {console.log(err)});
    }

    addKey(){
        if(!this.apiKeyForm.controls['keyId'].valid)
            return;

        var request = this.apiKeyService.AddApiKeyToAccount(this.formModel.KeyId, this.formModel.VerificationCode, this.formModel.Name);

        request.subscribe((res) => {
            if(res)
            {
                this.ApiKeys.push(res);
            }
        }, (err) => {
            console.log(err);
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
