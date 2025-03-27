import Order from "../objects/Order.js";
import Database from "better-sqlite3";
const db = new Database("../db.sqlite");
db.pragma("journal_mode = WAL");

//TODO

export const listUserOrders = (id) => {
    //TODO, NOT WORKING
  let rows = db.prepare("SELECT * FROM ODERS WHERE id = ?").all(id);

  const orders = [];
  rows.forEach(row => {
    orders.push(new Order(row.id, row.totalPrice, row.notes, row.idUser));
  });

  const idOrder =   orders[0].id;
  rows = db.prepare('SELECT * FROM POKEBOWLS WHERE idOrder = ?').all(idOrder);
  rows.forEach( row => {
    order.addPokeBowl(new PokeBowl(row.id, row.idSize, row.base, row.qty, ro));
  })

  

  return new Promise((resolve, reject) => {
    if (userId != null) {
      const orders = [];
      db.all("SELECT *orders; FROM ORDERS WHERE idUser = ?", [userId], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          rows.forEach((row) => {
            orders.push(
              new Order(row.id, row.totalPrice, row.notes, row.idUser)
            );
          });

          orders.forEach(async (order) => {
            await db.all(
              "SELECT * FROM POKEBOWLS WHERE idOrder = ?",
              [order.id],
              (err, rows) => {
                if (err) {
                  reject(err);
                } else {
                  rows.forEach((row) => {
                    order.addPokeBowl(row["id"]);
                  });
                }
              }
            );
          });
          resolve(orders);
        }
      });
    } else {
      reject(new Error("userId is null"));
    }
  });
};

export const addOrder = (order) => {
    const stmt = db.prepare("INSERT INTO ORDERS (totalPrice, notes, idUser) VALUES (?, ?, ?)");
    stmt.run(order.totalPrice, order.notes, order.userId);
};

export const deleteOrder = (idUser) => {
  const stmt = db.prepare("DELETE FROM ORDERS WHERE idUser = ?");
  stmt.run(idUser);
};
