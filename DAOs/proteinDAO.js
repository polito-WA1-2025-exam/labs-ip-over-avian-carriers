import sqlite3 from 'sqlite3';
import { Ingredient } from '../models/ingredient.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listProteins = async () => {
    try {
        const rows = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM proteins', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        const proteins = [];
        rows.forEach(row => {
            proteins.push(new Protein(row.id, row.name));
        });

        return proteins;
    } catch (err) {
        throw err;
    }
}

export const addProtein = async (protein) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('INSERT INTO proteins (id, name) VALUES (?, ?)', [protein.id, protein.name], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    } catch (err) {
        throw err;
    }
}

export const deleteProtein = async (proteinId) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM proteins WHERE id = ?', [proteindId], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    } catch (err) {
        throw err;
    }
}