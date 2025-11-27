const carrito = [
    {nombre: "Monitor", precio: 200},
    {nombre: "Laptop", precio: 500},
    {nombre: "Celular", precio: 350},
    {nombre: "Televisor", precio: 1000}
];
//forEach -> se utiliza solamente en arreglos
carrito.forEach(function (producto){
    console.log(producto.nombre);
});
//forEach en arrow function
carrito.forEach(producto => console.log(producto.nombre));

//Map
const arreglo = carrito.map(producto => producto.nombre);
console.log(arreglo);
