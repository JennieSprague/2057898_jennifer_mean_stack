import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfLoginPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
