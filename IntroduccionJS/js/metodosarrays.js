const numeros = [1,2,3,4,5,6];
console.table(numeros); 
const meses = new Array("Enero","Febrero","Marzo"); 
console.table(meses);

//añadir elementos en un arreglo
//no recomendada
numeros[6] = 60;
numeros[2] = 10; //va a reemplazar el valor si ya existe el indice
console.table(numeros);

//no recomendada con push
numeros.push(30);//aregar al final del arreglo
numeros.push(40,41,42); //agrego varios elementos

//no recomendada con unshift
numeros.unshift(20,10,-5);//aregar al inicio del arreglo

//eliminar elementos de un arreglo
numeros.pop(); //eliminar el ultimo elemento del arreglo
numeros.shift(); //eliminar el primer elemento del arreglo

console.table(numeros);
numeros.splice(2,2);//va hacia el elemento que deseas y elimina los que deseas

//Spread Operator -> recomendada
const nuevosNumeros = [100,200,...numeros,10];//buena practica ya que no modificamos el arreglo original



console.table(numeros);
console.table(nuevosNumeros);