import express from 'express';
import morgan from 'morgan';
import { ExpressValidator } from 'express-validator';
import { getUserByEmail, changePassword, addUser, deleteUser } from '../DAOs/userDAO.js';
import { listUserOrders, addOrder, deleteOrder } from '../DAOs/orderDAO.js';
import { listProteins, addProtein, deleteProtein } from '../DAOs/proteinDAO.js';
import { listIngredients, addIngredient, deleteIngredient } from '../DAOs/ingredientDAO.js';
import { listSizes, getSizeById, addSize, deleteSize, updateQty } from '../DAOs/sizeDAO.js';
import { listOrderPokeBowls, addPokeBowl, deletePokeBowl } from '../DAOs/pokebowlDAO.js';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res)=>res.send("Hello"));

//#region USERS
app.get('/user/:email', (req, res)=>{
    const email = req.params.email;
    //console.log(email);
    const user = getUserByEmail(email);
    res.json(user);
});

app.patch('/user/:email', (req, res) => {
    const email = req.params.email;
    const password = req.body.password;
    //console.log(email, password);
    changePassword(email, password);
    res.status(200).end();
});

app.post('/user/:email', (req, res) => {
    const { name, surname, password } = req.body;
    const email = req.params.email;
    //console.log(email, name, surname, password);
    const user = { email, name, surname, password };
    addUser(user);
    res.status(200).end();
});

app.delete('/user/:email', (req, res) => {
    const email = req.params.email;
    deleteUser(email);
    res.status(200).end();
});
//#endregion

//#region ORDERS
app.get('/orders/:email', (req, res) => {
    const email = req.params.email;
    //console.log(userId);
    const orders = listUserOrders(email);
    res.json(orders);
});

app.post('/orders/:email', (req, res) => {
    const { totalPrice, notes } = req.body;
    const userId = req.params.email;
    //console.log(totalPrice, notes, userId);
    const order = { totalPrice, notes, userId };
    const orderId = addOrder(order);
    res.json( orderId );
});

app.delete('/orders/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    //console.log(orderId);
    deleteOrder(orderId);
    res.status(200).end();
});
//#endregion

//#region PROTEINS
app.get('/proteins', (req, res) => {
    const proteins = listProteins();
    res.json(proteins);
});

app.post('/proteins', (req, res) => {
   const name = req.body.name; 
   const id = addProtein(name);
   res.json({id}); 
});

app.delete('/proteins/:id', (req, res) => {
    const id = req.params.id;
    deleteProtein(id);
    res.status(200).end();
});
//#endregion

//#region INGREDIENTS
app.get('/ingredients', (req, res) => {
    const ingredients = listIngredients();
    res.json(ingredients);
});

app.post('/ingredients', (req, res) => {
    const name = req.body.name;
    const id = addIngredient(name);
    res.json(id);
})

app.delete('/ingredients/:id', (req, res) => {
    const id = req.params.id;
    deleteIngredient(id);
    res.status(200).end();
});
//#endregion

//#region SIZES
app.get('/sizes', (req, res) => {
    const sizes = listSizes();
    res.json(sizes);
});

app.get('/sizes/:id', (req, res) => {
    const id = req.params.id;
    const size = getSizeById(id);
    res.json(size);
});

app.post('/sizes', (req, res) => {
    const { maxDayQty, maxProteins, maxIngredients, price} = req.body;
    const size = { maxDayQty, maxProteins, maxIngredients, price };
    const id = addSize(size);
    res.json(id);
});

app.delete('/sizes/:id', (req, res) =>{
    const id = req.params.id;
    deleteSize(id);
    res.status(200).end();
});

app.patch('/sizes/:id', (req, res) => {
    const id = req.params.id;
    const maxDayQty = req.body.maxDayQty;
    updateQty(id, maxDayQty);
    res.status(200).end();
});
//#endregion

app.get('/pokebowls/:idOrder', (req, res) => {
    const idOrder = req.params.idOrder;
    const pokebowls = listOrderPokeBowls(idOrder);
    res.json(pokebowls);
})

app.post('/pokebowls/:orderId', (req, res) => {
    const {sizeId, base, qty} = req.body;
    const orderId = req.params.orderId;
    const pokeBowl = {sizeId, base, qty, orderId};
    const id = addPokeBowl(pokeBowl);
    res.json({id});
});

app.delete('/pokebowls/:id', (req, res) => {
    const id = req.params.id;
    deletePokeBowl(id);
    res.status(200).end();
});


app.listen(3000, ()=>console.log("server started"));