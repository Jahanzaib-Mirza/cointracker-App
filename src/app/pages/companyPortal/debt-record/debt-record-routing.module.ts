import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebtRecordPage } from './debt-record.page';

const routes: Routes = [
  {
    path: '',
    component: DebtRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtRecordPageRoutingModule {}
