import React from 'react';
import styled from 'styled-components';

const CarouselDiv = styled.div`
  display: flex;
  border: 1px solid black;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 500px;
  flex-direction: column;
  width: 110px;
`;

const Thumb = styled.button`
  border: 1px solid black;
  width: 80px;
  height: 80px;
  font-size: 60px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
`;

const Carousel = () => {
  return (
    <CarouselDiv>
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
    </CarouselDiv>
  );
}

export default Carousel;