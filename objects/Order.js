export default class Order{
    constructor(orderId, totalPrice, notes, userId) {
        this.orderId = orderId;
        this.listPokeBowl = [];
        this.totalPrice = totalPrice;
        this.notes = notes;
        this.userId = userId;

        addPokeBowl = (pokeBowl) => {
            this.listPokeBowl.push(pokeBowl);
        }
    }
}

function Orders() {
    this.listOrders = [];

    this.addOrder = (order) => {
        this.listOrders.push(order);
    }
}

