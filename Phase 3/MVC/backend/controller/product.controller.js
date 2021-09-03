//load the model -- user defined
//const { model } = require("mongoose");
let productModel = require("../model/product.model");

let getAllProductDetails = (req, res) => {
    productModel.find({}, (err, data) => {
        if (!err) {
            res.json(data);
        }
        else {
            res.json(err);
        }
    })
}

let storedProductInfo = (req, res) => {
    let product = req.body;
    productModel.insertMany(product, (err,result) =>{
        if (!err){
            res.send("Record stored successfully");
        }
        else {
            res.send(err);
        }
    })
}

model.exports = { getAllProductDetails,storedProductInfo }