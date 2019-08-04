import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-search-strain',
    templateUrl: './search-strain.page.html',
    styleUrls: ['./search-strain.page.scss'],
})
export class SearchStrainPage implements OnInit {

    constructor(public modalController: ModalController) {
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }

    ngOnInit() {
    }

}
