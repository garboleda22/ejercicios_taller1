class Stack {
    constructor () {
        this.pila = []
    }

    push (elemento) {
        this.pila.push(elemento);
        console.log (`Elemento agregado: ${elemento}`)
    }

    pop () {
        let eliminarelemento = null

        if (this.pila.length){
            eliminarelemento = this.pila[this.pila.length-1]
            this.pila.pop ()
        }
        console.log(`Se ha eliminado: ${eliminarelemento}`)
    }

    getSize(){
        return this.pila.length
    }

    isEmpty () {
        return (this.pila.length === 0)
    }

    peek() {
        if (this.pila.length > 0) {
            return this.pila[this.pila.length - 1];
        }else {
            return "Pila vacia"
        }
    }

    print() {
        if (this.pila.length){
            console.group("Item de la pila")

            for (let i = 0; i < this.pila.length; i++) {
                console.log(`| ${this.pila[i]} |`);
            }
            console.groupEnd()
        }else {
            console.log("La pila esta vacia")
        }            
    }

}

//CREAMOS UN ELEMENTO DE LA CLASE Stack
const pila1 = new Stack ();

// AGREGAMOS ELEMENTOS A LA PILA
pila1.push("manzanas");
pila1.push("peras");
pila1.push("naranjas");
pila1.push("fresas");
pila1.push("kiwi");

//ELIMINAMOS EL ULTIMO ELEMENTO AGREGADO A LA PILA
pila1.pop();

//VISUALIZAR LA LONGITUD DE LA PILA
console.log(pila1.getSize());

//PARA SABER SI LA PILA ESTA VACIA false ó true
console.log(pila1.isEmpty());

//PARA VISUALIZRA EL ULTIMO ELEMENTO POR SALIR
console.log(pila1.peek());

//PARA VISUALIZAR EL ORDEN DE LA PILA CORRECTAMENTE
pila1.print()

//IMPRIMIMOS EL TAMAÑO DE LA PILA
console.log(pila1)