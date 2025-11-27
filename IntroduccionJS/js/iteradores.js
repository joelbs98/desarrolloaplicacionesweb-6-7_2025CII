//For Loop
for(let i=0;i<10;i++){
    console.log(i);
}

//Ejemplo
for(let i=0;i<10;i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
}

//for para recorrer un arreglo de objetos
//arreglo de objetos
const carrito = [
    {nombre: "Monitor", precio: 200},
    {nombre: "Laptop", precio: 500},
    {nombre: "Celular", precio: 350},
    {nombre: "Televisor", precio: 1000}
];

for(let i=0;i<carrito.length;i++){
    console.log(carrito[i].nombre);
};

//While loop -> desde la primera iteracion se evalua la condicion
let i= 0; //indice
while(i<=100){
    //condición
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
    i++;
}
let j=0;
while(j<carrito.length){
    console.log(carrito[j].nombre);
    j++;
};

//Do while loop -> ejecuta el codigo al menos una vez y luego evalua la condición
let k = 0;
do{
    console.log(k);
    k++;
}while(k<10);

