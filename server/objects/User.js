export default class User {
    constructor(email, name, surname, password) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
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

