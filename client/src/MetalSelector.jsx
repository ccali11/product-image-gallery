import React from 'react';
import styled from 'styled-components';

const MetalSelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 15px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

const SelectedMetal = styled.div`
  flex-basis: 100%;
  margin-bottom: 10px;
`

const MetalButton = styled.button`
  width: 60px;
  font-size: 18px;
  border: 1px solid black;
  margin-right: 10px;
`;

const MetalSelector = () => {
  return (
    <MetalSelectorDiv>
      <SelectedMetal>Metal Name</SelectedMetal>
      <MetalButton>14KR</MetalButton>
      <MetalButton>18KW</MetalButton>
      <MetalButton>18KY</MetalButton>
      <MetalButton>PT</MetalButton>
    </MetalSelectorDiv>
  );
}

export default MetalSelector;