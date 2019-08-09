import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-env-create',
    templateUrl: './env-create.page.html',
    styleUrls: ['./env-create.page.scss'],
})
export class EnvCreatePage implements OnInit {
    indoorOrOutdoor: string;
    lightCycle: number;

    constructor() {
        this.indoorOrOutdoor = 'indoor';
        this.lightCycle = 16;
    }

    ngOnInit() {
    }
}
