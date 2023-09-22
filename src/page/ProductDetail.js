import { Row, Col, Button} from 'react-bootstrap';
import '../App.css'
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const ProductDetail = () => { 

  const { id } = useParams();
  const [products, setProducts] = useState(null);
    const getProductsDetail = async() => {
        let url = `http://localhost:5000/products/${id}`
        //let url = `https://my-json-server.typicode.com/dawon2275/recipe/products/${id}`
        
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
      getProductsDetail()
    }, [])


  return (
    <>
      <Row className='product-detail'>
        <Col className='productDetail-img'>
          <img className='Food-img' src={products?.img} alt='' />
        </Col>
        <Col className="detail-info">
          <div className="title">{products?.title}</div>
          <div className="info">{products?.content}</div>
 

          <Form.Select>
            <option>용량</option>
            <option value="1">200g</option>
            <option value="2">400g</option>
          </Form.Select>

          <Button variant="dark">Dark</Button>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail
