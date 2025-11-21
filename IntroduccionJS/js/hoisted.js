//Hoisting

saludar(); //si funciona

function saludar(){
    console.log("Hola");
};

despedir(); //no funciona

const despedir = function(){
    console.log("Adios");
};