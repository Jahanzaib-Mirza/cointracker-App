import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetPage } from './budget.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetPage,
    children: [
      {
        path: 'periodic-budgets',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../pages/companyPortal/periodic-budgets/periodic-budgets.module').then( m => m.PeriodicBudgetsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'periodic-budgets',
        pathMatch: 'full'
      },
      {
        path: 'onetime-budgets',
        loadChildren: () => import('../../../pages/companyPortal/onetime-budgets/onetime-budgets.module').then( m => m.OnetimeBudgetsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetPageRoutingModule {}
