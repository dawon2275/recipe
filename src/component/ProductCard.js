import React from 'react'
import { useNavigate } from 'react-router-dom'



const ProductCard = ({item}) => {
    /* const dataPrice = (item.price)
    const dataPrice2= dataPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") */
    //console.log(dataPrice2)

    const navigate = useNavigate();
    const showDetail =() => {
      navigate(`/product/${item.id}`)
    }
  return (
    

    <div className='product-list' onClick={showDetail} >
      <div className='product-img'><img src={item?.img} alt="" /></div>
      <div className='title'>{item?.title}</div>
      <div className='person'><img width={23} src={item?.person} alt="" /> </div>
      <div className='name'>{item?.name}</div>
      <div className='best'><img className='good' width={25} src={item?.good} alt="" /> </div>
    </div>
  )
}

export default ProductCard
