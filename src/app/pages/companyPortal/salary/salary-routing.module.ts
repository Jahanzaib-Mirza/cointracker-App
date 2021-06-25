import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryPage } from './salary.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryPage,
    children: [
      {
        path: 'salary-portal',
        children: [
          {
            path: '',
            loadChildren: () => import('../../../pages/companyPortal/salary-portal/salary-portal.module').then( m => m.SalaryPortalPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'salary-portal',
        pathMatch: 'full'
      },
      {
        path: 'salary-record',
        loadChildren: () => import('../../../pages/companyPortal/salary-record/salary-record.module').then( m => m.SalaryRecordPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryPageRoutingModule {}
