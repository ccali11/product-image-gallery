import React from 'react';
import styled from 'styled-components';

const ImageViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  border: 1px solid black;
  justify-content: flex-end;
  overflow: auto;
  margin-left: 40px;
  margin-right: 40px;
`;

const Image = styled.div`
border: 1px solid black;
height: 400px;
width: 400px;
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

const ImageView = () => {
  return (
    <ImageViewDiv>
      Image View
      <Image>Image</Image>
      <Description>Description</Description>
      <CutSelector>CutSelector</CutSelector>
      <CaratSelector>CaratSelector</CaratSelector>
    </ImageViewDiv>
  );
};

export default ImageView;