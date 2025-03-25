import sqlite3 from 'sqlite3';
import Order from '../objects/Order.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listUserOrders = async (userId) => {
    const orders = [];
    try {
        const rows = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM order WHERE idUser = ?', [userId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
 
        rows.forEach(row => {
            orders.push(new Order(row.id, row.totalPrice, row.notes, row.idUser));
        });

    } catch (err) {
        throw err;
    }

   orders.forEach(async (order) => {
         const pokeBowlRows = await new Promise((resolve, reject) => {
              db.all('SELECT * FROM pokebowls WHERE idOrder = ?', [order.id], (err, rows) => {
                if (err) {
                     reject(err);
                } else {
                     resolve(rows);
                }
              });
         });
    
         pokeBowlRows.forEach(pokeBowlRow => {
              order.addPokeBowl(pokeBowlRow);
         });
    });

   return orders;
}

export const addOrder = async (order) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('INSERT INTO order (totalPrice, notes, idUser) VALUES (?, ?, ?)', [order.totalPrice, order.notes, order.userId], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    } catch (err) {
        throw err;
    }
}

export const deleteOrder = async (userId) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM order WHERE idUser = ?', [userId], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    } catch (err) {
        throw err
    }
}