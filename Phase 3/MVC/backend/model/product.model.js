let mongoose = require("mongoose");

//avoid creating in lower case with s postfix
mongoose.pluralize(null);
//create the schema
let productSchema = mongoose.Schema({
    _id: Number,
    pname: String,
    price: Number
});

//using schema create model
//1st param collection name
//2nd param schema ref
let productModel = mongoose.model("Product", productSchema);

//we can import using require
module.exports = productModel;
