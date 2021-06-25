import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnetimeExpensesPageRoutingModule } from './onetime-expenses-routing.module';

import { OnetimeExpensesPage } from './onetime-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnetimeExpensesPageRoutingModule
  ],
  declarations: [OnetimeExpensesPage]
})
export class OnetimeExpensesPageModule {}
