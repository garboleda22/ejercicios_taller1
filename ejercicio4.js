class Rectangulo {
    constructor (base, altura){
        this.base = base;
        this.altura = altura;
    }

    //Metodo para calcular el area
    area(){
        return this.base*this.altura;
    }

    //Metodo para calcular el perimetro
    perimetro(){
        return 2*(this.base+this.altura);
    }
}

const rect = new Rectangulo(10, 10);
console.log(rect);

console.log("El area del rectángulo es:" +rect.area());
console.log("El perimetro del rectangulo es:" + rect.perimetro());