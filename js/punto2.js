/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

- Mostrar la longitud del arreglo.
- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
- Añade en última posición la ciudad de París.
- Escribe por pantalla el elemento que ocupa la segunda posición.
- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/
// Inicializa el arreglo de ciudades
const ciudades = [];

// Solicita al usuario el nombre de ciudades y las almacena en el arreglo
do {
    const ciudad = prompt(`Escriba el nombre de una ciudad`);
    if (ciudad !== null && ciudad !== "") {
        ciudades.push(ciudad);
    }
} while (confirm(`¿Quieres agregar otra ciudad?`));

// Mostrar la longitud del arreglo
const longitud = ciudades.length;
document.write(`<p>El arreglo de ciudades tiene ${longitud} elementos</p>`);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última

document.write(`<ul>`);

// Verifica si hay al menos una ciudad para mostrar la primera
if (longitud > 0) {
    document.write(`<li>Primera ciudad: ${ciudades[0]}</li>`);
}

// Verifica si hay al menos tres ciudades para mostrar la tercera
if (longitud > 2) {
    document.write(`<li>Tercera ciudad: ${ciudades[2]}</li>`);
}

// Verifica si hay al menos una ciudad para mostrar la última
if (longitud > 0) {
    document.write(`<li>Última ciudad: ${ciudades[longitud - 1]}</li>`);
}
const agregado = ciudades.push(`Paris`)
document.write(`<li>La ciudad agregada es ${ciudades[longitud]}</li>`)

document.write(`</ul>`);



document.write(`<h1>Arreglo de ciudades</h1>`);
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
if (longitud > 1) {
    ciudades[1] = "Barcelona";
}




document.write(`<ul>`);

for (let i = 0; i < longitud; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
  }
document.write(`<li>${ciudades[longitud]}</li>`)
document.write(`</ul>`);