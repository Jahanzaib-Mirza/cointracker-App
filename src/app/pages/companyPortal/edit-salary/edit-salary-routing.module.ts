import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSalaryPage } from './edit-salary.page';

const routes: Routes = [
  {
    path: '',
    component: EditSalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSalaryPageRoutingModule {}
