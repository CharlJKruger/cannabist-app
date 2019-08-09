import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StrainDataService {

    constructor(private http: HttpClient) {
    }

    public searchStrains(searchTerm) {
        if (searchTerm.length >= 3) {

            const encodedSearchTerm = encodeURI(searchTerm);
            const url = 'https://en.seedfinder.eu/api/json/search.json?q=' + encodedSearchTerm + '&ac=565293a8f8dc82645900bc738815d758';
            return this.http.get(url);
        } else {
            return;
        }
    }
}
