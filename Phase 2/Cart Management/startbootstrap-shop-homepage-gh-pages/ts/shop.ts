//typescipt file for shopping cart
let cart_size: number = 0;
class Product {
    constructor(public name:string,public price:number){
        this.name = name;
        this.price = price;
    }
}

let product1 = new Product('Halloween Bats', 10.00);
let product2 = new Product('Bee Heart', 10.00);
let product3 = new Product('Camping Bears', 10.00);
let product4 = new Product('Sunset Friends', 10.00);
let product5 = new Product('Birthday Cat', 10.00);
let product6 = new Product('Baby Fox', 10.00);
let product7 = new Product('Humpty Dumpty', 10.00);
let product8 = new Product('Baby Peacock', 10.00);
//array of 8 products
const products: Product[]=[];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);
products.push(product6);
products.push(product7);
products.push(product8);
//cart array for user to add products to
const cart: Product[]=[];
let table = document.getElementById("cart_table");

function add(index: number){
    console.log('added to cart');
    console.log(index);
    console.log(products[index]);
    //update number of items in cart
    cart_size++;
    document.getElementById("cart_size").innerHTML = cart_size.toString();
    //add product to cart array
    cart.push(products[index]);
    sessionStorage.setItem(products[index].name, JSON.stringify(products[index]));
    localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout(){
    let total_price: number = 0;
    let checkout_cart = JSON.parse(localStorage.getItem("cart"));
    console.log(checkout_cart);
    let my_table = document.getElementById("cart_table");
    let tbody = document.createElement("tbody");
    my_table.appendChild(tbody);
    for (let i = 0; i < checkout_cart.length; i++){
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let curr_product_name = checkout_cart[i].name;
        cell.textContent =curr_product_name;
        row.appendChild(cell);
        let curr_product_price = checkout_cart[i].price;
        total_price += curr_product_price;
        let cell2 = document.createElement("td");
        cell2.textContent =curr_product_price;
        row.appendChild(cell2);
        tbody.appendChild(row);
    }
    document.getElementById("total").innerHTML = "Total : " + total_price.toString();

}