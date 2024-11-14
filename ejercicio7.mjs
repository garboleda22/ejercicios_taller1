export class nuevoNodo {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

export class listaSimple {
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

import { listaSimple } from './listaSimple.mjs';
const lista = new listaSimple();

listaSimple.insertNode = ("valor 1");
listaSimple.insertNode = ("valor 2");
//listaSimple.displayList = ();