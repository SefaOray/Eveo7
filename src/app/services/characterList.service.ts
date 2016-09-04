import {Injectable} from '@angular/core';
import { HttpClient } from '../utils/httpClient'

@Injectable()
export class CharacterListService{
    /**
     *
     */
    constructor(private httpClient: HttpClient) {
        
    }

    getAccountCharacters(){
        return this.httpClient.get('accountListing/listCharacters')
        .map((res) => {
            return res.json()
        });
    }

    getCharactersInKey(keyId: number){
        return this.httpClient.get('accountListing/listCharactersInKey/' + keyId)
        .map((res) => {
            return res.json()
        });
    }
}