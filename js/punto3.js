/*
3- Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/
function dadosLanzados() {
  return Math.floor(Math.random() * 6) + 1;
}

// Inicializamos un array para contar las apariciones de las sumas (de 2 a 12)
let apariciones = new Array(13).fill(0);

// Simulamos 50 lanzamientos de dos dados
for (let i = 0; i < 50; i++) {
  let dado1 = dadosLanzados();
  let dado2 = dadosLanzados();
  let suma = dado1 + dado2;
  apariciones[suma]++;
}
document.write(`<table>`);

document.write(`<tr>`);

document.write(`<td>Suma 🎲🎲</td>`); 

document.write(`<td>Apariciones</td>`);

document.write(`</tr>`);
// Imprimimos los resultados
for (let i = 2; i <= 12; i++) {
    document.write(`<tr>`);
  document.write(`<td>${i}</td>`);
  document.write(`<td>${apariciones[i]}</td>`);
  document.write(`</tr>`);
}

document.write(`</table>`);


