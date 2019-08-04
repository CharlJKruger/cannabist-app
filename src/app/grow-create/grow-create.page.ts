import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SearchStrainPage} from '../search-strain/search-strain.page';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Item {
    name: string;
    strain: string;
    environment: boolean;
    medium: boolean;
}

@Component({
    selector: 'app-grow-create',
    templateUrl: './grow-create.page.html',
    styleUrls: ['./grow-create.page.scss'],
})

export class GrowCreatePage implements OnInit {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    newItem = {
        name: '',
        strain: 'string',
        environment: 'indoor',
        medium: 'soil'
    };

    constructor(
        public modalController: ModalController,
        private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.valueChanges();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SearchStrainPage
        });
        return await modal.present();
    }

    addItem(item) {
        this.itemsCollection.add(item);
    }

    ngOnInit() {
    }

}
