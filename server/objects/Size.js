import { addSize } from "../DAOs/sizeDAO.js";

export default class Size {
  constructor(maxDayQty, maxProteins, maxIngredients, price, id) {
    this.maxDayQty = maxDayQty;
    this.maxProteins = maxProteins;
    this.maxIngredients = maxIngredients;
    this.price = price;
    if (id == null) {
      this.sizeId = addSize(this);
    } else {
      this.sizeId = id;
    }
  }
}
