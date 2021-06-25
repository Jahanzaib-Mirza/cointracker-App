import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCompanyPage } from './update-company.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCompanyPageRoutingModule {}
