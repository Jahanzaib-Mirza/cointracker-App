import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicExpensesPage } from './periodic-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicExpensesPageRoutingModule {}
