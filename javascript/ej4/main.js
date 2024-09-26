function saludar(nombre, apellidos) {
  console.log(nombre, apellidos);
}
saludar("Pol", "Vara Guirado");

function dni() {
  dni = true;
  console.log(dni);
}
dni();

function mostrarNumeros(...numeros) {
  numeros.forEach((numero) => {
    console.log(numero);
  });
}
mostrarNumeros(1, 2, 3, 4, 5);
