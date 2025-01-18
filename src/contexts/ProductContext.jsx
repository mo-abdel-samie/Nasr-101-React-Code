import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { MainApi } from "../api/Api";

const ProductContext = createContext({
  products: null,
  getProducts: () => {},
  getSingleProduct: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getProducts = (limit = 10) => {
    MainApi.get(`/products?limit=${limit}`).then(({ data }) => {
      setProducts(data.products);
    });
  };

  const getSingleProduct = (id = 1, cb) => {
    MainApi.get(`/products/${id}`).then(({ data }) => {
      cb(data);
    });
  };

  return (
    <ProductContext.Provider
      value={{ products, getProducts, getSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
