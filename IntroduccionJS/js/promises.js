const usuarioAutenticado = new Promise((resolve,reject)=>{
 //resolve y reject pasan automaticamente  
 const auth = false;
 if(auth){
    resolve("Usuario autenticado"); //el promise se cumple
 } else{
    reject("No se puede iniciar sesión"); //el promise no se cumpla
 }
});
console.log(usuarioAutenticado);

usuarioAutenticado
    .then(function(resultado){
        //cuando se va por resolve
        console.log("desde el promise");
        console.log(resultado);
    })
    .catch(function(error){
        //cuando se va por el reject
        console.log(error);
    })

//En los promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado(en espera)
//Fullfiled: Ya se cumplió
//Rejected: Se ha rechazado o no se pudo cumplir