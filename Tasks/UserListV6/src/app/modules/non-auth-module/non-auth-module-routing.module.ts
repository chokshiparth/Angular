import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonAuthModuleComponent } from './non-auth-module.component';

const routes: Routes = [
  {
    path:'dashboard',
    // component: NonAuthModuleComponent
    loadChildren: () => import('src/app/modules/non-auth-module/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'register',
    loadChildren: () => import('./registration/registration.module').then(m=>m.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonAuthModuleRoutingModule { }
