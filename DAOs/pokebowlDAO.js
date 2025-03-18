import sqlite3 from 'sqlite3';
import { PokeBowl } from '../models/PokeBowl.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listOrderPokeBowls = async (orderId) => {

    const pokeBowls = [];

    try {
        const rows = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM pokebowls WHERE idOrder = ?', [orderId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        
        rows.forEach(row => {
            pokeBowls.push(new PokeBowl(row.id, row.idSize, row.base, row.qty, row.idOrder));
        });

        
    } catch (err) {
        throw err;
    }

    // TO-DO - Add proteins and ingredients to each pokebowl by reading them from the database

    return pokeBowls;
}