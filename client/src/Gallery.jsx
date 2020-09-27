import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  justify-content: space-between;
  `;

const Carousel = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
`;

const Thumb = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  font-size: 100px;
`;

const ImageView = styled.div`
  border: 1px solid black;
  width: 40vw;
  height: 80vh;
`;

const ProductOptions = styled.div`
  width: 40vw;
  border: 1px solid black;
`;

const Gallery = () => {
  return(
    <Container>
      <Carousel>
        <Thumb>1</Thumb>
        <Thumb>2</Thumb>
        <Thumb>3</Thumb>
      </Carousel>
      <ImageView>
        <h1>
          ImageView
        </h1>
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