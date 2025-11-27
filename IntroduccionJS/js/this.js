//This -> Hace referencia al contexto en el que se esta llamando una acción
const reservacion = {
    nombre: "Joel",
    apellido: "Barba",
    total: 3000,
    pagado: false,
    informacion: function(){
        // No utilizar en este contexto el this en una arrow function ya que hereda
        // el this del contexto externo ej: window en navegadores o si esta dentro
        //de una clase hace referencia a la clase
        console.log(`El cliente ${this.nombre} reservó y su valor a pagar es ${this.total}`);
    },
};
reservacion.informacion();