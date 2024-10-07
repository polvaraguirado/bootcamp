const tema2 = document.getElementById("tema2");

// Escucha cuando el radio del tema 2 sea seleccionado
tema2.addEventListener("change", function () {
  // Remueve otros temas que puedan estar activos
  document.body.classList.remove("tema1", "tema3");

  // Aplica el tema 2
  document.body.classList.add("tema2");
});

// También puedes agregar detección para otros temas
const tema1 = document.getElementById("tema1");
const tema3 = document.getElementById("tema3");

tema1.addEventListener("change", function () {
  document.body.classList.remove("tema2", "tema3");
  document.body.classList.add("tema1");
});

tema3.addEventListener("change", function () {
  document.body.classList.remove("tema1", "tema2");
  document.body.classList.add("tema3");
});
