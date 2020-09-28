import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  justify-content: space-between;
  `;

////////// CAROUSEL

const Carousel = styled.div`
  display: flex;
  border: 1px solid black;
  overflow-y: scroll;
  height: 80vh;
  flex-direction: column;
  min-width: 120px;
`;

const Thumb = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  font-size: 100px;
`;

////////// IMAGE VIEW

const ImageView = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 550px;
  min-height: 600px;
  border: 1px solid black;
  width: 40vw;
  height: 80vh;
  justify-content: space-around;
  overflow: auto;
`;

const Image = styled.div`
border: 1px solid black;
height: 500px;
width: 500px;
align-self: center;
`;

const ProductOptions = styled.div`
  width: 40vw;
  min-width: 40vw;
  border: 1px solid black;
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
  width: 40vw;
  min-width: 40vw;
  border: 1px solid black;
`;

const Gallery = () => {
  return(
    <Container>
      <Carousel>
        <Thumb>1</Thumb>
        <Thumb>2</Thumb>
        <Thumb>3</Thumb>
        <Thumb>4</Thumb>
        <Thumb>5</Thumb>
        <Thumb>6</Thumb>
        <Thumb>7</Thumb>
        <Thumb>8</Thumb>
        <Thumb>9</Thumb>
        <Thumb>10</Thumb>
      </Carousel>
      <ImageView>
        Image View
        <Image>Image</Image>
        <Description>Description</Description>
        <CutSelector>CutSelector</CutSelector>
        <CaratSelector>CaratSelector</CaratSelector>
      </ImageView>
      <ProductOptions>
        <h1>
          ProductOptions
        </h1>
      </ProductOptions>
    </Container>
  );
}

export default Gallery;