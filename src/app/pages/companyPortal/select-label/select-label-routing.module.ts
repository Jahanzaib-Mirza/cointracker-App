import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectLabelPage } from './select-label.page';

const routes: Routes = [
  {
    path: '',
    component: SelectLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectLabelPageRoutingModule {}
