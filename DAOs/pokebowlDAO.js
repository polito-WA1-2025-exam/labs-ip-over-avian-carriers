import PokeBowl from '../objects/PokeBowl.js';
import Ingredient from '../objects/Ingredient.js';
import Protein from '../objects/Protein.js';
import Database from 'better-sqlite3';
const db = new Database('../db.sqlite');
db.pragma('journal_mode = WAL');


export const listOrderPokeBowls = (idOrder) => {
    const pokeBowls = [];
    const rows = db.prepare('SELECT * FROM pokebowls WHERE idOrder = ?').get(idOrder);
    rows.forEach(row => {
        pokeBowls.push(new PokeBowl(row.id, row.idSize, row.base, row.qty, row.idOrder));
    });

    pokeBowls.forEach(pokeBowl => {
        rows = db.prepare('SELECT (id, name) FROM POKEBOWLS P, POKEBOWLS_INGREDIENTS PI, INGREDIENTS I WHERE P.id = PI.idPokeBowls AND I.id = PI.idIngredients AND P.id = ?').get(pokeBowl);
        rows.forEach(row => {
            pokeBowl.ingredients.push(new Ingredient(row.id, row.name));
        });

        rows = db.prepare('SELECT (id, name) FROM POKEBOWLS PO, POKEBOWLS_PROTEINS PR, PROTEINS PRO WHERE PO.id = PR.idPokeBowls AND PRO.id = PR.idProteins AND P.id = ?').get(pokeBowl);
        rows.forEach(row => {
            pokeBowl.proteins.push(new Ingredient(row.id, row.name));
        });

        });
}

export const addPokeBowl = (pokeBowl) => {    
    const stmt = db.prepare('INSERT INTO pokebowls (idSize, base, qty, idOrder) VALUES (?, ?, ?, ?)')
    stmt.run(pokeBowl.sizeId, pokeBowl.base, pokeBowl.qty, pokeBowl.orderId)
        
    pokeBowl.ingredients.forEach(ingredient => {
        stmt = db.prepare('INSERT INTO pokebowls_ingredients (idPokeBowls, idIngredients) VALUES (?, ?)')
        stmt.run(pokeBowl.id, ingredient.id)
    });
                
    pokeBowl.proteins.forEach(async (protein) => {
        stmt = db.prepare('INSERT INTO pokebowls_proteins (idPokeBowls, idProteins) VALUES (?, ?)')
        stmt.run(pokeBowl.id, protein.id);
    });
}

export const deletePokeBowl = async (pokeBowlId) => {
    const stmt = db.prepare('DELETE FROM pokebowls WHERE id = ?');
    stmt.run(pokeBowlId);
}

/*

Irrelevant. The user decides wheter or not to modify his bowls through UI.
Once the users has decided to purchase the bowls and has sent the order via app,
in the db are stored the bowls with the order.
So it is not needed to have a query that updates the bowls.

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
*/