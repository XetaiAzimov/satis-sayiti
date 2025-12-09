import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Base_URL } from "../data/Data";

function CardDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios(`${Base_URL}/${id}`).then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    // <div className='card' onClick={()=> navigate(`/products/${products.id}`)}>
    // </div>
    <div className="container">
      <div className="carddetail">
        <div className="cardimage">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="cardtitle">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
