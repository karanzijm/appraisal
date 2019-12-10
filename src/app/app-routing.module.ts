import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  {
    path: 'loan-appraisal',
    loadChildren: () => import('./pages/loan-appraisal/loan-appraisal.module').then( m => m.LoanAppraisalPageModule)
  },  {
    path: 'project-creation',
    loadChildren: () => import('./pages/project-creation/project-creation.module').then( m => m.ProjectCreationPageModule)
  },

 

  

 
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
