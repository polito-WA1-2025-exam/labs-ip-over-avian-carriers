import Sizes from './Size.js';

function PokeBowl(pokeBowlId, sizeId, base, qty, orderId) {
    this.pokeBowlId = pokeBowlId;
    this.sizeId = sizeId;
    this.base = base;
    this.orderId = orderId;
    this.proteins = [];
    this.ingredients = [];
    this.qty = qty;

    this.addProtein = (protein) => {
        if (this.proteins.length >= this.size.maxProteins) {
            //no se puede agregar mas proteinas
            return;
        }
        else {
            this.proteins.push(protein);
        }
    }

    this.addIngredient = (ingredient) => {
        if (this.ingredients.length >= this.size.maxIngredients) {
            //no se puede agregar mas ingredientes
            return;
        }
        else {
            this.ingredients.push(ingredient);
        }
    }

    this.checkMinIngredients = () => {
        if (this.ingredients.length < 1) { //check that there is at least one ingredient
            return false;
        }
        return true;
    }
}

function PokeBowls() {
    this.listPokeBowls = [];

    this.addPokeBowl = (pokeBowl) => {
        this.listPokeBowls.push(pokeBowl);
    }
}

export default { PokeBowl, PokeBowls };