import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MagnifierPreview,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
import CaratSelector from './components/CaratSelector.jsx';
import CutSelector from './components/CutSelector.jsx';
import Description from './components/Description.jsx';

const ImageViewDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  min-width: 600px;
  height: 540px;
  min-height: 540px;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
`;

const Image = styled.div`
  display: block;
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageView = (props) => {
  const [imgSource, setImgSource] = useState('');
  const state = props.state;
  const set = props.set;

  const selectorRender = () => {
    if (state.selected === 0) {
      return (
        <Selectors>
          <Description state={state}/>
          <CutSelector set={set} state={state}/>
          <CaratSelector set={set}/>
        </Selectors>
      );
    } else {
      return null;
    }
  };

  const zoomRender = () => {
    if (imgSource.length > 0) {
      return (
        <Image>
          <SideBySideMagnifier
            style={{
              width: '400px',
              height: '400px',
              top: '0',
              position: 'absolute',
              'z-index': '1'
            }}
            magnifierSize='100px'
            imageSrc={imgSource}
            imageAlt='Setting Image'
            alwaysInPlace={true}
          />
        </Image>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (state.images) {
      setImgSource(state.images[state.selected]);
    }
  }, [state.images, state.selected]);

  return (
    <ImageViewDiv>
      {zoomRender()}
      {selectorRender()}
    </ImageViewDiv>
  );
};

export default ImageView;