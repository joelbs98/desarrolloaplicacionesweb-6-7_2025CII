const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores"
};

const medidas = {
    peso: "1kg",
    tamaño: "1m"
};

const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);