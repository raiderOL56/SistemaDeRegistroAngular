import { Component, Input, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { User } from 'src/app/objetos/user.module';

@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.css']
})
export class RegistradosComponent implements OnInit {

  @Input() registrado: boolean;
  @Input() myUser: User[];
  @Input() nombre: string;
  @Input() apellido: string;
  @Input() edad: number;
  @Input() genero: string;

  constructor() { }

  ngOnInit(): void {
  }

}
