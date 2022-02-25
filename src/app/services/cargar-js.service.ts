import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarJSService {

  Cargar(archivos: String[]){
    for(let archivo of archivos){
      let script = document.createElement("script");
      script.src = "./assets/js/" + archivo + ".js";
      script.type = "module"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  constructor() { }
}
