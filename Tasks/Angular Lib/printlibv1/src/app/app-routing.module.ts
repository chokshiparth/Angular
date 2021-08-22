import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintStuffComponent } from './print-stuff/print-stuff.component';

const routes: Routes = [
  {
    path:'print-stuff',
    component: PrintStuffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
