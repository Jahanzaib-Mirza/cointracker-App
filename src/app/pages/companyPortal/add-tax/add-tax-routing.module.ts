import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTaxPage } from './add-tax.page';

const routes: Routes = [
  {
    path: '',
    component: AddTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTaxPageRoutingModule {}
