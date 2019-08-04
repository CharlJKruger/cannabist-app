import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StrainDataService {
    public items: any = [];

    constructor(private http: HttpClient) {
        this.items = [
            {title: 'one'},
            {title: 'two'},
            {title: 'three'},
            {title: 'four'},
            {title: 'five'},
            {title: 'six'}
        ];

    }

    public searchStrains(searchTerm) {
        return this.items.filter(item => {
            console.log(item);
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
}
