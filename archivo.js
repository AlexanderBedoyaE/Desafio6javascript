class Articulos{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }

    hablar(){
        alert("el producto es: "+ this.nombre + " y su precio es: " + this.precio);
    }
}

