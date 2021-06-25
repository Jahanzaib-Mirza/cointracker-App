import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeductSalaryPageRoutingModule } from './deduct-salary-routing.module';

import { DeductSalaryPage } from './deduct-salary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeductSalaryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeductSalaryPage]
})
export class DeductSalaryPageModule {}
