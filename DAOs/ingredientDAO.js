import Ingredient from '../objects/Ingredient.js';
import Database from 'better-sqlite3';
const db = new Database('../db.sqlite');
db.pragma('journal_mode = WAL');


export const listIngredients = () => {
    const rows = db.prepare('SELECT * FROM INGREDIENTS').all();

    const ingredients = [];
    rows.forEach(row => {
        ingredients.push(new Ingredient(row.id, row.name));
    });

    return ingredients;
}

export const addIngredient = (ingredient) => {
    const stmt = db.prepare("INSERT INTO INGREDIENTS (name) VALUES (?)");
    stmt.run(ingredient.name);
}

export const deleteIngredient = (id) => {
    const stmt = db.prepare("DELETE FROM INGREDIENTS WHERE id = ?");
    stmt.run(id);
}
