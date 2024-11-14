//TALLER EJERCICIOS LISTAS ENLAZADAS
//EDER ARBOLEDA
//JhON HENRY 

class nuevoNodo {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class listaSimple {
    constructor() {
        this.head = null;
    
    }

    insertNodo(value){
        const newNode = new nuevoNodo (value);
        if (!this.head){
            this.head = newNode;
            return;
        } else {
            let currentNode = this.head;
              while (currentNode.next) {
              currentNode = currentNode.next;
              }

             currentNode.next = newNode;
        }
        
    }
    displayList () {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    findNode (value){
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return "NO SE ENCONTRO ELEMENTO";
    }
    deleteNode (value) {
        let currentNode = this.head;
        if (currentNode.value === value) {
            this.head = currentNode.next;
            return;
        }
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

//import { listaSimple } from './listaSimple.js';
const lista = new listaSimple();

lista.insertNodo ("valor 1")
lista.insertNodo ("valor 2")
lista.displayList();
console.log("jfghj");
lista.deleteNode("valor 1");
lista.displayList();
console.log("fgh");

console.log(lista.findNode("valor 2"));
