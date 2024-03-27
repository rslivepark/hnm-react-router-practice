import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/rslivepark/hnm-react-router-practice/products/${id}`;
    // let url = `http://localhost:3001/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ProductCard></ProductCard>
    </div>
  );
};

export default ProductAllPage;
