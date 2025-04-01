import Size from "../objects/Size.js";
import Database from "better-sqlite3";
const db = new Database("db.sqlite");
db.pragma("journal_mode = WAL");

export const listSizes = () => {
  const rows = db.prepare("SELECT * FROM SIZES").all();

  const sizes = [];
  rows.forEach((row) => {
    sizes.push(
      new Size(
        row.maxDayQty,
        row.maxProteins,
        row.maxIngredients,
        row.price,
        row.id
      )
    );
  });

  return sizes;
};

export const getSizeById = (id) => {
  const row = db.prepare("SELECT * FROM SIZES WHERE id = ?").get(id);
  return new Size(
    row.id,
    row.maxDayQty,
    row.maxProteins,
    row.maxIngredients,
    row.price
  );
};

export const addSize = (size) => {
  const stmt = db.prepare(
    "INSERT INTO SIZES (maxDayQty, maxProteins, maxIngredients, price) VALUES (?, ?, ?, ?)"
  );
  return stmt.run(
    size.maxDayQty,
    size.maxProteins,
    size.maxIngredients,
    size.price
  ).lastInsertRowid;
};

export const deleteSize = (id) => {
  const stmt = db.prepare("DELETE FROM SIZES WHERE ID = ?");
  stmt.run(id);
};

export const updateQty = (id, maxDayQty) => {
  const stmt = db.prepare("UPDATE SIZES SET maxDayQty = ? WHERE id = ?");
  stmt.run(maxDayQty, id);
};
