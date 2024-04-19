import "./product.css";
import Productname from "./productname";
import Productintroduction from "./productintroduction";
import ProductPrice from "./productprice";
import ProductTag from "./producttag";

function productaddpage() {
  return (
    <>
      <div>
        <Productname />
      </div>
      <div>
        <Productintroduction />
      </div>
      <div>
        <ProductPrice />
      </div>
      <div>
        <ProductTag />
      </div>
    </>
  );
}

export default productaddpage;
