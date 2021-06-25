import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicBudgetsPageRoutingModule } from './periodic-budgets-routing.module';

import { PeriodicBudgetsPage } from './periodic-budgets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicBudgetsPageRoutingModule
  ],
  declarations: [PeriodicBudgetsPage]
})
export class PeriodicBudgetsPageModule {}
