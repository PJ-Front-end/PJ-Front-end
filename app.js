const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const ejs = require('ejs');
const session = require('express-session')
const { connect } = require('./config/db')
const { user } = require('./model/user');
const User = require('./model/user').user;

const MongoStore = require('connect-mongo');

app.use('/public',express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

connect();
app.use(session({
    secret:'fdbfskdjf',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:3600000},
    store:MongoStore.create({
        mongoUrl:'mongodb://100.25.143.129:8089/frontend',
        dbName : "frontend"
    })
}))

const item = [{
    id:1,
    name:"chocolate smoothie",
    category:"DRINK",
    price:120,
    image:"/public/image/chocksmooth.jpeg"
},
{
    id:2,
    name:"matcha pistachio",
    category:"DRINK",
    price:200,
    image:"/public/image/matcha.png"
},
{
    id:3,
    name:"Orange smoothie",
    category:"DRINK",
    price:70,
    image:"/public/image/OrangeSmoothie.jpeg"
},
{
    id:4,
    name:"cake roll",
    category:"DESSERT",
    price:70,
    image:"/public/image/cakeroll.jpeg"
},
{
    id:5,
    name:"Panda Cake",
    category:"DESSERT",
    price:70,
    image:"/public/image/CoconutPandan.jpeg"
},
{
    id:6,
    name:"lemon cake",
    category:"DESSERT",
    price:70,
    image:"/public/image/lemoncake.jpeg"
}
]

app.get('/', (req, res) => {
    res.render('signup')
  });

//save data to db
app.post('/signin', async(req, res) => {
    const {name, lastname, email, password} = req.body;
    const newUser = new User({ name: name, lastname: lastname, email: email, password: password });
    await newUser.save(); 
    req.session.userId = newUser.id;
    res.redirect('/login')
  })

  app.get('/login', (req, res) => {
    res.render('login')
  });

  app.post('/login', async(req, res) => {
    const { name, password } = req.body;
    const founduser = await User.findOne({ name: name, password: password });
    if (founduser) {
        req.session.userId = founduser.id;
        res.render('categories',{item})
    } else {
        res.render('login', { error: 'Invalid email or password' });
    }
});
app.get('/info', (req, res) => {
    res.render('information');
});
app.get('/cart', (req, res) => {
    res.render('cart');
});
app.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const product1 = item[itemId-1];
    res.render('order-page', { product1 });
});




app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});


