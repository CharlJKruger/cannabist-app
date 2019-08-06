import {Component, OnInit} from '@angular/core';
import {SearchStrainPage} from '../search-strain/search-strain.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-strain-create',
    templateUrl: './strain-create.page.html',
    styleUrls: ['./strain-create.page.scss'],
})
export class StrainCreatePage implements OnInit {

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
