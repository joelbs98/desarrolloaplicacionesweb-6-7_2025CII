//arreglo plano
const meses = new Array("Enero","Febrero","Marzo");

//arreglo de objetos
const carrito = [
    {nombre: "Monitor", precio: 200},
    {nombre: "Laptop", precio: 500},
    {nombre: "Celular", precio: 350}
];

//forEach para recorrer
meses.forEach(function (mes){
    console.log(mes);
});

//forEach para buscar elemento
meses.forEach(function (mes){
    if(mes == "Abril"){
        console.log("Si existe el mes buscado");
    }
});

//include para buscar en arreglos planos
let resultado = meses.includes("Abril");
console.log(resultado);

//Some -> Ideal para buscar en arreglos de objetos
resultado = carrito.some(function (producto){
    return producto.nombre === "Celular";
});
console.log(resultado);

//Reduce para sumar todos los valores
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0); //valor inicial
console.log(resultado);

//Filter es para filtrar un arreglo
resultado = carrito.filter(function(producto){
    return producto.precio > 300;
});
console.log(resultado);

resultado = carrito.filter(function (producto){
    return producto.nombre !== "Celular";
});
console.log(resultado);



//  50 == "50" -> true 
// 50 === "50" -> false