//Async
//Await
//Nos permite escribir código asíncrono como si fuera código normal,
//sin bloquear todo el programa

function descargarNuevosClientes(){
    return new Promise((resolve)=> {
        console.log("Descargando clientes...");
        setTimeout(()=>{
            resolve("Los clientes fueron descargados");
        },10000)// en milisegundos
    })
}

function descargarUltimosPedidos(){
    return new Promise((resolve)=> {
        console.log("Descargando pedidos...");
        setTimeout(()=>{
            resolve("Los pedidos fueron descargados");
        },5000)// en milisegundos
    })
}


async function app(){
    try{
        /*const resultado = await descargarNuevosClientes();
        //await pausa la ejecución de una función async hasta que una promesa
        //se resuelva(resolve) o se rechace(reject)
        console.log(resultado);
        console.log("Mostrar datos descargados en dashboard");
        */
       const resultado = await Promise.all([
        descargarNuevosClientes(),
        descargarUltimosPedidos(),
       ]);
       console.log(resultado[0]);
       console.log(resultado[1]);
    }catch(error){
        console.log(error);
    }
}

app();
console.log("Este codigo no se bloquea");



