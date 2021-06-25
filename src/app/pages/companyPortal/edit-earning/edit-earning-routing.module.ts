import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEarningPage } from './edit-earning.page';

const routes: Routes = [
  {
    path: '',
    component: EditEarningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEarningPageRoutingModule {}
