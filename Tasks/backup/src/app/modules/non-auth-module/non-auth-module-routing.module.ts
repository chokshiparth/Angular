import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonAuthModuleComponent } from './non-auth-module.component';

const routes: Routes = [
  {
    path:'',
    // component: NonAuthModuleComponent
    loadChildren: () => import('src/app/modules/non-auth-module/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonAuthModuleRoutingModule { }
