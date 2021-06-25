import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowedPageRoutingModule } from './borrowed-routing.module';

import { BorrowedPage } from './borrowed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowedPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BorrowedPage]
})
export class BorrowedPageModule {}
