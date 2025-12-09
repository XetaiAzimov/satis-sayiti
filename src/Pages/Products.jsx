import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Base_URL } from '../data/Data';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
 function Products() {
  const [product,setProduct] =useState([Base_URL]);
  useEffect(()=>{
    axios(`${Base_URL}`).then((res)=>{
      setProduct(res.data);
    })
  },[])
    const navigate = useNavigate()

  return (
    <div className="container">
          <div className='products'>
      {
        product.map((item)=>(
          <Card  onClick={()=>navigate(`/products/${item.id}`)} key={item.id} title={item.title} price={item.price} image={item.image}/>
        ))
      }
    </div>

    </div>
  )
}

export default Products;