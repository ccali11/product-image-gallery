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
  const [pid, setPid] = useState(window.location.pathname.slice(1));
  const [metal, setMetal] = useState('white');
  const [cut, setCut] = useState('asscher');
  const [carat, setCarat] = useState(150);
  const [thumbs, setThumbs] = useState(null);
  const [images, setImages] = useState();
  const [selected, setSelected] = useState(0);
  const [productData, setProductData] = useState({
    name: null,
    rating: 0,
    ratingcount: 0
  });

  useEffect(() => {
    const pathname = window.location.pathname.slice(1);
    if (pathname) { return setPid(window.location.pathname.slice(1)) }
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3030/gallery/${pid}/${metal}/${cut}/${carat}`)
      .then((defaults) => {
        setThumbs(defaults.data.thumbs);
        setImages(defaults.data.images);
      });
  }, [pid, metal, cut, carat]);

  useEffect(() => {
    axios.get(`http://localhost:3030/static/${pid}`)
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
  }, [pid]);

  return(
    <Container>
      <GlobalStyle />
      <Carousel state={{ thumbs, selected }} set={{ setSelected }}/>
      <ImageView state={{ carat, cut, metal, pid, selected, images, thumbs, productData }} set={{ setCut, setCarat, setThumbs }} />
      <ProductOptions state={{ metal, pid, productData }} set={{ setMetal, setThumbs, setImages }} />
    </Container>
  );
}

export default Gallery;