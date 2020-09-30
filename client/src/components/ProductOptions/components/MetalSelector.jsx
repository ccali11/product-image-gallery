import React, { useState } from 'react';
import styled from 'styled-components';

const MetalSelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 15px;
  margin-bottom: 15px;
`;

const SelectedMetal = styled.div`
  flex-basis: 100%;
  margin-bottom: 10px;
`

const MetalButton = styled.button`
  color: black;
  width: 65px;
  height: 30px;
  font-size: 18px;
  border: 0px;
  margin-right: 10px;
  &:hover {
    border: 1px solid #3e9f8e;
  }
`;

const RoseButton = styled(MetalButton)`
  background-color: #f0bd9e;
`;

const WhiteButton = styled(MetalButton)`
  background-color: #dedede;
`;

const YellowButton = styled(MetalButton)`
  background-color: #efd9a7;
`;

const PlatinumButton = styled(MetalButton)`
  background-color: #bdbdbd;
`;

const MetalSelector = (props) => {
  const fullNames = {
    'yellow': 'Yellow Gold',
    'platinum': 'Platinum',
    'rose': 'Rose Gold',
    'white': 'White Gold'
  };

  const clickHandler = {
    rose: () => { props.set.setMetal('rose') },
    white: () => { props.set.setMetal('white') },
    yellow: () => { props.set.setMetal('yellow') },
    platinum: () => {props.set.setMetal('platinum') }
  }

  return (
    <MetalSelectorDiv>
      <SelectedMetal>Metal: {fullNames[props.state.metal]}</SelectedMetal>
      <RoseButton onClick={clickHandler.rose}>14KR</RoseButton>
      <WhiteButton onClick={clickHandler.white}>18KW</WhiteButton>
      <YellowButton onClick={clickHandler.yellow}>18KY</YellowButton>
      <PlatinumButton onClick={clickHandler.platinum}>PT</PlatinumButton>
    </MetalSelectorDiv>
  );
}

export default MetalSelector;