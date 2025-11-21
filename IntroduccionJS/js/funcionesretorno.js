//Ejemplo 1
function sumar(n1,n2){
    return n1 + n2;
}
const resultado = sumar(2,3);
console.log(resultado);

//ejemplo 2
let total = 0;
function agregarAlCarrito(precio){
    return (total+precio);
}
function calcularImpuesto(total){
    return total * 1.15
}
total = agregarAlCarrito(300);
total = agregarAlCarrito(200);
console.log(total);
const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar es ${totalAPagar}`); //ASCII 96 -> ` TEMPLATE LITERALS
