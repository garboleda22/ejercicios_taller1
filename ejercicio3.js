class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Tienda {
    constructor() {
        this.inventario = [];
    }

    // metodo para agregar productos
    agregarProducto(nombre, precio, cantidad) {
        const producto = new Producto(nombre, precio, cantidad);
        this.inventario.push(producto);
    }

    // metodo para actualizar la cantidad de un producto
    actualizarCantidad(nombre, nuevaCantidad) {
        const producto = this.inventario.find(prod => prod.nombre === nombre);
        if (producto) {
            producto.cantidad = nuevaCantidad;
            console.log(`Cantidad actualizada para ${nombre}. Nueva cantidad: ${nuevaCantidad}`);
        } else {
            console.log(`Producto ${nombre} no encontrado en el inventario`);
        }
    }

    // Método para mostrar la información de todos los productos
    mostrarInventario() {
        console.log("Inventario de productos:");
        this.inventario.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
    }
}

// Ejemplo de uso
const tienda = new Tienda();
tienda.agregarProducto("Piña", 0.5, 50);
tienda.agregarProducto("Banana", 0.3, 100);
tienda.mostrarInventario();
tienda.actualizarCantidad("Manzana", 60);
tienda.mostrarInventario();