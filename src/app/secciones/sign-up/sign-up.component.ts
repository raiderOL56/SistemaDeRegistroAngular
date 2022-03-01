import { Component, OnInit } from '@angular/core';
import { CargarJSService } from 'src/app/services/cargar-js.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private cargarScripts: CargarJSService) {
    cargarScripts.Cargar(["firebase"]);
  }

  ngOnInit(): void {
  }

}
