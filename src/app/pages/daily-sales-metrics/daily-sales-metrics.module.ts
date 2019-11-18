import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailySalesMetricsPageRoutingModule } from './daily-sales-metrics-routing.module';

import { DailySalesMetricsPage } from './daily-sales-metrics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailySalesMetricsPageRoutingModule
  ],
  declarations: [DailySalesMetricsPage]
})
export class DailySalesMetricsPageModule {}
