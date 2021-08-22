import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrintModule } from '../../projects/print/src/lib/print.module';
import { PrintStuffComponent } from './print-stuff/print-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintStuffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
