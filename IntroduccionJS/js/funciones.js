//Declaración de una función
function sumar(){
    console.log(10+10);
}

//llamar a una función
sumar();

//Expresión de una función
const sumar2 = function(){
    console.log(3+3);
}

//llamar a la función
sumar2();

// IIFE (Inmediately Invoked Function Expression)
// Una IIFE es una función que se define y se ejecuta inmediatamente después de ser creada
//Solo son accedidas desde este archivo al ser anonimas
(function (){
    console.log("Esto es una función");
})();

//Hoisting

saludar();

const saludar = function(){
    console.log("Hola");
};
