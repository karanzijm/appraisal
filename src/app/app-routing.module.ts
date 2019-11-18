import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'family-earning',
    loadChildren: () => import('./pages/family-earning/family-earning.module').then( m => m.FamilyEarningPageModule)
  },
  {
    path: 'stock-valuation',
    loadChildren: () => import('./pages/stock-valuation/stock-valuation.module').then( m => m.StockValuationPageModule)
  },
  {
    path: 'daily-sales-metrics',
    loadChildren: () => import('./pages/daily-sales-metrics/daily-sales-metrics.module').then( m => m.DailySalesMetricsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
