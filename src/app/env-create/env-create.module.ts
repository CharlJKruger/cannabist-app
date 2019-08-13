import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnvCreatePage } from './env-create.page';
import {OutdoorComponent} from './outdoor/outdoor.component';

const routes: Routes = [
  {
    path: '',
    component: EnvCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
    declarations: [EnvCreatePage, OutdoorComponent]
})
export class EnvCreatePageModule {}
