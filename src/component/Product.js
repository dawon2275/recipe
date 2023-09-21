import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
    const navigate = useNavigate();
     const showDetail = () => {
      navigate(`/product/${item.id}`)
   } 
  return (
    <div>
      <div className='content'>
          <div className="foodArea">
            <Link to="/">레시피</Link>
            <Link to="/cart">검색어</Link>
            <Link to="/event">쉐프</Link>
          </div>

          <div className='product-list' onClick={showDetail}>
            <div className="product-img"><img src={item?.img} alt="" /></div>
            <div className="choice">{item?.choice===true?'Conscious Choice':''}</div>
            <div className="title">{item?.title}</div>
            <div className="price">{item?.price}</div>
            <div className="new">{item?.new===true?'[신상품]':''}</div>      
        </div>


      </div>
    </div>
  )
}

export default Product
