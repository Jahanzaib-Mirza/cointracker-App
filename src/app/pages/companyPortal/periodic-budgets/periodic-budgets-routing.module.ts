import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicBudgetsPage } from './periodic-budgets.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicBudgetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicBudgetsPageRoutingModule {}
