// Sustituir A por O

function reemplazo(palabra) {
  return palabra.replace(/a/g, "o");
}
const resultado = reemplazo("casamiento");
console.log(resultado);

// Comprobar si empieza por aca o no

function comprobar(palabra) {
  if (palabra.startsWith("aca")) {
    console.log(palabra, "empieza por aca");
  } else {
    console.log(palabra, "no empieza por aca");
  }
}
comprobar("academia");
comprobar("escuela");

//Saludar 3 veces

function saludar(palabra) {
  if (palabra === "Hola") {
    return palabra.repeat(3); 

  } else{
    return ('No te saludo')
  }
}

const resultado2 = saludar("Hola");
console.log(resultado2);
