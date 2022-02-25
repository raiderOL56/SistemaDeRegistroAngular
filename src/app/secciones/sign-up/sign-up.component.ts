import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  nombre: String = "";
  apellido: String = "";
  edad: number = 0; 

  registrar(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
