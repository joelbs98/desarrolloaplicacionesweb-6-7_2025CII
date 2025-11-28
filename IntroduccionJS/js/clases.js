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

//Herencia
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);//las propiedades heredadas
        this.isbn = isbn;//las propiedades propias de la clase
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es ${this.isbn}}`;
    }
    indicarPrecio(){
        return `${super.indicarPrecio()} y Si hay stock`;
    }
}

const libro = new Libro("Harry Potter",200,"AHSUS828SD");
console.log(libro.formatearProducto());
console.log(libro.indicarPrecio()); 

