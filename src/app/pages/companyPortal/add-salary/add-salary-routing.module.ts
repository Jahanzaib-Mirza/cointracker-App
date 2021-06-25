import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSalaryPage } from './add-salary.page';

const routes: Routes = [
  {
    path: '',
    component: AddSalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSalaryPageRoutingModule {}
