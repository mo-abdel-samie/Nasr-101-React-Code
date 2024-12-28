import axios from "axios";
import { useEffect, useState } from "react";
import { MainApi } from "../../api/Api";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [testState, setTestState] = useState(true);

  useEffect(() => {
    MainApi.get("/products?limit=10").then(({ data }) => {
      setProducts(data.products);
    });
  }, [testState]);

  console.log("Mount2");

  return (
    <div>
      <button onClick={() => setTestState((prev) => !prev)}>
        Change State
      </button>
      {console.log("Render")}
      {!products && <div>Loading...</div>}
      {products &&
        products.map((product, i) => <div key={i}>{product.title}</div>)}
    </div>
  );
}
