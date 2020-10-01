import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CutSelector from './components/CutSelector.jsx';

const ImageViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  justify-content: flex-end;
  overflow: hidden;
  margin-left: 40px;
  margin-right: 40px;
`;

const Image = styled.img`
  border: 0;
  width: 400px;
  align-self: center;
`;

const Description = styled.div`
  height: 20px;
  border: 1px solid black;
`;

const CaratSelector = styled.div`
  height: 40px;
  border: 1px solid black;
`;

const ImageView = (props) => {
  const [imgSource, setImgSource] = useState('');
  const state = props.state;
  const set = props.set;


  useEffect(() => {
    if (state.images) {
      setImgSource(state.images[state.selected]);
    }
  }, [state.images, state.selected]);

  return (
    <ImageViewDiv>
      <Image src={imgSource} />
      <Description>Description</Description>
      <CutSelector set={set} state={state}/>
      <CaratSelector>CaratSelector</CaratSelector>
    </ImageViewDiv>
  );
};

export default ImageView;