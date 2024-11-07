class Persona {
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    //mostrar informacion cargada
    mostrarInformacio (){
    return`${this.nombre} tiene ${this.edad}`
    }

    //Metodo para calcular si es mayor de edad
    calcularEdad(){
        if (this.edad >= 18) {
            return `${this.nombre} es mayor de edad`
        }
        else {
            return `${this.nombre} es menor de edad`
        }
    }
}

let persona1 = new Persona ("Eder",16);
console.log(persona1.calcularEdad());
