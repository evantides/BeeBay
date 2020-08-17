const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type:String, required: true},
    price: {type:Number, required: true},
    quantity: {type:Number, required: true},
    forSale: Boolean
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;