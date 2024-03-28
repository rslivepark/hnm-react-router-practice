import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAllPage = () => {
	const [productList, setProductList] = useState([]);
	const getProducts = async () => {
		let url = `https://my-json-server.typicode.com/rslivepark/hnm-react-router-practice/products`;
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	};
	useEffect(() => {
		getProducts();
	}, []);
	return (
		<div>
			<Container>
				<Row>
					{productList.map((menu) => (
						<Col lg={3} key={menu.id}>
							{' '}
							{/* key 추가, 각 상품을 고유하게 식별하기 위함 */}
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAllPage;
