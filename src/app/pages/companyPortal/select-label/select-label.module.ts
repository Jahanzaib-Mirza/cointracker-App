import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLabelPageRoutingModule } from './select-label-routing.module';

import { SelectLabelPage } from './select-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLabelPageRoutingModule
  ],
  declarations: [SelectLabelPage]
})
export class SelectLabelPageModule {}
