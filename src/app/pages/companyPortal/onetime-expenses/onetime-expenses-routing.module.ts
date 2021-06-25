import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnetimeExpensesPage } from './onetime-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: OnetimeExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnetimeExpensesPageRoutingModule {}
