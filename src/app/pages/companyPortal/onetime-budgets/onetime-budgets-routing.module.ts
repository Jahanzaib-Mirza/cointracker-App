import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnetimeBudgetsPage } from './onetime-budgets.page';

const routes: Routes = [
  {
    path: '',
    component: OnetimeBudgetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnetimeBudgetsPageRoutingModule {}
