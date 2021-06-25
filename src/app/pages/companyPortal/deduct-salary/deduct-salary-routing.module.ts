import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeductSalaryPage } from './deduct-salary.page';

const routes: Routes = [
  {
    path: '',
    component: DeductSalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeductSalaryPageRoutingModule {}
