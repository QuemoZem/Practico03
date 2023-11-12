/**Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:

 */

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function experimentoDados() {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  return dado1 + dado2;
}

let frecuencias = [];
for (let i = 0; i < 11; i++) {
  frecuencias.push(0);
}

for (let i = 0; i < 50; i++) {
  let suma = experimentoDados();
  frecuencias[suma - 2]++;
}

document.write("<table>");
document.write("<thead><tr><th>Suma</th><th>Frecuencia</th></tr></thead>");
document.write("<tbody>");

for (let i = 0; i < frecuencias.length; i++) {
  document.write(`<tr><td>${i + 2}</td><td>${frecuencias[i]}</td></tr>`);
}

document.write("</tbody>");
document.write("</table>");
