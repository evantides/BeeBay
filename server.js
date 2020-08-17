//EXPRESS STUFF
const express = require('express');
const methodOverride = require("method-override");
const app = express();
const favicon = require('express-favicon');



//port
const portProcess = process.env.PORT || 3000;

//mongoose / mongoURI variables
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://dbAdminUser:${process.env.MONGO_PASSWORD}@cluster0.mv4s8.azure.mongodb.net/store-SEIR?retryWrites=true&w=majority`
//connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


//specific products declaration
// MUST BE AFTER MONGOOSE CONNECTION AND BEFORE POST
const Product = require('./models/products.js');
const Seed = require('./models/seed.js');

//MIDDLEWARE
app.use(express.urlencoded({extended:true})); // body parser
app.use(express.static("public")); //sets root as public... for CSS and whatnot
app.set('view engine', 'jsx'); //view
app.engine('jsx', require('express-react-views').createEngine()); //engine
app.use(methodOverride("_method"));
app.use(favicon('/public/favicon-16x16.png'));
console.log(favicon)

// SEED ROUTE
app.get('/products/seed', (req,res) => {
    Product.create(Seed, (err, data) => {
        res.redirect('/products')
    })
})

// I N D U C E S //

//redirects to index...
app.get('/', function(req, res){
    res.redirect('/products');
});

// Index
app.get("/products",(req,res) => {
    Product.find({}, (error, allProducts) => {
        res.render("Index", {
            products: allProducts
        });
    });
});

// New
app.get('/products/new', (req, res)=>{
    res.render('New');
});


// Delete

// Update

// Create
app.post("/products", (req, res) => {
    if (req.body.quantity === 0) {
        req.body.forSale = false;
    } else {
        req.body.forSale = true;
    }
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/products');
    })
});

// Edit

//BUY BUTTON (patch) DOES NOT WORK
app.patch('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct)=> {
        console.log(foundProduct.quantity)
        if (foundProduct.quantity > 0) {
            foundProduct.quantity -= 1;
        } else {
            foundProduct.quantity = 0;
            foundProduct.forSale = false;
        }
        Product.updateOne({'_id': req.params.id}, {$set: {"quantity": foundProduct.quantity, "forSale" : foundProduct.forSale}}, (err, result)=> {
            console.log(err);
        });
    });
    res.redirect('/products');
})

// Show
app.get('/products/:id', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        res.render('Show', {
            product:foundProduct
        });
    });
});

//Listen!!!
app.listen(portProcess, () => {
    console.log('listening');
})
