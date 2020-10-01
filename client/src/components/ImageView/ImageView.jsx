import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const DropdownDiv = styled.div`
  position:relative;
  display: inline-block;
`;

const CutSelector = styled.button`
  position: relative;
  display: flex;
  height: 35px;
  width: 100%;
  border: 1px solid lightgrey;
  justify-content: center;
  align-items: center;
`;

const CutMenu = styled.div`
  display: none;
  position: absolute;
  top: -180px;
  border: 1px solid lightgrey;
  background-color: white;
  z-index: 1;
  min-width: 100%;
  ${DropdownDiv}:hover & {
    display: block;
  }
`;

const CutDiv = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: lightgrey;
  }
`;

const CaratSelector = styled.div`
  height: 40px;
  border: 1px solid black;
`;


const cuts = [
  'Asscher',
  'Emerald',
  'Oval',
  'Pear',
  'Princess',
  'Round'
];
const ImageView = (props) => {
  const [imgSource, setImgSource] = useState('');
  const state = props.state;
  const set = props.set;

  const capFirst = (string) => {
    const firstCap = string.charAt(0).toUpperCase();
    const final = firstCap + string.slice(-(string.length - 1));
    return final;
  }

  const clickHandler = {
    Asscher: () => { set.setCut('asscher') },
    Emerald: () => { set.setCut('emerald') },
    Oval: () => { set.setCut('oval') },
    Pear: () => { set.setCut('pear') },
    Princess: () => { set.setCut('princess') },
    Round: () => { set.setCut('round') }
  };

  useEffect(() => {
    if (state.images) {
      setImgSource(state.images[state.selected]);
    }
  }, [state.images, state.selected]);

  return (
    <ImageViewDiv>
      <Image src={imgSource} />
      <Description>Description</Description>
      <DropdownDiv>
        <CutMenu>
          <CutDiv onClick={clickHandler[cuts[0]]}>{cuts[0]}</CutDiv>
          <CutDiv onClick={clickHandler[cuts[1]]}>{cuts[1]}</CutDiv>
          <CutDiv onClick={clickHandler[cuts[2]]}>{cuts[2]}</CutDiv>
          <CutDiv onClick={clickHandler[cuts[3]]}>{cuts[3]}</CutDiv>
          <CutDiv onClick={clickHandler[cuts[4]]}>{cuts[4]}</CutDiv>
          <CutDiv onClick={clickHandler[cuts[5]]}>{cuts[5]}</CutDiv>
        </CutMenu>
        <CutSelector>
          View with: {capFirst(state.cut)}
        </CutSelector>
      </DropdownDiv>
      <CaratSelector>CaratSelector</CaratSelector>
    </ImageViewDiv>
  );
};

export default ImageView;