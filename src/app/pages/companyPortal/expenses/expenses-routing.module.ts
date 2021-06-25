import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesPage } from './expenses.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensesPage,
    children:[
      {
        path: 'periodic-expenses',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../pages/companyPortal/periodic-expenses/periodic-expenses.module').then( m => m.PeriodicExpensesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'periodic-expenses',
        pathMatch: 'full'
      },
      {
        path: 'onetime-expenses',
        loadChildren: () => import('../../../pages/companyPortal/onetime-expenses/onetime-expenses.module').then( m => m.OnetimeExpensesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesPageRoutingModule {}
