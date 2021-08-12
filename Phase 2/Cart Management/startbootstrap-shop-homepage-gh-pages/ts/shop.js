//typescipt file for shopping cart
var cart_size = 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
//products[]
//product.push(Product)
//(onClick) cart.push(Product)
var product1 = new Product('Halloween Bats', 10.00);
var product2 = new Product('Bee Heart', 10.00);
var product3 = new Product('Camping Bears', 10.00);
var product4 = new Product('Sunset Friends', 10.00);
var product5 = new Product('Birthday Cat', 10.00);
var product6 = new Product('Baby Fox', 10.00);
var product7 = new Product('Humpty Dumpty', 10.00);
var product8 = new Product('Baby Peacock', 10.00);
var products = [];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
var cart = [];
function add(index) {
    console.log('added to cart');
    console.log(index);
    console.log(products[index]);
    cart_size++;
    document.getElementById("cart_size").innerHTML = cart_size.toString();
    //session storage products[index]
    cart.push(products[index]);
}
