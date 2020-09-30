import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MetalSelector from './components/MetalSelector.jsx';
import Ratings from './components/Ratings.jsx';
import Cost from './components/Cost.jsx';
import axios from 'axios';

const ProductOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 500px;
  border: 1px solid black;
`;

const MetalName = styled.div`
  font-size: 12px;
  border: 1px solid black;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-size: 26px;
  border: 1px solid black;
  margin-bottom: 5px;
`;

const BuyButton = styled.button`
  color: white;
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid black;
  margin-bottom: 15px;
  background-color: #3e9f8e;
  transition: .5s;
  &:hover {
    background-color: #99c4b8;
    color: black;
  }
`;

const ChooseSetting = styled(BuyButton)`
`;

const AddToWishlist = styled(BuyButton)`
`;

const Heart = styled.span`
  font-size: 18px;
  margin-right: 5px;
  transition: .5s;
  ${AddToWishlist}:hover & {
    color: #c73c9b;
  }
`;

const ShippingBlurb = styled.div`
  border: 1px solid black;
  height: 80px;
  margin-bottom: 10px;
`;

const DropHint = styled.div`
  border: 1px solid black;
  height: 60px;
`;

const ProductOptions = (props) => {
  const [productData, setProductData] = useState({
    name: null,
    rating: 0,
    ratingcount: 0
  });

  const fullNames = {
    'yellow': 'Yellow Gold',
    'platinum': 'Platinum',
    'rose': 'Rose Gold',
    'white': 'White Gold'
  };

  useEffect(() => {
    axios.get(`http://localhost:3030/static/${props.state.pid}`)
      .then((results) => {
        setProductData({
          name: results.data.name,
          rating: results.data.rating,
          ratingcount: results.data.ratingcount
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }, [props.state.pid])

  return (
    <ProductOptionsDiv>
        <MetalName>{fullNames[props.state.metal]}</MetalName>
        <Name>{productData.name} Diamond Engagement Ring</Name>
        <Ratings productData={productData}/>
        <Cost state={props.state}/>
        <MetalSelector set={props.set} state={props.state}/>
        <ChooseSetting>CHOOSE THIS SETTING</ChooseSetting>
        <AddToWishlist><Heart>❤</Heart> WISH LIST</AddToWishlist>
        <ShippingBlurb>Shipping blurb here</ShippingBlurb>
        <DropHint>Drop Hint</DropHint>
      </ProductOptionsDiv>
  );
};

export default ProductOptions;