const numero1 = 30;
const numero3 = 20;
//cuando hay un error se detiene la ejecución
console.log(numero1);
//console.log(numero2);
console.log(numero3);

try{
    console.log(numero2);
}catch(error){
    console.log(error);
}
console.log("Esto es una prueba de trycatch");