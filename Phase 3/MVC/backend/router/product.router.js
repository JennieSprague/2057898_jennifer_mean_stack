//load the express module
let express = require("express");
//create router ref to route to controller function
//based upon the path
let router = express.Router();
let productController = require("../controller/product.controller");
//(path, function name)
router.get("/getAllProductDetails", productController.getAllProductDetails);
router.post("/storeProduct",productController.storedProductInfo);
module.exports = router;