import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyPortalPageRoutingModule } from './company-portal-routing.module';

import { CompanyPortalPage } from './company-portal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyPortalPageRoutingModule
  ],
  declarations: [CompanyPortalPage]
})
export class CompanyPortalPageModule {}
