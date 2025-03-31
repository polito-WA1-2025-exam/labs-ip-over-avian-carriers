import Order from "../objects/Order.js";
import Database from "better-sqlite3";
const db = new Database("../db.sqlite");
db.pragma("journal_mode = WAL");


export const listUserOrders = (id) => {

  let rows = db.prepare("SELECT * FROM ORDERS WHERE id = ?").all(id);

  const orders = [];
  rows.forEach(row => {
    orders.push(new Order(row.id, row.totalPrice, row.notes, row.idUser));
  });

  orders.forEach(order => {
    const ro = db.prepare('SELECT * FROM POKEBOWLS WHERE idOrder = ?').all(order.id);
    ro.forEach(row => {
      order.addPokeBowl(new PokeBowl(row.id, row.idSize, row.base, row.qty, idOrder));
    });
  })
  
  return orders;
};

export const addOrder = (order) => {
    const stmt = db.prepare("INSERT INTO ORDERS (totalPrice, notes, idUser) VALUES (?, ?, ?)");
    stmt.run(order.totalPrice, order.notes, order.userId);
};

export const deleteOrder = (idUser) => {
  const stmt = db.prepare("DELETE FROM ORDERS WHERE idUser = ?");
  stmt.run(idUser);
};
