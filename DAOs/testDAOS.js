import { listIngredients, addIngredient, deleteIngredient } from "../DAOs/ingredientDAO.js";
import { listProteins, addProtein, deleteProtein } from "../DAOs/proteinDAO.js";
import { listUserOrders, addOrder, deleteOrder } from "../DAOs/orderDAO.js";
import { listSizes, getSizeById, addSize, deleteSize, updateQty, updateProteins, updateIngridients } from "../DAOs/sizeDAO.js";
import { getUserByEmail, changePassword, addUser, deleteUser } from "../DAOs/userDAO.js";
import { listOrderPokeBowls, addPokeBowl, deletePokeBowl } from "../DAOs/pokebowlDAO.js";
import User from "../objects/User.js";

// TEST TABLE USERS

const user = getUserByEmail("prova@mail.com");
console.log(user);

const user2 = new User("mail@mail", "name", "surname", "password");
addUser(user2);

deleteUser("mail@mail");

//
