import {Injectable} from '@angular/core';

import strains from './strain-data.json';

@Injectable({
    providedIn: 'root'
})
export class StrainDataService {

    constructor() {
    }

    public searchStrains(searchTerm) {
        if (searchTerm.length >= 3) {
            return strains.filter(item => {
                return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        } else {
            return;
        }
    }
}
