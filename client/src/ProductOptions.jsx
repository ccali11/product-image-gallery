import React from 'react';
import styled from 'styled-components';
import MetalSelector from './MetalSelector.jsx';

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

const Rating = styled.div`
  border: 1px solid black;
  margin-bottom: 25px;
`;

const Cost = styled.div`
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 25px;
`;

const SettingOnly = styled.span`
  font-size: 10px;
  border: 1px solid black;
  margin-left: 20px;
`;

const ChooseSetting = styled.button`
  width: 100%;
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

const AddToWishlist = styled.button`
  width: 100%;
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 25px;
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

const ProductOptions = () => {
  return (
    <ProductOptionsDiv>
        <MetalName>Metal Name</MetalName>
        <Name>Product Name</Name>
        <Rating>Star rating / rating count</Rating>
        <Cost>
          Cost
          <SettingOnly>
            (setting only)
          </SettingOnly>
        </Cost>
        <MetalSelector />
        <ChooseSetting>CHOOSE THIS SETTING</ChooseSetting>
        <AddToWishlist>❤ WISH LIST</AddToWishlist>
        <ShippingBlurb>Shipping blurb here</ShippingBlurb>
        <DropHint>Drop Hint</DropHint>
      </ProductOptionsDiv>
  );
};

export default ProductOptions;