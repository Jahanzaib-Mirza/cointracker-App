import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryPortalPage } from './salary-portal.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryPortalPageRoutingModule {}
