import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryRecordPageRoutingModule } from './salary-record-routing.module';

import { SalaryRecordPage } from './salary-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryRecordPageRoutingModule
  ],
  declarations: [SalaryRecordPage]
})
export class SalaryRecordPageModule {}
