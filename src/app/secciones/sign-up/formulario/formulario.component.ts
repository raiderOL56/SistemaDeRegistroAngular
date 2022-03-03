import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/objetos/user.module';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  registrado: boolean = false;
  user: User[] = [];
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;

  registrar(){
    this.registrado = true;

    let myUser = new User(this.nombre, this.apellido, this.edad, this.genero);
    this.user.push(myUser);

    // Limpiar input
    this.nombre = "";
    this.apellido = "";
    this.edad = 0;
    this.genero = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
