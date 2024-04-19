import { useState } from "react";

function ProductPrice() {
  const [price, setPrice] = useState("");

  const ProductPriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <label className="productWord" htmlFor="price">
        판매가격
      </label>
      <form className="productprice">
        <input value={price} onChange={ProductPriceChange}></input>
      </form>
    </>
  );
}

export default ProductPrice;
