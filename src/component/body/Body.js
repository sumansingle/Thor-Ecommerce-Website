import React from "react";
import { PRODUCTS } from "../Product";
import { Product } from "../body/ProductPage";

export const Body = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Body;