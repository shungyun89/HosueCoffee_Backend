import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../productdetail.css';
import ProductDetail from '../ProductDetail';
import Slider from "react-slick";
import './RecCard.css';




function RecCard(){
  // 向後端請求資料
  const [datas, setDatas ] = useState([])
  console.log('-------');
  console.log(datas);
   console.log('-------');
  const fetchData = async()=>{
    const response = await fetch('http://localhost:3001/shop');
    const results = await response.json();
    setDatas(results);
  }
  useEffect(()=>{
    fetchData();
  },[])

  
  // 輪播
  const [width, setWidth] = useState(750);
  const [display, setDisaplay] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  
  
  return(
    <>
     <div className="moreInfo ">
        <div className="Box">
          <div>
            <div
              style={{
                width: width + "px",
                display: display ? "block" : "none"
              }}
             >
             <div className="RText">推薦商品</div>
              <Slider {...settings}>
                      {datas.map((PCard,i)=>{
                        console.log(PCard.id);
                       const img1=(PCard.p_name);
                        return(
               
                        <div>
                             <div className="pCardWrap" key={PCard.id}>
                                <div className="card recCard">
                                   <div class="rPackage">
                                    <Link to= {`/shop/ProductDetail/${PCard.id}`}>
                                     <img class="card-img-top recImg" src={require('../img/'+img1+'.jpg')} alt=""></img>
                                     </Link>
                                    </div>
                                <div>
                                 <p>{PCard.p_name}</p>
                                 <p class="rCardPrice">${PCard.price}</p>
                             </div>
                        </div>
                       </div>
                        </div>
                        )
                      })}  
              </Slider>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
}

export default RecCard