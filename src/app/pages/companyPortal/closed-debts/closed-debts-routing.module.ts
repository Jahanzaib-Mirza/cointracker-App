import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosedDebtsPage } from './closed-debts.page';

const routes: Routes = [
  {
    path: '',
    component: ClosedDebtsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosedDebtsPageRoutingModule {}
