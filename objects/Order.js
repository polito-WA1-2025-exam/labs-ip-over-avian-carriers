function Order(orderId, totalPrice, notes, userId) {
    this.orderId = orderId;
    this.listPokeBowl = [];
    this.totalPrice = totalPrice;
    this.notes = notes;
    this.userId = userId;

    this.addPokeBowl = (pokeBowl) => {
        this.listPokeBowl.push(pokeBowl);
    }
}

function Orders() {
    this.listOrders = [];

    this.addOrder = (order) => {
        this.listOrders.push(order);
    }
}

module.exports = { Order, Orders}