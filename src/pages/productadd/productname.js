import { useState } from "react";

function Productname() {
  const [name, setName] = useState("");

  const ProductNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <label htmlFor="name">상품명</label>
      <form className="productname">
        <input value={name} onChange={ProductNameChange}></input>
      </form>
    </>
  );
}

export default Productname;
