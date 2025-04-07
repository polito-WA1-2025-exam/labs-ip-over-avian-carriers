import PokeBowl from "../objects/PokeBowl.js";
import Ingredient from "../objects/Ingredient.js";
import Protein from "../objects/Protein.js";
import Database from "better-sqlite3";
const db = new Database("../db.sqlite");
db.pragma("journal_mode = WAL");

export const listOrderPokeBowls = (idOrder) => {
  const pokeBowls = [];
  let rows = db
    .prepare("SELECT * FROM POKEBOWLS WHERE idOrder = ?")
    .all(idOrder);
  rows.forEach((row) => {
    pokeBowls.push(
      new PokeBowl(row.idSize, row.base, row.qty, row.idOrder, row.id)
    );
  });

  pokeBowls.forEach((pokeBowl) => {
    rows = db
      .prepare(
        "SELECT I.id, I.name FROM POKEBOWLS P, POKEBOWLS_INGREDIENTS PI, INGREDIENTS I WHERE P.id = PI.idPokeBowls AND I.id = PI.idIngredients AND P.id = ?"
      )
      .all(pokeBowl.pokeBowlId);
    rows.forEach((row) => {
      pokeBowl.ingredients.push(new Ingredient(row.id, row.name));
    });

    rows = db
      .prepare(
        "SELECT PRO.id, PRO.name FROM POKEBOWLS P, POKEBOWLS_PROTEINS PR, PROTEINS PRO WHERE P.id = PR.idPokeBowls AND PRO.id = PR.idProteins AND P.id = ?"
      )
      .all(pokeBowl.pokeBowlId);
    rows.forEach((row) => {
      pokeBowl.proteins.push(new Protein(row.id, row.name));
    });
  });

  return pokeBowls;
};

export const addPokeBowl = (pokeBowl) => {
  const stmt = db.prepare(
    "INSERT INTO POKEBOWLS (idSize, base, qty, idOrder) VALUES (?, ?, ?, ?)"
  );
  const id = stmt.run(
    pokeBowl.sizeId,
    pokeBowl.base,
    pokeBowl.qty,
    pokeBowl.orderId
  ).lastInsertRowid;
  pokeBowl.pokeBowlId = id;
};

export const deletePokeBowl = (pokeBowlId) => {
  let stmt = db.prepare("DELETE FROM POKEBOWLS WHERE id = ?");
  stmt.run(pokeBowlId);
  stmt = db.prepare("DELETE FROM POKEBOWLS_INGREDIENTS WHERE idPokeBowls = ?");
  stmt.run(pokeBowlId);
  stmt = db.prepare("DELETE FROM POKEBOWLS_PROTEINS WHERE idPokeBowls = ?");
  stmt.run(pokeBowlId);
};
