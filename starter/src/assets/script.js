/* Array of products*/
let products = [];
/*  3 products objects:
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let baqlaweh = {
  name: "Baqlaweh",
  price: 95.5,
  quantity: 0,
  productId: 1,
  image: "/starter/src/images/baqlaweh.jpeg",
};
let kullaj = {
  name: "Kullaj",
  price: 16.5,
  quantity: 0,
  productId: 2,
  image: "/starter/src/images/kullaj.jpg",
};
let beinNarein = {
  name: "Bein Narein Knafah",
  price: 24.5,
  quantity: 0,
  productId: 3,
  image: "/starter/src/images/bein-narein-knafah.jpg",
};
/*Adding products to the array: */
products.push(baqlaweh);
products.push(kullaj);
products.push(beinNarein);

/* Array to hold the items in the cart */
let cart = [];

// This function finds the index of the product with given ID
function getProductIndexByID(ID) {
  return products.findIndex((product) => product.productId === ID);
}
// -----------------------
/* The function addProductToCart that takes in the product productId
   and if the product is not already in the cart, it adds it to the cart
*/
function addProductToCart(ID) {
  let productIndex = getProductIndexByID(ID);
  let addedProduct = products[productIndex];
  if (!cart.includes(addedProduct, 0)) {
    cart.push(addedProduct);
  }
  increaseQuantity(ID);
}

/* The function increaseQuantity that takes in the productId
and increases the product's quantity by 1
*/
function increaseQuantity(ID) {
  let productIndex = getProductIndexByID(ID);
  increasedProduct = products[productIndex];
  if (cart.includes(increasedProduct, 0)) {
    increasedProduct.quantity += 1;
  } else {
    addProductToCart(ID);
  }
}
/* The function decreaseQuantity that takes in the productId
  - It decreases the quantity of the product by 1
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(ID) {
  let productIndex = getProductIndexByID(ID);
  decreasedProduct = products[productIndex];
  if (cart.includes(decreasedProduct, 0)) {
    if (decreasedProduct.quantity === 1) removeProductFromCart(ID);
    else {
      decreasedProduct.quantity -= 1;
    }
  }
}
/* The function removeProductFromCart that takes in the productId
  - It updates the product quantity to 0
  - It removes the product from the cart
*/
function removeProductFromCart(ID) {
  let productIndex = getProductIndexByID(ID);
  removedProduct = products[productIndex];
  if (cart.includes(removedProduct, 0)) {
    removedProduct.quantity = 0;
    cart.splice(cart.indexOf(removedProduct), 1);
  }
}
/* The function named cartTotal that iterates through the cart to get
  the total cost of all products, and returns the total cost of the products in the cart
  */
let totalCost;
let costRemains = 0;
function cartTotal() {
  totalCost = costRemains;
  cart.forEach((product) => (totalCost += product.quantity * product.price));
  return totalCost;
}
/* The function emptyCart that empties the products from the cart array */
function emptyCart() {
  cart.forEach((product) => removeProductFromCart(product.productId));
  cart.length = 0;
}
/* The function pay that takes in an amount as an argument
  - amount is the money paid by customer
  - It will return a negative number if there is a remaining balance
  - It will return a positive number if money should be returned to customer
*/
function pay(amount) {
  remainder = amount - cartTotal();
  if (remainder >= 0) {
    costRemains = 0;
    // } else if (remainder > 0) {
    // costRemains = 0;
  } else if (remainder < 0) {
    costRemains = -1 * remainder;
  }
  emptyCart();
  return remainder;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};
