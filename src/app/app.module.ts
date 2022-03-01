import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './secciones/home/home.component';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './secciones/servicios/servicios.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { SignUpComponent } from './secciones/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { CargarJSService } from './services/cargar-js.service';

// PrimeNG
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import { FormularioComponent } from './secciones/sign-up/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ServiciosComponent,
    NosotrosComponent,
    SignUpComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MenubarModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule
  ],
  providers: [CargarJSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
