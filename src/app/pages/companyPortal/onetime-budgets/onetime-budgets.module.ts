import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnetimeBudgetsPageRoutingModule } from './onetime-budgets-routing.module';

import { OnetimeBudgetsPage } from './onetime-budgets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnetimeBudgetsPageRoutingModule
  ],
  declarations: [OnetimeBudgetsPage]
})
export class OnetimeBudgetsPageModule {}
