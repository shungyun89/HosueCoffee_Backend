import React from 'react';
import { useState, useEffect } from 'react';

import StoreCard from "./StoreCard"
import StoreCardDetail from './StoreCardDetail';


function StoreCardWrap(props){

  const { data, setCenter, setZoom } = props;
  const [ detailIndex, setDetailIndex ] = useState(2);
  const dataDetail = data[detailIndex];

  // 開啟詳細選單(透過StoreCard傳送className)
  const [cardDetailCss, setCardDetailCss] = useState();

  return(
    <div className="cardGroupWrap">

      <StoreCardDetail
        dataDetail={dataDetail}
        cardDetailCss={cardDetailCss}
        setCardDetailCss={setCardDetailCss}
      />

      <StoreCard
        data={data}
        setCenter={setCenter}
        setZoom={setZoom}
        setDetailIndex={setDetailIndex}
        setCardDetailCss={setCardDetailCss}
      />
      
    </div>
  )
}

export default StoreCardWrap