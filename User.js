function User() {
    this.uniqueId = generateUniqueId();
    this.historyOrders = [];

    this.addOrder = (order) => {
        this.historyOrders.push(order);
    }
}

function Users() {
    this.listUsers = [];

    this.addUser = (user) => {
        this.listUsers.push(user);
    }
}