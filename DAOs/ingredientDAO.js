import sqlite3 from 'sqlite3';
import Ingredient from '../objects/Ingredient.js';
const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listIngredients = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM ingredients', (err, rows) => {
            if (err) {
                reject();
            } else {
                const ingredients = [];
                rows.forEach(row => {
                    ingredients.push(new Ingredient(row.id, row.name));
                });
                resolve(ingredients);
            }
        });
    });
}

export const addIngredient = (ingredient) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO ingredients (name) VALUES (?)', [ingredient.name], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
}

export const deleteIngredient = (ingredientId) => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM ingredients WHERE id = ?', [ingredientId], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
}
