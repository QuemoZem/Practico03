/**Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

let primerLado = parseInt(prompt("Ingrese cuanto mide un lado del rectángulo"));
let segundoLado = parseInt(prompt("Ingrese el segundo lado del rectángulo"));

if (isNaN(primerLado) || isNaN(segundoLado)) {
  alert("Por favor, ingrese valores numéricos.");
} else {
  function calcularPerimetro(primerLado, segundoLado) {
    let resultado = 2 * (primerLado + segundoLado);
    return resultado;
  }

  let resultadoPerimetro = calcularPerimetro(primerLado, segundoLado);
  document.write(`El perímetro de su rectángulo es: ${resultadoPerimetro}`);
}
