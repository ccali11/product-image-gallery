import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from './Carousel/Carousel.jsx';
import ImageView from './ImageView/ImageView.jsx';
import ProductOptions from './ProductOptions/ProductOptions.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;

const Gallery = () => {
  const [pid, setPid] = useState(1);
  const [metal, setMetal] = useState('white');
  const [cut, setCut] = useState('asscher');
  const [carat, setCarat] = useState(150);
  const [thumbs, setThumbs] = useState(null);
  const [images, setImages] = useState();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3030/gallery/${pid}`)
      .then((defaults) => {
        setThumbs(defaults.data.thumbs);
        setImages(defaults.data.images);
      });
  }, [pid]);

  return(
    <Container>
      <GlobalStyle />
      <Carousel state={{ thumbs }} set={{ setSelected }}/>
      <ImageView state={{ carat, cut, metal, pid, selected, images }} set={{ setCut, setCarat }} />
      <ProductOptions state={{ metal, pid }} set={{ setMetal, setThumbs, setImages }} />
    </Container>
  );
}

export default Gallery;