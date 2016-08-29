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
        return this.httpClient.get('/accountListing/listCharacters')
        .map((res) => {
            return res.json()
        });
    }
}