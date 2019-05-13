import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllbooksComponent } from './allbooks/allbooks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassComponent } from './class/class.component';


@NgModule({
  declarations: [
    AppComponent,
    AllbooksComponent,
    NavbarComponent,
    ClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
