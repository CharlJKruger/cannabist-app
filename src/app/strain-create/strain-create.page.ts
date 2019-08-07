import {Component, OnInit} from '@angular/core';
import {SearchStrainPage} from '../search-strain/search-strain.page';
import {ModalController} from '@ionic/angular';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Item { name: string; }

@Component({
    selector: 'app-strain-create',
    templateUrl: './strain-create.page.html',
    styleUrls: ['./strain-create.page.scss'],
})
export class StrainCreatePage implements OnInit {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;

    constructor(
        private afs: AngularFirestore,
        public modalController: ModalController
    ) {
        this.itemsCollection = afs.collection<Item>('items/CNMckmX9s2NJzjAzh0Kp/strains');
        this.items = this.itemsCollection.valueChanges();
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
