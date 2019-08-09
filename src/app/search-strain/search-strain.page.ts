import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StrainDataService} from './strain-data.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Item {
    name: string;
}

export interface StrainSearch {
    error: boolean;
    count: number;
    strains: {};
    info: string;
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
    strains;

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
        if (searchTerm.length >= 3) {
            this.strainDataService.searchStrains(searchTerm).subscribe(
                res => {
                    this.strains = res;
                },
                err => console.error(err),
                () => console.log('done loading strains')
            );
        }
    }

    ngOnInit() {
    }

    addStrain(item: Item) {
        this.itemsCollection.add(item).then(
            () => this.dismiss()
        );
    }
}
