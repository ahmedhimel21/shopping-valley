import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import { getStoredCart, removeFromLS, saveToLS } from "../utilities/fakeDB";
import Cart from "./Cart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    let cartProduct = [];
    if (cart) {
      for (let id of storedCart) {
        const matchCartProduct = products.find((product) => product.id === id);
        cartProduct.push(matchCartProduct);
      }
    }
    setCart(cartProduct);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    saveToLS(product.id);
  };

  const handleRemove = (id) => {
    // remove from ls
    removeFromLS(id);
    // visually
    const remaining = cart.filter(item => item.id !== id);
    setCart(remaining);
  };

  return (
    <>
      <div className="mt-8">
        <div className="border border-purple-400  rounded-lg">
          <h1 className="text-xl font-semibold">Cart: {cart.length}</h1>
        </div>
        {cart.map((cartItem, index) => (
          <Cart
            key={index}
            cartItem={cartItem}
            handleRemove={handleRemove}
          ></Cart>
        ))}
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </>
  );
}
