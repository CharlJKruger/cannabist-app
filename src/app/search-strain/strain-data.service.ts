import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StrainDataService {

    constructor(private http: HttpClient) {
    }

    public searchStrains(searchTerm) {
        const encodedSearchTerm = encodeURI(searchTerm);
        const url = 'https://en.seedfinder.eu/api/json/search.json?q=' + encodedSearchTerm + '&ac=565293a8f8dc82645900bc738815d758';
        return this.http.get(url);
    }

    public getStrainDetail(strain) {
        const url = 'https://en.seedfinder.eu/api/json/strain.json?br=' + strain.value.brid + '&str=' + strain.value.id;
        return this.http.get(url);
    }
}
