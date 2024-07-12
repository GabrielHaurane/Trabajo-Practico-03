/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const num1 = (parseInt(prompt(`ingrese un numero`)))

function tablaMulti(num1) {
    for (let i = 1; i <= 10; i++) {
        const multi = num1 * i;
        document.write(`<tr>`)
        document.write(`<td>${multi}</td>`)
        document.write(`</tr>`)
    }
}
document.write(`<table>`);
document.write(`<th>Tabla de multiplicacion</th>`)
tablaMulti(num1);
document.write(`</table>`);