import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCompanyPageRoutingModule } from './update-company-routing.module';

import { UpdateCompanyPage } from './update-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCompanyPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateCompanyPage]
})
export class UpdateCompanyPageModule {}
