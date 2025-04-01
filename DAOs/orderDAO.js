import Order from "../objects/Order.js";
import Database from "better-sqlite3";
import PokeBowl from "../objects/PokeBowl.js";
import { listOrderPokeBowls } from "./pokebowlDAO.js";
const db = new Database("db.sqlite");
db.pragma("journal_mode = WAL");

export const listUserOrders = (userId) => {
  let rows = db.prepare("SELECT * FROM ORDERS WHERE idUser = ?").all(userId);

  const orders = [];
  rows.forEach(row => {
    orders.push(new Order(row.totalPrice, row.notes, row.idUser, row.id));
  });

  orders.forEach(order => {
    order.listPokeBowl = listOrderPokeBowls(order.orderId);
  });
  
  return orders;
};

export const addOrder = (order) => {
    const stmt = db.prepare("INSERT INTO ORDERS (totalPrice, notes, idUser) VALUES (?, ?, ?)");
    return stmt.run(order.totalPrice, order.notes, order.userId).lastInsertRowid;
};

export const deleteOrder = (orderId) => {
  const stmt = db.prepare("DELETE FROM ORDERS WHERE idOrder = ?");
  stmt.run(orderId);
};
