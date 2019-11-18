import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { StockValuationPageRoutingModule } from './stock-valuation-routing.module';

import { StockValuationPage } from './stock-valuation.page';
import { AddStockPageModule } from '../add-stock/add-stock.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockValuationPageRoutingModule,
    NgxDatatableModule,
    AddStockPageModule

  ],
  declarations: [StockValuationPage],
  
})
export class StockValuationPageModule {}
