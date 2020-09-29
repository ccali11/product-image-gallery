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
  color: black;
  width: 60px;
  font-size: 18px;
  border: 1px solid black;
  margin-right: 10px;
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

const MetalSelector = () => {
  return (
    <MetalSelectorDiv>
      <SelectedMetal>Metal Name</SelectedMetal>
      <RoseButton>14KR</RoseButton>
      <WhiteButton>18KW</WhiteButton>
      <YellowButton>18KY</YellowButton>
      <PlatinumButton>PT</PlatinumButton>
    </MetalSelectorDiv>
  );
}

export default MetalSelector;