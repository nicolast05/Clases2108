import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppDirectiva } from './app.directiva';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AppDirectiva
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
