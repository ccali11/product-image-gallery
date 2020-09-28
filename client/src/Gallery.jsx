import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import ImageView from './ImageView.jsx';
import ProductOptions from './ProductOptions.jsx';

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: row;
  justify-content: center;
  `;

const Gallery = () => {
  return(
    <Container>
      <Carousel />
      <ImageView />
      <ProductOptions />
    </Container>
  );
}

export default Gallery;