import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'superadmin',
    loadChildren: () => import('./pages/superadmin/superadmin.module').then( m => m.SuperadminPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'superadmin',
    pathMatch: 'full'
  },
  {
    path: 'adduser',
    loadChildren: () => import('./pages/adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'tax',
    loadChildren: () => import('./pages/companyPortal/tax/tax.module').then( m => m.TaxPageModule)
  },
  {
    path: 'company-portal',
    loadChildren: () => import('./pages/companyPortal/company-portal/company-portal.module').then( m => m.CompanyPortalPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/companyPortal/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/companyPortal/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'earnings',
    loadChildren: () => import('./pages/companyPortal/earnings/earnings.module').then( m => m.EarningsPageModule)
  },
  {
    path: 'salary',
    loadChildren: () => import('./pages/companyPortal/salary/salary.module').then( m => m.SalaryPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./pages/companyPortal/expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  // {
  //   path: 'budget',
  //   loadChildren: () => import('./pages/companyPortal/budget/budget.module').then( m => m.BudgetPageModule)
  // },
  {
    path: 'ledger',
    loadChildren: () => import('./pages/companyPortal/ledger/ledger.module').then( m => m.LedgerPageModule)
  },
  {
    path: 'assets',
    loadChildren: () => import('./pages/companyPortal/assets/assets.module').then( m => m.AssetsPageModule)
  },
  {
    path: 'audit-logs',
    loadChildren: () => import('./pages/companyPortal/audit-logs/audit-logs.module').then( m => m.AuditLogsPageModule)
  },
  {
    path: 'debts',
    loadChildren: () => import('./pages/companyPortal/debts/debts.module').then( m => m.DebtsPageModule)
  },
  {
    path: 'borrowed',
    loadChildren: () => import('./pages/companyPortal/borrowed/borrowed.module').then( m => m.BorrowedPageModule)
  },
  {
    path: 'debt-record',
    loadChildren: () => import('./pages/companyPortal/debt-record/debt-record.module').then( m => m.DebtRecordPageModule)
  },
  // {
  //   path: 'debts',
  //   loadChildren: () => import('./pages/debts/debts.module').then( m => m.DebtsPageModule)
  // },
  {
    path: 'active-debts',
    loadChildren: () => import('./pages/companyPortal/active-debts/active-debts.module').then( m => m.ActiveDebtsPageModule)
  },
  {
    path: 'closed-debts',
    loadChildren: () => import('./pages/companyPortal/closed-debts/closed-debts.module').then( m => m.ClosedDebtsPageModule)
  },
  {
    path: 'new-budget',
    loadChildren: () => import('./pages/companyPortal/new-budget/new-budget.module').then( m => m.NewBudgetPageModule)
  },
  {
    path: 'select-label',
    loadChildren: () => import('./pages/companyPortal/select-label/select-label.module').then( m => m.SelectLabelPageModule)
  },
  {
    path: 'add-label',
    loadChildren: () => import('./pages/add-label/add-label.module').then( m => m.AddLabelPageModule)
  },
  {
    path: 'periodic-budgets',
    loadChildren: () => import('./pages/companyPortal/periodic-budgets/periodic-budgets.module').then( m => m.PeriodicBudgetsPageModule)
  },
  {
    path: 'onetime-budgets',
    loadChildren: () => import('./pages/companyPortal/onetime-budgets/onetime-budgets.module').then( m => m.OnetimeBudgetsPageModule)
  },
  {
    path: 'periodic-expenses',
    loadChildren: () => import('./pages/companyPortal/periodic-expenses/periodic-expenses.module').then( m => m.PeriodicExpensesPageModule)
  },
  {
    path: 'onetime-expenses',
    loadChildren: () => import('./pages/companyPortal/onetime-expenses/onetime-expenses.module').then( m => m.OnetimeExpensesPageModule)
  },
  {
    path: 'new-expense',
    loadChildren: () => import('./pages/companyPortal/new-expense/new-expense.module').then( m => m.NewExpensePageModule)
  },
  {
    path: 'edit-expense',
    loadChildren: () => import('./pages/companyPortal/edit-expense/edit-expense.module').then( m => m.EditExpensePageModule)
  },
  {
    path: 'salary-portal',
    loadChildren: () => import('./pages/companyPortal/salary-portal/salary-portal.module').then( m => m.SalaryPortalPageModule)
  },
  {
    path: 'salary-record',
    loadChildren: () => import('./pages/companyPortal/salary-record/salary-record.module').then( m => m.SalaryRecordPageModule)
  },
  {
    path: 'add-salary',
    loadChildren: () => import('./pages/companyPortal/add-salary/add-salary.module').then( m => m.AddSalaryPageModule)
  },
  {
    path: 'create-invoice',
    loadChildren: () => import('./pages/companyPortal/create-invoice/create-invoice.module').then( m => m.CreateInvoicePageModule)
  },
  {
    path: 'add-customer',
    loadChildren: () => import('./pages/companyPortal/add-customer/add-customer.module').then( m => m.AddCustomerPageModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'add-company',
    loadChildren: () => import('./pages/add-company/add-company.module').then( m => m.AddCompanyPageModule)
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./pages/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'add-admin',
    loadChildren: () => import('./pages/add-admin/add-admin.module').then( m => m.AddAdminPageModule)
  },
  {
    path: 'update-company',
    loadChildren: () => import('./pages/update-company/update-company.module').then( m => m.UpdateCompanyPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/companyPortal/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'edit-salary',
    loadChildren: () => import('./pages/companyPortal/edit-salary/edit-salary.module').then( m => m.EditSalaryPageModule)
  },
  {
    path: 'deduct-salary',
    loadChildren: () => import('./pages/companyPortal/deduct-salary/deduct-salary.module').then( m => m.DeductSalaryPageModule)
  },
  {
    path: 'add-tax',
    loadChildren: () => import('./pages/companyPortal/add-tax/add-tax.module').then( m => m.AddTaxPageModule)
  },
  {
    path: 'edit-debt',
    loadChildren: () => import('./pages/companyPortal/edit-debt/edit-debt.module').then( m => m.EditDebtPageModule)
  },
  {
    path: 'edit-budget',
    loadChildren: () => import('./pages/companyPortal/edit-budget/edit-budget.module').then( m => m.EditBudgetPageModule)
  },
  {
    path: 'edit-tax',
    loadChildren: () => import('./pages/companyPortal/edit-tax/edit-tax.module').then( m => m.EditTaxPageModule)
  },
  {
    path: 'edit-earning',
    loadChildren: () => import('./pages/companyPortal/edit-earning/edit-earning.module').then( m => m.EditEarningPageModule)
  },
  {
    path: 'add-earning',
    loadChildren: () => import('./pages/companyPortal/add-earning/add-earning.module').then( m => m.AddEarningPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
