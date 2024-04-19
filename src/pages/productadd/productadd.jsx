import React, { useRef, useState } from "react";
import "./product.css";

function productadd() {
  const [product, setProduct] = useState({ image: "" });

  const inputImgRef = useRef(null);

  const handleImgChange = () => {
    const file = inputImgRef.current.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
  };

  const onClickInput = () => {
    inputImgRef.current.click();
  };

  return (
    <>
      <productImg>
        <label htmlFor="=image">상품이미지</label>
        <ProductImgInputContainer>
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg,.jepg,.png,.gif"
            ref={inputImgRef}
            onChange={handleImgChange}
          />
          <ProductImgInputBtn type="button" onClick={onClickInput}>
            <img src={imgUploadBtn} alt="이미지 추가하기" />
          </ProductImgInputBtn>
          {product.image && (
            <ProductImgPreview
              src={product.image}
              alt="상품 미리보기"
              onClick={onClickInput}
            />
          )}
        </ProductImgInputContainer>
      </productImg>
      <productname></productname>
    </>
  );
}
