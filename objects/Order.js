import { addOrder } from "../DAOs/orderDAO.js";

export default class Order {
  constructor(totalPrice, notes, userId, orderId) {
    this.listPokeBowl = [];
    this.totalPrice = totalPrice;
    this.notes = notes;
    this.userId = userId;

    if (orderId == null) {
      this.orderId = addOrder(this);
    } else {
      this.orderId = orderId;
    }
  }
}
