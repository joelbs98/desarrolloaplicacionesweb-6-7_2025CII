/*function obtenerEmpleados(){
    const url = "js/empleados.json";
    fetch(url)//fetch recibe como parametro la url de la api
        .then((resultado)=>{
            //El primer then es para que el resultado del fetch sea un json
            //y se lo retorne
            console.log(resultado);
            return resultado.json();
        })
        .then((datos)=>{
            console.log(datos);
            console.log(datos.empleados);
            const {empleados} = datos;//Aplicando destructuring para extraer la 
            //propiedad empleados del objeto datos y asignarlo a una nueva
            //variable
            console.log(empleados);

            empleados.forEach((empleado)=>{
                console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                document.querySelector(".contenido").textContent = empleado.nombre;
                //Muestra el empleado.nombre en el html donde este la clase .contenido
                
            })

        })
}
*/

async function obtenerEmpleados(){
    const url = "js/empleados.json";
    const resultado = await fetch(url);//el await pausa la ejecución
    // de la función hasta que el fetch de la respuesta 
    const datos = await resultado.json(); // el .json convierte el contenido a json
    console.log(datos);
}

obtenerEmpleados();