function User(email, name, surname, password) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.password = password;
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