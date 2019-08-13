import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-outdoor',
    templateUrl: './outdoor.component.html',
    styleUrls: ['./outdoor.component.scss'],
})
export class OutdoorComponent implements OnInit {
    months: {
        'johannesburg': {
            'jan': {
                'temp': 20.0,
                'percip': 119.7,
                'sunshine': 13.5,
                'phase': 'bloom'
            },
            'feb': {
                'temp': 19.7,
                'percip': 101.4,
                'sunshine': 13,
                'phase': 'bloom'
            },
            'mar': {
                'temp': 18.4,
                'percip': 106.8,
                'sunshine': 12.2,
                'phase': 'bloom'
            }
        }
    };

    constructor() {
    }

    ngOnInit() {
    }

}
