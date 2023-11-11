/**2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
 */

const ciudadesIngresadaUsuario = [];

while (true) {
  let ciudadIngresada = prompt("Ingrese una Ciudad");
  if (ciudadIngresada === null) {
    break;
  }
  if (isNaN(Number(ciudadIngresada))) {
    ciudadesIngresadaUsuario.push(ciudadIngresada);
  } else {
    alert("Los datos ingresados no son validos no deben contener numeros ");
  }
}
document.write("<h2>Listado de Ciudades</h2>");
document.write("<ul>");
for (let i = 0; i < ciudadesIngresadaUsuario.length; i++) {
  document.write(`<li>${ciudadesIngresadaUsuario[i]}</li>`);
}
document.write("</ul>");

document.write(
  `<p>La longitud del arreglo es de : ${ciudadesIngresadaUsuario.length} elementos </p>`
);
document.write(`<p>Primera posición: ${ciudadesIngresadaUsuario[0]}</p>`);
document.write(`<p>Tercera posición: ${ciudadesIngresadaUsuario[2]}</p>`);
document.write(
  `<p>Ultima posición: ${
    ciudadesIngresadaUsuario[ciudadesIngresadaUsuario.length - 1]
  }</p>`
);
ciudadesIngresadaUsuario.push("Paris");
document.write(`<p>Primera posición: ${ciudadesIngresadaUsuario[1]}</p>`);

ciudadesIngresadaUsuario.splice(1, 1, "Barcelona");
document.write("<h2>Listado de Ciudades Nuevo</h2>");
document.write("<ul>");
for (let i = 0; i < ciudadesIngresadaUsuario.length; i++) {
  document.write(`<li>${ciudadesIngresadaUsuario[i]}</li>`);
}
document.write("</ul>");
