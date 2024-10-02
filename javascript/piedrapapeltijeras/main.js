function mostrarjuego() {
    document.getElementById("oculto").style.display = 'block'; 
}
function jugar() {
    const opciones = ["piedra", "papel", "tijeras"];
    const eleccionJugador = document.getElementById("opcion").value;
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (eleccionJugador === eleccionComputadora) {
        resultado = "Empate ➖";
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijeras" && eleccionComputadora === "papel")
    ) {
        resultado = "Has ganado, " + eleccionJugador + " gana a " + eleccionComputadora +"✅";
    } else {
        resultado = "Has perdido, " + eleccionComputadora + " gana a " + eleccionJugador +"❌";
    }
    document.getElementById("eleccioncomputer").textContent = "La IA escoge "+eleccionComputadora;

    document.getElementById("resultado").textContent = resultado;
}