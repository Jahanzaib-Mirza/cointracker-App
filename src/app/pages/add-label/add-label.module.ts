import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLabelPageRoutingModule } from './add-label-routing.module';

import { AddLabelPage } from './add-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLabelPageRoutingModule
  ],
  declarations: [AddLabelPage]
})
export class AddLabelPageModule {}
