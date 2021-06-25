import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTaxPage } from './edit-tax.page';

const routes: Routes = [
  {
    path: '',
    component: EditTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTaxPageRoutingModule {}
