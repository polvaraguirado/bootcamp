//Sustituir por cervezas

const comida = ["🍔", "🥙", "🍣", "🍕", "🍜", "🥗", "🍙", "🍚", "🥑"];
console.log(comida.fill("🍺", 4, comida.length));

//Encontrar piña en el array

const piña = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(piña.includes("🍍"));

//Quita la piña del array

const pizzas = ["🍕", "🍕", "🍍", "🍕", "🍕"];
pizzas.splice(2, 1);
console.log(pizzas);

//Fresas a setas

const fresas = ["🍓", "🍋", "🍓", "🍋", "🍓"];

fresas.forEach((elemento, indice) => {
  if (elemento === "🍓") {
    fresas[indice] = "🍄";
  }
});

console.log(fresas);

//Añadir emoji picante

const picante = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];

picante.forEach((elemento, indice) => {
  if (elemento === "🌶️") {
    picante.splice(indice + 1, 0, "🥵");
  }
});

console.log(picante);

//Añadir joker

const joker = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
joker.forEach((elemento, indice) => {
  if (elemento === "🎴") {
    joker.splice(indice + 1, 1, "🃏");
  }
});
console.log(joker);
