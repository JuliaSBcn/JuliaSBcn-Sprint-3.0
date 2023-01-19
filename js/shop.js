


// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;
let counter=0;


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let i = 0, productChosen, found = false;
    while (i < products.length && found == false) {

            if (products[i].id == id) {
                productChosen = products[i];
                found = true;
            }
        i++;
    }

    if (found == true) cartList.push(productChosen);

    console.table(cartList);
}

// Exercise 2
function cleanCart() {
cartList.length=0;
console.table(cartList);

}

// Exercise 3
function calculateTotal(cartList) {
    // Calculate total price of the cart using the "cartList" array
   let i,price = 0,total,totalPrice = 0;
   for(i=0;i < cartList.length;i++){

    price = cartList[i].price;
    totalPrice +=price;
   } 
  console.log(totalPrice);
}








// Exercise 4
function generateCart() {

    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let i, cartListItem, cartItem;
    for (i = 0; i < cartList.length; i++) {

            cartListItem = cartList[i];
            cartItem = cart.find(element => element.id === cartListItem.id);

            if (cartItem == undefined) {
                cartListItem.quantity = 1;
                    cartListItem.subTotal = cartListItem.price * cartListItem.quantity;
                    cartListItem.subTotalWithDiscount = "not available";
                    cart.push(cartListItem);

            } else {
                cartItem.quantity += 1;
                    cartItem.subTotal = cartItem.price * cartItem.quantity;
                    cartItem.subTotalWithDiscount = "not available";
            }
        
    }
applyPromotionsCart();
   console.table(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    let i, cartItem;
    for(i = 0; i < cart.length; i++) {

        cartItem = cart[i];

        if (cartItem.id == 1 && cartItem.quantity >= 3 ) {
                cartItem.subTotalWithDiscount = Number((10 * cartItem.quantity).toFixed(2));
        }

        if (cartItem.id == 3 && cartItem.quantity >= 10 ) {
                cartItem.subTotalWithDiscount = Number((2/3 * cartItem.price * cartItem.quantity).toFixed(2));
        }
    }

    console.table(cart);
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let i, list = "", cartItem, cartTotal = 0;
  for (i = 0; i < cart.length; i++) {

    cartItem = cart[i];

    list += "<tr>";
    list += "<th scope='row'>" +cartItem.name+ "</th>";
    list += "<td>" +cartItem.price+ "</td>";
    list += "<td>" +cartItem.quantity+ "</td>";
    if (cartItem.subTotalWithDiscount == "not available") {
      list += "<td>" +cartItem.subTotal+ "</td>";
      cartTotal += cartItem.subTotal;
    }else{
      list += "<td>" +cartItem.subTotalWithDiscount+ "</td>";
      cartTotal += cartItem.subTotalWithDiscount;
    }
    list +="</tr>";

  }
  document.getElementById("cart_list").innerHTML = list;
  document.getElementById("total_price").innerHTML = cartTotal.toFixed(2);
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal + Generate Cart");
    generateCart();
	printCart();
}