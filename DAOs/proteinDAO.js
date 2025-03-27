import Protein from '../objects/Protein.js';
import Database from 'better-sqlite3';
const db = new Database('../db.sqlite');
db.pragma('journal_mode = WAL');


export const listProteins = () => {
    const rows = db.prepare('SELECT * FROM PROTEINS').all();

    const proteins = [];
    rows.forEach(row => {
        proteins.push(new Protein(row.id, row.name));
    })
}

export const addProtein = (protein) => {
    const stmt = db.prepare('INSERT INTO PROTEINS (name) VALUES (?)');
    stmt.run(protein.name);
}

export const deleteProtein = (id) => {
   const stmt = db.prepare('DELETE FROM PROTEINS WHERE id=?');
   stmt.run(id);
}