import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import LocalStrategy from 'passport-local';
//import { ExpressValidator } from 'express-validator';
import { listUserOrders, addOrder, deleteOrder } from './DAOs/orderDAO.js';
import { listProteins, addProtein, deleteProtein } from './DAOs/proteinDAO.js';
import { listIngredients, addIngredient, deleteIngredient } from './DAOs/ingredientDAO.js';
import { listSizes, getSizeById, addSize, deleteSize, updateQty } from './DAOs/sizeDAO.js';
import { listOrderPokeBowls, addPokeBowl, deletePokeBowl } from './DAOs/pokebowlDAO.js';
import { getUser, getUserByEmail } from './DAOs/userDAO.js';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };
  app.use(cors(corsOptions));

/*** Set up Passport ***/
// set up the "username and password" login strategy
// by setting a function to verify username and password
passport.use(new LocalStrategy(
    async function(username, password, done) {
     const user =  await getUser(username, password);
     if(user){
        return done(null, user);
     } else {
        return done(null, false, { message: 'Incorrect username or password.' });
     }
    }
));
  
  // serialize and de-serialize the user (user object <-> session)
  // we serialize only the user id and store it in the session
passport.serializeUser((user, done) => {
  done(null, user.email); // Store only the user's email in the session
});
  
  // starting from the data in the session, we extract the current (logged-in) user
passport.deserializeUser((email, done) => {
    const user = getUserByEmail(email);
    if(user){
        return done(null, user);
    } else {
        done(new Error('User not found during deserialization'));
    }

});
  
  // custom middleware: check if a given request is coming from an authenticated user
const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated())
      return next();
    
    return res.status(401).json({ error: 'Not authenticated'});
}
  
  // set up the session
app.use(session({
    // by default, Passport uses a MemoryStore to keep track of the sessions
    secret: 'hkfc674cxdkytvdfs09',   // change this random string, should be a secret value
    resave: false,
    saveUninitialized: false
}));
  
// then, init passport
app.use(passport.initialize());
app.use(passport.session());

app.post('/sessions', function(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err)
        return next(err);
        if (!user) {
          // display wrong login messages
          return res.status(401).json(info);
        }
        // success, perform the login
        req.login(user, (err) => {
          if (err)
            return next(err);
          
          // req.user contains the authenticated user, we send all the user info back
          // this is coming from userDao.getUser()
          return res.json(req.user);
        });
    })(req, res, next);
  });

app.delete('/sessions/current', (req, res) => {
    req.logout( ()=> { res.end(); } );
  });  

/*#region USERS - The Old APIs related to managing users
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
//#endregion*/

//#region ORDERS
app.get('/orders/:email', isLoggedIn, (req, res) => {
    const email = req.params.email;
    //console.log(userId);
    const orders = listUserOrders(email);
    res.json(orders);
});

app.post('/orders/:email', isLoggedIn, (req, res) => {
    const { totalPrice, notes } = req.body;
    const userId = req.params.email;
    //console.log(totalPrice, notes, userId);
    const order = { totalPrice, notes, userId };
    const orderId = addOrder(order);
    res.json( orderId );
});

app.delete('/orders/:orderId', isLoggedIn, (req, res) => {
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

app.get('/pokebowls/:idOrder', isLoggedIn, (req, res) => {
    const idOrder = req.params.idOrder;
    const pokebowls = listOrderPokeBowls(idOrder);
    res.json(pokebowls);
})

app.post('/pokebowls/:orderId', isLoggedIn, (req, res) => {
    const {sizeId, base, qty} = req.body;
    const orderId = req.params.orderId;
    const pokeBowl = {sizeId, base, qty, orderId};
    const id = addPokeBowl(pokeBowl);
    res.json({id});
});

app.delete('/pokebowls/:id', isLoggedIn, (req, res) => {
    const id = req.params.id;
    deletePokeBowl(id);
    res.status(200).end();
});


app.listen(3000, ()=>console.log("server started on port 3000"));