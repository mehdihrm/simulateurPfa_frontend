import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './component/home/home.component';
import { ClientComponent } from './component/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
