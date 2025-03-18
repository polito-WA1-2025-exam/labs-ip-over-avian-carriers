import sqlite3 from 'sqlite3';
import { Ingredient } from '../objects/ingredient.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listIngredients = async () => {
    try {
        const rows = await new Promise((resolve, reject) => {
            db.all('SELECT * FROM ingredients', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        const ingredients = [];
        rows.forEach(row => {
            ingredients.push(new Ingredient(row.id, row.name));
        });

        return ingredients;
    } catch (err) {
        throw err;
    }
}

export const addIngredient = async (ingredient) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('INSERT INTO ingredients (id, name) VALUES (?, ?)', [ingredient.ingredientId, ingredient.name], (err) => {
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

export const deleteIngredient = async (ingredientId) => {
    try {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM ingredients WHERE id = ?', [ingredientId], (err) => {
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
