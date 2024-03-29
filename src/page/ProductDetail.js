import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/rslivepark/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
		<Container>
			<Row>
				<Col className="product-img">
					<img src={product?.img}></img>
				</Col>
				<Col>
					<div className="product-name">{product?.title}</div>
					<div className="product-price">{product?.price}</div>
					<div className="product-choice">
						{product?.choice == true ? 'Concioust choice' : ''}
					</div>
					<Form.Select
						aria-label="Default select example"
						className="product-size"
					>
						<option>사이즈</option>
						<option value={product?.size[0]}>S</option>
						<option value={product?.size[1]}>M</option>
						<option value={product?.size[2]}>L</option>
					</Form.Select>
					<Button class="btn btn-outline-primary btn-lg w-100" className='product-btn'>추가</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetail;
