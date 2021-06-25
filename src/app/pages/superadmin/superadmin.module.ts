import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperadminPageRoutingModule } from './superadmin-routing.module';

import { SuperadminPage } from './superadmin.page';
import { AddAdminPage } from '../add-admin/add-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperadminPageRoutingModule
  ],
  declarations: [SuperadminPage,AddAdminPage]
})
export class SuperadminPageModule {}
