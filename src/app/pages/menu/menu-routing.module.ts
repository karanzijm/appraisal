import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children:[
      // { path: 'main', loadChildren: '../main/main.module#MainPageModule' },
      { path: 'home', loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)},
      {
        path: 'family-earning',
        loadChildren: () => import('../family-earning/family-earning.module').then( m => m.FamilyEarningPageModule)
      },
      {
        path: 'stock-valuation',
        loadChildren: () => import('../stock-valuation/stock-valuation.module').then( m => m.StockValuationPageModule)
      },
      {
        path: 'daily-sales-metrics',
        loadChildren: () => import('../daily-sales-metrics/daily-sales-metrics.module').then( m => m.DailySalesMetricsPageModule)
      },
      {
        path: 'operating-expenses',
        loadChildren: () => import('../operating-expenses/operating-expenses.module').then( m => m.OperatingExpensesPageModule)
      },
      {
        path: 'business-financial',
        loadChildren: () => import('../business-financial/business-financial.module').then( m => m.BusinessFinancialPageModule)
      },
      {
        path: 'family-expenses',
        loadChildren: () => import('../family-expenses/family-expenses.module').then( m => m.FamilyExpensesPageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then( m => m.ReportsPageModule)
      },
      {
        path: 'cash-flow',
        loadChildren: () => import('../cash-flow/cash-flow.module').then( m => m.CashFlowPageModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('../landing/landing.module').then( m => m.LandingPageModule)
      },
    
    ]
  },
  {
    path: '',
    redirectTo: '/menu/landing',
    pathMatch: 'full' 
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
