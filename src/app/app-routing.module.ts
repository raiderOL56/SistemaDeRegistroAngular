import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './secciones/home/home.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ServiciosComponent } from './secciones/servicios/servicios.component';
import { SignUpComponent } from './secciones/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'sign', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
