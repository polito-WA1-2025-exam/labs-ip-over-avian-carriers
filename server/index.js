import express from 'express';
import morgan from 'morgan';
import { getUserByEmail, changePassword, addUser, deleteUser } from '../DAOs/userDAO.js';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res)=>res.send("Hello"));

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

app.put('/user', (req, res) => {
    const { email, name, surname, password } = req.body;
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

app.listen(3000, ()=>console.log("server started"));