async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  let index = userCart.findIndex((item) => item.name == name);

  let novoCart = userCart[index];
  // if (index != 1){} userCart.splice(index, 1);

  for (const item in novoCart) {
    if (novoCart[item] === quantity) novoCart[item]--;
  }
}

async function removeItem(userCart, index) {
  const deleteIndex = index - 1;
  //é a maior do que - e menor do que o carrinho
  if ((index) => 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`Valor do carrinho - R$${result}`);
}

async function displayCart(useCart) {
  console.log("====================================");
  console.log(`Shopee Cart`);
  console.log("====================================");
  useCart.forEach((element, index) => {
    console.log(`${index + 1}. ${element.name}- R$${element.price} |
       Quantity: ${element.quantity} | Subtotal  : ${element.subtotal()}
        `);
  });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
