import sqlite3 from 'sqlite3';
import Order from '../objects/Order.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listUserOrders = (userId) => {
    return new Promise((resolve, reject) => {
        if (userId != null) {
            const orders = [];
            db.all('SELECT * FROM ORDERS WHERE idUser = ?', [userId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    rows.forEach(row => {
                        orders.push(new Order(row.id, row.totalPrice, row.notes, row.idUser));
                    });

                    orders.forEach(async (order) => {
                        await db.all('SELECT * FROM POKEBOWLS WHERE idOrder = ?', [order.id], (err, rows) => {
                            if (err) {
                                reject(err);
                            } else {
                                rows.forEach(row => {
                                    order.addPokeBowl(row["id"]);
                                });
                            }
                        });
                    });
                    resolve(orders);
                }
            });
        }
        else{
            reject(new Error("userId is null"));
        }
    });
}

export const addOrder = (order) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO ORDERS (totalPrice, notes, idUser) VALUES (?, ?, ?)', [order.totalPrice, order.notes, order.userId], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
}

export const deleteOrder = (userId) => {

    return new Promise((resolve, reject) => {
        db.run('DELETE FROM ORDERS WHERE idUser = ?', [userId], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
}