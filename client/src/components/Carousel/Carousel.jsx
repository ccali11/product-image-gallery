import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Thumb from './components/Thumb.jsx';
import ScrollContainer from 'react-indiana-drag-scroll';

const CarouselDiv = styled(ScrollContainer)`
  direction: rtl;
  display: flex;
  overflow: auto;
  height: 500px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 110px;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: lightgrey;
  }
  &::-webkit-scrollbar {
    width: 2px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #3e9f8e;
  }
`;

const renderThumbs = (thumbs, selected) => {
  if (thumbs) {
    return thumbs.map((url, index) => (
        <Thumb
          source={url}
          selected={(index === selected) ? true : false}
          key={index} />
    ));
  } else {
    return null;
  }
};

const Carousel = (props) => {
  const [thumbs, setThumbs] = useState(null);

  useEffect(() => {
    setThumbs(props.state.thumbs);
  }, [props.state.thumbs]);

  return (
    <CarouselDiv onClick={e => props.set.setSelected((thumbs.indexOf(e.target.src) !== -1) ? thumbs.indexOf(e.target.src) : props.state.selected)} hideScrollbars={false}>
      {renderThumbs(thumbs, props.state.selected)}
    </CarouselDiv>
  );
}

export default Carousel;