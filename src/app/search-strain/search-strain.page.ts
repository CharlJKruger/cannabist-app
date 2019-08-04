import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StrainDataService} from './strain-data.service';

@Component({
    selector: 'app-search-strain',
    templateUrl: './search-strain.page.html',
    styleUrls: ['./search-strain.page.scss'],
})
export class SearchStrainPage implements OnInit {
    public searchTerm = '';
    public items: any;

    constructor(
        public modalController: ModalController,
        private strainDataService: StrainDataService) {
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }

    search(searchTerm) {
        this.items = this.strainDataService.searchStrains(searchTerm);
    }

    ngOnInit() {
    }

}
