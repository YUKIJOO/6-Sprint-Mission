import { useState } from "react";

function Productintroduction() {
  const [introduction, setIntroduction] = useState("");

  const ProductIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <>
      <label className="productWord" htmlFor="introduction">
        상품 소개
      </label>
      <form className="producintroduction">
        <input
          value={introduction}
          onChange={ProductIntroductionChange}
        ></input>
      </form>
    </>
  );
}

export default Productintroduction;
