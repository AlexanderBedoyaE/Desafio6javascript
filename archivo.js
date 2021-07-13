let miarray = [];
let espacioNombres = 4;
 

for(let i = 0; i < espacioNombres ; i++) {
    let nombre = prompt("Ingrese un producto");
    miarray.push(nombre);
    console.log(miarray);
    const arreglosort = miarray.sort();
    console.log(arreglosort);
}


