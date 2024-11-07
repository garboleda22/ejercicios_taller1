class Empleado {
    constructor(nombre, salario, puesto){
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }
    aumento(porcentaje){
        let aumento = this.salario * porcentaje
        this.salario += aumento
        return console.log (this.salario)
       
    }
}
let empleado1 = new Empleado('Juan', 1000, 'Gerente')
empleado1.aumento(0.25)
