import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
}
