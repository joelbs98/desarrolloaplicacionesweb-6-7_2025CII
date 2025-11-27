const reproductor = {
    reproducir: function (id){
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    },
};
//agregando metodo fuera de la declaracion
reproductor.borrarCancion = function (id){
    console.log(`Eliminando la canción ${id}`);
};
console.log(reproductor);
reproductor.reproducir(3000);
reproductor.pausar();
reproductor.borrarCancion(3000);
reproductor.crearPlaylist("Rock");
reproductor.reproducirPlaylist("Rap");
