import { addPokeBowl } from "../DAOs/pokebowlDAO.js";
import { getSizeById } from "../DAOs/sizeDAO.js";

export default class PokeBowl{
    constructor(sizeId, base, qty, orderId, pokeBowlId = null) {
        this.sizeId = sizeId;
        this.base = base;
        this.orderId = orderId;
        this.proteins = [];
        this.ingredients = [];
        this.qty = qty;
        if(pokeBowlId == null){
            this.pokeBowlId = addPokeBowl(this);
        }
        else{
            this.pokeBowlId = pokeBowlId;
        }
    }

    addProtein = (protein) => {
        if (this.proteins.length >= getSizeById(this.sizeId).maxProteins) {
            //no se puede agregar mas proteinas
            return;
        }
        else {
            this.proteins.push(protein);
        }
    }

    addIngredient = (ingredient) => {
        if (this.ingredients.length >= getSizeById(this.sizeId).maxIngridients) {
            //no se puede agregar mas ingredientes
            return;
        }
        else {
            this.ingredients.push(ingredient);
        }
    }

    checkMinIngredients = () => {
        if (this.ingredients.length < 1) { //check that there is at least one ingredient
            return false;
        }
        return true;
    }
}