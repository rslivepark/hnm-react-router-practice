import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/rslivepark/hnm-react-router-practice/products`;
    // let url = `http://localhost:3001/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className='product-list-container'>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          className='product-card '
        ></ProductCard>
      ))}
    </div>
  );
};

export default ProductAllPage;
