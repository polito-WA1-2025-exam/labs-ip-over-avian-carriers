import { addProtein } from "../DAOs/proteinDAO.js";

export default class Protein {
  constructor(name, id = null) {
    this.name = name;
    if (id == null) {
      this.proteinId = addProtein(name);
    } else {
      this.proteinId = id;
    }
  }
}
