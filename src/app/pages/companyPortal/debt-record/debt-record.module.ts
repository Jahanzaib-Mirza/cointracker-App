import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtRecordPageRoutingModule } from './debt-record-routing.module';

import { DebtRecordPage } from './debt-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtRecordPageRoutingModule
  ],
  declarations: [DebtRecordPage]
})
export class DebtRecordPageModule {}
