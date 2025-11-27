//Arrow functions

//Se utiliza en la forma de expresión de función
const sumar = (n1,n2) =>{
    console.log(n1+n2);
}
sumar(5,5);

//en caso de que sea solo una linea el cuerpo de la función son opcionales las {}
const sumar2 = (n1,n2) => console.log(n1+n2);

//Ejemplo2
const aprendiendo = (tecnologia)=>{
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo("Javascript");

//Cuando hay solo 1 parametro entre los () estos no son necesarios
const saludo = mensaje => console.log(mensaje);


//arreglo de objetos
const carrito = [
    {nombre: "Monitor", precio: 200},
    {nombre: "Laptop", precio: 500},
    {nombre: "Celular", precio: 350}
];
let resultado;
//Some -> Ideal para buscar en arreglos de objetos
resultado = carrito.some(producto => producto.nombre === "Celular");
console.log(resultado);
//En las arrow functions ya no es necesario el return
//Reduce para sumar todos los valores
resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //valor inicial
console.log(resultado);

//Filter es para filtrar un arreglo
resultado = carrito.filter(producto => producto.precio > 300);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== "Celular");
console.log(resultado);