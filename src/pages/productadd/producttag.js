import { useState } from "react";
import "./producttag.css";

function ProductTag() {
  const [tag, setTag] = useState("");

  const ProductTagChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <>
      <label className="productWord" htmlFor="tag">
        판매가격
      </label>
      <form className="producttag">
        <input value={tag} onChange={ProductTagChange}></input>
      </form>
    </>
  );
}

export default ProductTag;
