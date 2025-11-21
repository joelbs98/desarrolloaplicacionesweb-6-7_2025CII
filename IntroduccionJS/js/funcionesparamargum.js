//Declaración de una función
function sumar(numero1,numero2){
    //numero 1 y numero 2 son parametros
    console.log(numero1 + numero2);
}

sumar(10,20); //Argumentos o valores reales
sumar(50,100);
sumar(2,4);

//Expresión de una función
const sumar2 = function(numero1,numero2){
    console.log(numero1+numero2);

};
sumar2(1,2);

//Declaración de función - Parámetros por default
function sumar3(numero1 = 0,numero2 = 0){
    console.log(numero1+numero2);
}
sumar3();