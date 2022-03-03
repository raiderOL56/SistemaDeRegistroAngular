export class User{
    nombre: string;
    apellido: string;
    edad: number;
    genero: string;

    constructor(nombre: string, apellido: string, edad: number, genero: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }
}