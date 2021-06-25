import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPortalPage } from './company-portal.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CompanyPortalPage,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('../../companyPortal/customers/customers.module').then(m => m.CustomersPageModule)
      },
      {
        path: 'invoices',
        loadChildren: () => import('../../companyPortal/invoices/invoices.module').then(m => m.InvoicesPageModule)
      },
      {
        path: 'earnings',
        loadChildren: () => import('../../companyPortal/earnings/earnings.module').then(m => m.EarningsPageModule)
      },
      {
        path: 'salary',
        loadChildren: () => import('../../companyPortal/salary/salary.module').then(m => m.SalaryPageModule)
      },
      {
        path: 'tax',
        loadChildren: () => import('../../companyPortal/tax/tax.module').then(m => m.TaxPageModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('../../companyPortal/expenses/expenses.module').then(m => m.ExpensesPageModule)
      },
      {
        path: 'budget',
        loadChildren: () => import('../../companyPortal/budget/budget.module').then(m => m.BudgetPageModule)
      },
      {
        path: 'ledger',
        loadChildren: () => import('../../companyPortal/ledger/ledger.module').then(m => m.LedgerPageModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('../../companyPortal/assets/assets.module').then(m => m.AssetsPageModule)
      },
      {
        path: 'audit-logs',
        loadChildren: () => import('../../companyPortal/audit-logs/audit-logs.module').then(m => m.AuditLogsPageModule)
      },
      {
        path: 'debts',
        loadChildren: () => import('../../companyPortal/debts/debts.module').then(m => m.DebtsPageModule)
      },
      {
        path: 'borrowed',
        loadChildren: () => import('../../companyPortal/borrowed/borrowed.module').then(m => m.BorrowedPageModule)
      },
      {
        path: 'new-budget',
        loadChildren: () => import('../../companyPortal/new-budget/new-budget.module').then( m => m.NewBudgetPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../../companyPortal/users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: 'user-details/:id',
        loadChildren: () => import('../../../pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPortalPageRoutingModule { }
