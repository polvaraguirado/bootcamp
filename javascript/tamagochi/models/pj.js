import Rest from './rest.js';
import Combat from './combat.js';
import Hunger from './hunger.js';
import Entertainment from './entertainment.js';

export default class Pj {
    REST_POINTS_INIT = 100;
    COMBAT_POINTS_INIT = 100;
    HUNGER_POINTS_INIT = 100;
    ENTERTAINMENT_POINTS_INIT = 100;

    
    rest = new Rest(this.REST_POINTS_INIT);
    entertainment = new Entertainment(this.ENTERTAINMENT_POINTS_INIT)
    combat = new Combat(this.COMBAT_POINTS_INIT);
    hunger = new Hunger(this.HUNGER_POINTS_INIT)

    constructor() {     
        
    }
}