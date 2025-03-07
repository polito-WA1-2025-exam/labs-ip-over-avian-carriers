function PokeBowl(sizeUniqueId, base, qty) {
    this.uniqueId = generateUniqueId();
    this.sizeUniqueId = sizeUniqueId;
    this.base = base;
    this.proteins = [];
    this.ingridients = [];
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

    this.addIngridient = (ingridient) => {
        if (this.ingridients.length >= this.size.maxIngridients) {
            //no se puede agregar mas ingredientes
            return;
        }
        else {
            this.ingridients.push(ingridient);
        }
    }

    this.checkMinIngredients = () => {
        if (this.ingridients.length < 1) { //check that there is at least one ingredient
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