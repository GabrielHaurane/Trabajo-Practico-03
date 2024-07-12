/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular 
su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(h + b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58

*/
function perimetro(b, h) {
  const peri = 2 * (h + b);
  return peri;
}
const b = parseInt(prompt`indique la base del rectangulo`);
const h = parseInt(prompt`indique la altura del rectangulo`);

document.write(`<p>su base es ${b} </p>`);
document.write(`<p>su altura es ${h} </p>`);
document.write(`<p>su perimetro es: ${perimetro(b, h)}</p>`);
