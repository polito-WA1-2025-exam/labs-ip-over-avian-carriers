import { addIngredient } from "../DAOs/ingredientDAO.js";

export default class Ingredient {
  constructor(name, id = null) {
    this.name = name;
    if (id == null) {
      this.ingredientId = addIngredient(name);
    } else {
      this.ingredientId = id;
    }
  }
}
