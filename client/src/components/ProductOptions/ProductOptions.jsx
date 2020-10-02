import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cost from './components/Cost.jsx';
import DropHint from './components/DropHint.jsx';
import MetalSelector from './components/MetalSelector.jsx';
import Ratings from './components/Ratings.jsx';
import ShippingBlurb from './components/ShippingBlurb.jsx';
import axios from 'axios';

const ProductOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 500px;
`;

const MetalName = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-size: 26px;
  margin-bottom: 5px;
`;

const BuyButton = styled.button`
  color: white;
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  border: 0px;
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
  font-size: 15px;
  margin-right: 5px;
  transition: .5s;
  ${AddToWishlist}:hover & {
    color: #c73c9b;
  }
  color: ${props => (props.selected ? '#c73c9b': '#FFFFFF')};
`;

////////// Product Options Functional Component

const ProductOptions = (props) => {
  const [wishClick, setWishClick] = useState(false);
  const productData = props.state.productData;

  const fullNames = {
    'yellow': 'Yellow Gold',
    'platinum': 'Platinum',
    'rose': 'Rose Gold',
    'white': 'White Gold'
  };

  return (
    <ProductOptionsDiv>
        <MetalName>{fullNames[props.state.metal]}</MetalName>
        <Name>{productData.name} Diamond Engagement Ring</Name>
        <Ratings productData={productData}/>
        <Cost state={props.state}/>
        <MetalSelector set={props.set} state={props.state}/>
        <ChooseSetting>CHOOSE THIS SETTING</ChooseSetting>
        <AddToWishlist selected={wishClick} onClick={e => setWishClick(!wishClick)}><Heart selected={wishClick}>❤</Heart> WISH LIST</AddToWishlist>
        <ShippingBlurb />
        <DropHint />
      </ProductOptionsDiv>
  );
};

export default ProductOptions;