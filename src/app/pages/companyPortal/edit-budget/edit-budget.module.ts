import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBudgetPageRoutingModule } from './edit-budget-routing.module';

import { EditBudgetPage } from './edit-budget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBudgetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditBudgetPage]
})
export class EditBudgetPageModule {}
