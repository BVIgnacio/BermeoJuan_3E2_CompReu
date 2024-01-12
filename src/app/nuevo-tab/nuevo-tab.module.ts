import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoTabPageRoutingModule } from './nuevo-tab-routing.module';

import { NuevoTabPage } from './nuevo-tab.page';
import { ColorListComponent } from '../color-list/color-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoTabPageRoutingModule,
  ],
  declarations: [NuevoTabPage,ColorListComponent]
})
export class NuevoTabPageModule {}
