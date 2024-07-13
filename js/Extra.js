/*
Desarrollar un sistema de cajero automático en JavaScript que permita al usuario realizar varias operaciones bancarias mediante un menú interactivo.
El usuario podrá consultar el saldo, realizar ingresos y egresos de dinero, y otras operaciones adicionales.
Al principio del programa declara una variable `saldo` inicial con un valor de $1000 (puedes elegir otro valor si prefieres).
las opciones que se mostrarán al usuario son: 1. Ver saldo de la cuenta. 2. Ingresar dinero. 3. Retirar dinero.
4. Ver últimas  transacciones. 5. Salir. Importante, el usuario puede realizar varias veces las operaciones del cajero.
*/
let saldo = 1000;
const transacciones = [];

function mostrarMenu() {
  alert(`Bienvenido al Cajero Automatico
        1. Ver saldo de la cuenta
        2. Ingresar dinero
        3. Retirar dinero
        4. Ver ultimas transacciones
        5. Salir`);
}
function verSaldo() {
  alert(`saldo disponible $${saldo}`);
}
function ingresarDinero() {
  let cantidad = parseInt(
    prompt(`ingrese la cantidad de dinero que quiere ingresar: `)
  );
  if (cantidad > 0) {
    saldo += cantidad;
    transacciones.push(`retiro: $${cantidad}`);
    alert(
      `has ingresado la cantidad de $${cantidad}. El nuevo saldo es $${saldo}`
    );
  } else {
    alert(`la cantidad debe ser mayor a 0`);
  }
}

function retirarDinero() {
  let cantidad = parseInt(prompt(`Ingrese la cantidad que desea retirar`));
  if (cantidad > 0 && cantidad <= saldo) {
    saldo -= cantidad;
    transacciones.push(`retiro: $${cantidad}`);
    alert(
      `Has Retirado la cantidad de: $${cantidad}. El nuevo saldo es $${saldo}`
    );
  } else if (cantidad > saldo) {
    alert(`Fondos insuficientes`);
  } else {
    alert(`la cantidad debe ser mayor que 0`);
  }
}

function verTransacciones() {
  let movimientos = ``;
  let mensajeMovimiento = 0;
  for (let i = movimientos.length; i > 0; i--) {
    movimientos += `---> ${mensajeMovimiento[i - 1]}/n`;
    if (mensajeMovimiento === 6) {
      movimientos += `.../n`;
    }
    mensajeMovimiento++;
  }
  alert(`ULTIMOS MOVIMIENTOS  ${movimientos}`);
}
function cajeroAutomatico() {
  let opcion;
  mostrarMenu();
  opcion = parseInt(prompt(`seleccione una opcion: `));
  switch (opcion) {
    case 1:
      verSaldo();
      break;
    case 2:
      ingresarDinero();
      break;
    case 3:
      retirarDinero();
      break;
    case 4:
      verTransacciones();
      break;
    case 5:
      alert(`Gracias por usar el cajero automatico, que tenga un lindo dia`);
      break;

    default:
      alert(`Seleccione una opcion valida (Entre 1 - 5)`);
      break;
  }
}

cajeroAutomatico();
