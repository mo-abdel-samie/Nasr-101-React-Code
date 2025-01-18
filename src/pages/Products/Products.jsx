import axios from "axios";
import { useEffect, useState } from "react";
import { MainApi } from "../../api/Api";
import { useProductContext } from "../../contexts/ProductContext";

export default function Products() {
  // const [productsDeactive, setProducts] = useState(null);
  const [testState, setTestState] = useState(true);
  const [singleProduct, setSingleProduct] = useState(null);

  const { products, getProducts, getSingleProduct } = useProductContext();

  useEffect(() => {
    getProducts(100);
  }, [testState]);

  console.log("Mount2");

  const handleShowSingleProduct = () => {
    getSingleProduct(1, (data) => {
      setSingleProduct(data);
    });
  };

  return (
    <div>
      <button onClick={handleShowSingleProduct}>Single Product</button>

      {singleProduct && (
        <div>
          <h2>{singleProduct.title}</h2>
        </div>
      )}

      {console.log("Render")}
      {!products && <div>Loading...</div>}
      {products &&
        products.map((product, i) => <div key={i}>{product.title}</div>)}
    </div>
  );
}
