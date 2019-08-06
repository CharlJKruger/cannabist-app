import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StrainDataService} from './strain-data.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Item {
    name: string;
}

@Component({
    selector: 'app-search-strain',
    templateUrl: './search-strain.page.html',
    styleUrls: ['./search-strain.page.scss'],
})
export class SearchStrainPage implements OnInit {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;

    public searchTerm = '';
    public strains: any;

    constructor(
        public modalController: ModalController,
        private strainDataService: StrainDataService,
        private afs: AngularFirestore
    ) {
        this.itemsCollection = afs.collection<Item>('items/CNMckmX9s2NJzjAzh0Kp/strains');
        this.items = this.itemsCollection.valueChanges();
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }

    search(searchTerm) {
        this.strains = this.strainDataService.searchStrains(searchTerm);
    }

    ngOnInit() {
    }

    addStrain(item: Item) {
        this.itemsCollection.add(item);
    }
}
