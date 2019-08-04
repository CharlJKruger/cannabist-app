import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SearchStrainPage} from '../search-strain/search-strain.page';

@Component({
    selector: 'app-grow-create',
    templateUrl: './grow-create.page.html',
    styleUrls: ['./grow-create.page.scss'],
})
export class GrowCreatePage implements OnInit {

    constructor(public modalController: ModalController) {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SearchStrainPage
        });
        return await modal.present();
    }

    ngOnInit() {
    }

}
