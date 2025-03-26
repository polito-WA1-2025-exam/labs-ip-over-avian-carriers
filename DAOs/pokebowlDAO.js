import sqlite3 from 'sqlite3';
import PokeBowl from '../objects/PokeBowl.js';
import Ingredient from '../objects/Ingredient.js';
import Protein from '../objects/Protein.js';

const db = new sqlite3.Database('db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    }
});

export const listOrderPokeBowls = (orderId) => {
    const pokeBowls = [];
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM pokebowls WHERE idOrder = ?', [orderId], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                rows.forEach(row => {
                    pokeBowls.push(new PokeBowl(row.id, row.idSize, row.base, row.qty, row.idOrder));
                });

                pokeBowls.forEach(pokeBowl => async () => {
                    pokeBowl.ingredients = await new Promise((resolve, reject) => {
                        db.all('SELECT (id, name) FROM POKEBOWLS P, POKEBOWLS_INGREDIENTS PI, INGREDIENTS I WHERE P.id = PI.idPokeBowls AND I.id = PI.idIngredients AND P.id = ?', [pokeBowl.id], (err, rows) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(rows);
                            }
                        });
                    });
                    rows.forEach(row => {
                        pokeBowl.ingredients.push(new Ingredient(row.id, row.name));
                    });


                    pokeBowl.proteins = await new Promise((resolve, reject) => {
                        db.all('SELECT (id, name) FROM POKEBOWLS PO, POKEBOWLS_PROTEINS PR, PROTEINS PRO WHERE PO.id = PR.idPokeBowls AND PRO.id = PR.idProteins AND P.id = ?', [pokeBowl.id], (err, rows) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(rows);
                            }
                        });
                    });
                    rows.forEach(row => {
                        pokeBowl.proteins.push(new Protein(row.id, row.name));
                    });
                });

                resolve(rows);
            }
        });
    });
}

export const addPokeBowl = (pokeBowl) => {    
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO pokebowls (idSize, base, qty, idOrder) VALUES (?, ?, ?, ?)', [pokeBowl.sizeId, pokeBowl.base, pokeBowl.qty, pokeBowl.orderId], function (err) {
                if (err) {
                    reject(err);
                } else {
                    pokeBowl.ingredients.forEach(async (ingredient) => {
                        try {
                            await new Promise((resolve, reject) => {
                                db.run('INSERT INTO pokebowls_ingredients (idPokeBowls, idIngredients) VALUES (?, ?)', [pokeBowl.id, ingredient.id], function (err) {
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
                    });
                
                    pokeBowl.proteins.forEach(async (protein) => {
                        try {
                            await new Promise((resolve, reject) => {
                                db.run('INSERT INTO pokebowls_proteins (idPokeBowls, idProteins) VALUES (?, ?)', [pokeBowl.id, protein.id], function (err) {
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
                    });

                    resolve(this.lastID);
                }
            });
        });
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