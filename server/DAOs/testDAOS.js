import { listIngredients, addIngredient, deleteIngredient } from "../DAOs/ingredientDAO.js";
import { listProteins, addProtein, deleteProtein } from "../DAOs/proteinDAO.js";
import { listUserOrders, addOrder, deleteOrder } from "../DAOs/orderDAO.js";
import { listSizes, getSizeById, addSize, deleteSize, updateQty} from "../DAOs/sizeDAO.js";
import { getUserByEmail, changePassword, addUser, deleteUser } from "../DAOs/userDAO.js";
import { listOrderPokeBowls, addPokeBowl, deletePokeBowl } from "../DAOs/pokebowlDAO.js";
import User from "../objects/User.js";
import Size from "../objects/Size.js"
import Ingredient from "../objects/Ingredient.js";
import PokeBowl from "../objects/PokeBowl.js";
import Protein from "../objects/Protein.js";
import Order from "../objects/Order.js";

/*
const orders = listUserOrders("prova@mail.com");
console.log(orders);

const pokeBowl = new PokeBowl(1, "rice", 1, 1);
const bowls = listOrderPokeBowls(1);
console.log(bowls);
*/

/*
pokeBowl.addIngredient(new Ingredient(0, "Avocado"));
pokeBowl.addProtein(new Protein(0, "Tuna"));


deletePokeBowl(5);


const ingredient = new Ingredient("Pop-Corns");
deleteIngredient(10);
deleteIngredient(9);



const proteins = listProteins();
const protein = new Protein("Crab");
deleteProtein(6);
deleteProtein(7);
deleteProtein(8);
deleteProtein(9);
deleteProtein(10);
deleteProtein(11);



let size1 = new Size(1, 1, 1, 1);

const sizes = listSizes();
console.log(sizes);

const size2 = getSizeById(0);
console.log(size2);


deleteSize(16);
updateQty(0, 10);
*/

const orders = listUserOrders("prova@mail.com");
console.log(orders);


//const order = new Order(20.50, "niente", "prova@mail.com");


