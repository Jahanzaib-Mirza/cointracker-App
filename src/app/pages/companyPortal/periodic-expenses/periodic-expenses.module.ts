import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicExpensesPageRoutingModule } from './periodic-expenses-routing.module';

import { PeriodicExpensesPage } from './periodic-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicExpensesPageRoutingModule
  ],
  declarations: [PeriodicExpensesPage]
})
export class PeriodicExpensesPageModule {}
