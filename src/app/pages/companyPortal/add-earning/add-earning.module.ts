import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEarningPageRoutingModule } from './add-earning-routing.module';

import { AddEarningPage } from './add-earning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEarningPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddEarningPage]
})
export class AddEarningPageModule {}
