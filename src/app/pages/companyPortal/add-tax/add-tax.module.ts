import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaxPageRoutingModule } from './add-tax-routing.module';

import { AddTaxPage } from './add-tax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTaxPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddTaxPage]
})
export class AddTaxPageModule {}
