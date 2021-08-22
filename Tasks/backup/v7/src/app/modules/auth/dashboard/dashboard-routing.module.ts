import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guard/authentication.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path:'',
  component:DashboardComponent,
  canActivate:[AuthenticationGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
