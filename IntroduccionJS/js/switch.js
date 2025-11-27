const metodoPago = "tarjeta";

switch(metodoPago){
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "efectivo":
        console.log("Pagaste en efectivo");
        break;
    case "Bitcoin":
        console.log("Pagaste con bitcoin");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}