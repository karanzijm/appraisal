import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
    

 // { path: '', redirectTo: 'menu', pathMatch: 'full' },
 //  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // {
  //   path: 'family-earning',
  //   loadChildren: () => import('./pages/family-earning/family-earning.module').then( m => m.FamilyEarningPageModule)
  // },
  // {
  //   path: 'stock-valuation',
  //   loadChildren: () => import('./pages/stock-valuation/stock-valuation.module').then( m => m.StockValuationPageModule)
  // },
  // {
  //   path: 'daily-sales-metrics',
  //   loadChildren: () => import('./pages/daily-sales-metrics/daily-sales-metrics.module').then( m => m.DailySalesMetricsPageModule)
  // },
  // {
  //   path: 'operating-expenses',
  //   loadChildren: () => import('./pages/operating-expenses/operating-expenses.module').then( m => m.OperatingExpensesPageModule)
  // },
  // {
  //   path: 'business-financial',
  //   loadChildren: () => import('./pages/business-financial/business-financial.module').then( m => m.BusinessFinancialPageModule)
  // },
  // {
  //   path: 'family-expenses',
  //   loadChildren: () => import('./pages/family-expenses/family-expenses.module').then( m => m.FamilyExpensesPageModule)
  // },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  // },

  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
