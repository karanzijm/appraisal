import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessFinancialPageRoutingModule } from './business-financial-routing.module';

import { BusinessFinancialPage } from './business-financial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessFinancialPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BusinessFinancialPage]
})
export class BusinessFinancialPageModule {}
