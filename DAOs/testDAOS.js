import { listIngredients, addIngredient, deleteIngredient } from "../DAOs/ingredientDAO.js";
import { listProteins, addProtein, deleteProtein } from "../DAOs/proteinDAO.js";
import { listUserOrders, addOrder, deleteOrder } from "../DAOs/orderDAO.js";
import { listSizes, getSizeById, addSize, deleteSize, updateQty, updateProteins, updateIngredients } from "../DAOs/sizeDAO.js";
import { getUserByEmail, changePassword, addUser, deleteUser } from "../DAOs/userDAO.js";
import { listOrderPokeBowls, addPokeBowl, deletePokeBowl } from "../DAOs/pokebowlDAO.js";
import User from "../objects/User.js";
import Size from "../objects/Size.js"
import Ingredient from "../objects/Ingredient.js";

// TEST TABLE USER
deleteUser("mail@mail");


/* const ingredients = await listUserOrders("prova@mail.com");
console.log(ingredients);
 */
//
