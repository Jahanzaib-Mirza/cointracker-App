import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveDebtsPageRoutingModule } from './active-debts-routing.module';

import { ActiveDebtsPage } from './active-debts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveDebtsPageRoutingModule
  ],
  declarations: [ActiveDebtsPage]
})
export class ActiveDebtsPageModule {}
