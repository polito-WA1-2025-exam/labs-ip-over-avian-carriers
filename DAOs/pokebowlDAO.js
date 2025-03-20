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

    pokeBowls.forEach(pokeBowl => async () => {
        pokeBowl.ingredients = await new Promise((resolve, reject) => {
            db.all('SELECT name FROM POKEBOWLS P, POKEBOWLS_INGREDIENTS PI, INGREDIENTS I WHERE P.id = PI.idPokeBowls AND I.id = PI.idIngredients AND P.id = ?', [pokeBowl.id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
        pokeBowl.ingredients = await new Promise((resolve, reject) => {
            db.all('SELECT name FROM POKEBOWLS PO, POKEBOWLS_PROTEINS PR, PROTEINS PRO WHERE PO.id = PR.idPokeBowls AND PRO.id = PR.idProteins AND P.id = ?', [pokeBowl.id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    });

    return pokeBowls;
}

export const addPokeBowl = async (pokeBowl) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('INSERT INTO pokebowls (idSize, base, qty, idOrder) VALUES (?, ?, ?, ?)', [pokeBowl.sizeId, pokeBowl.base, pokeBowl.qty, pokeBowl.orderId], function (err) {
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

export const deletePokeBowl = async (pokeBowlId) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM pokebowls WHERE id = ?', [pokeBowlId], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    } catch (err) {
        throw err;
    }
}

export const updatePokeBowl = async (pokeBowl) => {
    try{
        await new Promise((resolve, reject) => {
            db.run('UPDATE pokebowls SET idSize = ?, base = ?, qty = ?, idOrder = ? WHERE id = ?', [pokeBowl.sizeId, pokeBowl.base, pokeBowl.qty, pokeBowl.orderId, pokeBowl.id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    }catch (err) {
        throw err;
    }
};