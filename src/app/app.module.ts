import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MenubarModule} from 'primeng/menubar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './secciones/home/home.component';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './secciones/servicios/servicios.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { SignUpComponent } from './secciones/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ServiciosComponent,
    NosotrosComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
