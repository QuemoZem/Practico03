/**Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */
let cadena = prompt("Ingrese una cadena de texto");

function verificarStrings(cadena) {
  let tieneMayusculas = /[A-Z]/.test(cadena);
  let tieneMinusculas = /[a-z]/.test(cadena);

  if (tieneMayusculas && tieneMinusculas) {
    document.write("La cadena tiene Mayúsculas y Minúsculas");
  } else if (tieneMayusculas) {
    document.write("La cadena tiene letras en Mayúsculas");
  } else if (tieneMinusculas) {
    document.write("La cadena tiene letras en Minúsculas");
  } else {
    document.write("La cadena no contiene letras o contiene otros caracteres");
  }
}

verificarStrings(cadena);
