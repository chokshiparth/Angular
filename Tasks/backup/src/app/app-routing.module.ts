import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/auth/login'},
  {
    path: 'auth/login',
    loadChildren: () => import('./modules/auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  {
    path: 'non-auth/dashboard',
    loadChildren: () => import('./modules/non-auth-module/non-auth-module.module').then(m => m.NonAuthModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
