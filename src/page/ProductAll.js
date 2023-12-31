import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        let url = 'http://localhost:5000/products'
        //getProducts함수를 통해서 API를  호출할 때에 쿼리에 있는 값을 넣어줌
        let searchQuery = query.get('q')||"";
        //console.log(searchQuery)
        //로컬에 설치된 json-server로 데이터를 불러와서 보여주는 주소
        //let url = `http://localhost:5000/products?q=${searchQuery}`

        //my-json-server에서 자료를 가져오기
        //let url = `https://my-json-server.typicode.com/dawon2275/recipe/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [query])

  return (
    <Container className='content'>
      <Row className='content-area'>
        {
            productList.map((menu, idx) => (
                <Col className='foodList' lg={3} key={idx}>
                    <ProductCard item={menu} className='food' />
                </Col>
            ))
        }
      </Row>
    </Container>
  )
}

export default ProductAll
