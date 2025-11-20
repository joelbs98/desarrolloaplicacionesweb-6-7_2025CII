//Arreglos o arrays

const numeros = [1,2,3,4,5,6];
console.log(numeros);
console.table(numeros); //una forma mas legible de ver un arreglo

const meses = new Array("Enero","Febrero","Marzo"); //menos comun
console.table(meses);

const arreglo = [
    "Hola",
    true,
    20,
    {nombre: "Joel", apellido: "Barba"},
    [1,2,3,4,5,6,7]
];
//dentro de un arreglo puedo teer varios tipos de datos, objetos o arreglos
console.log(arreglo);

//acceder a los valores de un arreglo -> a traves de su indice
console.log(arreglo[2]);

//conocer el tamaño del arreglo
console.log(numeros.length);

//Iterar todo el array
numeros.forEach(function (numero){
    console.log(numero);
});

