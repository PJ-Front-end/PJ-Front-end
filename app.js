const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const ejs = require('ejs');

app.use('/public',express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

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
    
    res.render('categories', { item });
  });

  
app.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const product1 = item[itemId-1];
    res.render('order-page', { product1 });
});
 

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});




