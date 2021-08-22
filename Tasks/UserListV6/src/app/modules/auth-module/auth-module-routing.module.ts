import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('src/app/modules/auth-module/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'login',
    loadChildren: () => import('src/app/modules/auth-module/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'reset',
    loadChildren: () => import('src/app/modules/auth-module/reset-password/reset-password.module').then(m=>m.ResetPasswordModule)
  },
  {
    path:'activation-pop-up',
    loadChildren: () => import('src/app/modules/auth-module/activation-pop-up/activation-pop-up.module').then(m=>m.ActivationPopUpModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
