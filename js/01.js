/**1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */

const mesesAño = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Semptiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.write("<h2> Listado de Meses</h2>");
document.write("<ul>");
for (let i = 0; i < mesesAño.length; i++) {
  document.write(`<li>${mesesAño[i]}</li>`);
}
document.write("</ul>");
