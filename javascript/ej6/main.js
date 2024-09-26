//Numeros sumados
function numeros(num1, num2, num3) {
  const suma = num1 + num2 + num3;
  return suma;
}
const resultado = numeros(2, 5, 6);

console.log(resultado);

//Nombre 

function nombrecompleto(nombre, espacio, apellido1, espacio, apellido2) {
  const todojunto = nombre + espacio + apellido1 + espacio + apellido2;

  return todojunto;
}
espacio = " ";
const nombreentero = nombrecompleto("Pol", espacio, "Vara", espacio, "Guirado");
console.log(nombreentero);

//Numero mayor

function numeros(num1,num2){
    if (num1 > num2)
        return num1
    if (num2 > num1)
        return num2
}

const comparar = numeros (3,8)
console.log(comparar)