//Objetos
/*
const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;
*/
//sintaxis de un objeto
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores"
};

console.log(producto);

console.log(producto.precio); //acceder a una propiedad del objeto(forma comun)

console.log(producto["disponible"]); //otra forma de acceder a la propiedad de un objeto

producto.imagen = "imagen.jpg"; //añadir una propiedad al objeto
delete producto.categoria; //eliminar propiedad de un objeto
producto.precio = 500; //modificar propiedad existente
console.log(producto);

