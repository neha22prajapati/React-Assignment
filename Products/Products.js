import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts({ data: data }))
      .catch((e) => setProducts({ error: e }));
  }, []);

  console.log(products.data);

  return (
    <div className="products">
      {products.data ? (
        <ul>
          {products.data.map((product) => {
            return (
              <ProductList
                id={product.id}
                image={product.image}
                title={product.title}
                ratingRate={product.rating.rate}
                ratingCount={product.rating.count}
                price={product.price}
                key={product.id}
              />
            );
          })}
        </ul>
      ) : (
        <h2>Some Error Occurred!</h2>
      )}
    </div>
  );
};

export default Products;
