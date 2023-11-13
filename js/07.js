/**Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

let numeroIngresadoUsuario = parseInt(prompt("Ingrese un número"));

function tablaMultiplicar(numeroIngresadoUsuario) {
  document.write(`<h2>Tabla de multiplicar del ${numeroIngresadoUsuario}</h2>`);
  document.write("<table>");
  document.write("<tr><th>Factor</th><th>Resultado</th></tr>");

  for (let i = 1; i <= 10; i++) {
    let resultado = numeroIngresadoUsuario * i;
    document.write(`<tr><td>${i}</td><td>${resultado}</td></tr>`);
  }

  document.write("</table>");
}

tablaMultiplicar(numeroIngresadoUsuario);
