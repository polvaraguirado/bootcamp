import Pj from "./models/pj.js";
import Utils from "./utils.js";

class Init {
  // Models
  _pj = new Pj();
  _utils = new Utils();

  //Containers
  _percentajeHungerContainer;
  _percentageEntertainmentContainer;
  _percentageCombatContainer;
  _percentageRestContainer;

  constructor() {
    this.initializeContainers();
    this.initizeButtonsUI();
    this.lifeCycle();
  }

  bigIncrement() {
    let MAX_VALUE = 35;
    let MIN_VALUE = 20;
    return Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE);
  }

  smallIncrement() {
    let MAX_VALUE = 13;
    let MIN_VALUE = 2;
    return Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE);
  }

  lifeCycle() {
    let PERCENTAGE_LOWER_STATS = 2;
    setInterval(() => {
      this._pj.hunger.hungerPointsDown(
        this._utils.percentage(
          this._pj.hunger._hungerPoints,
          PERCENTAGE_LOWER_STATS
        )
      );
      this._pj.combat.combatPointsDown(
        this._utils.percentage(
          this._pj.combat._combatPoints,
          PERCENTAGE_LOWER_STATS
        )
      );
      this._pj.entertainment.entertainmentPointsDown(
        this._utils.percentage(
          this._pj.entertainment._entertainmentPoints,
          PERCENTAGE_LOWER_STATS
        )
      );
      this._pj.rest.restPointsDown(
        this._utils.percentage(
          this._pj.rest._restPoints,
          PERCENTAGE_LOWER_STATS
        )
      );
      
      if (this._pj.hunger._hungerPoints > 100) {
        this._pj.hunger._hungerPoints= "hole que tal"
      }
      this._utils.updateValue(this._percentajeHungerContainer, this._pj.hunger._hungerPoints);
      this._utils.updateValue(this._percentageEntertainmentContainer, this._pj.entertainment._entertainmentPoints);
      // this.utils.updateValue(this._percentageCombatContainer, this._pj.combat._combatPoints);
      // this.utils.updateValue(this._percentageRestContainer, this._pj.rest._restPoints);
    }, 2000);
  }

  initializeContainers() {
    this._percentajeHungerContainer = document.getElementById(
      "percentajeHungerContainer"
    );
    this._percentageEntertainmentContainer = document.getElementById(
      "percentageEntertainmentContainers"
    );
  }

  initizeButtonsUI() {
    document
      .getElementById("bigIncrementButtonHunger")
      .addEventListener("click", () => {
        this._pj.hunger.hungerPointsUp(this.bigIncrement());
        this._utils.updateValue(this._percentajeHungerContainer, this._pj.hunger._hungerPoints);
      });
    document
      .getElementById("smallIncrementButtonHunger")
      .addEventListener("click", () => {
        this._pj.hunger.hungerPointsUp(this.smallIncrement());
        this._utils.updateValue(this._percentajeHungerContainer, this._pj.hunger._hungerPoints);

      });
    document
      .getElementById("bigIncrementButtonEntertainment")
      .addEventListener("click", () => {
        this._pj.entertainment.entertainmentPointsUp(this.bigIncrement());
        this._utils.updateValue(this._percentageEntertainmentContainer, this._pj.entertainment._entertainmentPoints);
      });
    document
      .getElementById("smallIncrementButtonEntertainment")
      .addEventListener("click", () => {
        this._pj.entertainment.entertainmentPointsUp(this.smallIncrement());
        this._utils.updateValue(this._percentageEntertainmentContainer, this._pj.entertainment._entertainmentPoints);
      });
    document
      .getElementById("bigIncrementButtonCombat")
      .addEventListener("click", () => {
        this._pj.combat.combatPointsUp(this.bigIncrement());
      });
    document
      .getElementById("smallIncrementButtonCombat")
      .addEventListener("click", () => {
        this._pj.combat.combatPointsUp(this.smallIncrement());
      });
    document
      .getElementById("bigIncrementButtonRest")
      .addEventListener("click", () => {
        this._pj.rest.restPointsUp(this.bigIncrement());
      });
    document
      .getElementById("smallIncrementButtonRest")
      .addEventListener("click", () => {
        this._pj.rest.restPointsUp(this.smallIncrement());
      });
  }
}
new Init();
