import PokeBowl from '../objects/PokeBowl.js';
import Ingredient from '../objects/Ingredient.js';
import Protein from '../objects/Protein.js';
import Database from 'better-sqlite3';
const db = new Database('../db.sqlite');
db.pragma('journal_mode = WAL');


export const listOrderPokeBowls = (idOrder) => {
    const pokeBowls = [];
    const rows = db.prepare('SELECT * FROM POKEBOWLS WHERE idOrder = ?').get(idOrder);
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
    const stmt = db.prepare('INSERT INTO POKEBOWLS (idSize, base, qty, idOrder) VALUES (?, ?, ?, ?)')
    stmt.run(pokeBowl.sizeId, pokeBowl.base, pokeBowl.qty, pokeBowl.orderId)
        
    pokeBowl.ingredients.forEach(ingredient => {
        stmt = db.prepare('INSERT INTO POKEBOWLS_INGREDIENTS (idPokeBowls, idIngredients) VALUES (?, ?)')
        stmt.run(pokeBowl.id, ingredient.id)
    });
                
    pokeBowl.proteins.forEach(async (protein) => {
        stmt = db.prepare('INSERT INTO POKEBOWLS_PROTEINS (idPokeBowls, idProteins) VALUES (?, ?)')
        stmt.run(pokeBowl.id, protein.id);
    });
}

export const deletePokeBowl = async (pokeBowlId) => {
    const stmt = db.prepare('DELETE FROM POKEBOWLS WHERE id = ?');
    stmt.run(pokeBowlId);
    stmt = db.prepare('DELETE FROM POKEBOWLS_INGREDIENTS WHERE idPokeBowls = ?');
    stmt.run(pokeBowlId);
    stmt = db.prepare('DELETE FROM POKEBOWLS_PROTEINS WHERE idPokeBowls = ?');
    stmt.run(pokeBowlId);
}


