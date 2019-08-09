import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SearchStrainPage} from '../search-strain/search-strain.page';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

export interface Strain { name: string; }

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
        medium: 'soil'
    };

    private strainsCollection: AngularFirestoreCollection<Strain>;
    strains: Observable<Strain[]>;

    constructor(
        public modalController: ModalController,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.valueChanges();
        // strains
        this.strainsCollection = afs.collection<Strain>('items/CNMckmX9s2NJzjAzh0Kp/strains');
        this.strains = this.strainsCollection.valueChanges();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SearchStrainPage
        });
        return await modal.present();
    }

    addItem(item) {
        this.itemsCollection.add(item).then(() => {
            this.router.navigate(['/env-create']);
        });
    }

    ngOnInit() {
    }

}
