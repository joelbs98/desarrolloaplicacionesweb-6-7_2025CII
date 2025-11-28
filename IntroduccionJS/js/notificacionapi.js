const boton = document.querySelector("#boton");

boton.addEventListener("click",function(){
    console.log("diste click");
    Notification.requestPermission().then((resultado)=>{
        console.log(`El resultado es ${resultado}`);
    });//Notification maneja automaticamente el resolve y el reject
});

if(Notification.permission == "granted"){
    console.log("Hola");
    new Notification("Esto es una notificacion",{
        icon: "../../curso_website/imagenes/node.svg",
        body: "Hola a todos",
    });
}