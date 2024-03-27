import React from 'react';

const ProductCard = () => {
  return (
    <div>
      <img
        className='card-img'
        src='https://noona-hnm.netlify.app/pattern-jacket.jpeg'
        alt='상품사진'
      ></img>
      <div>Concioust choice</div>
      <div>상품명</div>
      <div>가격</div>
      <div>신상</div>
    </div>
  );
};

export default ProductCard;
