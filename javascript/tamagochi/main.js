function incrementomayor(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  class PorcentajeManager {
    constructor() {

      this.porcentaje = parseInt(localStorage.getItem('porcentaje')) || 0;
      this.porcentajeElement = document.getElementById('porcentaje');
      this.botonMayorElement = document.getElementById('incrementomayor');
      this.botonMenorElement = document.getElementById('incrementomenor');
  
      this.actualizarUI();
  
      this.botonMayorElement.addEventListener('click', () => this.incrementarPorcentajeMayor());
      this.botonMenorElement.addEventListener('click', () => this.incrementarPorcentajeMenor());
  
      this.iniciarDescuento();
    }
  
    incrementarPorcentajeMayor() {
      const incremento = incrementomayor(20, 35);
      this.porcentaje = Math.min(this.porcentaje + incremento, 100);
      localStorage.setItem('porcentaje', this.porcentaje.toString());


      this.actualizarUI();
    }
  
    incrementarPorcentajeMenor() {
      const incremento = incrementomayor(2, 13);
      this.porcentaje = Math.min(this.porcentaje + incremento, 100);
      localStorage.setItem('porcentaje', this.porcentaje.toString());
      this.actualizarUI();
    }
  
    iniciarDescuento() {
      setInterval(() => {
        if (this.porcentaje > 0) {
          this.porcentaje = Math.max(this.porcentaje - 1, 0);
          localStorage.setItem('porcentaje', this.porcentaje.toString());
          this.actualizarUI();
        }
      }, 2000);
    }
  
    actualizarUI() {
      this.porcentajeElement.textContent = `${this.porcentaje}% saciado`;
      if (this.porcentaje >= 100) {
        this.botonMayorElement.disabled = true;
        this.botonMenorElement.disabled = true;
      } else {
        this.botonMayorElement.disabled = false;
        this.botonMenorElement.disabled = false;
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new PorcentajeManager();
  });
  