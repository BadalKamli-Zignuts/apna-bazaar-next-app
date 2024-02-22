// pages/index.js
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./products/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-center text-4xl font-bold m-5">All products</h1>
        <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:flex-wrap md:space-x-5">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
