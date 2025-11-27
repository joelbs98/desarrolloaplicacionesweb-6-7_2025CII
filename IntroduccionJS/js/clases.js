//Clases

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
    }
    indicarPrecio(){
        return `El precio del producto es ${this.precio}`;
    }
}

const producto = new Producto("PS5", 600);
const producto2 = new Producto("PS4", 300);

console.log(producto);
console.log(producto2);

console.log(producto.indicarPrecio());