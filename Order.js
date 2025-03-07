function Order(totalPrice, notes) {
    this.uniqueId = generateUniqueId();
    this.listPokeBowl = [];
    this.totalPrice = totalPrice;
    this.notes = notes;

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