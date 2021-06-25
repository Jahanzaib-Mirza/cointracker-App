import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryPortalPageRoutingModule } from './salary-portal-routing.module';

import { SalaryPortalPage } from './salary-portal.page';
import { SalaryButtonsComponent } from 'src/app/components/salary-buttons/salary-buttons.component';
import { AddSalaryPageModule } from '../add-salary/add-salary.module';
import { AddSalaryPage } from '../add-salary/add-salary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryPortalPageRoutingModule,

  ],
  declarations: [SalaryPortalPage,SalaryButtonsComponent,AddSalaryPage]
})
export class SalaryPortalPageModule {}
