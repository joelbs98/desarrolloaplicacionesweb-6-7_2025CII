"use strict";//se debe usar las buenas practicas de JS, si no se marca un error, se corre JS en modo estricto


//sintaxis de un objeto
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores"
};

//los objetos por defecto si se pueden modificar a pesar de que sea const

Object.freeze(producto); //con esto el objeto ya no puede ser modificado
//Con freeze no se puede agregar ni eliminar propiedades
//Con freeze tampoco se pueden cambiar valores
console.log(Object.isFrozen(producto));

Object.seal(producto);//Con esto el objeto no puede agregar ni eliminar propiedades
//pero si cambiar valores
producto.precio = 400; //se cambia asi un valor
console.log(producto.precio);
