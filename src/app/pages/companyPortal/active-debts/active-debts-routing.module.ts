import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveDebtsPage } from './active-debts.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveDebtsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveDebtsPageRoutingModule {}
