import {Injectable} from '@angular/core';
import { HttpClient } from '../utils/httpClient'

@Injectable()
export class ApiKeyService{
    constructor(private httpClient: HttpClient) {
        
    }

    GetAccountApiKeyList(){
        var request = this.httpClient.get('apiKey/listKeys');

        return request.map((res) => {
            return JSON.parse(res.text());
        })
    }

    DeleteApiKeyFromAccont(accountKeyId){
        var request = this.httpClient.post('accountListing/DeleteKey/' + accountKeyId,null);
        
        return request.map((res) => {
            return res.ok;
        });
    }

    AddApiKeyToAccount(keyId, verificationCode, name){
        var request = this.httpClient.post('apiKey/addKey/'+ keyId + "/" + verificationCode + "/" + name,null);

        return request.map((res) => {
            if(res.ok){
                return JSON.parse(res.text())
            }
        });
    }
}