export default class User {
    constructor(email, name, surname) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }

    addOrder(order) {
        if (!this.historyOrders) {
            this.historyOrders = [];
        }
        this.historyOrders.push(order);
    }
}

function Users() {
    this.listUsers = [];

    this.addUser = (user) => {
        this.listUsers.push(user);
    }
}

