import createItem from "./services/item.js";
import * as cartervice from "./services/cart.js"

let myCart = [];

console.log("Welcome to shopee backend");

const item1 = await createItem("pc", 2500, 2)
const item2 = await createItem("pc 2 ", 2500, 5)

await cartervice.addItem(myCart, item1)
await cartervice.addItem(myCart, item2)


console.log(item1.subtotal());

console.log("Total do meu Cart");


await cartervice.calculateTotal(myCart)

console.log(myCart)
await cartervice.deleteItem(myCart, item1.name)
console.log(myCart)

await cartervice.calculateTotal(myCart)
