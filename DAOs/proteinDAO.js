import Protein from "../objects/Protein.js";
import Database from "better-sqlite3";
const db = new Database("../db.sqlite");
db.pragma("journal_mode = WAL");

export const listProteins = () => {
  const rows = db.prepare("SELECT * FROM PROTEINS").all();

  const proteins = [];
  rows.forEach((row) => {
    proteins.push(new Protein(row.name, row.id));
  });
};

export const addProtein = (proteinName) => {
  const stmt = db.prepare("INSERT INTO PROTEINS (name) VALUES (?)");
  return stmt.run(proteinName).lastInsertRowid;
};

export const deleteProtein = (id) => {
  const stmt = db.prepare("DELETE FROM PROTEINS WHERE id=?");
  stmt.run(id);
};
