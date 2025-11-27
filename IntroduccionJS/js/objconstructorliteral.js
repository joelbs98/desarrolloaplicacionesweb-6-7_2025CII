//POO 

//Object literal
const producto = {
    nombre: "PS5",
    precio: 500,
};

//Object Constructor
function Producto2(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto2("PS4",100);
console.log(producto2);
const producto3 = new Producto2("PS3",75);
console.log(producto3);

//Prototypes
//Crear funciones que solo se utilizan en un objeto en especifico
//Antes se usaba mucho así
Producto2.prototype.formatearProducto = function (){
    return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
};
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());