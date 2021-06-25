import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebtsPage } from './debts.page';

const routes: Routes = [
  {
    path: '',
    component: DebtsPage,
    children: [
      {
        path: 'active-debts',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../pages/companyPortal/active-debts/active-debts.module').then(m => m.ActiveDebtsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'active-debts',
        pathMatch: 'full'
      },
      {
        path: 'closed-debts',
        loadChildren: () => import('../../../pages/companyPortal/closed-debts/closed-debts.module').then(m => m.ClosedDebtsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtsPageRoutingModule {}
