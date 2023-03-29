const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const ejs = require('ejs');

app.use('/public',express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const product1 = {
    name:"ice coffee",
    description:"ddddddddddddddddddd",
    price:70,
    image:"/public/image/iced-coffee.png"

}


app.get('/', (req, res) => {
        res.render('order-page', { product1 : product1 });
  });

app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});




