import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
// import ImageView from './ImageView.jsx';
// import ProductOptions from './ProductOptions.jsx';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  justify-content: center;
  `;

////////// IMAGE VIEW

const ImageView = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40vw;
  min-height: px;
  border: 1px solid black;
  justify-content: space-around;
  overflow: auto;
  margin-left: 40px;
  margin-right: 40px;
`;

const Image = styled.div`
border: 1px solid black;
height: 500px;
width: 500px;
align-self: center;
`;

const Description = styled.div`
  height: 20px;
  border: 1px solid black;
`;

const CutSelector = styled.div`
  height: 40px;
  border: 1px solid black;
`;

const CaratSelector = styled.div`
  height: 40px;
  border: 1px solid black;
`;

////////// PRODUCT OPTIONS

const ProductOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 25vw;
  width: 25vw;
  height: 60vh;
  min-heigh: 60vh;
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

const MetalSelector = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 15px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

const SelectedMetal = styled.div`
  flex-basis: 100%;
  margin-bottom: 10px;
`

const MetalButton = styled.button`
  width: 60px;
  font-size: 18px;
  border: 1px solid black;
  margin-right: 10px;
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

const Gallery = () => {
  return(
    <Container>
      <Carousel />
      <ImageView>
        Image View
        <Image>Image</Image>
        <Description>Description</Description>
        <CutSelector>CutSelector</CutSelector>
        <CaratSelector>CaratSelector</CaratSelector>
      </ImageView>
      <ProductOptions>
        <MetalName>Metal Name</MetalName>
        <Name>Product Name</Name>
        <Rating>Star rating / rating count</Rating>
        <Cost>
          Cost
          <SettingOnly>
            (setting only)
          </SettingOnly>
        </Cost>
        <MetalSelector>
          <SelectedMetal>Metal Name</SelectedMetal>
          <MetalButton>14KR</MetalButton>
          <MetalButton>18KW</MetalButton>
          <MetalButton>18KY</MetalButton>
          <MetalButton>PT</MetalButton>
        </MetalSelector>
        <ChooseSetting>CHOOSE THIS SETTING</ChooseSetting>
        <AddToWishlist>❤ WISH LIST</AddToWishlist>
        <ShippingBlurb>Shipping blurb here</ShippingBlurb>
        <DropHint>Drop Hint</DropHint>
      </ProductOptions>
    </Container>
  );
}

export default Gallery;