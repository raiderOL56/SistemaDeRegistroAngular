import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
      this.items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            routerLink: 'home'
        },
        {
          label: 'Servicios',
          icon: 'pi pi-star',
          routerLink: 'servicios'
        }, 
        {
            label: 'Nosotros',
            icon: 'pi pi-users',
            routerLink: 'nosotros'
        },
        {
          label: 'SingUp',
          icon: 'pi pi-sign-in',
          routerLink: 'sign'
        }
    ];
  }

}
