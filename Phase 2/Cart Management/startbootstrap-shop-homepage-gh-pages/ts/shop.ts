//typescipt file for shopping cart
class Product {
    constructor(public name:string,public price:number){
        this.name = name;
        this.price = price;
    }
}

//products[]
//product.push(Product)
//(onClick) cart.push(Product)
let product1 = new Product('Halloween Bats', 10.00);
let product2 = new Product('Bee Heart', 10.00);
let product3 = new Product('Camping Bears', 10.00);
let product4 = new Product('Sunset Friends', 10.00);
let product5 = new Product('Birthday Cat', 10.00);
let product6 = new Product('Baby Fox', 10.00);
let product7 = new Product('Humpty Dumpty', 10.00);
let product8 = new Product('Baby Peacock', 10.00);

const products: Product[]=[];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
const cart: Product[]=[];

function add(index: number){
    console.log('added to cart');
    console.log(index);
    console.log(products[index]);
    //session storage products[index]
    cart.push(products[index]);
}