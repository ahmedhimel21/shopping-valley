const getStoredCart = () =>{
  const storedCart = localStorage.getItem('cart');
  if(storedCart){
    return JSON.parse(storedCart);
  }
  return [];
}

const saveToLS = (id) =>{
  const cart = getStoredCart();
  cart.push(id);
  addToLS(cart)
}

const addToLS = (cart) =>{
 const cartStringified = JSON.stringify(cart);
 localStorage.setItem('cart', cartStringified)
}

const removeFromLS = (id) =>{
  const storedCart = getStoredCart();
  const remaining = storedCart.filter(idx => idx !== id);
  addToLS(remaining)
}

export {saveToLS, getStoredCart, removeFromLS }