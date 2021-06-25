import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryRecordPage } from './salary-record.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryRecordPageRoutingModule {}
