import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationPopUpComponent } from './activation-pop-up.component';

const routes: Routes = [
  {
    path:'',
    component: ActivationPopUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivationPopUpRoutingModule { }
